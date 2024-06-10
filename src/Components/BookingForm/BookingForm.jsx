import { useForm } from "react-hook-form";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { IoPersonSharp } from "react-icons/io5";
import { FaDollarSign } from "react-icons/fa6";
import { IoAirplane } from "react-icons/io5";
import PropTypes from "prop-types";
import { FaCircleCheck } from "react-icons/fa6";
// import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import UseAxiosSecure from "../../Hooks/UseAxiosSecure";
import Swal from "sweetalert2";
import useAuthHook from "../../Hooks/UseAuth";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import UseBooking from "../../Hooks/UseBooking";
import UseTourGuide from "../../Hooks/UseTourGuide";
import Confetti from "react-confetti";
import SectionTitle from "../../Components/SectionTitle/SectionTitle";

const BookingForm = ({ price, tripTitle }) => {
  const [guides] = UseTourGuide();
  const { user } = useAuthHook();
  const { handleSubmit, reset } = useForm();
  const navigate = useNavigate();
  const [, refetch] = UseBooking();
  const [selectedOption, setSelectedOption] = useState(guides?.[0]?.email);
  const [clicked, setClicked] = useState(true);
  const [isFourthBooking, setIsFourthBooking] = useState(false);

  useEffect(() => {}, []);

  useEffect(() => {
    setSelectedOption(guides?.[0]?.email);
  }, [guides]);

  const [dates, setDates] = useState({
    startDate: new Date(),
    endDate: new Date(),
    key: "selection",
  });

  //Date range handler
  const handleDates = (item) => {
    setDates(item.selection);
  };

  // const axiosPublic = useAxiosPublic();
  const axiosSecure = UseAxiosSecure();
  const onSubmit = async () => {
    if (user && user?.email) {
      const booking = {
        tourist: {
          email: user?.email,
          name: user?.displayName,
          photo: user?.photoURL,
        },
        tripTitle: tripTitle,
        price: price,
        startDate: dates.startDate,
        endDate: dates.endDate,
        status: "review",
        guides: selectedOption,
      };
      //
      const response = await axiosSecure.post("/bookings", booking);
      console.log(response.data); // axios provides the response inside data

      if (response.data.insertedId) {
        fetch(
          `${import.meta.env.VITE_API_URL}/bookings-count-test?email=${
            user.email
          }`
        )
          .then((res) => res.json())
          .then((data) => {
            setIsFourthBooking(data.count === 4);
            Swal.fire({
              position: "center",
              icon: "success",
              title: `${tripTitle} is added to your booking`,
              showConfirmButton: false,
              timer: 1500,
            });
            reset();
            refetch();

            setTimeout(function () {
              if (data.count === 4) {
                Swal.fire({
                  position: "center",
                  icon: "success",
                  title: `You're eligible to get $200 discount!`,
                  showConfirmButton: false,
                  timer: 2500,
                });
              }
            }, 2500);
          });
        // show success pop up

        // navigate("/dashboard/my-bookings");
      }
    } else {
      Swal.fire({
        title: "You're not logged in",
        text: "Please log in to add package to your booking list",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes login!",
      }).then((result) => {
        if (result.isConfirmed) {
          // send the user to the login page
          navigate("/login", { state: { from: location } });
        }
      });
    }
  };

  return (
    <div className='mx-auto container'>
      <SectionTitle heading='Booking Form'></SectionTitle>
      <p>
        {isFourthBooking === false ? (
          ""
        ) : (
          <Confetti
            drawShape={2}
            width={1200}
            height={1200}
          />
        )}
      </p>
      {/* selectedOption: {selectedOption} */}

      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* <label className='form-control w-full my-6'>
            <div className='label'>
              <span className='label-text'>Name of the package</span>
            </div>
            <input
              type='text'
              placeholder='Package Name'
              {...register("tripTitle", { required: true })}
              className='input input-bordered w-full'
            />
          </label> */}

          <div className='flex flex-col mx-14 md:mx-auto'>
            <h2 className='flex items-center gap-2'>
              <span className='text-yellow-500'>
                <IoPersonSharp />
              </span>
              Tourist Name: {user?.displayName}
            </h2>
            <p className='flex items-center gap-2'>
              <span className='text-yellow-500'>
                <FaDollarSign />
              </span>
              Price: ${price}
            </p>
            <p className='flex items-center gap-2'>
              <span className='text-yellow-500'>
                <IoAirplane />
              </span>
              Package Name: {tripTitle}
            </p>
            {/* tour guide dropdown */}

            <label className='form-control w-full my-3'>
              <div className='label'>
                <span className='label-text'>
                  Select Your Tour Guide from below:
                </span>
              </div>
              <select
                className='bg-[#ffcc05] p-1'
                value={selectedOption}
                onChange={(e) => setSelectedOption(e.target?.value)}
              >
                {guides.map((guide) => (
                  <option
                    key={guide?.value}
                    value={guide?.email}
                  >
                    {guide.name}
                  </option>
                ))}
              </select>
            </label>
          </div>
          {/* tour date */}
          <div className='space-y-1 mx-14 md:mx-auto'>
            <label
              htmlFor='location'
              className='text-gray-600 block'
            >
              Select Availability Range
            </label>
            {/* Calender */}
            <DateRange
              rangeColors={["#ffcc05"]}
              editableDateInputs={true}
              onChange={(item) => handleDates(item)}
              moveRangeOnFirstSelection={false}
              ranges={[dates]}
              minDate={new Date()}
              // minDate={toDate}
            />
          </div>

          <div className='flex mx-auto items-center justify-center'>
            <button className='btn bg-[#ffcc05] hover:bg-[#b86f3b] text-black px-2  lg:px-4 lg:py-2 border-2 border-white text-xs lg:text-sm rounded-xl lg:mr-3'>
              <FaCircleCheck /> Confirm Booking
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

BookingForm.propTypes = {
  price: PropTypes.number.isRequired,
  tripTitle: PropTypes.string.isRequired,
};

export default BookingForm;
