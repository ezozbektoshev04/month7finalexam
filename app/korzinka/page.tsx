"use client";
import React, { useEffect, useRef, useState } from "react";
import "./korzinka.scss";
import { ab } from "../store/types/types";

type NewArray = {
  id: string;
  name: string;
  category: string;
  price: string | number;
  stars: string;
  imgUrl: string;
  quantity: number;
};

const KorzinkaPage = () => {
  //   const [counter, setCounter] = useState(1);
  let ac = JSON.parse(localStorage.getItem("dishs") || "[]");
  const [added, setAdded] = useState<NewArray[]>(ac);

  useEffect(() => {
    localStorage.setItem(
      "dishs",
      JSON.stringify(
        added.map((el) => {
          return { ...el, quantity: el.quantity };
        })
      )
    );
  }, [added]);

  const decrement = (id: string) => {
    setAdded((card) => {
      const updated = card.map((el) =>
        el.id === id ? { ...el, quantity: (el.quantity || 1) - 1 } : el
      );
      return updated.filter((el) => el.quantity > 0);
    });
  };
  const increment = (id: string) => {
    setAdded((card) =>
      card.map((el) =>
        el.id === id ? { ...el, quantity: (el.quantity || 1) + 1 } : el
      )
    );
  };
  //   const aa = added.map((el) => {
  //     return el.quantity * (el.price * 1);
  //   });
  const calculateTotal = () => {
    return added.reduce(
      (total, el) => total + (el.quantity || 1) * Number(el.price),
      0
    );
  };
  const calculateTotal2 = () => {
    return added.reduce(
      (total, el) => total + (el.quantity || 1) * Number(el.price),
      3.42
    );
  };

  return (
    <div className="korzinka">
      <section className="bought-products">
        <div className="container">
          <div className="cards">
            {added.length > 0
              ? added.map((el) => (
                  <div key={el.id} className="card1">
                    <div className="d1">
                      <img src={el.imgUrl} alt="" className="card-img" />
                      <div className="d2">
                        {" "}
                        <p className="p1">{el.name}</p>
                        <p className="p2">{el.price}</p>
                      </div>
                    </div>
                    <div className="d2">
                      <div className="d3">
                        <button
                          className="minus"
                          onClick={() => decrement(el.id)}
                        >
                          -
                        </button>{" "}
                        <p className="p3">0{el.quantity || 1}</p>
                        <button
                          onClick={() => increment(el.id)}
                          className="plus"
                        >
                          +
                        </button>
                      </div>
                      <p className="p4">{el.quantity * Number(el.price)}</p>
                    </div>
                  </div>
                ))
              : null}
          </div>
        </div>
      </section>
      <section className="cost">
        <div className="container">
          <div className="d1">
            <p className="p1">Subtotal</p>
            <p className="p2">${calculateTotal().toFixed(2)}</p>
          </div>
          <div className="d1">
            <p className="p1">Delivery</p>
            <p className="p2">$3.59</p>
          </div>
          <div className="d2">
            <p className="p3">Total</p>
            <p className="p4">${calculateTotal2().toFixed(2)}</p>
          </div>
          <div className="but">
            <button className="btn6">Review Payment</button>
          </div>
        </div>
      </section>
      <section className="subscribe">
        <div className="container">
          <p className="p1">GET 50%</p>
          <div className="field">
            <input
              type="email"
              placeholder=" Enter Your Email Address"
              className="input2"
            />
            <button type="submit" className="btn4">
              Subscribe
            </button>
          </div>
          <img src="/image28.png" alt="" className="image27" />
        </div>
      </section>
    </div>
  );
};

export default KorzinkaPage;
