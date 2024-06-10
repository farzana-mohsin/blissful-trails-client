import { useNavigate } from "react-router-dom";
const ErrorPage = () => {
  const navigate = useNavigate();
  return (
    <section className='flex items-center h-fit text-gray-700 justify-center my-0'>
      <div className='container flex flex-col items-center justify-center px-5 mx-auto'>
        <div
          className='hero h-[850px] mx-auto w-full object-contain relative'
          style={{
            backgroundImage:
              "url(https://i.ibb.co/YpHtykT/main-how-to-design-404-page.webp)",
          }}
        >
          <button
            className='absolute bottom-20 left-20 right-20 noopener noreferrer px-5 lg:px-8 py-5  font-semibold bg-yellow-800 text-white rounded-2xl text-lg border border-white'
            onClick={() => navigate("/")}
          >
            Take Me Home
          </button>
        </div>
      </div>
    </section>
  );
};

export default ErrorPage;
