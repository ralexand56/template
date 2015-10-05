define(["require", "exports"], function (require, exports) {
    var anim = (function () {
        function anim() {
            this.plays = ["Trips 1", "Cross Buck", "Shotgun"];
        }
        anim.prototype.removeAnimator = function (p) {
            console.log(p);
            var index = this.plays.indexOf(p);
            this.plays.splice(index, 1);
        };
        return anim;
    })();
    exports.anim = anim;
});
