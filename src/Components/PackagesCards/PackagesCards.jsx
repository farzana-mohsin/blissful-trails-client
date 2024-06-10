import PropTypes from "prop-types";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuthHook from "../../Hooks/UseAuth";
import UseAxiosSecure from "../../Hooks/UseAxiosSecure";
import Swal from "sweetalert2";
import UseWishlist from "../../Hooks/UseWishlist";

const PackagesCards = ({ item }) => {
  const { images, tourType, tripTitle, price, _id } = item;
  const { user } = useAuthHook();
  const axiosSecure = UseAxiosSecure();
  const navigate = useNavigate();
  const location = useLocation();
  const [, refetch] = UseWishlist();

  const handleAddToWishlist = () => {
    if (user && user?.email) {
      // send cart item to DB
      const wishlistItem = {
        packageId: _id,
        email: user.email,
        tourType,
        tripTitle,
        price,
      };
      axiosSecure.post("/wishlist", wishlistItem).then((res) => {
        if (res.data.insertedId) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: `${tripTitle} has been added to your wishlist`,
            showConfirmButton: false,
            timer: 2000,
          });
          // refetch the cart to update the cart items count
          refetch();
          navigate("/dashboard/my-wishlist");
        }
      });
      // send cart item
    } else {
      Swal.fire({
        title: "You're not logged in",
        text: "Please log in to add the item to the cart",
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
    <div className='my-10 w-full lg:w-1/3 mx-auto border-2 border-[#ffcc05]'>
      <div className='rounded-md shadow-lg w-full text-gray-900'>
        <div className='flex items-center justify-between p-3'>
          <div className='flex flex-row items-center space-x-2 ml-3'>
            <div>
              <h2 className='my-3 font-semibold leading-none text-gray-900 bg-[#ffcc05] w-full p-2 rounded-md'>
                {tripTitle}
              </h2>
              <span className=' font-semibold text-gray-700 coffee:text-gray-200 '>
                ${price}
              </span>
            </div>
          </div>

          <button
            className='text-red-600 mr-4 hover:bg-red-200 rounded-full'
            onClick={handleAddToWishlist}
            title='Open options'
            type='button'
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 512 512'
              className='w-5 h-5 fill-current'
            >
              <path d='M453.122,79.012a128,128,0,0,0-181.087.068l-15.511,15.7L241.142,79.114l-.1-.1a128,128,0,0,0-181.02,0l-6.91,6.91a128,128,0,0,0,0,181.019L235.485,449.314l20.595,21.578.491-.492.533.533L276.4,450.574,460.032,266.94a128.147,128.147,0,0,0,0-181.019ZM437.4,244.313,256.571,425.146,75.738,244.313a96,96,0,0,1,0-135.764l6.911-6.91a96,96,0,0,1,135.713-.051l38.093,38.787,38.274-38.736a96,96,0,0,1,135.765,0l6.91,6.909A96.11,96.11,0,0,1,437.4,244.313Z'></path>
            </svg>
          </button>
        </div>
        <div className='flex flex-row items-center w-full'>
          <section className=' w-full'>
            <div className='container flex flex-row items-center justify-center p-4 mx-auto'>
              <div className=''>
                <img
                  className='object-cover w-full bg-gray-500 aspect-square'
                  src={images?.[0]}
                />
              </div>
            </div>
          </section>
        </div>
        <div className='p-3'>
          <div className='flex items-center justify-between'>
            <div className='flex items-center space-x-3'>
              <button
                type='button'
                title='Like post'
                className='flex items-center justify-center'
              ></button>
            </div>
            {/* <button
              type='button'
              title='Bookmark post'
              className='flex items-center justify-center'
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 512 512'
                className='w-5 h-5 fill-current'
              >
                <path d='M424,496H388.75L256.008,381.19,123.467,496H88V16H424ZM120,48V456.667l135.992-117.8L392,456.5V48Z'></path>
              </svg>
            </button> */}
          </div>
          <div className='flex flex-wrap items-center pt-3 pb-1'>
            {/* <div className='flex items-center space-x-2'>
              <div className='flex -space-x-1'>
                <img
                  alt=''
                  className='w-5 h-5 border rounded-full bg-gray-500 border-gray-800'
                  src='https://source.unsplash.com/40x40/?portrait?1'
                />
                <img
                  alt=''
                  className='w-5 h-5 border rounded-full bg-gray-500 border-gray-800'
                  src='https://source.unsplash.com/40x40/?portrait?2'
                />
                <img
                  alt=''
                  className='w-5 h-5 border rounded-full bg-gray-500 border-gray-800'
                  src='https://source.unsplash.com/40x40/?portrait?3'
                />
              </div>
              <span className='text-sm'>
                Liked by
                <span className='font-semibold'>Mamba UI</span>and
                <span className='font-semibold'>86 others</span>
              </span>
            </div> */}
          </div>
          <div className='flex items-center justify-between mx-2 my-4'>
            <p className=''>
              <span className='font-lg font-semibold'>{tourType}</span>
            </p>
            <p className='btn bg-[#ffcc05] font-bold border-white p-3'>
              <Link to={`/packages-details/${_id}`}>
                <button>View Package</button>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

PackagesCards.propTypes = {
  item: PropTypes.object.isRequired,
};

export default PackagesCards;
