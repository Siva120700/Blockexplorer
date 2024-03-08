import React from 'react';
import './navbar.scss';
import { Link } from 'react-router-dom';
import { useTheme } from '../Themecontext/Theme';
import Switch from 'react-switch';

function Navbar() {
    const { isDarkMode, toggleTheme } = useTheme();

    return (
        <section className={`navbarsection ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
            <header className='navbarheader'>
                <div className="navbar-contc">
                    <div className='navright' >
                        <Link to="/" className="link" >BlockExplorer<span className="blue">.one</span></Link>
                    </div>
                    <div className="navbar">
                        <Switch
                            checked={isDarkMode}
                            onChange={toggleTheme}
                            onColor="#2ECC71"
                            offColor="#dddddd"
                            checkedIcon={false}
                            uncheckedIcon={false}
                        />
                    </div>
                </div>
            </header>
        </section>
    );
}

export default Navbar;
