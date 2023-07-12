import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function ShopNowCard() {
  return (
    <div className="d-flex justify-content-center">
      <Card style={{ width: "50rem" }}>
        <Card.Img variant="top" src="/images/cards/card1.jpg" />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Shop Now</Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default ShopNowCard;
