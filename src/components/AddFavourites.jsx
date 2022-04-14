import React from "react";
import * as Icon from "react-bootstrap-icons";

const AddFavourite = (props) => {
  return (
    <div className="mx-1" style={{ fontSize: "11px" }}>
      <button
        onClick={() => props.add(props.movie)}
        className="btn w-100  bg-dark"
        style={{ fontWeight: "bold", color: "white" }}
      >
        Add Favourites
        <Icon.Heart className="ms-3" fill="red" style={{ color: "red" }} />
      </button>
    </div>
  );
};

export default AddFavourite;
