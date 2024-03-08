import React from 'react'
import './footer.scss'
import { useTheme } from '../Themecontext/Theme';


export default function Footer() {
    const { isDarkMode, toggleTheme } = useTheme();

    return (
    <div className={`full ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
        
        <div className={`footer ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
             <div className="main">
            <div className="footermain">
            Data provided by <a href="https://cryptoapis.io/?utm_source=blockexplorer.one" target="_blank">Crypto APIs</a><br/>
        
            </div>

            <div className="strong">
                <a href="/faq">FAQ</a>
                <a href="/releases-monitor">Releases monitor</a>
                <a href="/Privacy Policy">Privacy Policy</a>
                <a href="/Terms and Conditions">Terms and Conditions</a>
                

            </div>
            <div className="lastf">
                <a href="#">BlockExplorer.one. All Rights Reserved 2024</a>
            </div>

        </div>

       


        </div>
    </div>
    )
}
