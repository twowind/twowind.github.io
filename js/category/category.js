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

},{"../state/index":2}],2:[function(require,module,exports){
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

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9fYnJvd3Nlci1wYWNrQDYuMS4wQGJyb3dzZXItcGFjay9fcHJlbHVkZS5qcyIsInRoZW1lcy9jbGVhbi9zb3VyY2UvanMvY2F0ZWdvcnkvY2F0ZWdvcnkuanMiLCJ0aGVtZXMvY2xlYW4vc291cmNlL2pzL3N0YXRlL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUNBQTs7OztBQUNBLElBQUksY0FBYyxHQUFHLFNBQWpCLGNBQWlCLENBQVUsQ0FBVixFQUFhO0FBQ2hDLE1BQUksTUFBTSxHQUFHLENBQUMsQ0FBQyxNQUFGLENBQVMsT0FBVCxDQUFpQixnQkFBakIsRUFBbUMsUUFBbkMsQ0FBNEMsQ0FBNUMsQ0FBYjs7QUFDQSxNQUFJLGtCQUFNLE1BQU4sSUFBZ0IsSUFBcEIsRUFBMEI7QUFDeEIsSUFBQSxNQUFNLENBQUMsWUFBUCxDQUFvQixPQUFwQixFQUE2QixhQUE3QjtBQUNBLHNCQUFNLE1BQU4sR0FBZSxNQUFmO0FBQ0QsR0FIRCxNQUdPLElBQUksa0JBQU0sTUFBTixJQUFnQixNQUFwQixFQUE0QjtBQUNqQyxJQUFBLE1BQU0sQ0FBQyxZQUFQLENBQW9CLE9BQXBCLEVBQTZCLFlBQTdCO0FBQ0Esc0JBQU0sTUFBTixHQUFlLElBQWY7QUFDRCxHQUhNLE1BR0E7QUFDTCxzQkFBTSxNQUFOLENBQWEsWUFBYixDQUEwQixPQUExQixFQUFtQyxZQUFuQzs7QUFDQSxJQUFBLE1BQU0sQ0FBQyxZQUFQLENBQW9CLE9BQXBCLEVBQTZCLGFBQTdCO0FBQ0Esc0JBQU0sTUFBTixHQUFlLE1BQWY7QUFDRDtBQUNGLENBYkQ7O0FBZUEsUUFBUSxDQUFDLGdCQUFULENBQTBCLGdCQUExQixFQUE0QyxPQUE1QyxDQUFvRCxVQUFDLE9BQUQsRUFBYTtBQUMvRCxFQUFBLE9BQU8sQ0FBQyxnQkFBUixDQUF5QixPQUF6QixFQUFrQyxjQUFsQztBQUNELENBRkQ7Ozs7Ozs7OztBQ2hCQSxJQUFNLEtBQUssR0FBRztBQUNWLEVBQUEsV0FBVyxFQUFFLENBREg7QUFFVixFQUFBLE1BQU0sRUFBQztBQUZHLENBQWQ7ZUFLZSxLIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwiaW1wb3J0IHN0YXRlIGZyb20gXCIuLi9zdGF0ZS9pbmRleFwiO1xubGV0IGNhdGVnb3J5X2NsaWNrID0gZnVuY3Rpb24gKGUpIHtcbiAgbGV0IHRhcmdldCA9IGUudGFyZ2V0LmNsb3Nlc3QoXCIuY2F0ZWdvcnktaXRlbVwiKS5jaGlsZHJlblsyXTtcbiAgaWYgKHN0YXRlLnRhcmdldCA9PSBudWxsKSB7XG4gICAgdGFyZ2V0LnNldEF0dHJpYnV0ZShcInN0eWxlXCIsIFwiaGVpZ2h0OjEwMCVcIik7XG4gICAgc3RhdGUudGFyZ2V0ID0gdGFyZ2V0O1xuICB9IGVsc2UgaWYgKHN0YXRlLnRhcmdldCA9PSB0YXJnZXQpIHtcbiAgICB0YXJnZXQuc2V0QXR0cmlidXRlKFwic3R5bGVcIiwgXCJoZWlnaHQ6MHB4XCIpO1xuICAgIHN0YXRlLnRhcmdldCA9IG51bGw7XG4gIH0gZWxzZSB7XG4gICAgc3RhdGUudGFyZ2V0LnNldEF0dHJpYnV0ZShcInN0eWxlXCIsIFwiaGVpZ2h0OjBweFwiKTtcbiAgICB0YXJnZXQuc2V0QXR0cmlidXRlKFwic3R5bGVcIiwgXCJoZWlnaHQ6MTAwJVwiKTtcbiAgICBzdGF0ZS50YXJnZXQgPSB0YXJnZXQ7XG4gIH1cbn07XG5cbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuY2F0ZWdvcnktaXRlbVwiKS5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNhdGVnb3J5X2NsaWNrKTtcbn0pO1xuIiwiY29uc3Qgc3RhdGUgPSB7XG4gICAgc3dpdGNoQ291bnQ6IDAsXG4gICAgdGFyZ2V0Om51bGwsXG59XG5cbmV4cG9ydCBkZWZhdWx0IHN0YXRlOyJdfQ==
