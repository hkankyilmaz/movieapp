import React from "react";
import * as Icon from "react-bootstrap-icons";

const RemoveFavourites = (props) => {
  return (
    <div className="mx-1" style={{ fontSize: "11px" }}>
      {console.log(props.movie)}
      <button
        onClick={() => props.remove(props.movie)}
        className="btn w-100  bg-dark"
        style={{ fontWeight: "bold", color: "white" }}
      >
        Remove Favourites
        <Icon.XLg className="ms-3" fill="red" style={{ color: "red" }} />
      </button>
    </div>
  );
};

export default RemoveFavourites;
