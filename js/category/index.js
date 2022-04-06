(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

var _index = _interopRequireDefault(require("../state/index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var category_click = function category_click(e) {
  var target = e.target.closest(".category-item").children[2];

  if (_index["default"].target == null) {
    target.setAttribute("style", "height:100%");
    _index["default"].target = target;
  } else if (_index["default"].target == target) {
    target.setAttribute("style", "height:0px");
    _index["default"].target = null;
  } else {
    _index["default"].target.setAttribute("style", "height:0px");

    target.setAttribute("style", "height:100%");
    _index["default"].target = target;
  }
};

document.querySelectorAll(".category-item").forEach(function (element) {
  element.addEventListener("click", category_click);
});

},{"../state/index":3}],2:[function(require,module,exports){
"use strict";

require("./category");

},{"./category":1}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var state = {
  switchCount: 0,
  target: null
};
var _default = state;
exports["default"] = _default;

},{}]},{},[2])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9fYnJvd3Nlci1wYWNrQDYuMS4wQGJyb3dzZXItcGFjay9fcHJlbHVkZS5qcyIsInRoZW1lcy9jbGVhbi9zb3VyY2UvanMvY2F0ZWdvcnkvY2F0ZWdvcnkuanMiLCJ0aGVtZXMvY2xlYW4vc291cmNlL2pzL2NhdGVnb3J5L2luZGV4LmpzIiwidGhlbWVzL2NsZWFuL3NvdXJjZS9qcy9zdGF0ZS9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0FDQUE7Ozs7QUFDQSxJQUFJLGNBQWMsR0FBRyxTQUFqQixjQUFpQixDQUFVLENBQVYsRUFBYTtBQUNoQyxNQUFJLE1BQU0sR0FBRyxDQUFDLENBQUMsTUFBRixDQUFTLE9BQVQsQ0FBaUIsZ0JBQWpCLEVBQW1DLFFBQW5DLENBQTRDLENBQTVDLENBQWI7O0FBQ0EsTUFBSSxrQkFBTSxNQUFOLElBQWdCLElBQXBCLEVBQTBCO0FBQ3hCLElBQUEsTUFBTSxDQUFDLFlBQVAsQ0FBb0IsT0FBcEIsRUFBNkIsYUFBN0I7QUFDQSxzQkFBTSxNQUFOLEdBQWUsTUFBZjtBQUNELEdBSEQsTUFHTyxJQUFJLGtCQUFNLE1BQU4sSUFBZ0IsTUFBcEIsRUFBNEI7QUFDakMsSUFBQSxNQUFNLENBQUMsWUFBUCxDQUFvQixPQUFwQixFQUE2QixZQUE3QjtBQUNBLHNCQUFNLE1BQU4sR0FBZSxJQUFmO0FBQ0QsR0FITSxNQUdBO0FBQ0wsc0JBQU0sTUFBTixDQUFhLFlBQWIsQ0FBMEIsT0FBMUIsRUFBbUMsWUFBbkM7O0FBQ0EsSUFBQSxNQUFNLENBQUMsWUFBUCxDQUFvQixPQUFwQixFQUE2QixhQUE3QjtBQUNBLHNCQUFNLE1BQU4sR0FBZSxNQUFmO0FBQ0Q7QUFDRixDQWJEOztBQWVBLFFBQVEsQ0FBQyxnQkFBVCxDQUEwQixnQkFBMUIsRUFBNEMsT0FBNUMsQ0FBb0QsVUFBQyxPQUFELEVBQWE7QUFDL0QsRUFBQSxPQUFPLENBQUMsZ0JBQVIsQ0FBeUIsT0FBekIsRUFBa0MsY0FBbEM7QUFDRCxDQUZEOzs7OztBQ2hCQTs7Ozs7Ozs7O0FDQUEsSUFBTSxLQUFLLEdBQUc7QUFDVixFQUFBLFdBQVcsRUFBRSxDQURIO0FBRVYsRUFBQSxNQUFNLEVBQUM7QUFGRyxDQUFkO2VBS2UsSyIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsImltcG9ydCBzdGF0ZSBmcm9tIFwiLi4vc3RhdGUvaW5kZXhcIjtcbmxldCBjYXRlZ29yeV9jbGljayA9IGZ1bmN0aW9uIChlKSB7XG4gIGxldCB0YXJnZXQgPSBlLnRhcmdldC5jbG9zZXN0KFwiLmNhdGVnb3J5LWl0ZW1cIikuY2hpbGRyZW5bMl07XG4gIGlmIChzdGF0ZS50YXJnZXQgPT0gbnVsbCkge1xuICAgIHRhcmdldC5zZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLCBcImhlaWdodDoxMDAlXCIpO1xuICAgIHN0YXRlLnRhcmdldCA9IHRhcmdldDtcbiAgfSBlbHNlIGlmIChzdGF0ZS50YXJnZXQgPT0gdGFyZ2V0KSB7XG4gICAgdGFyZ2V0LnNldEF0dHJpYnV0ZShcInN0eWxlXCIsIFwiaGVpZ2h0OjBweFwiKTtcbiAgICBzdGF0ZS50YXJnZXQgPSBudWxsO1xuICB9IGVsc2Uge1xuICAgIHN0YXRlLnRhcmdldC5zZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLCBcImhlaWdodDowcHhcIik7XG4gICAgdGFyZ2V0LnNldEF0dHJpYnV0ZShcInN0eWxlXCIsIFwiaGVpZ2h0OjEwMCVcIik7XG4gICAgc3RhdGUudGFyZ2V0ID0gdGFyZ2V0O1xuICB9XG59O1xuXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmNhdGVnb3J5LWl0ZW1cIikuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjYXRlZ29yeV9jbGljayk7XG59KTtcbiIsImltcG9ydCAnLi9jYXRlZ29yeSciLCJjb25zdCBzdGF0ZSA9IHtcbiAgICBzd2l0Y2hDb3VudDogMCxcbiAgICB0YXJnZXQ6bnVsbCxcbn1cblxuZXhwb3J0IGRlZmF1bHQgc3RhdGU7Il19
