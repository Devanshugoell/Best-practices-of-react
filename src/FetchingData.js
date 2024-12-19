import React, { useEffect, useState } from "react";

const FetchingData = () => {
  const [data, setData] = useState();

  const fetchingData = async () => {
    try {
      const data = await fetch("https://fakestoreapi.com/products");
      const response = await data.json();
      setData(response);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchingData();
  }, []);

  return data ? <h1>We have got the</h1> : <h1> We have not got the data </h1>;
};

export default FetchingData;
