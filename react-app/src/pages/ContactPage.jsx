import React from "react";
import {
  MDBInput,
  MDBCheckbox,
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
} from "mdb-react-ui-kit";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

export default function ContactPage() {
  return (
    <div>
      <div className="mb-5 sticky-lg-top">
        <NavBar></NavBar>
      </div>

      <div>
        <MDBContainer>
          <MDBRow>
            <MDBCol size="md">
              <div>
                <p>Contact information email : info@ceylonexecutives.com.lk</p>{" "}
                <p>
                  Address: No: 666, Old Galle Road, Horethuduwa, Moratuwa, Sri
                  Lanka
                </p>
                <p>Hot line : 0779293915</p>
              </div>
            </MDBCol>
            <MDBCol className="d-flex" size="md">
              <form>
                <MDBInput id="form4Example1" wrapperClass="mb-4" label="Name" />
                <MDBInput
                  type="email"
                  id="form4Example2"
                  wrapperClass="mb-4"
                  label="Email address"
                />
                <MDBInput
                  wrapperClass="mb-4"
                  textarea
                  id="form4Example3"
                  rows={4}
                  label="Message"
                />
                <MDBCheckbox
                  wrapperClass="d-flex justify-content-center mb-4"
                  id="form4Example4"
                  label="Send me a copy of this message"
                  defaultChecked
                />
                <MDBBtn type="submit" className="mb-4" block>
                  SEND MESSAGE
                </MDBBtn>
              </form>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>
      <div className="fixed-bottom">
        <Footer></Footer>
      </div>
    </div>
  );
}
