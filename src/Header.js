import React from 'react'
import './Header.css'
import logo from './logo.svg';
import HeaderOption from './HeaderOption';
import HomeIcon from '@mui/icons-material/Home';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import BeenhereIcon from '@mui/icons-material/Beenhere';
import BookIcon from '@mui/icons-material/Book';
import DeckIcon from '@mui/icons-material/Deck';

function Header(){
    return(
        <div className="header">

            <div className="header_left">
                <img src={logo} className="App-logo" />
            </div>
            <div className= "header_right">
                <HeaderOption Icon={HomeIcon} title="Home"/>
                <HeaderOption Icon={AttachMoneyIcon} title="Plans & Pricing"/>
                <HeaderOption Icon={BeenhereIcon} title="Reserve"/>
                <HeaderOption Icon={BookIcon} title="Blog"/>
                <HeaderOption Icon={DeckIcon} title="Facilities"/>
            </div>
        </div>
    );
}

export default Header;
