import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import { Helmet } from "react-helmet";

const Community = () => {
  return (
    <div className='min-h-[calc(100vh-330px)]'>
      <Helmet>
        <title>Blissful Trail | Community</title>
      </Helmet>
      <h2 className='text-3xl md:text-5xl font-bold text-center my-10'>
        <SectionTitle heading='Our Community'></SectionTitle>
      </h2>
      <section className='p-6 dark:bg-gray-100 dark:text-gray-800'>
        <div className='container mx-auto grid justify-center grid-cols-2 text-center lg:grid-cols-3'>
          <div className='flex flex-col justify-start m-2 lg:m-6'>
            <p className='text-4xl font-bold leading-none lg:text-6xl'>10K+</p>
            <p className='text-sm sm:text-base'>Clients</p>
          </div>
          <div className='flex flex-col justify-start m-2 lg:m-6'>
            <p className='text-4xl font-bold leading-none lg:text-6xl'>89K</p>
            <p className='text-sm sm:text-base mt-2'>
              Followers on social media
            </p>
          </div>
          <div className='flex flex-col justify-start m-2 lg:m-6'>
            <p className='text-4xl font-bold leading-none lg:text-6xl'>3</p>
            <p className='text-sm sm:text-base mt-2'>Published workshops</p>
          </div>
          <div className='flex flex-col justify-start m-2 lg:m-6'>
            <p className='text-4xl font-bold leading-none lg:text-6xl'>8</p>
            <p className='text-sm sm:text-base mt-2'>TED talks</p>
          </div>
          <div className='flex flex-col justify-start m-2 lg:m-6'>
            <p className='text-4xl font-bold leading-none lg:text-6xl'>22</p>
            <p className='text-sm sm:text-base mt-2'>Years of experience</p>
          </div>
          <div className='flex flex-col justify-start m-2 lg:m-6'>
            <p className='text-4xl font-bold leading-none lg:text-6xl'>10+</p>
            <p className='text-sm sm:text-base mt-2'>Workshops</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Community;
