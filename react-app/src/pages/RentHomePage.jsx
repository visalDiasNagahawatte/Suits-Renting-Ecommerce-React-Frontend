import React from "react";
import "./RentHomePage.css";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBIcon,
} from "mdb-react-ui-kit";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

function RentHomePage() {
  return (
    <div>
      <div className="mb-3">
        <NavBar></NavBar>
      </div>
      <div></div>
      <div>
        <Footer></Footer>
      </div>
    </div>
  );
}

export default RentHomePage;
