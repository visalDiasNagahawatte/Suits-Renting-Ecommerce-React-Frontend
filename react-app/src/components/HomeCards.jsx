import React from "react";
import {
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBRow,
  MDBCol,
} from "mdb-react-ui-kit";

export default function Homecards() {
  return (
    <div className="mb-5 ">
      <MDBRow className="row-cols-6  g-4 d-flex justify-content-center">
        <MDBCol>
          <MDBCard className="h-100">
            <MDBCardImage
              src="/images/cards/3.jpg"
              alt="..."
              position="top"
              style={{ height: "330px" }}
            />
            <MDBCardBody style={{ textAlign: "center" }}>
              <MDBCardTitle>Western Wedding Suits</MDBCardTitle>
              <MDBCardText>
                We offer high-quality, hand-tailored suits specifically designed
                to your measurements. With a variety of fabrics and customizable
                details available, you can design your own one-of-a-kind outfit.
              </MDBCardText>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol>
          <MDBCard className="h-100">
            <MDBCardImage
              src="/images/cards/4.jpeg"
              alt="..."
              position="top"
              style={{ height: "330px" }}
            />
            <MDBCardBody style={{ textAlign: "center" }}>
              <MDBCardTitle> Modern National Dresses</MDBCardTitle>
              <MDBCardText>
                Our expertise extends to designing modern National Kits that
                embody elegance and style. We ensure top-notch craftsmanship and
                use only the finest materials to create your desired look.
              </MDBCardText>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol>
          <MDBCard className="h-100">
            <MDBCardImage
              src="/images/cards/2.jpg"
              alt="..."
              position="top"
              style={{ height: "330px" }}
            />
            <MDBCardBody style={{ textAlign: "center" }}>
              <MDBCardTitle>Women's Formal Clothings</MDBCardTitle>
              <MDBCardText>
                Experience the luxury of custom-made blazers and office wear
                kits for women with an extensive range of seasonal fabrics
                including wool, wool blends, linen, tweed, cotton, and corduroy.
              </MDBCardText>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol>
          <MDBCard className="h-100">
            <MDBCardImage
              src="/images/cards/5.webp"
              alt="..."
              position="top"
              style={{ height: "330px" }}
            />
            <MDBCardBody style={{ textAlign: "center" }}>
              <MDBCardTitle>Available in Kid Sizes</MDBCardTitle>
              <MDBCardText>
                We offer our exquisite collection of suits and dresses in kid
                sizes. From formal events to weddings, our range of high-quality
                garments ensures that your little ones will shine with style and
                confidence.
              </MDBCardText>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </div>
  );
}
