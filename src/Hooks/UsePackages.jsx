import useAxiosPublic from "./UseAxiosPublic";
import { useQuery } from "@tanstack/react-query";

const UsePackages = () => {
  const axiosPublic = useAxiosPublic();
  const {
    data: packages = [],
    // isPending: loading,
    // refetch,
  } = useQuery({
    queryKey: ["packages"],
    queryFn: async () => {
      const res = await axiosPublic.get("/packages");
      return res.data;
    },
  });
  return [packages];
};

export default UsePackages;
