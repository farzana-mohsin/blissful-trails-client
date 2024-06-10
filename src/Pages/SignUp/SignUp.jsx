import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Helmet } from "react-helmet";
import Swal from "sweetalert2";
import useAxiosPublic from "../../Hooks/UseAxiosPublic";
import SocialLogin from "../../Components/SocialLogin/SocialLogin";
import useAuthHook from "../../Hooks/UseAuth";

const SignUp = () => {
  const axiosPublic = useAxiosPublic();
  const { createUser, updateUserProfile } = useAuthHook();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    createUser(data.email, data.password).then((result) => {
      const loggedUser = result.user;
      console.log(loggedUser);
      updateUserProfile(data.name, data.photoURL)
        .then(() => {
          // create user entry in the DB
          console.log("user profile updated");
          console.log("user data", data);
          const userInfo = {
            name: data.name,
            email: data.email,
            uid: data.uid,
          };

          axiosPublic.post("/users", userInfo).then((res) => {
            if (res.data.insertedId) {
              console.log("user added to the database");
              Swal.fire({
                position: "center",
                icon: "success",
                title: "User created successfully",
                showConfirmButton: false,
                timer: 2000,
              });
              reset();
              navigate("/");
            }
          });
        })
        .catch((error) => console.log(error));
    });
  };

  return (
    <div>
      <Helmet>
        <title>Blissful Trails | Sign Up</title>
      </Helmet>
      <div className='lg:h-[calc(100vh-180px)] w-full max-w-md p-4 rounded-md shadow sm:p-8 bg-black  text-white mx-auto my-3 border-2 border-yellow-700'>
        <h2 className='mb-3 text-3xl font-semibold text-center'>
          Register here!
        </h2>
        <p className='text-center text-[#ff9d41] mb-5'>
          Already have an account? Please login{" "}
          <Link
            to='/login'
            className='focus:underline hover:underline font-bold text-white'
          >
            here
          </Link>
          <div className='my-3 space-y-4'>
            <SocialLogin></SocialLogin>
          </div>
        </p>
        <div className='flex items-center w-full'>
          <hr className='w-full text-gray-100' />
          <p className='px-3 text-gray-100 my-0'>OR</p>
          <hr className='w-full text-gray-100' />
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className='card-body mt-0 pt-0'
        >
          <div className='form-control'>
            <label className='label'>
              <span className='label-text text-white'>Name</span>
            </label>
            <input
              {...register("name", { required: true })}
              name='name'
              type='text'
              placeholder='name'
              className='w-full px-3 py-2 border-2 rounded-md  border-orange-400 bg-gray-100 text-gray-900 focus:border-amber-800'
            />
            {errors.name && (
              <span className='text-red-600'>This field is required</span>
            )}
          </div>
          <div className='form-control'>
            <label className='label'>
              <span className='label-text text-white'>Photo URL</span>
            </label>
            <input
              {...register("photoURL", { required: true })}
              type='text'
              placeholder='Photo URL'
              className='w-full px-3 py-2 border-2 rounded-md  border-orange-400 bg-gray-100 text-gray-900 focus:border-amber-800'
            />
            {errors.photoURL && (
              <span className='text-red-600'>Photo URL is required</span>
            )}
          </div>
          <div className='form-control'>
            <label className='label'>
              <span className='label-text text-white'>Email</span>
            </label>
            <input
              {...register("email", { required: true })}
              type='email'
              placeholder='email'
              className='w-full px-3 py-2 border-2 rounded-md  border-orange-400 bg-gray-100 text-gray-900 focus:border-amber-800'
              required
            />
            {errors.email && (
              <span className='text-red-600'>This field is required</span>
            )}
          </div>
          <div className='form-control'>
            <label className='label'>
              <span className='label-text text-white'>Password</span>
            </label>

            <input
              type='password'
              {...register("password", {
                required: true,
                minLength: 6,
                maxLength: 20,
                pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
              })}
              name='password'
              placeholder='password'
              className='input input-bordered'
            />
            {errors.password?.type === "required" && (
              <p className='text-red-600'>Password is required</p>
            )}
            {errors.password?.type === "minLength" && (
              <p className='text-red-600'>Password must be six characters</p>
            )}
            {errors.password?.type === "pattern" && (
              <p className='text-red-600'>
                Password must have one uppercase character, one lowercase
                character, one number, and one special character.
              </p>
            )}
            {errors.password?.type === "maxLength" && (
              <p className='text-red-600'>
                Password must less than 20 characters
              </p>
            )}
          </div>
          {/* <div className='form-control'>
                <label className='label'>
                  <LoadCanvasTemplate />
                </label>
                <input
                  ref={captchaRef}
                  name='captcha'
                  type='password'
                  placeholder='Type the above captcha'
                  className='input input-bordered'
                  required
                />
                <button
                  onClick={handleValidateCaptcha}
                  className='btn btn-outline btn-xs mt-3'
                >
                  Validate
                </button>
              </div> */}
          <div className='form-control mt-6'>
            <input
              className='w-full px-3 py-2 border-2 font-bold rounded-md border-orange-400 bg-gray-100 text-gray-900 focus:border-amber-800 hover:bg-[#b86f3b]'
              type='submit'
              value='Sign up'
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
