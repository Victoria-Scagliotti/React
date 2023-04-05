import { Button } from "@mui/material";
import { useState } from "react";

const ItemCount = ({ stock, initial=1, onAdd }) => {
  const [contador, setContador] = useState(initial);

  const sumar = () => {
    if (contador < stock) {
      setContador(contador + 1);
    }
  };

  const restar = () => {
    if (contador > 1) {
      setContador(contador - 1);
    }
  };

  return (
  
  <div>
    <div className="btns"  style={{marginTop: "50px"}}>
      <Button variant="outlined" onClick={sumar}>
        +
      </Button>
      <Button variant="contained" onClick={() => onAdd(contador)}>
        COMPRAR
      </Button>
      <Button variant="outlined" onClick={restar}>
        -
      </Button>
      <h2 style={{textAlign: "center"}}> Cantidad: {contador} </h2>
    </div>
  </div>
  );
};

export default ItemCount;