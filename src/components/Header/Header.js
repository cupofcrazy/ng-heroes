import React, { Component } from 'react';
import Logo from '../Logo/Logo'
import Menu from '../Menu/Menu'
import './Header.css'

class Header extends Component {
    state = {

    }
    componentDidMount() {
        console.log('Header is mounted')
    }
    render() {
        return (
            <div className="header">
                <Logo name="Proik."/>
                <Menu />
                
            </div>
        );
    }
}

export default Header;