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
/******/ 	return __webpack_require__(__webpack_require__.s = 31);
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
    var TripStopIndex = (function () {
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
    var RouteData = (function () {
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
    var RouteDataService = (function () {
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
        return RouteDataService;
    }());
    RouteDataService.INSTANCE_CACHE = {};
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
    var RouteIndexService = (function () {
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
    var RouteLiveDataService = (function () {
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
    // Live data nextStop: "Central @ Yale (UNM) scheduled at 1:14 PM"
    var ABQ_NEXT_STOP_RE = /([\s\w\(\)\@\&\.\-\/']+)(?: @ )(\d\d?\:\d\d [aApP][mM])/;
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
    var ABQRouteLiveDataService = (function (_super) {
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
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(0)], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, util_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var RouteIndexGenerator = (function () {
        function RouteIndexGenerator() {
            this._routeID = '';
            this._linkGenerator = function (d) { return "routes.html?routeID=" + d.shortName; };
        }
        RouteIndexGenerator.prototype.update = function (context, self) {
            self = self ? self : this;
            var parentSelection = context.selection ? context.selection() : context;
            parentSelection.each(function (datum, index, nodes) {
                var selection = d3.select(this);
                var routeListItem = selection.selectAll('li').data(datum);
                var routeListItemEnter = routeListItem.enter().append('li').classed('route-list-item', true);
                var routeLink = routeListItem.selectAll('a');
                var routeLinkEnter = routeListItemEnter.append('a').classed('route-link', true);
                var routeId = routeLink.select(".route-link-id");
                var routeIdEnter = routeLinkEnter.append('span').classed('route-link-id', true);
                var routeName = routeListItem.select(".route-link-name");
                var routeNameEnter = routeLinkEnter.append('span').classed('route-link-name', true);
                routeListItem = routeListItemEnter.merge(routeListItem);
                routeListItem.exit().remove();
                routeLink = routeLinkEnter.merge(routeLink)
                    .attr('href', self._linkGenerator);
                routeId = routeIdEnter.merge(routeId)
                    .style('background-color', function (d) { return util_1.darkenCSSColor("#" + d.color, 0.75); })
                    .style('color', '#222')
                    .text(function (d) { return d.shortName; });
                routeName = routeNameEnter.merge(routeName)
                    .classed('active', function (d) { return d.shortName == self._routeID; })
                    .text(function (d) { return d.longName; });
            });
        };
        Object.defineProperty(RouteIndexGenerator.prototype, "activeRoute", {
            get: function () {
                return this._routeID;
            },
            set: function (value) {
                this._routeID = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(RouteIndexGenerator.prototype, "linkGenerator", {
            get: function () {
                return this._linkGenerator;
            },
            set: function (cb) {
                this._linkGenerator = cb;
            },
            enumerable: true,
            configurable: true
        });
        return RouteIndexGenerator;
    }());
    exports.RouteIndexGenerator = RouteIndexGenerator;
    var nameSort = function (a, b) {
        return (+a.shortName) - (+b.shortName);
    };
    function indentity(value) { return value; }
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(1)], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, d3) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function RouteMapGenerator() {
        var width = 800;
        var height = 350;
        var mapOrientation = 0;
        var liveDataLayer = null;
        var annotationsLayer = null;
        var projection = null;
        var northAngleDegUserSpace = 0;
        function routeMap(parentSelection) {
            parentSelection.each(function (datum, index, nodes) {
                var selection = d3.select(this);
                var route = datum;
                var svg = selection.select('svg');
                if (!svg.size()) {
                    svg = selection.append('svg');
                }
                svg.attr('width', width)
                    .attr('height', height)
                    .attr('viewBox', "0 0 " + width + " " + height)
                    .classed('img-responsive', true);
                var allShapes = route.getRepresentativeShape();
                var allShapesCentroid = d3.geoCentroid(allShapes);
                var longestTrip = route.getLongestTrip("weekday", 0);
                var bearing = route.data.bearing['outbound'];
                var northDirection = ((Math.round(bearing / 10) * 10 + 180 + (mapOrientation * 180)) % 180) + (90 + (mapOrientation * 90));
                northDirection += (northDirection > 90) ? 180 : 0;
                northDirection = 0;
                var padding = 20;
                projection = d3.geoMercator()
                    .rotate([-allShapesCentroid[0], -allShapesCentroid[1], northDirection])
                    .fitExtent([[padding, padding], [width - padding, height - padding]], allShapes);
                // TODO: REMOVE FOLLOWING LINE
                window.projection = projection;
                // find north
                var compassCenter = [100, 100];
                var compassCenterLonLat = projection.invert(compassCenter);
                var compassNorthLonLat = [compassCenterLonLat[0], compassCenterLonLat[1] - 0.1];
                var compassNorth = projection(compassNorthLonLat);
                northAngleDegUserSpace = (Math.atan2((compassNorth[1] - compassCenter[1]), (compassNorth[0] - compassCenter[0])) - Math.PI / 2) * (180 / Math.PI);
                var siblingRootPaths = svg.select('#sibling-routes');
                if (!siblingRootPaths.size()) {
                    siblingRootPaths = svg.append("g").attr('id', "sibling-routes");
                }
                var siblingRoutes = siblingRootPaths.selectAll('.sibling-route').data(route.siblingRoutes);
                siblingRoutes.exit().remove();
                siblingRoutes.enter()
                    .append("path")
                    .classed("sibling-route", true)
                    .datum(function (d) { return (d && d.getRepresentativeShape) ? d.getRepresentativeShape() : null; })
                    .attr("d", d3.geoPath().projection(projection))
                    .attr("fill", "none")
                    .attr("stroke", function (d) { return (d && d.routeColor) ? ("#" + d.routeColor) : "lightgray"; })
                    .attr("stroke-width", 6)
                    .attr("stroke-miterlimit", 4)
                    .attr("stroke-linecap", "round")
                    .attr("stroke-linejoin", "round");
                siblingRoutes
                    .datum(function (d) { return (d && d.getRepresentativeShape) ? d.getRepresentativeShape() : null; })
                    .attr("d", d3.geoPath().projection(projection))
                    .attr("stroke", function (d) { return (d && d.routeColor) ? ("#" + d.routeColor) : "lightgray"; })
                    .attr("fill", "none");
                var routePath = svg.select('.route-path');
                if (!routePath.size()) {
                    routePath = svg.append("path").classed('route-path', true);
                }
                routePath
                    .datum(allShapes)
                    .attr("d", d3.geoPath().projection(projection))
                    .attr("fill", "none")
                    .attr("stroke", "#" + route.data.routeColor)
                    .attr("stroke-width", 6)
                    .attr("stroke-miterlimit", 4)
                    .attr("stroke-linecap", "round")
                    .attr("stroke-linejoin", "round");
                var routePathOverlay = svg.select('.route-path-overlay');
                if (!routePathOverlay.size()) {
                    routePathOverlay = svg.append('path').classed('route-path-overlay', true);
                }
                routePathOverlay
                    .datum(allShapes)
                    .attr("d", d3.geoPath().projection(projection))
                    .attr("fill", "none")
                    .attr("stroke", "#" + route.data.routeTextColor)
                    .attr("stroke-width", 3.2)
                    .attr("stroke-miterlimit", 4)
                    .attr("stroke-linecap", "round")
                    .attr("stroke-linejoin", "round");
                var symb = d3.symbol(d3.symbolCircle).size(55);
                var otherStopsGroup = svg.select("#other-stops");
                if (!otherStopsGroup.size()) {
                    otherStopsGroup = svg.append("g").attr("id", "other-stops");
                }
                var unlabeledStops = route.getUnlabeledStopsAlongRoute();
                var otherStopsPaths = otherStopsGroup.selectAll(".other-stop").data(unlabeledStops);
                otherStopsPaths.exit().remove();
                otherStopsPaths
                    .attr('transform', function (d) {
                    var pt = projection(d.coordinates);
                    return "translate(" + pt[0] + " " + pt[1] + ")";
                });
                otherStopsPaths.enter()
                    .append('path')
                    .classed('other-stop', true)
                    .attr('d', symb)
                    .attr('fill', 'lightgray')
                    .attr('stroke', 'black')
                    .attr('stroke-width', 1.0)
                    .attr('transform', function (d) {
                    var pt = projection(d.coordinates);
                    return "translate(" + pt[0] + " " + pt[1] + ")";
                });
                liveDataLayer = svg.select('#live-data');
                if (!liveDataLayer.size()) {
                    liveDataLayer = svg.append("g").attr('id', 'live-data');
                }
                var labeledStopsGroup = svg.select("#labeled-stops");
                if (!labeledStopsGroup.size()) {
                    labeledStopsGroup = svg.append("g").attr('id', 'labeled-stops');
                }
                var labeledStops = route.getLabeledStopGeographies();
                var labeledStopsPaths = labeledStopsGroup.selectAll(".labeled-stop").data(labeledStops);
                labeledStopsPaths.exit().remove();
                labeledStopsPaths
                    .each(diamondLetter)
                    .attr('transform', function (d) {
                    var pt = projection(d.coordinates);
                    return "translate(" + pt[0] + " " + pt[1] + ")";
                });
                labeledStopsPaths.enter()
                    .append('g')
                    .classed('labeled-stop', true)
                    .attr('fill', 'black')
                    .attr('stroke', 'none')
                    .attr('stroke-width', 1.0)
                    .each(diamondLetter)
                    .attr('transform', function (d) {
                    var pt = projection(d.coordinates);
                    return "translate(" + pt[0] + " " + pt[1] + ")";
                });
                annotationsLayer = null;
                annotationsLayer = svg.select("#annotations-layer");
                if (!annotationsLayer.size()) {
                    annotationsLayer = svg.append("g").attr('id', 'annotations-layer');
                }
                annotationsLayer.append("g")
                    .attr('id', 'refresh-notifier')
                    .append('circle')
                    .attr('r', 10)
                    .attr('cx', 20)
                    .attr('cy', 20)
                    .attr('style', 'fill:red;stroke=none;')
                    .attr('opacity', 0);
            });
            return parentSelection;
        }
        routeMap.width = function (value) {
            if (!arguments.length)
                return width;
            width = value;
            return routeMap;
        };
        routeMap.height = function (value) {
            if (!arguments.length)
                return height;
            height = value;
            return routeMap;
        };
        routeMap.refreshLiveDataView = function (data, status) {
            try {
                if (liveDataLayer && projection) {
                    if (annotationsLayer) {
                        var t_1 = d3.transition()
                            .duration(7500)
                            .ease(d3.easeSinInOut);
                        annotationsLayer.select("#refresh-notifier circle")
                            .attr('opacity', 1)
                            .transition(t_1)
                            .attr('opacity', 0);
                    }
                    var parentSelection_1 = d3.select(liveDataLayer.node().parentNode);
                    var liveRouteLayers = liveDataLayer.selectAll('.live-route').data(data);
                    liveRouteLayers.exit().remove();
                    /// New vehicle layers and add vehicles
                    var newRouteLayers = liveRouteLayers.enter()
                        .append("g")
                        .classed('live-route', true)
                        .attr('id', function (d) { return d.route; });
                    /// New vehicles in new layers
                    var newVehiclesInNewRoutes = newRouteLayers.selectAll('.vehicle').data(function (d) { return d.vehicles; });
                    /// Update vechile layers
                    liveRouteLayers
                        .attr('id', function (d) { return d.route; });
                    /// New vehicles in existing layers
                    var vehiclesInExistingLayers = liveRouteLayers.selectAll('.vehicle').data(function (d) { return d.vehicles; });
                    vehiclesInExistingLayers.exit().remove();
                    var allNewVehicles = newVehiclesInNewRoutes
                        .data(function (d) { return d.vehicles; })
                        .enter()
                        .merge(vehiclesInExistingLayers.enter())
                        .append("g")
                        .classed("vehicle", true)
                        .classed("vehicle-other", function (d) { return d.description.label !== parentSelection_1.datum().shortName; })
                        .classed("enter", true)
                        .attr('data-tip', function (d) { return d.nextStop; })
                        .attr("id", function (d) { return d.description.id; })
                        .on("mouseover", console.log);
                    var newVechIconGroup = allNewVehicles.append("g")
                        .attr('transform', function (d) {
                        var pt = projection([d.position.longitude, d.position.latitude]);
                        return "translate( " + pt[0] + ", " + pt[1] + ")";
                    });
                    newVechIconGroup.append("g")
                        .classed("vech-icon-arrow", true)
                        .attr('transform', function (d) { return "rotate(" + (northAngleDegUserSpace + d.position.bearing) + ")"; })
                        .append("path")
                        .attr("fill", "#097ba9")
                        .attr("style", "stroke:none")
                        .attr("d", "m 9.6329638,-3.7403861 -9.6329638,0 -9.6329638,0 4.8164821,-7.2171669 L 0,-18.17472 l 4.8164817,7.217167 z");
                    newVechIconGroup.append("circle")
                        .attr("r", 10)
                        .attr("fill", "#0daded")
                        .attr("stroke", "#097ba9")
                        .attr("style", "stroke-width:3")
                        .classed("vech-icon-bg", true);
                    newVechIconGroup.append("text")
                        .classed("vech-icon-text", true)
                        .attr('fill', "white")
                        .attr('font-style', 'normal')
                        .attr('font-variant', 'normal')
                        .attr('font-weight', 'bold')
                        .attr('font-size', '12.1')
                        .attr('font-family', 'Arial')
                        .attr('style', "font-family:Arial;text-align:center;text-anchor:middle;stroke:none")
                        .attr('x', 0)
                        .attr('y', 4.1)
                        .append('tspan')
                        .attr('x', 0)
                        .attr('y', 4.1)
                        .text(function (d) { return d.description.label; });
                    var t = d3.transition().duration(750);
                    vehiclesInExistingLayers
                        .classed('enter', false)
                        .classed('update', true)
                        .attr('data-tip', function (d) { return d.nextStop; })
                        .select('g')
                        .attr('transform', function (d) {
                        var pt = projection([d.position.longitude, d.position.latitude]);
                        return "translate( " + pt[0] + ", " + pt[1] + ")";
                    })
                        .select('.vech-icon-arrow')
                        .attr('transform', function (d) { return "rotate(" + (northAngleDegUserSpace + d.position.bearing) + ")"; });
                    // const allNewVehicles = newVehiclesInNewRoutes.merge(vehiclesInExistingLayers.enter())
                    //   .data(d => d.vehicles)
                    //   .enter()
                    //   .append("g")
                    //   .classed("vehicle", true)
                    //   .classed("enter", true)
                    //   .attr("id", d => d.description.id)
                    //   .attr('transform', function (d) {
                    //     var pt = projection([d.position.longitude, d.position.latitude]);
                    //     return `translate( ${pt[0]}, ${pt[1]}) rotate(${northAngleDegUserSpace + d.position.bearing})`;
                    //   });
                    // allNewVehicles.append("svg:image")
                    //   .attr("width", 25)
                    //   .attr("height", 25)
                    //   .attr('x', -12.5)
                    //   .attr('y', -12.5)
                    //   .attr("xlink:href", d => d.description.icon)
                    //   .classed("icon", true);
                    // vehiclesInExistingLayers
                    //   .classed('enter', false)
                    //   .classed('update', true)
                    //   .attr('transform', function (d) {
                    //     var pt = projection([d.position.longitude, d.position.latitude]);
                    //     return `translate( ${pt[0]}, ${pt[1]}) rotate(${northAngleDegUserSpace + d.position.bearing})`;
                    //   });
                    // vehiclesInExistingLayers.selectAll('.icon')
                    //   .attr("xlink:href", d => d.description.icon);
                }
            }
            catch (e) {
                console.error(e);
            }
        };
        return routeMap;
    }
    exports.RouteMapGenerator = RouteMapGenerator;
    function vehicleIcon(data, idx, nodes) {
    }
    function diamondLetter(data, idx, nodes) {
        var selection = d3.select(this);
        var letter = data.label || '-';
        var rect = selection.select('rect');
        if (!rect.size()) {
            rect = selection.append('rect');
        }
        rect
            .attr('class', 'diamond-rect')
            .attr('style', 'fill:#fff;stroke:#000')
            .attr('width', "18")
            .attr('height', "18")
            .attr('x', "-8")
            .attr('y', "-6")
            .attr('transform', "matrix(0.70710678,0.70710678,-0.70710678,0.70710678,0,0)");
        var text = selection.select('text');
        if (!text.size()) {
            text = selection.append('text');
        }
        text.attr('style', 'font-size:18.74px;line-height:125%;text-align:center;text-anchor:middle;fill:#000');
        var tspan = text.select('tspan');
        if (!tspan.size()) {
            tspan = text.append('tspan');
        }
        tspan
            .attr('class', 'diamond-text')
            .attr('style', 'font-weight:bold;font-family:Arial;font-size:5.25mm;text-anchor:middle')
            .attr('x', "-1.5")
            .attr('y', "9.5")
            .text(letter);
    }
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function routeTable(parentSelection) {
        parentSelection.each(function (datum, index, nodes) {
            var selection = d3.select(this);
            var table = selection.select('table');
            if (!table.size()) {
                table = selection.append('table')
                    .attr('class', 'route-table');
            }
            var thead = table.select('thead');
            if (!thead.size()) {
                thead = table.append('thead');
            }
            var tbody = table.select('tbody');
            if (!tbody.size()) {
                tbody = table.append('tbody');
            }
            var data = datum.data;
            var bearing = datum.bearing;
            var title = datum.title;
            // Create / update headers
            // a: title
            // b: vertical col label
            // c: diamond letter
            // define functions for rendering each row
            var headerRowFuns = [
                function (d) {
                    var selection = d3.select(this);
                    if (d.text) {
                        selection.text(d.text);
                    }
                },
                verticalColumnLabel,
                diamondLetter
            ];
            var headerData = [
                [{ text: title, colspan: data[0].length, class: 'table-heading capatilize' }],
                data[0].map(function (d) { return ({ vLabel: d.text }); }),
                data[1].map(function (d) { return ({ dLabel: d.text }); }),
            ];
            var headerRows = thead.selectAll('tr').data(headerData, function (d, i) { return d.map(function (c) { return c['row'] = i; }); });
            // Update cells in existing rows.
            var headerCells = headerRows.selectAll('th').data(function (d) { return d; });
            // Update cells enter selection
            headerCells.enter().append('th')
                .merge(headerCells)
                .attr('colspan', function (d, i) { return (d.colspan) ? d.colspan : null; })
                .attr('class', function (d, i) { return (d.class) ? d.class : null; })
                .each(function (d) { headerRowFuns[d['row']].call(this, d); });
            // Cells exit selection
            headerCells.exit().remove();
            // Create new rows and cells
            var headerCellsInNewRows = headerRows.enter().append('tr')
                .selectAll('th').data(function (d) { return d; });
            headerCellsInNewRows.enter().append('th')
                .attr('colspan', function (d, i) { return (d.colspan) ? d.colspan : null; })
                .attr('class', function (d, i) { return (d.class) ? d.class : null; })
                .each(function (d) { headerRowFuns[d.row].call(this, d); });
            // Remove old rows
            headerRows.exit().remove();
            // Create/update body
            var rows = tbody.selectAll('tr').data(data.slice(2));
            rows
                .classed('expired-trip', function (row) { return row.every(function (col) { return (col.classes && (col.classes['time-expired'] || col.classes['time-none'])); }); });
            // Update cells in existing rows.
            var cells = rows.selectAll('td').data(function (d) { return d; });
            var updateClasses = function (d) {
                if (d.classes) {
                    var selection_1 = d3.select(this);
                    for (var k in d.classes) {
                        selection_1.classed(k, d.classes[k]);
                    }
                }
            };
            // Update cells enter selection
            cells.enter().append('td')
                .merge(cells)
                .text(function (d) { return d.text; })
                .each(updateClasses);
            // Cells exit selection
            cells.exit().remove();
            // Create new rows and cells
            var cellsInNewRows = rows.enter()
                .append('tr')
                .attr('class', 'time-data')
                .classed('expired-trip', function (row) { return row.every(function (col) { return (col.classes && (col.classes['time-expired'] || col.classes['time-none'])); }); })
                .selectAll('td').data(function (d) { return d; });
            cellsInNewRows.enter().append('td')
                .text(function (d) { return d.text; })
                .each(updateClasses);
            rows.exit().remove();
        });
    }
    exports.routeTable = routeTable;
    /**
     * labelWrap wraps text at word bounaries.
     */
    function labelWrap(label, numChars) {
        var len = numChars || 16;
        var lines = [];
        var words = label.split(' ');
        var word = null;
        var currLine = [];
        while (word = words.shift()) {
            currLine.push(word);
            if (currLine.reduce(function (a, b) {
                var currLen = a + b.length + 1;
                return currLen;
            }, 0) > len) {
                if (currLine.length > 1) {
                    words.unshift(currLine.pop());
                }
                lines.push(currLine.slice());
                currLine = [];
            }
        }
        if (currLine.length > 0) {
            lines.push(currLine.slice());
        }
        if (lines.length === 1) {
            var andIdx = label.indexOf('&');
            if (andIdx >= 0) {
                return [label.slice(0, andIdx).trim(), label.slice(andIdx).trim()];
            }
        }
        return lines.map(function (line) {
            return line.join(" ");
        });
    }
    function verticalColumnLabel(data) {
        if (data['vLabel']) {
            var selection = d3.select(this);
            var lines_1 = labelWrap(data['vLabel'], 15).slice(0, 3);
            var tspanX = '100';
            var svg = selection.select('svg');
            if (!svg.size()) {
                svg = selection.append('svg');
            }
            svg
                .attr('class', 'vertical-column-label img-responsive')
                .attr('viewBox', '0 0 26.96456 ' + tspanX)
                .attr('width', "7.61mm")
                .attr('height', "26.5mm");
            if (data.class) {
                selection.classed(data.class, true);
                svg.classed(data.class, true);
            }
            var text = svg.select('text');
            if (!text.size()) {
                text = svg.append('text');
            }
            text
                .attr('class', 'vertical-col-label-text')
                .attr('transform', "matrix(0,1,-1,0,0,0)")
                .attr('x', '108.32227')
                .attr('y', '-17.545168');
            var tspanY_1 = [
                [0],
                [-10.367734],
                [-17.065767, -4.015769],
                [-20.635664, -11.428134, -2.2206047]
            ];
            var spans = text.selectAll('tspan').data(lines_1);
            spans.exit().remove();
            spans = spans.enter().append('tspan').merge(spans)
                .attr('x', tspanX)
                .attr('y', function (d, i) { return tspanY_1[lines_1.length][i]; })
                .text(function (d) { return d; });
            if (lines_1.length >= 3) {
                text.attr('style', 'font-size:8.8394022px;');
            }
        }
    }
    function diamondLetter(data) {
        if (data['dLabel']) {
            var selection = d3.select(this);
            var letter = data['dLabel'];
            var svg = selection.select('svg');
            if (!svg.size()) {
                svg = selection.append('svg');
            }
            svg
                .attr('class', 'diamond img-responsive')
                .attr('width', "7.6038418mm")
                .attr('height', "7.6038418mm")
                .attr('viewBox', "0 0 26.942746 26.942746");
            if (data.class) {
                selection.classed(data.class, true);
                svg.classed(data.class, true);
            }
            var g = svg.select('g');
            if (!g.size()) {
                g = svg.append('g');
            }
            var rect = g.select('rect');
            if (!rect.size()) {
                rect = g.append('rect');
            }
            rect
                .attr('class', 'diamond-rect')
                .attr('width', "17.896004")
                .attr('height', "17.896004")
                .attr('x', "10.103395")
                .attr('y', "-8.9479971")
                .attr('transform', "matrix(0.70710678,0.70710678,-0.70710678,0.70710678,0,0)");
            var text = g.select('text');
            if (!text.size()) {
                text = g.append('text');
            }
            var tspan = text.select('tspan');
            if (!tspan.size()) {
                tspan = text.append('tspan');
            }
            tspan
                .attr('class', 'diamond-text')
                .attr('x', "13.5")
                .attr('y', "20")
                .text(letter);
        }
    }
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(6), __webpack_require__(5), __webpack_require__(8), __webpack_require__(0), __webpack_require__(26), __webpack_require__(24), __webpack_require__(25)], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, route_index_service_1, route_data_service_1, route_live_data_service_1, util, route_table_1, route_index_1, route_map_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    window.RouteIndexService = route_index_service_1.RouteIndexService;
    window.RouteDataService = route_data_service_1.RouteDataService;
    window.RouteLiveDataService = route_live_data_service_1.ABQRouteLiveDataService;
    window.util = util;
    (function (agency, agencyLong) {
        var routeID = (util.getParameterByName('routeID') || '').toString();
        var routeIndex = route_index_service_1.RouteIndexService.getInstance();
        var routeMapGen = route_map_1.RouteMapGenerator();
        var liveDataService = new route_live_data_service_1.ABQRouteLiveDataService();
        window.liveDataService = liveDataService;
        ///liveDataService.addListener(console.log);
        liveDataService.addListener(routeMapGen.refreshLiveDataView);
        function browseRoute(route) {
            routeID = route;
            //refreshIndex();
            if (window.history && window.history.pushState) {
                window.history.pushState({ routeID: routeID }, "Route " + routeID, "routes.html?routeID=" + routeID);
            }
            refreshDataSelection();
        }
        window.browseRoute = browseRoute;
        var indexData = null;
        var routeData = null;
        var routeIndexGenerator = new route_index_1.RouteIndexGenerator();
        routeIndexGenerator.linkGenerator = function (d) { return "javascript:browseRoute(" + d.shortName + ");"; };
        function refreshIndex() {
            var nameSort = function (a, b) {
                return (+a.shortName) - (+b.shortName);
            };
            if (indexData && indexData.routes && indexData.routes.sort) {
                var sortedRoutes = indexData.routes.sort(function (a, b) { return b.trips - a.trips; });
                var tripCutOff_1 = sortedRoutes[Math.min(sortedRoutes.length - 1, 10)].trips;
                var splitData = indexData.routes.filter(function (d) { return d.trips > tripCutOff_1; })
                    .sort(nameSort).concat(indexData.routes.filter(function (d) { return d.trips <= tripCutOff_1; }).sort(nameSort));
                routeIndexGenerator.activeRoute = routeID;
                var routeIndex_1 = d3.select('#route-index').datum(splitData);
                routeIndexGenerator.update(routeIndex_1);
                refreshDataSelection();
            }
        }
        function refreshDataSelection() {
            if (routeID) {
                var routeDataService = route_data_service_1.RouteDataService.getInstance(agency);
                routeDataService.getRoute(routeID).then(function (data) {
                    routeData = data;
                    console.log(routeData);
                    liveDataService.setRoutes(routeData.siblingRouteNames);
                    liveDataService.setEnabled(true);
                    refreshDataView();
                });
            }
        }
        function refreshDataView() {
            if (routeData) {
                d3.select('#route-title').datum(routeData).text(function (d) { return d.data.shortName + " - " + d.data.longName; });
                var mapSelection = d3.select("#map");
                routeMapGen.width(mapSelection.node().offsetWidth);
                mapSelection.datum(routeData).call(routeMapGen);
                d3.select('#tableA').datum(routeData.getTripSummary('weekday', 0)).call(route_table_1.routeTable);
                d3.select('#tableB').datum(routeData.getTripSummary('weekday', 1)).call(route_table_1.routeTable);
                d3.select('#tableC').datum(routeData.getTripSummary('saturday', 0)).call(route_table_1.routeTable);
                d3.select('#tableD').datum(routeData.getTripSummary('saturday', 1)).call(route_table_1.routeTable);
            }
        }
        routeIndex.getIndex(agency).then(function (data) {
            indexData = data;
            refreshIndex();
        });
    })(agency, agencyLong);
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ })
/******/ ]);;
});