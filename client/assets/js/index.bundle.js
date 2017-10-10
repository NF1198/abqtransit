registerDependency(['d3', 'ko', 'google'], function () {/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/client/assets/js/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 29);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var MONTHS = Array(12).fill(0).map(function (n, idx) { return (idx + 101).toString().slice(1); });
    var DAYS = Array(32).fill(0).map(function (n, idx) { return (idx + 100).toString().slice(1); });
    function formatDate_YYYYmmdd(date) {
        return date.getFullYear().toString() + MONTHS[date.getMonth()] + DAYS[date.getDate()];
    }
    exports.formatDate_YYYYmmdd = formatDate_YYYYmmdd;
    function getParameterByName(name, url) {
        if (!url) {
            url = window.location.href;
        }
        name = name.replace(/[\[\]]/g, "\\$&");
        var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"), results = regex.exec(url);
        if (!results)
            return null;
        if (!results[2])
            return '';
        return decodeURIComponent(results[2].replace(/\+/g, " "));
    }
    exports.getParameterByName = getParameterByName;
    function BuildIndex(data, idxfn) {
        var index = {};
        for (var idx = 0; idx < data.length; idx++) {
            var item = data[idx];
            index[idxfn(item)] = item;
        }
        return index;
    }
    exports.BuildIndex = BuildIndex;
    function BuildMultiIndex(data, indxfn) {
        var index = {};
        for (var idx = 0; idx < data.length; idx++) {
            var item = data[idx];
            var keys = indxfn(item);
            keys.forEach(function (key) { return index[key] = item; });
        }
        return index;
    }
    exports.BuildMultiIndex = BuildMultiIndex;
    function Unindex(data) {
        var result = [];
        for (var key in data) {
            result.push(data[key]);
        }
        return result;
    }
    exports.Unindex = Unindex;
    function capitalizeFirstLetter(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }
    exports.capitalizeFirstLetter = capitalizeFirstLetter;
    function coerceToRange(x, a, b) {
        var min = Math.min(a, b);
        var max = Math.max(a, b);
        return (x < b) ? ((x > a) ? x : a) : b;
    }
    exports.coerceToRange = coerceToRange;
    var hexColorRE = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i;
    function hexToRgb(hex) {
        var result = hexColorRE.exec(hex);
        return result ? {
            r: parseInt(result[1], 16),
            g: parseInt(result[2], 16),
            b: parseInt(result[3], 16)
        } : null;
    }
    exports.hexToRgb = hexToRgb;
    function componentToHex(c) {
        var hex = c.toString(16);
        return hex.length == 1 ? "0" + hex : hex;
    }
    function rgbToHex(r, g, b) {
        return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
    }
    exports.rgbToHex = rgbToHex;
    function darkenCSSColor(color, newLightness) {
        if (newLightness === void 0) { newLightness = 0.2; }
        var rgb = hexToRgb(color);
        var hsl = rgbToHsl(rgb.r, rgb.g, rgb.b);
        var rgb_muted = hslToRgb(hsl[0], hsl[1], newLightness);
        return rgbToHex(rgb_muted[0], rgb_muted[1], rgb_muted[2]);
    }
    exports.darkenCSSColor = darkenCSSColor;
    /**
     * Converts an RGB color value to HSL. Conversion formula
     * adapted from http://en.wikipedia.org/wiki/HSL_color_space.
     * Assumes r, g, and b are contained in the set [0, 255] and
     * returns h, s, and l in the set [0, 1].
     *
     * @param   Number  r       The red color value
     * @param   Number  g       The green color value
     * @param   Number  b       The blue color value
     * @return  Array           The HSL representation
     */
    function rgbToHsl(r, g, b) {
        r /= 255, g /= 255, b /= 255;
        var max = Math.max(r, g, b), min = Math.min(r, g, b);
        var h, s, l = (max + min) / 2;
        if (max == min) {
            h = s = 0; // achromatic
        }
        else {
            var d = max - min;
            s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
            switch (max) {
                case r:
                    h = (g - b) / d + (g < b ? 6 : 0);
                    break;
                case g:
                    h = (b - r) / d + 2;
                    break;
                case b:
                    h = (r - g) / d + 4;
                    break;
            }
            h /= 6;
        }
        return [h, s, l];
    }
    exports.rgbToHsl = rgbToHsl;
    var clamp = function (x, a, b) { return Math.min(Math.max(x, a), b); };
    var clamp255 = function (x) { return Math.round(clamp(x, 0, 255)); };
    /**
     * Converts an HSL color value to RGB. Conversion formula
     * adapted from http://en.wikipedia.org/wiki/HSL_color_space.
     * Assumes h, s, and l are contained in the set [0, 1] and
     * returns r, g, and b in the set [0, 255].
     *
     * @param   Number  h       The hue
     * @param   Number  s       The saturation
     * @param   Number  l       The lightness
     * @return  Array           The RGB representation
     */
    function hslToRgb(h, s, l) {
        var r, g, b;
        if (s == 0) {
            r = g = b = l; // achromatic
        }
        else {
            var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
            var p = 2 * l - q;
            r = hue2rgb(p, q, h + 1 / 3);
            g = hue2rgb(p, q, h);
            b = hue2rgb(p, q, h - 1 / 3);
        }
        return [clamp255(r * 255), clamp255(g * 255), clamp255(b * 255)];
    }
    exports.hslToRgb = hslToRgb;
    function hue2rgb(p, q, t) {
        if (t < 0)
            t += 1;
        if (t > 1)
            t -= 1;
        if (t < 1 / 6)
            return p + (q - p) * 6 * t;
        if (t < 1 / 2)
            return q;
        if (t < 2 / 3)
            return p + (q - p) * (2 / 3 - t) * 6;
        return p;
    }
    function parseQueryString(query) {
        return (!query) ? {} : query.slice(query.indexOf('?') + 1)
            .split('&')
            .reduce(function (args, queryPair) {
            var keyvalue = queryPair.split('=').map(decodeURIComponent);
            var key = keyvalue[0];
            var value = keyvalue[1];
            if (args.hasOwnProperty(key)) {
                if (args[key] instanceof Array) {
                    args[key].push(value);
                }
                else {
                    args[key] = [args[key], value || ''];
                }
            }
            else {
                args[key] = value || '';
            }
            return args;
        }, {});
    }
    exports.parseQueryString = parseQueryString;
    function serializeQueryString(queryData) {
        var keyvalues = [];
        var _loop_1 = function (key) {
            var value = queryData[key];
            if (value instanceof Array) {
                value.forEach(function (v) { return keyvalues.push([key, v]); });
            }
            else {
                keyvalues.push((value) ? [key, value] : [key]);
            }
        };
        for (var key in queryData) {
            _loop_1(key);
        }
        return '?' + keyvalues.map(function (kvp) { return kvp.map(encodeURIComponent).join('='); }).join('&');
    }
    exports.serializeQueryString = serializeQueryString;
    function PointAlongLine(a, b, w) {
        var ax = a[0], ay = a[1];
        var bx = b[0], by = b[1];
        var wx = w[0], wy = w[1];
        if (ax === bx && ay === by) {
            if (ax === wx && ay === wy) {
                return { t: 1, i: [ax, ay], d: 0 };
            }
            else {
                return { t: 0, i: [ax, ay], d: 0 };
            }
        }
        var denom = Math.pow(bx - ax, 2) + Math.pow(by - ay, 2);
        var t = ((wx - ax) * (bx - ax) + (wy - ay) * (by - ay)) / (denom);
        var ix = ax + t * (bx - ax);
        var iy = ay + t * (by - ay);
        var dist = ((by - ay) * wx - (bx - ax) * wy + bx * ay - by * ax) / (Math.sqrt(denom));
        return {
            t: t,
            i: [ix, iy],
            d: dist
        };
    }
    exports.PointAlongLine = PointAlongLine;
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = d3;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/// GTFS functions
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    /**
     * Format a date according the to GTFS YYYYMMDD format
     * @param {Date} date
     * @returns {String} GTFS-formatted date
     */
    function formatGTFSDate(date) {
        var year = date.getFullYear().toString();
        var month = (date.getMonth() + 101).toString().slice(1, 3);
        var day = (date.getDate() + 100).toString().slice(1, 3);
        return year + month + day;
    }
    var WEEKDAY = "weekday";
    var SATURDAY = "saturday";
    var SUNDAY = "sunday";
    function getScheduleKey(date) {
        var day = (date || new Date()).getDay();
        if (day === 0) {
            return SUNDAY;
        }
        else if (day === 6) {
            return SATURDAY;
        }
        return WEEKDAY;
    }
    exports.getScheduleKey = getScheduleKey;
    /* A regular expression that matches GTFS times */
    var time24_RE = /(\d+):(\d\d):(\d\d)/;
    var time12_RE = /(\d+):(\d\d):(\d\d)\s*([aApP][mM])/;
    var time12_NO_SECONDS_RE = /(\d+):(\d\d)\s*([aApP][mM])/;
    /**
     * Convert a GTFS time string (24-hr format) to seconds. Note: According to the GTFS specification, values greater than
     * 24:00:00, e.g. 26:00:00, are valid scheduled stop times.
     * @param {String} time (HH:MM:SS) (0 <= HH <= 24)
     * @returns {Number} fractional minutes between a and b
     */
    function gtfs_time24_to_seconds(time) {
        var match = time24_RE.exec(time);
        var hours = +(match[1]);
        var minutes = +(match[2]);
        var seconds = +(match[3]);
        return (3600 * hours) + (60 * minutes) + (seconds);
    }
    exports.gtfs_time24_to_seconds = gtfs_time24_to_seconds;
    function gtfs_time12_to_seconds(time) {
        var match = time12_RE.exec(time);
        var hours = +(match[1]);
        var minutes = +(match[2]);
        var seconds = +(match[3]);
        var ampm = match[4];
        if (ampm === 'PM' && hours < 12) {
            hours += 12;
        }
        return (3600 * hours) + (60 * minutes) + (seconds);
    }
    exports.gtfs_time12_to_seconds = gtfs_time12_to_seconds;
    function gtfs_time12_no_seconds_to_seconds(time) {
        var match = time12_NO_SECONDS_RE.exec(time);
        var hours = +(match[1]);
        var minutes = +(match[2]);
        var ampm = match[3];
        if (ampm === 'PM' && hours < 12) {
            hours += 12;
        }
        return (3600 * hours) + (60 * minutes);
    }
    exports.gtfs_time12_no_seconds_to_seconds = gtfs_time12_no_seconds_to_seconds;
    function gtfs_seconds_to_time24(seconds) {
        var hrs = Math.floor(seconds / 3600);
        var mins = Math.floor((seconds * 60 / 3600) % 60);
        var secs = seconds % 60;
        return (hrs + 100).toString().slice(1, 3) + ":" + (mins + 100).toString().slice(1, 3) + ":" + (secs + 100).toString().slice(1, 3);
    }
    exports.gtfs_seconds_to_time24 = gtfs_seconds_to_time24;
    function gtfs_seconds_to_timeAMPM(seconds) {
        var hrs = Math.floor(seconds / 3600);
        var ampm = ((hrs % 24) < 12) ? "a" : "p";
        hrs -= (hrs <= 12) ? 0 : 12;
        var mins = Math.floor((seconds * 60 / 3600) % 60);
        var secs = seconds % 60;
        mins += (secs / 60.0);
        return (hrs).toFixed(0) + ":" + (mins + 100).toFixed(0).slice(1, 3) + ampm;
    }
    exports.gtfs_seconds_to_timeAMPM = gtfs_seconds_to_timeAMPM;
    function gtfs_seconds_to_timeAMPM2(seconds) {
        var hrs = Math.floor(seconds / 3600);
        var ampm = ((hrs % 24) < 12) ? " AM" : " PM";
        hrs -= (hrs <= 12) ? 0 : 12;
        var mins = Math.floor((seconds * 60 / 3600) % 60);
        var secs = seconds % 60;
        //mins += (secs / 60.0);
        return (hrs).toFixed(0) + ":" + (mins + 100).toFixed(0).slice(1, 3) + ampm;
    }
    exports.gtfs_seconds_to_timeAMPM2 = gtfs_seconds_to_timeAMPM2;
    function gtfs_seconds_to_timeAMPM3(seconds) {
        var hrs = Math.floor(seconds / 3600);
        var ampm = ((hrs % 24) < 12) ? " AM" : " PM";
        hrs -= (hrs <= 12) ? 0 : 12;
        var mins = Math.floor((seconds * 60 / 3600) % 60);
        var secs = seconds % 60;
        mins += (secs / 60.0);
        return (hrs).toFixed(0) + ":" + (mins + 100).toFixed(0).slice(1, 3) + ":" + (secs + 100).toFixed(0).slice(1, 3) + ampm;
    }
    exports.gtfs_seconds_to_timeAMPM3 = gtfs_seconds_to_timeAMPM3;
    function date_to_seconds(date) {
        var hours = date.getHours();
        var minutes = date.getMinutes();
        var seconds = date.getSeconds();
        var millis = date.getMilliseconds();
        return (3600 * hours) + (60 * minutes) + (seconds) + (millis * 0.001);
    }
    exports.date_to_seconds = date_to_seconds;
    function getDaySeconds(date) {
        var time = date || new Date();
        return time.getHours() * 3600
            + time.getMinutes() * 60
            + time.getSeconds()
            + time.getMilliseconds() / 1000.0;
    }
    exports.getDaySeconds = getDaySeconds;
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = Promise;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(0), __webpack_require__(2), __webpack_require__(7), __webpack_require__(9), __webpack_require__(7), __webpack_require__(1)], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, util_1, gtfs_util_1, geo_util_1, geoUTM, geoUtil, d3) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var IDX_ROUND_FUN = Math.floor;
    var IDX_ROUND_NUM = 60;
    var TripStopIndex = /** @class */ (function () {
        function TripStopIndex(route) {
            this.route = route;
            var trips = route.data.trips;
            this.index_by_stop_name = { weekday: {}, saturday: {}, sunday: {}, special: {} };
            this.index_by_stop_code = { weekday: {}, saturday: {}, sunday: {}, special: {} };
            function updateIndexComponent(index, trip, primaryKey, stopTimeKEY) {
                if (!index.hasOwnProperty(primaryKey)) {
                    index[primaryKey] = {};
                }
                var indexData = index[primaryKey];
                if (!indexData.hasOwnProperty(stopTimeKEY)) {
                    indexData[stopTimeKEY] = [];
                }
                var indexTripData = indexData[stopTimeKEY];
                indexTripData.push(trip);
            }
            function processTrips(trips, index_by_stop_name, index_by_stop_code) {
                trips.forEach(function (trip) {
                    var stopCount = trip.stops.length;
                    var startTime = trip.startTime;
                    for (var idx = 0; idx < stopCount; idx++) {
                        var stop_1 = trip.stops[idx];
                        var stopTimeKEY = (IDX_ROUND_FUN((startTime + trip.arrivalTimes[idx]) / IDX_ROUND_NUM) * IDX_ROUND_NUM).toString(); // round down times to the nearest minute
                        var stop_name = stop_1.stop_name;
                        var stop_code = stop_1.stop_code;
                        updateIndexComponent(index_by_stop_name, trip, stop_1.stop_name, stopTimeKEY);
                        updateIndexComponent(index_by_stop_code, trip, stop_1.stop_code, stopTimeKEY);
                    }
                });
            }
            processTrips(trips.weekday, this.index_by_stop_name.weekday, this.index_by_stop_code.weekday);
            processTrips(trips.saturday, this.index_by_stop_name.saturday, this.index_by_stop_code.saturday);
            processTrips(trips.sunday, this.index_by_stop_name.sunday, this.index_by_stop_code.sunday);
            for (var specialDayKey in trips.special) {
                var specialTrips = trips.special[specialDayKey];
                this.index_by_stop_name.special[specialDayKey] = {};
                this.index_by_stop_code.special[specialDayKey] = {};
                processTrips(specialTrips, this.index_by_stop_name.special[specialDayKey], this.index_by_stop_code.special[specialDayKey]);
            }
        }
        TripStopIndex.prototype.findInIndex = function (indexForSched, stop_name, stop_time) {
            var stop = indexForSched[stop_name];
            if (!stop) {
                return;
            }
            ;
            var timeKey = (IDX_ROUND_FUN(gtfs_util_1.gtfs_time12_no_seconds_to_seconds(stop_time) / IDX_ROUND_NUM)) * IDX_ROUND_NUM;
            var trips = stop[timeKey];
            var stopTimes = [];
            return (!!trips) ? trips[0] : null;
        };
        // stop_time is in format: 1:14 PM/
        TripStopIndex.prototype.findTripForStopNameAndTime = function (stop_name, stop_time, schedule) {
            //const sched = schedule || this.route.getScheduleKey();
            // const indexForSched = this.index_by_stop_name[sched] as IndexType;
            // const stop = indexForSched[stop_name];
            // if (!stop) { return };
            // const timeKey = gtfs_time12_no_seconds_to_seconds(stop_time);
            // const trips = stop[timeKey];
            // let stopTimes = [];
            // for (let keyTime in stop) {
            //   stopTimes.push(+keyTime);
            // }
            // console.assert(stop.hasOwnProperty(timeKey), "Couldn't find time for stop name: " + stop_name + " at " + stop_time + " Known " + sched + " stop times are: " + stopTimes.sort().map(gtfs_seconds_to_timeAMPM).join(", "))
            // return (!!trips) ? trips[0] : null;
            var trip = null;
            var SCHEDULE_SEARCH = null;
            switch (new Date().getDay()) {
                case 0:
                    SCHEDULE_SEARCH = ['sunday', 'weekday', 'saturday'];
                    break;
                case 6:
                    SCHEDULE_SEARCH = ['saturday', 'weekday', 'sunday'];
                    break;
                default: SCHEDULE_SEARCH = ['weekday', 'sunday', 'saturday'];
            }
            ;
            for (var sdx = 0; sdx < SCHEDULE_SEARCH.length; sdx++) {
                var sched = SCHEDULE_SEARCH[sdx];
                trip = this.findInIndex(this.index_by_stop_name[sched], stop_name, stop_time);
                if (trip != null) {
                    return trip;
                }
            }
            for (var sched in this.index_by_stop_name.special) {
                var specialScheduleIndex = this.index_by_stop_name.special[sched];
                trip = this.findInIndex(specialScheduleIndex, stop_name, stop_time);
                if (trip != null) {
                    return trip;
                }
            }
            if (debug_level && debug_level >= 1) {
                console.assert(false, "Couldn't find time for stop name: " + stop_name + " at " + stop_time + " (" + (IDX_ROUND_FUN(gtfs_util_1.gtfs_time12_no_seconds_to_seconds(stop_time) / IDX_ROUND_NUM) * IDX_ROUND_NUM) + ")");
            }
        };
        // stop_time is in format: 1:14 PM/
        TripStopIndex.prototype.findTripForStopCodeAndTime = function (stop_code, stop_time, schedule) {
            var sched = schedule || this.route.getScheduleKey();
            var indexForSched = this.index_by_stop_code[sched];
            var stop = indexForSched[stop_code];
            if (!stop) {
                return;
            }
            ;
            var timeKey = gtfs_util_1.gtfs_time12_no_seconds_to_seconds(stop_time);
            var trips = stop[timeKey];
            return (trips) ? trips[0] : null;
        };
        return TripStopIndex;
    }());
    var RouteData = /** @class */ (function () {
        function RouteData(data) {
            this.data = data;
            this.tripStopIndex = null;
            this.stopNameIndex = null;
        }
        RouteData.from = function (data) {
            var _this = this;
            var rtdata = new RouteData(data);
            if (debug_stats) {
                console.time("Processing route data");
            }
            var stopsArry = data.stops;
            data.stops = util_1.BuildIndex(data.stops, function (stop) { return stop.stop_id; });
            data.relatedRoutes = util_1.BuildIndex(data.relatedRoutes.map(function (route_id) { return data.relatedRouteData[route_id]; }), function (route) { return route.routeID; });
            data.transferRoutes = util_1.BuildIndex(data.transferRoutes.map(function (route_id) { return data.relatedRouteData[route_id]; }), function (route) { return route.routeID; });
            var anyShapeKey = null;
            for (anyShapeKey in data.tripData.shapes) { }
            var anyPointOnAnyShape = data.tripData.shapes[anyShapeKey].points[0];
            var zone = geoUTM.longLatToZone(anyPointOnAnyShape);
            var geoUTMProj = geoUTM.geoUTM(zone, geoUTM.datums.WGS84);
            var isSouthern = anyPointOnAnyShape[1] < 0;
            var geoUTMProjInv = geoUTM.geoUTM_inverse(zone, geoUTM.datums.WGS84, isSouthern);
            function stopGeoJSON() {
                return { type: "Point", coordinates: this.coordinates };
            }
            function stopGeoUTM() {
                if (!this.geoUTMcooridnates) {
                    this.geoUTMcooridnates = geoUTMProj(this.coordinates);
                }
                return this.geoUTMcooridnates;
            }
            function shapeGeoUTM() {
                if (!this.geoUTMData) {
                    this.geoUTMProj = geoUTMProj;
                    this.geoUTMData = this.points.map(this.geoUTMProj);
                }
                return this.geoUTMData;
            }
            function locatePointAlongShape(longlat) {
                if (!this.geoUTM) {
                    return null;
                }
                var geoUTMdata = this.geoUTM();
                var point = this.geoUTMProj(longlat);
                var closestPoint = geoUTMdata.reduce(function (accum, cv, idx, arry) {
                    var dist = Math.sqrt(Math.pow((point[0] - cv[0]), 2) + Math.pow((point[1] - cv[1]), 2));
                    if (idx >= 0 && dist <= accum.dist) {
                        accum.idx = idx;
                        accum.dist = dist;
                    }
                    return accum;
                }, { idx: 1, dist: Number.POSITIVE_INFINITY });
                if (closestPoint.idx >= geoUTMdata.length) {
                    return {
                        t: geoUTMdata.length - 1,
                        i: geoUTMdata[geoUTMdata.length - 1],
                        d: Number.POSITIVE_INFINITY
                    };
                }
                if (closestPoint.idx === 0) {
                    return {
                        t: 0,
                        i: geoUTMdata[0],
                        d: 0
                    };
                }
                var a = geoUTMdata[closestPoint.idx - 1], b = geoUTMdata[closestPoint.idx];
                var pointMatch = util_1.PointAlongLine(a, b, point);
                pointMatch.t += (closestPoint.idx - 1);
                return pointMatch;
            }
            function locateDistanceAlongShape(longlat) {
                if (!this.localizePoint) {
                    return null;
                }
                var pointAlongRoute = this.localizePoint(longlat);
                var t = pointAlongRoute.t;
                var idxA = Math.floor(t);
                var idxB = Math.ceil(t);
                var frac = t - idxA;
                if (this.dist_traveled.length <= idxB) {
                    [-1, pointAlongRoute];
                }
                var a = this.dist_traveled[idxA], b = this.dist_traveled[idxB];
                var dist = a + (b - a) * frac;
                return [dist, pointAlongRoute];
            }
            function locatePointAlongTrip(longlat) {
                var point = geoUTMProj(longlat);
                return this.stops.reduce(function (accum, cv, idx, arry) {
                    if (idx === 0) {
                        return { t: 0, i: [0, 0], d: Number.POSITIVE_INFINITY };
                    }
                    var a = arry[idx - 1].geoUTM(), b = arry[idx].geoUTM();
                    var pointMatch = util_1.PointAlongLine(a, b, point);
                    pointMatch.t += (idx - 1);
                    return (Math.abs(pointMatch.d) < Math.abs(accum.d)) ? pointMatch : accum;
                }, null);
            }
            function relatedStopCentroid() {
                var stopCoordinates = [];
                for (var stopID in this.relatedStops) {
                    stopCoordinates.push(this.relatedStops[stopID].coordinates);
                }
                return { type: "Point", coordinates: d3.geoCentroid({ type: "MultiPoint", coordinates: stopCoordinates }) };
            }
            stopsArry.forEach(function (stop) {
                // Add extension functions to the stop
                stop.geoJSON = stopGeoJSON;
                stop.geoUTM = stopGeoUTM;
                stop.relatedStopCentroid = relatedStopCentroid;
                stop.relatedStops = util_1.BuildIndex(stop.relatedStops.map(function (stop_id) { return data.stops[stop_id]; }), function (stop) { return stop.stop_id; });
                var thisRouteRelatedRouteData = {
                    longName: data.longName,
                    routeColor: data.routeColor,
                    routeID: data.routeID,
                    routeTextColor: data.routeTextColor,
                    shortName: data.shortName
                };
                stop.relatedRoutesArray = stop.relatedRoutes
                    .map(function (route_id) { return (route_id === data.routeID) ? thisRouteRelatedRouteData : data.relatedRouteData[route_id] || _this; });
                stop.transferRoutesArray = stop.transferRoutes.filter(function (route_id) { return route_id !== data.routeID; })
                    .map(function (route_id) { return (route_id === data.routeID) ? thisRouteRelatedRouteData : data.relatedRouteData[route_id] || _this; });
                stop.transferRoutesArray.push(thisRouteRelatedRouteData);
                stop.relatedRoutes = util_1.BuildIndex(stop.relatedRoutesArray, function (route) { return route.routeID; });
                stop.transferRoutes = util_1.BuildIndex(stop.transferRoutesArray, function (route) { return route.routeID; });
            });
            function shapeToGeoJSON(shape) {
                return { type: "LineString", coordinates: this.points };
            }
            function getTripTitle(trip) {
                return function () {
                    var directionName = (trip.direction_id === 0) ? 'outbound' : 'inbound';
                    var bearing = trip.route.data.bearing[directionName];
                    var dirName = geo_util_1.bearingToDirection(bearing);
                    var routeName = trip.route.data.shortName;
                    return routeName + " - " + dirName;
                };
            }
            function getTripDirection(trip) {
                return function () {
                    // let directionName = (trip.direction_id === 0) ? 'outbound' : 'inbound';
                    // var bearing = trip.route.data.bearing[directionName];
                    var ptA = trip.stops[0].geoUTM();
                    var ptB = trip.stops[trip.stops.length - 1].geoUTM();
                    var bearing = geoUtil.bearingAtoB(ptA, ptB);
                    return geo_util_1.bearingToDirectionShort(bearing);
                };
            }
            var processTrip = function (trip) {
                trip.route = rtdata;
                trip.stops = data.tripData.stopLists[trip.stopsKey];
                trip.tripTitle = getTripTitle(trip);
                trip.tripDirection = getTripDirection(trip);
                delete (trip.stopsKey);
                trip.stops = trip.stops.map(function (stop_id) {
                    return data.stops[stop_id];
                });
                trip.localizePoint = locatePointAlongTrip;
                /// process arrival times
                trip.arrivalTimes = data.tripData.arrivalTimes[trip.arrivalsKey];
                delete (trip.arrivalsKey);
                /// process distance traveled
                trip.distTraveled = data.tripData.distTraveled[trip.distTraveledKey];
                delete (trip.distTraveledKey);
                /// process dewll times
                trip.dwellTimes = data.tripData.dwellTimes[trip.dwellsKey];
                delete (trip.dwellsKey);
                /// process shape
                trip.shape = data.tripData.shapes[trip.shape_id];
                delete (trip.shape_id);
                trip.shape.geoJSON = shapeToGeoJSON;
                trip.shape.geoUTM = shapeGeoUTM;
                trip.shape.geoUTMProj = geoUTMProj;
                trip.shape.geoUTMProjInv = geoUTMProjInv;
                trip.shape.localizePoint = locatePointAlongShape;
                trip.shape.localizeDistance = locateDistanceAlongShape;
            };
            // process trips
            for (var schedKey in data.trips) {
                if (schedKey === 'special') {
                    var specials = data.trips[schedKey];
                    for (var specialDayKey in specials) {
                        specials[specialDayKey].forEach(processTrip);
                    }
                }
                else {
                    data.trips[schedKey].forEach(processTrip);
                }
            }
            if (data['stopLabels']) {
                data['stopLabels'].forEach(function (lbl) { lbl['stop_ids'] = lbl['stop_ids'].map(function (id) { return id.toString(); }); });
            }
            if (debug_stats) {
                console.timeEnd("Processing route data");
            }
            return rtdata;
        };
        // WARNING: This is an UNSAFE function
        // TODO: Fix this to coorect for TIMEZONE offset of browser
        RouteData.prototype.getScheduleKey = function (date) {
            var now = date || new Date();
            var scheduleKeyDay = gtfs_util_1.getScheduleKey(now);
            var dateKey = util_1.formatDate_YYYYmmdd(now);
            return (this.data.trips.hasOwnProperty(dateKey)) ? dateKey : scheduleKeyDay;
        };
        RouteData.prototype.findStopByName = function (stopName) {
            if (!this.stopNameIndex) {
                var stopNameIndex = {};
                var stops = this.data.stops;
                for (var stopID in stops) {
                    var stop_2 = stops[stopID];
                    stopNameIndex[stop_2.stop_name] = stop_2;
                }
                this.stopNameIndex = stopNameIndex;
            }
            return this.stopNameIndex[stopName];
        };
        Object.defineProperty(RouteData.prototype, "routeID", {
            get: function () {
                return this.data.routeID;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(RouteData.prototype, "shortName", {
            get: function () {
                return this.data.shortName;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(RouteData.prototype, "longName", {
            get: function () {
                return this.data.longName;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(RouteData.prototype, "routeColor", {
            get: function () {
                return this.data.routeColor;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(RouteData.prototype, "routeTextColor", {
            get: function () {
                return this.data.routeTextColor;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(RouteData.prototype, "relatedRoutes", {
            get: function () {
                return this.data.relatedRoutes;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(RouteData.prototype, "transferRoutes", {
            get: function () {
                return this.data.transferRoutes;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(RouteData.prototype, "siblingRoutes", {
            get: function () {
                var routes = new Set(util_1.Unindex(this.relatedRoutes));
                var tr = this.transferRoutes;
                for (var key in tr) {
                    routes.add(tr[key]);
                }
                return Array.from(routes.values());
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(RouteData.prototype, "siblingRouteNames", {
            get: function () {
                var names = new Set([this.data.shortName]);
                var key;
                for (key in this.data.relatedRoutes) {
                    names.add(this.data.relatedRoutes[key].shortName);
                }
                for (key in this.data.transferRoutes) {
                    names.add(this.data.transferRoutes[key].shortName);
                }
                return Array.from(names.values());
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(RouteData.prototype, "relatedRouteNames", {
            get: function () {
                var names = [this.data.shortName];
                var key;
                for (key in this.data.relatedRoutes) {
                    names.push(this.data.relatedRoutes[key].shortName);
                }
                return names;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(RouteData.prototype, "transferRouteNames", {
            get: function () {
                var names = [this.data.shortName];
                var key;
                for (key in this.data.transferRoutes) {
                    names.push(this.data.transferRoutes[key].shortName);
                }
                return names;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(RouteData.prototype, "stopLabels", {
            get: function () {
                var _this = this;
                if (!this.data.stopLabels.length) {
                    // must generate stop labels from stopID lists
                    var lblgen_1 = function (idx, letters) {
                        if (letters === void 0) { letters = []; }
                        var numCode = idx % 26;
                        var letter = String.fromCharCode(65 + numCode);
                        var newIdx = Math.floor(idx / 26);
                        letters.push(letter);
                        if (newIdx > 0) {
                            return lblgen_1(newIdx - 1, letters);
                        }
                        return letters.reverse().join("");
                    };
                    var undef_1;
                    var stopList = this.data.stopIDLists['outbound'];
                    var stops_1 = stopList.map(function (stop_id) { return _this.data.stops[stop_id]; })
                        .filter(function (stop, idx, stops) {
                        return (idx === 0)
                            || (idx === (stops.length - 1))
                            || (((stops[idx - 1].relatedStops)[stop.stop_id] === undef_1) && (Object.keys(stop.relatedRoutes).length > 1))
                            || ((stops[idx - 1].relatedStops)[stop.stop_id] === undef_1);
                    });
                    var remInc_1 = 10;
                    while (stops_1.length > 13) {
                        var overCount = stops_1.length - 12;
                        var divisor = overCount + 1;
                        remInc_1 = Math.round(stops_1.length / divisor);
                        if (remInc_1 === 1) {
                            remInc_1++;
                        }
                        stops_1 = stops_1.filter(function (stop, idx) { return (idx === 0) || (idx === (stops_1.length - 1)) || ((idx + 1) % remInc_1); });
                    }
                    stops_1 = stops_1
                        .map(function (stop, idx, stops) { return (idx === 0) || (idx === stops.length - 1) || (Object.keys(stop.relatedRoutes).length > 1) ?
                        stop
                        : stops.slice(idx, Math.min(idx + remInc_1, stops.length - 1)).find(function (s) { return Object.keys(s.relatedRoutes).length > 1; }) || stop; })
                        .filter(function (stop, idx, stops) {
                        return (idx === 0)
                            || (idx === (stops.length - 1))
                            || ((stops[idx - 1].relatedStops)[stop.stop_id] === undef_1);
                    });
                    var longestTrip_1 = this.getLongestTrip("weekday", 0);
                    stops_1 = stops_1.filter(function (s) { return longestTrip_1.stops.findIndex(function (ss) { return ss.stop_id === s.stop_id; }) >= 0; });
                    var stopDescriptions_1 = stops_1.map(function (stop) { return stop['stop_name']; });
                    var relatedStopIDs_1 = stops_1.map(function (stop) { return Object.keys(stop['relatedStops']); });
                    var stopLabels_1 = stops_1.map(function (_, idx) { return lblgen_1(idx); });
                    var stopTimesForOrdering_1 = stops_1
                        .map(function (s, idx) { return longestTrip_1.stops.find(function (ss) { return ss.stop_id === s.stop_id; }) || null; })
                        .map(function (s, idx) { return (s) ? longestTrip_1.arrivalTimes[idx] : null; });
                    this.data.stopLabels = stops_1.map(function (s, idx) { return ({
                        description: stopDescriptions_1[idx],
                        label: stopLabels_1[idx],
                        stop_ids: relatedStopIDs_1[idx],
                        stop_order: stopTimesForOrdering_1[idx]
                    }); }).sort(function (a, b) { return a.stop_order - b.stop_order; })
                        .filter(function (s) { return s && s.stop_order !== null; });
                    ;
                }
                return this.data.stopLabels;
            },
            enumerable: true,
            configurable: true
        });
        RouteData.prototype.getLongestTrip = function (schedule, directionID) {
            var trips = this.getTrips(schedule, directionID);
            var longestTripIdx = trips.reduce(function (R, trip, idx) {
                var tripLen = trip.distTraveled[trip.distTraveled.length - 1];
                if (tripLen >= R.max) {
                    R.max = tripLen;
                    R.maxIdx = idx;
                }
                return R;
            }, { maxIdx: -1, max: 0 });
            var longestTrip = trips[longestTripIdx.maxIdx];
            return longestTrip;
        };
        ;
        RouteData.prototype.getScheduleTitle = function (schedule, directionID) {
            var directionName = (directionID === 0) ? 'outbound' : 'inbound';
            var bearing = this.data.bearing[directionName];
            var dirName = geo_util_1.bearingToDirection(bearing);
            var routeName = this.data.shortName;
            var scheduleName = util_1.capitalizeFirstLetter(schedule);
            return "Route " + routeName + " - " + scheduleName + " " + dirName;
        };
        ;
        // return raw trip data from the internal 'data' data structure
        RouteData.prototype.getTrips = function (schedule, direction) {
            var undefined;
            var rawTrips = [];
            function accumulateTrips(trips) {
                if (trips) {
                    Array.prototype.push.apply(rawTrips, trips);
                }
            }
            if (schedule) {
                switch (schedule) {
                    case 'weekday':
                    case 'saturday':
                    case 'sunday':
                        accumulateTrips(this.data.trips[schedule]);
                        break;
                    default:
                        accumulateTrips(this.data.trips.special[schedule]);
                }
            }
            else {
                for (var schedKey in this.data.trips) {
                    switch (schedKey) {
                        case 'special':
                            for (var specialKey in this.data.trips.special) {
                                accumulateTrips(this.data.trips.special[specialKey]);
                            }
                            break;
                        case 'weekday':
                        case 'saturday':
                        case 'sunday':
                            accumulateTrips(this.data.trips[schedKey]);
                            break;
                    }
                    rawTrips.concat(this.data.trips[schedKey]);
                }
            }
            var sorter = function (a, b) { return a.startTime - b.startTime; };
            return (direction === 0 || direction === 1) ?
                rawTrips.sort(sorter).filter(function (trip) { return trip.direction_id === direction; })
                : rawTrips.sort(sorter);
        };
        RouteData.prototype.getTripSummary = function (schedule, direction) {
            var now_seconds = gtfs_util_1.date_to_seconds(new Date());
            var trips = this.getTrips(schedule, direction);
            var labels = (direction === 0) ? this.stopLabels : this.stopLabels.slice().reverse();
            var freqRoundMinutes = 5;
            var approxFrequencyMinutes = (trips.length > 6) ?
                Math.round(((trips[trips.length - 1].startTime - trips[0].startTime) / trips.length) / 60 / freqRoundMinutes) * freqRoundMinutes
                : 0;
            var data = [];
            var emptySlot = "---";
            data.push(labels.map(function (lbl) {
                return { text: lbl.description };
            }));
            data.push(labels.map(function (lbl) {
                return { text: lbl.label };
            }));
            trips.forEach(function (trip) {
                data.push(labels.map(function (lbl) {
                    var stop = findStopInTrip(trip, lbl.stop_ids);
                    var stopIdx = (stop !== null) ? trip.stops.indexOf(stop) : -1;
                    var stopTime = trip.startTime + trip.arrivalTimes[stopIdx] + trip.dwellTimes[stopIdx];
                    var cellContent = (stopIdx >= 0) ? {
                        text: gtfs_util_1.gtfs_seconds_to_timeAMPM(stopTime),
                        classes: {
                            'time-none': false,
                            'time-expired': now_seconds > stopTime,
                            'trip-id': trip.trip_id
                        }
                    } : {
                        text: emptySlot, classes: {
                            'time-none': true,
                            'time-expired': false
                        }
                    };
                    ;
                    return cellContent;
                }));
            });
            var colHasData = new Array(data[0].length).map(function (d) { return 0; }); // compatibility with ES5; Array..fill() is only available in ES6.
            for (var rdx = 2; rdx < data.length; rdx++) {
                var dataRow = data[rdx];
                for (var cdx = 0; cdx < dataRow.length; cdx++) {
                    var cell = dataRow[cdx];
                    colHasData[cdx] += (cell.text !== emptySlot) ? 1 : 0;
                }
            }
            var emptyCols = colHasData.map(function (cv, idx) {
                return (cv === 0) ? idx : -1;
            }).filter(function (v) {
                return v >= 0;
            }).reverse();
            data[0].forEach(function (cell, idx) {
                if (emptyCols.indexOf(idx) >= 0) {
                    cell.class = 'time-none';
                }
            });
            data[1].forEach(function (cell, idx) {
                if (emptyCols.indexOf(idx) >= 0) {
                    cell.class = 'time-none';
                }
            });
            var directionName = (direction === 0) ? 'outbound' : 'inbound';
            var title = this.getScheduleTitle(schedule, direction);
            return {
                title: title,
                bearing: this.data.bearing[directionName],
                approxFrequencyMinutes: approxFrequencyMinutes,
                data: data
            };
        };
        RouteData.prototype.getFirstAndLastStops = function (schedule, direction) {
            var trip = this.getTrips(schedule, direction)[0];
            var firstStopName = trip.stops[0].stop_name;
            var lastStopName = trip.stops[trip.stops.length - 1].stop_name;
            return { firstStopName: firstStopName, lastStopName: lastStopName };
        };
        RouteData.prototype.getFirstAndLastTripTimes = function (schedule, direction) {
            var tripSummary = this.getTripSummary(schedule, direction);
            var tripCountOutbound = this.getTrips(schedule, 0).length;
            var tripCountInbound = this.getTrips(schedule, 1).length;
            var firstTime = (tripSummary.data.length > 2) ? tripSummary.data[2].find(function (s) { return s.text !== '---'; }).text : "";
            var lastTime = (tripSummary.data.length > 2) ? tripSummary.data[tripSummary.data.length - 1].find(function (s) { return s.text !== '---'; }).text : "";
            var retVal = { first: firstTime, last: lastTime, freqMinutes: tripSummary.approxFrequencyMinutes, numTrips: { outbound: tripCountOutbound, inbound: tripCountInbound } };
            return retVal;
        };
        RouteData.prototype.getTripStopIndex = function () {
            if (!this.tripStopIndex) {
                this.tripStopIndex = new TripStopIndex(this);
            }
            return this.tripStopIndex;
        };
        RouteData.prototype.getRepresentativeShape = function (schedule, direction) {
            var trips = this.getTrips(schedule, direction);
            var shapes = new Set([]);
            trips.forEach(function (trip) {
                shapes.add(trip.shape);
            });
            return geo_util_1.mergeLineStrings(Array.from(shapes.values()).map(function (shape) {
                return shape.geoJSON();
            }));
        };
        ;
        RouteData.prototype.getGeoCenter = function (schedule, direction) {
            var shape = this.getRepresentativeShape(schedule, direction);
            var lineString = { type: "MultiLineString", coordinates: shape.coordinates };
            var centroid = d3.geoCentroid(lineString);
            return centroid;
        };
        RouteData.prototype.getUnlabeledStopsAlongRoute = function () {
            var _this = this;
            var allStopsOnRoute = (this.data.stopIDLists['outbound'].concat(this.data.stopIDLists['inbound']))
                .map(function (stop_id) { return _this.data.stops[stop_id]; });
            allStopsOnRoute = allStopsOnRoute.filter(function (stop) {
                var stopID = stop.stop_id;
                return !(_this.stopLabels.some(function (lbl) { return lbl.stop_ids.indexOf(stopID) >= 0; }));
            });
            var subset = [];
            allStopsOnRoute.forEach(function (stop) {
                if (!subset.some(function (subsetStop) { return subsetStop.relatedStops[stop.stop_id]; })) {
                    subset.push(stop);
                }
            });
            return subset;
        };
        ;
        RouteData.prototype.getLabeledStopGeographies = function () {
            var _this = this;
            return this.stopLabels.map(function (lbl) { return ({
                label: lbl.label,
                coordinates: d3.geoCentroid(geo_util_1.mergePoints(
                // lbl.stop_ids.map(stop_id => ({type: "Point", coordinates:this.data.stops[stop_id].coordinates}))
                lbl.stop_ids.map(function (stop_id) { return ({ type: "Point", coordinates: (_this.data.stops[stop_id]) ? _this.data.stops[stop_id].coordinates : null }); })
                    .filter(function (obj) { return (obj.coordinates) && !isNaN(obj.coordinates[0]); })))
            }); }).filter(function (obj) { return !isNaN(obj.coordinates[0]); });
        };
        ;
        return RouteData;
    }());
    exports.RouteData = RouteData;
    function findStopInTrip(trip, stop_ids) {
        var stopOut = null;
        trip.stops.some(function (stop) {
            var idx = stop_ids.indexOf(stop.stop_id);
            if (idx >= 0) {
                stopOut = stop;
                return true;
            }
            return false;
        });
        return stopOut;
    }
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(4), __webpack_require__(3), __webpack_require__(1)], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, RouteData_1, Promise, d3) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var RouteDataService = /** @class */ (function () {
        function RouteDataService(agency) {
            this.agency = agency;
            this.dataCache = {};
        }
        RouteDataService.getInstance = function (agency) {
            if (!RouteDataService.INSTANCE_CACHE[agency]) {
                RouteDataService.INSTANCE_CACHE[agency] = new RouteDataService(agency);
            }
            return RouteDataService.INSTANCE_CACHE[agency];
        };
        RouteDataService.prototype.getRoute = function (routeID, findChildren) {
            var _this = this;
            if (findChildren === void 0) { findChildren = true; }
            if (!this.dataCache.hasOwnProperty(routeID) || (findChildren && !(this.dataCache[routeID].siblingRoutes[0] instanceof RouteData_1.RouteData))) {
                var url_1 = "../client/assets/transit-data/" + this.agency + "/routes/" + routeID + ".json";
                return new Promise(function (resolve, reject) {
                    d3.json(url_1, function (error, data) {
                        if (error) {
                            reject(error);
                        }
                        else {
                            var rtData_1 = RouteData_1.RouteData.from(data);
                            _this.dataCache[routeID] = rtData_1;
                            var relatedRouteData_1 = [];
                            if (findChildren) {
                                for (var key in rtData_1.relatedRoutes) {
                                    if (rtData_1 && rtData_1.relatedRoutes && rtData_1.relatedRoutes[key] && rtData_1.relatedRoutes[key].shortName) {
                                        (function (key) {
                                            relatedRouteData_1.push(_this.getRoute(rtData_1.relatedRoutes[key].shortName, false)
                                                .then(function (rtDataSub) {
                                                rtData_1.relatedRoutes[key] = rtDataSub;
                                                return rtDataSub;
                                            }));
                                        })(key);
                                    }
                                }
                                for (var key in rtData_1.transferRoutes) {
                                    if (rtData_1 && rtData_1.transferRoutes && rtData_1.transferRoutes[key] && rtData_1.transferRoutes[key].shortName) {
                                        (function (key) {
                                            relatedRouteData_1.push(_this.getRoute(rtData_1.transferRoutes[key].shortName, false)
                                                .then(function (rtDataSub) {
                                                rtData_1.transferRoutes[key] = rtDataSub;
                                                return rtDataSub;
                                            }));
                                        })(key);
                                    }
                                }
                            }
                            Promise.all(relatedRouteData_1).then(function (d) { return resolve(rtData_1); });
                            //resolve(rtData);
                        }
                    });
                });
            }
            return Promise.resolve(this.dataCache[routeID]);
        };
        RouteDataService.INSTANCE_CACHE = {};
        return RouteDataService;
    }());
    exports.RouteDataService = RouteDataService;
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(3), __webpack_require__(1)], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, Promise, d3) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    // The RouteIndexService loads the routes/index.json file and builds and in-memory
    // index of routes and stops.
    //
    // Call RouteIndexService.getInstance() to obtain a reference to the indexing service.
    // 
    var RouteIndexService = /** @class */ (function () {
        function RouteIndexService() {
        }
        // Return the RouteIndexService singleton instance
        RouteIndexService.getInstance = function () {
            if (!RouteIndexService.INSTANCE) {
                RouteIndexService.INSTANCE = new RouteIndexService();
            }
            RouteIndexService.CACHE = {};
            return RouteIndexService.INSTANCE;
        };
        // Return the index for the specified agency (i.e., 'abq')
        RouteIndexService.prototype.getIndex = function (agency) {
            if (!RouteIndexService.CACHE[agency]) {
                var url_1 = "../client/assets/transit-data/" + agency + "/routes/index.json";
                return new Promise(function (resolve, reject) {
                    d3.json(url_1, function (error, data) {
                        if (error) {
                            reject(error);
                        }
                        else {
                            RouteIndexService.CACHE[agency] = data;
                            resolve(data);
                        }
                    });
                });
            }
            return Promise.resolve(RouteIndexService.CACHE[agency]);
        };
        return RouteIndexService;
    }());
    exports.RouteIndexService = RouteIndexService;
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/// GEO Functions
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.directions = { "-1": "", 0: "Northbound", 1: "North / Westbound", 2: "Eastbound", 3: "South / Eastbound", 4: "Southbound", 5: "South / Westbound", 6: "Westbound", 7: "North / Westbound" };
    exports.directionsShort = { "-1": "", 0: "North", 1: "Northwest", 2: "East", 3: "Southeast", 4: "South", 5: "Southwest", 6: "West", 7: "Northwest" };
    function bearingToDirection(bearing) {
        var compass = (bearing >= 0) ? (Math.round(bearing / 45) + 8) % 8 : bearing;
        return exports.directions[compass] || "";
    }
    exports.bearingToDirection = bearingToDirection;
    function bearingToDirectionShort(bearing) {
        var compass = (bearing >= 0) ? (Math.round(bearing / 45) + 8) % 8 : bearing;
        return exports.directionsShort[compass] || "";
    }
    exports.bearingToDirectionShort = bearingToDirectionShort;
    function mergeLineStrings(lineStrings) {
        var lstrs = lineStrings.filter(function (lstr) {
            return (lstr.type === "LineString") && (lstr.coordinates !== undefined);
        });
        return {
            type: "MultiLineString", coordinates: lstrs.map(function (lstr) {
                return lstr.coordinates;
            })
        };
    }
    exports.mergeLineStrings = mergeLineStrings;
    function mergePoints(points) {
        var pts = points.filter(function (pt) {
            return (pt.type === "Point" && (pt.coordinates !== undefined));
        });
        return {
            type: "MultiPoint", coordinates: pts.map(function (pt) {
                return pt.coordinates;
            })
        };
    }
    exports.mergePoints = mergePoints;
    function bearingAtoB(a, b) {
        var bearing = (Math.atan2((b[1] - a[1]), -(b[0] - a[0])) * 57.29577951308232); //rad --> deg
        bearing = (bearing < 0) ? 360 + bearing : bearing;
        bearing = (((bearing - 90) % 360) + 360) % 360;
        return bearing;
    }
    exports.bearingAtoB = bearingAtoB;
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(0), __webpack_require__(2), __webpack_require__(3), __webpack_require__(1)], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, util_1, gtfs_util_1, Promise, d3) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var RouteLiveDataService = /** @class */ (function () {
        function RouteLiveDataService() {
        }
        Object.defineProperty(RouteLiveDataService.prototype, "error", {
            get: function () {
                return this._error;
            },
            enumerable: true,
            configurable: true
        });
        RouteLiveDataService.prototype.setError = function (err) {
            this._error = err;
        };
        RouteLiveDataService.prototype.clearError = function () {
            this._error = null;
        };
        RouteLiveDataService.prototype.addListener = function (cb) {
            if (!this.listeners) {
                this.listeners = [];
            }
            if (this.listeners.findIndex(function (elem) { return elem === cb; }) < 0) {
                this.listeners.push(cb);
            }
        };
        RouteLiveDataService.prototype.removeListener = function (cb) {
            if (this.listeners) {
                this.listeners = this.listeners.filter(function (elem) { return elem !== cb; });
            }
        };
        RouteLiveDataService.prototype.notifyListeners = function (routeData) {
            if (this.listeners) {
                var data_1 = routeData || this.getData();
                var status_1 = this.getStatus();
                try {
                    this.listeners.forEach(function (cb) { return cb(data_1, status_1); });
                }
                catch (e) {
                    console.error(e);
                }
                ;
            }
        };
        return RouteLiveDataService;
    }());
    exports.RouteLiveDataService = RouteLiveDataService;
    /// Constants for ABQ live data feed source
    var ABQ_FEED_BASE_URL = "http://data.cabq.gov/transit/realtime/";
    var ABQ_ALL_ROUTES_URL = ABQ_FEED_BASE_URL + "route/allroutes.kml";
    var ABQ_GEN_ROUTE_FEED_URL = function (route_id) { return ABQ_FEED_BASE_URL + "route/route" + route_id + ".kml"; };
    /// OpenGIS XML Namespace Resolver
    var _NS_ = {
        x: 'http://www.opengis.net/kml/2.2',
        h: 'http://www.w3.org/1999/xhtml'
    };
    var openGISNSResovler = { lookupNamespaceURI: function (_) { return _NS_[_] || null; } };
    function getXPathResults(aResult) {
        var found = [];
        var res;
        while (res = aResult.iterateNext())
            found.push(res);
        return found;
    }
    function parsePlacemark(document, node) {
        var findElement = function (xPath, n) { return document.evaluate(xPath, n || node, openGISNSResovler, 0, null); };
        ;
        var name = findElement('x:name').iterateNext().innerHTML;
        var descriptionRows = findElement('x:description/x:table/x:tr');
        var description = {};
        getXPathResults(descriptionRows).forEach(function (row) {
            var cols = getXPathResults(findElement('x:td', row));
            var key = (cols[0] && cols[0].innerHTML) ? cols[0].innerHTML.trim() : '';
            var value = (cols[1] && cols[1].innerHTML) ? cols[1].innerHTML.trim() : '';
            description[key] = value;
        });
        var headingResult = findElement('x:Style/x:IconStyle/x:heading').iterateNext();
        var iconResult = findElement('x:Style/x:IconStyle/x:Icon/x:href').iterateNext();
        var coordinatesResult = findElement('x:Point/x:coordinates').iterateNext();
        description['name'] = name;
        description['heading'] = headingResult ? headingResult.innerHTML : '';
        description['icon'] = iconResult ? iconResult.innerHTML : '';
        description['coordinates'] = (coordinatesResult) ? coordinatesResult.innerHTML : '';
        return description;
    }
    ;
    // Live data nextStop: "Central @ Yale (UNM) @ 1:14 PM"
    var ABQ_NEXT_STOP_RE = /([\s\w\(\)\@\&\.\-\/']+)(?: \@ )(\d\d?\:\d\d [aApP][mM])/;
    var ABQ_STRING_REPLACEMENTS = [{ from: 'Monta�o', to: 'Montano' }];
    function parseNextStop(next_stop) {
        if (!next_stop) {
            return { stop_name: "", stop_time: "" };
        }
        ABQ_STRING_REPLACEMENTS.forEach(function (replacement) { return next_stop = next_stop.replace(replacement.from, replacement.to); });
        var match = ABQ_NEXT_STOP_RE.exec(next_stop);
        if (!match) {
            console.assert(!!match, "Unable to parse 'Next Stop' string from live data: " + next_stop);
            return { stop_name: "", stop_time: "" };
        }
        return {
            stop_name: match[1].trim(),
            stop_time: match[2].trim()
        };
    }
    function normalizeResults(values) {
        var routeData = {};
        values.forEach(function (vg) {
            if (vg.forEach) {
                vg.forEach(function (vv) {
                    var route = vv.name;
                    var nextStopParsed = parseNextStop(vv['Next Stop']);
                    if (!routeData[route]) {
                        routeData[route] = { route: route, vehicles: [] };
                    }
                    var route_vehicles = routeData[route].vehicles;
                    var coords = vv['coordinates'].split(',').map(function (c) { return +c; });
                    var timestamp_seconds = gtfs_util_1.gtfs_time12_to_seconds(vv['Msg Time']);
                    var vehicle = {
                        description: {
                            id: vv['Vehicle #'],
                            label: vv['name'],
                            icon: vv['icon'],
                            route: route
                        },
                        nextStop: vv['Next Stop'],
                        nextStopName: nextStopParsed.stop_name,
                        nextStopTime: nextStopParsed.stop_time,
                        position: {
                            longitude: coords[0],
                            latitude: coords[1],
                            speed: vv['Speed'],
                            bearing: +vv['heading']
                        },
                        timestamp: vv['Msg Time'],
                        timestamp_seconds: timestamp_seconds,
                        route: route
                    };
                    route_vehicles.push(vehicle);
                });
            }
        });
        var unindexedRouteData = util_1.Unindex(routeData);
        return unindexedRouteData;
    }
    function parseOpenGISXML(document, lastModified) {
        var placemarks = [];
        var result = document.evaluate('//x:Document/x:Placemark', document, openGISNSResovler, 0, null);
        var res;
        while (res = result.iterateNext()) {
            var placemark = parsePlacemark(document, res);
            placemark.lastModified = lastModified;
            placemarks.push(placemark);
        }
        return placemarks;
    }
    function requestXML(url, onData, onErr) {
        return d3.request(url)
            .mimeType("application/xml")
            .on("load", onData)
            .on("error", function (err) { return onErr(new Error("GET: " + url + " (404)")); })
            .send('get');
    }
    function copyArrayUnique(arry) {
        return Array.from((new Set(arry)).values());
    }
    var ABQRouteLiveDataService = /** @class */ (function (_super) {
        __extends(ABQRouteLiveDataService, _super);
        function ABQRouteLiveDataService() {
            var _this = _super.call(this) || this;
            _this.pollRateMS = 7500 * 2; //ms
            _this.routes = [];
            _this.enabled = false;
            _this.data = null;
            _this.feedStatus = false;
            _this.requests = null;
            _this.setEnabled(_this.enabled);
            return _this;
        }
        ABQRouteLiveDataService.prototype.setRoutes = function (route_ids) {
            this.routes = copyArrayUnique(route_ids);
            this.data = [];
            this.notifyListeners();
            this.refreshData();
        };
        ABQRouteLiveDataService.prototype.getRoutes = function () {
            return this.routes.slice();
        };
        ABQRouteLiveDataService.prototype.getData = function () {
            return this.data;
        };
        ABQRouteLiveDataService.prototype.getStatus = function () {
            return this.feedStatus;
        };
        ABQRouteLiveDataService.prototype.refreshData = function () {
            var _this = this;
            if (this.timeoutID) {
                clearTimeout(this.timeoutID);
                this.timeoutID = 0;
            }
            if (this.enabled) {
                this.requests = ((this.routes.length <= 10) ?
                    Promise.all(this.routes.map(function (route_id) {
                        return new Promise(function (resolve, reject) {
                            requestXML(ABQ_GEN_ROUTE_FEED_URL(route_id), resolve, reject);
                        });
                    }))
                    :
                        Promise.all([
                            new Promise(function (resolve, reject) {
                                return requestXML(ABQ_ALL_ROUTES_URL, resolve, reject);
                            })
                        ])).then(function (values) {
                    _this.timeoutID = setTimeout(function () {
                        _this.refreshData();
                    }, _this.pollRateMS);
                    return values;
                })
                    .then(function (values) {
                    _this.feedStatus = true;
                    _this.clearError();
                    return values;
                })
                    .then(function (xhr) {
                    return xhr.map(function (xhr) {
                        if (xhr.responseXML) {
                            return parseOpenGISXML(xhr.responseXML, xhr.getResponseHeader('Last-Modified'));
                        }
                        // fallback XML parsing for compatiblity issue with some browsers, i.e. FireFox
                        var parser = new DOMParser();
                        var doc = parser.parseFromString(xhr.response, 'application/xml');
                        return (!!doc) ? parseOpenGISXML(doc, xhr.getResponseHeader('Last-Modified')) : null;
                    });
                })
                    .then(function (placemarks) { return placemarks.map(function (vv) { return (vv && vv.filter) ? vv.filter(function (v) { return _this.routes.indexOf(v.name) >= 0; }) : []; }); })
                    .then(normalizeResults)
                    .then(function (routeLiveData) {
                    routeLiveData.forEach(function (route) {
                        // let nowSeconds = getDaySeconds();  // this is UNSAFE because we don't know the brower's time zone offset
                        route.vehicles = route.vehicles.filter(function (v) {
                            return (v.nextStop);
                        } // ensure live data vehicle has a "nextStop"
                        // && ((nowSeconds - v.timestamp_seconds) <= 180) // ensure live data vehicle has been updated recently
                        );
                    });
                    return routeLiveData;
                })
                    .then(function (routeLiveData) { return _this.data = routeLiveData; })
                    .then(function (routeLiveData) { return _this.notifyListeners(routeLiveData); })
                    .catch(function (err) {
                    console.error(err.toString() + " -- Live Data Feed Disabled");
                    _this.setError(err);
                    _this.setEnabled(false);
                });
            }
            else {
                this.feedStatus = false;
                this.data = [];
                this.notifyListeners();
            }
        };
        ABQRouteLiveDataService.prototype.setEnabled = function (enabled) {
            // if (window && window.setTimeout) {
            //  window.setTimeout(30*60*1000, () => {
            //    this.setEnabled(false);
            //  }); 
            // }
            this.enabled = enabled;
            if (this.enabled) {
                this.refreshData();
            }
            else {
                this.feedStatus = false;
                this.data = [];
                clearTimeout(this.timeoutID);
                this.notifyListeners();
            }
        };
        ABQRouteLiveDataService.prototype.getEnabled = function () {
            return this.enabled;
        };
        Object.defineProperty(ABQRouteLiveDataService.prototype, "pollRate", {
            get: function () {
                return this.pollRateMS;
            },
            set: function (ms) {
                this.pollRateMS = ms;
            },
            enumerable: true,
            configurable: true
        });
        return ABQRouteLiveDataService;
    }(RouteLiveDataService));
    exports.ABQRouteLiveDataService = ABQRouteLiveDataService;
    var ScheduleRelationship;
    (function (ScheduleRelationship) {
        ScheduleRelationship[ScheduleRelationship["SCHEDULED"] = 0] = "SCHEDULED";
        ScheduleRelationship[ScheduleRelationship["ADDED"] = 1] = "ADDED";
        ScheduleRelationship[ScheduleRelationship["UNSCHEDULED"] = 2] = "UNSCHEDULED";
        ScheduleRelationship[ScheduleRelationship["CANCELED"] = 3] = "CANCELED";
    })(ScheduleRelationship = exports.ScheduleRelationship || (exports.ScheduleRelationship = {}));
    var CongestionLevel;
    (function (CongestionLevel) {
        CongestionLevel[CongestionLevel["UNKNOWN"] = 0] = "UNKNOWN";
        CongestionLevel[CongestionLevel["SMOOTH"] = 1] = "SMOOTH";
        CongestionLevel[CongestionLevel["STOP_AND_GO"] = 2] = "STOP_AND_GO";
        CongestionLevel[CongestionLevel["CONGESTION"] = 3] = "CONGESTION";
        CongestionLevel[CongestionLevel["SEVERE_CONGESTION"] = 4] = "SEVERE_CONGESTION";
    })(CongestionLevel = exports.CongestionLevel || (exports.CongestionLevel = {}));
    var OccupancyStatus;
    (function (OccupancyStatus) {
        OccupancyStatus[OccupancyStatus["EMPTY"] = 0] = "EMPTY";
        OccupancyStatus[OccupancyStatus["MANY_SEATS_AVAILABLE"] = 1] = "MANY_SEATS_AVAILABLE";
        OccupancyStatus[OccupancyStatus["FEW_SEATS_AVAILABLE"] = 2] = "FEW_SEATS_AVAILABLE";
        OccupancyStatus[OccupancyStatus["STANDING_ROOM_ONLY"] = 3] = "STANDING_ROOM_ONLY";
        OccupancyStatus[OccupancyStatus["CRUSHED_STANDING_ROOM"] = 4] = "CRUSHED_STANDING_ROOM";
        OccupancyStatus[OccupancyStatus["FULL"] = 5] = "FULL";
        OccupancyStatus[OccupancyStatus["NOT_ACCEPTING_PASSENGERS"] = 6] = "NOT_ACCEPTING_PASSENGERS";
    })(OccupancyStatus = exports.OccupancyStatus || (exports.OccupancyStatus = {}));
    var VechicleStopStatus;
    (function (VechicleStopStatus) {
        VechicleStopStatus[VechicleStopStatus["INCOMING_AT"] = 0] = "INCOMING_AT";
        VechicleStopStatus[VechicleStopStatus["STOPPED_AT"] = 1] = "STOPPED_AT";
        VechicleStopStatus[VechicleStopStatus["IN_TRANSIT_TO"] = 2] = "IN_TRANSIT_TO";
    })(VechicleStopStatus = exports.VechicleStopStatus || (exports.VechicleStopStatus = {}));
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*
 * Copyright (c) 2016 Nicholas Folse -- All Rights Reserved
 * Unauthorized distribution and/or use is prohibited
 *
 * Adapted from : http://www.rcn.montana.edu/resources/converter.aspx
 * Ref: http://www.uwgb.edu/dutchs/UsefulData/UTMFormulas.HTM
 *
 * A UTM -> Lat/Long (or vice versa) converter adapted from the script used at
 *     http://www.uwgb.edu/dutchs/UsefulData/ConvertUTMNoOZ.HTM
 */
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    /**
     * Get the UTM zone for a specified longitude and latitude
     * @param {[long, lat]} point
     * @returns {integer} UTM zone
     */
    function longLatToZone(point) {
        var lngd = point[0];
        var utmz = 1 + Math.floor((lngd + 180.0) / 6.0);
        return utmz;
    }
    exports.longLatToZone = longLatToZone;
    /**
     * Returns a projecting function for the specified UTM zone and datum, from
     * [longitude, latitude] to [easting, northing]
     * @param {integer} zone
     * @param {object} datum (default : WGS84) (see datums member)
     * @returns {function}
     */
    function geoUTM(zone, datum) {
        var utmz = zone;
        var d = datum || exports.datums['WGS84'];
        var zcm = 3 + 6 * (utmz - 1) - 180;
        // constants taken from or calculated from the datum
        var a = d.eqRad;
        var f = 1 / d.flat;
        var b = a * (1 - f); // polar radius
        var esq = (1 - (b / a) * (b / a));
        var e = Math.sqrt(esq);
        var e0 = e / Math.sqrt(1 - Math.pow(e, 1));
        var e0sq = (e * e) / (1 - Math.pow(e, 2));
        // constants used in calculations
        var k = 1;
        var k0 = 0.9996;
        var drad = Math.PI / 180.0;
        // return a fuction that computes the [easting, northing] based on the
        // specified zone and datum.
        return function (pt) {
            var lngd = pt[0];
            var lat = pt[1];
            var phi = lat * drad;
            var latz;
            var M;
            // convert latitude to latitude zone for nato
            if (lat > -80 && lat < 72) {
                latz = Math.floor((lat + 80) / 8) + 2; // zones C-W in this range
            }
            if (lat > 72 && lat < 84) {
                latz = 21; // zone X
            }
            else if (lat > 84) {
                latz = 23; // zone Y-Z
            }
            var N = a / Math.sqrt(1 - Math.pow(e * Math.sin(phi), 2));
            var T = Math.pow(Math.tan(phi), 2);
            var C = e0sq * Math.pow(Math.cos(phi), 2);
            var A = (lngd - zcm) * drad * Math.cos(phi);
            // calculate M (USGS style)
            M = phi * (1 - esq * (1 / 4 + esq * (3 / 64 + 5 * esq / 256)));
            M = M - Math.sin(2 * phi) * (esq * (3 / 8 + esq * (3 / 32 + 45 * esq / 1024)));
            M = M + Math.sin(4 * phi) * (esq * esq * (15 / 256 + esq * 45 / 1024));
            M = M - Math.sin(6 * phi) * (esq * esq * esq * (35 / 3072));
            M = M * a; //Arc length along standard meridian
            var M0 = 0; // if another point of origin is used than the equator
            // calculate the UTM values...
            // first the easting
            var x = k0 * N * A * (1 + A * A * ((1 - T + C) / 6 + A * A * (5 - 18 * T + T * T + 72 * C - 58 * e0sq) / 120)); //Easting relative to CM
            x += 500000; // standard easting
            // now the northing
            var y = k0 * (M - M0 + N * Math.tan(phi) * (A * A * (1 / 2 + A * A * ((5 - T + 9 * C + 4 * C * C) / 24 + A * A * (61 - 58 * T + T * T + 600 * C - 330 * e0sq) / 720)))); // first from the equator
            if (y < 0) {
                y = 10000000 + y; // add in false northing if south of the equator
            }
            return [x, y];
        };
    }
    exports.geoUTM = geoUTM;
    /**
     * Returns a projecting function for the specified UTM zone and datum,
     * from [easting, northing] to [longitude, latitude]
     * @param {integer} zone
     * @param {object} datum (default : WGS84) (see datums member)
     * @param {boolean} southern (default : false)
     * @returns {funciton}
     */
    function geoUTM_inverse(zone, datum, southern) {
        var utmz = zone;
        var d = datum || exports.datums['WGS84'];
        var south = southern || false;
        var zcm = 3 + 6 * (utmz - 1) - 180;
        // constants taken from or calculated from the datum
        var a = d.eqRad;
        var f = 1 / d.flat;
        var b = a * (1 - f); // polar radius
        var esq = (1 - (b / a) * (b / a));
        var e = Math.sqrt(esq);
        var e0 = e / Math.sqrt(1 - Math.pow(e, 1));
        var e0sq = (e * e) / (1 - Math.pow(e, 2));
        var e1 = (1 - Math.sqrt(1 - Math.pow(e, 2))) / (1 + Math.sqrt(1 - Math.pow(e, 2)));
        // constants used in calculations
        var k = 1;
        var k0 = 0.9996;
        var drad = Math.PI / 180.0;
        return function (pt) {
            var x = pt[0];
            var y = pt[1];
            var M0 = 0;
            var M;
            if (!south) {
                M = M0 + y / k0; // Arc length along standard meridian.
            }
            else {
                M = M0 + (y - 10000000) / k;
            }
            var mu = M / (a * (1 - esq * (1 / 4 + esq * (3 / 64 + 5 * esq / 256))));
            var phi1 = mu + e1 * (3 / 2 - 27 * e1 * e1 / 32) * Math.sin(2 * mu) + e1 * e1 * (21 / 16 - 55 * e1 * e1 / 32) * Math.sin(4 * mu); //Footprint Latitude
            phi1 = phi1 + e1 * e1 * e1 * (Math.sin(6 * mu) * 151 / 96 + e1 * Math.sin(8 * mu) * 1097 / 512);
            var C1 = e0sq * Math.pow(Math.cos(phi1), 2);
            var T1 = Math.pow(Math.tan(phi1), 2);
            var N1 = a / Math.sqrt(1 - Math.pow(e * Math.sin(phi1), 2));
            var R1 = N1 * (1 - Math.pow(e, 2)) / (1 - Math.pow(e * Math.sin(phi1), 2));
            var D = (x - 500000) / (N1 * k0);
            var phi = (D * D) * (1 / 2 - D * D * (5 + 3 * T1 + 10 * C1 - 4 * C1 * C1 - 9 * e0sq) / 24);
            phi = phi + Math.pow(D, 6) * (61 + 90 * T1 + 298 * C1 + 45 * T1 * T1 - 252 * e0sq - 3 * C1 * C1) / 720;
            phi = phi1 - (N1 * Math.tan(phi1) / R1) * phi;
            var lat = Math.floor(1000000 * phi / drad) / 1000000;
            var lng = D * (1 + D * D * ((-1 - 2 * T1 - C1) / 6 + D * D * (5 - 2 * C1 + 28 * T1 - 3 * C1 * C1 + 8 * e0sq + 24 * T1 * T1) / 120)) / Math.cos(phi1);
            lng = zcm + lng / drad;
            return [lng, lat];
        };
    }
    exports.geoUTM_inverse = geoUTM_inverse;
    function deg2rad(deg) {
        return deg * Math.PI / 180.0;
    }
    function rad2deg(rad) {
        return rad * 180.0 / Math.PI;
    }
    var pi_4 = Math.PI * 0.25;
    var pi2 = Math.PI * 2;
    /**
     * Compute the inital bearing from point A to point B,
     * @param {Array} A [long, lat]
     * @param {Array} B [long, lat]
     * @returns {float} degrees bearing (0 - 360)
     */
    function computeBearing(A, B) {
        var long1 = deg2rad(A[0]), lat1 = deg2rad(A[1]), long2 = deg2rad(B[0]), lat2 = deg2rad(B[1]);
        var dLong = (long2 - long1);
        if (Math.abs(dLong) > Math.PI) {
            if (dLong > 0) {
                dLong = -(pi2 - dLong);
            }
            else {
                dLong += pi2;
            }
        }
        var dPhi = Math.log(Math.tan((lat2 * 0.5) + pi_4) / Math.tan((lat1 * 0.5) + pi_4));
        var brng = (rad2deg(Math.atan2(dLong, dPhi)) + 360) % 360.0;
        return brng;
    }
    exports.computeBearing = computeBearing;
    exports.datums = {
        'WGS84': { eqRad: 6378137.0, flat: 298.2572236 },
        'NAD83': { eqRad: 6378137.0, flat: 298.2572236 },
        'GRS80': { eqRad: 6378137.0, flat: 298.2572215 },
        'WGS72': { eqRad: 6378135.0, flat: 298.2597208 },
        'AUS65': { eqRad: 6378160.0, flat: 298.2497323 },
        'Kras1940': { eqRad: 6378245.0, flat: 298.2997381 },
        'NAmer1927': { eqRad: 6378206.4, flat: 294.9786982 },
        'Intl1924': { eqRad: 6378388.0, flat: 296.9993621 },
        'Hayford1909': { eqRad: 6378388.0, flat: 296.9993621 },
        'Clarke1880': { eqRad: 6378249.1, flat: 293.4660167 },
        'Clarke1866': { eqRad: 6378206.4, flat: 294.9786982 },
        'Airy1830': { eqRad: 6377563.4, flat: 299.3247788 },
        'Bessel1841': { eqRad: 6377397.2, flat: 299.1527052 },
        'Everset1830': { eqRad: 6377276.3, flat: 300.8021499 } // Everest 1830
    };
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(0)], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, util) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var TRIP_CACHE_LIFETIME = 50;
    var VEHICLE_CACHE_LIFE = 5;
    var VEHICLE_MOVING_THRESHOLD = 1.5;
    function wrap(a) {
        return function (x) {
            return ((x % a) + a) % a;
        };
    }
    function parseVehicleSpeed(speedString) {
        var splitIndex = speedString.indexOf(" ");
        return { speed: +speedString.slice(0, splitIndex), units: speedString.slice(splitIndex) };
    }
    var wrap360 = wrap(360);
    var BUS_DISTANCE_FROM_ROUTE_TOLERANCE = 500;
    var BUS_ON_ROUTE_BEARING_THRESHOLD = 120;
    function isVehicleOnRoute(vehicle) {
        if (vehicle.position.isVirutal) {
            return true;
        }
        if (!vehicle.pointAlongShape) {
            return false;
        }
        if (Math.abs(vehicle.pointAlongShape.d) > BUS_DISTANCE_FROM_ROUTE_TOLERANCE) {
            return false;
        }
        var bearing = vehicle.position.bearing;
        var bearingToNextPoint = vehicle.position.bearingToNextPoint;
        var bearingDiff = wrap360(bearing - bearingToNextPoint);
        var TOL = BUS_ON_ROUTE_BEARING_THRESHOLD;
        return (Math.min(bearingDiff, 360 - bearingDiff) < TOL);
    }
    var LiveDataPropertyEnhancer = /** @class */ (function () {
        function LiveDataPropertyEnhancer() {
            this.vehicleCache = {};
        }
        LiveDataPropertyEnhancer.prototype.updateVehicleCache = function (vehicle) {
            var vehicleKey = vehicle.description.id;
            if (this.vehicleCache.hasOwnProperty(vehicleKey)) {
                var cachedVehicle = this.vehicleCache[vehicleKey];
                cachedVehicle.life = VEHICLE_CACHE_LIFE;
                var vehicleSpeed = parseVehicleSpeed(vehicle.position.speed);
                var cachedSpeed = parseVehicleSpeed(cachedVehicle.vehicle.position.speed);
                // reduce vehicle speed if no updates have been given since the last update
                if (vehicleSpeed.speed < VEHICLE_MOVING_THRESHOLD) {
                    vehicle.position.speed = cachedVehicle.vehicle.position.speed;
                }
                // rate-limit the vehicle bearing
                // const currentBearing = vehicle.position.bearing;
                // const lastBearing = cachedVehicle.vehicle.position.bearing;
                // const blendingRate = 0.45;
                // vehicle.position.bearing = (blendingRate)*(currentBearing) + (1-blendingRate)*lastBearing;
                // force compute bearing from change in position
                // if (vehicle.timestamp_seconds != cachedVehicle.vehicle.timestamp_seconds) {
                //     const currentPosition = vehicle.position.geoUTM;
                //     const prevPosition = cachedVehicle.vehicle.position.geoUTM;
                //     let computedBearing = (Math.atan2((currentPosition[1] - prevPosition[1]), -(currentPosition[0] - prevPosition[0])) * 57.29577951308232); //rad --> deg
                //     computedBearing = (computedBearing < 0) ? 360 + computedBearing : computedBearing;
                //     computedBearing = (((computedBearing - 90) % 360) + 360) % 360;
                //     vehicle.position.bearing = computedBearing;
                // } else {
                //     vehicle.position.bearing = cachedVehicle.vehicle.position.bearing;
                // }
                cachedVehicle.vehicle = vehicle;
                cachedVehicle.life = VEHICLE_CACHE_LIFE;
            }
            else {
                this.vehicleCache[vehicleKey] = { life: VEHICLE_CACHE_LIFE, vehicle: vehicle };
            }
        };
        LiveDataPropertyEnhancer.prototype.expire = function () {
            // expire old cache items
            for (var vehicleKey in this.vehicleCache) {
                var vehicle = this.vehicleCache[vehicleKey];
                if (vehicle.life-- <= 0) {
                    delete this.vehicleCache[vehicleKey];
                }
            }
        };
        LiveDataPropertyEnhancer.prototype.apply = function (liveData) {
            var _this = this;
            if (liveData.length === 0) {
                return Promise.resolve(liveData);
            }
            liveData.forEach(function (routeLiveData) {
                routeLiveData.vehicles.forEach(function (vehicle) {
                    if (!vehicle.trip || !vehicle.trip.tripData) {
                        return;
                    }
                    var tripData = vehicle.trip.tripData;
                    var _a = tripData.shape.localizeDistance([vehicle.position.longitude, vehicle.position.latitude]), distAlongShape = _a[0], pointAlongShape = _a[1];
                    var tripDistIdx = tripData.distTraveled.findIndex(function (element) { return element > distAlongShape; }) - 1;
                    tripDistIdx = (tripDistIdx >= 0) ? tripDistIdx : tripData.distTraveled.length - 1;
                    var tripDistA = tripData.distTraveled[tripDistIdx], tripDistB = tripData.distTraveled[tripDistIdx + 1];
                    var fractionalDist = ((distAlongShape - tripDistA) / (tripDistB - tripDistA));
                    var timeAlongTripA = tripData.arrivalTimes[tripDistIdx], timeAlongTripB = tripData.arrivalTimes[tripDistIdx + 1];
                    var timeAlongTrip = Math.round(timeAlongTripA + (timeAlongTripB - timeAlongTripA) * fractionalDist);
                    var tripShapeGEOUTMData = tripData.shape.geoUTM();
                    var nextPointInShape = tripShapeGEOUTMData[util.coerceToRange(Math.ceil(pointAlongShape.t + 1.5), 0, tripShapeGEOUTMData.length - 1)];
                    var geoUTMProj = tripData.shape.geoUTMProj;
                    var estPositionUTM = pointAlongShape.i;
                    var bearingToNextPointInShape = (Math.atan2((nextPointInShape[1] - estPositionUTM[1]), -(nextPointInShape[0] - estPositionUTM[0])) * 57.29577951308232); //rad --> deg
                    bearingToNextPointInShape = (bearingToNextPointInShape < 0) ? 360 + bearingToNextPointInShape : bearingToNextPointInShape;
                    bearingToNextPointInShape = (((bearingToNextPointInShape - 90) % 360) + 360) % 360;
                    vehicle.pointAlongShape = pointAlongShape;
                    vehicle.distAlongRoute = distAlongShape;
                    vehicle.timeAlongRoute = timeAlongTrip;
                    vehicle.fractionalStopNumAlongRoute = tripDistIdx + fractionalDist;
                    vehicle.position.bearingToNextPoint = bearingToNextPointInShape;
                    var currentPositionUTM = tripData.shape.geoUTMProj([vehicle.position.longitude, vehicle.position.latitude]);
                    vehicle.bearingTo = function (lnglat) {
                        var point = geoUTMProj(lnglat);
                        var bearningToPoint = (Math.atan2((point[1] - currentPositionUTM[1]), -(point[0] - currentPositionUTM[0])) * 57.29577951308232); //rad --> deg
                        bearningToPoint = (((bearningToPoint - 90) % 360) + 360) % 360;
                        return bearningToPoint;
                    };
                    vehicle.position.geoUTM = currentPositionUTM;
                    vehicle.position.isOnRoute = isVehicleOnRoute(vehicle);
                    _this.updateVehicleCache(vehicle);
                });
            });
            this.expire();
            return Promise.resolve(liveData);
        };
        return LiveDataPropertyEnhancer;
    }());
    exports.LiveDataPropertyEnhancer = LiveDataPropertyEnhancer;
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(2)], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, gtfsUtil) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    // End Global Declarations
    var TRIP_CACHE_LIFETIME = 50;
    var VEHICLE_CACHE_LIFE = 5;
    var VEHICLE_MOVING_THRESHOLD = 1.5;
    var LiveDataTripCorrelator = /** @class */ (function () {
        function LiveDataTripCorrelator(routeDataService) {
            this.routeDataService = routeDataService;
            this.vehicleToTripCache = {};
        }
        LiveDataTripCorrelator.prototype.updateVehicleToTripCache = function (vehicle_id, trip) {
            if (this.vehicleToTripCache.hasOwnProperty(vehicle_id) && trip) {
                this.vehicleToTripCache[vehicle_id].life = TRIP_CACHE_LIFETIME;
                this.vehicleToTripCache[vehicle_id].trip = trip;
            }
            else {
                this.vehicleToTripCache[vehicle_id] = {
                    life: TRIP_CACHE_LIFETIME,
                    trip: trip
                };
            }
        };
        LiveDataTripCorrelator.prototype.queryVehicleToTripCache = function (vehicle_id) {
            if (this.vehicleToTripCache[vehicle_id]) {
                return this.vehicleToTripCache[vehicle_id].trip;
            }
            return null;
        };
        LiveDataTripCorrelator.prototype.expire = function () {
            // expire old cache items
            for (var key in this.vehicleToTripCache) {
                if (this.vehicleToTripCache[key].life-- <= 0) {
                    delete this.vehicleToTripCache[key];
                }
            }
        };
        LiveDataTripCorrelator.prototype.apply = function (liveData) {
            var _this = this;
            if (liveData.length === 0) {
                return Promise.resolve(liveData);
            }
            //update live data with trip ID
            return Promise.all(liveData.map(function (routeVechileInfo) {
                var vehicles = routeVechileInfo.vehicles;
                return _this.routeDataService.getRoute(routeVechileInfo.route, false)
                    .then(function (routeData) {
                    var tripStopIndex = routeData.getTripStopIndex();
                    vehicles.forEach(function (vehicle) {
                        var tripData = tripStopIndex.findTripForStopNameAndTime(vehicle.nextStopName, vehicle.nextStopTime);
                        if (!tripData) {
                            tripData = _this.queryVehicleToTripCache(vehicle.description.id);
                            if (!!debug_level && debug_level >= 2 && tripData) {
                                console.info("Cache hit for vehicle " + routeVechileInfo.route + ", ID: " + vehicle.description.id + " Stop: " + vehicle.nextStopName + " at: " + vehicle.nextStopTime);
                            }
                        }
                        if (!!debug_level && debug_level >= 2) {
                            console.assert((!!tripData), "Trip data not found for vehicle " + routeVechileInfo.route + ", ID: " + vehicle.description.id + " Stop: " + vehicle.nextStopName + " at: " + vehicle.nextStopTime);
                        }
                        if (tripData && tripData.shape) {
                            vehicle.trip = (!!tripData) ?
                                {
                                    trip_id: tripData.trip_id.toString(),
                                    route_id: tripData.route.routeID,
                                    direction_id: tripData.direction_id,
                                    start_time: gtfsUtil.gtfs_seconds_to_timeAMPM(tripData.startTime),
                                    tripData: tripData,
                                } : null;
                            _this.updateVehicleToTripCache(vehicle.description.id, tripData);
                        }
                    });
                });
            })).then(function () { _this.expire(); return liveData; });
        };
        return LiveDataTripCorrelator;
    }());
    exports.LiveDataTripCorrelator = LiveDataTripCorrelator;
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(2), __webpack_require__(13)], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, gtfsUtil, timeUtil) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    console.assert(!!timeZone, "Missing timezone definition in global definitions (e.g. index.html)");
    // End Global Declarations
    /*
        Add "virtual" vehicles for the next trips in both inbound and outbound
        directions for the specified route.
    */
    function addVirtualVehicleForNextTrips(route, vehicles, mostRecentTime) {
        // scheduleKey: {'weekday', 'saturday', 'sunday'}
        var scheduleKey = gtfsUtil.getScheduleKey();
        // warnining: The following data code is unsafe and will
        // return unexpected results if the browser is in a different
        // timezone than source data.
        var now = new Date();
        var dateKey = (now.getFullYear() + 100000).toString().slice(2) + (now.getMonth() + 101).toString().slice(1) + (now.getDate() + 100).toString().slice(1);
        var allScheduledTripsForKey = route.getTrips(scheduleKey);
        var allScheduledTripsForSpecialKey = route.getTrips(dateKey);
        var scheduleReducer = function (direction_id) {
            return function (nt, cv, idx, arry) {
                var testTimeDiff = cv.startTime - mostRecentTime;
                if ((cv.direction_id === direction_id) && testTimeDiff >= 0 && testTimeDiff < nt.timeDiff) {
                    nt.timeDiff = testTimeDiff;
                    nt.trip = cv;
                }
                return nt;
            };
        };
        var nextStandardTripOutbound = allScheduledTripsForKey.reduce(scheduleReducer(0), { timeDiff: Number.POSITIVE_INFINITY, trip: null });
        var nextTripOutbound = allScheduledTripsForSpecialKey.reduce(scheduleReducer(0), nextStandardTripOutbound).trip;
        var nextStandardTripInbound = allScheduledTripsForKey.reduce(scheduleReducer(1), { timeDiff: Number.POSITIVE_INFINITY, trip: null });
        var nextTripInbound = allScheduledTripsForSpecialKey.reduce(scheduleReducer(1), nextStandardTripInbound).trip;
        var virtualVehicleForTrip = function (trip) {
            var nextStop = trip.stops[0];
            var nextStopName = nextStop.stop_name;
            var nextStopTime = gtfsUtil.gtfs_seconds_to_timeAMPM2(trip.startTime + trip.arrivalTimes[0]);
            var vehicle = {
                description: {
                    id: route.shortName + '-' + trip.trip_id,
                    label: route.shortName,
                    icon: '',
                    route: route.shortName
                },
                nextStop: nextStopName + " scheduled at " + nextStopTime,
                nextStopName: nextStopName,
                nextStopTime: nextStopTime,
                position: {
                    longitude: nextStop.coordinates[0],
                    latitude: nextStop.coordinates[1],
                    speed: "0 MPH",
                    bearing: 0
                },
                timestamp: gtfsUtil.gtfs_seconds_to_timeAMPM3(mostRecentTime),
                timestamp_seconds: mostRecentTime,
                route: route.shortName,
                trip: {
                    direction_id: trip.direction_id,
                    route_id: trip.route.routeID,
                    start_time: gtfsUtil.gtfs_seconds_to_timeAMPM(trip.startTime),
                    trip_id: trip.trip_id.toString(),
                    tripData: trip
                }
            };
            vehicle.position.isVirtual = true;
            return vehicle;
        };
        if (nextTripOutbound) {
            var vehicle = virtualVehicleForTrip(nextTripOutbound);
            // const foundTrip = route.getTripStopIndex().findTripForStopNameAndTime(vehicle.nextStopName, vehicle.nextStopTime);
            // console.assert(foundTrip === nextTripOutbound, "virtual trip mismatch");
            // if (foundTrip !== nextTripOutbound) {
            //     console.log({targetTrip: nextTripOutbound.trip_id, nextStop: vehicle.nextStopName, stopTime: vehicle.nextStopTime, stopTimeSecs: gtfsUtil.gtfs_time12_no_seconds_to_seconds(vehicle.nextStopTime)});
            //     console.log(route.getTripStopIndex());
            // }
            if (vehicles.findIndex(function (v) { return (v.trip) && (v.trip.trip_id) && (v.trip.trip_id === nextTripOutbound.trip_id); }) < 0) {
                vehicles.push(vehicle);
            }
        }
        if (nextTripInbound) {
            var vehicle = virtualVehicleForTrip(nextTripInbound);
            // const foundTrip = route.getTripStopIndex().findTripForStopNameAndTime(vehicle.nextStopName, vehicle.nextStopTime);
            // console.assert(foundTrip === nextTripInbound, "virtual trip mismatch");
            // if (foundTrip !== nextTripInbound) {
            //     console.log({targetTrip: nextTripInbound.trip_id, nextStop: vehicle.nextStopName, stopTime: vehicle.nextStopTime, stopTimeSecs: gtfsUtil.gtfs_time12_no_seconds_to_seconds(vehicle.nextStopTime)});
            //     console.log(route.getTripStopIndex());
            // }
            if (vehicles.findIndex(function (v) { return (v.trip) && (v.trip.trip_id) && (v.trip.trip_id === nextTripInbound.trip_id); }) < 0) {
                vehicles.push(vehicle);
            }
        }
    }
    // Add virtual vehicles for schedules at least X seconds in the future
    var LOOK_AHEAD_SECONDS = 5 * 60;
    var VirtualVehicleGenerator = /** @class */ (function () {
        function VirtualVehicleGenerator(routeDataService) {
            this.routeDataService = routeDataService;
        }
        VirtualVehicleGenerator.prototype.apply = function (liveData, routes) {
            var _this = this;
            var timeOffset = timeUtil.CONST_TIME_OFFSET;
            var nowSeconds = gtfsUtil.getDaySeconds() + timeOffset;
            return Promise.all(routes.map(function (route) { return _this.routeDataService.getRoute(route, false).then(function (routeData) {
                var matchingVechSet = liveData.filter(function (records) { return records.route === route; });
                if (matchingVechSet && matchingVechSet[0]) {
                    addVirtualVehicleForNextTrips(routeData, matchingVechSet[0].vehicles, nowSeconds);
                }
                else {
                    var newVehs = [];
                    var newSet = {
                        route: route,
                        vehicles: newVehs
                    };
                    addVirtualVehicleForNextTrips(routeData, newVehs, nowSeconds);
                    liveData.push(newSet);
                }
            }); })).then(function () { return liveData; });
        };
        return VirtualVehicleGenerator;
    }());
    exports.VirtualVehicleGenerator = VirtualVehicleGenerator;
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    console.assert(!!timeZone, "Missing timezone definition in global namespace.");
    exports.CONST_TIME_OFFSET = getCurrentTimeOffsetSeconds(timeZone, new Date());
    if (window && window.setTimeout) {
        var updateIntervalMS = 1000 * 60 * 60; // 60 minutes
        var updateTZOffset = function () {
            exports.CONST_TIME_OFFSET = getCurrentTimeOffsetSeconds(timeZone, new Date());
            console.log('updated time offset');
        };
        window.setInterval(updateTZOffset, updateIntervalMS);
    }
    function getCurrentTimeOffsetSeconds(timeZone, date) {
        var nowLocal = date || new Date();
        var nowSource = new Date(nowLocal.toLocaleString('en-US', { timeZone: timeZone }));
        return Math.round((nowSource.getTime() - nowLocal.getTime()) / 1000 / 60) * 60;
    }
    exports.getCurrentTimeOffsetSeconds = getCurrentTimeOffsetSeconds;
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(5), __webpack_require__(6), __webpack_require__(0), __webpack_require__(2), __webpack_require__(3)], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, route_data_service_1, route_index_service_1, util_1, gtfs_util_1, Promise) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var StopData = /** @class */ (function () {
        function StopData(data) {
            var _this = this;
            this.relatedStops = data.relatedStops;
            this.coordinates = data.coordinates;
            this.transferRoutes = data.transferRoutes;
            this.relatedRouteNames = data.relatedRouteNames.sort(function (a, b) { return +(a) - +(b); });
            ;
            this.stop_name = data.stop_name;
            this.stop_names = data.stop_names;
            this.stop_codes = data.stop_codes;
            this.stop_code = data.stop_code;
            this.stop_id = data.stop_id;
            this.related_stop_centroid = data.related_stop_centroid;
            this.stopSchedule = data.stopSchedule;
            this.relatedStopsArray = function () { return util_1.Unindex(_this.relatedStops); };
            var stopNameCodeIndex = {};
            this.relatedStopsArray().forEach(function (stop) {
                if (!stopNameCodeIndex.hasOwnProperty(stop.stop_name)) {
                    stopNameCodeIndex[stop.stop_name] = [];
                }
                stopNameCodeIndex[stop.stop_name].push(stop);
            });
            this.stopNameCodes = util_1.Unindex(stopNameCodeIndex)
                .map(function (stopGroup) { return ({ stop_name: stopGroup[0].stop_name, stop_codes: stopGroup.map(function (stop) { return stop.stop_code; }) }); })
                .sort(function (a, b) { return (a.stop_name > b.stop_name) ? 1 : ((a.stop_name < b.stop_name) ? -1 : 0); });
            this.primaryStop = this.stopNameCodes.reduce(function (accum, cv, idx) {
                var currMax = +(accum.stop_code);
                var maxCode = cv.stop_codes.reduce(function (accum, cv) { return Math.max(accum, +cv); }, currMax);
                if (maxCode > currMax) {
                    accum.stop_code = maxCode.toString();
                    accum.stop_name = cv.stop_name;
                }
                return accum;
            }, { stop_name: '', stop_code: '0' });
        }
        return StopData;
    }());
    exports.StopData = StopData;
    var StopDataService = /** @class */ (function () {
        function StopDataService(agency) {
            this.agency = agency;
            this.routeDataService = route_data_service_1.RouteDataService.getInstance(agency);
            // The following assignment from a promise shouldn't be an issue because the route index should already be loaded
            // by the time this function runs.
            this.stopIndex = route_index_service_1.RouteIndexService.getInstance().getIndex(agency)
                .then(function (rtIndex) {
                return util_1.BuildMultiIndex(rtIndex.stops, function (stop) { return stop.codes; });
            });
            this.stopDataCache = {};
        }
        StopDataService.getInstance = function (agency) {
            if (!StopDataService.INSTANCE_CACHE[agency]) {
                StopDataService.INSTANCE_CACHE[agency] = new StopDataService(agency);
            }
            return StopDataService.INSTANCE_CACHE[agency];
        };
        StopDataService.prototype.getStopData = function (stopCode) {
            var _this = this;
            if (!this.stopDataCache[stopCode]) {
                // need to (re)build StopData from index and route info, then add it to the stopDataCache
                return this.stopIndex.then(function (stopIndex) {
                    var stopIndexData = stopIndex[stopCode];
                    if (!stopIndexData) {
                        console.error("stop index data not found for stop code: " + stopCode);
                        return null;
                    }
                    var relatedRoutesNames = stopIndexData.rroutes;
                    var allRouteDataPromise = Promise.all([(Promise.resolve(stopIndexData))].concat(relatedRoutesNames.map(function (routeName) { return _this.routeDataService.getRoute(routeName, false); })));
                    return allRouteDataPromise;
                }).then(function (args) {
                    var stopIndexData = args[0];
                    var routes = args.slice(1);
                    // process each route in the following manner:
                    // 1. Iterate through each trip and identify the stop and stop times for the specified stop
                    //      -- repeat this for Weekday, Saturday, and Sunday
                    //      ----  for inbound and outbound directions
                    // 2. Update the stopDataCache entry with this information
                    // stopSchedule : 
                    // {
                    //     weekday:
                    //        route
                    //          inbound
                    //          outbound
                    //     saturday:
                    //        route
                    //          inbound
                    //          outbound
                    //     sunday:
                    //        route
                    //          inbound
                    //          outbound
                    // }
                    var stopSchedule = { weekday: {}, saturday: {}, sunday: {} };
                    var fullStopDataFromRoute = null;
                    function updateStopSchedule(route, schedule, direction) {
                        var routeKey = route.shortName;
                        var directionKey = direction.toString();
                        var stopTimesSeconds = [];
                        route.getTrips(schedule, direction).forEach(function (trip) {
                            stopIndexData.codes.forEach(function (stopCode) {
                                var tripStopIndex = trip.stops.findIndex(function (stop) { return stop.stop_code == stopCode; });
                                if (tripStopIndex >= 0) {
                                    fullStopDataFromRoute = fullStopDataFromRoute || trip.stops[tripStopIndex];
                                    var arrivalTime = trip.startTime + trip.arrivalTimes[tripStopIndex];
                                    stopTimesSeconds.push(arrivalTime);
                                }
                            });
                        });
                        if (!stopSchedule[schedule]) {
                            stopSchedule[schedule] = {};
                        }
                        var daySet = stopSchedule[schedule];
                        if (!daySet[routeKey]) {
                            daySet[routeKey] = {};
                        }
                        var routeSet = daySet[routeKey];
                        routeSet[directionKey] = stopTimesSeconds.map(gtfs_util_1.gtfs_seconds_to_timeAMPM);
                    }
                    routes.forEach(function (route) {
                        updateStopSchedule(route, 'weekday', 0);
                        updateStopSchedule(route, 'weekday', 1);
                        updateStopSchedule(route, 'saturday', 0);
                        updateStopSchedule(route, 'saturday', 1);
                        updateStopSchedule(route, 'sunday', 0);
                        updateStopSchedule(route, 'sunday', 1);
                    });
                    var cacheData = new StopData({
                        relatedStops: fullStopDataFromRoute.relatedStops,
                        coordinates: fullStopDataFromRoute.coordinates,
                        transferRoutes: fullStopDataFromRoute.transferRoutes,
                        relatedRouteNames: stopIndexData.rroutes,
                        stop_name: fullStopDataFromRoute.stop_name,
                        stop_names: stopIndexData.names,
                        stop_codes: stopIndexData.codes,
                        stop_code: fullStopDataFromRoute.stop_code,
                        stop_id: fullStopDataFromRoute.stop_id,
                        related_stop_centroid: fullStopDataFromRoute.relatedStopCentroid(),
                        stopSchedule: stopSchedule
                    });
                    _this.stopDataCache[stopCode] = cacheData;
                    return cacheData;
                });
            }
            return Promise.resolve(this.stopDataCache[stopCode]);
        };
        StopDataService.INSTANCE_CACHE = {};
        return StopDataService;
    }());
    exports.StopDataService = StopDataService;
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(0)], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, util_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ROUTE_QUERY_RE = /route=[\w\d]+/;
    var BrowserHistoryManager = /** @class */ (function () {
        function BrowserHistoryManager(callbackOptions, context, window) {
            this.callbackOptions = callbackOptions;
            this.context = context;
            this.window = window;
            this.suppressPush = false;
            console.assert(!this.window.onpopstate, "Warning! window.onpopstate was not null and was redefiened by this BrowserHistoryManager");
            this.window.onpopstate = this.popStateHandler.bind(this);
        }
        BrowserHistoryManager.prototype.parseQueryString = function (query) {
            var queryData = util_1.parseQueryString(query);
            if (queryData.route) {
                this.suppressPush = true;
                var route = queryData.route;
                this.callbackOptions.onLoadRouteHandler.call(this.context, route);
            }
            else if (queryData.stop) {
                this.suppressPush = true;
                var stopCode = queryData.stop;
                this.callbackOptions.onLoadStopHandler.call(this.context, stopCode);
            }
            else {
                this.callbackOptions.onIndexHandler.call(this.context);
            }
        };
        BrowserHistoryManager.prototype.popStateHandler = function (event) {
            this.parseQueryString(event.target.location.search);
        };
        BrowserHistoryManager.prototype.pushRouteState = function (shortName) {
            if (!this.suppressPush) {
                var queryData = { route: shortName };
                var serializedQueryString = util_1.serializeQueryString(queryData);
                this.window.history.pushState(queryData, '', serializedQueryString);
            }
            this.suppressPush = false;
        };
        BrowserHistoryManager.prototype.pushStopCodeState = function (stopCode) {
            if (!this.suppressPush) {
                var queryData = { stop: stopCode };
                var serializedQueryString = util_1.serializeQueryString(queryData);
                this.window.history.pushState(queryData, '', serializedQueryString);
            }
            this.suppressPush = false;
        };
        return BrowserHistoryManager;
    }());
    exports.BrowserHistoryManager = BrowserHistoryManager;
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(33), __webpack_require__(0)], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, ui, util) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function wrap(a) {
        return function (x) {
            return ((x % a) + a) % a;
        };
    }
    var wrap360 = wrap(360);
    function isVehicleOnRoute(vehicle) {
        return vehicle.position.isOnRoute || vehicle.position.isVirtual;
        // if (!vehicle.pointAlongShape) {
        //   return false;
        // }
        // if (Math.abs(vehicle.pointAlongShape.d) > ui.BUS_DISTANCE_FROM_ROUTE_TOLERANCE) {
        //   return false;
        // }
        // const bearing = vehicle.position.bearing;
        // const bearingToNextPoint = vehicle.position.bearingToNextPoint;
        // const bearingDiff = wrap360(bearing - bearingToNextPoint);
        // const TOL = ui.BUS_ON_ROUTE_BEARING_THRESHOLD;
        // return (Math.min(bearingDiff, 360 - bearingDiff) < TOL);
    }
    function iconForVehicle(vehicle, route, mainRouteID) {
        var direction = (vehicle.trip) ? vehicle.trip.direction_id : 0;
        var onRoute = isVehicleOnRoute(vehicle);
        var isMainRoute = (route === mainRouteID);
        if (vehicle.position.isVirtual) {
            return ui.SCHEDULED_BUS_IMAGE;
        }
        if (!onRoute) {
            return ui.OFF_ROUTE_BUS_IMAGE;
        }
        if (!isMainRoute) {
            return ui.OTHER_BUS_IMAGE;
        }
        return (direction === 0) ? ui.MAIN_BUS_IMAGE : ui.MAIN_BUS_IMAGE_INB;
    }
    var ALONG_PATH_DISTANCE_THRESHOLD = 25;
    function getVehicleLabel(vehicle) {
        return (isVehicleOnRoute(vehicle)) ? vehicle.description.label : "OUT";
    }
    function getVehicleTitle(vehicle) {
        return '#' + vehicle.description.id + " " + vehicle.nextStopName + ((vehicle.position.isVirtual) ? ' (scheduled)' : '');
    }
    var GoogleMapsLiveDataBindingHandler = /** @class */ (function () {
        function GoogleMapsLiveDataBindingHandler() {
        }
        GoogleMapsLiveDataBindingHandler.prototype.update = function (element, valueAccessor, allBindings, viewModel, bindingContext) {
            var mainRouteID = (element.route && element.route.shortName) ? element.route.shortName : "";
            var liveData = ko.utils.unwrapObservable(valueAccessor());
            var flatLiveData = liveData.reduce(function (arry, liveData) { return arry.concat(liveData.vehicles.map(function (v) { return ({ route: liveData.route, data: v }); })); }, []);
            if (liveData && element.vehicleMarkers) {
                var vehicleMarkers = element.vehicleMarkers;
                var vehicleArrowMarkers = element.vehicleArrowMarkers;
                var pointMatchLines = element.pointMatchLines;
                var totalLiveVehicles = flatLiveData.length;
                var lenDiff = totalLiveVehicles - vehicleMarkers.length;
                if (lenDiff < 0) {
                    for (var indx = 0; indx < -lenDiff; indx++) {
                        var marker = vehicleMarkers.pop();
                        var arrowMarker = vehicleArrowMarkers.pop();
                        var pointAlongShape = pointMatchLines.pop();
                        marker.setMap(null);
                        arrowMarker.setMap(null);
                        pointAlongShape.setMap(null);
                    }
                }
                var flatLiveDataIndx = 0;
                for (var indx = 0; indx < vehicleMarkers.length; indx++) {
                    var vehicle = flatLiveData[flatLiveDataIndx++];
                    var routeID = vehicle.route;
                    var vehicleData = vehicle.data;
                    var vehicleOnRoute = isVehicleOnRoute(vehicleData);
                    var vehicleSpeed = +vehicle.data.position.speed.slice(0, vehicle.data.position.speed.indexOf(" "));
                    var arrowBearing = ( false) ? vehicleData.position.bearingToNextPoint : vehicleData.position.bearing;
                    var geoUTMProjInv = (vehicleData.trip && vehicleData.trip.tripData) ? vehicleData.trip.tripData.shape.geoUTMProjInv : null;
                    var pointAlongCoordsShape = (geoUTMProjInv) ? geoUTMProjInv(vehicleData.trip.tripData.shape.geoUTM()[util.coerceToRange(Math.ceil(vehicleData.pointAlongShape.t), 0, vehicleData.trip.tripData.shape.dist_traveled.length - 1)]) : null;
                    var pointAlongShape = (pointAlongCoordsShape) ? { lng: pointAlongCoordsShape[0], lat: pointAlongCoordsShape[1] } : { lng: vehicleData.position.longitude, lat: vehicleData.position.latitude };
                    var nextPointAlongCoordsShape = (geoUTMProjInv) ? geoUTMProjInv(vehicleData.trip.tripData.shape.geoUTM()[util.coerceToRange(Math.ceil(vehicleData.pointAlongShape.t + 1.5), 0, vehicleData.trip.tripData.shape.dist_traveled.length - 1)]) : null;
                    var nextPointAlongShape = (pointAlongCoordsShape) ? { lng: nextPointAlongCoordsShape[0], lat: nextPointAlongCoordsShape[1] } : { lng: vehicleData.position.longitude, lat: vehicleData.position.latitude };
                    var vehiclePosition = (vehicleData.pointAlongShape && Math.abs(vehicleData.pointAlongShape.d) < ALONG_PATH_DISTANCE_THRESHOLD) ?
                        pointAlongShape
                        : { lat: vehicleData.position.latitude, lng: vehicleData.position.longitude };
                    var pointMatchLinePath = [vehiclePosition,
                        nextPointAlongShape];
                    var marker = vehicleMarkers[indx];
                    var arrowMarker = vehicleArrowMarkers[indx];
                    var pointMatchLine = pointMatchLines[indx];
                    var arrowMarkerSymbol = arrowMarker.getIcon();
                    pointMatchLine.setPath(pointMatchLinePath);
                    arrowMarker.setPosition(vehiclePosition);
                    arrowMarker.setZIndex((routeID == mainRouteID) ? (google.maps.Marker.MAX_ZINDEX - 100) : (google.maps.Marker.MAX_ZINDEX - 200));
                    marker.setPosition(vehiclePosition);
                    marker.setIcon(iconForVehicle(vehicleData, routeID, mainRouteID));
                    var markerLabel = marker.getLabel();
                    markerLabel.text = getVehicleLabel(vehicleData);
                    marker.setLabel(markerLabel);
                    marker.setTitle(getVehicleTitle(vehicleData));
                    marker.vehicleData = vehicle;
                    if (vehicleSpeed > ui.MOVING_SPEED_CUTOFF) {
                        arrowMarkerSymbol.rotation = arrowBearing - 90;
                    }
                    arrowMarkerSymbol.path = (vehicleOnRoute && !vehicleData.position.isVirtual) ? ui.BusIconArrowSVGPath : "",
                        arrowMarkerSymbol.fillColor = (routeID == mainRouteID) ? ((vehicleSpeed > ui.MOVING_SPEED_CUTOFF) ? ui.MAIN_ARROW_COLOR : ui.MAIN_ARROW_COLOR_STOPPED) : ui.ALT_ARROW_COLOR;
                    arrowMarker.setIcon(arrowMarkerSymbol);
                }
                var _loop_1 = function (indx) {
                    var vehicle = flatLiveData[flatLiveDataIndx++];
                    var routeID = vehicle.route;
                    var vehicleData = vehicle.data;
                    var vehicleOnRoute = isVehicleOnRoute(vehicleData);
                    var vehicleSpeed = +vehicle.data.position.speed.slice(0, vehicle.data.position.speed.indexOf(" "));
                    var arrowBearing = ( false) ? vehicleData.position.bearingToNextPoint : vehicleData.position.bearing;
                    var geoUTMProjInv = (vehicleData.trip && vehicleData.trip.tripData) ? vehicleData.trip.tripData.shape.geoUTMProjInv : null;
                    var pointAlongCoordsShape = (geoUTMProjInv) ? geoUTMProjInv(vehicleData.trip.tripData.shape.geoUTM()[util.coerceToRange(Math.ceil(vehicleData.pointAlongShape.t), 0, vehicleData.trip.tripData.shape.dist_traveled.length - 1)]) : null;
                    var pointAlongShape = (pointAlongCoordsShape) ? { lng: pointAlongCoordsShape[0], lat: pointAlongCoordsShape[1] } : { lng: vehicleData.position.longitude, lat: vehicleData.position.latitude };
                    var nextPointAlongCoordsShape = (geoUTMProjInv) ? geoUTMProjInv(vehicleData.trip.tripData.shape.geoUTM()[util.coerceToRange(Math.ceil(vehicleData.pointAlongShape.t + 1.5), 0, vehicleData.trip.tripData.shape.dist_traveled.length - 1)]) : null;
                    var nextPointAlongShape = (pointAlongCoordsShape) ? { lng: nextPointAlongCoordsShape[0], lat: nextPointAlongCoordsShape[1] } : { lng: vehicleData.position.longitude, lat: vehicleData.position.latitude };
                    var vehiclePosition = (vehicleData.pointAlongShape && Math.abs(vehicleData.pointAlongShape.d) < ALONG_PATH_DISTANCE_THRESHOLD) ?
                        pointAlongShape : { lat: vehicleData.position.latitude, lng: vehicleData.position.longitude };
                    var pointMatchLineData = {
                        path: [vehiclePosition,
                            nextPointAlongShape],
                        strokeColor: "black",
                        strokeOpacity: 0,
                        strokeWeight: 2,
                    };
                    var pointMatchLine = new google.maps.Polyline(pointMatchLineData);
                    var markerData = {
                        position: vehiclePosition,
                        icon: iconForVehicle(vehicleData, routeID, mainRouteID),
                        label: { color: "black", fontSize: "0.9em", fontWeight: "bold", text: getVehicleLabel(vehicleData) },
                        title: getVehicleTitle(vehicleData),
                        optimized: false,
                        zIndex: (routeID == mainRouteID) ? google.maps.Marker.MAX_ZINDEX : (google.maps.Marker.MAX_ZINDEX - 10)
                    };
                    var arrowMarkerData = {
                        position: vehiclePosition,
                        icon: {
                            path: (vehicleOnRoute && !vehicleData.position.isVirtual) ? ui.BusIconArrowSVGPath : "",
                            fillColor: (routeID == mainRouteID) ? ((vehicleSpeed > ui.MOVING_SPEED_CUTOFF) ? ui.MAIN_ARROW_COLOR : ui.MAIN_ARROW_COLOR_STOPPED) : ui.ALT_ARROW_COLOR,
                            fillOpacity: 1.0,
                            strokeColor: 'black',
                            strokeWeight: 1.25,
                            strokeOpacity: 1.0,
                            rotation: arrowBearing - 90,
                            optimized: false,
                            zIndex: (routeID == mainRouteID) ? (google.maps.Marker.MAX_ZINDEX - 100) : (google.maps.Marker.MAX_ZINDEX - 200)
                        }
                    };
                    var marker = new google.maps.Marker(markerData);
                    var arrowMarker = new google.maps.Marker(arrowMarkerData);
                    arrowMarker.setMap(element.map);
                    marker.setMap(element.map);
                    pointMatchLine.setMap(element.map);
                    marker.vehicleData = vehicle;
                    var vechSummary = {
                        route: vehicleData.route,
                        bus_id: vehicleData.description.id,
                        nextStop: vehicleData.nextStop,
                        position: vehicleData.position,
                        timestamp: { str: vehicleData.timestamp, seconds: vehicleData.timestamp_seconds },
                        trip: { trip_id: (vehicleData.trip) ? vehicleData.trip.trip_id : '<>', hasTripData: vehicleData.trip && vehicleData.trip.tripData },
                        spatializer: {
                            pointAlongShape: vehicleData.pointAlongShape,
                            distAlongRoute: vehicleData.distAlongRoute,
                            timeAlongRoute: vehicleData.timeAlongRoute,
                            fractionalStopNumAlongRoute: vehicleData.fractionalStopNumAlongRoute
                        }
                    };
                    // marker.addListener('click', () => { console.log(vehicle); console.log(JSON.stringify(vechSummary, (key, value) => ((key === 'tripData') ? 'hidden' : value), 1)); });
                    marker.addListener('click', function () { console.log(vehicleData); });
                    vehicleMarkers.push(marker);
                    vehicleArrowMarkers.push(arrowMarker);
                    pointMatchLines.push(pointMatchLine);
                };
                for (var indx = vehicleMarkers.length; indx < totalLiveVehicles; indx++) {
                    _loop_1(indx);
                }
            }
        };
        GoogleMapsLiveDataBindingHandler.prototype.init = function (element, valueAccessor, allBindingsAccessor) {
            var liveData = ko.utils.unwrapObservable(valueAccessor());
            if (!(liveData instanceof Array)) {
                return;
            }
            element.vehicleMarkers = [];
            element.vehicleArrowMarkers = [];
            element.pointMatchLines = [];
        };
        return GoogleMapsLiveDataBindingHandler;
    }());
    exports.GoogleMapsLiveDataBindingHandler = GoogleMapsLiveDataBindingHandler;
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(4)], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, RouteData_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var GoogleMapsRouteMapBindingHandler = /** @class */ (function () {
        function GoogleMapsRouteMapBindingHandler() {
        }
        //static styledMapType = new google.maps.StyledMapType(lightStyle);
        GoogleMapsRouteMapBindingHandler.prototype.init = function (element, valueAccessor, allBindingsAccessor) {
            var route = ko.utils.unwrapObservable(valueAccessor());
            if (!(route instanceof RouteData_1.RouteData)) {
                return;
            }
            var geoLonLat = route.getGeoCenter();
            var geoCenter = new google.maps.LatLng(geoLonLat[1], geoLonLat[0]);
            var mapOptions = {
                center: geoCenter,
                zoom: 13,
                // mapTypeControlOptions: {
                //   mapTypeIds: ['roadmap', 'satellite', 'hybrid', 'terrain',
                //     'styled_map']
                // },
                mapTypeId: google.maps.MapTypeId.ROADMAP,
            };
            var map = new google.maps.Map(element, mapOptions);
            (element).route = route;
            (element).map = map;
            (element).polyLines = [];
        };
        GoogleMapsRouteMapBindingHandler.prototype.update = function (element, valueAccessor, allBindings, viewModel, bindingContext) {
            var route = ko.utils.unwrapObservable(valueAccessor());
            (element).route = route; // make sure route date is updated on element!
            var map = ((element).map);
            if (!(route instanceof RouteData_1.RouteData)) {
                return;
            }
            var representativeShape = route.getRepresentativeShape();
            var shapePolyCoords = representativeShape.coordinates.map(function (lines) { return lines.map(function (point) { return ({ lat: point[1], lng: point[0] }); }); });
            var polyLines = (element).polyLines;
            var diffLen = shapePolyCoords.length - polyLines.length;
            if (diffLen < 0) {
                for (var indx = 0; indx < -diffLen; indx++) {
                    // remove polyLines
                    var pline = polyLines.pop();
                    pline.setMap(null);
                }
            }
            for (var indx = 0; indx < Math.min(shapePolyCoords.length, polyLines.length); indx++) {
                // update existing polyLines
                var pline = polyLines[indx];
                var coords = shapePolyCoords[indx];
                pline.setOptions({
                    clickable: false,
                    map: map,
                    path: coords,
                    strokeColor: '#' + route.routeColor,
                    strokeOpacity: 1,
                    strokeWeight: 7
                });
            }
            for (var indx = polyLines.length; indx < shapePolyCoords.length; indx++) {
                // create new polyLines
                var coords = shapePolyCoords[indx];
                var pline = new google.maps.Polyline({
                    clickable: false,
                    map: map,
                    path: coords,
                    strokeColor: '#' + route.routeColor,
                    strokeOpacity: 1,
                    strokeWeight: 7
                });
                polyLines.push(pline);
            }
            var bounds = new google.maps.LatLngBounds();
            polyLines.forEach(function (pline) { return pline.getPath().forEach(function (point) { return bounds.extend(point); }); });
            map.fitBounds(bounds);
            map.panToBounds(bounds);
        };
        return GoogleMapsRouteMapBindingHandler;
    }());
    exports.GoogleMapsRouteMapBindingHandler = GoogleMapsRouteMapBindingHandler;
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(3)], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, Promise) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var TRIE_NODE = /** @class */ (function () {
        function TRIE_NODE() {
            this.data = new Set();
            this.children = {};
        }
        return TRIE_NODE;
    }());
    ;
    // utility function that extracts keywords from a string
    // ignoring @ and & symbols
    function extractKeywords(names) {
        // return names.reduce((result, s) => result.concat(s.split(' ').filter(s => s !== '@' && s !== '&').map(s => s.toLowerCase())), []);
        return names.reduce(function (result, name) { return result.concat(name.replace(/[\@\&\)\(]\s*/g, '').toLowerCase().split(' ')); }, []);
    }
    // This class implements the functionality related to the
    // interactive search feature in the main search bar
    var OnlineSearchIndex = /** @class */ (function () {
        // light-weight constructor
        function OnlineSearchIndex(agency, routeIndexService) {
            this.ROUTES_PRE_QUERY = null;
            this.initilizerPromise = null;
            this.agency = agency;
            this.routeIndexService = routeIndexService;
            this.trieIndex = null;
            this.initialize(); // initialization is performed asynchronously 
        }
        // find a node in the trie
        OnlineSearchIndex.prototype.findTrieNode = function (node, key) {
            if (!node) {
                return null;
            }
            var result = node;
            for (var idx = 0; idx < key.length; idx++) {
                var keyChar = key.charAt(idx);
                if (!result.children.hasOwnProperty(keyChar)) {
                    var newNode = new TRIE_NODE();
                    result.children[keyChar] = newNode;
                    result = newNode;
                }
                else {
                    result = result.children[keyChar];
                }
            }
            return result;
        };
        ;
        OnlineSearchIndex.prototype.initialize = function () {
            var _this = this;
            if (!this.trieIndex) {
                var rootNode_1 = new TRIE_NODE();
                // BUILD TRIE INDEX       
                this.initilizerPromise = this.routeIndexService
                    .getIndex(this.agency)
                    .then(function (idx) {
                    if (debug_stats) {
                        console.time('Building Trie Index');
                    }
                    var routeIndex = {};
                    idx.routes.forEach(function (r) {
                        r.itemType = 'route';
                        _this.findTrieNode(rootNode_1, r.shortName.toLowerCase()).data.add(r);
                        _this.findTrieNode(rootNode_1, r.longName.toLowerCase()).data.add(r);
                        routeIndex[r.shortName] = r;
                    });
                    idx.stops.forEach(function (s) {
                        s.itemType = 'stop';
                        s.codes.forEach(function (c) { return _this.findTrieNode(rootNode_1, c.toString().toLowerCase()).data.add(s); });
                        var names = extractKeywords(s.names);
                        //s.names.forEach(n => n.split(' ').filter(s => s !== '@' && s !== '&').forEach(n => findNode(n.toLowerCase()).data.add(s)));
                        names.forEach(function (name) { return _this.findTrieNode(rootNode_1, name).data.add(s); });
                        s.rroutes.forEach(function (r) {
                            _this.findTrieNode(rootNode_1, r.toString().toLowerCase()).data.add(s);
                            //const routeIdxData = routeIndex[r.toString()];
                            //names.forEach(n => findNode(n).data.add(routeIdxData));
                        });
                    });
                    _this.trieIndex = rootNode_1;
                    if (debug_stats) {
                        console.timeEnd('Building Trie Index');
                    }
                });
            }
        };
        OnlineSearchIndex.prototype.QueryTrieIndex = function (query, itemType) {
            var _this = this;
            this.initialize();
            return this.initilizerPromise.then(function () {
                var matchers = query.split(" ").filter(function (q) { return !!q; }).map(function (s) { return s.toLowerCase(); });
                var resultSet = new Set();
                function accumulateChildrenData(workingSet, node, itemType) {
                    if (itemType && itemType.length > 0) {
                        node.data.forEach(function (d) { if (d.itemType === itemType) {
                            workingSet.add(d);
                        } ; });
                    }
                    else {
                        node.data.forEach(workingSet.add, workingSet);
                    }
                    for (var childKey in node.children) {
                        accumulateChildrenData(workingSet, node.children[childKey], itemType);
                    }
                    return workingSet;
                }
                ;
                if (matchers.length === 0) {
                    accumulateChildrenData(resultSet, _this.trieIndex, "route");
                }
                matchers.forEach(function (query) {
                    var currentMatchSet = new Set();
                    var node = _this.findTrieNode(_this.trieIndex, query);
                    if (node) {
                        accumulateChildrenData(currentMatchSet, node, itemType);
                    }
                    if (resultSet.size === 0) {
                        resultSet = currentMatchSet;
                    }
                    else {
                        var intersection_1 = new Set();
                        currentMatchSet.forEach(function (b) {
                            if (resultSet.has(b)) {
                                intersection_1.add(b);
                            }
                        });
                        resultSet = intersection_1;
                    }
                });
                if (query === "") {
                    var allRoutes = Array.from(resultSet)
                        .filter(function (a) { return a.itemType === "route"; })
                        .sort(function (a, b) { return (+b.trips) - (+a.trips); });
                    var tripCounts = allRoutes.reduce(function (arry, route, idx) { arry.push(route.trips + ((idx > 0) ? arry[idx - 1] : 0)); return arry; }, []);
                    var totalTrips = tripCounts[tripCounts.length - 1];
                    var tripCountPercentCut = 0.45; // this sets the cut-off for the percent of routes that are considered "top" routes
                    var tripCountCut_1 = Math.round(totalTrips * tripCountPercentCut);
                    var topRoutesCutIdx = tripCounts.findIndex(function (cnt) { return cnt > tripCountCut_1; });
                    var topRoutes = allRoutes.slice(0, topRoutesCutIdx);
                    var bottomRoutes = allRoutes.slice(topRoutesCutIdx);
                    var sorter = function (a, b) { return (+a.shortName) - (+b.shortName); };
                    return topRoutes.sort(sorter).concat(bottomRoutes.sort(sorter));
                }
                return Array.from(resultSet).sort(function (a, b) {
                    if (a.itemType === "route" && b.itemType === "route") {
                        return (+b.trips) - (+a.trips);
                    }
                    else if (a.itemType === "stop" && b.itemType === "stop") {
                        return (a.names[0]).localeCompare(b.names[0]);
                    }
                    else if (a.itemType === "route" && b.itemType === "stop") {
                        return (matchers.length > 1) ? 1 : -1;
                    }
                    else {
                        return (matchers.length > 1) ? -1 : 1;
                    }
                });
            });
        };
        // QuerySearchIndex is the main entrypoint for searching the index.
        OnlineSearchIndex.prototype.QuerySearchIndex = function (query, itemType) {
            var _this = this;
            if (debug_stats) {
                console.time('Querying index');
            }
            if (query === "") {
                if (this.ROUTES_PRE_QUERY === null) {
                    return this.QueryTrieIndex("", "route").then(function (index) {
                        _this.ROUTES_PRE_QUERY = index;
                        return _this.ROUTES_PRE_QUERY;
                    });
                }
            }
            // const result = QuerySearchIndexReal(query);
            var result = (query === "") ? Promise.resolve(this.ROUTES_PRE_QUERY) : this.QueryTrieIndex(query, itemType);
            if (debug_stats) {
                console.timeEnd('Querying index');
            }
            return (query !== "") ? result.then(function (index) { return index.slice(0, 10); }) : result;
        };
        return OnlineSearchIndex;
    }());
    exports.OnlineSearchIndex = OnlineSearchIndex;
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    // This knockout binding handler exposes the "placeholder" attribute on an input field
    var PlaceholderBindingHandler = /** @class */ (function () {
        function PlaceholderBindingHandler() {
        }
        PlaceholderBindingHandler.prototype.init = function (element, valueAccessor, allBindingsAccessor) {
            var underlyingObservable = valueAccessor();
            ko.applyBindingsToNode(element, { attr: { placeholder: underlyingObservable } });
        };
        return PlaceholderBindingHandler;
    }());
    exports.PlaceholderBindingHandler = PlaceholderBindingHandler;
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(4)], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, RouteData_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var StopSummary = /** @class */ (function () {
        function StopSummary() {
        }
        return StopSummary;
    }());
    exports.StopSummary = StopSummary;
    function checkStopNameMatch(a, b) {
        if (a === b) {
            return true;
        }
        var aSplit = a.split(/\s*[@&]\s*/);
        var bSplit = b.split(/\s*[@&]\s*/);
        return (aSplit[0] === bSplit[1] && aSplit[1] === bSplit[0]);
    }
    function xferRouteAccess(xferRaw, thisRoute) {
        return function () {
            return Array.from(xferRaw.values()).filter(function (id) { return id !== thisRoute; })
                .sort(function (a, b) { return +(a) - +(b); });
        };
    }
    function pushStopDataToSummary(summary, stop, distAlongTrip, direction_id, thisRoute) {
        var last = summary[summary.length - 1];
        if (last && checkStopNameMatch(last.stop_name, stop.stop_name)) {
            if (last.direction_id !== direction_id) {
                last.isUTurn = true;
            }
            else {
                stop.relatedRoutesArray.forEach(function (tr) { return last.xferRouteData.add(tr.shortName); });
                last.distAlongTrip = Math.min(last.direction_id, distAlongTrip);
                last.stop_codes.push(stop.stop_code);
            }
        }
        else {
            var isStart = (!last);
            var xferRoutes = new Set(stop.relatedRoutesArray
                .map(function (tr) { return tr.shortName; }));
            var location_1 = stop.coordinates;
            var stopSummary = {
                stop_name: stop.stop_name,
                stop_codes: [stop.stop_code],
                xferRouteData: xferRoutes,
                transferRoutes: xferRouteAccess(xferRoutes, thisRoute),
                distAlongTrip: distAlongTrip,
                direction_id: direction_id,
                isStart: isStart,
                isEnd: true,
                isUTurn: false,
                coordinates: { lng: location_1[0], lat: location_1[1] }
            };
            if (last) {
                last.isEnd = false;
            }
            summary.push(stopSummary);
        }
    }
    function genStopClickHandler(viewModel, stopCode) {
        return function () {
            viewModel.onLoadStop(stopCode);
            d3.event.preventDefault();
            return false;
        };
    }
    function genRouteClickHandler(viewModel, routeID) {
        return function () {
            viewModel.onLoadRoute(routeID);
            d3.event.preventDefault();
            return false;
        };
    }
    function pinClickHandler(coordinates, element) {
        return function () {
            if (document.getElementById) {
                var mapElement = document.getElementById('google-map');
                console.assert(!!mapElement, "missing google map element");
                if (mapElement) {
                    var map = mapElement.map;
                    console.assert(!!map, 'missing google map');
                    if (!element.pinClickMarker) {
                        var marker_1 = new google.maps.Marker({
                            position: coordinates,
                            animation: google.maps.Animation.BOUNCE,
                        });
                        element.pinClickMarker = marker_1;
                        marker_1.addListener('click', function () { marker_1.setMap(null); });
                    }
                    var marker_2 = element.pinClickMarker;
                    marker_2.setPosition(coordinates);
                    marker_2.setAnimation(google.maps.Animation.BOUNCE);
                    marker_2.setMap(map);
                    map.panTo(coordinates);
                    map.setZoom(17);
                    window.setTimeout(function () { return marker_2.setAnimation(null); }, 1500);
                    // window.setTimeout(() => marker.setMap(null), 10000);
                }
            }
        };
    }
    var RouteDiagramBindingHandler = /** @class */ (function () {
        function RouteDiagramBindingHandler() {
        }
        RouteDiagramBindingHandler.prototype.init = function (element, valueAccessor, allBindings, viewModel, bindingContext) { };
        RouteDiagramBindingHandler.prototype.update = function (element, valueAccessor, allBindings, viewModel, bindingContext) {
            var route = ko.utils.unwrapObservable(valueAccessor());
            (element).route = route; // make sure route date is updated on element!
            if (!(route instanceof RouteData_1.RouteData)) {
                return;
            }
            var scheduleKey = 'weekday'; // gtfsUtil.getScheduleKey();
            var obTrip = route.getLongestTrip(scheduleKey, 0);
            var ibTrip = route.getLongestTrip(scheduleKey, 1);
            var obStops = (obTrip) ? obTrip.stops.map(function (stop, idx) { return ({ stop: stop, dist: obTrip.distTraveled[idx] }); }) : [];
            var ibStops = (ibTrip) ? ibTrip.stops.map(function (stop, idx) { return ({ stop: stop, dist: ibTrip.distTraveled[idx] }); }) : [];
            var stopSummary = [];
            obStops.forEach(function (s) { return pushStopDataToSummary(stopSummary, s.stop, s.dist, 0, route.shortName); });
            ibStops.forEach(function (s) { return pushStopDataToSummary(stopSummary, s.stop, s.dist, 1, route.shortName); });
            // This function, appended to `element`, is used by the live data vechile
            // position binding handler to localize vehicles along the displayed route diagram
            // 
            // returns: a number representing the fractional distance relative to the number
            // displayed stops in the route diagram.
            var localizePointOnCombinedRoute = function (coords, direction_id) {
                // localize specified point along the trip SHAPE
                var trip = (direction_id === 0) ? obTrip : ibTrip;
                var shape = trip.shape;
                var _a = shape.localizeDistance(coords), distAlongShape = _a[0], pointAlongShape = _a[1];
                // correlate prev. calculated distance to fractional distance along displayed route diagram
                var stopSummaryIdx = stopSummary.findIndex(function (stop) { return (stop.direction_id === direction_id) && (stop.distAlongTrip > distAlongShape); }) - 1;
                if (0 <= stopSummaryIdx && stopSummaryIdx < stopSummary.length) {
                    var stopAdist = stopSummary[stopSummaryIdx].distAlongTrip;
                    var stopBdist = stopSummary[stopSummaryIdx + 1].distAlongTrip;
                    var fractionalDist = ((distAlongShape - stopAdist) / (stopBdist - stopAdist));
                    var fractionalStopNumber = stopSummaryIdx + fractionalDist;
                    return fractionalStopNumber;
                }
                return -1;
            };
            element.localizePointOnCombinedRoute = localizePointOnCombinedRoute;
            var lastObStop = obStops[obStops.length - 1];
            var firstIbStop = ibStops[0];
            var directUTurn = (obTrip && ibTrip) && (lastObStop.stop.stop_name === firstIbStop.stop.stop_name);
            var getStopIconClass = function (summary, xferLen) {
                if (summary.isUTurn) {
                    return 'rd-icon primary-secondary-join-stop';
                }
                if (summary.isStart) {
                    return (summary.direction_id === 0) ? 'rd-icon primary-start' : 'rd-icon secondary-start';
                }
                if (summary.isEnd) {
                    return (summary.direction_id === 0) ? 'rd-icon primary-end' : 'rd-icon secondary-end';
                }
                if (xferLen > 0) {
                    return (summary.direction_id === 0) ? 'rd-icon primary-transfer-stop' : 'rd-icon secondary-transfer-stop';
                }
                return (summary.direction_id === 0) ? 'rd-icon primary-middle-stop' : 'rd-icon secondary-middle-stop';
            };
            var rdList = d3.select(element)
                .selectAll('.rd-stop')
                .data(stopSummary);
            // EXIT rdList Items
            rdList.exit().remove();
            // UPDATE rdList Items
            rdList.each(function (stop, idx) {
                var rdStop = d3.select(this);
                var transfers = stop.transferRoutes();
                var stopClickHandler = genStopClickHandler(viewModel, stop.stop_codes[0]);
                var stopName = rdStop.select('.rd-stop-name')
                    .text(function (stop) { return stop.stop_name; })
                    .on('click', stopClickHandler);
                var stopCode = rdStop.select('.rd-stop-code')
                    .text(function (stop) { return stop.stop_codes.join(', '); })
                    .on('click', stopClickHandler);
                var rdStopPin = rdStop.select('.rd-stop-pin')
                    .on('click', pinClickHandler(stop.coordinates, element));
                var rdTransfers = rdStop.select('.rd-transfers').selectAll('li').data(transfers);
                rdTransfers.exit().remove();
                rdTransfers.select('a').text(function (d) { return d; })
                    .attr('href', function (d) { return '?route=' + encodeURIComponent(d); })
                    .on('click', function (d) { return genRouteClickHandler(viewModel, d)(); });
                rdTransfers.enter().append('li').append('a')
                    .attr('href', function (d) { return '?route=' + encodeURIComponent(d); })
                    .attr('class', 'route-id x-mini')
                    .text(function (d) { return d; })
                    .on('click', function (d) { return genRouteClickHandler(viewModel, d)(); });
                var iconContainer = rdStop.select('.rd-icon-container');
                var icon = iconContainer.select('.rd-icon')
                    .attr('class', function () { return getStopIconClass(stop, transfers.length); });
            });
            // ENTER rdListItems
            rdList.enter().append('li')
                .attr('class', 'rd-stop')
                .each(function (stop, idx) {
                var rdStop = d3.select(this);
                var transfers = stop.transferRoutes();
                var stopClickHandler = genStopClickHandler(viewModel, stop.stop_codes[0]);
                var stopDetailsContainer = rdStop.append('div').attr('class', 'rd-stop-details-container');
                var stopDetails = stopDetailsContainer.append('div').attr('class', 'rd-stop-details');
                var stopName = stopDetails.append('a')
                    .attr('class', 'rd-stop-name')
                    .attr('href', '#')
                    .text(function (stop) { return stop.stop_name; })
                    .on('click', stopClickHandler);
                var stopCode = stopDetails.append('a')
                    .attr('class', 'rd-stop-code')
                    .attr('href', '#')
                    .text(function (stop) { return stop.stop_codes.join(', '); })
                    .on('click', stopClickHandler);
                var rdStopPin = stopDetailsContainer.append('i')
                    .attr('class', 'rd-stop-pin')
                    .on('click', pinClickHandler(stop.coordinates, element));
                var rdTransfers = stopDetailsContainer.append('ul')
                    .attr('class', 'rd-transfers')
                    .selectAll('li').data(transfers);
                rdTransfers.exit().remove();
                rdTransfers.select('a')
                    .attr('href', function (d) { return '?route=' + encodeURIComponent(d); })
                    .text(function (d) { return d; })
                    .on('click', function (d) { return genRouteClickHandler(viewModel, d)(); });
                rdTransfers.enter().append('li')
                    .append('a')
                    .attr('href', function (d) { return '?route=' + encodeURIComponent(d); })
                    .attr('class', 'route-id x-mini')
                    .text(function (d) { return d; })
                    .on('click', function (d) { return genRouteClickHandler(viewModel, d)(); });
                var iconContainer = rdStop.append('div')
                    .attr('class', 'rd-icon-container');
                var icon = iconContainer.append('i')
                    .attr('class', function () { return getStopIconClass(stop, transfers.length); });
                var busIcon = rdStop.append('div')
                    .attr('class', 'rd-bus-icon');
            });
        };
        return RouteDiagramBindingHandler;
    }());
    exports.RouteDiagramBindingHandler = RouteDiagramBindingHandler;
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(4)], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, RouteData_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var RouteDiagramLiveDataBindingHandler = /** @class */ (function () {
        function RouteDiagramLiveDataBindingHandler() {
        }
        RouteDiagramLiveDataBindingHandler.prototype.init = function (element, valueAccessor, allBindings, viewModel, bindingContext) {
            // nothing to do here
        };
        RouteDiagramLiveDataBindingHandler.prototype.update = function (element, valueAccessor, allBindings, viewModel, bindingContext) {
            var liveData = ko.utils.unwrapObservable(valueAccessor());
            if (!(liveData instanceof Array)) {
                if (debug_level && debug_level >= 1) {
                    console.assert(!!liveData, "RouteDiagramLiveDataBindingHandler::update liveData is undefined");
                }
                return;
            }
            var routeData = allBindings.get('routeDiagram')();
            if (!(routeData instanceof RouteData_1.RouteData)) {
                if (debug_level && debug_level >= 1) {
                    console.assert(!!liveData, "RouteDiagramLiveDataBindingHandler::update routeData is undefined");
                }
                return;
            }
            var localizer = element.localizePointOnCombinedRoute;
            if (!localizer) {
                console.log('route diagram localizer not found');
                return;
            }
            var routeID = routeData.shortName;
            var busList = [];
            liveData.forEach(function (ld) {
                if (ld.route === routeID) {
                    ld.vehicles.forEach(function (vehicle) {
                        if (vehicle.position.isOnRoute && !vehicle.position.isVirtual) {
                            var bus = {
                                id: vehicle.description.id,
                                coords: [vehicle.position.longitude, vehicle.position.latitude],
                                direction_id: vehicle.trip.direction_id,
                                isVirtual: vehicle.position.isVirtual || false,
                                nextStop: vehicle.nextStopName,
                                fractionalDiagramIdx: -1
                            };
                            busList.push(bus);
                        }
                    });
                }
            });
            busList.forEach(function (bus) {
                // ref: RouteDiagramBindingHandler::update::localizePointOnCombinedRoute for definition of localizer
                bus.fractionalDiagramIdx = localizer(bus.coords, bus.direction_id);
            });
            d3.select('.rd-bus-count').text(busList.length);
            // console.log(busList.map(b => JSON.stringify({ ns: b.nextStop, idx: b.fractionalDiagramIdx })));
            var rdList = d3.select(element)
                .selectAll('.rd-stop');
            rdList.each(function (datum, idx) {
                var rdItem = d3.select(this);
                var busIcon = rdItem.select('.rd-bus-icon');
                var idx_ = idx + 0.00000001;
                var busIdx = busList.findIndex(function (b) { return (idx_ <= b.fractionalDiagramIdx) && (b.fractionalDiagramIdx < (idx_ + 1)); });
                var bus = (busIdx >= 0) ? busList[busIdx] : null;
                if (busIdx < 0) {
                    busIcon.attr('class', 'rd-bus-icon')
                        .style('margin-top', null)
                        .on('click', null);
                }
                else {
                    var fractionalDist = (bus.fractionalDiagramIdx - Math.floor(bus.fractionalDiagramIdx));
                    var fdx = Math.ceil(fractionalDist / 0.2) * 0.2;
                    busIcon.classed('ob', bus.direction_id === 0)
                        .classed('ib', bus.direction_id === 1)
                        .classed('scheduled', bus.isVirtual)
                        .style('margin-top', (fdx * 48) + 'px')
                        .on('click', null)
                        .on('click', function () {
                        if (document.getElementById) {
                            var mapElement = document.getElementById('google-map');
                            console.assert(!!mapElement, "missing google map element");
                            var coords = { lng: bus.coords[0], lat: bus.coords[1] };
                            if (mapElement) {
                                var map = mapElement.map;
                                console.assert(!!map, 'missing google map');
                                map.panTo(coords);
                                map.setZoom(16);
                            }
                        }
                    });
                }
            });
        };
        return RouteDiagramLiveDataBindingHandler;
    }());
    exports.RouteDiagramLiveDataBindingHandler = RouteDiagramLiveDataBindingHandler;
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(14)], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, stop_data_service_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function getMapElement() {
        return document.getElementById("stop-view-map-area");
    }
    function initMapArea(stopData) {
        var mapElement = getMapElement();
        if (!mapElement) {
            return;
        }
        if (!mapElement.map) {
            var geoLonLat = stopData.related_stop_centroid.coordinates;
            var geoCenter = new google.maps.LatLng(geoLonLat[1], geoLonLat[0]);
            var mapOptions = {
                center: geoCenter,
                zoom: 17
            };
            mapElement.map = new google.maps.Map(mapElement, mapOptions);
        }
        if (!mapElement.routePaths) {
            mapElement.routePaths = [];
        }
        if (!mapElement.stopMarkers) {
            mapElement.stopMarkers = [];
        }
        return mapElement.map;
    }
    var StopViewBindingHandler = /** @class */ (function () {
        function StopViewBindingHandler() {
        }
        StopViewBindingHandler.prototype.init = function (element, valueAccessor, allBindings, viewModel, bindingContext) {
            var stopData = ko.utils.unwrapObservable(valueAccessor());
            if (!(stopData instanceof stop_data_service_1.StopData)) {
                return;
            }
        };
        StopViewBindingHandler.prototype.update = function (element, valueAccessor, allBindings, viewModel, bindingContext) {
            var stopData = ko.utils.unwrapObservable(valueAccessor());
            if (!stopData || !(stopData instanceof stop_data_service_1.StopData)) {
                console.assert(false, "Invalid or missing stopData");
                return;
            }
            var mapElement = getMapElement();
            console.assert(!!mapElement, "missing stop-view-map-area DIV");
            var map = initMapArea(stopData);
            console.assert(!!map, "missing map data");
            if (!map || !mapElement) {
                return;
            }
            var stopCodeData = stopData.relatedStopsArray().map(function (stop) { return ({ stop_code: stop.stop_code, coordinates: stop.coordinates }); });
            var markers = mapElement.stopMarkers;
            // remove old markers
            var numberToRemove = (markers.length - stopCodeData.length);
            if (stopCodeData.length < markers.length) {
                for (var idx = 0; idx < numberToRemove; idx++) {
                    var marker = markers.pop();
                    marker.setMap(null);
                }
            }
            // update existing markers
            var stopCodeDataIdx = 0;
            for (var idx = 0; idx < markers.length; idx++) {
                var stopCode = stopCodeData[stopCodeDataIdx++];
                var marker = markers[idx];
                var coords = stopCode.coordinates;
                var markerLabel = marker.getLabel();
                markerLabel.text = stopCode.stop_code;
                marker.setLabel(markerLabel);
                marker.setPosition(new google.maps.LatLng(coords[1], coords[0]));
            }
            for (var idx = markers.length; idx < stopCodeData.length; idx++) {
                var stopCode = stopCodeData[stopCodeDataIdx++];
                var coords = stopCode.coordinates;
                var markerOptions = {
                    position: new google.maps.LatLng(coords[1], coords[0]),
                    label: { color: "white", fontSize: "0.9em", fontWeight: "bold", text: stopCode.stop_code },
                    icon: {
                        path: "m -19.498047,-23.380859 0,16.6113278 12.1777345,0 7.32617188,7.06445308 7.32226562,-7.06445308 12.177734,0 0,-16.6113278 z",
                        fillColor: '#209224',
                        fillOpacity: 1.0,
                        strokeColor: 'black',
                        strokeWeight: 1,
                        strokeOpacity: 1.0,
                        labelOrigin: new google.maps.Point(0, -15)
                    },
                };
                var marker = new google.maps.Marker(markerOptions);
                marker.setMap(map);
                markers.push(marker);
            }
            var bounds = new google.maps.LatLngBounds();
            stopCodeData.forEach(function (sc) { return bounds.extend({ lat: sc.coordinates[1], lng: sc.coordinates[0] }); });
            map.fitBounds(bounds);
            map.panToBounds(bounds);
            var listener = google.maps.event.addListener(map, "idle", function () {
                map.setZoom(Math.min(17, map.getZoom()));
                google.maps.event.removeListener(listener);
            });
            // const geoLonLat = stopData.related_stop_centroid.coordinates;
            // const geoCenter = new google.maps.LatLng(geoLonLat[1], geoLonLat[0]);
            // map.panTo(geoCenter);
        };
        return StopViewBindingHandler;
    }());
    exports.StopViewBindingHandler = StopViewBindingHandler;
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(0), __webpack_require__(1)], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, util, d3) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var TIME_TO_STOP_UPPER_LIMIT_SECONDS = 60 * 60 * 12;
    var SECONDS_ARRIVED_THRESHOLD = 15;
    var MINUTES_SOON_THRESHOLD = 3;
    var ROUND_MINUTES = 5;
    var ROUND_FUNC = Math.floor;
    function prettyFormatSeconds(seconds) {
        if (seconds < 0) {
            return '-';
        }
        var minutes = seconds / 60;
        var roundMinutes = Math.max(MINUTES_SOON_THRESHOLD, ROUND_FUNC(minutes / ROUND_MINUTES) * ROUND_MINUTES);
        return (minutes >= MINUTES_SOON_THRESHOLD) ?
            (minutes > 60) ?
                Math.floor(minutes / 60) + 'h ' + Math.floor(minutes % 60) + 'm'
                : roundMinutes + " min"
            : (seconds > SECONDS_ARRIVED_THRESHOLD) ? "NEXT" : "ARRIVED";
        // return roundMinutes + " min";
    }
    var STOPTIME_COLOR_SCALE = d3.scaleThreshold()
        .domain([0, 5 * 60, 15 * 60, 15 * 60 + 1])
        .range(['#990000', '#66cc00', '#ff9900', '#809fff', '#809fff']);
    var StopViewLiveDataBindingHandler = /** @class */ (function () {
        function StopViewLiveDataBindingHandler() {
        }
        StopViewLiveDataBindingHandler.prototype.init = function (element, valueAccessor, allBindings, viewModel, bindingContext) {
            // nothing to do here
        };
        StopViewLiveDataBindingHandler.prototype.update = function (element, valueAccessor, allBindings, viewModel, bindingContext) {
            var stopData = allBindings.get('stopView')();
            var liveData = ko.utils.unwrapObservable(valueAccessor());
            if (!(liveData instanceof Array)) {
                if (debug_level && debug_level >= 1) {
                    console.assert(!!liveData, "StopViewLiveDataBindingHandler::update liveData is undefined");
                }
                return;
            }
            if (!stopData) {
                if (debug_level && debug_level >= 1) {
                    console.assert(!!stopData, "StopViewLiveDataBindingHandler::update liveData is undefined");
                }
                return;
            }
            var stop_codes = stopData.stop_codes.map(function (sc) { return sc.toString(); });
            function findMatchingStopIndex(stops) {
                return stops.findIndex(function (stop) { return (stop_codes.findIndex(function (sc) { return sc === stop.stop_code; }) >= 0); });
            }
            function findMatchingStopCode(stops) {
                var stopIndex = findMatchingStopIndex(stops);
                return (stopIndex >= 0) ? stops[stopIndex].stop_code : '';
            }
            function timeToMatchingStop(vehicle) {
                if (!vehicle.trip || !vehicle.trip.tripData) {
                    return Number.POSITIVE_INFINITY;
                }
                var tripTime = (vehicle.trip.tripData.arrivalTimes[findMatchingStopIndex(vehicle.trip.tripData.stops)] - vehicle.timeAlongRoute);
                var scheduleOffset = (vehicle.position.isVirtual) ? vehicle.trip.tripData.startTime - vehicle.timestamp_seconds : 0;
                return tripTime + scheduleOffset;
            }
            //accesssors 
            var getTimeUntilStop = function (vehicle) {
                var timeToStop = timeToMatchingStop(vehicle);
                var estTime = prettyFormatSeconds(timeToStop);
                return estTime;
            };
            var getRouteDescription = function (vehicle) {
                var vehID = (vehicle.position.isVirtual) ? "scheduled" : ("#" + vehicle.description.id);
                var tripData = vehicle.trip.tripData;
                var stops = tripData.stops;
                var finalDest = stops[stops.length - 1].stop_name;
                var tripDirection = (!!tripData.tripDirection) ? tripData.tripDirection() + "bound" : "?";
                var routeName = tripData.route.longName;
                return tripDirection + " to " + finalDest + " via " + routeName;
            };
            function rollUpLiveData(liveData) {
                var rollUpSummary = {};
                var genKey = function (vehicle) { return vehicle.route + vehicle.trip.direction_id.toString(); };
                liveData.forEach(function (ld) {
                    ld.vehicles.forEach(function (vehicle) {
                        if (vehicle.position.isOnRoute || vehicle.position.isVirtual) {
                            var key = genKey(vehicle);
                            var entryDetails = {
                                estTime: timeToMatchingStop(vehicle),
                                isVirtual: vehicle.position.isVirtual || false,
                                isOnRoute: vehicle.position.isOnRoute,
                                id: vehicle.description.id
                            };
                            if (entryDetails.estTime >= 0) {
                                if (!rollUpSummary.hasOwnProperty(key)) {
                                    rollUpSummary[key] = {
                                        route: ld.route,
                                        dest: getRouteDescription(vehicle),
                                        stop: findMatchingStopCode(vehicle.trip.tripData.stops),
                                        entries: [entryDetails]
                                    };
                                }
                                else {
                                    var entry = rollUpSummary[key].entries.push(entryDetails);
                                }
                            }
                        }
                    });
                });
                var unindexed = util.Unindex(rollUpSummary);
                unindexed.forEach(function (vs) {
                    vs.entries = vs.entries.sort(function (a, b) { return a.estTime - b.estTime; });
                    vs.entries.push({
                        estTime: -1,
                        isOnRoute: false,
                        isVirtual: true,
                        id: ''
                    });
                });
                return unindexed.sort(function (a, b) { return +(a.route) - +(b.route); });
            }
            var flatVechileData = rollUpLiveData(liveData);
            if (flatVechileData.length === 0) {
                var emptyDetail = { estTime: -1, id: '', isOnRoute: true, isVirtual: true };
                flatVechileData.push({
                    dest: "No Schedule",
                    route: '',
                    stop: '',
                    entries: [emptyDetail, emptyDetail]
                });
            }
            var TTIME = 50;
            var busListRow = d3.select(element)
                .select('#live-bus-table')
                .select('tbody')
                .selectAll('tr')
                .data(flatVechileData);
            // EXIT old elements
            busListRow.exit()
                .remove();
            // UPDATE remaining elements
            // update rows
            busListRow.each(function (d, i, n) {
                var row = d3.select(this);
                row.select('.stop-view-route-number').text(d.route.toString());
                var destSelection = row.select('.stop-view-bus-destination');
                var oldDestText = destSelection.text();
                var newDestText = d.dest;
                destSelection.text(d.dest);
                row.select('.stop-code').text(d.stop);
                row.selectAll('.stop-view-est-time').data(function (d) { return d.entries; }).each(function (d, idx) {
                    var element = d3.select(this);
                    var estTimeElement = element.select('.est-time').classed('is-scheduled', d.isVirtual);
                    var currentEstTime = estTimeElement.text();
                    var newEstTime = prettyFormatSeconds(d.estTime);
                    // if (true || (oldDestText !== newDestText) || (currentEstTime !== newEstTime)) {
                    //     estTimeElement.transition();
                    //     (<any>estTimeElement.transition().duration(TTIME).style('opacity', 0)).on("end", () =>
                    //         estTimeElement.text(newEstTime)
                    //             .transition().duration(TTIME).style('opacity', 1)
                    //     )
                    // } 
                    estTimeElement.text(newEstTime);
                    element.select('.tooltip').text(d.id);
                });
            });
            // CREATE new elements
            var busListRowEnter = busListRow.enter()
                .append('tr')
                .classed('stop-view-bus-item', true)
                .each(function (d, i, n) {
                var row = d3.select(this);
                row.append('td').append('span').attr('class', 'bus-icon-blue-24');
                row.append('td').text(d.route).attr('class', 'stop-view-route-number');
                row.append('td').text(d.dest).attr('class', 'stop-view-bus-destination');
                row.append('td').append('span').attr('class', 'stop-code').text(d.stop);
                d.entries.slice(0, 2).forEach(function (entry) {
                    var estTimeElement = row.append('td').attr('class', 'stop-view-est-time');
                    estTimeElement.append('span')
                        .text(prettyFormatSeconds(entry.estTime))
                        .attr('class', 'est-time')
                        .classed('is-scheduled', entry.isVirtual);
                    estTimeElement.append('span')
                        .text(entry.id)
                        .attr('class', 'tooltip');
                });
            });
        };
        return StopViewLiveDataBindingHandler;
    }());
    exports.StopViewLiveDataBindingHandler = StopViewLiveDataBindingHandler;
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */
/***/ (function(module, exports) {

module.exports = ko;

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(28), __webpack_require__(5), __webpack_require__(6), __webpack_require__(8), __webpack_require__(14), __webpack_require__(4), __webpack_require__(17), __webpack_require__(19), __webpack_require__(16), __webpack_require__(22), __webpack_require__(23), __webpack_require__(20), __webpack_require__(21), __webpack_require__(18), __webpack_require__(11), __webpack_require__(15), __webpack_require__(12), __webpack_require__(10), __webpack_require__(0), __webpack_require__(2)], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, ko, route_data_service_1, route_index_service_1, route_live_data_service_1, stop_data_service_1, RouteData_1, GoogleMapsRouteMapBindingHandler_1, PlaceholderBindingHandler_1, GoogleMapsLiveDataBindingHandler_1, StopViewBindingHandler_1, StopViewLiveDataBindingHandler_1, RouteDiagramBindingHandler_1, RouteDiagramLiveDataBindingHandler_1, OnlineSearchIndex_1, LiveDataTripCorrelator_1, BrowserHistoryManager_1, VirtualVehicleGenerator_1, LiveDataPropertyEnhancer_1, util, gtfs_util) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    // End Global Declarations
    /// Temporary Exports to Window
    window.RouteIndexService = route_index_service_1.RouteIndexService;
    window.RouteDataService = route_data_service_1.RouteDataService;
    window.RouteLiveDataService = route_live_data_service_1.ABQRouteLiveDataService;
    window.StopDataService = stop_data_service_1.StopDataService;
    window.util = util;
    window.gtfs_util = gtfs_util;
    /// END: Temporary Exports to Window
    // Initialize KO binding handlers
    ko.bindingHandlers.placeholder = new PlaceholderBindingHandler_1.PlaceholderBindingHandler();
    ko.bindingHandlers.routeMapGoogle = new GoogleMapsRouteMapBindingHandler_1.GoogleMapsRouteMapBindingHandler();
    ko.bindingHandlers.googleMapsliveData = new GoogleMapsLiveDataBindingHandler_1.GoogleMapsLiveDataBindingHandler();
    ko.bindingHandlers.stopView = new StopViewBindingHandler_1.StopViewBindingHandler();
    ko.bindingHandlers.stopViewLiveData = new StopViewLiveDataBindingHandler_1.StopViewLiveDataBindingHandler();
    ko.bindingHandlers.routeDiagram = new RouteDiagramBindingHandler_1.RouteDiagramBindingHandler();
    ko.bindingHandlers.routeDiagramLiveData = new RouteDiagramLiveDataBindingHandler_1.RouteDiagramLiveDataBindingHandler();
    // Constants
    var SEARCH_PLACEHOLDER = 'search for route or stop ...';
    var IndexViewModel = /** @class */ (function () {
        function IndexViewModel() {
            var _this = this;
            this.routeDataService = route_data_service_1.RouteDataService.getInstance(agency);
            this.stopDataService = stop_data_service_1.StopDataService.getInstance(agency);
            this.queryResults = ko.observableArray([]);
            this.selectedQueryItemNumber = ko.observable(null);
            this.searchQuery = ko.observable('').extend({ rateLimit: { timeout: 200, method: "notifyWhenChangesStop" } });
            ;
            this.searchQuery.subscribe(this.onRefreshQuery, this);
            this.searchResult = ko.observable();
            this.searchPlaceholder = ko.observable(SEARCH_PLACEHOLDER);
            this.showSlide = ko.observable(false);
            this.showRelatedBuses = ko.observable(false);
            this.slideInHeaderTemplate = ko.pureComputed(function () { return _this.getSlideInHeaderTemplate(_this.searchResult()); }, this);
            this.slideInContentTemplate = ko.pureComputed(function () { return _this.getSlideInContentTemplate(_this.searchResult()); }, this);
            this.mapAreaTemplate = ko.pureComputed(function () { return _this.getMapAreaTemplate(_this.searchResult()); }, this);
            this.onlineSearchIndex = new OnlineSearchIndex_1.OnlineSearchIndex(agency, route_index_service_1.RouteIndexService.getInstance());
            this.simpleRouteSearchList = ko.observableArray([]);
            this.onlineSearchIndex.QuerySearchIndex("").then(function (result) {
                _this.simpleRouteSearchList(result);
            });
            this.slideInHeaderTemplate.subscribe(function (s) { if (debug_level >= 3) {
                console.log(s);
            } ; });
            this.mapAreaTemplate.subscribe(function (s) { if (debug_level >= 3) {
                console.log(s);
            } ; });
            this.liveData = ko.observableArray([]).extend({ deferred: true });
            var virtualVehicleGenerator = new VirtualVehicleGenerator_1.VirtualVehicleGenerator(this.routeDataService);
            var tripCorrelator = new LiveDataTripCorrelator_1.LiveDataTripCorrelator(this.routeDataService);
            var liveDataPropertyEnhancer = new LiveDataPropertyEnhancer_1.LiveDataPropertyEnhancer();
            this.liveDataService = new route_live_data_service_1.ABQRouteLiveDataService();
            this.liveDataService.addListener(function (liveData) {
                return tripCorrelator.apply(liveData)
                    .then(function (liveData) { return virtualVehicleGenerator.apply(liveData, _this.liveDataService.getRoutes()); })
                    .then(function (liveData) { return liveDataPropertyEnhancer.apply(liveData); })
                    .then(function (liveData) { return _this.liveData(liveData); });
            });
            this.searchResult.subscribe(function (s) { if (debug_level >= 3) {
                console.log(s);
            } ; });
            this.browserHistoryManager = new BrowserHistoryManager_1.BrowserHistoryManager({
                onLoadRouteHandler: this.onLoadRoute,
                onLoadStopHandler: this.onLoadStop,
                onIndexHandler: this.onClearSearch
            }, this, window);
            this.browserHistoryManager.parseQueryString(window.location.search);
        }
        IndexViewModel.prototype.onRefreshQuery = function (newValue) {
            var _this = this;
            if (this.prevQuery == null || newValue !== this.prevQuery) {
                var queryResult = this.onlineSearchIndex.QuerySearchIndex(newValue || this.searchQuery());
                queryResult.then(function (result) { return _this.queryResults(result); });
                this.prevQuery = newValue;
            }
            return newValue;
        };
        IndexViewModel.prototype.onSearchQueryKD = function (d, e) {
            switch (e.keyCode) {
                case 13:// Enter
                    break;
                case 38:// Up Arrow
                    if (!this.selectedQueryItemNumber() === null) {
                        this.selectedQueryItemNumber(0);
                    }
                    else {
                        this.selectedQueryItemNumber(Math.max(0, this.selectedQueryItemNumber() - 1));
                    }
                    e.preventDefault();
                    break;
                case 40:// Down Arrow
                    if (this.selectedQueryItemNumber() === null) {
                        this.selectedQueryItemNumber(0);
                    }
                    else {
                        this.selectedQueryItemNumber(Math.min(this.queryResults().length - 1, this.selectedQueryItemNumber() + 1));
                    }
                    e.preventDefault();
                    break;
                default:
                    this.selectedQueryItemNumber(null);
                    break;
            }
            return true;
        };
        IndexViewModel.prototype.onToggleMenu = function () {
        };
        ;
        IndexViewModel.prototype.onPerformQuery = function () {
        };
        IndexViewModel.prototype.onClearQuery = function () {
            this.searchQuery('');
            this.searchPlaceholder(SEARCH_PLACEHOLDER);
            this.queryResults([]);
        };
        IndexViewModel.prototype.onClearSearch = function () {
            this.searchResult(null);
            this.onClearQuery();
        };
        IndexViewModel.prototype.onToggleSlide = function () {
            this.showSlide(!this.showSlide());
            // The following code checkes if there is a "google-map" element, 
            // and if so, triggers a resize event after a short delay.
            // This fixes an issue with the map when the slider is toggled in and out.
            // For transition timing, refer to mps-main.css :: .slide-in-container
            var mapElement = document.getElementById("google-map");
            var map = (mapElement && mapElement.map) ? mapElement.map : null;
            if (map) {
                window.setTimeout(function () { return google.maps.event.trigger(map, "resize"); }, 300);
            }
        };
        IndexViewModel.prototype.onLoadRoute = function (shortName) {
            var _this = this;
            this.browserHistoryManager.pushRouteState(shortName);
            this.showSlide(true);
            this.liveData([]); // reset live data
            this.routeDataService.getRoute(shortName, false).then(function (route) {
                _this.searchResult(route);
                _this.showSlide(true);
                _this.searchPlaceholder(route.shortName + " - " + route.longName);
                _this.liveDataService.setRoutes(_this.showRelatedBuses() ? route.relatedRouteNames : [route.shortName]);
                _this.liveDataService.setEnabled(true);
            });
            this.prevQuery = '';
            this.searchQuery('');
            this.queryResults([]);
        };
        IndexViewModel.prototype.onLoadStop = function (stopCode) {
            var _this = this;
            this.browserHistoryManager.pushStopCodeState(stopCode);
            this.stopDataService.getStopData(stopCode).then(function (stopData) {
                _this.searchResult(stopData);
                _this.showSlide(false);
                _this.searchPlaceholder(stopData.stop_names.join(', '));
                _this.liveDataService.setRoutes(stopData.relatedRouteNames);
                _this.liveDataService.setEnabled(true);
            });
            this.prevQuery = '';
            this.searchQuery('');
            this.queryResults([]);
        };
        IndexViewModel.prototype.getSlideInHeaderTemplate = function (data) {
            var dataType = typeof data;
            if (dataType === 'string') {
                return 'slide-in-header-template-STRING';
            }
            else if (data instanceof RouteData_1.RouteData) {
                return 'slide-in-header-template-ROUTE';
            }
            else if (data instanceof stop_data_service_1.StopData) {
                return 'slide-in-header-template-STOPDETAIL';
            }
            return 'slide-in-header-template-NONE';
        };
        IndexViewModel.prototype.getSlideInContentTemplate = function (data) {
            var dataType = typeof data;
            if (data instanceof RouteData_1.RouteData) {
                return 'slide-in-content-template-ROUTE';
            }
            else if (data instanceof stop_data_service_1.StopData) {
                return 'slide-in-content-template-NONE';
            }
            return 'slide-in-header-template-NONE';
        };
        IndexViewModel.prototype.getMapAreaTemplate = function (data) {
            var dataType = typeof data;
            if (google && google.maps && google.maps.Map && (data instanceof RouteData_1.RouteData)) {
                return 'map-area-template-ROUTEMAP';
            }
            else if (data instanceof stop_data_service_1.StopData) {
                return 'map-area-template-STOPDETAIL';
            }
            return 'map-area-template-NONE';
        };
        IndexViewModel.prototype.darkenCSSColor = function (color, brightness) {
            return util.darkenCSSColor(color, brightness);
        };
        return IndexViewModel;
    }());
    exports.IndexViewModel = IndexViewModel;
    var view_model = new IndexViewModel();
    window.view_model = view_model;
    ko.applyBindings(view_model);
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var BusIconImage = /** @class */ (function () {
        function BusIconImage(url, size, scaledSize) {
            this.url = url;
            this.size = new google.maps.Size(size, size);
            this.scaledSize = new google.maps.Size(scaledSize || size, scaledSize || size);
            this.origin = new google.maps.Point(0, 0);
            this.anchor = new google.maps.Point((scaledSize || size) / 2, (scaledSize || size) / 2);
            this.labelOrigin = new google.maps.Point((scaledSize || size) / 2, (scaledSize || size) * 1.33);
        }
        return BusIconImage;
    }());
    exports.BusIconArrowSVGPath = "M 4.9335938 -7.4042969 C 4.7141308 -7.4030237 4.5372283 -7.3758514 4.4101562 -7.3203125 C 2.3770034 -6.4316894 2.3770034 6.4316894 4.4101562 7.3203125 C 6.443309 8.2089355 21.158203 1.7772461 21.158203 0 C 21.158203 -1.6661683 8.2255383 -7.4233952 4.9335938 -7.4042969 z";
    var IMG_URL_ROOT = "/client/assets/image/";
    exports.BusImageGreen24 = new BusIconImage(IMG_URL_ROOT + 'bus_icon_green_48.png', 48, 24);
    exports.BusImageRed24 = new BusIconImage(IMG_URL_ROOT + 'bus_icon_red_48.png', 48, 24);
    exports.BusImageViolet24 = new BusIconImage(IMG_URL_ROOT + 'bus_icon_violet_48.png', 48, 24);
    exports.BusImageCyan24 = new BusIconImage(IMG_URL_ROOT + 'bus_icon_cyan_48.png', 48, 24);
    exports.BusImageGray24 = new BusIconImage(IMG_URL_ROOT + 'bus_icon_gray_48.png', 48, 24);
    exports.BusImageBlackTransparent24 = new BusIconImage(IMG_URL_ROOT + 'bus_icon_black_transparent_48.png', 48, 24);
    exports.BusImageOut24 = new BusIconImage(IMG_URL_ROOT + 'bus_icon_out_48.png', 48, 24);
    exports.MOVING_SPEED_CUTOFF = 2;
    exports.BUS_ON_ROUTE_BEARING_THRESHOLD = 120; //degrees
    exports.BUS_DISTANCE_FROM_ROUTE_TOLERANCE = 250; // GTFS distance units
    exports.MAIN_BUS_IMAGE = exports.BusImageRed24;
    exports.MAIN_BUS_IMAGE_INB = exports.BusImageCyan24;
    exports.OTHER_BUS_IMAGE = exports.BusImageGray24;
    exports.SCHEDULED_BUS_IMAGE = exports.BusImageViolet24;
    exports.OFF_ROUTE_BUS_IMAGE = exports.BusImageOut24;
    exports.MAIN_ARROW_COLOR = "#00e600";
    exports.MAIN_ARROW_COLOR_STOPPED = "#ff0066";
    exports.ALT_ARROW_COLOR = "gray";
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ })
/******/ ]);;
});