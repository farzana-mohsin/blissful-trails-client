import { useContext } from "react";
import {
  // loadCaptchaEnginge,
  LoadCanvasTemplate,
  // validateCaptcha,
} from "react-simple-captcha";
import { AuthContext } from "../../Provider/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import Swal from "sweetalert2";
import SocialLogin from "../../Components/SocialLogin/SocialLogin";

const Login = () => {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";
  console.log("location from login page", location.state);

  // const [disabled, setDisabled] = useState(true);

  // useEffect(() => {
  //   loadCaptchaEnginge(6);
  // }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);
    login(email, password).then((result) => {
      const user = result.user;
      console.log(user);
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Login Successful!",
        showConfirmButton: false,
        timer: 1500,
      });
      navigate(from, { replace: true });
    });
  };

  // const handleValidateCaptcha = (e) => {
  //   const user_captcha_value = e.target.value;
  //   if (validateCaptcha(user_captcha_value)) {
  //     setDisabled(false);
  //   } else {
  //     setDisabled(true);
  //   }
  // };

  return (
    <div className='mb-10 lg:mb-2'>
      <Helmet>
        <title>Blissful Trail | Login</title>
      </Helmet>
      <div className='lg:h-[calc(100vh-290px)] w-full max-w-md p-4 rounded-md shadow sm:p-8 bg-black  text-white mx-auto my-3 border-2 border-yellow-700'>
        <h2 className='mb-3 text-3xl font-semibold text-center'>
          Login to your account
        </h2>
        <p className='text-center text-[#ff9d41] mb-5'>
          Dont have an account? Sign up{" "}
          <Link
            to='/register'
            className='focus:underline hover:underline font-bold text-white'
          >
            here
          </Link>
        </p>
        <div className='my-6 space-y-4'>
          <SocialLogin></SocialLogin>
        </div>
        <div className='flex items-center w-full my-2'>
          <hr className='w-full text-gray-100' />
          <p className='px-3 text-gray-100 py-0'>OR</p>
          <hr className='w-full text-gray-100' />
        </div>

        <form
          onSubmit={handleLogin}
          className=''
        >
          <div className='form-control'>
            <label className='label'>
              <span className='label-text text-white'>Email</span>
            </label>
            <input
              name='email'
              type='email'
              placeholder='email'
              className='w-full px-3 py-2 border-2 rounded-md  border-orange-400 bg-gray-100 text-gray-900 focus:border-amber-800'
              required
            />
          </div>
          <div className='form-control pt-0 mt-0 '>
            <label className='label'>
              <span className='label-text text-white'>Password</span>
            </label>
            <input
              name='password'
              type='password'
              placeholder='password'
              className='w-full px-3 py-2 border-2 rounded-md  border-orange-400 bg-gray-100 text-gray-900 focus:border-amber-800'
              required
            />
            <label className='label'>
              <a
                href='#'
                className='label-text-alt link link-hover text-white'
              >
                Forgot password?
              </a>
            </label>
          </div>
          <div className='form-control'>
            {/* <label className='label'>
                <LoadCanvasTemplate />
              </label> */}
            {/* <input
                  onBlur={handleValidateCaptcha}
                  name='captcha'
                  type='password'
                  placeholder='Type the above captcha'
                  className='input input-bordered'
                  required
                  /> */}
          </div>
          <div className='form-control mt-6'>
            <input
              disabled={false}
              className='w-full px-3 py-2 border-2 font-bold rounded-md border-orange-400 bg-gray-100 text-gray-900 focus:border-amber-800 hover:bg-[#ffcc05]'
              type='submit'
              value='Login'
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
