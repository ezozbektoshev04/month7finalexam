"use client";
import React, { useEffect, useState } from "react";
import useStore from "../store/useStore";
import "./dishes.scss";
import Link from "next/link";
import Loading from "../loading";
import { Dishes, ab } from "../store/types/types";
import { json } from "stream/consumers";

const DishesPage = () => {
  const [page, setPage] = useState(1);
  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(true);
  const [show3, setShow3] = useState(true);
  const [show4, setShow4] = useState(true);
  const [show5, setShow5] = useState(true);
  //   let [counter, setCounter] = useState(0);
  const [saveCounter, setSaveCounter] = useState(0);
  const [inputData, setInputData] = useState("");
  const { fetchDishes, pagenationDishes, allCards, cards, loading } =
    useStore();
  useEffect(() => {
    fetchDishes(inputData);
  }, [inputData]);

  let limit: number = 5;
  let numOfPages: number = Math.ceil(cards.length / limit);
  //   console.log(page);

  let arr = [];
  for (let i = 1; i <= numOfPages; i++) {
    arr.push(i);
  }
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let inp = e.target.value.toLowerCase();
    setInputData(inp);
  };
  useEffect(() => {
    pagenationDishes(page, limit, inputData);
  }, [page, inputData]);
  let ac = JSON.parse(localStorage.getItem("dishs") || "[]");
  const [data, setData] = useState<ab[] | []>(ac);

  const handleSave = (card: ab) => {
    if (!data.some((c) => c.id === card.id)) {
      setData([...data, card]);
      //   setSaveCounter(saveCounter + 1);
    }
  };
  useEffect(() => {
    localStorage.setItem(
      "dishs",
      JSON.stringify(
        data.map((el) => {
          return { ...el, quantity: 1 };
        })
      )
    );
  }, [data]);
  console.log(saveCounter);

  return (
    <div className="dishes">
      <section className="dishes-products">
        <div className="container">
          <input
            type="text"
            className="search"
            id="search"
            name="search"
            placeholder="Search..."
            onChange={handleChange}
          />
          <div className="cards">
            {loading == true ? <Loading /> : null}
            {allCards.map((el) => (
              <div className="card" key={el.id}>
                <img src="/image16.svg" alt="" className="img16" />
                <img src={el.imgUrl} alt="" className="image17" />
                <div className="card-bot">
                  <p className={el.category == "Healthy" ? "p3" : "p4"}>
                    {el.category}
                  </p>
                  <p className={el.category == "Trending" ? "p5" : "p4"}>
                    {el.category}
                  </p>
                  <p className={el.category == "Supreme" ? "p6" : "p4"}>
                    {el.category}
                  </p>
                  <Link href={`/dishes/${el.id}`} className="p2">
                    {el.name}
                  </Link>
                  <div className="d5">
                    <p className="p7">24min •</p>
                    <img src="/image17.svg" alt="" />
                    <p className="p7">{el.stars}</p>
                  </div>
                  <div className="d6">
                    <p className="p8">${el.price}</p>
                    <img
                      src="/image18.svg"
                      alt=""
                      onClick={() => handleSave(el)}
                      className="img18"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="btns">
            {arr.map((el, index) => (
              <button
                key={index}
                onClick={() => setPage(el)}
                className="pagebtn"
              >
                {el}
              </button>
            ))}
          </div>
        </div>
      </section>
      <section className="questions">
        <div className="container">
          <p className="p1">
            Frequently Asked <span className="sp1">Questions</span>
          </p>
          <div className="d10">
            <div className="d11">
              <p className="p2">How long does delivery take?</p>
              <img
                src="/plus.svg"
                alt=""
                onClick={() => setShow1(!show1)}
                className={show1 == true ? "show" : "hide"}
              />
              <img
                src="/minus.svg"
                alt=""
                onClick={() => setShow1(!show1)}
                className={show1 == false ? "show" : "hide"}
              />
            </div>
            <p className={show1 == false ? "p30" : "hide-text"}>
              You Can Get Information By Contacting Our Support Team Have 24/7
              Service. What’s The Difference Between Free And Paid Plan ?
            </p>
          </div>
          <div className="d10">
            <div className="d11">
              <p className="p2">How Does It Work ?</p>
              <img
                src="/plus.svg"
                alt=""
                onClick={() => setShow2(!show2)}
                className={show2 == true ? "show" : "hide"}
              />
              <img
                src="/minus.svg"
                alt=""
                onClick={() => setShow2(!show2)}
                className={show2 == false ? "show" : "hide"}
              />
            </div>
            <p className={show2 == false ? "p30" : "hide-text"}>
              You Can Get Information By Contacting Our Support Team Have 24/7
              Service. What’s The Difference Between Free And Paid Plan ?
            </p>
          </div>
          <div className="d10">
            <div className="d11">
              <p className="p2">How does your food delivery service work?</p>
              <img
                src="/plus.svg"
                alt=""
                onClick={() => setShow3(!show3)}
                className={show3 == true ? "show" : "hide"}
              />
              <img
                src="/minus.svg"
                alt=""
                onClick={() => setShow3(!show3)}
                className={show3 == false ? "show" : "hide"}
              />
            </div>
            <p className={show3 == false ? "p30" : "hide-text"}>
              You Can Get Information By Contacting Our Support Team Have 24/7
              Service. What’s The Difference Between Free And Paid Plan ?
            </p>
          </div>
          <div className="d10">
            <div className="d11">
              <p className="p2">What payment options do you accept?</p>
              <img
                src="/plus.svg"
                alt=""
                onClick={() => setShow4(!show4)}
                className={show4 == true ? "show" : "hide"}
              />
              <img
                src="/minus.svg"
                alt=""
                onClick={() => setShow4(!show4)}
                className={show4 == false ? "show" : "hide"}
              />
            </div>
            <p className={show4 == false ? "p30" : "hide-text"}>
              You Can Get Information By Contacting Our Support Team Have 24/7
              Service. What’s The Difference Between Free And Paid Plan ?
            </p>
          </div>
          <div className="d10">
            <div className="d11">
              <p className="p2">HDo you offer discounts or promotions?</p>
              <img
                src="/plus.svg"
                alt=""
                onClick={() => setShow5(!show5)}
                className={show5 == true ? "show" : "hide"}
              />
              <img
                src="/minus.svg"
                alt=""
                onClick={() => setShow5(!show5)}
                className={show5 == false ? "show" : "hide"}
              />
            </div>
            <p className={show5 == false ? "p30" : "hide-text"}>
              You Can Get Information By Contacting Our Support Team Have 24/7
              Service. What’s The Difference Between Free And Paid Plan ?
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DishesPage;
