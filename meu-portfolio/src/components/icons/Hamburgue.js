import { AiOutlineMenu } from 'react-icons/ai'

import styles from './Hamburguer.module.css'

function Button() {
    return (
        <button className={styles.butMenu}>
            <AiOutlineMenu />
        </button>
    )
}

export default Button;