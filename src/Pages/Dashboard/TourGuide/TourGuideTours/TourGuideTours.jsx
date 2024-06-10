import Swal from "sweetalert2";
import UseAxiosSecure from "../../../../Hooks/UseAxiosSecure";

import UseBookingReview from "../../../../Hooks/UseBookingReview";
import { useEffect, useState } from "react";

import { useLoaderData } from "react-router-dom";
import SectionTitle from "../../../../Components/SectionTitle/SectionTitle";

const TourGuideTours = () => {
  // const [isAccepted, setIsAccepted] = useState(false);
  // const [isUnderReview, setIsUnderReview] = useState(true);
  const [review, refetch] = UseBookingReview();
  const [bookings, setBookings] = useState(review);
  const { count } = useLoaderData();

  const itemsPerPage = 10;
  const numberOfPages = Math.ceil(count / itemsPerPage);

  const pages = [];
  for (let i = 0; i < numberOfPages; i++) {
    pages.push(i);
  }
  console.log("pages", pages);

  useEffect(() => {
    setBookings(review);
  }, [review]);

  // const totalPrice = cart.reduce((total, item) => total + item.price, 0);
  const axiosSecure = UseAxiosSecure();

  const handleReject = (id) => {
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
          status: "rejected",
        };
        axiosSecure.patch(`/bookings/${id}`, reviewStatus).then((res) => {
          if (res.data.modifiedCount > 0) {
            refetch();
            Swal.fire({
              title: "Deleted!",
              text: "Your item has been deleted.",
              icon: "success",
            });
          }

          refetch();
        });
      }
    });
  };

  const handleAccept = (id) => {
    const reviewStatus = {
      status: "accepted",
    };
    axiosSecure.patch(`/bookings/${id}`, reviewStatus).then((res) => {
      if (res.data.modifiedCount > 0) {
        Swal.fire({
          position: "center",
          icon: "success",
          title: 'status has been updated to "Accepted',
          showConfirmButton: false,
          timer: 2500,
        });
        // refetch the cart to update the cart items count
      }

      refetch();
    });
  };

  return (
    <div>
      <div className='flex justify-evenly'>
        {/* <h2 className='text-4xl'>Items: {bookings.length}</h2> */}
        {/* <h2 className='text-4xl'>Total Price: {totalPrice}</h2> */}
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
        <h2 className='text-3xl text-center mb-16 bg-[#ffcc05] p-2'>
          My Bookings To Review
        </h2>
        <table className='table w-full'>
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Trip Title</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {bookings.map((item, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{item.tripTitle}</td>
                <td>${item.price}</td>
                <td>
                  {/* {isAccepted ? (
                    <button disabled>Accepted</button>
                  ) : (
                    <button disabled>Rejected</button>
                  )} */}
                  {item.status}
                </td>
                <td>
                  {item.status === "review" ? (
                    <div className='flex gap-3'>
                      <button
                        onClick={() => handleAccept(item._id)}
                        className='btn btn-outline rounded-none'
                      >
                        Accept
                      </button>
                      <div>
                        <button
                          onClick={() => handleReject(item._id)}
                          className='btn btn-outline rounded-none'
                        >
                          Reject
                        </button>
                      </div>
                    </div>
                  ) : (
                    ""
                  )}
                </td>

                <td>
                  {/* <button
                    onClick={() => handleDelete(item._id)}
                    className='btn btn-ghost'
                  >
                    <FaTrash className='text-red-600 text-lg'></FaTrash>
                  </button> */}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TourGuideTours;
