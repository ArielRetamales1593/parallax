import React from "react";
import styles from "./Plan.module.css";
import { PT_Sans } from "next/font/google";

const ptSans = PT_Sans({ weight: ["400", "700"], subsets: ["latin"] });

const Plan = () => {
  return (
    <div className={styles.planes}>
      <h2 className={`${styles.titulo} ${ptSans.className}`}>CATEGORIAS</h2>
      <div className={styles.contenedor}>
        <div className={styles.card} alt="Mountains">
          <h3 className={styles.titulo1}>PREMIUM</h3>
          <p className={styles.parrafo}>
            Para trabajos en roble, coigüe, raulí, lenga u otras maderas
            nativas.
          </p>
          <button className={`${styles.boton1} ${ptSans.className}`}>
            VER PRODUCTOS
          </button>
        </div>

        <div className={styles.card2} alt="Mountains">
          <h3 className={styles.titulo1}>STANDARD</h3>
          <p className={styles.parrafo}>
            Para trabajos en tableros de pino laminados
          </p>
          <button className={`${styles.boton1} ${ptSans.className}`}>
            VER PRODUCTOS
          </button>
        </div>

        <div className={styles.card3} alt="Mountains">
          <h3 className={styles.titulo1}>ECONÓMICO</h3>
          <p className={styles.parrafo}>
            Para trabajos en tableros de terciado mueblería.
          </p>
          <button className={`${styles.boton1} ${ptSans.className}`}>
            VER PRODUCTOS{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Plan;
