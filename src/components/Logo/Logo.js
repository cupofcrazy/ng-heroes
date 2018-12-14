import React from 'react'
import { Route, Link } from 'react-router-dom'
import './Logo.css'

const Logo = (props) => {
    return (
        <div className="logo">
            <span><Link to="/about">{ props.name }</Link></span>
        </div>
    )
}

export default Logo;
