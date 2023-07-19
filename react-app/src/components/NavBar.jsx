import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import { MDBBtn, MDBBadge, MDBIcon } from "mdb-react-ui-kit";

function NavBar() {
  return (
    <div className="sticky-lg-top">
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container fluid>
          <Navbar.Brand href="/">
            <img
              alt="logo"
              src="/images/ce_home.png"
              width="40"
              height="40"
              className="d-inline-block align-center"
            />{" "}
            Ceylon Executives
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0 "
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="#action2">Rent</Nav.Link>

              <Nav.Link href="#action6">About</Nav.Link>
              <Nav.Link href="/weddings">Weddings</Nav.Link>
              <Nav.Link href="/contact">Contact Us</Nav.Link>
            </Nav>

            <Link>
              <span className="d-inline p-4">
                <MDBIcon fas icon="shopping-cart"></MDBIcon>
              </span>
            </Link>

            <Form className="d-flex ">
              <Link to={"/login"}>
                <MDBBtn className="me-2">Login</MDBBtn>
              </Link>

              <Link to={"/signup"}>
                <MDBBtn className="me-2">Signup</MDBBtn>
              </Link>

              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Link to={"/"}>
                <MDBBtn className="me-2">Search</MDBBtn>
              </Link>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
export default NavBar;
