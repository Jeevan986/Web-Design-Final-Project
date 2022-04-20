import React from 'react'
import './Header.css'
import logo from './logo.svg';
import HeaderOption from './HeaderOption';
import HomeIcon from '@mui/icons-material/Home';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import BeenhereIcon from '@mui/icons-material/Beenhere';
import BookIcon from '@mui/icons-material/Book';
import DeckIcon from '@mui/icons-material/Deck';
import { Navigation } from '@mui/icons-material';

function Header(){
    return(
        <div className="header">
            <div className="header_left">
                <img src={logo} className="App-logo" />
            </div>
            <div className= "header_right">
                <HeaderOption Icon={HomeIcon} title="Home" source='Home.js'/>
                <HeaderOption Icon={AttachMoneyIcon} title="Plans & Pricing" source='PlansPricing.js'/>
                <HeaderOption Icon={BeenhereIcon} title="Reserve" source='Reserve.js'/>
                <HeaderOption Icon={BookIcon} title="Blog" source='Blog.js'/>
                <HeaderOption Icon={DeckIcon} title="Facilities" source='Facilities.js'/>
            </div>
        </div>
    );
}

export default Header;
