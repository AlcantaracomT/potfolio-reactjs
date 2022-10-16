import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import './navbar.css'
import { links } from '../data'
import { BiPowerOff}  from 'react-icons/bi'

const Navbar = () => {
    const [isNavShowing, setIsNavShowing] = useState(false);

    return (
        <div>
            <button className='nav_toggle_btn' onClick={() => setIsNavShowing
                (!isNavShowing)}>
                    <BiPowerOff />
            </button>
            <nav className={`${isNavShowing ? 'show_nav' : 
            'hide_nav'}`}>
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
        </div>
    )
}

export default Navbar