import React from "react";
import light from "../light.png";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Electrician() {
  return (
    <>
      <Navbar />
      <div className="container">
        <div className="card">
          <img src={light} alt="no buses" />
          <div className="textGroup">
            <h1>
              Are you looking for the best electrician? you are in the right
              place{" "}
            </h1>
            <a href="tel:045337373525">Contact: 0243804831</a>
            <h4>
              {" "}
              <a href="mailto:saeedlatif@gmail.com">
                {" "}
                Email:salangalatif@gmail.com
                 
              </a>
              <a href="Location:Danko"> Location: Danko</a>
              <a href="http://www.howtowithabe.co.za/"> Link Direction</a>
            </h4>
            <p>
              We are into all kinds of electrical works and we offer you with
              the best among the best.
            </p>
          </div>
        </div>

        <div className="card">
          <img src={light} alt="no buses" />
          <div className="textGroup">
            <h1>
              {" "}
              Are you looking for the best electrician? you are in the right
              place{" "}
            </h1>
            <h4>
              {" "}
              <a href="http://www.howtowithabe.co.za/">
                {" "}
                http://www.howtowithabe.co.za/
              </a>
            </h4>
            <p>
              We are into all kinds of electrical works and we offer you with
              the best among the best.
            </p>
          </div>
        </div>

        <div className="card">
          <img src={light} alt="no buses" />
          <div className="textGroup">
            <h1>
              Are you looking for the best electrician? you are in the right
              place{" "}
            </h1>
            <h4>
              {" "}
              <a href="http://www.howtowithabe.co.za/">
                {" "}
                http://www.howtowithabe.co.za/
              </a>
            </h4>
            <p>
              We are into all kinds of electrical works and we offer you with
              the best among the best.
            </p>
          </div>
        </div>

        <div className="card">
          <img src={light} alt="no buses" />
          <div className="textGroup">
            <h1>
              Are you looking for the best electrician? you are in the right
              place{" "}
            </h1>
            <h4>
              {" "}
              <a href="http://www.howtowithabe.co.za/">
                {" "}
                http://www.howtowithabe.co.za/
              </a>
            </h4>
            <p>
              We are into all kinds of electrical works and we offer you with
              the best
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Electrician;
