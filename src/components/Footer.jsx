import { Link } from "react-router-dom";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footerContainer">
      <div className="horariosFooter">
        <strong>Dias y Horarios</strong>
        <p>
          <strong>Lunes:</strong> 19:30hs - 00hs <br />
          <strong>Martes a Domingos:</strong> 12hs - 15hs / 19:30hs - 00hs{" "}
          <br />
        </p>
      </div>
      <div className="logoFooterContainer">
        <Link to="index.html">
          <img
            className="logoFooter"
            src="./src/assets/logoletras.png"
            alt="Logo Sabor a Rico"
          />
        </Link>
        <p>Copyright - derechos reservados - Sabor A Rico</p>
      </div>

      <div className="buttonsFooterContainer">
        <Link to="https://www.instagram.com/saborarico.gcruz/" target="_blank">
          Instagram
        </Link>
        <Link to="https://www.facebook.com/SaborARico.GCruz/" target="_blank">
          Facebook
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
