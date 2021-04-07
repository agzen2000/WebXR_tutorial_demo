AFRAME.registerComponent('color-toggle', {
    init: function() {
        let el = this.el;
        this.toggleColor = function() {
            if (el.getAttribute('color') === '#FFC65D')
                el.setAttribute('color', '#644807');
            else
                el.setAttribute('color', '#FFC65D');
        }
        this.el.addEventListener('click', this.toggleColor);
    },
    remove: function() {
        this.el.removeEventListener('click', this.toggleColor);
    }
})