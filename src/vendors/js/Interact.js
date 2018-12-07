import TweenMax, { Expo } from 'gsap'

/**
 * @param {DOMNode} el Background HTML Element
 */
class Interact {
    constructor(el) {
        this.DOM = {
            el: el
        }
        this.init()
    }
    init() {
        this.DOM.el.addEventListener('mousemove', e => this.mouseMove(e))
        this.DOM.el.addEventListener('mouseout', e => this.mouseOut(e))
    }
    get offset() {
        const top = this.DOM.el.offsetTop;
        const left = this.DOM.el.offsetLeft;

        return { top, left }
    }
    getMousePos(e) {
        const x = e.clientX;
        const y = e.clientY;
        
        return { x, y }
    }
    get rect() {
        const width = this.DOM.el.offsetWidth;
        const height = this.DOM.el.offsetHeight;

        return { width, height }
    }
    mouseMove(e) {
        // Mouse position [x, y]
        const x = this.getMousePos(e).x;
        const y = this.getMousePos(e).y;

        // Background [width, height]
        const W = this.rect.width;
        const H = this.rect.height;

        // Background offset [top, left]
        const offset = this.offset;
        const left = offset.left;
        const top = offset.top;

        // Background mid-point [x, y]
        const midX = x - left - Math.floor((W / 2));
        const midY = y - top - Math.floor((H / 2));

        const opacity = Math.min(1, Math.abs(midY * 0.01));
       

        this.animate(midX, midY);
    }
    mouseOut(e) {
        TweenMax.to(this.DOM.el, 1, {
            y: 0,
            x: 0
        })
    }
    animate(x, y) {
        TweenMax.to(this.DOM.el, 1, {
            y: (y) / 5,
            x: (x)/ 5,
            // skewY: -(y * 0.005),
            ease: Expo.ease
        })
    }
}

export default Interact;