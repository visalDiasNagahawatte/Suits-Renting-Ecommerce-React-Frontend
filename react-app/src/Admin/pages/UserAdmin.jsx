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

const UserAdmin = () => {
  const [isAddUserModalOpen, setIsAddUserModalOpen] = useState(false);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  const toggleAddUserModal = () => {
    setIsAddUserModalOpen(!isAddUserModalOpen);
  };

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/v1/user")
      .then((response) => {
        console.log("API Response:", response.data);
        setUsers(response.data.data);
        setLoading(false); // Set loading to false after data is fetched successfully
      })
      .catch((error) => {
        console.error("Error fetching user data:", error);
        setLoading(false); // Set loading to false even if there's an error
      });
  }, []);

  const handleDeleteUser = (email) => {
    axios
      .delete("http://localhost:8080/api/v1/user", {
        params: {
          email: email,
        },
      })
      .then((response) => {
        console.log("User deleted successfully:", response.data);
        setUsers((prevUsers) =>
          prevUsers.filter((user) => user.email !== email)
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
              <h3 className="header">USERS</h3>
              <MDBBtn onClick={toggleAddUserModal}>Add Admin</MDBBtn>
              <MDBModal show={isAddUserModalOpen} tabIndex="-1">
                <MDBModalDialog>
                  <MDBModalContent>
                    <MDBModalHeader>
                      <MDBModalTitle>Add Admin</MDBModalTitle>
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
                      <MDBBtn color="secondary" onClick={toggleAddUserModal}>
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
                      <th scope="col">Name</th>
                      <th scope="col">E-mail</th>
                      <th scope="col">Password</th>
                      {/* <th scope="col">Image URL</th>
                  <th scope="col">Description</th> */}
                    </tr>
                  </thead>
                  <tbody>
                    {users.map((user) => (
                      <tr key={user.userId}>
                        <th scope="row">{user.userId}</th>
                        <td>{user.userName}</td>
                        <td>{user.email}</td>
                        <td>{user.password}</td>
                        <td>
                          <button
                            type="button"
                            className="btn btn-danger"
                            onClick={() => handleDeleteUser(user.email)}
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

export default UserAdmin;
