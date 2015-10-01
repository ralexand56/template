define(["require", "exports"], function (require, exports) {
    var App = (function () {
        function App() {
        }
        App.prototype.configureRouter = function (config, router) {
            config.title = "Template";
            config.map([
                { route: ['', 'home'], name: 'home', moduleId: './home', nav: true, title: 'Home' },
                { route: 'httpsample', name: 'httpsample', moduleId: './httpsample', nav: true, title: 'Http Sample' },
                { route: 'user', name: 'user', moduleId: './user', nav: true, title: 'User' }
            ]);
            this.router = router;
        };
        return App;
    })();
    exports.App = App;
});
