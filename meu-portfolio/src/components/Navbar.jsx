import { NavLink } from 'react-router-dom'
import './navbar.css'
import { links } from '../data'

const Navbar = () => {
    return (
        <nav>
            <div className='container navContainer'>
                <ul className='navLinks'>
                    {
                        links.map(({name, path}, index) => {
                            return (
                                <li>
                                    <NavLink to={path} className={({isActive}) => isActive ? 'activeNav' :
                                ''}>{name}</NavLink>
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