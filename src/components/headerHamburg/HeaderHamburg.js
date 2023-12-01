import React, { useState } from "react";
import "./HeaderHamnurg.scss";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg";
import { slide as Menu } from "react-burger-menu";

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const closeMenu = () => {
        setIsMenuOpen(false);
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
                </div>

                <Menu
                    noOverlay
                    right
                    isOpen={isMenuOpen}
                    onStateChange={({ isOpen }) => setIsMenuOpen(isOpen)}
                    className="menu-container"
                >
                    <Link to="/" className="middle2__link" onClick={closeMenu}>
                        Home
                    </Link>
                    <Link to="/sleep-health" className="middle2__link" onClick={closeMenu}>
                        Sleep Health
                    </Link>
                    <Link to="/dental-health" className="middle2__link" onClick={closeMenu}>
                        Dental Health
                    </Link>
                    <Link to="/sustainable-design" className="middle2__link" onClick={closeMenu}>
                        Sustainability
                    </Link>
                    <Link to="/warranty" className="middle2__link" onClick={closeMenu}>
                        Warranty
                    </Link>

                    <Link to="/cart" className="rightside2__cart" onClick={closeMenu}>
                        Cart
                    </Link>
                    <Link to="/login" className="rightside2__login" onClick={closeMenu}>
                        Log In
                    </Link>
                </Menu>
            </nav>
        </span>
    );
}

export default Header;
