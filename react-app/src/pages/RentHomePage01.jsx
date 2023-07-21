import React from "react";
import "./RentHomePage01.css";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import ItemCard from "../components/ItemCard";
import data from "../components/Data";

import { useState } from "react";

function RentHomePage01() {
  const itemsPerPage = 9;
  const [currentPage, setCurrentPage] = useState(1);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

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
                        <div class=" accordion-body ">
                          <ul>
                            <li>
                              <a href="/renthomepage01" class=" text-dark">
                                <label htmlFor="jackets">Suits & Tuxedos</label>
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
                  {data.productData
                    .slice(startIndex, endIndex)
                    .map((item, index) => {
                      return (
                        <ItemCard
                          img={item.img}
                          title={item.title}
                          price={item.price}
                          key={index}
                        ></ItemCard>
                      );
                    })}
                </div>

                <hr />

                <nav
                  aria-label="Page navigation example"
                  class="d-flex justify-content-center mt-3"
                >
                  <ul class="pagination">
                    <li class="page-item active">
                      <a class="page-link" href="/renthomepage01">
                        1
                      </a>
                    </li>
                    <li class="page-item">
                      <a class="page-link" href="/renthomepage02">
                        2
                      </a>
                    </li>

                    <li class="page-item">
                      <a
                        class="page-link"
                        href="/renthomepage02"
                        aria-label="Next"
                      >
                        <span aria-hidden="true">&raquo;</span>
                      </a>
                    </li>
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

export default RentHomePage01;
