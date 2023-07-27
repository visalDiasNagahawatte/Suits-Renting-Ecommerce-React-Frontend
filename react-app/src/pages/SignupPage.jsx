import React, { useState } from "react";
import {
  MDBCol,
  MDBRow,
  MDBInput,
  MDBBtn,
  MDBCheckbox,
} from "mdb-react-ui-kit";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function SignupPage() {
  const [formValue, setFormValue] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const onChange = (e) => {
    setFormValue({ ...formValue, [e.target.name]: e.target.value });
  };

  const navigateTo = useNavigate(); // Get the history object

  const handleSignup = (e) => {
    e.preventDefault();

    // Combine first name and last name
    const userName = `${formValue.firstName} ${formValue.lastName}`;

    // Prepare data object to send
    const data = {
      userName,
      email: formValue.email,
      password: formValue.password,
    };

    // Call the API to send data to the server
    sendSignupData(data);
  };

  function sendSignupData(data) {
    axios
      .post("http://localhost:8080/api/v1/user/signup", data)
      .then((response) => {
        console.log(response.data);
        navigateTo("/login");
      })
      .catch((error) => {
        console.error(error);
      });
  }

  return (
    <div>
      <NavBar />
      <div className="d-flex justify-content-center position-absolute top-50 start-50 translate-middle">
        <form onSubmit={handleSignup}>
          <MDBRow className="mb-4">
            <MDBCol>
              <MDBInput
                name="firstName"
                id="validationCustom01"
                required
                label="First name"
                value={formValue.firstName}
                onChange={onChange}
              />
            </MDBCol>
            <MDBCol>
              <MDBInput
                name="lastName"
                id="validationCustom02"
                required
                label="Last name"
                value={formValue.lastName}
                onChange={onChange}
              />
            </MDBCol>
          </MDBRow>
          <MDBInput
            className="mb-4"
            name="email"
            type="email"
            id="validationCustom03"
            required
            label="Email address"
            value={formValue.email}
            onChange={onChange}
          />
          <MDBInput
            className="mb-4"
            name="password"
            type="password"
            id="validationCustom04"
            required
            label="Password"
            value={formValue.password}
            onChange={onChange}
          />
          <MDBCheckbox
            wrapperClass="d-flex justify-content-center mb-4"
            id="form3Example5"
            label="Subscribe to our newsletter"
            defaultChecked
          />
          <MDBBtn type="submit" className="mb-4" block>
            Sign up
          </MDBBtn>
          <div className="text-center">
            <p>
              Already have an account? <a href="/login">Log In</a>
            </p>
          </div>
        </form>
      </div>
      <div className="fixed-bottom">
        <Footer />
      </div>
    </div>
  );
}
