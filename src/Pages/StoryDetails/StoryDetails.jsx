import { useLoaderData } from "react-router-dom";
import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import { Rating } from "@smastrom/react-rating";
import { FacebookShareButton } from "react-share";
import { FacebookIcon } from "react-share";

const StoryDetails = () => {
  const loader = useLoaderData();
  const { rating, story, tripTitle } = loader;
  const currentPageUrl = window.location.href;

  return (
    <div className='min-h-[calc(100vh-320px)]'>
      <SectionTitle heading="Clients' Stories"></SectionTitle>
      <div className='max-w-xl mx-auto p-6 overflow-hidden rounded-lg shadow bg-black text-gray-100'>
        <article>
          <h2 className='text-xl font-bold bg-[#ffcc05] p-2 w-full text-black'>
            {tripTitle}
          </h2>
          <p className='mt-4 text-gray-200'>{story}</p>
          <div className='flex items-center mt-8 space-x-4 justify-between'>
            <div>
              <Rating
                style={{ maxWidth: 140 }}
                value={rating}
                readOnly
              />
            </div>
            <div>
              <FacebookShareButton url={currentPageUrl}>
                <FacebookIcon
                  size={36}
                  round={true}
                />
              </FacebookShareButton>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
};

export default StoryDetails;
