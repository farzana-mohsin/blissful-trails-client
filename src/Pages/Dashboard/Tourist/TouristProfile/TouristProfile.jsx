import { useState } from "react";
import useAuthHook from "../../../../Hooks/UseAuth";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

const TouristProfile = () => {
  const { user } = useAuthHook();
  const [rating, setRating] = useState(3);
  return (
    <div className='h-full'>
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

      <section className='h-1/2 flex flex-col max-w-5xl mx-auto overflow-hidden bg-black shadow-lg dark:bg-gray-800 md:flex-row'>
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
          <form>
            <h2 className='text-white mb-2'>Add your rating</h2>
            <Rating
              style={{ maxWidth: 180 }}
              value={rating}
              onChange={setRating}
            />
            <h2 className='text-white mb-2 mt-10'>Add your story</h2>
            <div className='flex flex-col p-1.5 overflow-hidden border dark:border-gray-600 lg:flex-row dark:focus-within:border-amber-700 focus-within:ring focus-within:ring-opacity-40 focus-within:border-amber-800 focus-within:ring-amber-700 mr-5'>
              <textarea
                className='block w-full px-28 py-2 textarea textarea-warning text-gray-700 placeholder-gray-500 bg-white outline-none dark:bg-gray-800 dark:placeholder-gray-400 focus:placeholder-transparent dark:focus:placeholder-transparent'
                type='text'
                name='story'
              />

              <button className='px-4 py-3 text-sm font-medium tracking-wider text-gray-100 uppercase transition-colors duration-300 transform bg-[#ffcc05] rounded-r-md hover:bg-gray-600 focus:bg-gray-600 focus:outline-none'>
                Share
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default TouristProfile;
