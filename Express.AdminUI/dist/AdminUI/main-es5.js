function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: routes, AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "routes", function () {
      return routes;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _app_main_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app.main.component */
    "./src/app/app.main.component.ts");

    var routes = [{
      path: '',
      component: _app_main_component__WEBPACK_IMPORTED_MODULE_2__["AppMainComponent"]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.breadcrumb.component.ts":
  /*!*********************************************!*\
    !*** ./src/app/app.breadcrumb.component.ts ***!
    \*********************************************/

  /*! exports provided: AppBreadcrumbComponent */

  /***/
  function srcAppAppBreadcrumbComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppBreadcrumbComponent", function () {
      return AppBreadcrumbComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_breadcrumb_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./services/breadcrumb.service */
    "./src/app/services/breadcrumb.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function AppBreadcrumbComponent_ng_template_8_a_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", item_r1.routerLink);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.label);
      }
    }

    function AppBreadcrumbComponent_ng_template_8_ng_container_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.label);
      }
    }

    function AppBreadcrumbComponent_ng_template_8_li_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "/");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function AppBreadcrumbComponent_ng_template_8_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AppBreadcrumbComponent_ng_template_8_a_1_Template, 2, 2, "a", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AppBreadcrumbComponent_ng_template_8_ng_container_2_Template, 2, 1, "ng-container", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, AppBreadcrumbComponent_ng_template_8_li_3_Template, 2, 0, "li", 9);
      }

      if (rf & 2) {
        var item_r1 = ctx.$implicit;
        var last_r2 = ctx.last;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r1.routerLink);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !item_r1.routerLink);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !last_r2);
      }
    }

    var AppBreadcrumbComponent = /*#__PURE__*/function () {
      function AppBreadcrumbComponent(breadcrumbService) {
        var _this = this;

        _classCallCheck(this, AppBreadcrumbComponent);

        this.breadcrumbService = breadcrumbService;
        this.subscription = breadcrumbService.itemsHandler.subscribe(function (response) {
          _this.items = response;
        });
      }

      _createClass(AppBreadcrumbComponent, [{
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          if (this.subscription) {
            this.subscription.unsubscribe();
          }
        }
      }]);

      return AppBreadcrumbComponent;
    }();

    AppBreadcrumbComponent.ɵfac = function AppBreadcrumbComponent_Factory(t) {
      return new (t || AppBreadcrumbComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_breadcrumb_service__WEBPACK_IMPORTED_MODULE_1__["BreadcrumbService"]));
    };

    AppBreadcrumbComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppBreadcrumbComponent,
      selectors: [["app-breadcrumb"]],
      decls: 19,
      vars: 1,
      consts: [[1, "layout-breadcrumb"], ["routerLink", ""], [1, "material-icons"], ["ngFor", "", 3, "ngForOf"], [1, "layout-breadcrumb-options"], ["routerLink", "/", "title", "Backup"], ["routerLink", "/", "title", "Bookmark"], ["routerLink", "/", "title", "Logout"], [3, "routerLink", 4, "ngIf"], [4, "ngIf"], [3, "routerLink"]],
      template: function AppBreadcrumbComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "i", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "home");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "/");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, AppBreadcrumbComponent_ng_template_8_Template, 4, 3, "ng-template", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "i", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "backup");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "i", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "bookmark");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "i", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "power_settings_new");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.items);
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"]],
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppBreadcrumbComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-breadcrumb',
          templateUrl: './app.breadcrumb.component.html'
        }]
      }], function () {
        return [{
          type: _services_breadcrumb_service__WEBPACK_IMPORTED_MODULE_1__["BreadcrumbService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);
    };

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 1,
      vars: 0,
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]],
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html'
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.footer.component.ts":
  /*!*****************************************!*\
    !*** ./src/app/app.footer.component.ts ***!
    \*****************************************/

  /*! exports provided: AppFooterComponent */

  /***/
  function srcAppAppFooterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppFooterComponent", function () {
      return AppFooterComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var AppFooterComponent = function AppFooterComponent() {
      _classCallCheck(this, AppFooterComponent);
    };

    AppFooterComponent.ɵfac = function AppFooterComponent_Factory(t) {
      return new (t || AppFooterComponent)();
    };

    AppFooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppFooterComponent,
      selectors: [["app-footer"]],
      decls: 8,
      vars: 0,
      consts: [[1, "layout-footer", "clearfix"], ["href", "dashboard.xhtml"], ["alt", "logo-colored", "src", "assets/layout/images/logo-colored.png"], [1, "footer-text-right"], [1, "material-icons"]],
      template: function AppFooterComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "copyright");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "All Rights Reserved");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppFooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-footer',
          template: "\n        <div class=\"layout-footer clearfix\">\n            <a href=\"dashboard.xhtml\">\n                <img alt=\"logo-colored\" src=\"assets/layout/images/logo-colored.png\" />\n            </a>\n            <span class=\"footer-text-right\">\n                <span class=\"material-icons\">copyright</span>\n                <span>All Rights Reserved</span>\n            </span>\n        </div>\n    "
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.main.component.ts":
  /*!***************************************!*\
    !*** ./src/app/app.main.component.ts ***!
    \***************************************/

  /*! exports provided: AppMainComponent */

  /***/
  function srcAppAppMainComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppMainComponent", function () {
      return AppMainComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_menu_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./services/menu.service */
    "./src/app/services/menu.service.ts");

    function AppMainComponent_div_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 4);
      }
    }

    var _c0 = function _c0(a0, a1, a2, a3) {
      return {
        "layout-wrapper-static": a0,
        "layout-wrapper-active": a1,
        "layout-menu-horizontal": a2,
        "layout-rtl": a3
      };
    };

    var AppMainComponent = /*#__PURE__*/function () {
      function AppMainComponent(renderer, zone, menuService) {
        _classCallCheck(this, AppMainComponent);

        this.renderer = renderer;
        this.zone = zone;
        this.menuService = menuService;
        this.layoutMode = 'overlay';
      }

      _createClass(AppMainComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this2 = this;

          this.zone.runOutsideAngular(function () {
            _this2.bindRipple();
          });
        }
      }, {
        key: "bindRipple",
        value: function bindRipple() {
          this.rippleInitListener = this.init.bind(this);
          document.addEventListener('DOMContentLoaded', this.rippleInitListener);
        }
      }, {
        key: "init",
        value: function init() {
          this.rippleMouseDownListener = this.rippleMouseDown.bind(this);
          document.addEventListener('mousedown', this.rippleMouseDownListener, false);
        }
      }, {
        key: "rippleMouseDown",
        value: function rippleMouseDown(e) {
          var parentNode = 'parentNode';

          for (var target = e.target; target && target !== this; target = target[parentNode]) {
            if (!this.isVisible(target)) {
              continue;
            } // Element.matches() -> https://developer.mozilla.org/en-US/docs/Web/API/Element/matches


            if (this.selectorMatches(target, '.ripplelink, .ui-button, .ui-listbox-item, .ui-multiselect-item, .ui-fieldset-toggler')) {
              var element = target;
              this.rippleEffect(element, e);
              break;
            }
          }
        }
      }, {
        key: "selectorMatches",
        value: function selectorMatches(el, selector) {
          var matches = 'matches';
          var webkitMatchesSelector = 'webkitMatchesSelector';
          var mozMatchesSelector = 'mozMatchesSelector';
          var msMatchesSelector = 'msMatchesSelector';
          var p = Element.prototype;

          var f = p[matches] || p[webkitMatchesSelector] || p[mozMatchesSelector] || p[msMatchesSelector] || function (s) {
            return [].indexOf.call(document.querySelectorAll(s), this) !== -1;
          };

          return f.call(el, selector);
        }
      }, {
        key: "isVisible",
        value: function isVisible(el) {
          return !!(el.offsetWidth || el.offsetHeight);
        }
      }, {
        key: "rippleEffect",
        value: function rippleEffect(element, e) {
          if (element.querySelector('.ink') === null) {
            var inkEl = document.createElement('span');
            this.addClass(inkEl, 'ink');

            if (this.hasClass(element, 'ripplelink') && element.querySelector('span')) {
              element.querySelector('span').insertAdjacentHTML('afterend', '<span class=\'ink\'></span>');
            } else {
              element.appendChild(inkEl);
            }
          }

          var ink = element.querySelector('.ink');
          this.removeClass(ink, 'ripple-animate');

          if (!ink.offsetHeight && !ink.offsetWidth) {
            var d = Math.max(element.offsetWidth, element.offsetHeight);
            ink.style.height = d + 'px';
            ink.style.width = d + 'px';
          }

          var x = e.pageX - this.getOffset(element).left - ink.offsetWidth / 2;
          var y = e.pageY - this.getOffset(element).top - ink.offsetHeight / 2;
          ink.style.top = y + 'px';
          ink.style.left = x + 'px';
          ink.style.pointerEvents = 'none';
          this.addClass(ink, 'ripple-animate');
        }
      }, {
        key: "hasClass",
        value: function hasClass(element, className) {
          if (element.classList) {
            return element.classList.contains(className);
          } else {
            return new RegExp('(^| )' + className + '( |$)', 'gi').test(element.className);
          }
        }
      }, {
        key: "addClass",
        value: function addClass(element, className) {
          if (element.classList) {
            element.classList.add(className);
          } else {
            element.className += ' ' + className;
          }
        }
      }, {
        key: "removeClass",
        value: function removeClass(element, className) {
          if (element.classList) {
            element.classList.remove(className);
          } else {
            element.className = element.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
          }
        }
      }, {
        key: "getOffset",
        value: function getOffset(el) {
          var rect = el.getBoundingClientRect();
          return {
            top: rect.top + (window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0),
            left: rect.left + (window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft || 0)
          };
        }
      }, {
        key: "unbindRipple",
        value: function unbindRipple() {
          if (this.rippleInitListener) {
            document.removeEventListener('DOMContentLoaded', this.rippleInitListener);
          }

          if (this.rippleMouseDownListener) {
            document.removeEventListener('mousedown', this.rippleMouseDownListener);
          }
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.unbindRipple();
        }
      }, {
        key: "onWrapperClick",
        value: function onWrapperClick() {
          if (!this.menuClick && !this.menuButtonClick) {
            this.mobileMenuActive = false;
          }

          if (!this.topbarMenuClick && !this.topbarMenuButtonClick) {
            this.topbarMenuActive = false;
            this.activeTopbarItem = null;
          }

          if (!this.menuClick) {
            if (this.isHorizontal()) {
              this.menuService.reset();
            }

            this.menuHoverActive = false;
          }

          if (this.configActive && !this.configClick) {
            this.configActive = false;
          }

          this.configClick = false;
          this.menuClick = false;
          this.menuButtonClick = false;
          this.topbarMenuClick = false;
          this.topbarMenuButtonClick = false;
        }
      }, {
        key: "onMenuButtonClick",
        value: function onMenuButtonClick(event) {
          this.menuButtonClick = true;

          if (this.isMobile()) {
            this.mobileMenuActive = !this.mobileMenuActive;
          }

          event.preventDefault();
        }
      }, {
        key: "onTopbarMobileMenuButtonClick",
        value: function onTopbarMobileMenuButtonClick(event) {
          this.topbarMenuButtonClick = true;
          this.topbarMenuActive = !this.topbarMenuActive;
          event.preventDefault();
        }
      }, {
        key: "onTopbarRootItemClick",
        value: function onTopbarRootItemClick(event, item) {
          if (this.activeTopbarItem === item) {
            this.activeTopbarItem = null;
          } else {
            this.activeTopbarItem = item;
          }

          event.preventDefault();
        }
      }, {
        key: "onTopbarMenuClick",
        value: function onTopbarMenuClick(event) {
          this.topbarMenuClick = true;
        }
      }, {
        key: "onSidebarClick",
        value: function onSidebarClick(event) {
          this.menuClick = true;
          this.resetMenu = false;
        }
      }, {
        key: "onConfigClick",
        value: function onConfigClick(event) {
          this.configClick = true;
        }
      }, {
        key: "onToggleMenuClick",
        value: function onToggleMenuClick(event) {
          this.layoutMode = this.layoutMode !== 'static' ? 'static' : 'overlay';
          event.preventDefault();
        }
      }, {
        key: "isMobile",
        value: function isMobile() {
          return window.innerWidth <= 1024;
        }
      }, {
        key: "isTablet",
        value: function isTablet() {
          var width = window.innerWidth;
          return width <= 1024 && width > 640;
        }
      }, {
        key: "isDesktop",
        value: function isDesktop() {
          return window.innerWidth > 1024;
        }
      }, {
        key: "isHorizontal",
        value: function isHorizontal() {
          return this.layoutMode === 'horizontal';
        }
      }, {
        key: "isOverlay",
        value: function isOverlay() {
          return this.layoutMode === 'overlay';
        }
      }]);

      return AppMainComponent;
    }();

    AppMainComponent.ɵfac = function AppMainComponent_Factory(t) {
      return new (t || AppMainComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_menu_service__WEBPACK_IMPORTED_MODULE_1__["MenuService"]));
    };

    AppMainComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppMainComponent,
      selectors: [["app-main"]],
      decls: 8,
      vars: 7,
      consts: [[1, "layout-wrapper", 3, "ngClass", "click"], [1, "layout-main"], [1, "layout-content"], ["class", "layout-main-mask", 4, "ngIf"], [1, "layout-main-mask"]],
      template: function AppMainComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppMainComponent_Template_div_click_0_listener() {
            return ctx.onWrapperClick();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-menu");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-topbar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "router-outlet");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "app-footer");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, AppMainComponent_div_7_Template, 1, 0, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction4"](2, _c0, ctx.layoutMode === "static", ctx.mobileMenuActive, ctx.layoutMode === "horizontal", ctx.isRTL));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.mobileMenuActive);
        }
      },
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppMainComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-main',
          templateUrl: './app.main.component.html'
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]
        }, {
          type: _services_menu_service__WEBPACK_IMPORTED_MODULE_1__["MenuService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.menu.component.ts":
  /*!***************************************!*\
    !*** ./src/app/app.menu.component.ts ***!
    \***************************************/

  /*! exports provided: AppMenuComponent */

  /***/
  function srcAppAppMenuComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppMenuComponent", function () {
      return AppMenuComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_main_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./app.main.component */
    "./src/app/app.main.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _app_menuitem_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app.menuitem.component */
    "./src/app/app.menuitem.component.ts");

    function AppMenuComponent_li_8_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "li", 8);
      }

      if (rf & 2) {
        var item_r1 = ctx.$implicit;
        var i_r2 = ctx.index;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("item", item_r1)("index", i_r2)("root", true);
      }
    }

    var _c0 = function _c0(a0, a1) {
      return {
        "layout-sidebar-active": a0,
        "layout-sidebar-dark": a1
      };
    };

    var AppMenuComponent = /*#__PURE__*/function () {
      function AppMenuComponent(app) {
        _classCallCheck(this, AppMenuComponent);

        this.app = app;
      }

      _createClass(AppMenuComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.model = [{
            label: 'Dashboard',
            icon: 'dashboard',
            routerLink: ['/']
          }, {
            label: 'Components',
            icon: 'list',
            badge: '2',
            routerLink: ['/components'],
            badgeStyleClass: 'orange-badge',
            items: [{
              label: 'Sample Page',
              icon: 'desktop_mac',
              routerLink: ['/components/sample']
            }, {
              label: 'Forms',
              icon: 'input',
              routerLink: ['/components/forms']
            }, {
              label: 'Data',
              icon: 'grid_on',
              routerLink: ['/components/data']
            }, {
              label: 'Panels',
              icon: 'content_paste',
              routerLink: ['/components/panels']
            }, {
              label: 'Overlays',
              icon: 'content_copy',
              routerLink: ['/components/overlays']
            }, {
              label: 'Menus',
              icon: 'menu',
              routerLink: ['/components/menus']
            }, {
              label: 'Messages',
              icon: 'message',
              routerLink: ['/components/messages']
            }, {
              label: 'Charts',
              icon: 'insert_chart',
              routerLink: ['/components/charts']
            }, {
              label: 'File',
              icon: 'attach_file',
              routerLink: ['/components/file']
            }, {
              label: 'Misc',
              icon: 'toys',
              routerLink: ['/components/misc']
            }]
          }, {
            label: 'Template Pages',
            icon: 'get_app',
            routerLink: ['/pages'],
            items: [{
              label: 'Empty Page',
              icon: 'hourglass_empty',
              routerLink: ['/pages/empty']
            }, {
              label: 'Landing Page',
              icon: 'flight_land',
              url: 'assets/pages/landing.html',
              target: '_blank'
            }, {
              label: 'Login Page',
              icon: 'verified_user',
              routerLink: ['/login'],
              target: '_blank'
            }, {
              label: 'Error Page',
              icon: 'error',
              routerLink: ['/error'],
              target: '_blank'
            }, {
              label: '404 Page',
              icon: 'error_outline',
              routerLink: ['/404'],
              target: '_blank'
            }, {
              label: 'Access Denied Page',
              icon: 'security',
              routerLink: ['/accessdenied'],
              target: '_blank'
            }]
          }, {
            label: 'Menu Hierarchy',
            icon: 'menu',
            items: [{
              label: 'Submenu 1',
              icon: 'subject',
              items: [{
                label: 'Submenu 1.1',
                icon: 'subject',
                items: [{
                  label: 'Submenu 1.1.1',
                  icon: 'subject'
                }, {
                  label: 'Submenu 1.1.2',
                  icon: 'subject'
                }, {
                  label: 'Submenu 1.1.3',
                  icon: 'subject'
                }]
              }, {
                label: 'Submenu 1.2',
                icon: 'subject',
                items: [{
                  label: 'Submenu 1.2.1',
                  icon: 'subject'
                }, {
                  label: 'Submenu 1.2.2',
                  icon: 'subject'
                }]
              }]
            }, {
              label: 'Submenu 2',
              icon: 'subject',
              items: [{
                label: 'Submenu 2.1',
                icon: 'subject',
                items: [{
                  label: 'Submenu 2.1.1',
                  icon: 'subject'
                }, {
                  label: 'Submenu 2.1.2',
                  icon: 'subject'
                }, {
                  label: 'Submenu 2.1.3',
                  icon: 'subject'
                }]
              }, {
                label: 'Submenu 2.2',
                icon: 'subject',
                items: [{
                  label: 'Submenu 2.2.1',
                  icon: 'subject'
                }, {
                  label: 'Submenu 2.2.2',
                  icon: 'subject'
                }]
              }]
            }]
          }, {
            label: 'Utils',
            icon: 'build',
            routerLink: ['/utils']
          }, {
            label: 'Docs',
            icon: 'find_in_page',
            routerLink: ['/documentation']
          }];
        }
      }, {
        key: "onMenuClick",
        value: function onMenuClick() {
          this.app.menuClick = true;
        }
      }]);

      return AppMenuComponent;
    }();

    AppMenuComponent.ɵfac = function AppMenuComponent_Factory(t) {
      return new (t || AppMenuComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_main_component__WEBPACK_IMPORTED_MODULE_1__["AppMainComponent"]));
    };

    AppMenuComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppMenuComponent,
      selectors: [["app-menu"]],
      decls: 9,
      vars: 5,
      consts: [[1, "layout-sidebar", 3, "ngClass", "click", "mouseover", "mouseleave"], [1, "sidebar-logo"], ["href", "#"], ["alt", "logo", "src", "assets/layout/images/logo-slim.png"], [1, "app-name"], ["href", "#", "title", "Toggle Menu", 1, "sidebar-anchor", 3, "click"], [1, "layout-menu", 3, "click"], ["app-menuitem", "", 3, "item", "index", "root", 4, "ngFor", "ngForOf"], ["app-menuitem", "", 3, "item", "index", "root"]],
      template: function AppMenuComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppMenuComponent_Template_div_click_0_listener($event) {
            return ctx.app.onSidebarClick($event);
          })("mouseover", function AppMenuComponent_Template_div_mouseover_0_listener() {
            return ctx.app.sidebarActive = true;
          })("mouseleave", function AppMenuComponent_Template_div_mouseleave_0_listener() {
            return ctx.app.sidebarActive = false;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "SERENITY");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppMenuComponent_Template_a_click_6_listener($event) {
            return ctx.app.onToggleMenuClick($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ul", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppMenuComponent_Template_ul_click_7_listener() {
            return ctx.onMenuClick();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, AppMenuComponent_li_8_Template, 1, 3, "li", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](2, _c0, ctx.app.sidebarActive, ctx.app.darkMenu));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.model);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _app_menuitem_component__WEBPACK_IMPORTED_MODULE_3__["AppMenuitemComponent"]],
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppMenuComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-menu',
          templateUrl: './app.menu.component.html'
        }]
      }], function () {
        return [{
          type: _app_main_component__WEBPACK_IMPORTED_MODULE_1__["AppMainComponent"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.menuitem.component.ts":
  /*!*******************************************!*\
    !*** ./src/app/app.menuitem.component.ts ***!
    \*******************************************/

  /*! exports provided: AppMenuitemComponent */

  /***/
  function srcAppAppMenuitemComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppMenuitemComponent", function () {
      return AppMenuitemComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/animations */
    "./node_modules/@angular/animations/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _app_main_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app.main.component */
    "./src/app/app.main.component.ts");
    /* harmony import */


    var _services_menu_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./services/menu.service */
    "./src/app/services/menu.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var _c0 = ["app-menuitem", ""];

    function AppMenuitemComponent_a_1_i_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "i", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "keyboard_arrow_down");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function AppMenuitemComponent_a_1_span_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r4.item.badge);
      }
    }

    function AppMenuitemComponent_a_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppMenuitemComponent_a_1_Template_a_click_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);

          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r5.itemClick($event);
        })("mouseenter", function AppMenuitemComponent_a_1_Template_a_mouseenter_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);

          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r7.onMouseEnter();
        })("keydown.enter", function AppMenuitemComponent_a_1_Template_a_keydown_enter_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);

          var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r8.itemClick($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "i", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, AppMenuitemComponent_a_1_i_5_Template, 2, 0, "i", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, AppMenuitemComponent_a_1_span_6_Template, 2, 1, "span", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("href", ctx_r0.item.url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("target", ctx_r0.item.target)("tabindex", 0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.item.icon);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.item.label);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.item.items);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.item.badge);
      }
    }

    function AppMenuitemComponent_a_2_i_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "i", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "keyboard_arrow_down");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function AppMenuitemComponent_a_2_span_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r10.item.badge);
      }
    }

    var _c1 = function _c1() {
      return {
        exact: true
      };
    };

    function AppMenuitemComponent_a_2_Template(rf, ctx) {
      if (rf & 1) {
        var _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppMenuitemComponent_a_2_Template_a_click_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12);

          var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r11.itemClick($event);
        })("mouseenter", function AppMenuitemComponent_a_2_Template_a_mouseenter_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12);

          var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r13.onMouseEnter();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "i", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, AppMenuitemComponent_a_2_i_5_Template, 2, 0, "i", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, AppMenuitemComponent_a_2_span_6_Template, 2, 1, "span", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", ctx_r1.item.routerLink)("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](8, _c1));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("target", ctx_r1.item.target)("tabindex", 0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.item.icon);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.item.label);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.item.items);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.item.badge);
      }
    }

    function AppMenuitemComponent_ul_3_ng_template_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "li", 12);
      }

      if (rf & 2) {
        var child_r15 = ctx.$implicit;
        var i_r16 = ctx.index;

        var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](child_r15.badgeClass);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("item", child_r15)("index", i_r16)("parentKey", ctx_r14.key);
      }
    }

    function AppMenuitemComponent_ul_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AppMenuitemComponent_ul_3_ng_template_1_Template, 1, 5, "ng-template", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@children", ctx_r2.app.isHorizontal() && ctx_r2.root ? ctx_r2.active ? "visible" : "hidden" : ctx_r2.active ? "visibleAnimated" : "hiddenAnimated");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.item.items);
      }
    }

    var AppMenuitemComponent = /*#__PURE__*/function () {
      function AppMenuitemComponent(app, router, menuService) {
        var _this3 = this;

        _classCallCheck(this, AppMenuitemComponent);

        this.app = app;
        this.router = router;
        this.menuService = menuService;
        this.active = false;
        this.menuSourceSubscription = this.menuService.menuSource$.subscribe(function (key) {
          // deactivate current active menu
          if (_this3.active && _this3.key !== key && key.indexOf(_this3.key) !== 0) {
            _this3.active = false;
          }
        });
        this.menuResetSubscription = this.menuService.resetSource$.subscribe(function () {
          _this3.active = false;
        });
        this.router.events.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(function (event) {
          return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"];
        })).subscribe(function (params) {
          if (_this3.app.isHorizontal()) {
            _this3.active = false;
          } else {
            if (_this3.item.routerLink) {
              _this3.updateActiveStateFromRoute();
            } else {
              _this3.active = false;
            }
          }
        });
      }

      _createClass(AppMenuitemComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          if (!this.app.isHorizontal() && this.item.routerLink) {
            this.updateActiveStateFromRoute();
          }

          this.key = this.parentKey ? this.parentKey + '-' + this.index : String(this.index);
        }
      }, {
        key: "updateActiveStateFromRoute",
        value: function updateActiveStateFromRoute() {
          this.active = this.router.isActive(this.item.routerLink[0], this.item.items ? false : true);
        }
      }, {
        key: "itemClick",
        value: function itemClick(event) {
          // avoid processing disabled items
          if (this.item.disabled) {
            event.preventDefault();
            return true;
          } // navigate with hover in horizontal mode


          if (this.root) {
            this.app.menuHoverActive = !this.app.menuHoverActive;
          } // notify other items


          this.menuService.onMenuStateChange(this.key); // execute command

          if (this.item.command) {
            this.item.command({
              originalEvent: event,
              item: this.item
            });
          } // toggle active state


          if (this.item.items) {
            this.active = !this.active;
          } else {
            // activate item
            this.active = true; // hide overlay menus

            if (this.app.isMobile()) {
              this.app.sidebarActive = false;
              this.app.mobileMenuActive = false;
            } // reset horizontal menu


            if (this.app.isHorizontal()) {
              this.menuService.reset();
            }
          }
        }
      }, {
        key: "onMouseEnter",
        value: function onMouseEnter() {
          // activate item on hover
          if (this.root && this.app.menuHoverActive && this.app.isHorizontal() && this.app.isDesktop()) {
            this.menuService.onMenuStateChange(this.key);
            this.active = true;
          }
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          if (this.menuSourceSubscription) {
            this.menuSourceSubscription.unsubscribe();
          }

          if (this.menuResetSubscription) {
            this.menuResetSubscription.unsubscribe();
          }
        }
      }]);

      return AppMenuitemComponent;
    }();

    AppMenuitemComponent.ɵfac = function AppMenuitemComponent_Factory(t) {
      return new (t || AppMenuitemComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_main_component__WEBPACK_IMPORTED_MODULE_4__["AppMainComponent"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_menu_service__WEBPACK_IMPORTED_MODULE_5__["MenuService"]));
    };

    AppMenuitemComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppMenuitemComponent,
      selectors: [["", "app-menuitem", ""]],
      hostVars: 2,
      hostBindings: function AppMenuitemComponent_HostBindings(rf, ctx) {
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active-menuitem", ctx.active);
        }
      },
      inputs: {
        item: "item",
        index: "index",
        root: "root",
        parentKey: "parentKey"
      },
      attrs: _c0,
      decls: 4,
      vars: 3,
      consts: [["class", "ripplelink", 3, "click", "mouseenter", "keydown.enter", 4, "ngIf"], ["routerLinkActive", "active-menuitem-routerlink", "class", "ripplelink", 3, "routerLink", "routerLinkActiveOptions", "click", "mouseenter", 4, "ngIf"], [4, "ngIf"], [1, "ripplelink", 3, "click", "mouseenter", "keydown.enter"], [1, "material-icons"], [1, "menuitem-text"], ["class", "material-icons layout-submenu-toggler", 4, "ngIf"], ["class", "menuitem-badge", 4, "ngIf"], [1, "material-icons", "layout-submenu-toggler"], [1, "menuitem-badge"], ["routerLinkActive", "active-menuitem-routerlink", 1, "ripplelink", 3, "routerLink", "routerLinkActiveOptions", "click", "mouseenter"], ["ngFor", "", 3, "ngForOf"], ["app-menuitem", "", 3, "item", "index", "parentKey"]],
      template: function AppMenuitemComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AppMenuitemComponent_a_1_Template, 7, 7, "a", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AppMenuitemComponent_a_2_Template, 7, 9, "a", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, AppMenuitemComponent_ul_3_Template, 2, 2, "ul", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.item.routerLink || ctx.item.items);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.item.routerLink && !ctx.item.items);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.item.items && ctx.active);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkActive"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], AppMenuitemComponent],
      encapsulation: 2,
      data: {
        animation: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('children', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
          height: '0px'
        })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('hiddenAnimated', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
          height: '0px'
        })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('visibleAnimated', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
          height: '*'
        })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('visible', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
          height: '*',
          'z-index': 100
        })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('hidden', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
          height: '0px',
          'z-index': '*'
        })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('visibleAnimated => hiddenAnimated', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('400ms cubic-bezier(0.86, 0, 0.07, 1)')), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('hiddenAnimated => visibleAnimated', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('400ms cubic-bezier(0.86, 0, 0.07, 1)')), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('void => visibleAnimated, visibleAnimated => void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('400ms cubic-bezier(0.86, 0, 0.07, 1)'))])]
      }
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppMenuitemComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          /* tslint:disable:component-selector */
          selector: '[app-menuitem]',

          /* tslint:enable:component-selector */
          template: "\n          <ng-container>\n              <a [attr.href]=\"item.url\" (click)=\"itemClick($event)\" *ngIf=\"!item.routerLink || item.items\" (mouseenter)=\"onMouseEnter()\" (keydown.enter)=\"itemClick($event)\"\n                [attr.target]=\"item.target\" [attr.tabindex]=\"0\" class=\"ripplelink\">\n                    <i class=\"material-icons\">{{item.icon}}</i>\n                    <span class=\"menuitem-text\">{{item.label}}</span>\n                    <i class=\"material-icons layout-submenu-toggler\" *ngIf=\"item.items\">keyboard_arrow_down</i>\n                    <span class=\"menuitem-badge\" *ngIf=\"item.badge\">{{item.badge}}</span>\n              </a>\n              <a (click)=\"itemClick($event)\" (mouseenter)=\"onMouseEnter()\" *ngIf=\"item.routerLink && !item.items\"\n                  [routerLink]=\"item.routerLink\" routerLinkActive=\"active-menuitem-routerlink\" class=\"ripplelink\"\n                  [routerLinkActiveOptions]=\"{exact: true}\" [attr.target]=\"item.target\" [attr.tabindex]=\"0\">\n                    <i class=\"material-icons\">{{item.icon}}</i>\n                    <span class=\"menuitem-text\">{{item.label}}</span>\n                    <i class=\"material-icons layout-submenu-toggler\" *ngIf=\"item.items\">keyboard_arrow_down</i>\n                    <span class=\"menuitem-badge\" *ngIf=\"item.badge\">{{item.badge}}</span>\n              </a>\n              <ul *ngIf=\"item.items && active\" [@children]=\"(app.isHorizontal() && root) ? (active ? 'visible' : 'hidden') : (active ? 'visibleAnimated' : 'hiddenAnimated')\">\n                  <ng-template ngFor let-child let-i=\"index\" [ngForOf]=\"item.items\">\n                      <li app-menuitem [item]=\"child\" [index]=\"i\" [parentKey]=\"key\" [class]=\"child.badgeClass\"></li>\n                  </ng-template>\n              </ul>\n          </ng-container>\n      ",
          host: {
            '[class.active-menuitem]': 'active'
          },
          animations: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('children', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
            height: '0px'
          })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('hiddenAnimated', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
            height: '0px'
          })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('visibleAnimated', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
            height: '*'
          })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('visible', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
            height: '*',
            'z-index': 100
          })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('hidden', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
            height: '0px',
            'z-index': '*'
          })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('visibleAnimated => hiddenAnimated', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('400ms cubic-bezier(0.86, 0, 0.07, 1)')), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('hiddenAnimated => visibleAnimated', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('400ms cubic-bezier(0.86, 0, 0.07, 1)')), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('void => visibleAnimated, visibleAnimated => void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('400ms cubic-bezier(0.86, 0, 0.07, 1)'))])]
        }]
      }], function () {
        return [{
          type: _app_main_component__WEBPACK_IMPORTED_MODULE_4__["AppMainComponent"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }, {
          type: _services_menu_service__WEBPACK_IMPORTED_MODULE_5__["MenuService"]
        }];
      }, {
        item: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        index: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        root: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        parentKey: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var primeng_menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! primeng/menu */
    "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-menu.js");
    /* harmony import */


    var primeng_breadcrumb__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! primeng/breadcrumb */
    "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-breadcrumb.js");
    /* harmony import */


    var primeng_tabmenu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! primeng/tabmenu */
    "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-tabmenu.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _app_main_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./app.main.component */
    "./src/app/app.main.component.ts");
    /* harmony import */


    var _app_topbar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./app.topbar.component */
    "./src/app/app.topbar.component.ts");
    /* harmony import */


    var _app_breadcrumb_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./app.breadcrumb.component */
    "./src/app/app.breadcrumb.component.ts");
    /* harmony import */


    var _app_menu_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./app.menu.component */
    "./src/app/app.menu.component.ts");
    /* harmony import */


    var _app_menuitem_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./app.menuitem.component */
    "./src/app/app.menuitem.component.ts");
    /* harmony import */


    var _app_footer_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./app.footer.component */
    "./src/app/app.footer.component.ts");
    /* harmony import */


    var _services_breadcrumb_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./services/breadcrumb.service */
    "./src/app/services/breadcrumb.service.ts");
    /* harmony import */


    var _services_menu_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./services/menu.service */
    "./src/app/services/menu.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var primeng_api__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! primeng/api */
    "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-api.js"); //// PrimeNG Module


    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [_services_breadcrumb_service__WEBPACK_IMPORTED_MODULE_13__["BreadcrumbService"], _services_menu_service__WEBPACK_IMPORTED_MODULE_14__["MenuService"]],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], //// PrimeNG
      primeng_menu__WEBPACK_IMPORTED_MODULE_3__["MenuModule"], primeng_breadcrumb__WEBPACK_IMPORTED_MODULE_4__["BreadcrumbModule"], primeng_tabmenu__WEBPACK_IMPORTED_MODULE_5__["TabMenuModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"], _app_main_component__WEBPACK_IMPORTED_MODULE_7__["AppMainComponent"], _app_topbar_component__WEBPACK_IMPORTED_MODULE_8__["AppTopBarComponent"], _app_breadcrumb_component__WEBPACK_IMPORTED_MODULE_9__["AppBreadcrumbComponent"], _app_menu_component__WEBPACK_IMPORTED_MODULE_10__["AppMenuComponent"], _app_menuitem_component__WEBPACK_IMPORTED_MODULE_11__["AppMenuitemComponent"], _app_footer_component__WEBPACK_IMPORTED_MODULE_12__["AppFooterComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], //// PrimeNG
        primeng_menu__WEBPACK_IMPORTED_MODULE_3__["MenuModule"], primeng_breadcrumb__WEBPACK_IMPORTED_MODULE_4__["BreadcrumbModule"], primeng_tabmenu__WEBPACK_IMPORTED_MODULE_5__["TabMenuModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"], _app_main_component__WEBPACK_IMPORTED_MODULE_7__["AppMainComponent"], _app_topbar_component__WEBPACK_IMPORTED_MODULE_8__["AppTopBarComponent"], _app_breadcrumb_component__WEBPACK_IMPORTED_MODULE_9__["AppBreadcrumbComponent"], _app_menu_component__WEBPACK_IMPORTED_MODULE_10__["AppMenuComponent"], _app_menuitem_component__WEBPACK_IMPORTED_MODULE_11__["AppMenuitemComponent"], _app_footer_component__WEBPACK_IMPORTED_MODULE_12__["AppFooterComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], //// PrimeNG
          primeng_menu__WEBPACK_IMPORTED_MODULE_3__["MenuModule"], primeng_breadcrumb__WEBPACK_IMPORTED_MODULE_4__["BreadcrumbModule"], primeng_tabmenu__WEBPACK_IMPORTED_MODULE_5__["TabMenuModule"]],
          providers: [_services_breadcrumb_service__WEBPACK_IMPORTED_MODULE_13__["BreadcrumbService"], _services_menu_service__WEBPACK_IMPORTED_MODULE_14__["MenuService"]],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        }]
      }], null, null);
    })();

    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetComponentScope"](_app_main_component__WEBPACK_IMPORTED_MODULE_7__["AppMainComponent"], [_angular_common__WEBPACK_IMPORTED_MODULE_15__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_15__["NgComponentOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_15__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_15__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_15__["NgTemplateOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_15__["NgStyle"], _angular_common__WEBPACK_IMPORTED_MODULE_15__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_15__["NgSwitchCase"], _angular_common__WEBPACK_IMPORTED_MODULE_15__["NgSwitchDefault"], _angular_common__WEBPACK_IMPORTED_MODULE_15__["NgPlural"], _angular_common__WEBPACK_IMPORTED_MODULE_15__["NgPluralCase"], _angular_router__WEBPACK_IMPORTED_MODULE_16__["RouterOutlet"], _angular_router__WEBPACK_IMPORTED_MODULE_16__["RouterLink"], _angular_router__WEBPACK_IMPORTED_MODULE_16__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_16__["RouterLinkActive"], _angular_router__WEBPACK_IMPORTED_MODULE_16__["ɵangular_packages_router_router_l"], primeng_menu__WEBPACK_IMPORTED_MODULE_3__["Menu"], primeng_breadcrumb__WEBPACK_IMPORTED_MODULE_4__["Breadcrumb"], primeng_tabmenu__WEBPACK_IMPORTED_MODULE_5__["TabMenu"], primeng_api__WEBPACK_IMPORTED_MODULE_17__["Header"], primeng_api__WEBPACK_IMPORTED_MODULE_17__["Footer"], primeng_api__WEBPACK_IMPORTED_MODULE_17__["PrimeTemplate"], _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"], _app_main_component__WEBPACK_IMPORTED_MODULE_7__["AppMainComponent"], _app_topbar_component__WEBPACK_IMPORTED_MODULE_8__["AppTopBarComponent"], _app_breadcrumb_component__WEBPACK_IMPORTED_MODULE_9__["AppBreadcrumbComponent"], _app_menu_component__WEBPACK_IMPORTED_MODULE_10__["AppMenuComponent"], _app_menuitem_component__WEBPACK_IMPORTED_MODULE_11__["AppMenuitemComponent"], _app_footer_component__WEBPACK_IMPORTED_MODULE_12__["AppFooterComponent"]], [_angular_common__WEBPACK_IMPORTED_MODULE_15__["AsyncPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_15__["UpperCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_15__["LowerCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_15__["JsonPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_15__["SlicePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_15__["DecimalPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_15__["PercentPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_15__["TitleCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_15__["CurrencyPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_15__["DatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_15__["I18nPluralPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_15__["I18nSelectPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_15__["KeyValuePipe"]]);
    /***/

  },

  /***/
  "./src/app/app.topbar.component.ts":
  /*!*****************************************!*\
    !*** ./src/app/app.topbar.component.ts ***!
    \*****************************************/

  /*! exports provided: AppTopBarComponent */

  /***/
  function srcAppAppTopbarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppTopBarComponent", function () {
      return AppTopBarComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_main_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./app.main.component */
    "./src/app/app.main.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    function AppTopBarComponent_a_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "SERENITY");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var _c0 = function _c0(a0) {
      return {
        "topbar-menu-active": a0
      };
    };

    var _c1 = function _c1(a0) {
      return {
        "active-topmenuitem": a0
      };
    };

    var AppTopBarComponent = function AppTopBarComponent(app) {
      _classCallCheck(this, AppTopBarComponent);

      this.app = app;
    };

    AppTopBarComponent.ɵfac = function AppTopBarComponent_Factory(t) {
      return new (t || AppTopBarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_main_component__WEBPACK_IMPORTED_MODULE_1__["AppMainComponent"]));
    };

    AppTopBarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppTopBarComponent,
      selectors: [["app-topbar"]],
      decls: 151,
      vars: 16,
      consts: [[1, "layout-topbar"], ["routerLink", "/", "class", "topbar-logo", 4, "ngIf"], ["alt", "logo", "src", "assets/layout/images/logo-slim.png", 1, "mobile-logo"], ["href", "#", 1, "menu-btn", 3, "click"], [1, "material-icons"], ["href", "#", 1, "topbar-menu-btn", 3, "click"], [1, "layout-topbar-menu-wrapper"], [1, "topbar-menu", "fadeInDown", 3, "ngClass", "click"], [1, "profile-item", 3, "ngClass", "click"], ["profile", ""], ["href", "#"], [1, "profile-image-wrapper"], ["src", "assets/layout/images/avatar.png"], [1, "topbar-item-name", "profile-name"], [1, "fadeInDown"], ["role", "menuitem"], [3, "ngClass", "click"], ["settings", ""], [1, "topbar-icon", "material-icons"], [1, "topbar-item-name"], ["messages", ""], [1, "topbar-icon", "material-icons", "animated", "swing"], [1, "topbar-badge", "animated", "rubberBand"], ["href", "#", 1, "topbar-message"], ["src", "assets/layout/images/avatar1.png", "width", "35"], ["src", "assets/layout/images/avatar2.png", "width", "35"], ["src", "assets/layout/images/avatar3.png", "width", "35"], ["src", "assets/layout/images/avatar4.png", "width", "35"], ["notifications", ""], [1, "search-item"], [1, "md-inputfield"], ["type", "text", "pInputText", ""], ["routerLink", "/", 1, "topbar-logo"], ["alt", "logo", "src", "assets/layout/images/logo-slim.png"], [1, "app-name"]],
      template: function AppTopBarComponent_Template(rf, ctx) {
        if (rf & 1) {
          var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AppTopBarComponent_a_1_Template, 4, 0, "a", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppTopBarComponent_Template_a_click_3_listener($event) {
            return ctx.app.onMenuButtonClick($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "i", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\uE5D2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppTopBarComponent_Template_a_click_6_listener($event) {
            return ctx.app.onTopbarMobileMenuButtonClick($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "i", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "\uE853");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "ul", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppTopBarComponent_Template_ul_click_10_listener($event) {
            return ctx.app.onTopbarMenuClick($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li", 8, 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppTopBarComponent_Template_li_click_11_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);

            var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](12);

            return ctx.app.onTopbarRootItemClick($event, _r1);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "img", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "span", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Wendy Lorina");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "ul", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "li", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "i", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "account_circle");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Profile");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "li", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "a", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "i", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "verified_user");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Privacy");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "li", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "a", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "i", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "settings_application");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Settings");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "li", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "a", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "i", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "exit_to_app");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Logout");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "li", 16, 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppTopBarComponent_Template_li_click_43_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);

            var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](44);

            return ctx.app.onTopbarRootItemClick($event, _r2);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "a", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "i", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "settings");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "span", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Settings");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "ul", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "li", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "a", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "i", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "palette");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Change Theme");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "li", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "a", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "i", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "star");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "Favorites");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "li", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "a", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "i", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "lock");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "Lock Screen");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "li", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "a", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "i", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "wallpaper");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "Wallpaper");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "li", 16, 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppTopBarComponent_Template_li_click_75_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);

            var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](76);

            return ctx.app.onTopbarRootItemClick($event, _r3);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "a", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "i", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "\uE0C9");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "span", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "span", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "Messages");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "ul", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "li", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "a", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](87, "img", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, "Give me a call");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "li", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "a", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](92, "img", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94, "Sales reports attached");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "li", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "a", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](97, "img", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99, "About your invoice");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "li", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "a", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](102, "img", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](104, "Meeting today at 10pm");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "li", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "a", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](107, "img", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](109, "Out of office");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "li", 16, 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppTopBarComponent_Template_li_click_110_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);

            var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](111);

            return ctx.app.onTopbarRootItemClick($event, _r4);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "a", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "i", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](114, "notifications");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "span", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](116, "4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "span", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](118, "Notifications");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "ul", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "li", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "a", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "i", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](123, "bug_report");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](125, "Pending tasks");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "li", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "a", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "i", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](129, "event");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](131, "Meeting today at 3pm");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "li", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "a", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "i", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](135, "cloud_download");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](137, "Download documents");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "li", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "a", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "i", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](141, "flight");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](143, "Book flight");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](144, "li", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "span", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](146, "input", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](148, "Search");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](149, "i", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](150, "search");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](12);

          var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](44);

          var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](76);

          var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](111);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.app.isHorizontal() && !ctx.app.isMobile());

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c0, ctx.app.topbarMenuActive));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](8, _c1, ctx.app.activeTopbarItem === _r1));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](10, _c1, ctx.app.activeTopbarItem === _r2));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](12, _c1, ctx.app.activeTopbarItem === _r3));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](14, _c1, ctx.app.activeTopbarItem === _r4));
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"]],
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppTopBarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-topbar',
          templateUrl: './app.topbar.component.html'
        }]
      }], function () {
        return [{
          type: _app_main_component__WEBPACK_IMPORTED_MODULE_1__["AppMainComponent"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/breadcrumb.service.ts":
  /*!************************************************!*\
    !*** ./src/app/services/breadcrumb.service.ts ***!
    \************************************************/

  /*! exports provided: BreadcrumbService */

  /***/
  function srcAppServicesBreadcrumbServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BreadcrumbService", function () {
      return BreadcrumbService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    var BreadcrumbService = /*#__PURE__*/function () {
      function BreadcrumbService() {
        _classCallCheck(this, BreadcrumbService);

        this.itemsSource = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.itemsHandler = this.itemsSource.asObservable();
      }

      _createClass(BreadcrumbService, [{
        key: "setItems",
        value: function setItems(items) {
          this.itemsSource.next(items);
        }
      }]);

      return BreadcrumbService;
    }();

    BreadcrumbService.ɵfac = function BreadcrumbService_Factory(t) {
      return new (t || BreadcrumbService)();
    };

    BreadcrumbService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: BreadcrumbService,
      factory: BreadcrumbService.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BreadcrumbService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/menu.service.ts":
  /*!******************************************!*\
    !*** ./src/app/services/menu.service.ts ***!
    \******************************************/

  /*! exports provided: MenuService */

  /***/
  function srcAppServicesMenuServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MenuService", function () {
      return MenuService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    var MenuService = /*#__PURE__*/function () {
      function MenuService() {
        _classCallCheck(this, MenuService);

        this.menuSource = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.resetSource = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.menuSource$ = this.menuSource.asObservable();
        this.resetSource$ = this.resetSource.asObservable();
      }

      _createClass(MenuService, [{
        key: "onMenuStateChange",
        value: function onMenuStateChange(key) {
          this.menuSource.next(key);
        }
      }, {
        key: "reset",
        value: function reset() {
          this.resetSource.next();
        }
      }]);

      return MenuService;
    }();

    MenuService.ɵfac = function MenuService_Factory(t) {
      return new (t || MenuService)();
    };

    MenuService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: MenuService,
      factory: MenuService.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MenuService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! D:\Larry\Projects\Express\Express.AdminUI\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map