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
  //   console.log(cards);
  //   console.log(card);

  return (
    <div className="details">
      <section className="details-info">
        <div className="container">
          <img src={card.imgUrl} alt="" />
          <div className="d1">
            <p className="p1">{card.name}</p>
            <p className="p2">{card.price} $</p>
            <p className="p3">{card.category}</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Details;
