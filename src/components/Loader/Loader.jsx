import "./Loader.scss";

function Loader() {
  return (
    <div className="content">
      <div className="planet">
        <div className="planet__ring"></div>
        <div className="planet__cover-ring"></div>
        <div className="planet__spots">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <p>loading</p>
    </div>
  );
}

export default Loader;
