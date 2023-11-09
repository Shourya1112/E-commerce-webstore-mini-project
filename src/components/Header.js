import React from 'react';
import "../styles/header.css"
import logo from "../assets/logoipsum-221.svg";
import searchIcon from "../assets/search_FILL0_wght400_GRAD0_opsz48.svg";
import userIcon from "../assets/account_circle_FILL0_wght400_GRAD0_opsz48.svg";
import wishlistIcon from "../assets/favorite_FILL0_wght400_GRAD0_opsz48.svg";
import cartIcon from "../assets/shopping_bag_FILL0_wght400_GRAD0_opsz48.svg";
// import { useNavigate } from 'react-router-dom'; 
import { Link } from 'react-router-dom';


const Header = (props) => {
    const LoginPage = props.setTrigger;

    // // Get the navigate function
    // const navigate = useNavigate();

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
                <li><a >Categories</a></li>
                <li><a >Bestsellers</a></li>
                <li><a >Just Arrived</a></li>
                <li><a >Products</a></li>
            </ul>
        </div>
        <div className='nav'>
            <ul className='icon-list'>
                <li>
                    <Link to="/login">
                        <img src={userIcon} alt='user' className='icon user-icon' />
                    </Link>
                </li>
                <li>
                    <Link to="/cart">
                        <img 
                            src={cartIcon} alt='cart' className='icon cart-icon' 
                    />
                    </Link>
                </li>
            </ul>
        </div>
    </div>
</div>
  )
}

export default Header;

// <li>
//                     <img src={wishlistIcon} alt='wishlist' className='icon wishlist-icon' />
//                 </li>
