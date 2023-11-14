"use client";
import React, { useEffect, useState } from "react";
import "./login.scss";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Users } from "../store/types/types";

const Login = () => {
  const [userInput, setUserInput] = useState<Users>({
    fullName: "",
    email: "",
    password: "",
  });
  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);
  const router = useRouter();
  const aa = JSON.parse(localStorage.getItem("user") || "[]");
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserInput({
      ...userInput,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

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
    if (show2 === false && show3 === false && userInput.password !== "") {
      setTimeout(function () {
        aa.map((el: Users) => {
          if (
            el.email === userInput.email &&
            el.password === userInput.password
          ) {
            router.push("/home");
          } else {
            alert("Password or Email is incorrect");
          }
        });
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
            <p className="p1">Sign In To eatly</p>
            <form>
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
                  Please enter your password
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
              <Link href="/" className="sp3">
                Sign Up
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

export default Login;
