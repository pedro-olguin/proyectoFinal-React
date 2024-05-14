import { Link } from "react-router-dom";
import "../styles/Brand.css";

function Brand() {
  return (
    <Link className="logo--title" to="/">
      <img
        src="./src/assets/logoletras.png"
        alt="Logo Sabor A Rico"
        className="img--logo"
      />
    </Link>
  );
}

export default Brand;
