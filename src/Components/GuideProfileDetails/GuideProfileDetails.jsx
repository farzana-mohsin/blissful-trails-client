import { useLoaderData } from "react-router-dom";
import { FaPhoneAlt } from "react-icons/fa";
import { IoIosSchool } from "react-icons/io";
import { ImArrowUpRight2 } from "react-icons/im";

const GuideProfileDetails = () => {
  const guide = useLoaderData();
  console.log("guide", guide);
  const { name, education, experience, contact, photoURL } = guide;

  return (
    <div className='container mx-auto my-20 max-w-lg overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800'>
      <img
        className='object-cover lg:w-full lg:h-[600px]'
        src={photoURL}
        alt='avatar'
      ></img>

      <div className='py-5'>
        <a
          href='#'
          className='block text-2xl font-bold text-gray-800 dark:text-white my-5 bg-[#ffcc05] w-full p-2'
          tabIndex='0'
          role='link'
        >
          <span className='ml-6'> {name}</span>
        </a>
        <div className='space-y-3 ml-6'>
          <h3 className='text-sm text-gray-700 dark:text-gray-200 flex items-center gap-3'>
            <span className='text-[#ffcc05] text-xl font-bold'>
              <IoIosSchool />
            </span>
            Education Background: {education}
          </h3>
          <h3 className='text-sm text-gray-700 dark:text-gray-200 flex items-center gap-3'>
            <span className='text-[#ffcc05] text-xl font-bold'>
              <ImArrowUpRight2 />
            </span>
            Experience in this field: {experience}
          </h3>
          <h3 className='text-sm text-gray-700 dark:text-gray-200 flex items-center gap-3'>
            <span className='text-[#ffcc05] text-xl'>
              <FaPhoneAlt />
            </span>
            {contact}
          </h3>
        </div>
      </div>
    </div>
  );
};

export default GuideProfileDetails;
