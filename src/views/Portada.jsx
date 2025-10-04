import numero15 from "../assets/numero15.png"
const Portada = () => {
    return (
      <section className="portada"> 
  <div className="linea">
    <h1>Mis</h1>
    <img src={numero15} alt="15" width={100}/>
    <h1>Años</h1>
  </div>
  <h2 className="textos">Martu Soria</h2>
</section>


    );
};

export default Portada;