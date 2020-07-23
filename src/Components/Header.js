import React from 'react';
import HeaderPicture from '../cover.png';
import {Link} from 'react-router-dom';

const Header = (props)=>{
    return(
        <div className='Header'>
            <div className="relative">
                <Link to="/"> <img src={HeaderPicture} alt=""/></Link>
                <p>MUSIC-DB</p>
            </div>
        </div>
    )
}

export default Header;