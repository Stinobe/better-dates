(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = global || self, global['better-dates'] = factory());
}(this, (function () { 'use strict';

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        writable: true,
        configurable: true
      }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
  }

  function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
  }

  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };

    return _setPrototypeOf(o, p);
  }

  function isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;

    try {
      Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
      return true;
    } catch (e) {
      return false;
    }
  }

  function _construct(Parent, args, Class) {
    if (isNativeReflectConstruct()) {
      _construct = Reflect.construct;
    } else {
      _construct = function _construct(Parent, args, Class) {
        var a = [null];
        a.push.apply(a, args);
        var Constructor = Function.bind.apply(Parent, a);
        var instance = new Constructor();
        if (Class) _setPrototypeOf(instance, Class.prototype);
        return instance;
      };
    }

    return _construct.apply(null, arguments);
  }

  function _isNativeFunction(fn) {
    return Function.toString.call(fn).indexOf("[native code]") !== -1;
  }

  function _wrapNativeSuper(Class) {
    var _cache = typeof Map === "function" ? new Map() : undefined;

    _wrapNativeSuper = function _wrapNativeSuper(Class) {
      if (Class === null || !_isNativeFunction(Class)) return Class;

      if (typeof Class !== "function") {
        throw new TypeError("Super expression must either be null or a function");
      }

      if (typeof _cache !== "undefined") {
        if (_cache.has(Class)) return _cache.get(Class);

        _cache.set(Class, Wrapper);
      }

      function Wrapper() {
        return _construct(Class, arguments, _getPrototypeOf(this).constructor);
      }

      Wrapper.prototype = Object.create(Class.prototype, {
        constructor: {
          value: Wrapper,
          enumerable: false,
          writable: true,
          configurable: true
        }
      });
      return _setPrototypeOf(Wrapper, Class);
    };

    return _wrapNativeSuper(Class);
  }

  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  }

  function _possibleConstructorReturn(self, call) {
    if (call && (typeof call === "object" || typeof call === "function")) {
      return call;
    }

    return _assertThisInitialized(self);
  }

  /**
   * 
   */
  var BetterDate =
  /*#__PURE__*/
  function (_Date) {
    _inherits(BetterDate, _Date);

    function BetterDate() {
      var _getPrototypeOf2;

      _classCallCheck(this, BetterDate);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      // Send given arguments to the JavaScript Date object
      return _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(BetterDate)).call.apply(_getPrototypeOf2, [this].concat(args)));
    }

    _createClass(BetterDate, [{
      key: "time",
      get: function get() {
        return this.getTime();
      }
    }, {
      key: "milliseconds",
      get: function get() {
        return this.getMilliseconds();
      }
    }, {
      key: "seconds",
      get: function get() {
        return this.getSeconds();
      }
    }, {
      key: "minutes",
      get: function get() {
        return this.getMinutes();
      }
    }, {
      key: "hours",
      get: function get() {
        return this.getHours();
      }
    }, {
      key: "date",
      get: function get() {
        return this.getDate();
      }
    }, {
      key: "month",
      get: function get() {
        return this.getMonth();
      }
    }, {
      key: "year",
      get: function get() {
        return this.getFullYear();
      }
    }, {
      key: "startOfDay",
      get: function get() {
        return new BetterDate(this.year, this.month, this.date, 0, 0, 0);
      }
    }, {
      key: "endOfDay",
      get: function get() {
        return new BetterDate(this.year, this.month, this.date, 23, 59, 59, 999);
      }
    }, {
      key: "startOfMonth",
      get: function get() {
        return new BetterDate(this.year, this.month, 1, 0, 0, 0);
      }
    }, {
      key: "daysInMonth",
      get: function get() {
        return 32 - new BetterDate(this.year, this.month, 32).date;
      }
    }, {
      key: "endOfMonth",
      get: function get() {
        return new BetterDate(this.year, this.month, this.daysInMonth, 23, 59, 59, 999);
      }
    }]);

    return BetterDate;
  }(_wrapNativeSuper(Date));

  return BetterDate;

})));
