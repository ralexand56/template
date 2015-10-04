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
define(["require", "exports", 'aurelia-framework', 'aurelia-http-client', 'fetch'], function (require, exports, aurelia_framework_1, aurelia_http_client_1) {
    var httpsample = (function () {
        function httpsample(http) {
            // http.configure(config=> {
            // 	config
            // 		.useStandardConfiguration()
            // 		.withBaseUrl(this.subreddit_url);
            // });
            this.http = http;
            this.posts = [];
            this.users = [];
            this.subreddit_url = "https://api.github.com/";
            this.github_url = "http://reddit.com/r/nsfw.json";
            this.http = http;
        }
        httpsample.prototype.loadUsers = function () {
            // this.http.fetch("users")
            // 	.then(response => response.json())
            // 	.then(users => this.posts = users);
        };
        httpsample.prototype.loadPosts = function () {
            var _this = this;
            return this.http.jsonp(this.github_url, "jsonp").then(function (r) {
                _this.posts = r.response.data.children;
            });
        };
        // jsonp(subreddit_url, callbackParameterName='jsoncallback'){
        // 	return this.createRequest(subreddit_url).asJsonp(callbackParameterName).send().then(x => this.posts = ;
        // }
        //
        httpsample.prototype.activate = function () {
            this.loadPosts();
        };
        httpsample = __decorate([
            aurelia_framework_1.inject(aurelia_http_client_1.HttpClient), 
            __metadata('design:paramtypes', [aurelia_http_client_1.HttpClient])
        ], httpsample);
        return httpsample;
    })();
    exports.httpsample = httpsample;
});
