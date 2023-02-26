import CartWidget from './CartWidget';
import styles from "./Navbar.module.css";

const Navbar = () => {

  return (
    <div>
      <div className={styles.navbarContainer}>
        
        <div className={styles.logoContainer}>
          <div className={styles.brandLogo}>
            <img src='https://res.cloudinary.com/drpltpicv/image/upload/v1677367973/logo_binbas.png' alt='logo' width="80" height="80"></img>
          </div>
          <div className={styles.brandName}>
            NiFanáticos
          </div>
        </div>

        <div className={styles.categoriesContainer}>
          <ul className={styles.categoriesList}>
            <li>Cosplay</li>
            <li>Mangas</li>
            <li>Llaveros</li>
            <li>Muñequitos</li>
          </ul>
        </div>

        <CartWidget/>

      </div>
    </div>
  )
}

export default Navbar