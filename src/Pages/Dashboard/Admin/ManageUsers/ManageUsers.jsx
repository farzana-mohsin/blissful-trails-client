import { useEffect, useState } from "react";
import UseAxiosSecure from "../../../../Hooks/UseAxiosSecure";
import Swal from "sweetalert2";
// import { useMutation } from '@tanstack/react-query'

const ManageUsers = () => {
  const axiosSecure = UseAxiosSecure();
  const [pendingRequests, setPendingRequests] = useState([]);
  const token = localStorage.getItem("token");

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/pending-requests`)
      .then((res) => res.json())
      .then((data) => setPendingRequests(data));
  }, [token]);

  const handleMakeAdmin = (email) => {
    const makeAdmin = {
      role: "admin",
      status: "complete",
    };

    //   axiosSecure
    //     .patch(`pending-requests?email=${email}`, makeAdmin)
    //     .then((res) => {
    //       if (res.data.modifiedCount > 0) {
    //         Swal.fire({
    //           position: "center",
    //           icon: "success",
    //           title: `The status has been updated to Admin`,
    //           showConfirmButton: false,
    //           timer: 2500,
    //         });

    //         const remainingPendingRequests = pendingRequests.filter(
    //           (request) => request.email !== email
    //         );
    //         setPendingRequests(remainingPendingRequests);
    //       }
    //     });
  };

  // tanstack

  // const { mutateAsync } = useMutation({
  //   mutationFn: async makeAdmin => {
  //     const { data } = await axiosSecure.patch(
  //       `pending-requests?email=${email}`, makeAdmin
  //     )
  //     return data
  //   },
  //   onSuccess: data => {
  //     refetch()
  //     Swal.fire({
  //       position: "center",
  //       icon: "success",
  //       title: `The status has been updated to Admin`,
  //       showConfirmButton: false,
  //       timer: 2500,
  //     });
  //   },
  // })

  const handleMakeTourGuide = (email) => {
    const makeTourGuide = {
      role: "guide",
      status: "complete",
    };

    axiosSecure
      .patch(`pending-requests?email=${email}`, makeTourGuide)
      .then((res) => {
        if (res.data.modifiedCount > 0) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: `The status has been updated to Tour guide`,
            showConfirmButton: false,
            timer: 2500,
          });

          const remainingPendingRequests = pendingRequests.filter(
            (request) => request.email !== email
          );
          setPendingRequests(remainingPendingRequests);
        }
      });
  };

  return (
    <div>
      <h2 className='text-3xl text-center mb-16 bg-[#ffcc05] p-2'>
        manage users
      </h2>
      {pendingRequests?.map((request, index) => (
        <div key={index}>
          {request?.status === "pending" ? (
            <>
              <h3>{request?.email}</h3>
              <h1>{request?.status}</h1>
              <button
                className='mr-3 btn btn-outline'
                onClick={() => handleMakeAdmin(request?.email)}
              >
                Make Admin
              </button>
              <button
                className=' btn btn-outline'
                onClick={() => handleMakeTourGuide(request?.email)}
              >
                Make Tour Guide
              </button>
            </>
          ) : (
            ""
          )}
        </div>
      ))}
    </div>
  );
};

export default ManageUsers;
