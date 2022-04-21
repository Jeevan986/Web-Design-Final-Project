import React from 'react'
import './Header.css'
import logo from './logo.svg';
import ping_pong from './ping_pong.png';
import HeaderOption from './HeaderOption';
import HomeIcon from '@mui/icons-material/Home';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import BeenhereIcon from '@mui/icons-material/Beenhere';
import BookIcon from '@mui/icons-material/Book';
import DeckIcon from '@mui/icons-material/Deck';
import {Link} from 'react-router-dom';

function Header(){
    return(
        <div className="header">

            <div className="header_left">
                <img src={logo} className="App-logo" />
            </div>
            <div className= "header_right">
                <Link to="/home"><HeaderOption Icon={HomeIcon} title="Home"/></Link>
                <Link to="/plans&pricing"><HeaderOption Icon={AttachMoneyIcon} title="Plans & Pricing"/></Link>
                <Link to="/reserve"><HeaderOption Icon={BeenhereIcon} title="Reserve"/></Link>
                <Link to="/blog"><HeaderOption Icon={BookIcon} title="Blog"/></Link>
                <Link to="/facilities"><HeaderOption Icon={DeckIcon} title="Facilities"/></Link>
            </div>
        </div>
    );
}

export default Header;
