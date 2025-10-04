
import boladisco from "../assets/Boladisco.png";
import dressCode from "../assets/Dresscode.png";
import Notamusical from "../assets/Notamusical.png";
import copas from "../assets/Copas.png";
import asistencia from "../assets/invitacion.png";
import regalo from "../assets/regalo.png";

import misa from "../assets/misa.png";

import { useState } from "react";

const Varios = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <section className="container text-center">
      <div className="card3d-wrapper mb-5">
        <div className="card3d">
          <img src={misa} alt="" width={100} />
          <h4>Misa</h4>
          <p>
            23 de noviembre Virgen de la merced
            <br />
            21:30
          </p>
        </div>
      </div>
      <div className="card3d-wrapper mb-5">
        <div className="card3d">
         <img src={copas} alt="" width={150} />
          <h4
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
          >
            Fiesta
          </h4>
          <p
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
          >
            29 de noviembre <br />
            21:30
          </p>
        </div>
      </div>
      <div className="card3d-wrapper mb-5">
        <div className="card3d">
           <img src={boladisco} alt="" width={100} />
          <h4
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
          >
            ¿Dónde?
          </h4>
          <p
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
          >
            Salón Torre Molino
          </p>
          <button
            className="btn-varios mt-3 mb-5"
            onClick={() =>
              window.open("https://maps.app.goo.gl/TZHeGarFSuTrbdZf7")
            }
          >
            CÓMO LLEGAR
          </button>
        </div>
      </div>
      <div className="card3d-wrapper mb-5">
        <div className="card3d">
           <img src={dressCode} alt="" width={100} />
          <h4
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
          >
            DressCode
          </h4>
          <p
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
          >
            Elegante<br /> Evitar el color rojo
          </p>
        </div>
      </div>
      <div className="card3d-wrapper mb-5">
        <div className="card3d">
            <img src={Notamusical} alt="" width={100} />
          <h4
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
          >
            PLAYLIST
          </h4>
          <p
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
          >
            ¡Creemos la playlist de la noche juntos!
          </p>
          <button
            className="btn-varios mt-3 mb-5"
            onClick={() =>
              window.open(
                "https://open.spotify.com/playlist/2WHLlY0yQwWhGNDeti796r?si=DbqX2fBeShiJS8w295xqUQ"
              )
            }
          >
            Sugerir canción
          </button>
        </div>
      </div>
      <div className="card3d-wrapper mb-5">
        <div className="card3d">
           <img src={asistencia} alt="" width={100} />
          <p
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
          >
            Soñé con este día y me gustaría vivirlo con quienes más quiero...
          </p>
          <button
            className="btn-varios mt-3 mb-5"
            onClick={() => window.open("https://wa.link/26qz7t")}
          >
            Confirmar Asistencia
          </button>
        </div>
      </div>
      <div className="card3d-wrapper">
        <div className="card3d">
           <img src={regalo} alt="" width={100} />
          <p
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
          >
            El mejor regalo que pueda tener será tu presencia
          </p>
          <button
            className="btn-varios mt-3 mb-5"
            onClick={() => setShowModal(true)}
          >
            Enviar regalo
          </button>
          {/* Modal */}
          {showModal && (
            <div
              className="modal-custom position-fixed top-50 start-50 translate-middle bg-white p-4 rounded shadow text-center"
              style={{
                zIndex: 9999, // 🔑 siempre arriba de todo
                width: "90%",
                maxWidth: "350px",
              }}
            >
              <h5 className="mb-3 fw-bold modalh5">Datos para el regalo</h5>

              {/* Los <p> ahora sí se ven */}
              <p className="mb-1">
                <strong>Alias:</strong> roxi.53
              </p>
              <p className="mb-3">
                <strong>A nombre de:</strong><br/>Roxana Portuese
              </p>

              <button
                className="btn-varios2"
                onClick={() => setShowModal(false)}
              >
                Cerrar
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Varios;
