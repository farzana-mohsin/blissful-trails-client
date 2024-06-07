import Swal from "sweetalert2";
import useAxiosSecure from "../../../../Hooks/UseAxiosSecure";
import UseBooking from "../../../../Hooks/UseBooking";
import { FaPaypal, FaTrash } from "react-icons/fa";

const MyBookings = () => {
  const [booking, refetch] = UseBooking();
  const totalPrice = booking.reduce((total, item) => total + item.price, 0);
  const axiosSecure = useAxiosSecure();
  // const isInReview = false;
  // const isAccepted = true;

  const handleCancelBooking = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        const reviewStatus = {
          status: "canceled",
        };
        axiosSecure.patch(`/bookings/${id}`, reviewStatus).then((res) => {
          if (res.data.modifiedCount > 0) {
            refetch();
            Swal.fire({
              title: "Canceled!",
              text: "Your booking has been canceled.",
              icon: "success",
            });
          }
        });
      }
    });
  };

  const handlePayment = () => {};

  return (
    <div>
      <div className='flex justify-evenly'>
        <h2 className='text-4xl'>Items: {booking.length}</h2>
        <h2 className='text-4xl'>Total Price: ${totalPrice}</h2>
        {/* {wishlist.length ? (
          <>
            <Link to='/dashboard/payment'>
              <button className='btn btn-outline'>Pay</button>
            </Link>
          </>
        ) : (
          <>
            <button
              disabled
              className='btn btn-outline'
            >
              Pay
            </button>
          </>
        )} */}
      </div>
      <div className='overflow-x-auto'>
        <h1>My Bookings</h1>
        <table className='table w-full'>
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Trip Title</th>
              <th>Price</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {booking.map((item, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{item.tripTitle}</td>
                <td>${item.price}</td>

                <td>
                  {item.status === "review" ? (
                    <p>Under Review</p>
                  ) : item.status === "accepted" ? (
                    <p>Accepted</p>
                  ) : (
                    <p>Rejected</p>
                  )}
                </td>

                <td>
                  {item.status === "review" ? (
                    <button
                      onClick={() => handleCancelBooking(item._id)}
                      className='btn btn-ghost'
                    >
                      <FaTrash className='text-red-600 text-lg'></FaTrash>
                    </button>
                  ) : item.status === "accepted" ? (
                    <button
                      onClick={() => handlePayment(item._id)}
                      className='btn btn-ghost'
                    >
                      <FaPaypal className='text-red-600 text-lg'>Pay</FaPaypal>
                    </button>
                  ) : (
                    ""
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyBookings;
