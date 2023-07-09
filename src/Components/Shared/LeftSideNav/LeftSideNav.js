import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const LeftSideNav = () => {
  const [catagories, setCatagories] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/news-categories")
      .then((res) => res.json())
      .then((data) => setCatagories(data));
  }, []);
  return (
    <div>
      <h4>Number of catagories {catagories.length}</h4>
      {catagories.map((catagory) => (
        <p key={catagory.id}>
          <Link to={`/category/${catagory.id}`}>{catagory.name}</Link>
        </p>
      ))}
    </div>
  );
};

export default LeftSideNav;
