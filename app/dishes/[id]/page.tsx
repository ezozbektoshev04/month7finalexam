"use client";
import React, { useEffect } from "react";
import "./details.scss";
// import { useStore } from "zustand";
import useStore from "../../store/useStore";

type param = {
  params: {
    id: string;
  };
};

const Details = ({ params }: param) => {
  const { fetchDishe, card } = useStore();
  useEffect(() => {
    fetchDishe(params.id);
  }, []);
  // console.log(card);

  return (
    <div className="details">
      <section className="details-info">
        {card.length > 0 &&
          card.map((el) => (
            <div key={el.id} className="container">
              <img src={el.imgUrl} alt="" />
              <div className="d1">
                <p className="p1">{el.name}</p>
                <p className="p2">{el.price} $</p>
                <p className="p3">{el.category}</p>
              </div>
            </div>
          ))}
      </section>
    </div>
  );
};

export default Details;
