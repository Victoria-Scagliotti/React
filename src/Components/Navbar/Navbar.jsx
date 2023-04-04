import styles from "./Styles/Navbar.module.css";
import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";

const Navbar = ({ children }) => {
  return (
    <div>
      <div className={styles.navbarContainer}>
          <Link to="/" className={styles.logoContainer}>
            <div className={styles.brandLogo}>
              <img
                src="https://res.cloudinary.com/drpltpicv/image/upload/v1680359856/pngegg_1_1_gecvu2.png"
                alt="logo"
                width="100"
                height="70"
              ></img>
            </div>

            <div>
              <h3>NiFanáticos</h3>
            </div>
          </Link>

        <div className={styles.categoriesContainer}>
          <ul className={styles.categoriesList}>
            <Link to="/">
              <li className={styles.categoriesLi}>Productos</li>
            </Link>

            <Link to="/category/cosplay">
              <li className={styles.categoriesLi}>Cosplay</li>
            </Link>

            <Link to="/category/mangas">
              <li className={styles.categoriesLi}>Mangas</li>
            </Link>

            <Link to="/category/llaveros">
              <li className={styles.categoriesLi}>Llaveros</li>
            </Link>

            <Link to="/category/figuras">
              <li className={styles.categoriesLi}>Figuras</li>
            </Link>
          </ul>
        </div>

        <CartWidget />
      </div>
      {children}
    </div>
  );
};

export default Navbar;
