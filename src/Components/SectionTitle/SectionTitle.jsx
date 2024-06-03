import PropTypes from "prop-types";
const SectionTitle = ({ heading, subHeading }) => {
  return (
    <div className='mx-auto text-center md:w-4/12 my-8'>
      <h2 className='text-3xl uppercase border-y-4 py-4'>{heading}</h2>
      <p className='text-yellow-600 my-4'> {subHeading}</p>
    </div>
  );
};

SectionTitle.propTypes = {
  heading: PropTypes.object.isRequired,
  subHeading: PropTypes.object.isRequired,
};

export default SectionTitle;
