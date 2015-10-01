System.register([], function (_export) {
    "use strict";

    return {
        setters: [],
        execute: function () {
            define(["require", "exports"], function (require, exports) {
                var user = (function () {
                    function user() {
                        var _this = this;
                        this.users = ["Johnnie", "Tony", "Julie"];
                        this.currentDate = new Date();
                        this.update();
                        setInterval(function () {
                            return _this.update();
                        }, 1000);
                    }
                    user.prototype.update = function () {
                        this.currentDate = new Date();
                    };
                    return user;
                })();
                exports.user = user;
            });
        }
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVzZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsa0JBQU0sQ0FBQyxDQUFDLFNBQVMsRUFBRSxTQUFTLENBQUMsRUFBRSxVQUFVLE9BQU8sRUFBRSxPQUFPLEVBQUU7QUFDdkQsb0JBQUksSUFBSSxHQUFHLENBQUMsWUFBWTtBQUNwQiw2QkFBUyxJQUFJLEdBQUc7QUFDWiw0QkFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDO0FBQ2pCLDRCQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsU0FBUyxFQUFFLE1BQU0sRUFBRSxPQUFPLENBQUMsQ0FBQztBQUMxQyw0QkFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLElBQUksRUFBRSxDQUFDO0FBQzlCLDRCQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7QUFDZCxtQ0FBVyxDQUFDLFlBQVk7QUFBRSxtQ0FBTyxLQUFLLENBQUMsTUFBTSxFQUFFLENBQUM7eUJBQUUsRUFBRSxJQUFJLENBQUMsQ0FBQztxQkFDN0Q7QUFDRCx3QkFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEdBQUcsWUFBWTtBQUNoQyw0QkFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLElBQUksRUFBRSxDQUFDO3FCQUNqQyxDQUFDO0FBQ0YsMkJBQU8sSUFBSSxDQUFDO2lCQUNmLENBQUEsRUFBRyxDQUFDO0FBQ0wsdUJBQU8sQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO2FBQ3ZCLENBQUMsQ0FBQyIsImZpbGUiOiJ1c2VyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZGVmaW5lKFtcInJlcXVpcmVcIiwgXCJleHBvcnRzXCJdLCBmdW5jdGlvbiAocmVxdWlyZSwgZXhwb3J0cykge1xuICAgIHZhciB1c2VyID0gKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgZnVuY3Rpb24gdXNlcigpIHtcbiAgICAgICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgICAgICB0aGlzLnVzZXJzID0gW1wiSm9obm5pZVwiLCBcIlRvbnlcIiwgXCJKdWxpZVwiXTtcbiAgICAgICAgICAgIHRoaXMuY3VycmVudERhdGUgPSBuZXcgRGF0ZSgpO1xuICAgICAgICAgICAgdGhpcy51cGRhdGUoKTtcbiAgICAgICAgICAgIHNldEludGVydmFsKGZ1bmN0aW9uICgpIHsgcmV0dXJuIF90aGlzLnVwZGF0ZSgpOyB9LCAxMDAwKTtcbiAgICAgICAgfVxuICAgICAgICB1c2VyLnByb3RvdHlwZS51cGRhdGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB0aGlzLmN1cnJlbnREYXRlID0gbmV3IERhdGUoKTtcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIHVzZXI7XG4gICAgfSkoKTtcbiAgICBleHBvcnRzLnVzZXIgPSB1c2VyO1xufSk7XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
