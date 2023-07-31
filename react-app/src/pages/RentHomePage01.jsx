import React, { useEffect, useState, useMemo } from "react";
import "./RentHomePage01.css";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import ItemCard from "../components/ItemCard";
import Category from "../components/Category";
import axios from "axios";
import { useSelector } from "react-redux";

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
    return categories.find(
      (cat) =>
        cat.description &&
        cat.description.toLowerCase().includes(categoryName.toLowerCase())
    );
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category); // Pass the category name (string) instead of the entire object
  };

  const itemsToDisplay = useMemo(() => {
    if (selectedCategory) {
      const selectedCategoryObj = getCategoryByName(selectedCategory);

      if (selectedCategoryObj) {
        // If the selected category exists in the categories array, filter by its ID
        return filteredItems.filter((item) => {
          return item.categoryId === selectedCategoryObj.categoryId;
        });
      } else if (
        selectedCategory.toLowerCase() === "suits" ||
        selectedCategory.toLowerCase() === "tuxedos"
      ) {
        // If the selected category is a top-level category, filter by its subcategories
        return filteredItems.filter((item) => {
          // Check if the item's category name includes "Suits" or "Tuxedos"
          return (
            item.category.toLowerCase().includes("suits") ||
            item.category.toLowerCase().includes("tuxedos")
          );
        });
      }
      // If the selected category is neither in categories nor "Suits" or "Tuxedos"
      return filteredItems;
    }

    // If no category is selected, return all items
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
