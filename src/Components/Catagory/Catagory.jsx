import React from "react";
import { useLoaderData } from "react-router-dom";
import NewsSummaryCard from "../Shared/NewsSummaryCard/NewsSummaryCard";

const Catagory = () => {
  const categotyNews = useLoaderData();
  // console.log(categotyNews);
  return (
    <div>
      <h1>Category length {categotyNews.length}</h1>
      {categotyNews.map((news) => (
        <NewsSummaryCard key={news._id} news={news}></NewsSummaryCard>
      ))}
    </div>
  );
};

export default Catagory;
