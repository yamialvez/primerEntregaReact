// import "./Navbar.css"

import CartWidget from "../CartWidget/CartWidget";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <div className={styles.containerNavbar}>
      <img
        src="https://res.cloudinary.com/dg4ps33pa/image/upload/v1680649787/corazon_qulltw.jpg"
        alt="tienda Koala"
      />
      <ul className={styles.list}>
        <li className={styles.btnList}>Home</li>
        <li className={styles.btnList}>Productos</li>
        <li className={styles.btnList}>Clientes</li>
        <li className={styles.btnList}>Contacto</li>
      </ul>
      <CartWidget />
    </div>
  );
};

export default Navbar;
