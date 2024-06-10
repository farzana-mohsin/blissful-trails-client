import { useEffect, useState } from "react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { Link } from "react-router-dom";

const TouristStorySection = () => {
  const [stories, setStories] = useState([]);
  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/stories`)
      .then((res) => res.json())
      .then((data) => setStories(data));
  }, []);

  return (
    <div>
      <section className='my-20 bg-[#ffe683] shadow-2xl'>
        <Swiper
          navigation={true}
          modules={[Navigation]}
          className='mySwiper '
        >
          {stories.map((story, index) => (
            <SwiperSlide
              key={index}
              review={story}
            >
              <div className='m-24 flex flex-col items-center mx-24 my-16'>
                <Rating
                  style={{ maxWidth: 140 }}
                  value={story.rating}
                  readOnly
                />
                <h3 className='text-xl lg:text-3xl text-orange-800 my-3'>
                  {story.tripTitle}
                </h3>
                <p className='py-8 text-center text-gray-700'>{story.story}</p>
                <Link to={`/stories/${story._id}`}>
                  <button className='text-center mx-auto flex btn text-[#ffcc05] bg-black border-2 border-white'>
                    View Story Details
                  </button>
                </Link>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </div>
  );
};

export default TouristStorySection;
