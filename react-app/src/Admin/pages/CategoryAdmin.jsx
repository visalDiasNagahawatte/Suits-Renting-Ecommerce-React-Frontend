import React, { useEffect, useState } from "react";
import DashCategory from "../components/DashCategory";
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import axios from "axios";
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
import "./UserAdmin.css";

const CategoryAdmin = () => {
  const [isAddCategoryModalOpen, setIsAddCategoryModalOpen] = useState(false);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  const toggleAddCategoryModal = () => {
    setIsAddCategoryModalOpen(!isAddUserModalOpen);
  };

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/v1/category")
      .then((response) => {
        console.log("API Response:", response.data);
        setCategories(response.data.data);
        setLoading(false); // Set loading to false after data is fetched successfully
      })
      .catch((error) => {
        console.error("Error fetching user data:", error);
        setLoading(false); // Set loading to false even if there's an error
      });
  }, []);

  const handleDeleteCategory = (description) => {
    axios
      .delete("http://localhost:8080/api/v1/user", {
        params: {
          description: description,
        },
      })
      .then((response) => {
        console.log("Category deleted successfully:", response.data);
        setCategories((prevCategory) =>
          prevCategory.filter(
            (category) => category.description !== description
          )
        );
      })
      .catch((error) => {
        console.error("Error deleting user:", error);
      });
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
              <h3 className="header">CATEGORIES</h3>
              <MDBBtn onClick={toggleAddCategoryModal}>Add Category</MDBBtn>
              <MDBModal show={isAddCategoryModalOpen} tabIndex="-1">
                <MDBModalDialog>
                  <MDBModalContent>
                    <MDBModalHeader>
                      <MDBModalTitle>Add Category</MDBModalTitle>
                      <MDBBtn
                        className="btn-close"
                        color="none"
                        onClick={toggleAddCategoryModal}
                      ></MDBBtn>
                    </MDBModalHeader>
                    <MDBModalBody>
                      {/* Add your form or content for adding a new user here */}
                      <form>
                        <MDBRow className="mb-4">
                          <MDBCol>
                            <MDBInput
                              id="form3Example1"
                              label="First name"
                              // value={firstName}
                              // onChange={(e) => setFirstName(e.target.value)}
                            />
                          </MDBCol>
                          <MDBCol>
                            <MDBInput
                              id="form3Example2"
                              label="Last name"
                              // value={lastName}
                              // onChange={(e) => setLastName(e.target.value)}
                            />
                          </MDBCol>
                        </MDBRow>
                        <MDBInput
                          className="mb-4"
                          type="email"
                          id="form3Example3"
                          label="Email address"
                          // value={email}
                          // onChange={(e) => setEmail(e.target.value)}
                        />
                        <MDBInput
                          className="mb-4"
                          type="password"
                          id="form3Example4"
                          label="Password"
                          // value={password}
                          // onChange={(e) => setPassword(e.target.value)}
                        />
                      </form>
                    </MDBModalBody>
                    <MDBModalFooter>
                      <MDBBtn
                        color="secondary"
                        onClick={toggleAddCategoryModal}
                      >
                        Close
                      </MDBBtn>
                      <MDBBtn>Save changes</MDBBtn>
                    </MDBModalFooter>
                  </MDBModalContent>
                </MDBModalDialog>
              </MDBModal>
              {/* Rest of the table and other content */}
              <div className="table-container">
                <table class="table">
                  <thead>
                    <tr>
                      <th scope="col">id</th>
                      <th scope="col">Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    {categories.map((category) => (
                      <tr key={category.categoryId}>
                        <th scope="row">{category.categoryId}</th>
                        <td>{category.description}</td>

                        <td>
                          <button
                            type="button"
                            className="btn btn-danger"
                            onClick={() =>
                              handleDeleteCategory(category.description)
                            }
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
};

export default CategoryAdmin;
