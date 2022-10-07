import React from "react";
import painter1 from "../painter1.jpg";
import painter2 from "../painter2.jpg";
import painter3 from "../painter3.jpg";
import pianter4 from "../pianter4.jpg";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Painter() {
  return (
    <>
    <Navbar />
      <div className="container">
        <div className="card">
          <img src={painter1} alt="no buses" />
          <div className="textGroup">
            <h1>Looking for that perfect painter? </h1>
            <a href="tel:045337373525">Contact: 0243804831</a>
            <h4>
              {" "}
              <a href="mailto:saeedlatif@gmail.com">
                {" "}
                Email:saeedlatif@gmail.com
              </a>
              <a href="Location:Danko"> Location: Danko</a>
              <a
                href="http://www.howtowithabe.co.za/"
              >
                {" "}
                Link Direction
              </a>
            </h4>
            <p>We offer all kind of painting and decorating works</p>
          </div>
        </div>

        <div className="card">
          <img src={painter2} alt="no buses" />
          <div className="textGroup">
            <h1>Looking for that perfect painter? </h1>
            <h4>
              {" "}
              <a href="http://www.howtowithabe.co.za/">
                {" "}
                Painter: http://www.howtowithabe.co.za/
              </a>
            </h4>
            <p>We offer all kind of painting and decorating works</p>
          </div>
        </div>

        <div className="card">
          <img src={painter3} alt="no buses" />
          <div className="textGroup">
            <h1>Looking for that perfect painter? </h1>
            <h4>
              {" "}
              <a href="http://www.howtowithabe.co.za/">
                {" "}
                Painter: http://www.howtowithabe.co.za/
              </a>
            </h4>
            <p>We offer all kind of painting and decorating works</p>
          </div>
        </div>

        <div className="card">
          <img src={pianter4} alt="no buses" />
          <div className="textGroup">
            <h1>Looking for that perfect painter? </h1>
            <h4>
              {" "}
              <a href="http://www.howtowithabe.co.za/">
                {" "}
                Painter: http://www.howtowithabe.co.za/
              </a>
            </h4>
            <p>We offer all kind of painting and decorating works</p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Painter;
