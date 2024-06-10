import PropTypes from "prop-types";
const SectionTitle = ({ heading, subHeading }) => {
  return (
    <div className='mx-auto text-center md:w-4/12 my-8'>
      <h2 className='text-3xl uppercase border-y-4 py-4 text-[#ffcc05] font-bold'>
        {heading}
      </h2>
      <p className='text-amber-700 my-4 text-xs md:text-lg'> {subHeading}</p>
    </div>
  );
};

SectionTitle.propTypes = {
  heading: PropTypes.string.isRequired,
  subHeading: PropTypes.string.isRequired,
};

export default SectionTitle;
