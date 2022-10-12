import {Link} from 'react-router-dom'

import styles from './Navbar.module.css'

function NavbarRight() {
    return (
        <nav className={styles.navbar}>
        <ul className={styles.list}>
            <li className={styles.item}>
             <Link to="/habilidades">Habildades</Link>
            </li>
            <li className={styles.item}>
             <Link to="/contato">Contato</Link>
            </li>
         </ul>
        </nav>
    )
}

export default NavbarRight;