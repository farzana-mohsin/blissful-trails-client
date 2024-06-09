import { useQuery } from "@tanstack/react-query";

import { Link } from "react-router-dom";
import useAuthHook from "../../Hooks/UseAuth";
import UseAxiosSecure from "../../Hooks/UseAxiosSecure";
import useAxiosPublic from "../../Hooks/UseAxiosPublic";

const GuideProfilePage = () => {
  const axiosPublic = useAxiosPublic();
  const { data: guides = [] } = useQuery({
    queryKey: ["guides"],
    queryFn: async () => {
      const res = await axiosPublic.get("/guides");
      console.log(res.data);
      return res.data;
    },
  });

  return (
    <div className='overflow-x-auto flex space-x-10 lg:ml-36'>
      <table className='table w-full'>
        {/* head */}
        <thead>
          <tr className='w-full text-base font-bold'>
            <th>#</th>
            <th>Guide Name</th>
            <th>Education</th>
            <th>Contact</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {guides.map((guide, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{guide.name}</td>
              <td>{guide.education}</td>
              <td>{guide.contact}</td>
              <td>
                <Link to={`/guides/${guide._id}`}>
                  <button className='btn bg-[#ffcc05] border-white p-3'>
                    View Details
                  </button>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default GuideProfilePage;
