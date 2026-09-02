import "./cuidemosCard.css";

const CuidemosCard = ({ img, titulo, descripcion }) => {
  return (
    <div className="cuidemos-card">
      <img src={img} alt="Medio ambiente" />
      <h3>{titulo}</h3>
      <p>{descripcion}</p>
    </div>
  );
};

export default CuidemosCard;
