"use client";
import React, { useEffect, useState } from "react";
import "./home.scss";
import Link from "next/link";
import useStore from "../store/useStore";
// import { ab } from "../store/types/types";
import Loading from "../loading";

const HomePage = () => {
  const [ali, setAli] = useState(false);
  const { fetchDishes, cards, loading } = useStore();
  useEffect(() => {
    fetchDishes("");
  }, []);
  // console.log(cards);
  // cards.map((el) => {
  //   if (el.category == "Healthy") {
  //     setAli(true);
  //   }
  // });

  return (
    <div className="home">
      <section className="hero">
        <div className="container">
          <div className="d2">
            <div className="d1">
              <span className="line1"></span>
              <p className="p3">OVER 1000 USERS</p>
            </div>
            <p className="p1">
              Enjoy Foods All Over The <span className="sp1">World</span>
            </p>
            <p className="p2">
              EatLy help you set saving goals, earn cash back offers, Go to
              disclaimer for more details and get paychecks up to two days
              early. Get a <span className="sp2">$20 bonus</span>.
            </p>
            <Link href="">
              <button className="btn3">Get Started</button>
            </Link>
          </div>
          <div className="d3">
            <img src="/image3.png" alt="" className="img3" />
          </div>
        </div>
      </section>
      <section className="home-about">
        <div className="container">
          <div className="d4">
            <p className="p4">10K+</p>
            <p className="p5">Satisfied Costumers All Great Over The World </p>
          </div>
          <div className="d4">
            <p className="p4">4M</p>
            <p className="p5">
              Healthy Dishes Sold Including Milk Shakes Smooth
            </p>
          </div>
          <div className="d4">
            <p className="p4">99.99%</p>
            <p className="p5">
              Reliable Customer Support We Provide Great Experiences
            </p>
          </div>
        </div>
      </section>
      <section className="home-down">
        <div className="container">
          <div className="d5">
            <img src="/image5.png" alt="" />
          </div>
          <div className="d6">
            <p className="p6">
              Premium <span className="sp3">Quality</span> For Your Health
            </p>
            <ul>
              <li>
                Premium quality food is made with ingredients that are packed
                with essential vitamins, minerals.
              </li>
              <li>
                These foods promote overall wellness by support healthy
                digestion and boosting immunity
              </li>
            </ul>
            <Link
              href="https://play.google.com/store/apps?hl=en&gl=US"
              target="blank"
              className="market-link"
            >
              <button className="btn5">
                Download <img src="/image6.svg" alt="" />
              </button>
            </Link>
          </div>
        </div>
      </section>
      <section className="booking">
        <div className="container">
          <div className="d10">
            <div className="d7">
              <img src="/image7.png" alt="" className="img7" />
            </div>
            <div className="d8">
              <p className="p7">The Chicken King</p>
              <div className="d9">
                <p className="p8">24min •</p>
                <img src="/image8.svg" alt="" />
                <p className="p8">4.8</p>
              </div>
              <img src="/image9.svg" alt="" />
            </div>
          </div>
        </div>
      </section>
      <section className="top-dishes">
        <div className="container">
          <p className="p1">
            Our Top <span className="sp5">Dishes</span>
          </p>
          <div className="cards">
            {loading == true ? <Loading /> : null}
            {cards.slice(0, 5).map((el) => (
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
                  <p className="p2">{el.name}</p>
                  <div className="d5">
                    <p className="p7">24min •</p>
                    <img src="/image17.svg" alt="" />
                    <p className="p7">{el.stars}</p>
                  </div>
                  <div className="d6">
                    <p className="p8">${el.price}</p>
                    <img src="/image18.svg" alt="" className="img18" />
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="view">
            <Link href="/dishes">
              <img src="/image19.svg" alt="" />
            </Link>
          </div>
        </div>
      </section>
      <section className="home-purchase">
        <div className="container">
          <div className="d1">
            <p className="p1">
              Control <span className="sp1">Purchases</span> Via Dashboard
            </p>
            <div className="mini-cards">
              <div className="mini-card">
                <div className="d3">
                  <img src="/forDb/1.svg" alt="" className="fordb1" />
                  <div className="d2">
                    <p className="p2">Chicken Hell</p>
                    <p className="p3">On The Way</p>
                  </div>
                </div>
                <p className="p4">3:09 PM</p>
              </div>
              <div className="mini-card">
                <div className="d3">
                  <img src="/forDb/2.svg" alt="" className="fordb1" />
                  <div className="d2">
                    <p className="p2">Swe Dish</p>
                    <p className="p3">On The Way</p>
                  </div>
                </div>
                <p className="p4">Yesterday</p>
              </div>
              <div className="mini-card">
                <div className="d3">
                  <img src="/forDb/3.svg" alt="" className="fordb1" />
                  <div className="d2">
                    <p className="p2">Fish Hell Veg</p>
                    <p className="p6">Canceled</p>
                  </div>
                </div>
                <p className="p4">Yesterday</p>
              </div>
            </div>
          </div>
          <div className="d6">
            <div className="d7">
              <p className="p1">Purchases</p>
              <select name="month" id="month" className="select">
                <option value="0">This Month</option>
                <option value="1">Last Month</option>
                <option value="2">3 Month ago</option>
              </select>
            </div>
            <div className="d8">
              <div className="d9">
                <div className="d10">
                  <img src="/image20.svg" alt="" />
                  <div className="d11">
                    <p className="p7">Expense</p>
                    <p className="p8">Increased By 10%</p>
                  </div>
                </div>
                <p className="p9">$409.00</p>
              </div>
              <img src="/image22.png" className="img22" alt="" />
            </div>
            <div className="d8">
              <div className="d9">
                <div className="d10">
                  <img src="/image21.svg" alt="" />
                  <div className="d11">
                    <p className="p7">Vocher Usage</p>
                    <p className="p8">Increased By 5%</p>
                  </div>
                </div>
                <p className="p9">$45.78</p>
              </div>
              <img src="/image23.png" className="img22" alt="" />
            </div>
          </div>
        </div>
      </section>
      <section className="customer-info">
        <div className="container">
          <p className="p1">
            <span className="sp3">Customer</span> Say
          </p>
          <div className="customer-cards">
            <div className="customer-card">
              <div className="d1">
                <div className="d20">
                  <img src="/image24.png" alt="" />
                  <div className="d2">
                    <p className="p2">Alexander R.</p>
                    <p className="p3">01 Year With Us </p>
                  </div>
                </div>
                <img src="/image25.svg" alt="" />
              </div>
              <p className="p4">
                “ Online invoice payment helps companies save time, are faster
                and save maximum effort for the clients and save maximum effort.
                Online invoice payment helps companies save time ”
              </p>
              <img src="/image27.svg" alt="" />
            </div>
            <div className="customer-card aa a2">
              <div className="d1" style={{ display: "none" }}>
                <div className="d20">
                  <img src="/image24.png" alt="" />
                  <div className="d2">
                    <p className="p2">Alexander R.</p>
                    <p className="p3">01 Year With Us </p>
                  </div>
                </div>
                <img src="/image25.svg" alt="" />
              </div>
              <p className="p4">
                “ Online invoice payment helps companies save time, are faster
                and save maximum effort for the clients and save maximum effort.
                Online invoice payment helps companies save time ”
              </p>
              <img src="/image27.svg" alt="" />
            </div>
            <div className="customer-card aa a1">
              <div className="d1" style={{ display: "none" }}>
                <div className="d20" style={{ display: "none" }}>
                  <img src="/image24.png" alt="" />
                  <div className="d2">
                    <p className="p2">Alexander R.</p>
                    <p className="p3">01 Year With Us </p>
                  </div>
                </div>
                <img src="/image25.svg" alt="" />
              </div>
              <p className="p4">
                “ Online invoice payment helps companies save time, are faster
                and save maximum effort for the clients and save maximum effort.
                Online invoice payment helps companies save time ”
              </p>
              <img src="/image27.svg" alt="" />
            </div>
            <img src="/image26.png" alt="" className="img26" />
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

export default HomePage;
