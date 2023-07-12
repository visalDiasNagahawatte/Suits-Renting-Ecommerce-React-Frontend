// import Card from "react-bootstrap/Card";
// import Col from "react-bootstrap/Col";
// import Row from "react-bootstrap/Row";

// function HomeCards() {
//   const cardData = [
//     {
//       title: "Card 1",
//       description: "This is the content for Card 1.",
//       imageSrc: "/images/cards/1.jpg",
//     },
//     {
//       title: "Card 2",
//       description: "This is the content for Card 2.",
//       imageSrc: "/images/cards/2.jpg",
//     },
//     {
//       title: "Card 3",
//       description: "This is the content for Card 3.",
//       imageSrc: "/path/to/image3.jpg",
//     },
//     {
//       title: "Card 4",
//       description: "This is the content for Card 4.",
//       imageSrc: "/path/to/image4.jpg",
//     },
//   ];

//   return (
//     <div style={{ marginTop: "45px" }} className="justify-content-center">
//       <Row row-cols- xs={1} md={4}>
//         {cardData.map((card, idx) => (
//           <Col key={idx}>
//             <Card style={{ width: "350px", height: "550px" }}>
//               <Card.Img variant="top" src={card.imageSrc} />
//               <Card.Body>
//                 <Card.Title>{card.title}</Card.Title>
//                 <Card.Text>{card.description}</Card.Text>
//               </Card.Body>
//             </Card>
//           </Col>
//         ))}
//       </Row>
//     </div>
//   );
// }

function HomeCards() {
  return (
    <div style={{ marginTop: "45px" }} class="row row-cols-1 row-cols-md-3 g-4">
      <div class="col">
        <div class="card h-100  ">
          <img src="/images/cards/1.jpg" class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>
          </div>
          <div class="card-footer">
            <small class="text-body-secondary">Last updated 3 mins ago</small>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card h-100">
          <img src="..." class="card-img-top" alt="..." />+
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">
              This card has supporting text below as a natural lead-in to
              additional content.
            </p>
          </div>
          <div class="card-footer">
            <small class="text-body-secondary">Last updated 3 mins ago</small>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card h-100">
          <img src="/images/cards/2.jpg" class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This card has even longer content
              than the first to show that equal height action.
            </p>
          </div>
          <div class="card-footer">
            <small class="text-body-secondary">Last updated 3 mins ago</small>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeCards;
