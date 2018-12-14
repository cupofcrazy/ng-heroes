import TweenMax, { Expo } from 'gsap'

/**
 * @param {DOMNode} el Background HTML Element
 */
class Interact {
    constructor({ elem, image }) {
        this.DOM = { elem, image }
        this.initEvents()
    }
    initEvents() {
        this.DOM.elem.addEventListener('mousemove', e => this.mouseMove(e))
        this.DOM.elem.addEventListener('mouseout', e => this.mouseOut(e))
    }
    get offset() {
        const rect = this.DOM.elem.getBoundingClientRect()
        const top = rect.top;
        const left = rect.left;

        return { top, left }
    }
    getMousePos(e) {
        const x = e.pageX;
        const y = e.pageY;
        
        return { x, y }
    }
    get rect() {
        const rect = this.DOM.elem.getBoundingClientRect()
        const width = rect.width;
        const height = rect.height;

        return { width, height }
    }
    mouseMove(e) {
        // Mouse position [x, y]
        const { x, y } = this.getMousePos(e);

        // Background [width, height]
        const { width, height } = this.rect;

        // Background offset [top, left]
        const { top, left } = this.offset;

        // Background mid-point [x, y]
        const midX = (x - left) - Math.floor(( width / 2 ));
        const midY = (y - top) - Math.floor(( height / 2 ));

        const opacity = Math.min(1, Math.abs(midY * 0.01));
       
        console.log({ midX, midY })

        this.animate(midX, midY);
    }
    mouseOut(e) {
        TweenMax.to(this.DOM.image, .3, {
            y: 0,
            x: 0,
            autoAlpha: 0,
            ease: Expo.easeInOut
        })
    }
    animate(x, y) {
        
        TweenMax.to(this.DOM.image, .5, {
            y: (y),
            x: (x),
            autoAlpha: 1,
            // skewY: -(y * 0.005),
            ease: Expo.ease
        })
    }
}

export default Interact;