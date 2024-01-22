import React from 'react'
import "./Header.css";
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className='header'>
      <Link to="/" className='title'>
        Graviton Quiz Hub
        <hr className='divider' />
      </Link>
    </div>
  )
}

export default Header
