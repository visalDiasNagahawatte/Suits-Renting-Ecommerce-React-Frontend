import React from "react";

import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

function RentHomePage02() {
  return (
    <div>
      <div className="mb-3 sticky-lg-top">
        <NavBar></NavBar>
      </div>
      <div>
        <section class="">
          <div class="container">
            <div class="row">
              <div class="col-lg-3">
                <button
                  class="btn btn-outline-secondary mb-3 w-100 d-lg-none"
                  type="button"
                  data-mdb-toggle="collapse"
                  data-mdb-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span>Show filter</span>
                </button>

                <div
                  class="collapse card d-lg-block mb-5"
                  id="navbarSupportedContent"
                >
                  <div
                    class="accordion position-fixed"
                    id="accordionPanelsStayOpenExample"
                  >
                    <div class="accordion-item">
                      <h2 class="accordion-header" id="headingOne">
                        <button
                          class="accordion-button text-dark bg-light"
                          type="button"
                          data-mdb-toggle="collapse"
                          data-mdb-target="#panelsStayOpen-collapseOne"
                          aria-expanded="true"
                          aria-controls="panelsStayOpen-collapseOne"
                        >
                          Product Categories
                        </button>
                      </h2>
                      <div
                        id="panelsStayOpen-collapseOne"
                        class="accordion-collapse collapse show"
                        aria-labelledby="headingOne"
                      >
                        <div class="accordion-body">
                          <ul>
                            <li>
                              <a href="#" class="text-dark">
                                Suits & Tuxedos
                              </a>
                              <ul>
                                <li>
                                  <a href="#" class="text-dark">
                                    Suits
                                  </a>
                                  <ul>
                                    <li>
                                      <a href="#" class="text-dark">
                                        Black Suits
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#" class="text-dark">
                                        Blue Suits
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#" class="text-dark">
                                        Various Colors Suits
                                      </a>
                                    </li>
                                  </ul>
                                </li>
                                <li>
                                  <a href="#" class="text-dark">
                                    Tuxedos{" "}
                                  </a>
                                  <ul>
                                    <li>
                                      <a href="#" class="text-dark">
                                        Black Tuxedos
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#" class="text-dark">
                                        Blue Tuxedos
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#" class="text-dark">
                                        Various Colors Tuxedos
                                      </a>
                                    </li>
                                  </ul>
                                </li>
                              </ul>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-lg-9">
                <header class="d-sm-flex align-items-center border-bottom mb-4 pb-3">
                  {/* <div class="ms-auto">
                    <select class="form-select d-inline-block w-auto border pt-1">
                      <option value="0">Best match</option>
                      <option value="1">Recommended</option>
                      <option value="2">High rated</option>
                      <option value="3">Randomly</option>
                    </select>
                    <div class="btn-group shadow-0 border">
                      <a href="#" class="btn btn-light" title="List view">
                        <i class="fa fa-bars fa-lg"></i>
                      </a>
                      <a
                        href="#"
                        class="btn btn-light active"
                        title="Grid view"
                      >
                        <i class="fa fa-th fa-lg"></i>
                      </a>
                    </div>
                  </div> */}
                </header>

                <div class="row">
                  <div class="col-lg-4 col-md-6 col-sm-6 d-flex">
                    <div class="card w-100 my-2 shadow-2-strong">
                      <img src="/images/rent/t4.jpg" class="card-img-top" />
                      <div class="card-body d-flex flex-column">
                        <div class="d-flex flex-row">
                          <h5 class="mb-1 me-1">$34,50</h5>
                          <span class="text-danger">
                            <s>$49.99</s>
                          </span>
                        </div>
                        <p class="card-text">
                          T-shirts with multiple colors, for men and lady
                        </p>
                        <div class="card-footer d-flex align-items-end pt-3 px-0 pb-0 mt-auto">
                          <a href="#!" class="btn btn-primary shadow-0 me-1">
                            Add to cart
                          </a>
                          <a
                            href="#!"
                            class="btn btn-light border icon-hover px-2 pt-2"
                          >
                            <i class="fas fa-heart fa-lg text-secondary px-1"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-4 col-md-6 col-sm-6 d-flex">
                    <div class="card w-100 my-2 shadow-2-strong">
                      <img src="/images/rent/t5.jpg" class="card-img-top" />
                      <div class="card-body d-flex flex-column">
                        <h5 class="card-title">$120.00</h5>
                        <p class="card-text">
                          Winter Jacket for Men and Women, All sizes
                        </p>
                        <div class="card-footer d-flex align-items-end pt-3 px-0 pb-0 mt-auto">
                          <a href="#!" class="btn btn-primary shadow-0 me-1">
                            Add to cart
                          </a>
                          <a
                            href="#!"
                            class="btn btn-light border icon-hover px-2 pt-2"
                          >
                            <i class="fas fa-heart fa-lg text-secondary px-1"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-4 col-md-6 col-sm-6 d-flex">
                    <div class="card w-100 my-2 shadow-2-strong">
                      <img src="/images/rent/t6.jpg" class="card-img-top" />
                      <div class="card-body d-flex flex-column">
                        <h5 class="card-title">$120.00</h5>
                        <p class="card-text">
                          T-shirts with multiple colors, for men and lady
                        </p>
                        <div class="card-footer d-flex align-items-end pt-3 px-0 pb-0 mt-auto">
                          <a href="#!" class="btn btn-primary shadow-0 me-1">
                            Add to cart
                          </a>
                          <a
                            href="#!"
                            class="btn btn-light border icon-hover px-2 pt-2"
                          >
                            <i class="fas fa-heart fa-lg text-secondary px-1"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-4 col-md-6 col-sm-6 d-flex">
                    <div class="card w-100 my-2 shadow-2-strong">
                      <img
                        src="/images/rent/s7.jpg"
                        class="card-img-top"
                        // style={{ aspectRatio: "1 / 1" }}
                      />
                      <div class="card-body d-flex flex-column">
                        <h5 class="card-title">$120.00</h5>
                        <p class="card-text">
                          Blazer Suit Dress Jacket for Men, Blue color
                        </p>
                        <div class="card-footer d-flex align-items-end pt-3 px-0 pb-0 mt-auto">
                          <a href="#!" class="btn btn-primary shadow-0 me-1">
                            Add to cart
                          </a>
                          <a
                            href="#!"
                            class="btn btn-light border icon-hover px-2 pt-2"
                          >
                            <i class="fas fa-heart fa-lg text-secondary px-1"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-4 col-md-6 col-sm-6 d-flex">
                    <div class="card w-100 my-2 shadow-2-strong">
                      <img
                        src="/images/rent/s8.jpg"
                        class="card-img-top"
                        // style={{ aspectRatio: "1 / 1" }}
                      />
                      <div class="card-body d-flex flex-column">
                        <h5 class="card-title">$510.00</h5>
                        <p class="card-text">
                          Slim sleeve wallet Italian leather - multiple colors
                        </p>
                        <div class="card-footer d-flex align-items-end pt-3 px-0 pb-0 mt-auto">
                          <a href="#!" class="btn btn-primary shadow-0 me-1">
                            Add to cart
                          </a>
                          <a
                            href="#!"
                            class="btn btn-light border icon-hover px-2 pt-2"
                          >
                            <i class="fas fa-heart fa-lg text-secondary px-1"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-4 col-md-6 col-sm-6 d-flex">
                    <div class="card w-100 my-2 shadow-2-strong">
                      <img src="/images/rent/s9.jpg" class="card-img-top" />
                      <div class="card-body d-flex flex-column">
                        <h5 class="card-title">$79.99</h5>
                        <p class="card-text">
                          T-shirts with multiple colors, for men and lady
                        </p>
                        <div class="card-footer d-flex align-items-end pt-3 px-0 pb-0 mt-auto">
                          <a href="#!" class="btn btn-primary shadow-0 me-1">
                            Add to cart
                          </a>
                          <a
                            href="#!"
                            class="btn btn-light border icon-hover px-2 pt-2"
                          >
                            <i class="fas fa-heart fa-lg text-secondary px-1"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <hr />

                <nav
                  aria-label="Page navigation example"
                  class="d-flex justify-content-center mt-3"
                >
                  <ul class="pagination">
                    <li class="page-item ">
                      <a
                        class="page-link"
                        href="/renthomepage01"
                        aria-label="Previous"
                      >
                        <span aria-hidden="true">&laquo;</span>
                      </a>
                    </li>
                    <li class="page-item ">
                      <a class="page-link" href="/renthomepage01">
                        1
                      </a>
                    </li>
                    <li class="page-item active">
                      <a class="page-link" href="#">
                        2
                      </a>
                    </li>

                    {/* <li class="page-item">
                      <a class="page-link" href="#" aria-label="Next">
                        <span aria-hidden="true">&raquo;</span>
                      </a>
                    </li> */}
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div>
        <Footer></Footer>
      </div>
    </div>
  );
}

export default RentHomePage02;
