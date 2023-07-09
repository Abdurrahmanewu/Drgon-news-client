import React from "react";
import { useLoaderData } from "react-router-dom";

const Catagory = () => {
  const categotyNews = useLoaderData();
  return (
    <div>
      <h1>Category length {categotyNews.length}</h1>
    </div>
  );
};

export default Catagory;
