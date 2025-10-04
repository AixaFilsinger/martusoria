import destello from '../assets/descarga (1).jpg'
const Frase = () => {
    return (
        <section className=' d-flex flex-colum frase'>
            <img src={destello} alt="" width={100}/>
            <p className='parrafo'>Existen momentos en la vida que imaginamos, soñamos y esperamos.
                <br/>Uno de esos momentos es este.</p>
                <img src={destello} alt="" width={100} />
        </section>
    );
};

export default Frase;