import React from 'react';
import { NavLink } from 'react-router-dom';


function Nav() {
    return(
    <div>
        <nav className='menu'>
            <NavLink className="menu__link" to='/actual-jobs'>Актуальные профессии</NavLink>
            <NavLink className='menu__link' to='/universities'>Университеты</NavLink>
            <NavLink className='menu__link' to='/subjects'>Предметы</NavLink>
            <NavLink className='menu__link' to='/'>Главная страница</NavLink>
        </nav>

    </div>
    )
}
export default Nav;