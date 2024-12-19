import React, { useEffect, useState } from "react";
import "./FetchingData.css";

const FetchingData = () => {
  const [data, setData] = useState();

  const fetchingData = async () => {
    try {
      const data = await fetch("https://fakestoreapi.com/products");
      const response = await data.json();
      setData(response);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchingData();
  }, []);

  return data ? (
    data.map((item) => {
      return (
        <section className="pro">
          <div key={item.id} className="products">
            <h1>{item.title}</h1>
            <p>{item.category}</p>
            <img className="images" src={item.image} alt="product" />
            <p>{item.description}</p>
            <p>{item.rating.count}</p>
            <p>{item.price} $</p>
          </div>
        </section>
      );
    })
  ) : (
    <h1> We have not got the data </h1>
  );
};

export default FetchingData;
