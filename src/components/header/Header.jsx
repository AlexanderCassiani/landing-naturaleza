import "./header.css";

const Header = () => {
  return (
    <header>
      <div>
        <img src="logo.png" alt="Logo" />
      </div>
      <div>
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
    </header>
  );
};

export default Header;
