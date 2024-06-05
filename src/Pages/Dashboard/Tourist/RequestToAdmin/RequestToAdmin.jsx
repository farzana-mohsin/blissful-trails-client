// import useAuthHook from "../../../../Hooks/UseAuth";
// import UseAxiosSecure from "../../../../Hooks/UseAxiosSecure";
// import Swal from "sweetalert2";

// const RequestToAdmin = () => {
//   const axiosSecure = UseAxiosSecure();
//   const { user } = useAuthHook();

//   const handleRequestToAdmin = () => {
//     const request = {
//       userId: user.uid,
//       destination: "guide",
//       status: "pending",
//     };

//     axiosSecure.post("/admin-request", request).then((res) => {
//       if (res.data.insertedId) {
//         Swal.fire({
//           position: "center",
//           icon: "success",
//           title: `Hi ${user?.displayName}, your request has been sent to the Admin`,
//           showConfirmButton: false,
//           timer: 2500,
//         });
//       }
//     });
//   };

//   return (
//     <div>
//       <h2>want to be a Tour Guide?</h2>
//       <button
//         onClick={handleRequestToAdmin}
//         className='btn btn-outline'
//       >
//         Request
//       </button>
//     </div>
//   );
// };

// export default RequestToAdmin;
