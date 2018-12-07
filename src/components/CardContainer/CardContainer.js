import React, { Component } from 'react';
import { TweenMax, TimelineMax, Expo } from 'gsap'
import Flickity from 'flickity'
import contents from '../../contents.json'
import './styles.css'
import Card from '../Card/Card.js';

class CardContainer extends Component {
    state = {
        contents:contents,
        mouseDown: false
    }
    mouseDown = (e) => {
        this.setState({
            mouseDown: true,
            skewDeg: 0
        })
        console.log(this.state.mouseDown)
    }
    mouseUp = (e) => {
        this.setState({
            mouseDown: false
        })
        console.log(this.state.mouseDown)
    }
    initEvents() {
        const { carouselContainer } = this.refs;
        carouselContainer.addEventListener('mouseup', (e) => this.mouseUp(e))
        carouselContainer.addEventListener('mousedown', (e) => this.mouseDown(e))
    }
    generateTimeline() {
        let timeline = new TimelineMax({ delay: 1 })
        console.log(this.refs.carousel)
        timeline
            .staggerFrom(this.refs.carousel.querySelectorAll('.card .title'), .8, {
                y: '100%',
                ease: Expo.ease,
            }, .1)
            .staggerFrom(this.refs.carousel.querySelectorAll('.card .id'), .8, {
                y: '20',
                autoAlpha: 0,
                ease: Expo.ease,
            }, .1)
    }
    componentDidMount() {

        console.log(this.state.contents);
        this.initEvents()
        this.generateTimeline()

        const flickity = new Flickity(this.refs.carousel, {
            cellAlign: 'center',
            draggable: true,
            prevNextButtons: false,
            // freeScroll: true,
            pageDots: false,
            // wrapAround: true

        })
        flickity.on('scroll', (progress) => {
            progress = Math.max(0, Math.min(1, progress))
            TweenMax.to(this.refs.progressBar, .5, {
                width: `${progress * 100}%`
            })

        })

        flickity.on( 'dragMove', ( event, pointer, moveVector ) => {
            console.log(Math.floor(this.state.skewDeg));
            this.setState({
                skewDeg: moveVector.x * 0.03
            })
            TweenMax.to(this.refs.carousel, .5, {
                
                skewX: `${this.state.skewDeg}`
            })
        });

        flickity.on( 'dragEnd', ( event, pointer, moveVector ) => {
            console.log(moveVector);
            this.setState({
                skewDeg: 0
            })
            TweenMax.to(this.refs.carousel, .5, {
                skewX: `${this.state.skewDeg}`
            })
        });

    }
    render() {
        const { contents } = this.state;
        return (
            <div className="wrapper">
                <div className="container mask" ref="carouselContainer">
                    <ul className="carousel" ref="carousel">
                        {
                            contents.map((user, index) => {
                                return (
                                    <Card user={user} key={index} counter={index}/>
                                )
                            })  
                        }
                    </ul>

                </div>
                <div id="prog">
                    <div className="progress-bar" ref="progressBar"></div>
                </div>
                <div className="drag-explore"><span>Drag to Explore.</span></div>
            </div>
        );
    }
}

export default CardContainer;