import React, { Component } from 'react';
import Menu from '../Menu/Menu'
import './Header.css'

class Header extends Component {
    state = {

    }
    render() {
        return (
            <div className="header">
                <Menu />
            </div>
        );
    }
}

export default Header;