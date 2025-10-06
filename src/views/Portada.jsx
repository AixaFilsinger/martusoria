import numero15 from "../assets/numero15.png"
const Portada = () => {
    return (
      <section className="portada"> 
  <div className="linea">
    {/* 🔹 Palabra "Mis" animada */}
    <h1 className="enfoque">
      {"Mis".split("").map((letra, i) => (
        <span key={i} style={{ animationDelay: `${i * 0.1}s` }}>
          {letra}
        </span>
      ))}
    </h1>

    {/* 🔹 Imagen central */}
    <img src={numero15} alt="15" width={100} />

    {/* 🔹 Palabra "Años" animada */}
    <h1 className="enfoque">
      {"Años".split("").map((letra, i) => (
        <span key={i} style={{ animationDelay: `${i * 0.1}s` }}>
          {letra}
        </span>
      ))}
    </h1>
  </div>

  {/* 🔹 Nombre animado abajo */}
  <h2 className="enfoque">
    {"Martu Soria".split("").map((letra, i) => (
      <span key={i} style={{ animationDelay: `${i * 0.1}s` }}>
        {letra === " " ? "\u00A0" : letra}
      </span>
    ))}
  </h2>
</section>



    );
};

export default Portada;