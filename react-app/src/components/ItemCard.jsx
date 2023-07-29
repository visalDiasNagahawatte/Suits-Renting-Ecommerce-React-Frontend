import React from "react";
import { Link } from "react-router-dom";

const ItemCard = (props) => {
  console.log("Image URL:", props.img);
  return (
    <div class="col-lg-4 col-md-6 col-sm-6 d-flex">
      <Link to={`/item/${props.id}`}>
        <div className="card w-100 my-2 shadow-2-strong">
          <img src={props.img} class="card-img-top" />
          <div class="card-body d-flex flex-column">
            <div class="d-flex flex-row">
              <h5 class="mb-1 me-1">{props.title}</h5>
            </div>
            <p class="card-text">Rs. {props.price} </p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ItemCard;
