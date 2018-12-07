import React from 'react'
import './Logo.css'

const Logo = (props) => {
    return (
        <div className="logo">
            <span>{ props.name }</span>
        </div>
    )
}

export default Logo;
