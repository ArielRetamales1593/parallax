import React from "react";
import styles from "./Gallery.module.css";
import Link from "next/link";
import "../../../public/css/media.css"

function Gallery({ productos }) {
  return (
    <>
      <div className={styles.container}>
        <div key={productos.valor} className={styles.box}>
          <Link href={`/products/${productos.id}`}>
            <figure className={styles.figura}>
              <img className={styles.img} src={productos.url[0]} alt="" />

              {/* <h2>{productos.nombre}</h2>
            <p>{productos.descripcion}</p> */}
            </figure>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Gallery;
