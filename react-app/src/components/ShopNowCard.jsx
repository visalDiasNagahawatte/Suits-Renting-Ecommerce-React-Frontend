import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

function ShopNowCard() {
  return (
    <div
      style={{ textAlign: "center" }}
      className="mb-5 d-flex justify-content-center"
    >
      <Card style={{ width: "50rem" }}>
        <Card.Img variant="top" src="/images/cards/wide_logo.jpg" />
        <Card.Body style={{ textAlign: "center", backgroundColor: "white" }}>
          <Card.Title> Rent Your Perfect Outfit Now</Card.Title>
          <Card.Text>
            Find your ideal attire for any occasion with just a click!
          </Card.Text>
          <Link to={"/renthomepage01"}>
            <Button variant="primary">RENT NOW</Button>
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
}

export default ShopNowCard;
