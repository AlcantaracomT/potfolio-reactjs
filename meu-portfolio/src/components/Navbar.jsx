import { NavLink } from 'react-router-dom'
import './navbar.css'
import { links } from '../Data'

const Navbar = () => {
    return (
        <nav>
            <div className='container navContainer'>
                <ul className='navLinks'>
                    {
                        links.map(({name, path},  index) => {
                            return (
                                <li>
                                    <NavLink to={path}>{name}</NavLink>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </nav>
    )
}

export default Navbar