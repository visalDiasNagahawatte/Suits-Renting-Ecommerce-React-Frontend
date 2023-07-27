import React, { useState } from "react";
import NavBar from "../components/NavBar";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { MDBInput, MDBCol, MDBRow, MDBBtn } from "mdb-react-ui-kit";
import Footer from "../components/Footer";
import { adminCredentials } from "../components/Data";

function LoginPage() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errorMessage, setErrorMessage] = useState("");

  const navigateTo = useNavigate();

  function handleInputChange(e) {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  }

  function login(e) {
    e.preventDefault();

    // Destructure the email and password from formData
    const { email, password } = formData;

    // Prepare data object to send
    const data = {
      email,
      password,
    };

    // Call the API to send data to the server
    sendLoginData(data);
  }

  function sendLoginData(data) {
    axios
      .post("http://localhost:8080/api/v1/user/login", null, {
        params: data,
      })
      .then((response) => {
        console.log(response.data);

        // Check if the user is an admin based on credentials
        const isAdmin = adminCredentials.some(
          (admin) =>
            admin.email === formData.email &&
            admin.password === formData.password
        );

        // Redirect based on admin status
        if (isAdmin) {
          navigateTo("/useradmin");
        } else {
          navigateTo("/renthomepage01");
        }
      })
      .catch((error) => {
        console.error(error);
        setErrorMessage("Invalid email or password");
      });
  }

  return (
    <div>
      <div>
        <NavBar></NavBar>
      </div>

      <div className="mb-7 justify-content-center position-absolute top-50 start-50 translate-middle">
        <form>
          <div className="text-danger text-center mb-4">{errorMessage}</div>

          <MDBInput
            className="mb-4"
            type="email"
            id="form2Example1"
            label="Email address"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
          />
          <MDBInput
            className="mb-4"
            type="password"
            id="form2Example2"
            label="Password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
          />

          <MDBRow className="mb-4">
            <MDBCol className="d-flex justify-content-center">
              <a href="#!">Forgot password?</a>
            </MDBCol>
          </MDBRow>

          <MDBRow className="mb-4">
            <MDBCol className="d-flex justify-content-center">
              <MDBBtn type="button" className="mb-4" onClick={login}>
                Log in
              </MDBBtn>
            </MDBCol>
          </MDBRow>
          <div className="text-center">
            <p>
              Not a member? <a href="/signup">Register</a>
            </p>
          </div>
        </form>
      </div>
      <div className=" fixed-bottom">
        <Footer></Footer>
      </div>
    </div>
  );
}

export default LoginPage;
