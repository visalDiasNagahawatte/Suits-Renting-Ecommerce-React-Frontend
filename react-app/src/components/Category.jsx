import React, { useState } from "react";

const Category = ({ setSelectedCategory }) => {
  const [selectedCategory, setSelectedCategoryState] = useState(null);

  const handleCategoryClick = (category) => {
    setSelectedCategoryState(category);
    setSelectedCategory(category); // Pass the selected category back to the parent component
  };
  return (
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

      <div class="collapse card d-lg-block mb-5" id="navbarSupportedContent">
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
                    <a
                      href="/renthomepage01"
                      class=" text-dark"
                      onClick={() => handleCategoryClick(null)}
                    >
                      <label htmlFor="jackets">Suits & Tuxedos</label>
                    </a>
                    <ul>
                      <li>
                        <a
                          href="#"
                          class="text-dark"
                          onClick={() => handleCategoryClick("Suits")}
                        >
                          Suits
                        </a>
                        <ul>
                          <li>
                            <a
                              href="#"
                              class="text-dark"
                              onClick={() => handleCategoryClick("Black Suits")}
                            >
                              Black Suits
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              class="text-dark"
                              onClick={() => handleCategoryClick("Blue Suits")}
                            >
                              Blue Suits
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              class="text-dark"
                              onClick={() =>
                                handleCategoryClick("Various Colors Suits")
                              }
                            >
                              Various Colors Suits
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a
                          href="#"
                          class="text-dark"
                          onClick={() => handleCategoryClick("Tuxedos")}
                        >
                          Tuxedos{" "}
                        </a>
                        <ul>
                          <li>
                            <a
                              href="#"
                              class="text-dark"
                              onClick={() =>
                                handleCategoryClick("Black Tuxedos")
                              }
                            >
                              Black Tuxedos
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              class="text-dark"
                              onClick={() =>
                                handleCategoryClick("Blue Tuxedos")
                              }
                            >
                              Blue Tuxedos
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              class="text-dark"
                              onClick={() =>
                                handleCategoryClick("Various Colors Tuxedos")
                              }
                            >
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
  );
};
export default Category;
