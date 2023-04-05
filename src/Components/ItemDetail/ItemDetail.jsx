
import Styles from "./Styles/ItemDetail.module.css"
import ItemCount from "../ItemCount/ItemCount";
//import "./ItemDetail.css";

const ItemDetail = ({ productSelected, onAdd, quantity }) => {
  return (

    <div className={Styles.itemDetailContainer}>
      <div className={Styles.imageContainer}>
        <img src={productSelected.img} alt="" width={"400px"}/>
      </div>

      <div className={Styles.detailContainer}>
        <h2 Styles={{ fontFamily: "monospace" }}>
          <span></span>{" "}
          {productSelected.title}
        </h2>
        <h2 Styles={{ fontFamily: "monospace" }}>
          <span></span>{" "}
          {productSelected.description}
        </h2>
        <h2 Styles={{ fontFamily: "monospace" }}>
          <span>Precio:</span> $
          {productSelected.price}
        </h2>

        <ItemCount
          onAdd={onAdd}
          stock={productSelected.stock}
          initial={quantity}
        />
        
      </div>
    </div>
  );
};

export default ItemDetail;