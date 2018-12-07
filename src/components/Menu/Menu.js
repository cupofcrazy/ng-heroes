import React, { Component } from 'react';
import './Menu.css'

class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false
        }
    }
    componentDidMount() {
        this.initEvents()
    }
    
    initEvents() {
        this.refs.menuBar.addEventListener('click', e => this.toggleMenu(e))
    }
    toggleMenu = () => {
        const { menuBar } = this.refs;
        const { isOpen  } = this.state;

        console.log({ menuBar, isOpen })

        if (menuBar.classList.contains('open')) {
            this.setState({
                isOpen: false
            })
            menuBar.classList.remove('open')
        } else {
            this.setState({
                isOpen: true
            })
            menuBar.classList.add('open')
        }
    }
    render() {
        return (
            <div className="menu" ref="menuBar">
                <div className="circle">
                    <div className="bar__container">
                        <div className="bar"></div>
                        <div className="bar"></div>
                        <div className="bar"></div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Menu;