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
      const { id, title, category, description, rating, price } = item;

      return (
        <section className="pro">
          <div key={id} className="products">
            <h1>{title}</h1>
            <p>{category}</p>
            <img className="images" src={item.image} alt="product" />
            <p>{description}</p>
            <p>{rating.count}</p>
            <p>{price} $</p>
          </div>
        </section>
      );
    })
  ) : (
    <h1> We have not got the data </h1>
  );
};

export default FetchingData;
