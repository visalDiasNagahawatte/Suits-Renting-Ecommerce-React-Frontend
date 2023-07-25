import React, { useState } from "react";
import {
  MDBCol,
  MDBRow,
  MDBIcon,
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

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigateTo = useNavigate(); // Get the history object

  const handleSignup = (e) => {
    e.preventDefault();

    // Combine first name and last name
    const userName = `${firstName} ${lastName}`;

    // Prepare data object to send
    const data = {
      userName,
      email,
      password,
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
      <div>
        <NavBar></NavBar>
      </div>
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
                onChange={(e) => {
                  setFirstName(e.target.value);
                  onChange(e);
                }}
              />
            </MDBCol>
            <MDBCol>
              <MDBInput
                name="lastName"
                id="validationCustom02"
                required
                label="Last name"
                value={formValue.lastName}
                onChange={(e) => {
                  setLastName(e.target.value);
                  onChange(e);
                }}
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
            onChange={(e) => {
              setEmail(e.target.value);
              onChange(e);
            }}
          />
          <MDBInput
            className="mb-4"
            name="password"
            type="password"
            id="validationCustom04"
            required
            label="Password"
            value={formValue.password}
            onChange={(e) => {
              setPassword(e.target.value);
              onChange(e);
            }}
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
            {/* <p>or sign up with:</p>
            <MDBBtn floating color="secondary" className="mx-1">
              <MDBIcon fab icon="facebook-f" />
            </MDBBtn>
            <MDBBtn floating color="secondary" className="mx-1">
              <MDBIcon fab icon="google" />
            </MDBBtn>
            <MDBBtn floating color="secondary" className="mx-1">
              <MDBIcon fab icon="twitter" />
            </MDBBtn>
            <MDBBtn floating color="secondary" className="mx-1">
              <MDBIcon fab icon="github" />
            </MDBBtn> */}
          </div>
        </form>
      </div>
      <div className="fixed-bottom">
        <Footer></Footer>
      </div>
    </div>
  );
}
