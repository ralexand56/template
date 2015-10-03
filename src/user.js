define(["require", "exports"], function (require, exports) {
    var user = (function () {
        function user() {
            var _this = this;
            this.users = ["Johnnie", "Tony", "Julie", "Lilli"];
            this.currentDate = new Date();
            this.currentUser = "Paris Hilton";
            this.currentNumber = 1034200.01;
            this.update();
            setInterval(function () { return _this.update(); }, 1000);
        }
        user.prototype.update = function () {
            this.currentDate = new Date();
        };
        return user;
    })();
    exports.user = user;
});
