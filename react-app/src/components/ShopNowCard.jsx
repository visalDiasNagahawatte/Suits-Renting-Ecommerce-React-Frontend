import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function ShopNowCard() {
  return (
    <div
      style={{ textAlign: "center" }}
      className="mb-5 d-flex justify-content-center"
    >
      <Card style={{ width: "50rem" }}>
        <Card.Img variant="top" src="/images/cards/wide_logo.jpg" />
        <Card.Body style={{ textAlign: "center" }}>
          <Card.Title> Rent Your Perfect Outfit Now</Card.Title>
          <Card.Text>
            Find your ideal attire for any occasion with just a click!
          </Card.Text>
          <Button variant="primary">RENT NOW</Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default ShopNowCard;
