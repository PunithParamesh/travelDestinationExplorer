import { NavLink } from 'react-router-dom';
import styles from './navbar.module.css';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>🌍 Travel Explorer</div>
      <div className={styles.links}>
        <NavLink
          to="/"
          className={({ isActive }) => isActive ? styles.active : styles.link}
        >
          Home
        </NavLink>
        <NavLink
          to="/wishlist"
          className={({ isActive }) => isActive ? styles.active : styles.link}
        >
          Wishlist
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
