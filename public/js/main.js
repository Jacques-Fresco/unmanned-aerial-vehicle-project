/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/js/index.js","vendor"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/blocks/components/input/input.js":
/*!**********************************************!*\
  !*** ./src/blocks/components/input/input.js ***!
  \**********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

    "use strict";
    __webpack_require__.r(__webpack_exports__);
    /* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var inputmask_dist_jquery_inputmask__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! inputmask/dist/jquery.inputmask */ "./node_modules/inputmask/dist/jquery.inputmask.js");
    /* harmony import */ var inputmask_dist_jquery_inputmask__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(inputmask_dist_jquery_inputmask__WEBPACK_IMPORTED_MODULE_0__);
    
    
    // INPUT
    var inputFunc, inputFocusIn, inputFocusOut;
    inputFunc = function inputFunc(el) {
      var input, label, value;
      input = el;
      label = input.closest('label');
      value = input.val();
      if (value.length >= 1) {
        label.addClass('label--focus');
      } else {
        label.removeClass('label--focus');
      }
      ;
    };
    inputFocusIn = function inputFocusIn() {
      var input;
      input = $('.input, .textarea');
      input.on('focus', function () {
        var label;
        label = $(this).closest('label');
        label.addClass('label--focus');
      });
    };
    inputFocusOut = function inputFocusOut() {
      $('.input, .textarea').on('blur', function () {
        var th;
        th = $(this);
        inputFunc(th);
      });
    };
    inputFocusIn();
    inputFocusOut();
    $(document).ready(function () {
      // Autocomplete off
      var form = $('form');
      form.attr('autocomplete', 'off');
      // Masks
      var tel = $('input[type="tel"]');
      tel.inputmask({
        "mask": "+7 (999) 999-99-99"
      });
    });
    /* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))
    
    /***/ }),
    
    /***/ "./src/blocks/modules/donations/donations.js":
    /*!***************************************************!*\
      !*** ./src/blocks/modules/donations/donations.js ***!
      \***************************************************/
    /*! no exports provided */
    /***/ (function(module, __webpack_exports__, __webpack_require__) {
    
    "use strict";
    __webpack_require__.r(__webpack_exports__);
    /* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var clipboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! clipboard */ "./node_modules/clipboard/dist/clipboard.js");
    /* harmony import */ var clipboard__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(clipboard__WEBPACK_IMPORTED_MODULE_0__);
    /* OLD (doesnt work on safari)
    $.fn.CopyToClipboard = function() {
        var textToCopy = false;
        if(this.is('select') || this.is('textarea') || this.is('input')){
            textToCopy = this.val();
        }else {
            textToCopy = this.text();
        }
        CopyToClipboard(textToCopy);
    };
    
    function alert(el) {
        let html = '<div class="alert">Адрес успешно скопирован</div>'
        $('body').append(html);
        setTimeout(function(){
            $('.alert').remove();
        },4500)
    }
    
    function CopyToClipboard( val ){
        var hiddenClipboard = $('#_hiddenClipboard_');
        if(!hiddenClipboard.length){
            $('body').append('<textarea readonly style="position:absolute;top: -9999px;" id="_hiddenClipboard_"></textarea>');
            hiddenClipboard = $('#_hiddenClipboard_');
        }
        hiddenClipboard.html(val);
        hiddenClipboard.select();
        document.execCommand('copy');
        document.getSelection().removeAllRanges();
        hiddenClipboard.remove();
        alert();
    }
    
    $(function(){
        $('[data-clipboard-target]').each(function(){
            $(this).click(function() {
                $($(this).data('clipboard-target')).CopyToClipboard();
            });
        });
        $('[data-clipboard-text]').each(function(){
            $(this).click(function(){
                CopyToClipboard($(this).data('clipboard-text'));
            });
        });
    });
    
    $('.crypto, .share--ln').CopyToClipboard();
    
    */
    
    function alert(el) {
      var html = '<div class="alert">Адрес успешно скопирован</div>';
      $('body').append(html);
      setTimeout(function () {
        $('.alert').remove();
      }, 4500);
    }
    
    var clipboard = new clipboard__WEBPACK_IMPORTED_MODULE_0___default.a('.crypto, .share--lk');
    clipboard.on('success', function (e) {
      alert();
      e.clearSelection();
    });
    clipboard.on('error', function (e) {
      console.error('Action:', e.action);
      console.error('Trigger:', e.trigger);
    });
    $(document).ready(function () {
      $('.alert').remove();
    });
    /* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))
    
    /***/ }),
    
    /***/ "./src/blocks/modules/gallery/gallery.js":
    /*!***********************************************!*\
      !*** ./src/blocks/modules/gallery/gallery.js ***!
      \***********************************************/
    /*! no exports provided */
    /***/ (function(module, __webpack_exports__, __webpack_require__) {
    
    "use strict";
    __webpack_require__.r(__webpack_exports__);
    /* harmony import */ var swiper_swiper_bundle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper/swiper-bundle */ "./node_modules/swiper/swiper-bundle.js");
    /* harmony import */ var swiper_swiper_bundle__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(swiper_swiper_bundle__WEBPACK_IMPORTED_MODULE_0__);
    
    var roomsSlider = new swiper_swiper_bundle__WEBPACK_IMPORTED_MODULE_0___default.a('.gallery__slider', {
      speed: 375,
      slideActiveClass: 'gallery__sliderSlide--active',
      slideBlankClass: 'gallery__sliderSlide--blank',
      slideClass: 'gallery__sliderSlide',
      slideDuplicateActiveClass: 'gallery__sliderSlide--dublicateActive',
      slideDuplicateClass: 'gallery__sliderSlide--dublicate',
      slideDuplicateNextClass: 'gallery__sliderSlide--dublicateNext',
      slideDuplicatePrevClass: 'gallery__sliderSlide--dublicatePrev',
      slideNextClass: 'gallery__sliderSlide--next',
      slidePrevClass: 'gallery__sliderSlide--prev',
      slideVisibleClass: 'gallery__sliderSlide--visible',
      wrapperClass: 'gallery__sliderWrapper',
      navigation: {
        prevEl: '.gallery__arrow--prev',
        nextEl: '.gallery__arrow--next'
      },
      spaceBetween: 48,
      slideToClickedSlide: true,
      initialSlide: 1
    });
    
    /***/ }),
    
    /***/ "./src/blocks/modules/header/header.js":
    /*!*********************************************!*\
      !*** ./src/blocks/modules/header/header.js ***!
      \*********************************************/
    /*! no static exports found */
    /***/ (function(module, exports, __webpack_require__) {
    
    /* WEBPACK VAR INJECTION */(function($) {var head = $('.header');
    var headHid = 'header--hidden';
    var headVis = 'header--visible';
    $(window).on('scroll', function (e) {
      $this = $(this);
      var st = $this.scrollTop();
      var vh = $this.height();
      if (st > 80) {
        setTimeout(function () {
          head.addClass(headVis);
        }, 50);
      } else {
        head.removeClass(headVis);
      }
    });
    /* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))
    
    /***/ }),
    
    /***/ "./src/blocks/modules/mobile/mobile.js":
    /*!*********************************************!*\
      !*** ./src/blocks/modules/mobile/mobile.js ***!
      \*********************************************/
    /*! no static exports found */
    /***/ (function(module, exports, __webpack_require__) {
    
    /* WEBPACK VAR INJECTION */(function($) {var body = $('body');
    var control = $('.mobileControl, .mobile__link');
    var controlBurger = 'mobileControl--burger';
    var controlClosed = 'mobileControl--close';
    var navigation = $('.mobile');
    var navVis = 'mobile--visible';
    var navHid = 'mobile--hidden';
    var overlayer = $('.overlayer');
    var overVis = 'overlayer--visible';
    var overHid = 'overlayer--hidden';
    navOpen = function navOpen(el) {
      var st = $(window).scrollTop();
      body.attr('data-scroll', st).css({
        'overflow': 'hidden',
        'height': '100vh'
      });
      control.removeClass(controlBurger).addClass(controlClosed);
      navigation.removeClass(navHid);
      setTimeout(function () {
        navigation.addClass(navVis);
      }, 50);
    };
    navClose = function navClose(el) {
      var st = body.attr('data-scroll');
      body.css({
        'overflow': 'auto',
        'height': 'auto'
      });
      control.removeClass(controlClosed).addClass(controlBurger);
      navigation.removeClass(navVis);
      setTimeout(function () {
        navigation.addClass(navHid);
      }, 500);
    };
    control.on('click touch', function () {
      var th = $(this);
      if (th.hasClass(controlBurger)) {
        navOpen();
      } else {
        navClose();
      }
    });
    /* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))
    
    /***/ }),
    
    /***/ "./src/blocks/modules/pvopro/pvopro.js":
    /*!*********************************************!*\
      !*** ./src/blocks/modules/pvopro/pvopro.js ***!
      \*********************************************/
    /*! no exports provided */
    /***/ (function(module, __webpack_exports__, __webpack_require__) {
    
    "use strict";
    __webpack_require__.r(__webpack_exports__);
    /* harmony import */ var simplelightbox__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! simplelightbox */ "./node_modules/simplelightbox/dist/simple-lightbox.modules.js");
    /* harmony import */ var simplelightbox__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(simplelightbox__WEBPACK_IMPORTED_MODULE_0__);
    
    new simplelightbox__WEBPACK_IMPORTED_MODULE_0___default.a('.pvopro__map', {
      overlayOpacity: 0.95,
      maxZoom: 1
    });
    
    /***/ }),
    
    /***/ "./src/js/import/components.js":
    /*!*************************************!*\
      !*** ./src/js/import/components.js ***!
      \*************************************/
    /*! no exports provided */
    /***/ (function(module, __webpack_exports__, __webpack_require__) {
    
    "use strict";
    __webpack_require__.r(__webpack_exports__);
    /* harmony import */ var _components_input_input__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! %components%/input/input */ "./src/blocks/components/input/input.js");
    
    
    /***/ }),
    
    /***/ "./src/js/import/modules.js":
    /*!**********************************!*\
      !*** ./src/js/import/modules.js ***!
      \**********************************/
    /*! no exports provided */
    /***/ (function(module, __webpack_exports__, __webpack_require__) {
    
    "use strict";
    __webpack_require__.r(__webpack_exports__);
    /* harmony import */ var _modules_header_header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! %modules%/header/header */ "./src/blocks/modules/header/header.js");
    /* harmony import */ var _modules_header_header__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_modules_header_header__WEBPACK_IMPORTED_MODULE_0__);
    /* harmony import */ var _modules_gallery_gallery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! %modules%/gallery/gallery */ "./src/blocks/modules/gallery/gallery.js");
    /* harmony import */ var _modules_donations_donations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! %modules%/donations/donations */ "./src/blocks/modules/donations/donations.js");
    /* harmony import */ var _modules_mobile_mobile__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! %modules%/mobile/mobile */ "./src/blocks/modules/mobile/mobile.js");
    /* harmony import */ var _modules_mobile_mobile__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_modules_mobile_mobile__WEBPACK_IMPORTED_MODULE_3__);
    /* harmony import */ var _modules_pvopro_pvopro__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! %modules%/pvopro/pvopro */ "./src/blocks/modules/pvopro/pvopro.js");
    
    
    
    
    
    
    /***/ }),
    
    /***/ "./src/js/index.js":
    /*!*************************!*\
      !*** ./src/js/index.js ***!
      \*************************/
    /*! no exports provided */
    /***/ (function(module, __webpack_exports__, __webpack_require__) {
    
    "use strict";
    __webpack_require__.r(__webpack_exports__);
    /* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var _import_modules__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./import/modules */ "./src/js/import/modules.js");
    /* harmony import */ var _import_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./import/components */ "./src/js/import/components.js");
    /* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! aos */ "./node_modules/aos/dist/aos.js");
    /* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(aos__WEBPACK_IMPORTED_MODULE_2__);
    
    
    
    // AOS
    
    
    /* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))
    
    /***/ })
    
    /******/ });
    //# sourceMappingURL=main.js.map