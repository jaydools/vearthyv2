import React from "react";
import "./Header.scss";
import { Link } from "react-router-dom";

function Header() {
    return (
        <nav className="navbar">
            <div className="leftside">
                <div className="leftside__logo">
                    <Link to="/">
                        <img src={logo} alt="logo" className="logo" />
                    </Link>
                </div>
            </div>
            <div className="middle">
                <ul className="middle__list-parent">
                    <li className="middle__list-item">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="middle__list-item">
                        <Link to="/sleep-health">Sleep Health</Link>
                    </li>
                    <li className="middle__list-item">
                        <Link to="/dental-health">Dental Health</Link>
                    </li>
                    <li className="middle__list-item">
                        <Link to="/sustainable-design">Sustainability</Link>
                    </li>
                    <li className="middle__list-item">
                        <Link to="/warranty">Warranty</Link>
                    </li>
                </ul>
                <ul className="rightside">
                    <li className="rightside__list-item">
                        <Link to="/cart">
                            Cart
                            <img src={cartStatic} alt="shopping cart" className="cart-static" />
                        </Link>
                    </li>
                    <li>
                        <Link to="/login">
                            <button>Log In</button>
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Header;
