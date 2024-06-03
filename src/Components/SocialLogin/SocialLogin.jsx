import { FaGoogle } from "react-icons/fa";
import useAuthHook from "../../Hooks/UseAuth";
import useAxiosPublic from "../../Hooks/UseAxiosPublic";
import { useNavigate } from "react-router-dom";

const SocialLogin = () => {
  const { signInWithGoogle } = useAuthHook();
  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate();

  const handleGoogleSignIn = () => {
    signInWithGoogle().then((result) => {
      console.log(result);
      const userInfo = {
        email: result.user?.email,
        name: result.user?.displayName,
      };
      axiosPublic.post("/users", userInfo).then((res) => {
        console.log(res.data);
        navigate("/");
      });
    });
  };

  return (
    <div className='p-4'>
      <div>
        <div className='divider'></div>
        <button
          onClick={handleGoogleSignIn}
          className='btn'
        >
          Login with <FaGoogle></FaGoogle>
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
