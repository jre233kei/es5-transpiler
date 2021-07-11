"use strict";

require("core-js");

require("regenerator-runtime/runtime");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

// ここまで削除厳禁
// ↓ここから変更したいプログラムを書き込んでください。
// example program
// const/let
var hoge = 100;
var fuga = 100; // async/await

function b() {
  return _b.apply(this, arguments);
}

function _b() {
  _b = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            console.log("await start");
            _context.next = 3;
            return new Promise(function (resolve) {
              return setTimeout(resolve, 3000);
            });

          case 3:
            console.log("await finish");

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _b.apply(this, arguments);
}

b(); // arrow function

var foo = function foo(arr) {
  return arr.map(function (a) {
    return a * a;
  });
}; // template literal


console.log("map result is ".concat(foo([1, 2, 3])));