import "./App.css";
import Hero from "./components/hero/Hero";
import Header from "./components/header/Header";
import CuidemosCard from "./components/cuidemos-card/CuidemosCard";
import Footer from "./components/footer/Footer";

function App() {
  const cardsInfo = [
    {
      id: 1,
      imagen:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSP8KgDg9NKG3DguhCWWKStUbmAJtMJyZ1J07b7pYnu0A&s=10",
      titulo: "Recicla",
      descripcion: "Dale una segunda vida a los objetos que no utilizas.",
    },
    {
      id: 2,
      imagen:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbxAk2WncHamx9SjvGbRNj-KcRc3Ue92GlsDf4bnTvPw&s=10",
      titulo: "Ahorra energía",
      descripcion: "Apaga lo que no uses y aprovecha la luz natural.",
    },
    {
      id: 3,
      imagen:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpEGaQ6Sj-ayFAVihSZgUt5xRnNvA1ATMIaf-KsC8SxQ&s=10",
      titulo: "Camina más",
      descripcion:
        "Para esa vuelta corta, deja el auto. Tu cuerpo y el aire lo notan.",
    },
  ];

  return (
    <div className="app">
      <Header />

      <Hero />

      <section id="cuidemos-seccion">
        <h2 className="cuidemos-seccion-titulo">Aporta tu granito de arena</h2>
        <div className="contenedor-cuidemos">
          {cardsInfo.map((info) => (
            <CuidemosCard
              key={info.id}
              img={info.imagen}
              titulo={info.titulo}
              descripcion={info.descripcion}
            />
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default App;
