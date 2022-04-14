const MovieListHeading = (props) => {
  return (
    <div className="bg-dark" style={{ fontSize: "30px", color: "#fff" }}>
      {props.head}
    </div>
  );
};

export default MovieListHeading;
