define(["require", "exports"], function (require, exports) {
    var footballfield = (function () {
        function footballfield() {
            this.players = [];
            this.positions = [
                { Name: "Center", Left: 50, Top: 80, IsSelected: false },
                { Name: "QB Standard", Left: 50, Top: 90, IsSelected: false },
                { Name: "QB Shotgun", Left: 50, Top: 110, IsSelected: false }
            ];
        }
        footballfield.prototype.selectRoute = function (pos) {
            this.positions.forEach(function (p) {
                p.IsSelected = false;
            });
            pos.IsSelected = true;
        };
        return footballfield;
    })();
    exports.footballfield = footballfield;
});
