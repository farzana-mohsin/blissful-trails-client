import { useQuery } from "@tanstack/react-query";
import useAuthHook from "./UseAuth";
import UseAxiosSecure from "./UseAxiosSecure";

const UseBooking = () => {
  const axiosSecure = UseAxiosSecure();
  const { user } = useAuthHook();
  const { refetch, data: booking = [] } = useQuery({
    queryKey: ["bookings", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/bookings?email=${user.email}`);
      return res.data;
    },
  });
  return [booking, refetch];
};

export default UseBooking;
