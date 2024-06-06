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
        <title>Bistro Boss | Sign Up</title>
      </Helmet>
      <div className='hero min-h-screen bg-base-200'>
        <div className='hero-content flex-col lg:flex-row'>
          <div className='text-center md:w-1/2 lg:text-left'>
            <h1 className='text-5xl font-bold'>Login now!</h1>
            <p className='py-6'>
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <div className='card shrink-0 md:w-1/2 max-w-sm shadow-2xl bg-base-100'>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className='card-body'
            >
              <div className='form-control'>
                <label className='label'>
                  <span className='label-text'>Name</span>
                </label>
                <input
                  {...register("name", { required: true })}
                  name='name'
                  type='text'
                  placeholder='name'
                  className='input input-bordered'
                />
                {errors.name && (
                  <span className='text-red-600'>This field is required</span>
                )}
              </div>
              <div className='form-control'>
                <label className='label'>
                  <span className='label-text'>Photo URL</span>
                </label>
                <input
                  {...register("photoURL", { required: true })}
                  type='text'
                  placeholder='Photo URL'
                  className='input input-bordered'
                />
                {errors.photoURL && (
                  <span className='text-red-600'>Photo URL is required</span>
                )}
              </div>
              <div className='form-control'>
                <label className='label'>
                  <span className='label-text'>Email</span>
                </label>
                <input
                  {...register("email", { required: true })}
                  type='email'
                  placeholder='email'
                  className='input input-bordered'
                  required
                />
                {errors.email && (
                  <span className='text-red-600'>This field is required</span>
                )}
              </div>
              <div className='form-control'>
                <label className='label'>
                  <span className='label-text'>Password</span>
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
                  <p className='text-red-600'>
                    Password must be six characters
                  </p>
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
                <label className='label'>
                  <a
                    href='#'
                    className='label-text-alt link link-hover'
                  >
                    Forgot password?
                  </a>
                </label>
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
                  className='btn btn-primary'
                  type='submit'
                  value='Sign Up'
                />
              </div>
            </form>
            <p>
              <small>
                Already have an account? <Link to='/login'>Login here</Link>
              </small>
            </p>
            <SocialLogin></SocialLogin>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
