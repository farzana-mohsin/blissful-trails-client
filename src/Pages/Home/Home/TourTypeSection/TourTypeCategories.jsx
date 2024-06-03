import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { IoIosAirplane } from "react-icons/io";

const TourTypeCategories = () => {
  const tours = useLoaderData();
  const [items, setItems] = useState(tours);

  return (
    <div>
      {items.map((item, index) => (
        <div key={index}>
          <div className='w-full max-w-sm overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800 mx-auto my-20'>
            <button className='btn absolute right-[425px]'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-6 w-6'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z'
                />
              </svg>
            </button>
            <img
              className='object-cover object-center w-full h-56'
              src={item.image?.[0]}
              alt='tour'
            ></img>
            <div className='flex items-center px-6 py-3 bg-gray-900'>
              <h1 className='mx-3 text-lg font-semibold text-white flex items-center gap-2'>
                <span className='text-2xl font-bold bg-yellow-500 p-1 rounded-full'>
                  <IoIosAirplane />
                </span>
                {item.tripTitle}
              </h1>
            </div>

            <div className='px-6 py-4'>
              <h1 className='text-xl font-semibold text-gray-800 dark:text-white'></h1>

              <p className='py-2 text-gray-700 dark:text-gray-400'>
                ${item.price}
              </p>

              {/* <div className='flex items-center mt-4 text-gray-700 dark:text-gray-200'>
                <svg
                  aria-label='suitcase icon'
                  className='w-6 h-6 fill-current'
                  viewBox='0 0 24 24'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path d='M14 11H10V13H14V11Z' />
                  <path
                    fillRule='evenodd'
                    clipRule='evenodd'
                    d='M7 5V4C7 2.89545 7.89539 2 9 2H15C16.1046 2 17 2.89545 17 4V5H20C21.6569 5 23 6.34314 23 8V18C23 19.6569 21.6569 21 20 21H4C2.34314 21 1 19.6569 1 18V8C1 6.34314 2.34314 5 4 5H7ZM9 4H15V5H9V4ZM4 7C3.44775 7 3 7.44769 3 8V14H21V8C21 7.44769 20.5522 7 20 7H4ZM3 18V16H21V18C21 18.5523 20.5522 19 20 19H4C3.44775 19 3 18.5523 3 18Z'
                  />
                </svg>

                <h1 className='px-2 text-sm'>Meraki UI</h1>
              </div> */}

              <div className='flex items-center mt-4 text-gray-700 dark:text-gray-200'>
                <svg
                  aria-label='location pin icon'
                  className='w-6 h-6 fill-current'
                  viewBox='0 0 24 24'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    fillRule='evenodd'
                    clipRule='evenodd'
                    d='M16.2721 10.2721C16.2721 12.4813 14.4813 14.2721 12.2721 14.2721C10.063 14.2721 8.27214 12.4813 8.27214 10.2721C8.27214 8.063 10.063 6.27214 12.2721 6.27214C14.4813 6.27214 16.2721 8.063 16.2721 10.2721ZM14.2721 10.2721C14.2721 11.3767 13.3767 12.2721 12.2721 12.2721C11.1676 12.2721 10.2721 11.3767 10.2721 10.2721C10.2721 9.16757 11.1676 8.27214 12.2721 8.27214C13.3767 8.27214 14.2721 9.16757 14.2721 10.2721Z'
                  />
                  <path
                    fillRule='evenodd'
                    clipRule='evenodd'
                    d='M5.79417 16.5183C2.19424 13.0909 2.05438 7.3941 5.48178 3.79418C8.90918 0.194258 14.6059 0.0543983 18.2059 3.48179C21.8058 6.90919 21.9457 12.606 18.5183 16.2059L12.3124 22.7241L5.79417 16.5183ZM17.0698 14.8268L12.243 19.8965L7.17324 15.0698C4.3733 12.404 4.26452 7.9732 6.93028 5.17326C9.59603 2.37332 14.0268 2.26454 16.8268 4.93029C19.6267 7.59604 19.7355 12.0269 17.0698 14.8268Z'
                  />
                </svg>

                <h1 className='px-2 text-sm'>{item.tourType}</h1>
              </div>

              <div className='flex items-center mt-4 text-gray-700 dark:text-gray-200 justify-end'>
                <Link to={`/packagesDetails/${item._id}`}>
                  <button className='btn btn-outline'>View Package</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TourTypeCategories;
