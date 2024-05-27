import { Link } from "react-router-dom";
import "./Brand.css";

function Brand() {
  return (
    <h1 className="brand">
      <Link to={"/"}>SOLID CLOTHES</Link>
    </h1>
  );
}

export default Brand;
