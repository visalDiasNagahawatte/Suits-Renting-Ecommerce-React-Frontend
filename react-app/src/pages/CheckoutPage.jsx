import React from "react";
import {
  MDBRow,
  MDBCol,
  MDBInput,
  MDBCheckbox,
  MDBBtn,
} from "mdb-react-ui-kit";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import "./CheckoutPage.css";

function CheckoutPage() {
  return (
    <div>
      <div className="mb-5 sticky-lg-top">
        <NavBar></NavBar>
      </div>
      <div>
        {/* <!-- cart + summary --> */}
        <section className="bg-light my-5">
          <div className="container">
            <div className="row">
              {/* <!-- form --> */}
              <div className="shadow-0 border bill col-lg-4 me-5">
                <form>
                  <h3 className="bill-heading">Billing Information</h3>
                  <MDBRow className="mb-4">
                    <MDBCol>
                      <MDBInput id="form6Example1" label="First name" />
                    </MDBCol>
                    <MDBCol>
                      <MDBInput id="form6Example2" label="Last name" />
                    </MDBCol>
                  </MDBRow>

                  <MDBInput
                    wrapperClass="mb-4"
                    id="form6Example3"
                    label="Address"
                  />
                  <MDBInput
                    wrapperClass="mb-4"
                    id="form6Example4"
                    label="City"
                  />
                  <MDBInput
                    wrapperClass="mb-4"
                    type="email"
                    id="form6Example5"
                    label="NIC Number"
                  />
                  <MDBInput
                    wrapperClass="mb-4"
                    type="tel"
                    id="form6Example6"
                    label="Phone"
                  />

                  <MDBInput
                    wrapperClass="mb-4"
                    textarea
                    id="form6Example7"
                    rows={4}
                    label="Additional information"
                  />
                </form>
              </div>
              <div className="shadow-0 border measurements col-lg-4 me-4">
                <form>
                  <h3 className="measurements-heading">Your Measurements</h3>
                  <MDBRow className="mb-4">
                    <MDBCol>
                      <MDBInput id="form6Example1" label="Waist Size" />
                    </MDBCol>
                    <MDBCol>
                      <MDBInput id="form6Example2" label="Hip Size" />
                    </MDBCol>
                  </MDBRow>

                  <MDBInput
                    wrapperClass="mb-4"
                    id="form6Example3"
                    label="Pant Length"
                  />
                  <MDBInput
                    wrapperClass="mb-4"
                    id="form6Example4"
                    label="Dress Shirt Neck Size"
                  />
                  <MDBInput
                    wrapperClass="mb-4"
                    id="form6Example5"
                    label="Dress Shirt Sleeve Length"
                  />
                  <MDBInput
                    wrapperClass="mb-4"
                    id="form6Example6"
                    label="Suit Jacket Size"
                  />

                  <MDBInput
                    wrapperClass="mb-4"
                    textarea
                    id="form6Example7"
                    rows={4}
                    label="Additional information"
                  />
                </form>
              </div>
              {/* <!-- form --> */}
              {/* <!-- summary --> */}
              <div className="col-lg-3 ms-4">
                <div className="card shadow-0 border">
                  <div className="card-body">
                    <div className="d-flex justify-content-between">
                      <p className="mb-2">Total price:</p>
                      {/* <p className="mb-2">Rs. {total.toFixed(2)}</p> */}
                    </div>
                    <div className="d-flex justify-content-between">
                      <p className="mb-2">Discount:</p>
                      <p className="mb-2 text-success">-Rs.200.00</p>
                    </div>
                    <div className="d-flex justify-content-between">
                      <p className="mb-2">Delivery Cost:</p>
                      <p className="mb-2">RS. 300.00</p>
                    </div>
                    <hr />
                    <div className="d-flex justify-content-between">
                      <p className="mb-2">Total price:</p>
                      <p className="mb-2 fw-bold">$283.00</p>
                    </div>

                    <div className="mt-3">
                      <a
                        href="#"
                        className="btn btn-success w-100 shadow-0 mb-2"
                      >
                        {" "}
                        Place Order{" "}
                      </a>
                      {/* <a
                        href="renthomepage01"
                        className="btn btn-light w-100 border mt-2"
                      >
                        {" "}
                        Back to shop{" "}
                      </a> */}
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- summary --> */}
            </div>
          </div>
        </section>
        {/* <!-- cart + summary --> */}
        <section>
          <div className="container my-5"></div>
        </section>
      </div>

      <div>
        <Footer> </Footer>
      </div>
    </div>
  );
}

export default CheckoutPage;
