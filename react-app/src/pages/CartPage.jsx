import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { useCart } from "react-use-cart";

function CartPage() {
  const { items, isEmpty, removeItem } = useCart(); // Access the items and removeItem functions from useCart hook
  if (isEmpty) return <p>Your cart is empty</p>;

  // Calculate the total price of all items in the cart
  const total = items.reduce(
    (acc, item) =>
      acc +
      item.price * item.quantity +
      getAdditionalAmount(item.rentalDuration),
    0
  );

  function getAdditionalAmount(rentalDuration) {
    if (rentalDuration === "05 Days") {
      return 0;
    } else if (rentalDuration === "07 Days") {
      return 500;
    } else if (rentalDuration === "14 Days") {
      return 1000;
    } else {
      return 0; // Default to 0 if rentalDuration doesn't match any condition
    }
  }
  function renderAdditionalAmount(rentalDuration) {
    if (rentalDuration === "05 Days") {
      return "No Additional Fee";
    } else if (rentalDuration === "07 Days") {
      return "Rs. 500/- Additional Fee";
    } else if (rentalDuration === "14 Days") {
      return "Rs. 1000/- Additional Fee";
    } else {
      return 0; // Default to 0 if rentalDuration doesn't match any condition
    }
  }

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
              {/* <!-- cart --> */}
              <div className="col-lg-9">
                <div className="card border shadow-0">
                  <div className="m-4">
                    <h4 className="card-title mb-4">Your cart</h4>
                    {items.map((item) => (
                      <div className="row gy-3 mb-4" key={item.id}>
                        <div className="col-lg-5">
                          <div className="me-lg-5">
                            <div className="d-flex">
                              <img
                                src={item.image}
                                className="border rounded me-3"
                                style={{ width: "96px", height: "96px;" }}
                                alt={item.title}
                              />
                              <div className="">
                                <a href="#" className="nav-link">
                                  {item.title}
                                </a>
                                <p className="text-muted">
                                  Includes: Jacket & Pant
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-2 col-sm-6 col-6 d-flex flex-row flex-lg-column flex-xl-row text-nowrap">
                          <div className="me-lg-5">
                            <p>
                              <span>Quantity: {item.quantity}</span>
                            </p>
                          </div>
                          <div className="me-lg-5">
                            <p>
                              <span>{item.rentalDuration}</span>
                            </p>
                          </div>

                          <div className="ms-5">
                            <text className="h6">
                              Rs.{" "}
                              {item.quantity * item.price +
                                getAdditionalAmount(item.rentalDuration)}
                            </text>{" "}
                            <br />
                            <small className="text-muted text-nowrap">
                              {" "}
                              Rs. {item.price}/- Per Item <br />
                              {renderAdditionalAmount(item.rentalDuration)}
                            </small>
                          </div>
                        </div>
                        <div className="col-lg col-sm-6 d-flex justify-content-sm-center justify-content-md-start justify-content-lg-center justify-content-xl-end mb-2">
                          <div className="float-md-end">
                            {/* <a
                              href="#!"
                              className="btn btn-light border px-2 icon-hover-primary"
                            >
                              <i className="fas fa-heart fa-lg px-1 text-secondary"></i>
                            </a> */}
                            <a
                              href="#"
                              className="btn btn-light border text-danger icon-hover-danger"
                              onClick={() => removeItem(item.id)} // Call removeItem function to remove item from cart
                            >
                              {" "}
                              Remove
                            </a>
                          </div>
                        </div>
                      </div>
                    ))}
                    {/* <div className="row gy-3 mb-4">
                      <div className="col-lg-5">
                        <div className="me-lg-5">
                          <div className="d-flex">
                            <img
                              src="https://bootstrap-ecommerce.com/bootstrap5-ecommerce/images/items/12.webp"
                              className="border rounded me-3"
                              style={{ width: "96px", height: "96px;" }}
                            />
                            <div className="">
                              <a href="#" className="nav-link">
                                Mens T-shirt Cotton Base
                              </a>
                              <p className="text-muted">Blue, Medium</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-2 col-sm-6 col-6 d-flex flex-row flex-lg-column flex-xl-row text-nowrap">
                        <div className="">
                          <select
                            style={{ width: "100px;" }}
                            className="form-select me-4"
                          >
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                          </select>
                        </div>
                        <div className="">
                          <text className="h6">$44.80</text> <br />
                          <small className="text-muted text-nowrap">
                            {" "}
                            $12.20 / per item{" "}
                          </small>
                        </div>
                      </div>
                      <div className="col-lg col-sm-6 d-flex justify-content-sm-center justify-content-md-start justify-content-lg-center justify-content-xl-end mb-2">
                        <div className="float-md-end">
                          <a
                            href="#!"
                            className="btn btn-light border px-2 icon-hover-primary"
                          >
                            <i className="fas fa-heart fa-lg px-1 text-secondary"></i>
                          </a>
                          <a
                            href="#"
                            className="btn btn-light border text-danger icon-hover-danger"
                          >
                            {" "}
                            Remove
                          </a>
                        </div>
                      </div>
                    </div>

                    <div className="row gy-3">
                      <div className="col-lg-5">
                        <div className="me-lg-5">
                          <div className="d-flex">
                            <img
                              src="https://bootstrap-ecommerce.com/bootstrap5-ecommerce/images/items/13.webp"
                              className="border rounded me-3"
                              style={{ width: "96px", height: "96px;" }}
                            />
                            <div className="">
                              <a href="#" className="nav-link">
                                Blazer Suit Dress Jacket for Men
                              </a>
                              <p className="text-muted">XL size, Jeans, Blue</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-2 col-sm-6 col-6 d-flex flex-row flex-lg-column flex-xl-row text-nowrap">
                        <div className="">
                          <select
                            style={{ width: " 100px;" }}
                            className="form-select me-4"
                          >
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                          </select>
                        </div>
                        <div className="">
                          <text className="h6">$1156.00</text> <br />
                          <small className="text-muted text-nowrap">
                            {" "}
                            $460.00 / per item{" "}
                          </small>
                        </div>
                      </div>
                      <div className="col-lg col-sm-6 d-flex justify-content-sm-center justify-content-md-start justify-content-lg-center justify-content-xl-end mb-2">
                        <div className="float-md-end">
                          <a
                            href="#!"
                            className="btn btn-light border px-2 icon-hover-primary"
                          >
                            <i className="fas fa-heart fa-lg px-1 text-secondary"></i>
                          </a>
                          <a
                            href="#"
                            className="btn btn-light border text-danger icon-hover-danger"
                          >
                            {" "}
                            Remove
                          </a>
                        </div>
                      </div>
                    </div> */}
                  </div>

                  <div className="border-top pt-4 mx-4 mb-4">
                    <p>
                      <i className="fas fa-truck text-muted fa-lg"></i> Free
                      Delivery within 1-2 weeks
                    </p>
                    <p className="text-muted">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip
                    </p>
                  </div>
                </div>
              </div>
              {/* <!-- cart --> */}
              {/* <!-- summary --> */}
              <div className="col-lg-3">
                <div className="card shadow-0 border">
                  <div className="card-body">
                    <div className="d-flex justify-content-between">
                      <p className="mb-2">Total price:</p>
                      <p className="mb-2">Rs. {total.toFixed(2)}</p>
                    </div>
                    <div className="d-flex justify-content-between">
                      <p className="mb-2">Discount:</p>
                      <p className="mb-2 text-success">-Rs.200.00</p>
                    </div>
                    <div className="d-flex justify-content-between">
                      <p className="mb-2">TAX:</p>
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
                        Checkout{" "}
                      </a>
                      <a
                        href="renthomepage01"
                        className="btn btn-light w-100 border mt-2"
                      >
                        {" "}
                        Back to shop{" "}
                      </a>
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

export default CartPage;
