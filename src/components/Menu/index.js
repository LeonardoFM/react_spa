import React from 'react';
import Logo from '../../assets/logo.png';
import Button from '../components/Button/';
import {Link} from 'react-router-dom';
import './Menu.css';

const Menu = () => {

    return (
        <nav className="Menu">
            <Link  to='/'>
                <img className="Logo" src={Logo} alt="Artureza logo"/>
            </Link>
            <Button as={Link} to="/cadastro/prod" className="ButtonLink">
                Realizar pedido
            </Button>
        </nav>
    );

}

export default Menu;