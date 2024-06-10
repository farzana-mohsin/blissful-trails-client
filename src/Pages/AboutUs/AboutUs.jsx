import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect } from "react";
import "./Style.css";
import { Helmet } from "react-helmet";
const AboutUs = () => {
  const count1 = useMotionValue(6000);
  const count2 = useMotionValue(0);
  const count3 = useMotionValue(10000);
  const rounded1 = useTransform(count1, Math.round);
  const rounded2 = useTransform(count2, Math.round);
  const rounded3 = useTransform(count3, Math.round);
  // const rounded3 = useTransform(count * 300, Math.round);

  useEffect(() => {
    animate(count1, 12755, {
      duration: 10,
    });
    animate(count2, 100, {
      duration: 8,
    });
    animate(count3, 89000, {
      duration: 15,
    });
  }, []);

  return (
    <div className="bg-[url('https://i.ibb.co/LR9ggg9/pasted-image-0-6.png')] bg-cover bg-no-repeat bg-center h-screen">
      <Helmet>
        <title>Blissful Trail | About Us</title>
      </Helmet>
      <h2 className=' text-4xl lg:text-7xl font-bold text-white text-center py-6 lg:py-36'>
        About Blissful Trail
      </h2>
      <div className='container mx-auto grid grid-cols-1 md:grid-cols-3 text-center mt-10 space-y-6 lg:space-y-0'>
        <div className=' '>
          <motion.h1 className='extraSection'>{rounded1}</motion.h1>
          <h2 className='text-white lg:text-[#ffe400] lg:text-3xl font-bold  mb-2'>
            Numbers of Trips
          </h2>
        </div>
        <div className='w-full mx-auto'>
          <motion.h1 className='extraSection'>{rounded2}</motion.h1>
          <h2 className='text-white lg:text-[#ffe400] lg:text-3xl font-bold  mb-2'>
            Type of Packages
          </h2>
        </div>
        <div className='w-full'>
          <motion.h1 className='extraSection'>{rounded3}</motion.h1>
          <h2 className='text-white lg:text-[#ffe400] lg:text-3xl font-bold mb-2'>
            Numbers of Followers
          </h2>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
