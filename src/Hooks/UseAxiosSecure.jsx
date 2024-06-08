import axios from "axios";

const axiosSecure = axios.create({
  baseURL: `${import.meta.env.VITE_API_URL}`,
});
const UseAxiosSecure = () => {
  // request interceptor to add authorization header for every secure call to the api
  axiosSecure.interceptors.request.use(
    // config meaning hitting that path
    function (config) {
      // bringing the token here
      const token = localStorage.getItem("access-token");
      // console.log("req stopped by interceptor", token);
      config.headers.authorization = `Bearer ${token}`;
      return config;
    },
    function (error) {
      // Do something with request error
      return Promise.reject(error); // read something from the status code
    }
  );

  // intercepts 401 and 403 status
  axiosSecure.interceptors.response.use(
    function (response) {
      return response;
    },
    async (error) => {
      // const status = error.response.status; // we get the error code from here
      // console.log("status error in the interceptor", status);
      // if (status === 401 || status === 403) {
      //   // for 401 or 403 logout the user, and move the user to the login page
      //   await logOut(); // we need to logout the user as well
      //   navigate("/login");
      // }
      return Promise.reject(error);
    }
  );

  return axiosSecure;
};

export default UseAxiosSecure;
