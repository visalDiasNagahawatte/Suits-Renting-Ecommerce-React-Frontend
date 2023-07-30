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
      <MDBRow className="g-4 d-flex justify-content-center">
        <MDBCol lg="2" md="4">
          <MDBCard className="h-100">
            <MDBCardImage
              src="https://i.imgur.com/VGt7p47.jpg"
              alt="..."
              position="top"
              style={{ height: "300px", objectFit: "cover" }}
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
        <MDBCol lg="2" md="4">
          <MDBCard className="h-100">
            <MDBCardImage
              src="https://i.imgur.com/0MoNi3N.jpg"
              alt="..."
              position="top"
              style={{ height: "300px", objectFit: "cover" }}
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
        <MDBCol lg="2" md="4">
          <MDBCard className="h-100">
            <MDBCardImage
              src="/images/cards/2.jpg"
              alt="..."
              position="top"
              style={{ height: "300px", objectFit: "cover" }}
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
        <MDBCol lg="2" md="4">
          <MDBCard className="h-100">
            <MDBCardImage
              src="https://i.etsystatic.com/38954895/r/il/54de89/4411819115/il_1080xN.4411819115_89ma.jpg"
              alt="..."
              position="top"
              style={{ height: "300px", objectFit: "cover" }}
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
