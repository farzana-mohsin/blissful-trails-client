import { useForm } from "react-hook-form";

import { FaPlaneDeparture } from "react-icons/fa";
import useAxiosPublic from "../../../../Hooks/UseAxiosPublic";
import useAxiosSecure from "../../../../Hooks/UseAxiosPublic";
import Swal from "sweetalert2";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const AddPackage = () => {
  const { register, handleSubmit, reset } = useForm();
  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();
  const onSubmit = async (data) => {
    const imageFile = { image: data.image[0] };
    const res = await axiosPublic.post(image_hosting_api, imageFile, {
      headers: {
        "content-type": "multipart/form-data",
      },
    });
    if (res.data.success) {
      // now send the menu item data to the server with the image URL
      const packageItem = {
        tripTitle: data.tripTitle,
        tourType: data.tourType,
        price: data.price,
        aboutTheTour: data.aboutTheTour,
        tourPlan: data.tourPlan,
        images: res.data.data.display_url,
      };
      //
      const packageRes = await axiosSecure.post("/packages", packageItem);

      if (packageRes.data.insertedId) {
        // show success pop up
        reset();
        Swal.fire({
          position: "center",
          icon: "success",
          title: `${data.name} is added to the menu`,
          showConfirmButton: false,
          timer: 1500,
        });
      }
    }
    console.log("with img url", res.data);
  };

  return (
    <div>
      <div>
        <h2>Add a Package</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label className='form-control w-full my-6'>
            <div className='label'>
              <span className='label-text'>Trip Title</span>
            </div>
            <input
              type='text'
              placeholder='Trip Title'
              {...register("tripTitle", { required: true })}
              className='input input-bordered w-full'
            />
          </label>

          <div className='flex gap-6 items-center'>
            {/* category */}

            <label className='form-control w-full my-6'>
              <div className='label'>
                <span className='label-text'>Tour Type</span>
              </div>
              <select
                defaultValue='default'
                {...register("tourType", { required: true })}
                className='select select-bordered w-full'
              >
                <option
                  disabled
                  value='default'
                >
                  Select one category
                </option>
                <option value='seaside'>Seaside</option>
                <option value='hiking'>Hiking</option>
                <option value='wildlife'>Wildlife</option>
                <option value='cruises'>Cruises</option>
              </select>
            </label>

            {/* price */}
            <label className='form-control w-full my-6'>
              <div className='label'>
                <span className='label-text'>Price</span>
              </div>
              <input
                type='number'
                placeholder='Price'
                {...register("price", { required: true })}
                className='input input-bordered w-full'
              />
            </label>
          </div>
          {/* recipe details */}
          <label className='form-control'>
            <div className='label'>
              <span className='label-text'>About The Tour</span>
            </div>
            <textarea
              className='textarea textarea-bordered h-24'
              placeholder='about'
              {...register("aboutTheTour")}
            ></textarea>
          </label>
          <label className='form-control'>
            <div className='label'>
              <span className='label-text'>Tour Plan</span>
            </div>
            <textarea
              className='textarea textarea-bordered h-24'
              placeholder='Tour Plan'
              {...register("tourPlan")}
            ></textarea>
          </label>
          <div className='form-control w-full my-6'>
            <input
              {...register("images", { required: true })}
              type='file'
              className='file-input w-full'
            />
          </div>

          <button className='btn bg-[#ffcc05] hover:bg-[#b86f3b] text-black px-2  lg:px-4 lg:py-2 border-2 border-white text-xs lg:text-sm rounded-xl lg:mr-3'>
            <FaPlaneDeparture></FaPlaneDeparture> Add Package
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddPackage;
