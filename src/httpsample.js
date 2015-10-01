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
define(["require", "exports", 'aurelia-framework', 'aurelia-fetch-client', 'fetch'], function (require, exports, aurelia_framework_1, aurelia_fetch_client_1) {
    var httpsample = (function () {
        function httpsample() {
            this.posts = [];
            this.subreddit_url = "http://reddit.com/r/funny.json";
        }
        httpsample.prototype.contructor = function (http) {
            var _this = this;
            console.log("in constructor");
            http.configure(function (config) {
                config
                    .useStandardConfiguration()
                    .withBaseUrl(_this.subreddit_url);
            });
            this.http = http;
        };
        httpsample.prototype.loadPosts = function () {
            // return this.http.jsonp(this.subreddit_url, "jsonp").then(r => {
            // 	this.posts = r.response.data.children;
            // });
            //this.http.fetch(this.subreddit_url).then(x => this.posts = x.response.data.children);
            //  return this.http.fetch('posts')
            // .then(response => response.json())
            // .then(users => this.posts = posts);
        };
        // jsonp(subreddit_url, callbackParameterName='jsoncallback'){
        // 	return this.createRequest(subreddit_url).asJsonp(callbackParameterName).send().then(x => this.posts = ;
        // }
        //
        httpsample.prototype.activate = function () {
            return this.loadPosts();
        };
        httpsample = __decorate([
            aurelia_framework_1.inject(aurelia_fetch_client_1.HttpClient), 
            __metadata('design:paramtypes', [])
        ], httpsample);
        return httpsample;
    })();
    exports.httpsample = httpsample;
});
