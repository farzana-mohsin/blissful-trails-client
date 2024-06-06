import { useForm } from "react-hook-form";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";

import { FaBook } from "react-icons/fa";
// import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import useAxiosSecure from "../../Hooks/UseAxiosSecure";
import Swal from "sweetalert2";
import useAuthHook from "../../Hooks/UseAuth";
import SectionTitle from "../SectionTitle/SectionTitle";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import UseBooking from "../../Hooks/UseBooking";

const BookingForm = ({ price, tripTitle }) => {
  const { user } = useAuthHook();
  const { handleSubmit, reset } = useForm();
  const navigate = useNavigate();
  const [, refetch] = UseBooking();

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
  const axiosSecure = useAxiosSecure();
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
      };
      //
      const response = await axiosSecure.post("/booking", booking);
      console.log(response.data); // axios provides the response inside data
      if (response.data.insertedId) {
        // show success pop up
        reset();
        Swal.fire({
          position: "center",
          icon: "success",
          title: `${tripTitle} is added to your booking`,
          showConfirmButton: false,
          timer: 2500,
        });
        refetch();
        navigate("dashboard/my-bookings");
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
    <div>
      <SectionTitle
        heading='Booking Form'
        subHeading='Confirm your booking by filling out the form!'
      ></SectionTitle>
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

          <div className='flex gap-6 items-center'>
            <h2>Tourist Name: {user?.displayName}</h2>
            <p>Price: {price}</p>
            <p>Name of the package: {tripTitle}</p>
            {/* tour guide dropdown */}

            {/* <label className='form-control w-full my-6'>
              <div className='label'>
                <span className='label-text'>Category*</span>
              </div>
              <select
                defaultValue='default'
                {...register("category", { required: true })}
                className='select select-bordered w-full'
              >
                <option
                  disabled
                  value='default'
                >
                  Select one category
                </option>
                <option value='salad'>Salad</option>
                <option value='pizza'>Pizza</option>
                <option value='soup'>Soup</option>
                <option value='dessert'>Dessert</option>
                <option value='drinks'>Drinks</option>
              </select>
            </label> */}
          </div>
          {/* tour date */}
          <div className='space-y-1'>
            <label
              htmlFor='location'
              className='block text-gray-600'
            >
              Select Availability Range
            </label>
            {/* Calender */}
            <DateRange
              rangeColors={["#F43F5E"]}
              editableDateInputs={true}
              onChange={(item) => handleDates(item)}
              moveRangeOnFirstSelection={false}
              ranges={[dates]}
              minDate={new Date()}
              // minDate={toDate}
            />
          </div>

          <button className='btn btn-outline'>
            <FaBook></FaBook> Confirm Booking
          </button>
        </form>
      </div>
    </div>
  );
};

export default BookingForm;
