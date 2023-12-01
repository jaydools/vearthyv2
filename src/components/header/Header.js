import React from "react";
import "./Header.scss";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg";

function Header() {
    return (
        <span>
            <nav className="navbar">
                <div className="leftside">
                    <Link to="/" className="leftside__link">
                        <img src={logo} alt="Vearthy logo" className="leftside__logo" />
                    </Link>
                </div>
                <div className="middle">
                    <ul className="middle__list-parent">
                        <li className="middle__list-item">
                            <Link to="/" className="middle__link">
                                Home
                            </Link>
                        </li>
                        <li className="middle__list-item">
                            <Link to="/sleep-health" className="middle__link">
                                Sleep Health
                            </Link>
                        </li>
                        <li className="middle__list-item">
                            <Link to="/dental-health" className="middle__link">
                                Dental Health
                            </Link>
                        </li>
                        <li className="middle__list-item">
                            <Link to="/sustainable-design" className="middle__link">
                                Sustainability
                            </Link>
                        </li>
                        <li className="middle__list-item">
                            <Link to="/warranty" className="middle__link">
                                Warranty
                            </Link>
                        </li>
                    </ul>
                </div>

                <div>
                    <div className="rightside">
                        <Link to="/cart" className="rightside__cart">
                            Cart
                            {/* <img src={cartStatic} alt="shopping cart" className="cart-static" /> */}
                        </Link>
                        <Link to="/login" className="rightside__login">
                            Log In
                        </Link>
                    </div>
                </div>
            </nav>
        </span>
    );
}

export default Header;
