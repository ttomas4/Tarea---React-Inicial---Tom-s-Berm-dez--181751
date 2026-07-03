import "./Tarjeta.css";

function Tarjeta({ nombre, profesion, imagen, descripcion }) {
     return (
    <div className="tarjeta">
      <img
        src={imagen}
        alt={`Foto de ${nombre}`}
        className="tarjeta-imagen"
      />

      <h2>{nombre}</h2>
        <h3>{profesion}</h3>
        <p>{descripcion}</p>
    </div>
    );
}

 export default Tarjeta;