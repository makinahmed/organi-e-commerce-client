import React from "react";
import { useSelector } from "react-redux";

const All = () => {
  const all = useSelector((state) => state.features.displayFeatures);
  const allProducts = all.filter((a) => a.category.toLowerCase() === "fresh meat");
  // console.log(allProducts, ' I am all ');
  return <div>
    <h2>I am LINK </h2>
  </div>;
};

export default All;
