import { useLoaderData } from "react-router-dom";
import TourPlan from "../../Components/TourPlan/TourPlan";

const PackageDetails = () => {
  const item = useLoaderData();
  const { images, tourType, tripTitle, price, aboutTheTour, tourPlan } = item;

  return (
    <div>
      <section className='py-6 bg-gray-100'>
        <div className='container flex flex-col justify-center p-4 mx-auto'>
          <div className='grid grid-cols-1 gap-4 lg:grid-cols-4 sm:grid-cols-2'>
            {images.map((image, index) => (
              <img
                key={index}
                src={image}
              ></img>
            ))}
          </div>
        </div>
        <div>{tripTitle}</div>
        <div>
          <ul className='steps steps-vertical'>
            {tourPlan?.map((tour, index) => (
              <li
                key={index}
                className='step step-primary'
              >
                {tour.description}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
};

export default PackageDetails;
