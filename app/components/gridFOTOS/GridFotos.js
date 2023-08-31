import React from "react";
import styles from "./GridFotos.module.css";

const GridFotos = () => {
  return (
    <div className={styles.containerImg}>
      <div className={styles.boxImg}>
        <a href="#">
          <figure className={styles.figura}>
            <p className={styles.info}>
              Tipo de silla diseñada con una técnica de ensamblaje que involucra
              uniones diagonales en sus patas traseras, brindándole mayor
              estabilidad y resistencia.
            </p>
            <img
              className={styles.img}
              src="https://storage.cloud.google.com/fotosdmt/mockup_pag%20web_dmtaller/Silla%20contraveta%20(21).JPG"
              alt=""
            />
          </figure>
        </a>
      </div>

      {/* ... Repite el mismo patrón para las demás imágenes ... */}

      <div className={styles.boxImg}>
        <a href="#">
          <figure className={styles.figura}>
            <img
              className={styles.img}
              src="https://storage.cloud.google.com/fotosdmt/mockup_pag%20web_dmtaller/Silla%20contraveta%20(26).JPG"
              alt=""
            />
          </figure>
        </a>
      </div>

      <div className={styles.boxImg}>
        <a href="#">
          <figure className={styles.figura}>
            <img
              className={styles.img}
              src="https://storage.cloud.google.com/fotosdmt/mockup_pag%20web_dmtaller/Silla%20contraveta%20(27).JPG"
              alt=""
            />
          </figure>
        </a>
      </div>
      <div className={styles.boxImg}>
        <a href="#">
          <figure className={styles.figura}>
            <h2 className={styles.titulo}>CONTRAVETA</h2>
            <img
              className={styles.img}
              src="https://storage.cloud.google.com/fotosdmt/mockup_pag%20web_dmtaller/Silla%20contraveta%20(28).JPG"
              alt=""
            />
          </figure>
        </a>
      </div>
    </div>
  );
};

export default GridFotos;
