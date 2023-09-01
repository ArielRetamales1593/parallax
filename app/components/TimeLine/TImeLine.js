import React from "react";
import styles from "./TimeLine.module.css";

const TImeLine = () => {
  return (
    <div className={styles.scroll}>
      <h1 className={styles.titulo}>NUESTRO PROCESO</h1>
      <ul className={styles.bar}>
        <li>
          1
          <p className={styles.contenido}>
            {" "}
            Muebles que reflejan tu esencia, creando espacios que te
            representan.
          </p>
        </li>
        <li>
          2
          <p className={styles.contenido}>
            {" "}
            Muebles que reflejan tu esencia, creando espacios que te
            representan.
          </p>
        </li>
        <li>
          3
          <p className={styles.contenido}>
            {" "}
            Muebles que reflejan tu esencia, creando espacios que te
            representan.
          </p>
        </li>
      </ul>
    </div>
  );
};

export default TImeLine;