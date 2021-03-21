import { NavLink, withRouter } from 'react-router-dom';
import styles from './navigation.module.css';

const Navigation = () => {
    return (
      <nav className={styles.nav}>
        <ul className={styles.navList}>
          <li className={styles.navListItem}>
            <NavLink
              exact
              to="/"
              className={styles.Link}
              activeClassName={styles.linkFocusColor}
            >
              Home
            </NavLink>
          </li>
          <li className={styles.navListItem}>
            <NavLink
              to={{
                pathname: '/movies',
              }}
              className={styles.Link}
              activeClassName={styles.linkFocusColor}
            >
              Movies
            </NavLink>
          </li>
        </ul>
      </nav>
    );
  };
  export default withRouter(Navigation);