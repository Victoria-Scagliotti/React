import { Icon } from '@iconify/react';
import { Link } from "react-router-dom";

const CartWidget = () => {
  return (
    <div>
      <Link to="/Cart">
        <Icon icon="material-symbols:garden-cart-rounded" color="pink" width="50" height="50" />
        <span>0</span>
      </Link>
    </div>
  )
}

export default CartWidget