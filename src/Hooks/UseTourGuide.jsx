import { useQuery } from "@tanstack/react-query";
import useAuthHook from "./UseAuth";
import UseAxiosSecure from "./UseAxiosSecure";

const UseTourGuide = () => {
  const axiosSecure = UseAxiosSecure();
  const { user } = useAuthHook();
  const { refetch, data: guide = [] } = useQuery({
    queryKey: ["guides", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/guides`);
      return res.data;
    },
  });
  return [guide, refetch];
};

export default UseTourGuide;
