import React from 'react'
import './searchbar.css'
import { VscSearch } from "react-icons/vsc";
import { useTheme } from '../Themecontext/Theme';



export default function Searchbar() {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <div className={`input-wrapper ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
        <input type="text" placeholder='Block hash, transaction hash, address hash... ' className='back' />
        <VscSearch className="search-icon" />
    </div>
  )
}
