import { useForm } from "react-hook-form";
import useAuthHook from "../../../../Hooks/UseAuth";
import UseAxiosSecure from "../../../../Hooks/UseAxiosSecure";
import Swal from "sweetalert2";
import useAxiosPublic from "../../../../Hooks/UseAxiosPublic";

const MyProfile = () => {
  const { register, handleSubmit, reset } = useForm();
  const { user } = useAuthHook();
  const axiosSecure = UseAxiosSecure();
  const axiosPublic = useAxiosPublic();

  const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
  const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

  const onSubmit = async (data) => {
    const imageFile = { image: data.image[0] };
    const res = await axiosPublic.post(image_hosting_api, imageFile, {
      headers: {
        "content-type": "multipart/form-data",
      },
    });
    if (res.data.success) {
      // now send the menu item data to the server with the image URL
      const profile = {
        education: data.education,
        experience: data.experience,
        contact: data.contact,
        photoURL: res.data.data.display_url,
      };
      //
      const Response = await axiosSecure.post("/guides", profile);
      console.log(Response.data); // axios provides the response inside data
      if (Response.data.insertedId) {
        // show success pop up
        reset();
        Swal.fire({
          position: "center",
          icon: "success",
          title: "profile is updated",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    }
  };

  return (
    // tour guide profile
    <div className='container mx-auto'>
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

      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label className='form-control w-full my-6'>
            <div className='label'>
              <span className='label-text'>Education</span>
            </div>
            <input
              type='text'
              placeholder='Education'
              {...register("education", { required: true })}
              className='input input-bordered w-full'
            />
          </label>
          <label className='form-control w-full my-6'>
            <div className='label'>
              <span className='label-text'>Work Experience</span>
            </div>
            <input
              type='number'
              placeholder='Work Experience'
              {...register("experience", { required: true })}
              className='input input-bordered w-full'
            />
          </label>

          <div className='flex gap-6 items-center'>
            {/* category */}

            {/* price */}
            <label className='form-control w-full my-6'>
              <div className='label'>
                <span className='label-text'>Contact Details</span>
              </div>
              <input
                type='number'
                placeholder='Contact Details'
                {...register("contact", { required: true })}
                className='input input-bordered w-full'
              />
            </label>
          </div>
          {/* recipe details */}

          <div className='form-control w-full my-6'>
            <input
              {...register("image", { required: true })}
              type='file'
              className='file-input w-full'
            />
          </div>

          <button className='btn btn-outline'>Add Tour Guide Profile</button>
        </form>
      </div>
    </div>
  );
};

export default MyProfile;
