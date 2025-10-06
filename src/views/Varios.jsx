import boladisco from "../assets/Boladisco.png";
import dressCode from "../assets/Dresscode.png";
import Notamusical from "../assets/Notamusical.png";
import copas from "../assets/Copas.png";
import asistencia from "../assets/invitacion.png";
import regalo from "../assets/regalo.png";
import brillo from "../assets/star.png"
import qr from "../assets/qrMartu.jpg"
import misa from "../assets/misa.png";

import { useState } from "react";

const Varios = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <section className="container text-center">
      <div
        className="card3d-wrapper mb-5"
        data-aos="fade-right"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine"
      >
        <div className="card3d position-relative">
          <img src={brillo} alt="" className="brillo brillo-top"/>
          <h4>Misa</h4>
          <div className="card-body">
            <img src={misa} alt="" width={100} />
            <p>
              23 de noviembre Virgen de la Merced
              <br />
              21:30
            </p>
            <img src={brillo} alt="" className="brillo brillo-bottom"/>
          </div>
        </div>
      </div>
      <div
        className="card3d-wrapper mb-5"
        data-aos="fade-right"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine"
      >
        <div className="card3d">
          <h4>Fiesta</h4>
          <div className="card-body">
            <img src={copas} alt="" width={150} />
            <p>
              11 de Noviembre Salón keke House
              <br />
              22hs
            </p>
          </div>
        </div>
      </div>
      <div
        className="card3d-wrapper mb-5"
        data-aos="fade-right"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine"
      >
        <div className="card3d">
          <h4>¿Donde?</h4>
          <div className="card-body">
            <img src={boladisco} alt="" width={100} />
            <p className="mb-3">Country Las Moritas</p>
            <button
              className="btn-varios mt-3 mb-5"
              onClick={() =>
                window.open("https://maps.app.goo.gl/CsRUAzCdW2nc2V3o8")
              }
            >
              CÓMO LLEGAR
            </button>
          </div>
        </div>
      </div>
      <div
        className="card3d-wrapper mb-5"
        data-aos="fade-right"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine"
      >
        <div className="card3d">
          <h4>DressCode</h4>
          <div className="card-body">
            <img src={dressCode} alt="" width={100} />
            <p>
              Elegante
              <br /> Evitar colores:
              <br />
              Blanco, Plateado, Natural
            </p>
            {/* 🔹 Círculos de colores */}
            <div className="color-palette">
              <div className="color-circle blanco" title="Blanco"></div>
              <div className="color-circle plateado" title="Plateado"></div>
              <div className="color-circle natural" title="Natural"></div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="card3d-wrapper mb-5"
        data-aos="fade-right"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine"
      >
        <div className="card3d">
          <h4>PLAYLIST</h4>
          <div className="card-body">
            <img src={Notamusical} alt="" width={100} />
            <p className="mb-2">¡Creemos la playlist de la noche juntos!</p>
            <button
              className="btn-varios mt-3 mb-5"
              onClick={() =>
                window.open(
                  "https://open.spotify.com/playlist/2Olag2OuGG36KxxkMaFnH8?si=Io1he_7qTjCPSLoMdMYKhQ&pt=b8bebc08fa87061d318aeb66a8b6220e"
                )
              }
            >
              Sugerir canción
            </button>
          </div>
        </div>
      </div>
      <div
        className="card3d-wrapper mb-5"
        data-aos="fade-right"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine"
      >
        <div className="card3d">
          <div className="card-body">
            <img src={asistencia} alt="" width={100} />
            <p className="mb-2">
              Soñé con este día y me gustaría vivirlo con quienes más quiero...
            </p>
            <button
              className="btn-varios mt-3 mb-3"
              onClick={() => window.open("https://wa.link/976qfe")}
            >
              Confirmar Asistencia a Mariana
            </button>
            <p>Ó</p>
            <button
              className="btn-varios mt-3 mb-3"
              onClick={() => window.open("https://wa.link/zmnytx")}
            >
              Confirmar Asistencia a Martu
            </button>
          </div>
        </div>
      </div>
      <div
        className="card3d-wrapper mb-5"
        data-aos="fade-right"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine"
      >
        <div className="card3d">
           <h4>Enviar Regalo</h4>
          <div className="card-body">
            <img src={regalo} alt="" width={100} />
            <p className="mb-2">El mejor regalo que pueda tener será tu presencia</p>
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
                  <strong>Alias:</strong> Martuu.soriaa
                </p>
                <p className="mb-3">
                  <strong>A nombre de:</strong>
                  <br />
                  Alma Martina Soria
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
      </div>
       <div
        className="card3d-wrapper mb-5"
        data-aos="fade-right"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine"
      >
        <div className="card3d position-relative">
          <img src={brillo} alt="" className="brillo brillo-top"/>
          <h4>Galeria de fotos</h4>
          <div className="card-body">
            <p className="mb-5">
             Compartamos los recuerdos de la noche juntos<br/>¡Subí tus fotos acá!
            </p>
            <img src={qr} alt="" width={200} />
            
          </div>
        </div>
      </div>
     <article
        className=" fin d-flex flex-column justify-content-center align-items-center position-relative"
       
      >
        <img src={brillo} alt="" className="brillo brillo-top1" />
        <h4  data-aos="zoom-in-down">¡No podes faltar!</h4>
        <h2  data-aos="zoom-in-down">Martu</h2>
        <img src={brillo} alt="" className="brillo brillo-bottom1" />
      </article>
    </section>
  );
};

export default Varios;
