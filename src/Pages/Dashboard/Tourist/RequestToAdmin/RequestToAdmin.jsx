import { useEffect, useState } from "react";
import useAuthHook from "../../../../Hooks/UseAuth";
import UseAxiosSecure from "../../../../Hooks/UseAxiosSecure";
import Swal from "sweetalert2";

const RequestToAdmin = () => {
  const axiosSecure = UseAxiosSecure();
  const { user } = useAuthHook();
  const [isRequestPending, setIsRequestPending] = useState(false);

  useEffect(() => {
    fetch(
      `${import.meta.env.VITE_API_URL}/request-to-admin?email=${user.email}`
    )
      .then((res) => res.json())
      .then((data) => {
        if (data?.length > 0) {
          setIsRequestPending(true);
        }
      });
  }, [user.email]);

  const handleRequestToAdmin = () => {
    const request = {
      email: user?.email,
      role: "guide",
      status: "pending",
    };

    axiosSecure.post("request-to-admin", request).then((res) => {
      if (res.data.insertedId) {
        Swal.fire({
          position: "center",
          icon: "success",
          title: `Hi ${user?.displayName}, your request has been sent to the Admin`,
          showConfirmButton: false,
          timer: 2500,
        });
      }
      setIsRequestPending(true);
    });
  };

  return (
    <div>
      <h2 className='text-3xl'>
        <span>Hi </span>
        {user?.displayName ? user?.displayName : "there,"}
      </h2>
      <h2 className='my-5 text-2xl'>
        Want to be a Tour Guide? Click the button below!
      </h2>
      {isRequestPending ? (
        "You have already requested to be a tour guide"
      ) : (
        <button
          onClick={handleRequestToAdmin}
          className='btn flex mx-auto bg-[#ffcc05] text-black lg:px-4 lg:py-2 border-2 text-sm rounded-xl lg:ml-2 hover:bg-[#e7e9ea] border-white'
        >
          Request to be a tour guide
        </button>
      )}
    </div>
  );
};

export default RequestToAdmin;
