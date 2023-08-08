import React from 'react';
import "../styles/header.css"
import logo from "../assets/logoipsum-221.svg";
import searchIcon from "../assets/search_FILL0_wght400_GRAD0_opsz48.svg";
import userIcon from "../assets/account_circle_FILL0_wght400_GRAD0_opsz48.svg";
import wishlistIcon from "../assets/favorite_FILL0_wght400_GRAD0_opsz48.svg";
import cartIcon from "../assets/shopping_bag_FILL0_wght400_GRAD0_opsz48.svg";


const Header = (props) => {
    const LoginPage = props.setTrigger;

    function appearLoginPage () {
        LoginPage((prev) => prev = !prev)
    }

  return (
    <div className='header'>
    <div className='head'>
        <a href='/' className='logo-link'>
            <img src={logo} alt="logo" className='logo' />
        </a>
        <div className='pages'>
            <ul className='page-list'>
                <li><a>Show All</a></li>
                <li><a >Bestsellers</a></li>
                <li><a >Earrings</a></li>
                <li><a >Pendants</a></li>
                <li><a >Rings</a></li>
                <li><a >Just Arrived</a></li>
                <li><a >More</a></li>
            </ul>
        </div>
        <div className='nav'>
            <ul className='icon-list'>
                <li><img src={searchIcon} alt='search' className='icon search-icon' /></li>
                <li onClick={ appearLoginPage }><img src={userIcon} alt='user' className='icon user-icon' /></li>
                <li><img src={wishlistIcon} alt='wishlist' className='icon wishlist-icon' /></li>
                <li><img src={cartIcon} alt='cart' className='icon cart-icon' /></li>
            </ul>
        </div>
    </div>
</div>
  )
}

export default Header;