// import {autoinject} from 'aurelia-framework';
// import {CssAnimator} from 'aurelia-animator-css';
define(["require", "exports"], function (require, exports) {
    //@autoinject
    var anim = (function () {
        function anim() {
            this.plays = ["Trips 1", "Cross Buck", "Shotgun"];
            this.duration = 1;
            this.speeds = ["fast", "slow", "medium"];
        }
        anim.prototype.removeAnimator = function (p) {
            var index = this.plays.indexOf(p);
            this.plays.splice(index, 1);
        };
        anim.prototype.addAnimator = function () {
            this.plays.push("Option 1");
        };
        return anim;
    })();
    exports.anim = anim;
});
