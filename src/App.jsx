import "./App.css";
import Tarjeta from "./components/Tarjeta";

function App() {
  return (
    <div className="contenedor">

      <Tarjeta
        nombre="Juan Domingo Perón"
        profesion="Presidente de la Nación Argentina"
        imagen="https://th.bing.com/th/id/OIP.F9vCGvnVaGy7aqpBQ_WiwAHaFT?w=232&h=180&c=7&r=0&o=7&pid=1.7&rm=3"
        descripcion="Fue presidente de Argentina en tres oportunidades y fundador del movimiento justicialista."
      />

      <Tarjeta
        nombre="Arturo Umberto Illia"
        profesion="Presidente de la Nación Argentina"
        imagen="https://th.bing.com/th/id/OIP.DlrXNKobrA71OvTr-7BtbwHaFj?w=259&h=194&c=7&r=0&o=7&pid=1.7&rm=3"
        descripcion="Gobernó entre 1963 y 1966. Fue reconocido por su honestidad y por impulsar la educación y la salud pública."
      />

      <Tarjeta
        nombre="Raúl Alfonsín"
        profesion="Presidente de la Nación Argentina"
        imagen="https://th.bing.com/th/id/OIP.ibwWyjaUuq809isJeOaxhgHaEi?w=294&h=180&c=7&r=0&o=7&pid=1.7&rm=3"
        descripcion="Presidente entre 1983 y 1989. Encabezó el regreso de la democracia luego de la última dictadura militar."
      />

    </div>
  );
}

export default App;