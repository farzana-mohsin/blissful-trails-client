import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { IoIosAirplane } from "react-icons/io";
import PackagesCards from "../../../../Components/PackagesCards/PackagesCards";

const TourTypeCategories = () => {
  const tours = useLoaderData();
  const [items, setItems] = useState(tours);

  return (
    <div>
      {items.map((item, index) => (
        <PackagesCards
          key={index}
          item={item}
        ></PackagesCards>
      ))}
    </div>
  );
};

export default TourTypeCategories;
