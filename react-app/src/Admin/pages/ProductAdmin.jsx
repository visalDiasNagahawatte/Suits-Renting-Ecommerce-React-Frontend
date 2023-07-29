import React, { useState, useEffect } from "react";
import {
  MDBBtn,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter,
  MDBInput,
  MDBCol,
  MDBRow,
} from "mdb-react-ui-kit";
import DashCategory from "../components/DashCategory";
import "./ProductAdmin.css";
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import axios from "axios";

const isValidUrl = (url) => {
  // Regular expression to check URL format
  const urlPattern = new RegExp(/^(ftp|http|https):\/\/[^ "]+$/, "i");
  return urlPattern.test(url);
};

export default function ProductAdmin() {
  const [products, setProducts] = useState([]);
  const [isAddUserModalOpen, setIsAddUserModalOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [formValue, setFormValue] = useState({
    title: "",
    categoryId: "",
    price: "",
    inStock: "1",
    description: "",
    imgUrl: "",
  });
  const [formErrors, setFormErrors] = useState({});

  const toggleAddUserModal = () => {
    setIsAddUserModalOpen(!isAddUserModalOpen);
  };

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8080/api/v1/product"
        );
        console.log("products response:", response.data);

        // Check if the response is an array and not empty
        if (
          Array.isArray(response.data.data) &&
          response.data.data.length > 0
        ) {
          setProducts(response.data.data);
        } else {
          // If the response is not an array or empty, handle the error
          console.error("Error: The API response is not an array or empty.");
          setProducts([]);
        }
      } catch (error) {
        console.error("Error fetching products:", error);
        // Handle the error, set products to an empty array
        setProducts([]);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    // Validate the form before submitting
    const validationErrors = validateForm(formValue);
    if (Object.keys(validationErrors).length > 0) {
      setFormErrors(validationErrors);
      return;
    }

    // If form is valid, clear any previous validation errors
    setFormErrors({});

    const form = event.target;
    const formData = new FormData(form);

    const productData = {
      categoryId: Number(formData.get("categoryId")),
      description: formData.get("description"),
      imgUrl: formData.get("imgUrl"),
      inStock: formData.get("inStock") === "1",
      price: Number(formData.get("price")),

      title: formData.get("title"),
    };

    try {
      // Send the product data to the API endpoint
      const response = await axios.post(
        "http://localhost:8080/api/v1/product",
        productData
      );
      console.log("Product added successfully:", response.data);

      // Optionally, you can update the state with the newly added product
      // if you want it to immediately appear in the products list
      setProducts([...products, response.data]);

      // Close the modal after successful submission
      toggleAddUserModal();
    } catch (error) {
      console.error("Error adding product:", error);
      // Handle the error, show an error message, etc.
    }
  };

  const validateForm = (formData) => {
    const errors = {};
    if (!formData.title.trim()) {
      errors.title = "Title is required.";
    }
    if (!formData.categoryId) {
      errors.categoryId = "Category ID is required.";
    }
    if (!formData.price || isNaN(Number(formData.price))) {
      errors.price = "Price must be a valid number.";
    }
    if (!formData.description.trim()) {
      errors.description = "Description is required.";
    }
    if (!formData.imgUrl.trim()) {
      errors.imgUrl = "Image URL is required.";
    } else if (!isValidUrl(formData.imgUrl)) {
      errors.imgUrl = "Invalid URL format.";
    }
    return errors;
  };

  const onChange = (e) => {
    const { name, value } = e.target;
    setFormValue((prevFormValue) => ({
      ...prevFormValue,
      [name]: value,
    }));
  };

  const handleDeleteProduct = async (title) => {
    try {
      // Send the product title to the API endpoint for deletion
      await axios.delete("http://localhost:8080/api/v1/product", {
        params: {
          title: title,
        },
      });

      // Remove the deleted product from the products state
      setProducts(products.filter((product) => product.title !== title));
    } catch (error) {
      console.error("Error deleting product:", error);
      // Handle the error, show an error message, etc.
    }
  };

  return (
    <div className="d-flex flex-column" style={{ minHeight: "100vh" }}>
      <div className="mb-3 sticky-lg-top">
        <NavBar></NavBar>
      </div>
      <div className="row flex-grow-1">
        <div className="col-lg-3 ms-5">
          <DashCategory></DashCategory>
        </div>
        <div className="col-lg-8">
          <div className="upper">
            <div className="main mt-5">
              <h3 className="header">PRODUCTS</h3>

              <MDBBtn onClick={toggleAddUserModal}>Add Product</MDBBtn>
              <MDBModal show={isAddUserModalOpen} tabIndex="-1">
                <MDBModalDialog>
                  <MDBModalContent>
                    <MDBModalHeader>
                      <MDBModalTitle>Add Product</MDBModalTitle>
                      <MDBBtn
                        className="btn-close"
                        color="none"
                        onClick={toggleAddUserModal}
                      ></MDBBtn>
                    </MDBModalHeader>
                    <MDBModalBody>
                      {/* Add your form or content for adding a new user here */}
                      <form onSubmit={handleFormSubmit} id="productForm">
                        <MDBRow className="mb-4">
                          <MDBCol>
                            <MDBInput
                              id="form3Example1"
                              label="Product Title"
                              name="title"
                              value={formValue.title}
                              onChange={onChange}
                            />
                            {formErrors.title && (
                              <div className="text-danger">
                                {formErrors.title}
                              </div>
                            )}
                          </MDBCol>
                          <MDBCol>
                            <MDBInput
                              id="form3Example2"
                              type="number"
                              label="Category ID"
                              name="categoryId"
                              value={formValue.categoryId}
                              onChange={onChange}
                            />
                            {formErrors.categoryId && (
                              <div className="text-danger">
                                {formErrors.categoryId}
                              </div>
                            )}
                          </MDBCol>
                        </MDBRow>
                        <MDBRow className="mb-4">
                          <MDBCol>
                            <MDBInput
                              id="form3Example3"
                              type="number"
                              label="Price"
                              name="price"
                              value={formValue.price}
                              onChange={onChange}
                            />
                            {formErrors.price && (
                              <div className="text-danger">
                                {formErrors.price}
                              </div>
                            )}
                          </MDBCol>
                          <MDBCol>
                            <select
                              className="form-select"
                              id="inStock"
                              name="inStock"
                              defaultValue="In Stock"
                              value={formValue.inStock}
                              onChange={onChange}
                            >
                              <option disabled value="">
                                Product Status
                              </option>
                              <option value="1">In Stock</option>
                              <option value="0">Out of Stock</option>
                            </select>
                          </MDBCol>
                        </MDBRow>
                        <MDBRow className="mb-4">
                          <MDBCol>
                            <MDBInput
                              textarea
                              id="form3Example7"
                              rows={4}
                              label="Product Description"
                              name="description"
                              value={formValue.description}
                              onChange={onChange}
                            />
                            {formErrors.description && (
                              <div className="text-danger">
                                {formErrors.description}
                              </div>
                            )}
                          </MDBCol>
                        </MDBRow>
                        <MDBRow className="mb-4">
                          <MDBCol>
                            <MDBInput
                              id="form3Example10"
                              label="Image URL"
                              name="imgUrl"
                              value={formValue.imgUrl}
                              onChange={onChange}
                            />
                            {formErrors.imgUrl && (
                              <div className="text-danger">
                                {formErrors.imgUrl}
                              </div>
                            )}
                          </MDBCol>
                        </MDBRow>
                      </form>
                    </MDBModalBody>
                    <MDBModalFooter>
                      <MDBBtn color="secondary" onClick={toggleAddUserModal}>
                        Close
                      </MDBBtn>
                      <MDBBtn type="submit" form="productForm">
                        Save changes
                      </MDBBtn>
                    </MDBModalFooter>
                  </MDBModalContent>
                </MDBModalDialog>
              </MDBModal>
              <div className="table-container">
                {loading ? (
                  <div>Loading...</div>
                ) : (
                  <table class="table">
                    <thead>
                      <tr>
                        <th scope="col">id</th>
                        <th scope="col" style={{ width: "20%" }}>
                          Title
                        </th>
                        <th scope="col">Category</th>
                        <th scope="col">Price</th>

                        <th scope="col">Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {products.map((product) => (
                        <tr key={product.productId}>
                          <th scope="row">{product.productId}</th>
                          <td>{product.title}</td>
                          <td>{product.categoryId}</td>
                          <td>RS. {product.price}/-</td>

                          <td
                            className={
                              product.inStock ? "text-success" : "text-danger"
                            }
                          >
                            {product.inStock ? "In Stock" : "Out of Stock"}
                          </td>
                          <button type="button" class="btn btn-success me-2">
                            Update
                          </button>
                          <button
                            type="button"
                            className="btn btn-danger"
                            onClick={() => handleDeleteProduct(product.title)}
                          >
                            Delete
                          </button>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-auto">
        <Footer></Footer>
      </div>
    </div>
  );
}
