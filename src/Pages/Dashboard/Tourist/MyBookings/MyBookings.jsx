import Swal from "sweetalert2";
import UseAxiosSecure from "../../../../Hooks/UseAxiosSecure";

import { FaPaypal, FaTrash } from "react-icons/fa";
import { Link, useLoaderData } from "react-router-dom";
import { useEffect, useState } from "react";
import "./MyBookings.css";
import useAuthHook from "../../../../Hooks/UseAuth";
import { useQuery } from "@tanstack/react-query";

const MyBookings = () => {
  const { user } = useAuthHook();
  // const [booking, setBooking] = useState([]);
  // const totalPrice = booking.reduce((total, item) => total + item.price, 0);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(0);
  const axiosSecure = UseAxiosSecure();
  const { count } = useLoaderData();

  // useEffect(() => {
  // fetch(
  //   `${import.meta.env.VITE_API_URL}/bookings?email=${
  //     user.email
  //   }&page=${currentPage}&size=${itemsPerPage}`
  // )
  //   .then((res) => res.json())

  const { data: booking = [], refetch } = useQuery({
    queryKey: ["bookings"],
    queryFn: async () => {
      const res = await axiosSecure.get(
        `/bookings/?email=${user.email}&page=${currentPage}&size=${itemsPerPage}`
      );
      return res.data;
    },
  });
  // axiosSecure
  //   .get(
  //     `/bookings/?email=${user.email}&page=${currentPage}&size=${itemsPerPage}`
  //   )
  //   .then((res) => setBooking(res.data));
  const numberOfPages = Math.ceil(count / itemsPerPage);

  const pages = [...Array(numberOfPages).keys()];

  console.log("pages of bookings page", pages);

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
            Swal.fire({
              title: "Canceled!",
              text: "Your booking has been canceled.",
              icon: "success",
            });
          }
        });
        // const remaining = booking.filter((item) => item._id !== id);
        // setBooking(remaining);
        refetch();
      }
    });
  };

  const handleItemsPerPage = (e) => {
    const val = parseInt(e.target.value);
    console.log(val);
    setItemsPerPage(val);
    setCurrentPage(0);
  };

  const handlePreviousPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };
  const handleNextPage = () => {
    if (currentPage < pages.length) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div>
      <div className=''>
        <h2 className='text-3xl text-center mb-16 bg-[#ffcc05] p-2'>
          My Bookings
        </h2>
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
                    <Link to='/dashboard/payment'>
                      <button className='btn btn-ghost'>
                        <FaPaypal className='text-red-600 text-lg'>
                          Pay
                        </FaPaypal>
                      </button>
                    </Link>
                  ) : (
                    ""
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className='pagination'>
        <button onClick={handlePreviousPage}>Previous</button>
        {pages.map((page) => (
          <button
            onClick={() => setCurrentPage(page)}
            className={currentPage === page ? "selected" : ""}
            key={page}
          >
            {page}
          </button>
        ))}
        <button onClick={handleNextPage}>Next</button>
        <select
          value={itemsPerPage}
          onChange={handleItemsPerPage}
          id=''
          name=''
        >
          <option value='5'>5</option>
          <option value='10'>10</option>
        </select>
      </div>
    </div>
  );
};

export default MyBookings;
