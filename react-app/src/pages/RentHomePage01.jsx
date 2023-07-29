import React, { useEffect, useState, useMemo } from "react";
import "./RentHomePage01.css";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import ItemCard from "../components/ItemCard";
import Category from "../components/Category";
import axios from "axios";

function RentHomePage01() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [filteredItems, setFilteredItems] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true); // New loading state

  useEffect(() => {
    // Fetch category data from the backend API
    axios
      .get("http://localhost:8080/api/v1/category")
      .then((response) => {
        console.log("category data received:", response.data);
        // Update the categories state with the fetched category data
        setCategories(response.data.data);
      })
      .catch((error) => {
        console.error("Error fetching category data:", error);
      });

    // Fetch product data from the backend API
    axios
      .get("http://localhost:8080/api/v1/product")
      .then((response) => {
        console.log("product data received:", response.data);
        // Update the filteredItems state with the fetched product data
        setFilteredItems(response.data.data);
        setLoading(false); // Set loading to false after data is fetched
      })
      .catch((error) => {
        console.error("Error fetching product data:", error);
        setLoading(false); // Set loading to false even if there is an error
      });
  }, []);

  const getCategoryByName = (categoryName) => {
    const category = categories.find(
      (cat) =>
        cat.categoryName &&
        cat.categoryName.toLowerCase() === categoryName.toLowerCase()
    );
    return category ? category.categoryId : null;
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const itemsToDisplay = useMemo(() => {
    if (selectedCategory) {
      if (selectedCategory === "Suits" || selectedCategory === "Tuxedos") {
        // If the selected category is a top-level category, filter by its subcategories
        return filteredItems.filter((item) => {
          const itemCategoryName = getCategoryByName(item.category);
          return (
            itemCategoryName &&
            itemCategoryName
              .toLowerCase()
              .includes(selectedCategory.toLowerCase())
          );
        });
      } else {
        // If the selected category is a subcategory, filter directly by its name
        return filteredItems.filter(
          (item) =>
            item.category &&
            item.category.toLowerCase().includes(selectedCategory.toLowerCase())
        );
      }
    }
    return filteredItems;
  }, [selectedCategory, filteredItems, getCategoryByName]);
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
                  {itemsToDisplay.map((item) => {
                    console.log("item:", item);
                    return (
                      <ItemCard
                        id={item.productId}
                        img={item.imgUrl}
                        title={item.title}
                        price={item.price}
                        key={item.productId}
                      />
                    );
                  })}
                </div>

                <hr />

                <nav
                  aria-label="Page navigation example"
                  class="d-flex justify-content-center mt-3"
                ></nav>
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
