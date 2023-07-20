import React from "react";
import "./AboutPage.css";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

const AboutPage = () => {
  return (
    <div>
      <div className="mb-1 sticky-lg-top">
        <NavBar></NavBar>
      </div>
      <div className="row" style={{ margin: 0, padding: 0 }}>
        <div className="image">
          <h1 className="text">ABOUT US</h1>
        </div>
        <div className="left col-6">
          <h3 className="text1">Good Reputation</h3>
          <p className="text2">
            “Suit & Tie by Raphael”, is a top ranked tailored suit boutiques in
            Colombo that provides “Bespoke & Made to Measure” suits that fits
            you perfectly. Full canvas, half canvas and fused suits are mastered
            by our professional tailors. We offer the trendiest Italian cuts and
            silhouettes in town. A wide range of the finest fabrics which are
            sourced from Italy, England, Bangkok and Hong Kong are available at
            our own design studio.
          </p>
        </div>
        <div className="right col-6">
          <div className="image2">
            <img
              src="https://www.suitandtie.lk/wp-content/uploads/elementor/thumbs/about-q91q6vyy1rfkyqfrjsd1yxeiw099pmvp2wfpmv3kq4.jpg"
              alt=""
            />
          </div>
        </div>
        <div className="div paragraph mb-5">
          <p className="text3">
            We also offer the world’s best luxury fabric brands such as
            Ermenegildo Zegna, Scabal, Reda, Donetella & Caccioppoli Napoli.
          </p>
          <p className="text4">
            Our suits are fully customized according to the customer
            requirement. A wide range of linings and a host of custom details
            such as the fit, lapel shape,
            <br />
            vents, pockets style & buttons can be chosen by our customers.
          </p>
          <p className="text5">
            The attention of our professional designers & expert tailors who
            will work with you to craft a suit so superb, it will last for years
            to come. A sound <br></br>investment for your professional life, a
            wedding or a formal occasion.
          </p>
        </div>
      </div>
      <div>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default AboutPage;
