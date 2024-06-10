import { useLoaderData } from "react-router-dom";
import BookingForm from "../../Components/BookingForm/BookingForm";
import SectionTitle from "../../Components/SectionTitle/SectionTitle";

// import TourPlan from "../../Components/TourPlan/TourPlan";

const PackageDetails = () => {
  const item = useLoaderData();
  const { images, tripTitle, price, tourPlan } = item;

  return (
    <div>
      <div></div>
      <div className='mx-auto justify-center flex flex-col lg:flex-row'>
        <div className='py-3'>
          <SectionTitle heading={tripTitle}></SectionTitle>
          <div className='grid grid-cols-1 gap-4 lg:grid-cols-4 sm:grid-cols-2'>
            {images.map((image, index) => (
              <img
                className='w-full h-full shadow-xl'
                key={index}
                src={image}
              ></img>
            ))}
          </div>

          <div className='my-10 py-10'>
            <h2 className='text-3xl text-center mb-16 bg-[#ffcc05] p-2 w-1/3 mx-auto'>
              Tour Plan
            </h2>
            <ul className='steps steps-vertical'>
              {tourPlan?.map((tour, index) => (
                <li
                  key={index}
                  className='step step-warning'
                >
                  {tour.description}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div>
          <BookingForm
            price={price}
            tripTitle={tripTitle}
          ></BookingForm>
        </div>
      </div>
    </div>
  );
};

export default PackageDetails;
