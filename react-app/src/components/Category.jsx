import React from "react";

const Category = ({ selectedCategory, setSelectedCategory, categories }) => {
  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  return (
    <div className="col-lg-3">
      {/* ... (rest of the code) */}
      <div
        className="collapse card d-lg-block mb-5"
        id="navbarSupportedContent"
      >
        <div
          className="accordion position-fixed"
          id="accordionPanelsStayOpenExample"
        >
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingOne">
              <button
                className="accordion-button text-dark bg-light"
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
              className="accordion-collapse collapse show"
              aria-labelledby="headingOne"
            >
              <div className="accordion-body">
                <label htmlFor="categories">Choose a category:</label>
                <select
                  id="categories"
                  className="form-select"
                  value={selectedCategory}
                  onChange={handleCategoryChange}
                >
                  <option value={null}>All Categories</option>
                  {categories.map((category) => (
                    <option
                      key={category.categoryId}
                      value={category.description}
                    >
                      {category.description}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
