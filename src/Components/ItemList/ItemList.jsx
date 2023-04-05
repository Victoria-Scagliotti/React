import styles from "./Styles/ItemList.module.css";
import Item from "../Item/Item";

const ItemList = ({ items }) => {
  return (
    <div className={styles.itemContainer}>
      {items.map((element) => {
        return <Item key={element.id} element={element} />;
      })}
    </div>
  );
};

export default ItemList;
