import React, { useState } from "react";
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
import data from "../../components/Data";
import { deleteProduct } from "../../components/Data";

export default function ProductAdmin() {
  const [products, setProducts] = useState(data.productData);

  // Function to handle deletion of a product
  const handleDeleteProduct = (id) => {
    deleteProduct(id); // Call the function from Data.jsx to delete the product from the array
    setProducts(data.productData); // Update the state with the updated data
  };

  const [isAddUserModalOpen, setIsAddUserModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const toggleAddUserModal = () => {
    setIsAddUserModalOpen(!isAddUserModalOpen);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setSelectedImage(file);
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
                      <form>
                        <MDBRow className="mb-4">
                          <MDBCol>
                            <MDBInput
                              id="form3Example1"
                              label="Product Title"
                            />
                          </MDBCol>
                          <MDBCol>
                            <MDBInput
                              id="form3Example2"
                              type="number"
                              label="Product Id"
                            />
                          </MDBCol>
                        </MDBRow>
                        <MDBRow className="mb-4">
                          <MDBCol>
                            <MDBInput id="form3Example1" label="Category" />
                          </MDBCol>
                          <MDBCol>
                            <MDBInput
                              id="form3Example2"
                              type="number"
                              label="Price"
                            />
                          </MDBCol>
                        </MDBRow>

                        <MDBInput
                          wrapperClass="mb-4"
                          textarea
                          id="form6Example7"
                          rows={4}
                          label="Product Description"
                        />

                        <label htmlFor="imageInput" className="form-label">
                          Image
                        </label>
                        <input
                          type="file"
                          className="form-control"
                          id="imageInput"
                          accept="image/*"
                          onChange={handleImageChange}
                        />
                      </form>
                    </MDBModalBody>
                    <MDBModalFooter>
                      <MDBBtn color="secondary" onClick={toggleAddUserModal}>
                        Close
                      </MDBBtn>
                      <MDBBtn>Save changes</MDBBtn>
                    </MDBModalFooter>
                  </MDBModalContent>
                </MDBModalDialog>
              </MDBModal>
              <div className="table-container">
                <table class="table">
                  <thead>
                    <tr>
                      <th scope="col">id</th>
                      <th scope="col" style={{ width: "20%" }}>
                        Title
                      </th>
                      <th scope="col">Category</th>
                      <th scope="col">Price</th>
                      {/* <th scope="col">Description</th> */}
                      <th scope="col">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.productData.map((product) => (
                      <tr key={product.id}>
                        <th scope="row">{product.id}</th>
                        <td>{product.title}</td>
                        <td>{product.category}</td>
                        <td>RS. {product.price}/-</td>
                        {/* <td>{product.description}</td> */}
                        <td
                          className={
                            product.isInStock ? "text-success" : "text-danger"
                          }
                        >
                          {product.isInStock ? "In Stock" : "Out of Stock"}
                        </td>
                        <td>
                          <button
                            type="button"
                            className="btn btn-success me-2"
                          >
                            Update
                          </button>
                          <button
                            type="button"
                            className="btn btn-danger"
                            onClick={() => handleDeleteProduct(product.id)}
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
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
