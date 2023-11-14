"use client";
import React, { useEffect, useState } from "react";
import "./signup.scss";
import useStore from "./store/useStore";
import { Users } from "./store/types/types";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Footer from "./components/footer/Footer";

const Signup = () => {
  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);
  const [userInput, setUserInput] = useState<Users>({
    fullName: "",
    email: "",
    password: "",
  });
  const { user, register } = useStore();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserInput({
      ...userInput,
      [e.target.name]: e.target.value,
    });
    // register([userInput]);
  };
  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(user));
  }, [user]);
  // let aa = JSON.parse(localStorage.getItem("user") || "[]");
  // register(aa);
  const router = useRouter();
  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    register([userInput]);

    if (userInput.fullName === "") {
      setShow1(true);
    } else {
      setShow1(false);
    }
    if (userInput.email === "") {
      setShow2(true);
    } else {
      setShow2(false);
    }
    if (userInput.password === "") {
      setShow3(true);
    } else {
      setShow3(false);
    }
    if (
      show1 === false &&
      show2 === false &&
      show3 === false &&
      userInput.fullName !== ""
    ) {
      setTimeout(function () {
        router.push("/login");
      }, 5);
    }
  };

  return (
    <div className="signup">
      <div className="container">
        <div className="d1">
          <img src="/image12.svg" alt="" />
        </div>
        <div className="d10">
          <div className="left">
            <p className="p1">Sign Up To eatly</p>
            <form>
              <div className="d2">
                <input
                  type="text"
                  placeholder="Full Name"
                  id="fullName"
                  name="fullName"
                  className="input1"
                  onChange={handleChange}
                  required
                />
                <img src="/image13.svg" className="img13" alt="" />
                <span className={show1 === false ? "none" : "show"}>
                  Please enter your full name
                </span>
              </div>
              <div className="d2">
                <input
                  type="email"
                  placeholder="Email Address"
                  id="email"
                  name="email"
                  className="input1"
                  onChange={handleChange}
                />
                <img src="/image14.svg" className="img13" alt="" />
                <span className={show2 === false ? "none" : "show"}>
                  Please enter your email
                </span>
              </div>

              <div className="d2">
                <input
                  placeholder="Password"
                  type="password"
                  id="password"
                  name="password"
                  className="input1"
                  onChange={handleChange}
                />
                <img src="/image15.svg" className="img13" alt="" />
                <span className={show3 === false ? "none" : "show"}>
                  Please enter password
                </span>
              </div>
              <Link href="/login">
                <button className="btn6" onClick={handleSubmit} type="submit">
                  Sign Up
                </button>
              </Link>
            </form>
            <p className="p2">
              Already Have An Account?{" "}
              <Link href="/login" className="sp3">
                Log In
              </Link>
            </p>
          </div>
          <div className="right">
            <img src="/image11.png" alt="" className="img11" />
            <p className="p3">Find Foods With Love </p>
            <p className="p4">
              Eatly Is The Food Delivery Dashboard And Having More Than 2K+
              Dishes Including Asian, Chinese, Italians And Many More. Our
              Dashboard Helps You To Manage Orders And Money.
            </p>
          </div>
        </div>
        <div className="d11">
          <p className="p5">Privacy Policy</p>
          <p className="p5">Copyright 2022</p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
