define(["require", "exports"], function (require, exports) {
    var home = (function () {
        function home() {
            this.name = "Template 1";
            console.log("Hello!");
        }
        return home;
    })();
    exports.home = home;
});
