import Carousel from "react-bootstrap/Carousel";

function Slides() {
  return (
    <div>
      <Carousel>
        <Carousel.Item interval={2500}>
          <img
            className="d-block w-100 "
            src="/images/slides/1.jpg"
            style={{ height: "570px", objectFit: "cover" }}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Unforgettable Moments, Unforgettable Suits</h3>
            <p>Rent the Finest Attire to Make a Lasting Impression</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={2500}>
          <img
            className="d-block w-100"
            src="/images/slides/2.jpg"
            style={{ height: "570px", objectFit: "cover" }}
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>Sizes for Everyone</h3>
            <p>Browse our collections that cater to all shapes & sizes</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/images/slides/3.jpg"
            style={{ height: "570px", objectFit: "cover" }}
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>Tailored to Perfection</h3>
            <p>Rent Premium Suits for a Flawless Fit and Impeccable Look</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Slides;
