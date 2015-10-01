System.register([], function (_export) {
    "use strict";

    return {
        setters: [],
        execute: function () {
            if (typeof __decorate !== "function") __decorate = function (decorators, target, key, desc) {
                if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
                switch (arguments.length) {
                    case 2:
                        return decorators.reduceRight(function (o, d) {
                            return d && d(o) || o;
                        }, target);
                    case 3:
                        return decorators.reduceRight(function (o, d) {
                            return (d && d(target, key), void 0);
                        }, void 0);
                    case 4:
                        return decorators.reduceRight(function (o, d) {
                            return d && d(target, key, o) || o;
                        }, desc);
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
                        http.configure(function (config) {
                            config.useStandardConfiguration().withBaseUrl(_this.subreddit_url);
                        });
                        this.http = http;
                    };
                    httpsample.prototype.loadPosts = function () {};

                    httpsample.prototype.activate = function () {
                        return this.loadPosts();
                    };
                    httpsample = __decorate([aurelia_framework_1.inject(aurelia_fetch_client_1.HttpClient), __metadata('design:paramtypes', [])], httpsample);
                    return httpsample;
                })();
                exports.httpsample = httpsample;
            });
        }
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImh0dHBzYW1wbGUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsZ0JBQUksT0FBTyxVQUFVLEtBQUssVUFBVSxFQUFFLFVBQVUsR0FBRyxVQUFVLFVBQVUsRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRTtBQUN4RixvQkFBSSxPQUFPLE9BQU8sS0FBSyxRQUFRLElBQUksT0FBTyxPQUFPLENBQUMsUUFBUSxLQUFLLFVBQVUsRUFBRSxPQUFPLE9BQU8sQ0FBQyxRQUFRLENBQUMsVUFBVSxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsSUFBSSxDQUFDLENBQUM7QUFDbEksd0JBQVEsU0FBUyxDQUFDLE1BQU07QUFDcEIseUJBQUssQ0FBQztBQUFFLCtCQUFPLFVBQVUsQ0FBQyxXQUFXLENBQUMsVUFBUyxDQUFDLEVBQUUsQ0FBQyxFQUFFO0FBQUUsbUNBQU8sQUFBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFLLENBQUMsQ0FBQzt5QkFBRSxFQUFFLE1BQU0sQ0FBQyxDQUFDO0FBQUEsQUFDM0YseUJBQUssQ0FBQztBQUFFLCtCQUFPLFVBQVUsQ0FBQyxXQUFXLENBQUMsVUFBUyxDQUFDLEVBQUUsQ0FBQyxFQUFFO0FBQUUsb0NBQU8sQUFBQyxDQUFDLElBQUksQ0FBQyxDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUMsRUFBRyxLQUFLLENBQUMsQ0FBQSxDQUFDO3lCQUFFLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQztBQUFBLEFBQ3hHLHlCQUFLLENBQUM7QUFBRSwrQkFBTyxVQUFVLENBQUMsV0FBVyxDQUFDLFVBQVMsQ0FBQyxFQUFFLENBQUMsRUFBRTtBQUFFLG1DQUFPLEFBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxNQUFNLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQyxJQUFLLENBQUMsQ0FBQzt5QkFBRSxFQUFFLElBQUksQ0FBQyxDQUFDO0FBQUEsaUJBQ3pHO2FBQ0osQ0FBQztBQUNGLGdCQUFJLE9BQU8sVUFBVSxLQUFLLFVBQVUsRUFBRSxVQUFVLEdBQUcsVUFBVSxDQUFDLEVBQUUsQ0FBQyxFQUFFO0FBQy9ELG9CQUFJLE9BQU8sT0FBTyxLQUFLLFFBQVEsSUFBSSxPQUFPLE9BQU8sQ0FBQyxRQUFRLEtBQUssVUFBVSxFQUFFLE9BQU8sT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7YUFDNUcsQ0FBQztBQUNGLGtCQUFNLENBQUMsQ0FBQyxTQUFTLEVBQUUsU0FBUyxFQUFFLG1CQUFtQixFQUFFLHNCQUFzQixFQUFFLE9BQU8sQ0FBQyxFQUFFLFVBQVUsT0FBTyxFQUFFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxzQkFBc0IsRUFBRTtBQUMxSixvQkFBSSxVQUFVLEdBQUcsQ0FBQyxZQUFZO0FBQzFCLDZCQUFTLFVBQVUsR0FBRztBQUNsQiw0QkFBSSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUM7QUFDaEIsNEJBQUksQ0FBQyxhQUFhLEdBQUcsZ0NBQWdDLENBQUM7cUJBQ3pEO0FBQ0QsOEJBQVUsQ0FBQyxTQUFTLENBQUMsVUFBVSxHQUFHLFVBQVUsSUFBSSxFQUFFO0FBQzlDLDRCQUFJLEtBQUssR0FBRyxJQUFJLENBQUM7QUFDakIsNEJBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxNQUFNLEVBQUU7QUFDN0Isa0NBQU0sQ0FDRCx3QkFBd0IsRUFBRSxDQUMxQixXQUFXLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxDQUFDO3lCQUN6QyxDQUFDLENBQUM7QUFDSCw0QkFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7cUJBQ3BCLENBQUM7QUFDRiw4QkFBVSxDQUFDLFNBQVMsQ0FBQyxTQUFTLEdBQUcsWUFBWSxFQVE1QyxDQUFDOztBQUtGLDhCQUFVLENBQUMsU0FBUyxDQUFDLFFBQVEsR0FBRyxZQUFZO0FBQ3hDLCtCQUFPLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztxQkFDM0IsQ0FBQztBQUNGLDhCQUFVLEdBQUcsVUFBVSxDQUFDLENBQ3BCLG1CQUFtQixDQUFDLE1BQU0sQ0FBQyxzQkFBc0IsQ0FBQyxVQUFVLENBQUMsRUFDN0QsVUFBVSxDQUFDLG1CQUFtQixFQUFFLEVBQUUsQ0FBQyxDQUN0QyxFQUFFLFVBQVUsQ0FBQyxDQUFDO0FBQ2YsMkJBQU8sVUFBVSxDQUFDO2lCQUNyQixDQUFBLEVBQUcsQ0FBQztBQUNMLHVCQUFPLENBQUMsVUFBVSxHQUFHLFVBQVUsQ0FBQzthQUNuQyxDQUFDLENBQUMiLCJmaWxlIjoiaHR0cHNhbXBsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImlmICh0eXBlb2YgX19kZWNvcmF0ZSAhPT0gXCJmdW5jdGlvblwiKSBfX2RlY29yYXRlID0gZnVuY3Rpb24gKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKSB7XG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0LmRlY29yYXRlID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKTtcbiAgICBzd2l0Y2ggKGFyZ3VtZW50cy5sZW5ndGgpIHtcbiAgICAgICAgY2FzZSAyOiByZXR1cm4gZGVjb3JhdG9ycy5yZWR1Y2VSaWdodChmdW5jdGlvbihvLCBkKSB7IHJldHVybiAoZCAmJiBkKG8pKSB8fCBvOyB9LCB0YXJnZXQpO1xuICAgICAgICBjYXNlIDM6IHJldHVybiBkZWNvcmF0b3JzLnJlZHVjZVJpZ2h0KGZ1bmN0aW9uKG8sIGQpIHsgcmV0dXJuIChkICYmIGQodGFyZ2V0LCBrZXkpKSwgdm9pZCAwOyB9LCB2b2lkIDApO1xuICAgICAgICBjYXNlIDQ6IHJldHVybiBkZWNvcmF0b3JzLnJlZHVjZVJpZ2h0KGZ1bmN0aW9uKG8sIGQpIHsgcmV0dXJuIChkICYmIGQodGFyZ2V0LCBrZXksIG8pKSB8fCBvOyB9LCBkZXNjKTtcbiAgICB9XG59O1xuaWYgKHR5cGVvZiBfX21ldGFkYXRhICE9PSBcImZ1bmN0aW9uXCIpIF9fbWV0YWRhdGEgPSBmdW5jdGlvbiAoaywgdikge1xuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5tZXRhZGF0YSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gUmVmbGVjdC5tZXRhZGF0YShrLCB2KTtcbn07XG5kZWZpbmUoW1wicmVxdWlyZVwiLCBcImV4cG9ydHNcIiwgJ2F1cmVsaWEtZnJhbWV3b3JrJywgJ2F1cmVsaWEtZmV0Y2gtY2xpZW50JywgJ2ZldGNoJ10sIGZ1bmN0aW9uIChyZXF1aXJlLCBleHBvcnRzLCBhdXJlbGlhX2ZyYW1ld29ya18xLCBhdXJlbGlhX2ZldGNoX2NsaWVudF8xKSB7XG4gICAgdmFyIGh0dHBzYW1wbGUgPSAoZnVuY3Rpb24gKCkge1xuICAgICAgICBmdW5jdGlvbiBodHRwc2FtcGxlKCkge1xuICAgICAgICAgICAgdGhpcy5wb3N0cyA9IFtdO1xuICAgICAgICAgICAgdGhpcy5zdWJyZWRkaXRfdXJsID0gXCJodHRwOi8vcmVkZGl0LmNvbS9yL2Z1bm55Lmpzb25cIjtcbiAgICAgICAgfVxuICAgICAgICBodHRwc2FtcGxlLnByb3RvdHlwZS5jb250cnVjdG9yID0gZnVuY3Rpb24gKGh0dHApIHtcbiAgICAgICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgICAgICBodHRwLmNvbmZpZ3VyZShmdW5jdGlvbiAoY29uZmlnKSB7XG4gICAgICAgICAgICAgICAgY29uZmlnXG4gICAgICAgICAgICAgICAgICAgIC51c2VTdGFuZGFyZENvbmZpZ3VyYXRpb24oKVxuICAgICAgICAgICAgICAgICAgICAud2l0aEJhc2VVcmwoX3RoaXMuc3VicmVkZGl0X3VybCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHRoaXMuaHR0cCA9IGh0dHA7XG4gICAgICAgIH07XG4gICAgICAgIGh0dHBzYW1wbGUucHJvdG90eXBlLmxvYWRQb3N0cyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIC8vIHJldHVybiB0aGlzLmh0dHAuanNvbnAodGhpcy5zdWJyZWRkaXRfdXJsLCBcImpzb25wXCIpLnRoZW4ociA9PiB7XG4gICAgICAgICAgICAvLyBcdHRoaXMucG9zdHMgPSByLnJlc3BvbnNlLmRhdGEuY2hpbGRyZW47XG4gICAgICAgICAgICAvLyB9KTtcbiAgICAgICAgICAgIC8vdGhpcy5odHRwLmZldGNoKHRoaXMuc3VicmVkZGl0X3VybCkudGhlbih4ID0+IHRoaXMucG9zdHMgPSB4LnJlc3BvbnNlLmRhdGEuY2hpbGRyZW4pO1xuICAgICAgICAgICAgLy8gIHJldHVybiB0aGlzLmh0dHAuZmV0Y2goJ3Bvc3RzJylcbiAgICAgICAgICAgIC8vIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAgICAgICAgIC8vIC50aGVuKHVzZXJzID0+IHRoaXMucG9zdHMgPSBwb3N0cyk7XG4gICAgICAgIH07XG4gICAgICAgIC8vIGpzb25wKHN1YnJlZGRpdF91cmwsIGNhbGxiYWNrUGFyYW1ldGVyTmFtZT0nanNvbmNhbGxiYWNrJyl7XG4gICAgICAgIC8vIFx0cmV0dXJuIHRoaXMuY3JlYXRlUmVxdWVzdChzdWJyZWRkaXRfdXJsKS5hc0pzb25wKGNhbGxiYWNrUGFyYW1ldGVyTmFtZSkuc2VuZCgpLnRoZW4oeCA9PiB0aGlzLnBvc3RzID0gO1xuICAgICAgICAvLyB9XG4gICAgICAgIC8vIFxuICAgICAgICBodHRwc2FtcGxlLnByb3RvdHlwZS5hY3RpdmF0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmxvYWRQb3N0cygpO1xuICAgICAgICB9O1xuICAgICAgICBodHRwc2FtcGxlID0gX19kZWNvcmF0ZShbXG4gICAgICAgICAgICBhdXJlbGlhX2ZyYW1ld29ya18xLmluamVjdChhdXJlbGlhX2ZldGNoX2NsaWVudF8xLkh0dHBDbGllbnQpLCBcbiAgICAgICAgICAgIF9fbWV0YWRhdGEoJ2Rlc2lnbjpwYXJhbXR5cGVzJywgW10pXG4gICAgICAgIF0sIGh0dHBzYW1wbGUpO1xuICAgICAgICByZXR1cm4gaHR0cHNhbXBsZTtcbiAgICB9KSgpO1xuICAgIGV4cG9ydHMuaHR0cHNhbXBsZSA9IGh0dHBzYW1wbGU7XG59KTtcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
