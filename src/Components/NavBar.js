import React, {useState} from 'react'
import '../style/NavBar.css'
import { Link } from 'react-router-dom';

export function NavBar(props) {
    return (
        <nav className='navbar'>
            <ul className='navbar-nv'> {props.children} </ul>
        </nav>
    )
}

export function NavItem(props) {
    const [open, setOpen ] = useState(false);
    return (
        <li className='nav-item'>
            <a href='#' className='icon-button' onClick={() => setOpen(!open)}>
                {props.icon}
            </a>

            {open && props.children }
        </li>
    )
}

export function DropdownMenu() {

    function DropDownItem(props){
        return(
            <Link to={props.link} className='menu-item'>
                <span className='icon-button'>{props.leftIcon}</span>

                {props.children}

                <span className='icon-right'>{props.rightIcon}</span>
            </Link>
        )
    }

    return (
        <div className='dropdown'>
            <DropDownItem
            leftIcon = '🏠'
            rightIcon=''
            link='/'
            > Home </DropDownItem>

            <DropDownItem
            leftIcon = '⚛️'
            rightIcon=''
            link='/periodic'
            > Periodic Table </DropDownItem>

            <DropDownItem
            leftIcon = '➕'
            rightIcon=''
            link='/formula'
            > Calculator </DropDownItem>

            

            <DropDownItem
            leftIcon = '📋'
            rightIcon=''
            link='/about'
            > About </DropDownItem>
        </div>
    )
}

export default NavBar;

