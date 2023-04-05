import { Button } from "@mui/material";
import React, { useContext, useState } from "react";
import { CartContext } from "../Context/CartContext";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import FormCheckoutContainer from "../FormCheckout/FormCheckoutContainer";
import Styles from "./Styles/Cart.module.css";

const Cart = () => {

  const { cart, clearCart, getTotalPrice, deleteProductById } =
    useContext(CartContext);

  const [showForm, setShowForm] = useState(false);
  const [orderId, setOrderId] = useState(null)

  const clear = () => {
    Swal.fire({
      title: "Seguro que quieres vaciar el carrito?",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Si, vaciar",
      denyButtonText: `No, no vaciar`,
    }).then((result) => {
      if (result.isConfirmed) {
        clearCart();
        Swal.fire("Carrito vaciado exitosamente", "", "success");
      } else if (result.isDenied) {
        Swal.fire("El carrito queda como estaba", "", "info");
      }
    });
  };

  if(orderId){
    return (
      <div style={
        {backgroundColor: "lightskyblue", 
          height:"80vh", 
          padding:"30px",
          display:"flex", 
          flexDirection:"column",
          justifyContent:"center",
          textAlign:"center"
          }}>
        <h2>Has tomado una excelente decisión, que mejor que tener un recuerdo de tu anime o te manga favorito? Nada!!</h2>
        <h4>el comprobante es : {orderId}</h4>
        <Link to="/">Seguir comprando</Link>
      </div>
    )
  }

  return (
    <div>
      {!showForm ? (
        <div className={Styles.cartContainer}>
          <div>
            {cart.map((item) => {
              return (
                <div key={item.id} className={Styles.cartItemInfoContainer}>
                  <img src={item.img} alt="" width={"300px"}/>
                  <div className={Styles.cartItemInfo}>
                    <h2>{item.name}</h2>
                    <h2>Unidades: {item.quantity}</h2>
                    <h2>${item.price}</h2>
                    <Button
                      color="primary"
                      variant="contained"
                      onClick={() => deleteProductById(item.id)}
                    >
                      Eliminar
                    </Button>
                  </div>
                </div>
              );
            })}
          </div>

          <div className={Styles.cartInfo}>

            <h1>Total de la compra: ${getTotalPrice()}</h1>
            {cart.length > 0 && (
              <div>
                <Button style={{margin: "10px"}} variant="contained" onClick={()=>setShowForm(true)}>Terminar la compra</Button>
                <Button onClick={clear} variant="contained">
                  Vaciar carrito
                </Button>
              </div>
            )}

          </div>
        </div>
      ) : (
        <FormCheckoutContainer cart={cart} getTotalPrice={getTotalPrice} setOrderId={setOrderId} clearCart={clearCart} />
      )}
    </div>
  );
};

export default Cart;