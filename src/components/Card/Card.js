import React, { Component } from 'react';
import { formatNumber } from '../../utils/formatNumber'
import './Card.css'
import Interact from '../../vendors/js/Interact';

class Card extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
        }
    }
    componentDidMount() {
        // const interact = new Interact(this.refs.card);
    }
    render() {
        let { name, role, years } = this.props.user;
        name = name.split(' ');
        return (
            <li  ref="card">
            <div className="card">
                <div className="mask">
                    
                    <div className="title">
                        { name.map((char, id) => {
                            return (
                                <div className="mask"  key={id}>
                                    <div className="name item">{ char }</div>
                                </div>
                            )
                        })}
                    </div>
                </div>
                {/* <div className="role">{ role }</div> */}
                <div className="id">{formatNumber(this.props.counter+1)}</div>
                {/* <div className="years">{ years }</div> */}
            </div>
            </li>
        );
    }
}

export default Card;