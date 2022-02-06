import React from 'react'
import './Header.css'
import punkLogo from '../assets/cryptopunk-logo.png'
import searchIcon from '../assets/search.png'
import themeSwitchIcon from '../assets/theme-switch.png'
const Header = () => {
    return (
        <div className='header'>
            <div className='logoContainer'>
<img src={punkLogo} className='punkLogo'/>

            </div>

        <div className='searchBar'>
            <div className='searchIconContainer'>
               <img src={searchIcon}/>
            </div>
            <input className='searchInput' placeholder='Collection, item or user'></input>
            </div>    
        
        <div className='headerItems'>
            <p>Drops</p>
            <p>Marketplace</p>
            <p>Create</p>
        </div>
       
        <div className='headerActions'>
            <div className='themeSwitchContainer'>
                <img src= {themeSwitchIcon}></img>
            </div>
       </div>

       <div className='loginButton'> GET IN</div>
        </div>
        
    )
}

export default Header
