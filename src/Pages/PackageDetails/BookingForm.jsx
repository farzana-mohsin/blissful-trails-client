import { useForm } from "react-hook-form";
import SectionTitle from "../../Components/SectionTitle";
import { FaUtensils } from "react-icons/fa";
// import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";

// const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
// const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const BookingForm = () => {
  const { register, handleSubmit, reset } = useForm();
  // const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();
  const onSubmit = async (data) => {
    // const imageFile = { image: data.image[0] };
    // const res = await axiosPublic.post(image_hosting_api, imageFile, {
    //   headers: {
    //     "content-type": "multipart/form-data",
    //   },
    // });
    // if (res.data.success) {
    //   // now send the menu item data to the server with the image URL
    const booking = {
      tripTitle: data.tripTitle,
      category: data.category,
      price: parseFloat(data.price),
      recipe: data.recipe,
    };
    //
    const Response = await axiosSecure.post("/menu", booking);
    console.log(Response.data); // axios provides the response inside data
    if (Response.data.insertedId) {
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
  };

  return (
    <div>
      <SectionTitle
        heading='Booking Form'
        subHeading='Confirm your booking by filling out the form!'
      ></SectionTitle>
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label className='form-control w-full my-6'>
            <div className='label'>
              <span className='label-text'>Name of the package</span>
            </div>
            <input
              type='text'
              placeholder='Package Name'
              {...register("tripTitle", { required: true })}
              className='input input-bordered w-full'
            />
          </label>

          <div className='flex gap-6 items-center'>
            {/* category */}

            <label className='form-control w-full my-6'>
              <div className='label'>
                <span className='label-text'>Category*</span>
              </div>
              <select
                defaultValue='default'
                {...register("category", { required: true })}
                className='select select-bordered w-full'
              >
                <option
                  disabled
                  value='default'
                >
                  Select one category
                </option>
                <option value='salad'>Salad</option>
                <option value='pizza'>Pizza</option>
                <option value='soup'>Soup</option>
                <option value='dessert'>Dessert</option>
                <option value='drinks'>Drinks</option>
              </select>
            </label>

            {/* price */}
            <label className='form-control w-full my-6'>
              <div className='label'>
                <span className='label-text'>Price*</span>
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
              <span className='label-text'>Recipe Details</span>
            </div>
            <textarea
              className='textarea textarea-bordered h-24'
              placeholder='Bio'
              {...register("recipe")}
            ></textarea>
          </label>
          <div className='form-control w-full my-6'>
            <input
              {...register("image", { required: true })}
              type='file'
              className='file-input w-full'
            />
          </div>

          <button className='btn btn-outline'>
            <FaUtensils></FaUtensils> Add Item
          </button>
        </form>
      </div>
    </div>
  );
};

export default BookingForm;
