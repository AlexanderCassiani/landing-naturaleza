import "./footer.css";
import githubIcon from "../../assets/icons/github.svg";
import enlaceIcon from "../../assets/icons/enlace.svg";

const Footer = () => {
  return (
    <footer>
      <h2>
        Creado por <strong>Alexander Cassiani</strong>
      </h2>

      <a
        href="https://github.com/AlexanderCassiani/landing-naturaleza"
        target="_blank"
      >
        <img src={githubIcon} alt="GitHub" />
        <span>Repositorio</span>
      </a>

      <a
        href="https://www.magnific.com/es/vector-gratis/pagina-inicio-naturaleza-hojas_13441467.htm#fromView=keyword&page=1&position=36&uuid=d3604c80-d200-47f7-af04-2af182ecc07f&track=ais_hybrid&query=Nature+landing+page"
        target="_blank"
      >
        <span>Inspiracion en el diseño de esta pagina</span>
        <img className="img-inspiracion" src={enlaceIcon} alt="Enlace" />
      </a>
    </footer>
  );
};

export default Footer;
