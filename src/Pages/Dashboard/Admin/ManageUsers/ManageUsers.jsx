import { useEffect, useState } from "react";
import UseAxiosSecure from "../../../../Hooks/UseAxiosSecure";
import Swal from "sweetalert2";
// import { useMutation } from '@tanstack/react-query'

const ManageUsers = () => {
  const axiosSecure = UseAxiosSecure();
  const [pendingRequests, setPendingRequests] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch(
        `${import.meta.env.VITE_API_URL}/pending-requests`
      );
      const data = await res.json();
      setPendingRequests(data);
    }
    fetchData();
  }, []);

  const handleMakeAdmin = (email) => {
    const makeAdmin = {
      role: "admin",
      status: "complete",
    };

    axiosSecure
      .patch(`pending-requests?email=${email}`, makeAdmin)
      .then((res) => {
        if (res.data.modifiedCount > 0) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: `The status has been updated to Admin`,
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
        Manage Users
      </h2>
      <div className='overflow-x-auto'>
        <table className='table w-full'>
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Requester&apos;s Email</th>
              <th>Status</th>
              <th>Action</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {pendingRequests.map((request, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{request?.email}</td>
                <td>{request.status}</td>
                {/* 
              <td>
                {request.status === "review" ? (
                  <p>Under Review</p>
                ) : request.status === "accepted" ? (
                  <p>Accepted</p>
                ) : (
                  <p>Rejected</p>
                )}
              </td> */}

                <td>
                  <button
                    className='btn bg-[#ffcc05] text-black lg:px-4 lg:py-2 text-sm rounded-xl ml-2 hover:bg-[#b86f3b] border-2 border-white'
                    onClick={() => handleMakeAdmin(request?.email)}
                  >
                    Make Admin
                  </button>
                </td>
                <td>
                  <button
                    className='btn bg-[#ffcc05] text-black px-4 lg:py-2 text-sm rounded-xl ml-2 hover:bg-[#b86f3b] border-2 border-white'
                    onClick={() => handleMakeTourGuide(request?.email)}
                  >
                    Make Tour Guide
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageUsers;
