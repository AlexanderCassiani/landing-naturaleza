import "./header.css";
import { useState } from "react";

const Header = () => {
  const [mostrarMenu, setMostrarMenu] = useState(false)

  return (
    <header>
      <div className="contenedor-logo">
        <img src="logo.png" alt="Logo" />
      </div>
      <div className="ocultar">
        <nav>
          <ul>
            <li>
              <a href="#hero" className="arriba">
                <span>Inicio</span>
              </a>
            </li>
            <li>
              <a href="#cuidemos-seccion" className="abajo">
                <span>Cuidemos</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>

      {/*menu mobile */}
      <div className="contenedor-menu-hamburguesa" onClick={() => setMostrarMenu(!mostrarMenu)}>
        <span className={mostrarMenu ? "rotar-palito-1" : null}>-</span>
        <span className={mostrarMenu ? "ocultar-palito-2" : null}>-</span>
        <span className={mostrarMenu ? "rotar-palito-3" : null}>-</span>

        <nav className={mostrarMenu ? "nav-mobile mostrar-nav-mobile" : "nav-mobile"}>
          <ul>
            <li>
              <a href="#hero" className="arriba">
                Inicio
              </a>
            </li>
            <li>
              <a href="#cuidemos-seccion" className="abajo">
                Cuidemos
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
