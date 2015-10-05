if (typeof __decorate !== "function") __decorate = function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
if (typeof __metadata !== "function") __metadata = function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define(["require", "exports", 'aurelia-framework', 'aurelia-animator-css'], function (require, exports, aurelia_framework_1, aurelia_animator_css_1) {
    var anim = (function () {
        function anim(animator) {
            this.animator = animator;
            this.plays = ["Trips 1", "Cross Buck", "Shotgun"];
            //console.log(this.animator);
        }
        anim.prototype.removeAnimator = function (p) {
            console.log(p);
            var index = this.plays.indexOf(p);
            this.plays.splice(index, 1);
        };
        anim.prototype.addAnimator = function () {
            this.plays.push("Option 1");
        };
        anim = __decorate([
            aurelia_framework_1.autoinject, 
            __metadata('design:paramtypes', [aurelia_animator_css_1.CssAnimator])
        ], anim);
        return anim;
    })();
    exports.anim = anim;
});
