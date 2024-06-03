const TourPlan = ({ tour, index }) => {
  return (
    <div>
      <ul className='steps steps-vertical'>
        <li className='step step-primary'>{tour.description}</li>
      </ul>
    </div>
  );
};

export default TourPlan;
