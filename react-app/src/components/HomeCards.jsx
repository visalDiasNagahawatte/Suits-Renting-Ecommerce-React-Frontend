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
    <div className="mb-7 ">
      <MDBRow className="row-cols-6  g-4 d-flex justify-content-center">
        <MDBCol>
          <MDBCard className="h-100">
            <MDBCardImage
              src="https://mdbootstrap.com/img/new/standard/city/041.webp"
              alt="..."
              position="top"
            />
            <MDBCardBody>
              <MDBCardTitle>Suites for Grooms and Bestmen</MDBCardTitle>
              <MDBCardText>
                Are you looking for a suit that will make you look stunning and
                express your personal style to the fullest on your special day?
                We have the answer!
              </MDBCardText>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol>
          <MDBCard className="h-100">
            <MDBCardImage
              src="https://mdbootstrap.com/img/new/standard/city/042.webp"
              alt="..."
              position="top"
            />
            <MDBCardBody>
              <MDBCardTitle>Card title</MDBCardTitle>
              <MDBCardText>This is a short card.</MDBCardText>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol>
          <MDBCard className="h-100">
            <MDBCardImage
              src="https://mdbootstrap.com/img/new/standard/city/043.webp"
              alt="..."
              position="top"
            />
            <MDBCardBody>
              <MDBCardTitle>Card title</MDBCardTitle>
              <MDBCardText>
                This is a longer card with supporting text below as a natural
                lead-in to additional content.
              </MDBCardText>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol>
          <MDBCard className="h-100">
            <MDBCardImage
              src="https://mdbootstrap.com/img/new/standard/city/044.webp"
              alt="..."
              position="top"
            />
            <MDBCardBody>
              <MDBCardTitle>Card title</MDBCardTitle>
              <MDBCardText>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </MDBCardText>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </div>
  );
}
