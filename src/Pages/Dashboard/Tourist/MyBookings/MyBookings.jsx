import { FaTrash } from "react-icons/fa";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../../Hooks/UseAxiosSecure";

import useAuthHook from "../../../../Hooks/UseAuth";
import UseBooking from "../../../../Hooks/UseBooking";

const MyBookings = () => {
  const { user } = useAuthHook();
  const [booking] = UseBooking();
  const totalPrice = booking.reduce((total, item) => total + item.price, 0);
  // const axiosSecure = useAxiosSecure();
  const isInReview = false;
  const isAccepted = false;

  // const handleDelete = (id) => {
  //   Swal.fire({
  //     title: "Are you sure?",
  //     text: "You won't be able to revert this!",
  //     icon: "warning",
  //     showCancelButton: true,
  //     confirmButtonColor: "#3085d6",
  //     cancelButtonColor: "#d33",
  //     confirmButtonText: "Yes, delete it!",
  //   }).then((result) => {
  //     if (result.isConfirmed) {
  //       axiosSecure.delete(`/bookings/${id}`).then((res) => {
  //         if (res.data.deletedCount > 0) {
  //           refetch();
  //           Swal.fire({
  //             title: "Deleted!",
  //             text: "Your item has been deleted.",
  //             icon: "success",
  //           });
  //         }
  //       });
  //     }
  //   });
  // };

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
                  {isInReview ? <p>In Review</p> : <p>Accepted/Rejected</p>}
                </td>
                <td>
                  {isAccepted ? (
                    <button className='btn btn-outline rounded-none'>
                      Cancel Booking
                    </button>
                  ) : (
                    <button className='btn btn-outline rounded-none'>
                      Pay
                    </button>
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

export default MyBookings;
