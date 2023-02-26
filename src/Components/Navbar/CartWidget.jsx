import { Icon } from '@iconify/react';

const CartWidget = () => {
  return (
    <div>
      <div>
        <Icon icon="material-symbols:garden-cart-rounded" color="pink" width="50" height="50" />
        <span>0</span>
      </div>
    </div>
  )
}

export default CartWidget