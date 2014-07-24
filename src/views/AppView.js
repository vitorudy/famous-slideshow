/*** AppView ***/

define(function(require, exports, module) {
    var View = require('famous/core/View');
    var Surface = require('famous/core/Surface');
    var Transform = require('famous/core/Transform');
    var StateModifier = require('famous/modifiers/StateModifier');
    var ImageSurface = require('famous/surfaces/ImageSurface');

    // import the SlideshowView class
    var SlideshowView = require('views/SlideshowView');

    function AppView() {
        View.apply(this, arguments);

        // passing in data
        var slideshowView = new SlideshowView({
            data: this.options.data
        });

        this.add(slideshowView);
        _createCamera.call(this);
    }   


    AppView.prototype = Object.create(View.prototype);
    AppView.prototype.constructor = AppView;

    AppView.DEFAULT_OPTIONS = {
        // it's a good idea to add a property in the default options
        // even when it's undefined    
        data: undefined,
        cameraWidth: 0.6 * window.innerHeight
    };

        function _createCamera() {
        var camera = new ImageSurface({
            size: [this.options.cameraWidth, true],
            content: 'img/camera.png',
            properties: {
                width: '100%'
            }
        });

        var cameraModifier = new StateModifier({
            origin: [0.5, 0],
            align: [0.5, 0],
            transform: Transform.behind
        });

        this.add(cameraModifier).add(camera);
    }

    module.exports = AppView;
});
