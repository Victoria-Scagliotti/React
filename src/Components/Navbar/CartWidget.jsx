import { useContext } from "react"
import { Link } from "react-router-dom";
import { CartContext } from "../Context/CartContext";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import styles from "./Styles/Navbar.module.css";


const CartWidget = () => {

  const { getTotalQuantity } = useContext( CartContext )

  const total = getTotalQuantity()

  return (

    <Link to="/cart" className={styles.cartContainer}>
        
      <ShoppingCartIcon/>

      <div className="bubble-counter">
        <span>{total}</span>
      </div>

    </Link>
    
  );
};
export default CartWidget