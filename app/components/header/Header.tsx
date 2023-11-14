"use client";
import React, { useState } from "react";
import "./header.scss";
import Link from "next/link";

const Header = () => {
  const [show, setShow] = useState(false);
  const handleShow = () => {
    setShow(!show);
  };
  return (
    <header>
      <nav className="container">
        <div className="d40">
          <div className="d1">
            <div className="logo">
              <a href="#">
                <img src="/image1.svg" alt="logo" />
              </a>
            </div>
            <div className="nav-links">
              <Link className="nav-link" href="/home">
                Home
              </Link>
              <Link className="nav-link" href="/dishes">
                Dishes
              </Link>
            </div>
          </div>
          <div className="nav-items">
            <div className="toggle-icon" onClick={handleShow}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="36px"
                height="36px"
                viewBox="0 0 24 24"
                style={{ fill: "#000" }}
              >
                <path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z"></path>
              </svg>
            </div>
            <Link href="/korzinka">
              <img src="/image2.svg" alt="" />
            </Link>
            <Link href="/login">
              <button className="btn1">Logout</button>
            </Link>
            <Link href="/">
              <button className="btn2">Sign Up</button>
            </Link>
          </div>
        </div>
        <div className={show === true ? "nav-toggle" : "hide"}>
          <Link href="/home" className="links" onClick={() => setShow(false)}>
            Home
          </Link>
          <Link href="/dishes" className="links" onClick={() => setShow(false)}>
            Dishes
          </Link>
          <Link
            href="/"
            className="links"
            onClick={() => {
              setShow(false);
              localStorage.removeItem("user");
            }}
          >
            Logout
          </Link>
          <Link href="/login" className="links" onClick={() => setShow(false)}>
            Login
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
