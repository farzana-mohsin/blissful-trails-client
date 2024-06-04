import { useQuery } from "@tanstack/react-query";
import useAuthHook from "./UseAuth";
import UseAxiosSecure from "./UseAxiosSecure";

const UseWishlist = () => {
  const axiosSecure = UseAxiosSecure();
  const { user } = useAuthHook();
  const { refetch, data: wishlist = [] } = useQuery({
    queryKey: ["wishlist", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/wishlist?email=${user.email}`);
      return res.data;
    },
  });
  return [wishlist, refetch];
};

export default UseWishlist;
