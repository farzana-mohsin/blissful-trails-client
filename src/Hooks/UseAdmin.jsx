import { useQuery } from "@tanstack/react-query";
import useAuth from "./UseAuth";
import UseAxiosSecure from "./UseAxiosSecure";

const useAdmin = () => {
  const { user, loading } = useAuth();
  // token will be verified, so we'll need axiosSecure here
  const axiosSecure = UseAxiosSecure();

  const { data: isAdmin, isPending: isAdminLoading } = useQuery({
    queryKey: [user?.email, "isAdmin"],
    enabled: !loading,
    queryFn: async () => {
      console.log("asking or checking is admin", user);
      const res = await axiosSecure.get(
        `/request-to-admin/admin?email=${user.email}`
      );
      // header will be returned from BE
      console.log(res.data);
      return res.data?.admin; // we'll get admin object from BE, the value will be inside admin
    },
  });
  return [isAdmin, isAdminLoading];
};

export default useAdmin;
