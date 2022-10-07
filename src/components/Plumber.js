import React from "react";
import plumber2 from "../plumber 2.jpg";
import plumber1 from "../plumber 1.png";
import plumber3 from "../plumber 3.jpg";
import plumber4 from "../plumber 4.jpg";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Plumber() {
  return (
    <>
    <Navbar />
      <div className="h3">
        <div className="container">
          <div className="card">
            <img src={plumber2} alt="no buses" />
            <div className="textGroup">
              <h2>Want that perfect plumber? </h2>
              <h2>Name :Saeed </h2>
              <a href="mailto:saeedabdulrazak95@gmail.com">
                Email:saeed@gmail.com{" "}
              </a>
              <a href="tel:0246966079">Contact: 0246966079</a>{" "}
              <a href="Location:Danko"> Location: Danko</a>
              <a
                href="https://www.google.com/maps/place/Okaala+Ent/@10.0320283,
              -2.4742992,16.75z/data=!4m12!1m6!3m5!1s0xfcd7d4e4b96faf7:0xfe48b67621e7465b!2s
              Danko+Islamic+Primary+School!8m2!3d10.0320342!4d-2.4720904!3m4!1s0xfcd7d84ab84de37
              :0x9cc235878ab18c3b!8m2!3d10.
              0310878!4d-2.4715349?hl=en"
              >
                {" "}
                Link Direction
              </a>
              <p>We offer all kind of plumbing works</p>
            </div>
          </div>

          <div className="card">
            <img src={plumber3} alt="no artisan" />
            <div className="textGroup">
              <h1>Want that perfect plumber? </h1>
              <h4>
                {" "}
                <a href="https://www.coppelplumbingcompany.com/">
                  <a href="Location:Danko">Home</a>
                  Location: Danko link direction
                  https://www.coppelplumbingcompany.com/
                </a>
              </h4>
              <p>We offer all kind of plumbing works</p>
            </div>
          </div>

          <div className="card">
            <img src={plumber4} alt="no buses" />
            <div className="textGroup">
              <h1>Want that perfect plumber? </h1>
              <h4>
                {" "}
                <a href="https://www.coppelplumbingcompany.com/">
                  {" "}
                  Plumber: https://www.coppelplumbingcompany.com/
                </a>
              </h4>
              <p>We offer all kind of plumbing works</p>
            </div>
          </div>

          <div className="card">
            <img src={plumber1} alt="no buses" />
            <div className="textGroup">
              <h1>Want that perfect plumber? </h1>
              <h4>
                {" "}
                <a href="https://www.shutterstock.com/search/plumber+cartoon">
                  {" "}
                  Plumber:
                  https:https://www.shutterstock.com/search/plumber+cartoon
                </a>
              </h4>
              <p>We offer all kind of plumbing works</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Plumber;
