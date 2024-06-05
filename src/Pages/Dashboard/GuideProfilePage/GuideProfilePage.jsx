import UseAxiosSecure from "../../../Hooks/UseAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import useAuthHook from "../../../Hooks/UseAuth";

const GuideProfilePage = () => {
  const { user } = useAuthHook();
  const axiosSecure = UseAxiosSecure();
  const { data: guides = [] } = useQuery({
    queryKey: ["guides"],
    queryFn: async () => {
      const res = await axiosSecure.get("/guides");
      console.log(res.data);
      return res.data;
    },
  });

  return (
    <div>
      <div>
        <div className='flex justify-evenly'></div>
        <div className='overflow-x-auto'>
          <h1>Tour Guides Profile</h1>
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
              {guides.map((item, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{user?.name}</td>
                  <td>{item.education}</td>
                  <td>${item.contact}</td>
                  <td></td>
                  <td></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default GuideProfilePage;
