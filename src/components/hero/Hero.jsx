import "./hero.css";

const Hero = () => {
  return (
    <div id="hero">
      <video
        width="100%"
        height="100%"
        src="/video-naturaleza.mp4"
        autoPlay
        muted
        loop
      ></video>

      <div className="overlay"></div>

      <div className="hero-contenedor">
        <h1 className="hero-titulo">Conecta con la naturaleza</h1>
        <p className="hero-descripcion">
          Pequeños cambios en tu día a día hacen una gran diferencia por el
          planeta.
        </p>
      </div>
    </div>
  );
};

export default Hero;
