import React, { Link, useState, useMemo } from "react";
import "./RentHomePage01.css";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import ItemCard from "../components/ItemCard";
import data from "../components/Data";
import Category from "../components/Category";

function RentHomePage01() {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const filteredItems = useMemo(() => {
    if (selectedCategory) {
      return data.productData.filter(
        (item) => item.category === selectedCategory
      );
    }
    return data.productData;
  }, [selectedCategory]);

  return (
    <div>
      <div className="mb-3 sticky-lg-top">
        <NavBar></NavBar>
      </div>
      <div>
        <section class="">
          <div class="container">
            <div class="row">
              <Category
                selectedCategory={selectedCategory}
                setSelectedCategory={setSelectedCategory}
              ></Category>

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
                  {filteredItems.map((item) => {
                    return (
                      <ItemCard
                        id={item.id}
                        img={item.img}
                        title={item.title}
                        price={item.price}
                        key={item.id}
                      ></ItemCard>
                    );
                  })}
                </div>

                <hr />

                <nav
                  aria-label="Page navigation example"
                  class="d-flex justify-content-center mt-3"
                >
                  {/* <ul class="pagination">
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
                  </ul> */}
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
