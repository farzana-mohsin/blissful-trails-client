import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import UseAxiosSecure from "../../Hooks/UseAxiosSecure";
import UseBooking from "../../Hooks/UseBooking";
import useAuthHook from "../../Hooks/UseAuth";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const CheckoutForm = () => {
  const { user } = useAuthHook();
  const [error, setError] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const [transactionId, setTransactionId] = useState("");
  const stripe = useStripe();
  const elements = useElements();
  const axiosSecure = UseAxiosSecure();
  const [booking] = UseBooking();
  const totalPrice = booking.reduce((total, item) => total + item.price, 0);

  useEffect(() => {
    axiosSecure
      .post("/create-payment-intent", {
        price: totalPrice,
      })
      .then((res) => {
        console.log(res.data.clientSecret);
        setClientSecret(res.data.clientSecret);
      });
  }, [axiosSecure, totalPrice]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);
    if (card === null) {
      return;
    }
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card", // type of payment is card
      card, // card data received
    });

    if (error) {
      console.log("[error]", error);
      setError(error.message);
    } else {
      console.log("[PaymentMethod]", paymentMethod);
      setError("");
    }
    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: user?.displayName || "anonymous",
            email: user?.email || "anonymous",
          },
        },
      });
    if (confirmError) {
      console.log("confirmError", confirmError);
    } else {
      console.log("paymentIntent", paymentIntent);
      if (paymentIntent.status === "succeeded") {
        console.log("transaction id", paymentIntent.id);
        setTransactionId(paymentIntent.id);
      }
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <button
          className='btn rounded-none btn-outline my-5'
          type='submit'
          disabled={!stripe}
        >
          Pay
        </button>
        <p className='text-red-600'>{error}</p>
        <p className='text-green-600'>{transactionId}</p>
      </form>
    </div>
  );
};

export default CheckoutForm;
