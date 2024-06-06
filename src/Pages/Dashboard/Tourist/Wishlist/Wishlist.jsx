import { FaTrash } from "react-icons/fa";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../../Hooks/UseAxiosSecure";
import { Link } from "react-router-dom";
import useAuthHook from "../../../../Hooks/UseAuth";
import UseWishlist from "../../../../Hooks/UseWishlist";

const Wishlist = () => {
  const { user } = useAuthHook();
  const [wishlist, refetch] = UseWishlist();
  // const totalPrice = cart.reduce((total, item) => total + item.price, 0);
  const axiosSecure = useAxiosSecure();

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/wishlist/${id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            refetch();
            Swal.fire({
              title: "Deleted!",
              text: "Your item has been deleted.",
              icon: "success",
            });
          }
        });
      }
    });
  };

  return (
    <div>
      <div className='flex justify-evenly'>
        <h2 className='text-4xl'>Items: {wishlist.length}</h2>
        {/* <h2 className='text-4xl'>Total Price: {totalPrice}</h2> */}
        {/* {wishlist.length ? (
          <>
            <Link to='/dashboard/payment'>
              <button className='btn btn-outline'>Pay</button>
            </Link>
          </>
        ) : (
          <>
            <button
              disabled
              className='btn btn-outline'
            >
              Pay
            </button>
          </>
        )} */}
      </div>
      <div className='overflow-x-auto'>
        <h1>Wishlist page</h1>
        <table className='table w-full'>
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Trip Title</th>
              <th>Price</th>
              <th>Details</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {wishlist.map((item, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{item.tripTitle}</td>
                <td>{item.tourType}</td>
                <td>${item.price}</td>
                <td>
                  <Link to={`/packages-details/${item.packageId}`}>
                    <button>Package Details</button>
                  </Link>
                </td>
                <td>
                  <button
                    onClick={() => handleDelete(item._id)}
                    className='btn btn-ghost'
                  >
                    <FaTrash className='text-red-600 text-lg'></FaTrash>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Wishlist;