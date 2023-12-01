import React, { useState } from "react";
import "./HeaderHamnurg.scss";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg";

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <span>
            <nav className="navbar2">
                <div className="navbar2__top">
                    <div className="leftside2">
                        <Link to="/" className="leftside2__link">
                            <img src={logo} alt="Vearthy logo" className="leftside2__logo" />
                        </Link>
                    </div>

                    <div className="hamburger" onClick={toggleMenu}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>

                <div className={`navbar2__bottom ${isMenuOpen ? "open" : ""}`}>
                    <ul className="middle2__list-parent">
                        <li className="middle2__list-item">
                            <Link to="/" className="middle2__link">
                                Home
                            </Link>
                        </li>
                        <li className="middle2__list-item">
                            <Link to="/sleep-health" className="middle2__link">
                                Sleep Health
                            </Link>
                        </li>
                        <li className="middle2__list-item">
                            <Link to="/dental-health" className="middle2__link">
                                Dental Health
                            </Link>
                        </li>
                        <li className="middle2__list-item">
                            <Link to="/sustainable-design" className="middle2__link">
                                Sustainability
                            </Link>
                        </li>
                        <li className="middle2__list-item">
                            <Link to="/warranty" className="middle2__link">
                                Warranty
                            </Link>
                        </li>
                    </ul>
                </div>

                <div>
                    <div className={`rightside2 ${isMenuOpen ? "open" : ""}`}>
                        <Link to="/cart" className="rightside2__cart">
                            Cart
                            {/* <img src={cartStatic} alt="shopping cart" className="cart-static" /> */}
                        </Link>
                        <Link to="/login" className="rightside2__login">
                            Log In
                        </Link>
                    </div>
                </div>
            </nav>
        </span>
    );
}

export default Header;
