import { useQuery } from "@tanstack/react-query";
import useAuthHook from "./UseAuth";
import UseAxiosSecure from "./UseAxiosSecure";

const UseBookingReview = () => {
  const axiosSecure = UseAxiosSecure();
  const { user } = useAuthHook();
  const { refetch, data: review = [] } = useQuery({
    queryKey: ["review", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(
        `/bookings?email=${user.email}&status=review`
      );
      return res.data;
    },
  });
  return [review, refetch];
};

export default UseBookingReview;
