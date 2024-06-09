import { useState } from "react";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { useForm } from "react-hook-form";
import UseAxiosSecure from "../../../../Hooks/UseAxiosSecure";
import Swal from "sweetalert2";
import useAuthHook from "../../../../Hooks/UseAuth";

const TouristProfile = () => {
  const { user } = useAuthHook();
  const [rating, setRating] = useState(3);
  const axiosSecure = UseAxiosSecure();
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = async (data) => {
    const storyData = {
      tripTitle: data.tripTitle,
      story: data.story,
      rating: rating,
    };
    //
    const Response = await axiosSecure.post("/stories", storyData);
    console.log(Response.data); // axios provides the response inside data
    if (Response.data.insertedId) {
      // show success pop up
      reset();
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Your story has been added!",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };

  return (
    <div className=''>
      <div className='my-10 flex flex-row mx-auto items-center gap-4'>
        <img
          className='w-20'
          src={user?.photoURL ? user?.photoURL : "Image not found"}
          alt=''
        />
        <h2 className='text-3xl'>
          <span>Hi, Welcome </span>
          {user?.displayName ? user?.displayName : "Back!"}
        </h2>
      </div>

      <section className='py-16 flex flex-col max-w-5xl mx-auto overflow-hidden bg-black shadow-lg dark:bg-gray-800 md:flex-row'>
        <div className='md:flex md:items-center md:justify-center md:w-1/2 bg-black'>
          <div className='px-6 py-6 md:px-8 md:py-0'>
            <h2 className='text-2xl font-bold text-gray-700 dark:text-white md:text-gray-100'>
              A <span className='text-[#ffcc05]'>Story</span> worth telling!
            </h2>

            <p className='mt-2 text-sm text-gray-600 dark:text-gray-400 md:text-gray-400'>
              A journey of a 1000 miles starts with a single step. Share your
              story to inspire others!
            </p>
          </div>
        </div>

        <div className='flex items-center justify-center pb-6 md:py-0 md:w-1/2'>
          {/* <form onSubmit={handleStorySubmit}>
            <h2 className='text-white my-5'>Add your rating</h2>
            <Rating
              style={{ maxWidth: 180 }}
              value={rating}
              onChange={setRating}
            />
            <h2 className='text-white my-5'>Trip Title</h2>
            <input
              name='tripTitle'
              type='text'
              placeholder='Trip Title'
              className='input input-bordered w-full max-w-xs'
            />
            <h2 className='text-white mb-2 mt-10'>Add your story</h2>
            <div className='flex flex-col p-1.5 overflow-hidden border dark:border-gray-600 lg:flex-row dark:focus-within:border-amber-700 focus-within:ring focus-within:ring-opacity-40 focus-within:border-amber-800 focus-within:ring-amber-700 mr-5'>
              <textarea
                className='block w-full lg:px-28 py-2 textarea textarea-warning text-gray-700 placeholder-gray-500 bg-white outline-none dark:bg-gray-800 dark:placeholder-gray-400 focus:placeholder-transparent dark:focus:placeholder-transparent'
                type='text'
                name='story'
              />

              <input
                type='submit'
                value='Add Your Story'
                className='px-4 py-3 text-sm font-medium tracking-wider text-gray-100 uppercase transition-colors duration-300 transform bg-[#ffcc05] rounded-r-md hover:bg-gray-600 focus:bg-gray-600 focus:outline-none'
              >
                Share
              </input>
            </div>
          </form> */}

          <form
            onSubmit={handleSubmit(onSubmit)}
            className='w-full lg:mr-5'
          >
            <label className='form-control w-full my-6'>
              <h2 className='text-white'>Add your rating</h2>
              <Rating
                style={{ maxWidth: 180 }}
                value={rating}
                onChange={setRating}
              />
            </label>
            <label className='form-control w-full my-6'>
              <div className='label'>
                <span className='label-text text-white'>Trip Title</span>
              </div>
              <input
                type='text'
                placeholder='Trip Title'
                {...register("tripTitle", { required: true })}
                className='input input-bordered w-full'
              />
            </label>

            <div className='flex gap-6 items-center text-white my-5'>
              {/* category */}

              <label className='form-control w-full my-5'>
                <div className='label'>
                  <span className='label-text text-white'>Add Your Story</span>
                </div>
                <textarea
                  className='block w-full py-2 textarea textarea-warning text-gray-700 placeholder-gray-500 bg-white outline-none dark:bg-gray-800 dark:placeholder-gray-400 focus:placeholder-transparent dark:focus:placeholder-transparent'
                  type='text'
                  name='story'
                  {...register("story", { required: true })}
                />
              </label>
            </div>

            <button className='px-4 py-3 text-sm font-medium tracking-wide transition-colors duration-300 transform bg-[#ffcc05] rounded-r-md hover:bg-gray-600 focus:bg-gray-600 focus:outline-none'>
              Add Your Story
            </button>
            {/* <Link to={`guides/${user._id}`}>
            <button>View Details</button>
          </Link> */}
          </form>
        </div>
      </section>
    </div>
  );
};

export default TouristProfile;
