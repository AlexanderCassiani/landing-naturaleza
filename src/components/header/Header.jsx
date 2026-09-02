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
              <button className="arriba">
                <span>Inicio</span>
              </button>
            </li>
            <li>
              <button className="abajo">
                <span>Cuidemos</span>
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
