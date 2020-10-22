import React from "react";
import './shop-header.css';
const ShopHeader = ({ numItems, total}) => {
    return (
        <header className="shop-header row">
            <a className="logo text-dark" href="/">Redux Store</a>
            <a>
                <i className="cart-icon fa fa-shopping-cart"/>
                <span>{numItems}</span><span> items </span>({total})
            </a>
        </header>
    );
}
export default ShopHeader;