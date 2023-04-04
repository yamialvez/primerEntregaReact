import styles from "./CartWidget.module.css";
import { FaShoppingBag } from "react-icons/fa";

const CartWidget = () => {
  return (
    <div className={styles.contenCart}>
      <FaShoppingBag size={40} className={styles.iconCart} />
      <span className={styles.countCart}>0</span>
    </div>
  );
};

export default CartWidget;
