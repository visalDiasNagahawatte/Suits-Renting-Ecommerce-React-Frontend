import React from "react";
import NavBar from "../components/NavBar";
import {
  MDBInput,
  MDBCol,
  MDBRow,
  MDBCheckbox,
  MDBBtn,
  MDBIcon,
} from "mdb-react-ui-kit";
import Footer from "../components/Footer";

function LoginPage() {
  return (
    <div>
      <div>
        <NavBar></NavBar>
      </div>

      <div className="d-flex justify-content-center position-absolute top-50 start-50 translate-middle">
        <form>
          <MDBInput
            className="mb-4"
            type="email"
            id="form2Example1"
            label="Email address"
          />
          <MDBInput
            className="mb-4"
            type="password"
            id="form2Example2"
            label="Password"
          />

          <MDBRow className="mb-4">
            <MDBCol className="d-flex justify-content-center">
              <MDBCheckbox
                id="form2Example3"
                label="Remember me"
                defaultChecked
              />
            </MDBCol>
            <MDBCol>
              <a href="#!">Forgot password?</a>
            </MDBCol>
          </MDBRow>

          <MDBBtn type="submit" className="mb-4" block>
            Log in
          </MDBBtn>

          <div className="text-center">
            <p>
              Not a member? <a href="/signup">Register</a>
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

export default LoginPage;
