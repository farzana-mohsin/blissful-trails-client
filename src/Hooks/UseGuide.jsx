import { useQuery } from "@tanstack/react-query";
import useAuth from "./UseAuth";
import useAxiosSecure from "./UseAxiosSecure";

const useGuide = () => {
  const { user, loading } = useAuth();
  // token will be verified, so we'll need axiosSecure here
  const axiosSecure = useAxiosSecure();

  const { data: isGuide, isPending: isGuideLoading } = useQuery({
    queryKey: [user?.email, "isGuide"],
    enabled: !loading,
    queryFn: async () => {
      console.log("asking or checking is tour guide", user);
      const res = await axiosSecure.get(
        `/request-to-admin/guide?email=${user.email}`
      );
      // header will be returned from BE
      console.log(res.data);
      return res.data?.guide; // we'll get admin object from BE, the value will be inside admin
    },
  });
  return [isGuide, isGuideLoading];
};

export default useGuide;
