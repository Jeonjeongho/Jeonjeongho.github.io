webpackJsonp([0],{

/***/ 329:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(330);
module.exports = __webpack_require__(332);


/***/ }),

/***/ 330:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_url_search_params__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_url_search_params___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_url_search_params__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__web_common__ = __webpack_require__(331);




var appMethods = {};

var appInit = function appInit() {
    /*
    const appName = $('body').attr('id').replace(/\w+-/, '');
    const appCommon = appName.split('-')[0];
    const appMethod = appName.replace(/-([a-z])/g, (_, letter) => letter.toUpperCase());
    const params = new URLSearchParams(location.search);
      [appCommon, appMethod].forEach(method => appMethods[method] && appMethods[method](params));
    */
};

document.addEventListener('DOMContentLoaded', function () {
    appInit();
    Object(__WEBPACK_IMPORTED_MODULE_1__web_common__["a" /* default */])();
});

/***/ }),

/***/ 331:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {var Common = function Common() {
    var $document = $(document);
    var $window = $(window);
    var $body = $('body, html');

    var container = $document.find('#map')[0];
    var options = {
        center: new daum.maps.LatLng(37.5999947, 127.0240653),
        level: 3
    };
    var map = new daum.maps.Map(container, options);
    var markerPosition = new daum.maps.LatLng(37.5999947, 127.0240653);

    var marker = new daum.maps.Marker({
        position: markerPosition
    });
    marker.setMap(map);

    $document.on('click', "[data-site='renewal']", function () {
        alert("현재 리뉴얼 상태입니다.");
        return false;
    }).on('click', ".nav a", function () {
        $body.stop().animate({ scrollTop: $('#' + $(this).data('target')).offset().top }, 300);
        return false;
    });
    $window.scroll(function () {
        var scroll = $(this).scrollTop();
        var idx = 0;
        if ($('.main-content-3').offset().top <= scroll) {
            idx = 2;
        } else if ($('.main-content-2').offset().top <= scroll) {
            idx = 1;
        } else {
            idx = 0;
        }
        $('.nav a').removeClass('on');
        $('.nav a').eq(idx).addClass('on');
    });
};

/* harmony default export */ __webpack_exports__["a"] = (Common);
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(124)))

/***/ }),

/***/ 332:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })

},[329]);