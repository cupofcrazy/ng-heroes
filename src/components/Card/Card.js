import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom'
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
        const interact = new Interact({
            elem: this.refs.title,
            image: this.refs.heroImage
        });
    }
    render() {
        // eslint-disable-next-line
        let { name, role, years } = this.props.user;
        name = name.split(' ');
        return (
            <li  ref="card">
            <div className="card">
                <div className="mask">
                <Link to={`/heroes/${this.props.id}`}>
                    <div className="title" ref="title">
                        { name.map((char, id) => {
                            return (
                                
                                    <div className="mask" key={id}>
                                        <div className="name item">{ char }</div>
                                    </div>
                            )
                        })}
                    </div>
                </Link>
                </div>
                {/* <div className="role">{ role }</div> */}
                <div className="id">{formatNumber(this.props.counter+1)}</div>
                {/* <div className="years">{ years }</div> */}
                <div className="hero_image" ref="heroImage"></div>
            </div>
            </li>
        );
    }
}

export default Card;