import useAuthHook from "../../../../Hooks/UseAuth";

const AdminProfile = () => {
  const { user } = useAuthHook();
  return (
    <div className='my-10'>
      <h2 className='text-3xl'>
        <span>Hi, Welcome </span>
        {user?.displayName ? user?.displayName : "Back!"}
      </h2>
    </div>
  );
};

export default AdminProfile;
