import React from "react";
import {
  MDBInput,
  MDBCol,
  MDBRow,
  MDBCheckbox,
  MDBBtn,
  MDBIcon,
} from "mdb-react-ui-kit";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

export default function SignupPage() {
  return (
    <div>
      <div>
        <NavBar></NavBar>
      </div>
      <div className="d-flex justify-content-center position-absolute top-50 start-50 translate-middle">
        <form>
          <MDBRow className="mb-4">
            <MDBCol>
              <MDBInput id="form3Example1" label="First name" />
            </MDBCol>
            <MDBCol>
              <MDBInput id="form3Example2" label="Last name" />
            </MDBCol>
          </MDBRow>
          <MDBInput
            className="mb-4"
            type="email"
            id="form3Example3"
            label="Email address"
          />
          <MDBInput
            className="mb-4"
            type="password"
            id="form3Example4"
            label="Password"
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
            <p>or sign up with:</p>
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
            </MDBBtn>
          </div>
        </form>
      </div>
      <div className="fixed-bottom">
        <Footer></Footer>
      </div>
    </div>
  );
}
