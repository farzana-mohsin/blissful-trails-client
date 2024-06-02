const Image = ({ image }) => {
  return (
    <div>
      <span className=' bg-green-200 text-green-700 font-normal mr-2 px-4 py-2'>
        {image[0]}
      </span>
    </div>
  );
};

export default Image;
