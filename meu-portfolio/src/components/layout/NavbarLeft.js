import {Link} from 'react-router-dom'

import Container from './Container'
import Button from '../icons/Hamburgue';
import NavbarRight from './NavbarRight'

import styles from './Navbar.module.css'

function NavbarLeft() {
    return (
    <Container customClass="containerMenu">
      <nav className={styles.navbar}>
          <ul className={styles.list}>
            <li className={styles.item}>
             <Link to="/">Home</Link>
            </li>
            <li className={styles.item}>
             <Link to="/sobre">Sobre</Link>
            </li>
          </ul>
      </nav>
      <Button />
      <NavbarRight />
    </Container>
    )
}

export default NavbarLeft;