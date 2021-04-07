AFRAME.registerComponent('color-toggle', {
    init: function() {
        let el = this.el;
        this.toggleColor = function() {
            if (el.getAttribute('color') === '#FFC65D')
                el.setAttribute('color', '#644807');
            else if (el.getAttribute('color') === '#644807')
                el.setAttribute('color', '#FFC65D');
        }

        this.onCollision = function(e) {
            if (e.detail.body.el.id === 'ball') {
                if (! el.hasAttribute('animation')) {
                    el.setAttribute('color', '#FF0000');
                    console.log('hi')
                    let params = {
                        property: 'color',
                        type: 'color',
                        to: '#FFC65D',
                        dur: 2000,
                        easing: 'easeInOutElastic'
                    }
                    el.setAttribute('animation', params)
                }
            }
        }

        this.onAnimationComplete = function(e) {
            el.removeAttribute('animation')
            console.log('animation complete')
        }

        this.onAnimationBegin = function() {
            console.log('animation begin')
        }

        this.el.addEventListener('click', this.toggleColor);
        this.el.addEventListener('collide', this.onCollision);
        this.el.addEventListener('animationbegin', this.onAnimationBegin)
        this.el.addEventListener('animationcomplete', this.onAnimationComplete)
    },
    remove: function() {
        this.el.removeEventListener('click', this.toggleColor);
        this.el.addEventListener('collide', this.onCollision);
    }
})