import { useLoaderData } from "react-router-dom";
import BookingForm from "../../Components/BookingForm/BookingForm";
import SectionTitle from "../../Components/SectionTitle/SectionTitle";

// import TourPlan from "../../Components/TourPlan/TourPlan";

const PackageDetails = () => {
  const item = useLoaderData();
  const { images, tripTitle, price, aboutTheTour, tourPlan } = item;

  return (
    <div>
      <SectionTitle
        heading={tripTitle}
        subHeading={aboutTheTour}
      ></SectionTitle>
      <div className='mx-auto flex flex-col lg:flex-row justify-center'>
        <section className='py-6'>
          <div className='grid grid-cols-1 gap-4 lg:grid-cols-4 sm:grid-cols-2'>
            {images.map((image, index) => (
              <img
                className='w-full h-full'
                key={index}
                src={image}
              ></img>
            ))}
          </div>

          <div className='my-8'>
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
        </section>
        <div className='flex-grow'>
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
