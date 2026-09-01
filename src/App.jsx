import "./App.css";

function App() {
  return (
    <div className="app">
      <div className="contenedor-video">
        <video
          width="100%"
          height="100%"
          src="/video-naturaleza.mp4"
          autoPlay
          muted
          loop
        ></video>
        <div className="overlay"></div>
      </div>
    </div>
  );
}

export default App;
