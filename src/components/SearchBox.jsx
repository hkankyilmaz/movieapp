import { useEffect, useState } from "react";

const SearchBox = (props) => {
  const [value, setValue] = useState("");

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        props.setSearchValue(value);
      }}
      className="d-flex"
    >
      <input
        onChange={(event) => setValue(event.target.value)}
        className="form-control me-2"
        type="search"
        placeholder="Search"
        aria-label="Search"
      />
      <button className="btn btn-outline-success" type="submit">
        Search
      </button>
    </form>
  );
};

export default SearchBox;
