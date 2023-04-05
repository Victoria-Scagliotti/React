import styles from "./Styles/Navbar.module.css";
import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";

const Navbar = ({ children }) => {
  return (
    <div>
      <div className={styles.navbarContainer}>
        <Link to="/" className={styles.logoContainer}>
          <div>
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

        <div>
          <ul className="ulCategories">
            <Link to="/" className={styles.categoriesLi}>
              <li>Productos</li>
            </Link>

            <Link to="/category/cosplay" className={styles.categoriesLi}>
              <li>Cosplay</li>
            </Link>

            <Link to="/category/mangas" className={styles.categoriesLi}>
              <li>Mangas</li>
            </Link>

            <Link to="/category/llaveros" className={styles.categoriesLi}>
              <li>Llaveros</li>
            </Link>

            <Link to="/category/figuras" className={styles.categoriesLi}>
              <li>Figuras</li>
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
