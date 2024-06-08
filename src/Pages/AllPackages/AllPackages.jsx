import PackagesCards from "../../Components/PackagesCards/PackagesCards";
import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import UsePackages from "../../Hooks/UsePackages";

const AllPackages = () => {
  const [packages] = UsePackages();
  return (
    <div>
      <SectionTitle
        heading='All Packages'
        subHeading='When it comes to exploring exotic places, the choices are numerous. Whether you like peaceful destinations or vibrant landscapes, we have offers for you.'
      ></SectionTitle>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-16'>
        {packages.map((item, index) => (
          <PackagesCards
            key={index}
            item={item}
          ></PackagesCards>
        ))}
      </div>
    </div>
  );
};

export default AllPackages;
