import { useLoaderData } from "react-router-dom";

const GuideProfileDetails = () => {
  const guide = useLoaderData();
  console.log("guide", guide);
  const { name, education, experience, contact, photoURL } = guide;

  return (
    <div>
      <section className='py-6 bg-gray-100'>
        <div className='container flex flex-col justify-center p-4 mx-auto'>
          <div className='grid grid-cols-1 gap-4 lg:grid-cols-4 sm:grid-cols-2'>
            <img
              src={photoURL}
              alt=''
            />
          </div>
        </div>
        <div>{name}</div>
        <div>
          <p>{education}</p>
          <p>{experience}</p>
          <p>{contact}</p>
        </div>
      </section>
    </div>
  );
};
export default GuideProfileDetails;
