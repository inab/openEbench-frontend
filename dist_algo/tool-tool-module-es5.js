function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e5) { throw _e5; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e6) { didErr = true; err = _e6; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tool-tool-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/content-table/content-table.component.html":
  /*!**************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/content-table/content-table.component.html ***!
    \**************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppContentTableContentTableComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div>\n\n    <ul>\n        <li>Table of Content</li>\n        <li *ngFor=\"let content of contents\"><a [routerLink]=\"\" fragment=\"{{content}}\">{{content}}</a></li>\n    </ul>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/tool/tool-detail/tool-detail.component.html":
  /*!***************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tool/tool-detail/tool-detail.component.html ***!
    \***************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppToolToolDetailToolDetailComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<span *ngIf=\"tools;else loading\">\n    <span *ngIf=\"tools.length!=0; else toolNotFound\">\n        <span *ngFor=\"let instance of tools\">\n\n            <h4 class=\"text-center\">{{instance?.id | uppercase}}\n\n            </h4>\n            <p class=\"text-center\"><span *ngFor=\"let r of cdr\">\n                    <span class=\"cdr-badge\" *ngIf=\"instance?.id==r\">Core Data Resource</span>\n                </span></p>\n            <p class=\"text-center\"><small><a\n                        href=\"{{selectedValue['web']['homepage']}}\">{{selectedValue['web']['homepage']}}</a></small></p>\n\n            <p class=\"text-center\"><span *ngFor=\"let source of sources\" (click)=\"sourceHref(source,instance?.id)\"\n                    ngClass=\"badge-no-color false-link\">{{source}}</span>\n            </p>\n\n            <!-- <app-content-table [contents]=tableOfContent></app-content-table> -->\n            <mat-tab-group (selectedTabChange)=\"onTabChange($event)\">\n                <span *ngFor=\"let entity of instance.entities\">\n\n                    <mat-tab *ngIf=\"entity.type!=null\">\n                        <ng-template mat-tab-label>\n                            {{entity.type | uppercase}}\n\n                        </ng-template>\n                        <ng-template matTabContent>\n\n\n                            <b> Version : </b>\n                            <mat-form-field>\n                                <mat-select [(ngModel)]=\"selectedValue\" [ngModelOptions]=\"{standalone: true}\"\n                                    (selectionChange)=\"onVersionChange($event)\">\n                                    <mat-option *ngFor=\"let tool of entity.tools\" [value]=\"tool\">\n                                        {{tool['@version']? tool['@version'] : 'N/A'}}</mat-option>\n                                </mat-select>\n\n                            </mat-form-field>\n\n\n                            <p class=\"card-group alert alert-warning text-center\" *ngIf=\"selectedValue.depricated\">This\n                                version of\n                                the resource is deprecated or has been deleted\n                                from the original\n                                entry</p>\n\n\n                            <div class=\"card-group\">\n                                <div class=\"card border-light\">\n\n                                    <p><b> Description : </b>{{selectedValue.description}}</p>\n                                    <span *ngIf=\"selectedValue.depricated=='true'\">\n                                        <p>{{selectedValue.depricated}}</p>\n                                    </span>\n                                    <span>\n                                        <p><b>OS : </b> <span *ngIf=\"selectedValue.os;else notavailable\"> <span\n                                                    *ngFor=\"let os of selectedValue.os\">{{os}} </span></span>\n                                        </p>\n                                    </span>\n                                </div>\n                            </div>\n                            <hr>\n                            <div class=\"card-group\" *ngIf=\"metrics\">\n                                <div class=\"card border-light\">\n                                    <h3 id=\"Metrics\" class=\"card-title\">Metrics</h3>\n                                    <small class=\"card-subtitle mb-2 text-muted\">Brief description of metrics\n                                        collected</small>\n                                    <br>\n                                    <br>\n                                    <p ngClass=\"{{metrics?.project?.website?  '' : 'hide-metric'}}\"><b>Accessibility :\n                                        </b>\n                                        <span\n                                            ngClass=\"{{metrics?.project?.website?  '' : 'hide-metric'}} {{metrics?.project?.website?.bioschemas? 'metrics-true' : 'metrics-false'}}\">Bioschema</span>\n                                        <span\n                                            ngClass=\"{{metrics?.project?.website?  '' : 'hide-metric'}} {{metrics?.project?.website?.ssl? 'metrics-true' : 'metrics-false'}}\">SSL</span>\n\n                                        <p ngClass=\"{{metrics?.project?.license?  '' : 'hide-metric'}}\"><b>License :\n                                            </b>\n                                            <span\n                                                ngClass=\"{{metrics?.project?.license?  '' : 'hide-metric'}} {{metrics?.project?.license?.open_source? 'metrics-true' : 'metrics-false'}}\">Open\n                                                Source</span>\n                                            <span\n                                                ngClass=\"{{metrics?.project?.license?  '' : 'hide-metric'}} {{metrics?.project?.license?.osi? 'metrics-true' : 'metrics-false'}}\">OSI</span>\n\n\n                                            <p ngClass=\"{{metrics?.project?.documentation? '' : 'hide-metric'}} \">\n                                                <b>Documentation : </b>\n                                                <span\n                                                    ngClass=\"{{metrics?.project?.documentation? '' : 'hide-metric'}} {{metrics?.project?.documentation?.manual? 'metrics-true' : 'metrics-false'}}\">Manual</span>\n                                                <span\n                                                    ngClass=\"{{metrics?.project?.documentation? '' : 'hide-metric'}} {{ metrics?.project?.documentation?.general? 'metrics-true' : 'metrics-false'}}\">General</span>\n                                                <span\n                                                    ngClass=\"{{metrics?.project?.documentation? '' : 'hide-metric'}} {{metrics?.project?.documentation?.faq? 'metrics-true' : 'metrics-false'}}\">FAQ</span>\n                                                <span\n                                                    ngClass=\"{{metrics?.project?.documentation? '' : 'hide-metric'}} {{metrics?.project?.documentation?.terms_of_use? 'metrics-true' : 'metrics-false'}}\">Terms\n                                                    of use</span>\n\n                                                <p\n                                                    ngClass=\"{{metrics? '' : 'hide-metric'}}{{metrics?.distribution? '' : 'hide-metric'}}\">\n                                                    <b>Distribution : </b>\n                                                    <span\n                                                        ngClass=\"{{metrics?.distribution? '' : 'hide-metric'}} {{metrics?.distribution?.vre? '' : 'hide-metric'}} {{metrics?.distribution?.vre? 'metrics-true' : 'metrics-false'}}\">VRE</span>\n                                                    <span\n                                                        ngClass=\"{{metrics?.distribution? '' : 'hide-metric'}} {{metrics?.distribution?.sourcecode? '' : 'hide-metric'}} {{metrics?.distribution?.sourcecode? 'metrics-true' : 'metrics-false'}}\">Sourcecode</span>\n\n                                </div>\n                            </div>\n\n                            <hr>\n                            <div class=\"card-group\" *ngIf=\"metrics\">\n                                <div class=\" card border-light \">\n                                    <h3 id=\"Uptime\" class=\"card-title \">Uptime / Accesstime</h3>\n                                    <h1></h1>\n                                    <small class=\"card-subtitle mb-2 text-muted \">Displays if the service is currently\n                                        available</small>\n\n                                    <div data-id=\"uptime\" data-xaxis='true'\n                                        attr.data-url=\"{{selectedValue['@id'] | chartId}}\" data-limit=14\n                                        class=\"opebuptime \" #opebuptime>\n\n                                    </div>\n                                </div>\n                            </div>\n\n                            <hr>\n                            <div class=\"card-group \" *ngIf=\"metrics \">\n                                <div class=\"card border-light \">\n                                    <h3 id=\"Publication\" class=\"card-title \">Publications</h3>\n                                    <small class=\"card-subtitle mb-2 text-muted \">Amout of citations for each of the\n                                        publications</small>\n\n\n                                    <span *ngIf=\"metrics.project.publications \">\n                                        <div *ngIf=\"metrics.project.publications.length<=0 \">\n                                            <p class=\"text-center \">No publications found for this version</p>\n                                        </div>\n                                    </span>\n                                    <!-- <p>{{selectedValue['@id'] | chartId}}</p> -->\n                                    <div data-id=\"citation\" data-h=\"400\" data-legend=\"true\"\n                                        attr.data-url=\"{{selectedValue['@id'] | chartId}}\" class=\"opebcitations\"\n                                        #opebcitations>\n                                    </div>\n                                </div>\n                            </div>\n\n                            <small>\n                                * If no publications are available for this version of the please select a different\n                                version\n                            </small>\n\n                            <!-- <br>\n              <a href=\"{{selectedValue[ '@id']}} \">{{selectedValue['@id']}}</a>\n              <br>\n              <a href=\"{{selectedValue[ 'metrics']}} \">{{selectedValue['metrics']}}</a> -->\n                            <!-- <hr>\n                            <div class=\"card-group\">\n\n                                <h3>Report tool</h3>\n                                <ol>\n                                    <li>\n                                        <button mat-raised-button (click)=\"openDialog()\">Pick one</button>\n                                    </li>\n                                    <li *ngIf=\"animal\">\n                                        You chose: <i>{{animal}}</i>\n                                    </li>\n                                </ol>\n\n\n                            </div> -->\n                        </ng-template>\n\n\n\n                    </mat-tab>\n                </span>\n\n\n            </mat-tab-group>\n\n        </span>\n    </span>\n</span>\n\n<br>\n<br>\n\n\n<ng-template #loading>\n    <mat-spinner></mat-spinner>\n</ng-template>\n<ng-template #toolNotFound>Tool Not Found</ng-template>\n<ng-template #notavailable> N/A </ng-template>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/tool/tool-table/tool-table.component.html":
  /*!*************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tool/tool-table/tool-table.component.html ***!
    \*************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppToolToolTableToolTableComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<span *ngIf='tools;else loading'>\n\n\n  <div>\n    <form [formGroup]=\"search\" novalidate>\n\n      <mat-form-field>\n        <input matInput placeholder=\"Filter\" value=\"{{filterValue!=null? filterValue : ''}}\" type=\"text\"\n          formControlName='text'>\n      </mat-form-field>\n\n      <mat-form-field>\n        <mat-select placeholder=\"Search in \" id=\"select\" formControlName='filter' disableOptionCentering>\n          <mat-option *ngFor=\"let option of options\" [value]=\"option\"> {{option}}\n          </mat-option>\n        </mat-select>\n      </mat-form-field>\n\n      <mat-form-field>\n        <mat-select placeholder=\"Type\" formControlName=\"type\" multiple matTooltip=\"Filter by type of tool\"\n          disableOptionCentering>\n          <mat-option *ngFor=\"let type of typeList\" [value]=\"type\" aria-selected=\"true\">{{type | uppercase}}\n          </mat-option>\n        </mat-select>\n      </mat-form-field>\n\n      <mat-form-field>\n        <input matInput placeholder=\"Edam\" value=\"{{edamFilterValue!=null? edamFilterValue : ''}}\" type=\"text\"\n          formControlName='label'>\n      </mat-form-field>\n\n\n      <button mat-raised-button type=\"submit\" (click)='submitForm()' [disabled]=\"!search.valid\" matTooltip=\"Go\"\n        matTooltipPosition=\"right\">submit</button>\n    </form>\n  </div>\n\n\n  <div class=\" \" *ngIf=\"tools.length > 0;else noentriesfound\">\n\n    <!-- <button mat-raised-button (click)=\"sidenav.toggle()\"><i class=\"material-icons\">tune</i></button>       -->\n    <mat-table #table [dataSource]=\"tools\" class=\"table-content\">\n\n\n\n      <ng-container matColumnDef=\"tool-card\">\n\n        <mat-cell class=\"\" *matCellDef=\"let tool\">\n          <div class=\"table-fields\">\n\n            <a routerLink={{tool.id}} name=\"{{tool.id}}\" matTooltip=\"{{tool.id}} details\"\n              matTooltipPosition=\"right\">{{tool.id}}</a>\n            <span *ngFor=\"let r of cdr\">\n              <span class=\"cdr-badge\" *ngIf=\"tool.id==r\">Core Data Resource</span>\n            </span>\n            <p class=\"table-desc\"><span>{{tool.entities[0].tools[0]['description']}}</span>\n            </p>\n\n            <span *ngFor=\"let entity of tool.entities\"> {{entity.type | uppercase}}</span>\n            <p><a target=\"_blank\" href=\"{{tool.entities[0].tools[0]['web']['homepage']}}\"\n                matTooltip=\"Visit tool homepage\" matTooltipPosition=\"right\">Website</a></p>\n            <p appOnIteration=\"getMetricsForTool(tool.id)\"></p>\n          </div>\n        </mat-cell>\n      </ng-container>\n      <mat-row *matRowDef=\"let row; columns: ['tool-card'];\"></mat-row>\n    </mat-table>\n    <mat-paginator [length]=length [pageIndex]=pageIndex [pageSize]=pageSize [pageSizeOptions]=[10,20]\n      (page)=\"changePage($event)\">\n    </mat-paginator>\n  </div>\n\n\n</span>\n<ng-template #loading>\n  <mat-spinner></mat-spinner>\n</ng-template>\n<ng-template #noentriesfound>No entries found</ng-template>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/tool/tool.component.html":
  /*!********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tool/tool.component.html ***!
    \********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppToolToolComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<router-outlet></router-outlet > \n\n\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/uptime/uptime.component.html":
  /*!************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/uptime/uptime.component.html ***!
    \************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppUptimeUptimeComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p>uptime works!</p>\n";
    /***/
  },

  /***/
  "./src/app/content-table/content-table.component.css":
  /*!***********************************************************!*\
    !*** ./src/app/content-table/content-table.component.css ***!
    \***********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppContentTableContentTableComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "div {\n    display: inline-block;\n    float: right;\n    margin: 46px 0px 0px 20px;\n    padding-left: 20px;\n    border-left: 2px solid #0a589f;\n}\n\na {\n    font-size: 14px;\n}\n\nul {\n    padding: 0;\n    margin: 0;\n}\n\nli {\n    list-style-type: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGVudC10YWJsZS9jb250ZW50LXRhYmxlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxxQkFBcUI7SUFDckIsWUFBWTtJQUNaLHlCQUF5QjtJQUN6QixrQkFBa0I7SUFDbEIsOEJBQThCO0FBQ2xDOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLFVBQVU7SUFDVixTQUFTO0FBQ2I7O0FBRUE7SUFDSSxxQkFBcUI7QUFDekIiLCJmaWxlIjoic3JjL2FwcC9jb250ZW50LXRhYmxlL2NvbnRlbnQtdGFibGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImRpdiB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGZsb2F0OiByaWdodDtcbiAgICBtYXJnaW46IDQ2cHggMHB4IDBweCAyMHB4O1xuICAgIHBhZGRpbmctbGVmdDogMjBweDtcbiAgICBib3JkZXItbGVmdDogMnB4IHNvbGlkICMwYTU4OWY7XG59XG5cbmEge1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbn1cblxudWwge1xuICAgIHBhZGRpbmc6IDA7XG4gICAgbWFyZ2luOiAwO1xufVxuXG5saSB7XG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/content-table/content-table.component.ts":
  /*!**********************************************************!*\
    !*** ./src/app/content-table/content-table.component.ts ***!
    \**********************************************************/

  /*! exports provided: ContentTableComponent */

  /***/
  function srcAppContentTableContentTableComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ContentTableComponent", function () {
      return ContentTableComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var ContentTableComponent = /*#__PURE__*/function () {
      function ContentTableComponent() {
        _classCallCheck(this, ContentTableComponent);
      }

      _createClass(ContentTableComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          console.log(this.contents);
        }
      }]);

      return ContentTableComponent;
    }();

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)], ContentTableComponent.prototype, "contents", void 0);
    ContentTableComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-content-table',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./content-table.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/content-table/content-table.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./content-table.component.css */
      "./src/app/content-table/content-table.component.css"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], ContentTableComponent);
    /***/
  },

  /***/
  "./src/app/content-table/content-table.module.ts":
  /*!*******************************************************!*\
    !*** ./src/app/content-table/content-table.module.ts ***!
    \*******************************************************/

  /*! exports provided: ContentTableModule */

  /***/
  function srcAppContentTableContentTableModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ContentTableModule", function () {
      return ContentTableModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _content_table_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./content-table.component */
    "./src/app/content-table/content-table.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _material_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../material.module */
    "./src/app/material.module.ts");

    var ContentTableModule = function ContentTableModule() {
      _classCallCheck(this, ContentTableModule);
    };

    ContentTableModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_content_table_component__WEBPACK_IMPORTED_MODULE_3__["ContentTableComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"], _material_module__WEBPACK_IMPORTED_MODULE_5__["MaterialModule"]],
      exports: [_content_table_component__WEBPACK_IMPORTED_MODULE_3__["ContentTableComponent"]],
      providers: []
    })], ContentTableModule);
    /***/
  },

  /***/
  "./src/app/tool/shared/citation.js":
  /*!*****************************************!*\
    !*** ./src/app/tool/shared/citation.js ***!
    \*****************************************/

  /*! no static exports found */

  /***/
  function srcAppToolSharedCitationJs(module, exports) {
    !function (t, e) {
      for (var n in e) {
        t[n] = e[n];
      }
    }(this, function (t) {
      var e = {};

      function n(r) {
        if (e[r]) return e[r].exports;
        var i = e[r] = {
          i: r,
          l: !1,
          exports: {}
        };
        return t[r].call(i.exports, i, i.exports, n), i.l = !0, i.exports;
      }

      return n.m = t, n.c = e, n.d = function (t, e, r) {
        n.o(t, e) || Object.defineProperty(t, e, {
          configurable: !1,
          enumerable: !0,
          get: r
        });
      }, n.r = function (t) {
        Object.defineProperty(t, "__esModule", {
          value: !0
        });
      }, n.n = function (t) {
        var e = t && t.__esModule ? function () {
          return t["default"];
        } : function () {
          return t;
        };
        return n.d(e, "a", e), e;
      }, n.o = function (t, e) {
        return Object.prototype.hasOwnProperty.call(t, e);
      }, n.p = "", n(n.s = 34);
    }([function (t, e, n) {
      "use strict";

      var r = "http://www.w3.org/1999/xhtml",
          i = {
        svg: "http://www.w3.org/2000/svg",
        xhtml: r,
        xlink: "http://www.w3.org/1999/xlink",
        xml: "http://www.w3.org/XML/1998/namespace",
        xmlns: "http://www.w3.org/2000/xmlns/"
      },
          a = function a(t) {
        var e = t += "",
            n = e.indexOf(":");
        return n >= 0 && "xmlns" !== (e = t.slice(0, n)) && (t = t.slice(n + 1)), i.hasOwnProperty(e) ? {
          space: i[e],
          local: t
        } : t;
      };

      var o = function o(t) {
        var e = a(t);
        return (e.local ? function (t) {
          return function () {
            return this.ownerDocument.createElementNS(t.space, t.local);
          };
        } : function (t) {
          return function () {
            var e = this.ownerDocument,
                n = this.namespaceURI;
            return n === r && e.documentElement.namespaceURI === r ? e.createElement(t) : e.createElementNS(n, t);
          };
        })(e);
      };

      function u() {}

      var c = function c(t) {
        return null == t ? u : function () {
          return this.querySelector(t);
        };
      };

      function s() {
        return [];
      }

      var f = function f(t) {
        return null == t ? s : function () {
          return this.querySelectorAll(t);
        };
      },
          l = function l(t) {
        return function () {
          return this.matches(t);
        };
      };

      if ("undefined" != typeof document) {
        var d = document.documentElement;

        if (!d.matches) {
          var h = d.webkitMatchesSelector || d.msMatchesSelector || d.mozMatchesSelector || d.oMatchesSelector;

          l = function l(t) {
            return function () {
              return h.call(this, t);
            };
          };
        }
      }

      var g = l,
          p = function p(t) {
        return new Array(t.length);
      };

      function _(t, e) {
        this.ownerDocument = t.ownerDocument, this.namespaceURI = t.namespaceURI, this._next = null, this._parent = t, this.__data__ = e;
      }

      _.prototype = {
        constructor: _,
        appendChild: function appendChild(t) {
          return this._parent.insertBefore(t, this._next);
        },
        insertBefore: function insertBefore(t, e) {
          return this._parent.insertBefore(t, e);
        },
        querySelector: function querySelector(t) {
          return this._parent.querySelector(t);
        },
        querySelectorAll: function querySelectorAll(t) {
          return this._parent.querySelectorAll(t);
        }
      };
      var x = "$";

      function y(t, e, n, r, i, a) {
        for (var o, u = 0, c = e.length, s = a.length; u < s; ++u) {
          (o = e[u]) ? (o.__data__ = a[u], r[u] = o) : n[u] = new _(t, a[u]);
        }

        for (; u < c; ++u) {
          (o = e[u]) && (i[u] = o);
        }
      }

      function v(t, e, n, r, i, a, o) {
        var u,
            c,
            s,
            f = {},
            l = e.length,
            d = a.length,
            h = new Array(l);

        for (u = 0; u < l; ++u) {
          (c = e[u]) && (h[u] = s = x + o.call(c, c.__data__, u, e), s in f ? i[u] = c : f[s] = c);
        }

        for (u = 0; u < d; ++u) {
          (c = f[s = x + o.call(t, a[u], u, a)]) ? (r[u] = c, c.__data__ = a[u], f[s] = null) : n[u] = new _(t, a[u]);
        }

        for (u = 0; u < l; ++u) {
          (c = e[u]) && f[h[u]] === c && (i[u] = c);
        }
      }

      function b(t, e) {
        return t < e ? -1 : t > e ? 1 : t >= e ? 0 : NaN;
      }

      var m = function m(t) {
        return t.ownerDocument && t.ownerDocument.defaultView || t.document && t || t.defaultView;
      };

      function w(t, e) {
        return t.style.getPropertyValue(e) || m(t).getComputedStyle(t, null).getPropertyValue(e);
      }

      function S(t) {
        return t.trim().split(/^|\s+/);
      }

      function A(t) {
        return t.classList || new T(t);
      }

      function T(t) {
        this._node = t, this._names = S(t.getAttribute("class") || "");
      }

      function P(t, e) {
        for (var n = A(t), r = -1, i = e.length; ++r < i;) {
          n.add(e[r]);
        }
      }

      function C(t, e) {
        for (var n = A(t), r = -1, i = e.length; ++r < i;) {
          n.remove(e[r]);
        }
      }

      T.prototype = {
        add: function add(t) {
          this._names.indexOf(t) < 0 && (this._names.push(t), this._node.setAttribute("class", this._names.join(" ")));
        },
        remove: function remove(t) {
          var e = this._names.indexOf(t);

          e >= 0 && (this._names.splice(e, 1), this._node.setAttribute("class", this._names.join(" ")));
        },
        contains: function contains(t) {
          return this._names.indexOf(t) >= 0;
        }
      };

      function M() {
        this.textContent = "";
      }

      function L() {
        this.innerHTML = "";
      }

      function E() {
        this.nextSibling && this.parentNode.appendChild(this);
      }

      function O() {
        this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild);
      }

      function k() {
        return null;
      }

      function V() {
        var t = this.parentNode;
        t && t.removeChild(this);
      }

      function G() {
        return this.parentNode.insertBefore(this.cloneNode(!1), this.nextSibling);
      }

      function R() {
        return this.parentNode.insertBefore(this.cloneNode(!0), this.nextSibling);
      }

      var I = {},
          N = null;
      "undefined" != typeof document && ("onmouseenter" in document.documentElement || (I = {
        mouseenter: "mouseover",
        mouseleave: "mouseout"
      }));

      function D(t, e, n) {
        return t = F(t, e, n), function (e) {
          var n = e.relatedTarget;
          n && (n === this || 8 & n.compareDocumentPosition(this)) || t.call(this, e);
        };
      }

      function F(t, e, n) {
        return function (r) {
          var i = N;
          N = r;

          try {
            t.call(this, this.__data__, e, n);
          } finally {
            N = i;
          }
        };
      }

      function z(t) {
        return function () {
          var e = this.__on;

          if (e) {
            for (var n, r = 0, i = -1, a = e.length; r < a; ++r) {
              n = e[r], t.type && n.type !== t.type || n.name !== t.name ? e[++i] = n : this.removeEventListener(n.type, n.listener, n.capture);
            }

            ++i ? e.length = i : delete this.__on;
          }
        };
      }

      function j(t, e, n) {
        var r = I.hasOwnProperty(t.type) ? D : F;
        return function (i, a, o) {
          var u,
              c = this.__on,
              s = r(e, a, o);
          if (c) for (var f = 0, l = c.length; f < l; ++f) {
            if ((u = c[f]).type === t.type && u.name === t.name) return this.removeEventListener(u.type, u.listener, u.capture), this.addEventListener(u.type, u.listener = s, u.capture = n), void (u.value = e);
          }
          this.addEventListener(t.type, s, n), u = {
            type: t.type,
            name: t.name,
            value: e,
            listener: s,
            capture: n
          }, c ? c.push(u) : this.__on = [u];
        };
      }

      function X(t, e, n, r) {
        var i = N;
        t.sourceEvent = N, N = t;

        try {
          return e.apply(n, r);
        } finally {
          N = i;
        }
      }

      function B(t, e, n) {
        var r = m(t),
            i = r.CustomEvent;
        "function" == typeof i ? i = new i(e, n) : (i = r.document.createEvent("Event"), n ? (i.initEvent(e, n.bubbles, n.cancelable), i.detail = n.detail) : i.initEvent(e, !1, !1)), t.dispatchEvent(i);
      }

      var H = [null];

      function Y(t, e) {
        this._groups = t, this._parents = e;
      }

      function U() {
        return new Y([[document.documentElement]], H);
      }

      Y.prototype = U.prototype = {
        constructor: Y,
        select: function select(t) {
          "function" != typeof t && (t = c(t));

          for (var e = this._groups, n = e.length, r = new Array(n), i = 0; i < n; ++i) {
            for (var a, o, u = e[i], s = u.length, f = r[i] = new Array(s), l = 0; l < s; ++l) {
              (a = u[l]) && (o = t.call(a, a.__data__, l, u)) && ("__data__" in a && (o.__data__ = a.__data__), f[l] = o);
            }
          }

          return new Y(r, this._parents);
        },
        selectAll: function selectAll(t) {
          "function" != typeof t && (t = f(t));

          for (var e = this._groups, n = e.length, r = [], i = [], a = 0; a < n; ++a) {
            for (var o, u = e[a], c = u.length, s = 0; s < c; ++s) {
              (o = u[s]) && (r.push(t.call(o, o.__data__, s, u)), i.push(o));
            }
          }

          return new Y(r, i);
        },
        filter: function filter(t) {
          "function" != typeof t && (t = g(t));

          for (var e = this._groups, n = e.length, r = new Array(n), i = 0; i < n; ++i) {
            for (var a, o = e[i], u = o.length, c = r[i] = [], s = 0; s < u; ++s) {
              (a = o[s]) && t.call(a, a.__data__, s, o) && c.push(a);
            }
          }

          return new Y(r, this._parents);
        },
        data: function data(t, e) {
          if (!t) return g = new Array(this.size()), f = -1, this.each(function (t) {
            g[++f] = t;
          }), g;
          var n,
              r = e ? v : y,
              i = this._parents,
              a = this._groups;
          "function" != typeof t && (n = t, t = function t() {
            return n;
          });

          for (var o = a.length, u = new Array(o), c = new Array(o), s = new Array(o), f = 0; f < o; ++f) {
            var l = i[f],
                d = a[f],
                h = d.length,
                g = t.call(l, l && l.__data__, f, i),
                p = g.length,
                _ = c[f] = new Array(p),
                x = u[f] = new Array(p);

            r(l, d, _, x, s[f] = new Array(h), g, e);

            for (var b, m, w = 0, S = 0; w < p; ++w) {
              if (b = _[w]) {
                for (w >= S && (S = w + 1); !(m = x[S]) && ++S < p;) {
                  ;
                }

                b._next = m || null;
              }
            }
          }

          return (u = new Y(u, i))._enter = c, u._exit = s, u;
        },
        enter: function enter() {
          return new Y(this._enter || this._groups.map(p), this._parents);
        },
        exit: function exit() {
          return new Y(this._exit || this._groups.map(p), this._parents);
        },
        merge: function merge(t) {
          for (var e = this._groups, n = t._groups, r = e.length, i = n.length, a = Math.min(r, i), o = new Array(r), u = 0; u < a; ++u) {
            for (var c, s = e[u], f = n[u], l = s.length, d = o[u] = new Array(l), h = 0; h < l; ++h) {
              (c = s[h] || f[h]) && (d[h] = c);
            }
          }

          for (; u < r; ++u) {
            o[u] = e[u];
          }

          return new Y(o, this._parents);
        },
        order: function order() {
          for (var t = this._groups, e = -1, n = t.length; ++e < n;) {
            for (var r, i = t[e], a = i.length - 1, o = i[a]; --a >= 0;) {
              (r = i[a]) && (o && o !== r.nextSibling && o.parentNode.insertBefore(r, o), o = r);
            }
          }

          return this;
        },
        sort: function sort(t) {
          function e(e, n) {
            return e && n ? t(e.__data__, n.__data__) : !e - !n;
          }

          t || (t = b);

          for (var n = this._groups, r = n.length, i = new Array(r), a = 0; a < r; ++a) {
            for (var o, u = n[a], c = u.length, s = i[a] = new Array(c), f = 0; f < c; ++f) {
              (o = u[f]) && (s[f] = o);
            }

            s.sort(e);
          }

          return new Y(i, this._parents).order();
        },
        call: function call() {
          var t = arguments[0];
          return arguments[0] = this, t.apply(null, arguments), this;
        },
        nodes: function nodes() {
          var t = new Array(this.size()),
              e = -1;
          return this.each(function () {
            t[++e] = this;
          }), t;
        },
        node: function node() {
          for (var t = this._groups, e = 0, n = t.length; e < n; ++e) {
            for (var r = t[e], i = 0, a = r.length; i < a; ++i) {
              var o = r[i];
              if (o) return o;
            }
          }

          return null;
        },
        size: function size() {
          var t = 0;
          return this.each(function () {
            ++t;
          }), t;
        },
        empty: function empty() {
          return !this.node();
        },
        each: function each(t) {
          for (var e = this._groups, n = 0, r = e.length; n < r; ++n) {
            for (var i, a = e[n], o = 0, u = a.length; o < u; ++o) {
              (i = a[o]) && t.call(i, i.__data__, o, a);
            }
          }

          return this;
        },
        attr: function attr(t, e) {
          var n = a(t);

          if (arguments.length < 2) {
            var r = this.node();
            return n.local ? r.getAttributeNS(n.space, n.local) : r.getAttribute(n);
          }

          return this.each((null == e ? n.local ? function (t) {
            return function () {
              this.removeAttributeNS(t.space, t.local);
            };
          } : function (t) {
            return function () {
              this.removeAttribute(t);
            };
          } : "function" == typeof e ? n.local ? function (t, e) {
            return function () {
              var n = e.apply(this, arguments);
              null == n ? this.removeAttributeNS(t.space, t.local) : this.setAttributeNS(t.space, t.local, n);
            };
          } : function (t, e) {
            return function () {
              var n = e.apply(this, arguments);
              null == n ? this.removeAttribute(t) : this.setAttribute(t, n);
            };
          } : n.local ? function (t, e) {
            return function () {
              this.setAttributeNS(t.space, t.local, e);
            };
          } : function (t, e) {
            return function () {
              this.setAttribute(t, e);
            };
          })(n, e));
        },
        style: function style(t, e, n) {
          return arguments.length > 1 ? this.each((null == e ? function (t) {
            return function () {
              this.style.removeProperty(t);
            };
          } : "function" == typeof e ? function (t, e, n) {
            return function () {
              var r = e.apply(this, arguments);
              null == r ? this.style.removeProperty(t) : this.style.setProperty(t, r, n);
            };
          } : function (t, e, n) {
            return function () {
              this.style.setProperty(t, e, n);
            };
          })(t, e, null == n ? "" : n)) : w(this.node(), t);
        },
        property: function property(t, e) {
          return arguments.length > 1 ? this.each((null == e ? function (t) {
            return function () {
              delete this[t];
            };
          } : "function" == typeof e ? function (t, e) {
            return function () {
              var n = e.apply(this, arguments);
              null == n ? delete this[t] : this[t] = n;
            };
          } : function (t, e) {
            return function () {
              this[t] = e;
            };
          })(t, e)) : this.node()[t];
        },
        classed: function classed(t, e) {
          var n = S(t + "");

          if (arguments.length < 2) {
            for (var r = A(this.node()), i = -1, a = n.length; ++i < a;) {
              if (!r.contains(n[i])) return !1;
            }

            return !0;
          }

          return this.each(("function" == typeof e ? function (t, e) {
            return function () {
              (e.apply(this, arguments) ? P : C)(this, t);
            };
          } : e ? function (t) {
            return function () {
              P(this, t);
            };
          } : function (t) {
            return function () {
              C(this, t);
            };
          })(n, e));
        },
        text: function text(t) {
          return arguments.length ? this.each(null == t ? M : ("function" == typeof t ? function (t) {
            return function () {
              var e = t.apply(this, arguments);
              this.textContent = null == e ? "" : e;
            };
          } : function (t) {
            return function () {
              this.textContent = t;
            };
          })(t)) : this.node().textContent;
        },
        html: function html(t) {
          return arguments.length ? this.each(null == t ? L : ("function" == typeof t ? function (t) {
            return function () {
              var e = t.apply(this, arguments);
              this.innerHTML = null == e ? "" : e;
            };
          } : function (t) {
            return function () {
              this.innerHTML = t;
            };
          })(t)) : this.node().innerHTML;
        },
        raise: function raise() {
          return this.each(E);
        },
        lower: function lower() {
          return this.each(O);
        },
        append: function append(t) {
          var e = "function" == typeof t ? t : o(t);
          return this.select(function () {
            return this.appendChild(e.apply(this, arguments));
          });
        },
        insert: function insert(t, e) {
          var n = "function" == typeof t ? t : o(t),
              r = null == e ? k : "function" == typeof e ? e : c(e);
          return this.select(function () {
            return this.insertBefore(n.apply(this, arguments), r.apply(this, arguments) || null);
          });
        },
        remove: function remove() {
          return this.each(V);
        },
        clone: function clone(t) {
          return this.select(t ? R : G);
        },
        datum: function datum(t) {
          return arguments.length ? this.property("__data__", t) : this.node().__data__;
        },
        on: function on(t, e, n) {
          var r,
              i,
              a = function (t) {
            return t.trim().split(/^|\s+/).map(function (t) {
              var e = "",
                  n = t.indexOf(".");
              return n >= 0 && (e = t.slice(n + 1), t = t.slice(0, n)), {
                type: t,
                name: e
              };
            });
          }(t + ""),
              o = a.length;

          if (!(arguments.length < 2)) {
            for (u = e ? j : z, null == n && (n = !1), r = 0; r < o; ++r) {
              this.each(u(a[r], e, n));
            }

            return this;
          }

          var u = this.node().__on;

          if (u) for (var c, s = 0, f = u.length; s < f; ++s) {
            for (r = 0, c = u[s]; r < o; ++r) {
              if ((i = a[r]).type === c.type && i.name === c.name) return c.value;
            }
          }
        },
        dispatch: function dispatch(t, e) {
          return this.each(("function" == typeof e ? function (t, e) {
            return function () {
              return B(this, t, e.apply(this, arguments));
            };
          } : function (t, e) {
            return function () {
              return B(this, t, e);
            };
          })(t, e));
        }
      };

      var q = U,
          W = function W(t) {
        return "string" == typeof t ? new Y([[document.querySelector(t)]], [document.documentElement]) : new Y([[t]], H);
      },
          Q = function Q(t) {
        return W(o(t).call(document.documentElement));
      },
          Z = 0;

      function $() {
        return new K();
      }

      function K() {
        this._ = "@" + (++Z).toString(36);
      }

      K.prototype = $.prototype = {
        constructor: K,
        get: function get(t) {
          for (var e = this._; !(e in t);) {
            if (!(t = t.parentNode)) return;
          }

          return t[e];
        },
        set: function set(t, e) {
          return t[this._] = e;
        },
        remove: function remove(t) {
          return this._ in t && delete t[this._];
        },
        toString: function toString() {
          return this._;
        }
      };

      var J = function J() {
        for (var t, e = N; t = e.sourceEvent;) {
          e = t;
        }

        return e;
      },
          tt = function tt(t, e) {
        var n = t.ownerSVGElement || t;

        if (n.createSVGPoint) {
          var r = n.createSVGPoint();
          return r.x = e.clientX, r.y = e.clientY, [(r = r.matrixTransform(t.getScreenCTM().inverse())).x, r.y];
        }

        var i = t.getBoundingClientRect();
        return [e.clientX - i.left - t.clientLeft, e.clientY - i.top - t.clientTop];
      },
          et = function et(t) {
        var e = J();
        return e.changedTouches && (e = e.changedTouches[0]), tt(t, e);
      },
          nt = function nt(t) {
        return "string" == typeof t ? new Y([document.querySelectorAll(t)], [document.documentElement]) : new Y([null == t ? [] : t], H);
      },
          rt = function rt(t, e, n) {
        arguments.length < 3 && (n = e, e = J().changedTouches);

        for (var r, i = 0, a = e ? e.length : 0; i < a; ++i) {
          if ((r = e[i]).identifier === n) return tt(t, r);
        }

        return null;
      },
          it = function it(t, e) {
        null == e && (e = J().touches);

        for (var n = 0, r = e ? e.length : 0, i = new Array(r); n < r; ++n) {
          i[n] = tt(t, e[n]);
        }

        return i;
      };

      n.d(e, "b", function () {
        return Q;
      }), n.d(e, "c", function () {
        return o;
      }), n.d(e, "f", function () {
        return $;
      }), n.d(e, "g", function () {
        return g;
      }), n.d(e, "h", function () {
        return et;
      }), n.d(e, "i", function () {
        return a;
      }), n.d(e, "j", function () {
        return i;
      }), n.d(e, "a", function () {
        return tt;
      }), n.d(e, "k", function () {
        return W;
      }), n.d(e, "l", function () {
        return nt;
      }), n.d(e, "m", function () {
        return q;
      }), n.d(e, "n", function () {
        return c;
      }), n.d(e, "o", function () {
        return f;
      }), n.d(e, "p", function () {
        return w;
      }), n.d(e, "q", function () {
        return rt;
      }), n.d(e, "r", function () {
        return it;
      }), n.d(e, "s", function () {
        return m;
      }), n.d(e, "e", function () {
        return N;
      }), n.d(e, "d", function () {
        return X;
      });
    }, function (t, e, n) {
      "use strict";

      var r = function r(t, e) {
        return t < e ? -1 : t > e ? 1 : t >= e ? 0 : NaN;
      },
          i = function i(t) {
        var e;
        return 1 === t.length && (e = t, t = function t(_t2, n) {
          return r(e(_t2), n);
        }), {
          left: function left(e, n, r, i) {
            for (null == r && (r = 0), null == i && (i = e.length); r < i;) {
              var a = r + i >>> 1;
              t(e[a], n) < 0 ? r = a + 1 : i = a;
            }

            return r;
          },
          right: function right(e, n, r, i) {
            for (null == r && (r = 0), null == i && (i = e.length); r < i;) {
              var a = r + i >>> 1;
              t(e[a], n) > 0 ? i = a : r = a + 1;
            }

            return r;
          }
        };
      };

      var a = i(r),
          o = a.right,
          u = a.left,
          c = o,
          s = function s(t, e) {
        null == e && (e = f);

        for (var n = 0, r = t.length - 1, i = t[0], a = new Array(r < 0 ? 0 : r); n < r;) {
          a[n] = e(i, i = t[++n]);
        }

        return a;
      };

      function f(t, e) {
        return [t, e];
      }

      var l = function l(t, e, n) {
        var r,
            i,
            a,
            o,
            u = t.length,
            c = e.length,
            s = new Array(u * c);

        for (null == n && (n = f), r = a = 0; r < u; ++r) {
          for (o = t[r], i = 0; i < c; ++i, ++a) {
            s[a] = n(o, e[i]);
          }
        }

        return s;
      },
          d = function d(t, e) {
        return e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN;
      },
          h = function h(t) {
        return null === t ? NaN : +t;
      },
          g = function g(t, e) {
        var n,
            r,
            i = t.length,
            a = 0,
            o = -1,
            u = 0,
            c = 0;
        if (null == e) for (; ++o < i;) {
          isNaN(n = h(t[o])) || (c += (r = n - u) * (n - (u += r / ++a)));
        } else for (; ++o < i;) {
          isNaN(n = h(e(t[o], o, t))) || (c += (r = n - u) * (n - (u += r / ++a)));
        }
        if (a > 1) return c / (a - 1);
      },
          p = function p(t, e) {
        var n = g(t, e);
        return n ? Math.sqrt(n) : n;
      },
          _ = function _(t, e) {
        var n,
            r,
            i,
            a = t.length,
            o = -1;

        if (null == e) {
          for (; ++o < a;) {
            if (null != (n = t[o]) && n >= n) for (r = i = n; ++o < a;) {
              null != (n = t[o]) && (r > n && (r = n), i < n && (i = n));
            }
          }
        } else for (; ++o < a;) {
          if (null != (n = e(t[o], o, t)) && n >= n) for (r = i = n; ++o < a;) {
            null != (n = e(t[o], o, t)) && (r > n && (r = n), i < n && (i = n));
          }
        }

        return [r, i];
      },
          x = Array.prototype,
          y = x.slice,
          v = x.map,
          b = function b(t) {
        return function () {
          return t;
        };
      },
          m = function m(t) {
        return t;
      },
          w = function w(t, e, n) {
        t = +t, e = +e, n = (i = arguments.length) < 2 ? (e = t, t = 0, 1) : i < 3 ? 1 : +n;

        for (var r = -1, i = 0 | Math.max(0, Math.ceil((e - t) / n)), a = new Array(i); ++r < i;) {
          a[r] = t + r * n;
        }

        return a;
      },
          S = Math.sqrt(50),
          A = Math.sqrt(10),
          T = Math.sqrt(2),
          P = function P(t, e, n) {
        var r,
            i,
            a,
            o,
            u = -1;
        if (n = +n, (t = +t) === (e = +e) && n > 0) return [t];
        if ((r = e < t) && (i = t, t = e, e = i), 0 === (o = C(t, e, n)) || !isFinite(o)) return [];
        if (o > 0) for (t = Math.ceil(t / o), e = Math.floor(e / o), a = new Array(i = Math.ceil(e - t + 1)); ++u < i;) {
          a[u] = (t + u) * o;
        } else for (t = Math.floor(t * o), e = Math.ceil(e * o), a = new Array(i = Math.ceil(t - e + 1)); ++u < i;) {
          a[u] = (t - u) / o;
        }
        return r && a.reverse(), a;
      };

      function C(t, e, n) {
        var r = (e - t) / Math.max(0, n),
            i = Math.floor(Math.log(r) / Math.LN10),
            a = r / Math.pow(10, i);
        return i >= 0 ? (a >= S ? 10 : a >= A ? 5 : a >= T ? 2 : 1) * Math.pow(10, i) : -Math.pow(10, -i) / (a >= S ? 10 : a >= A ? 5 : a >= T ? 2 : 1);
      }

      function M(t, e, n) {
        var r = Math.abs(e - t) / Math.max(0, n),
            i = Math.pow(10, Math.floor(Math.log(r) / Math.LN10)),
            a = r / i;
        return a >= S ? i *= 10 : a >= A ? i *= 5 : a >= T && (i *= 2), e < t ? -i : i;
      }

      var L = function L(t) {
        return Math.ceil(Math.log(t.length) / Math.LN2) + 1;
      },
          E = function E() {
        var t = m,
            e = _,
            n = L;

        function r(r) {
          var i,
              a,
              o = r.length,
              u = new Array(o);

          for (i = 0; i < o; ++i) {
            u[i] = t(r[i], i, r);
          }

          var s = e(u),
              f = s[0],
              l = s[1],
              d = n(u, f, l);
          Array.isArray(d) || (d = M(f, l, d), d = w(Math.ceil(f / d) * d, Math.floor(l / d) * d, d));

          for (var h = d.length; d[0] <= f;) {
            d.shift(), --h;
          }

          for (; d[h - 1] > l;) {
            d.pop(), --h;
          }

          var g,
              p = new Array(h + 1);

          for (i = 0; i <= h; ++i) {
            (g = p[i] = []).x0 = i > 0 ? d[i - 1] : f, g.x1 = i < h ? d[i] : l;
          }

          for (i = 0; i < o; ++i) {
            f <= (a = u[i]) && a <= l && p[c(d, a, 0, h)].push(r[i]);
          }

          return p;
        }

        return r.value = function (e) {
          return arguments.length ? (t = "function" == typeof e ? e : b(e), r) : t;
        }, r.domain = function (t) {
          return arguments.length ? (e = "function" == typeof t ? t : b([t[0], t[1]]), r) : e;
        }, r.thresholds = function (t) {
          return arguments.length ? (n = "function" == typeof t ? t : Array.isArray(t) ? b(y.call(t)) : b(t), r) : n;
        }, r;
      },
          O = function O(t, e, n) {
        if (null == n && (n = h), r = t.length) {
          if ((e = +e) <= 0 || r < 2) return +n(t[0], 0, t);
          if (e >= 1) return +n(t[r - 1], r - 1, t);
          var r,
              i = (r - 1) * e,
              a = Math.floor(i),
              o = +n(t[a], a, t);
          return o + (+n(t[a + 1], a + 1, t) - o) * (i - a);
        }
      },
          k = function k(t, e, n) {
        return t = v.call(t, h).sort(r), Math.ceil((n - e) / (2 * (O(t, .75) - O(t, .25)) * Math.pow(t.length, -1 / 3)));
      },
          V = function V(t, e, n) {
        return Math.ceil((n - e) / (3.5 * p(t) * Math.pow(t.length, -1 / 3)));
      },
          G = function G(t, e) {
        var n,
            r,
            i = t.length,
            a = -1;

        if (null == e) {
          for (; ++a < i;) {
            if (null != (n = t[a]) && n >= n) for (r = n; ++a < i;) {
              null != (n = t[a]) && n > r && (r = n);
            }
          }
        } else for (; ++a < i;) {
          if (null != (n = e(t[a], a, t)) && n >= n) for (r = n; ++a < i;) {
            null != (n = e(t[a], a, t)) && n > r && (r = n);
          }
        }

        return r;
      },
          R = function R(t, e) {
        var n,
            r = t.length,
            i = r,
            a = -1,
            o = 0;
        if (null == e) for (; ++a < r;) {
          isNaN(n = h(t[a])) ? --i : o += n;
        } else for (; ++a < r;) {
          isNaN(n = h(e(t[a], a, t))) ? --i : o += n;
        }
        if (i) return o / i;
      },
          I = function I(t, e) {
        var n,
            i = t.length,
            a = -1,
            o = [];
        if (null == e) for (; ++a < i;) {
          isNaN(n = h(t[a])) || o.push(n);
        } else for (; ++a < i;) {
          isNaN(n = h(e(t[a], a, t))) || o.push(n);
        }
        return O(o.sort(r), .5);
      },
          N = function N(t) {
        for (var e, n, r, i = t.length, a = -1, o = 0; ++a < i;) {
          o += t[a].length;
        }

        for (n = new Array(o); --i >= 0;) {
          for (e = (r = t[i]).length; --e >= 0;) {
            n[--o] = r[e];
          }
        }

        return n;
      },
          D = function D(t, e) {
        var n,
            r,
            i = t.length,
            a = -1;

        if (null == e) {
          for (; ++a < i;) {
            if (null != (n = t[a]) && n >= n) for (r = n; ++a < i;) {
              null != (n = t[a]) && r > n && (r = n);
            }
          }
        } else for (; ++a < i;) {
          if (null != (n = e(t[a], a, t)) && n >= n) for (r = n; ++a < i;) {
            null != (n = e(t[a], a, t)) && r > n && (r = n);
          }
        }

        return r;
      },
          F = function F(t, e) {
        for (var n = e.length, r = new Array(n); n--;) {
          r[n] = t[e[n]];
        }

        return r;
      },
          z = function z(t, e) {
        if (n = t.length) {
          var n,
              i,
              a = 0,
              o = 0,
              u = t[o];

          for (null == e && (e = r); ++a < n;) {
            (e(i = t[a], u) < 0 || 0 !== e(u, u)) && (u = i, o = a);
          }

          return 0 === e(u, u) ? o : void 0;
        }
      },
          j = function j(t, e, n) {
        for (var r, i, a = (null == n ? t.length : n) - (e = null == e ? 0 : +e); a;) {
          i = Math.random() * a-- | 0, r = t[a + e], t[a + e] = t[i + e], t[i + e] = r;
        }

        return t;
      },
          X = function X(t, e) {
        var n,
            r = t.length,
            i = -1,
            a = 0;
        if (null == e) for (; ++i < r;) {
          (n = +t[i]) && (a += n);
        } else for (; ++i < r;) {
          (n = +e(t[i], i, t)) && (a += n);
        }
        return a;
      },
          B = function B(t) {
        if (!(i = t.length)) return [];

        for (var e = -1, n = D(t, H), r = new Array(n); ++e < n;) {
          for (var i, a = -1, o = r[e] = new Array(i); ++a < i;) {
            o[a] = t[a][e];
          }
        }

        return r;
      };

      function H(t) {
        return t.length;
      }

      var Y = function Y() {
        return B(arguments);
      };

      n.d(e, "b", function () {
        return c;
      }), n.d(e, "d", function () {
        return o;
      }), n.d(e, "c", function () {
        return u;
      }), n.d(e, "a", function () {
        return r;
      }), n.d(e, "e", function () {
        return i;
      }), n.d(e, "f", function () {
        return l;
      }), n.d(e, "g", function () {
        return d;
      }), n.d(e, "h", function () {
        return p;
      }), n.d(e, "i", function () {
        return _;
      }), n.d(e, "j", function () {
        return E;
      }), n.d(e, "w", function () {
        return k;
      }), n.d(e, "x", function () {
        return V;
      }), n.d(e, "y", function () {
        return L;
      }), n.d(e, "k", function () {
        return G;
      }), n.d(e, "l", function () {
        return R;
      }), n.d(e, "m", function () {
        return I;
      }), n.d(e, "n", function () {
        return N;
      }), n.d(e, "o", function () {
        return D;
      }), n.d(e, "p", function () {
        return s;
      }), n.d(e, "q", function () {
        return F;
      }), n.d(e, "r", function () {
        return O;
      }), n.d(e, "s", function () {
        return w;
      }), n.d(e, "t", function () {
        return z;
      }), n.d(e, "u", function () {
        return j;
      }), n.d(e, "v", function () {
        return X;
      }), n.d(e, "B", function () {
        return P;
      }), n.d(e, "z", function () {
        return C;
      }), n.d(e, "A", function () {
        return M;
      }), n.d(e, "C", function () {
        return B;
      }), n.d(e, "D", function () {
        return g;
      }), n.d(e, "E", function () {
        return Y;
      });
    }, function (t, e, n) {
      "use strict";

      var r = new Date(),
          i = new Date();

      function a(t, e, n, o) {
        function u(e) {
          return t(e = new Date(+e)), e;
        }

        return u.floor = u, u.ceil = function (n) {
          return t(n = new Date(n - 1)), e(n, 1), t(n), n;
        }, u.round = function (t) {
          var e = u(t),
              n = u.ceil(t);
          return t - e < n - t ? e : n;
        }, u.offset = function (t, n) {
          return e(t = new Date(+t), null == n ? 1 : Math.floor(n)), t;
        }, u.range = function (n, r, i) {
          var a,
              o = [];
          if (n = u.ceil(n), i = null == i ? 1 : Math.floor(i), !(n < r && i > 0)) return o;

          do {
            o.push(a = new Date(+n)), e(n, i), t(n);
          } while (a < n && n < r);

          return o;
        }, u.filter = function (n) {
          return a(function (e) {
            if (e >= e) for (; t(e), !n(e);) {
              e.setTime(e - 1);
            }
          }, function (t, r) {
            if (t >= t) if (r < 0) for (; ++r <= 0;) {
              for (; e(t, -1), !n(t);) {
                ;
              }
            } else for (; --r >= 0;) {
              for (; e(t, 1), !n(t);) {
                ;
              }
            }
          });
        }, n && (u.count = function (e, a) {
          return r.setTime(+e), i.setTime(+a), t(r), t(i), Math.floor(n(r, i));
        }, u.every = function (t) {
          return t = Math.floor(t), isFinite(t) && t > 0 ? t > 1 ? u.filter(o ? function (e) {
            return o(e) % t == 0;
          } : function (e) {
            return u.count(0, e) % t == 0;
          }) : u : null;
        }), u;
      }

      var o = a(function () {}, function (t, e) {
        t.setTime(+t + e);
      }, function (t, e) {
        return e - t;
      });

      o.every = function (t) {
        return t = Math.floor(t), isFinite(t) && t > 0 ? t > 1 ? a(function (e) {
          e.setTime(Math.floor(e / t) * t);
        }, function (e, n) {
          e.setTime(+e + n * t);
        }, function (e, n) {
          return (n - e) / t;
        }) : o : null;
      };

      var u = o,
          c = o.range,
          s = 6e4,
          f = 6048e5,
          l = a(function (t) {
        t.setTime(1e3 * Math.floor(t / 1e3));
      }, function (t, e) {
        t.setTime(+t + 1e3 * e);
      }, function (t, e) {
        return (e - t) / 1e3;
      }, function (t) {
        return t.getUTCSeconds();
      }),
          d = l,
          h = l.range,
          g = a(function (t) {
        t.setTime(Math.floor(t / s) * s);
      }, function (t, e) {
        t.setTime(+t + e * s);
      }, function (t, e) {
        return (e - t) / s;
      }, function (t) {
        return t.getMinutes();
      }),
          p = g,
          _ = g.range,
          x = a(function (t) {
        var e = t.getTimezoneOffset() * s % 36e5;
        e < 0 && (e += 36e5), t.setTime(36e5 * Math.floor((+t - e) / 36e5) + e);
      }, function (t, e) {
        t.setTime(+t + 36e5 * e);
      }, function (t, e) {
        return (e - t) / 36e5;
      }, function (t) {
        return t.getHours();
      }),
          y = x,
          v = x.range,
          b = a(function (t) {
        t.setHours(0, 0, 0, 0);
      }, function (t, e) {
        t.setDate(t.getDate() + e);
      }, function (t, e) {
        return (e - t - (e.getTimezoneOffset() - t.getTimezoneOffset()) * s) / 864e5;
      }, function (t) {
        return t.getDate() - 1;
      }),
          m = b,
          w = b.range;

      function S(t) {
        return a(function (e) {
          e.setDate(e.getDate() - (e.getDay() + 7 - t) % 7), e.setHours(0, 0, 0, 0);
        }, function (t, e) {
          t.setDate(t.getDate() + 7 * e);
        }, function (t, e) {
          return (e - t - (e.getTimezoneOffset() - t.getTimezoneOffset()) * s) / f;
        });
      }

      var A = S(0),
          T = S(1),
          P = S(2),
          C = S(3),
          M = S(4),
          L = S(5),
          E = S(6),
          O = A.range,
          k = T.range,
          V = P.range,
          G = C.range,
          R = M.range,
          I = L.range,
          N = E.range,
          D = a(function (t) {
        t.setDate(1), t.setHours(0, 0, 0, 0);
      }, function (t, e) {
        t.setMonth(t.getMonth() + e);
      }, function (t, e) {
        return e.getMonth() - t.getMonth() + 12 * (e.getFullYear() - t.getFullYear());
      }, function (t) {
        return t.getMonth();
      }),
          F = D,
          z = D.range,
          j = a(function (t) {
        t.setMonth(0, 1), t.setHours(0, 0, 0, 0);
      }, function (t, e) {
        t.setFullYear(t.getFullYear() + e);
      }, function (t, e) {
        return e.getFullYear() - t.getFullYear();
      }, function (t) {
        return t.getFullYear();
      });

      j.every = function (t) {
        return isFinite(t = Math.floor(t)) && t > 0 ? a(function (e) {
          e.setFullYear(Math.floor(e.getFullYear() / t) * t), e.setMonth(0, 1), e.setHours(0, 0, 0, 0);
        }, function (e, n) {
          e.setFullYear(e.getFullYear() + n * t);
        }) : null;
      };

      var X = j,
          B = j.range,
          H = a(function (t) {
        t.setUTCSeconds(0, 0);
      }, function (t, e) {
        t.setTime(+t + e * s);
      }, function (t, e) {
        return (e - t) / s;
      }, function (t) {
        return t.getUTCMinutes();
      }),
          Y = H,
          U = H.range,
          q = a(function (t) {
        t.setUTCMinutes(0, 0, 0);
      }, function (t, e) {
        t.setTime(+t + 36e5 * e);
      }, function (t, e) {
        return (e - t) / 36e5;
      }, function (t) {
        return t.getUTCHours();
      }),
          W = q,
          Q = q.range,
          Z = a(function (t) {
        t.setUTCHours(0, 0, 0, 0);
      }, function (t, e) {
        t.setUTCDate(t.getUTCDate() + e);
      }, function (t, e) {
        return (e - t) / 864e5;
      }, function (t) {
        return t.getUTCDate() - 1;
      }),
          $ = Z,
          K = Z.range;

      function J(t) {
        return a(function (e) {
          e.setUTCDate(e.getUTCDate() - (e.getUTCDay() + 7 - t) % 7), e.setUTCHours(0, 0, 0, 0);
        }, function (t, e) {
          t.setUTCDate(t.getUTCDate() + 7 * e);
        }, function (t, e) {
          return (e - t) / f;
        });
      }

      var tt = J(0),
          et = J(1),
          nt = J(2),
          rt = J(3),
          it = J(4),
          at = J(5),
          ot = J(6),
          ut = tt.range,
          ct = et.range,
          st = nt.range,
          ft = rt.range,
          lt = it.range,
          dt = at.range,
          ht = ot.range,
          gt = a(function (t) {
        t.setUTCDate(1), t.setUTCHours(0, 0, 0, 0);
      }, function (t, e) {
        t.setUTCMonth(t.getUTCMonth() + e);
      }, function (t, e) {
        return e.getUTCMonth() - t.getUTCMonth() + 12 * (e.getUTCFullYear() - t.getUTCFullYear());
      }, function (t) {
        return t.getUTCMonth();
      }),
          pt = gt,
          _t = gt.range,
          xt = a(function (t) {
        t.setUTCMonth(0, 1), t.setUTCHours(0, 0, 0, 0);
      }, function (t, e) {
        t.setUTCFullYear(t.getUTCFullYear() + e);
      }, function (t, e) {
        return e.getUTCFullYear() - t.getUTCFullYear();
      }, function (t) {
        return t.getUTCFullYear();
      });

      xt.every = function (t) {
        return isFinite(t = Math.floor(t)) && t > 0 ? a(function (e) {
          e.setUTCFullYear(Math.floor(e.getUTCFullYear() / t) * t), e.setUTCMonth(0, 1), e.setUTCHours(0, 0, 0, 0);
        }, function (e, n) {
          e.setUTCFullYear(e.getUTCFullYear() + n * t);
        }) : null;
      };

      var yt = xt,
          vt = xt.range;
      n.d(e, "g", function () {
        return a;
      }), n.d(e, "h", function () {
        return u;
      }), n.d(e, "i", function () {
        return c;
      }), n.d(e, "L", function () {
        return u;
      }), n.d(e, "M", function () {
        return c;
      }), n.d(e, "r", function () {
        return d;
      }), n.d(e, "s", function () {
        return h;
      }), n.d(e, "V", function () {
        return d;
      }), n.d(e, "W", function () {
        return h;
      }), n.d(e, "j", function () {
        return p;
      }), n.d(e, "k", function () {
        return _;
      }), n.d(e, "e", function () {
        return y;
      }), n.d(e, "f", function () {
        return v;
      }), n.d(e, "a", function () {
        return m;
      }), n.d(e, "b", function () {
        return w;
      }), n.d(e, "B", function () {
        return A;
      }), n.d(e, "C", function () {
        return O;
      }), n.d(e, "t", function () {
        return A;
      }), n.d(e, "u", function () {
        return O;
      }), n.d(e, "l", function () {
        return T;
      }), n.d(e, "m", function () {
        return k;
      }), n.d(e, "x", function () {
        return P;
      }), n.d(e, "y", function () {
        return V;
      }), n.d(e, "z", function () {
        return C;
      }), n.d(e, "A", function () {
        return G;
      }), n.d(e, "v", function () {
        return M;
      }), n.d(e, "w", function () {
        return R;
      }), n.d(e, "c", function () {
        return L;
      }), n.d(e, "d", function () {
        return I;
      }), n.d(e, "p", function () {
        return E;
      }), n.d(e, "q", function () {
        return N;
      }), n.d(e, "n", function () {
        return F;
      }), n.d(e, "o", function () {
        return z;
      }), n.d(e, "D", function () {
        return X;
      }), n.d(e, "E", function () {
        return B;
      }), n.d(e, "N", function () {
        return Y;
      }), n.d(e, "O", function () {
        return U;
      }), n.d(e, "J", function () {
        return W;
      }), n.d(e, "K", function () {
        return Q;
      }), n.d(e, "F", function () {
        return $;
      }), n.d(e, "G", function () {
        return K;
      }), n.d(e, "Fa", function () {
        return tt;
      }), n.d(e, "Ga", function () {
        return ut;
      }), n.d(e, "X", function () {
        return tt;
      }), n.d(e, "Y", function () {
        return ut;
      }), n.d(e, "P", function () {
        return et;
      }), n.d(e, "Q", function () {
        return ct;
      }), n.d(e, "Ba", function () {
        return nt;
      }), n.d(e, "Ca", function () {
        return st;
      }), n.d(e, "Da", function () {
        return rt;
      }), n.d(e, "Ea", function () {
        return ft;
      }), n.d(e, "Z", function () {
        return it;
      }), n.d(e, "Aa", function () {
        return lt;
      }), n.d(e, "H", function () {
        return at;
      }), n.d(e, "I", function () {
        return dt;
      }), n.d(e, "T", function () {
        return ot;
      }), n.d(e, "U", function () {
        return ht;
      }), n.d(e, "R", function () {
        return pt;
      }), n.d(e, "S", function () {
        return _t;
      }), n.d(e, "Ha", function () {
        return yt;
      }), n.d(e, "Ia", function () {
        return vt;
      });
    }, function (t, e, n) {
      "use strict";

      var r = n(4);

      function i(t, e, n, r, i) {
        var a = t * t,
            o = a * t;
        return ((1 - 3 * t + 3 * a - o) * e + (4 - 6 * a + 3 * o) * n + (1 + 3 * t + 3 * a - 3 * o) * r + o * i) / 6;
      }

      var a = function a(t) {
        var e = t.length - 1;
        return function (n) {
          var r = n <= 0 ? n = 0 : n >= 1 ? (n = 1, e - 1) : Math.floor(n * e),
              a = t[r],
              o = t[r + 1],
              u = r > 0 ? t[r - 1] : 2 * a - o,
              c = r < e - 1 ? t[r + 2] : 2 * o - a;
          return i((n - r / e) * e, u, a, o, c);
        };
      },
          o = function o(t) {
        var e = t.length;
        return function (n) {
          var r = Math.floor(((n %= 1) < 0 ? ++n : n) * e),
              a = t[(r + e - 1) % e],
              o = t[r % e],
              u = t[(r + 1) % e],
              c = t[(r + 2) % e];
          return i((n - r / e) * e, a, o, u, c);
        };
      },
          u = function u(t) {
        return function () {
          return t;
        };
      };

      function c(t, e) {
        return function (n) {
          return t + n * e;
        };
      }

      function s(t, e) {
        var n = e - t;
        return n ? c(t, n > 180 || n < -180 ? n - 360 * Math.round(n / 360) : n) : u(isNaN(t) ? e : t);
      }

      function f(t) {
        return 1 == (t = +t) ? l : function (e, n) {
          return n - e ? function (t, e, n) {
            return t = Math.pow(t, n), e = Math.pow(e, n) - t, n = 1 / n, function (r) {
              return Math.pow(t + r * e, n);
            };
          }(e, n, t) : u(isNaN(e) ? n : e);
        };
      }

      function l(t, e) {
        var n = e - t;
        return n ? c(t, n) : u(isNaN(t) ? e : t);
      }

      var d = function t(e) {
        var n = f(e);

        function i(t, e) {
          var i = n((t = Object(r.f)(t)).r, (e = Object(r.f)(e)).r),
              a = n(t.g, e.g),
              o = n(t.b, e.b),
              u = l(t.opacity, e.opacity);
          return function (e) {
            return t.r = i(e), t.g = a(e), t.b = o(e), t.opacity = u(e), t + "";
          };
        }

        return i.gamma = t, i;
      }(1);

      function h(t) {
        return function (e) {
          var n,
              i,
              a = e.length,
              o = new Array(a),
              u = new Array(a),
              c = new Array(a);

          for (n = 0; n < a; ++n) {
            i = Object(r.f)(e[n]), o[n] = i.r || 0, u[n] = i.g || 0, c[n] = i.b || 0;
          }

          return o = t(o), u = t(u), c = t(c), i.opacity = 1, function (t) {
            return i.r = o(t), i.g = u(t), i.b = c(t), i + "";
          };
        };
      }

      var g = h(a),
          p = h(o),
          _ = function _(t, e) {
        var n,
            r = e ? e.length : 0,
            i = t ? Math.min(r, t.length) : 0,
            a = new Array(i),
            o = new Array(r);

        for (n = 0; n < i; ++n) {
          a[n] = C(t[n], e[n]);
        }

        for (; n < r; ++n) {
          o[n] = e[n];
        }

        return function (t) {
          for (n = 0; n < i; ++n) {
            o[n] = a[n](t);
          }

          return o;
        };
      },
          x = function x(t, e) {
        var n = new Date();
        return e -= t = +t, function (r) {
          return n.setTime(t + e * r), n;
        };
      },
          y = function y(t, e) {
        return e -= t = +t, function (n) {
          return t + e * n;
        };
      },
          v = function v(t, e) {
        var n,
            r = {},
            i = {};

        for (n in null !== t && "object" == typeof t || (t = {}), null !== e && "object" == typeof e || (e = {}), e) {
          n in t ? r[n] = C(t[n], e[n]) : i[n] = e[n];
        }

        return function (t) {
          for (n in r) {
            i[n] = r[n](t);
          }

          return i;
        };
      },
          b = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,
          m = new RegExp(b.source, "g");

      var w,
          S,
          A,
          T,
          P = function P(t, e) {
        var n,
            r,
            i,
            a = b.lastIndex = m.lastIndex = 0,
            o = -1,
            u = [],
            c = [];

        for (t += "", e += ""; (n = b.exec(t)) && (r = m.exec(e));) {
          (i = r.index) > a && (i = e.slice(a, i), u[o] ? u[o] += i : u[++o] = i), (n = n[0]) === (r = r[0]) ? u[o] ? u[o] += r : u[++o] = r : (u[++o] = null, c.push({
            i: o,
            x: y(n, r)
          })), a = m.lastIndex;
        }

        return a < e.length && (i = e.slice(a), u[o] ? u[o] += i : u[++o] = i), u.length < 2 ? c[0] ? function (t) {
          return function (e) {
            return t(e) + "";
          };
        }(c[0].x) : function (t) {
          return function () {
            return t;
          };
        }(e) : (e = c.length, function (t) {
          for (var n, r = 0; r < e; ++r) {
            u[(n = c[r]).i] = n.x(t);
          }

          return u.join("");
        });
      },
          C = function C(t, e) {
        var n,
            i = typeof e;
        return null == e || "boolean" === i ? u(e) : ("number" === i ? y : "string" === i ? (n = Object(r.a)(e)) ? (e = n, d) : P : e instanceof r.a ? d : e instanceof Date ? x : Array.isArray(e) ? _ : "function" != typeof e.valueOf && "function" != typeof e.toString || isNaN(e) ? v : y)(t, e);
      },
          M = function M(t, e) {
        return e -= t = +t, function (n) {
          return Math.round(t + e * n);
        };
      },
          L = 180 / Math.PI,
          E = {
        translateX: 0,
        translateY: 0,
        rotate: 0,
        skewX: 0,
        scaleX: 1,
        scaleY: 1
      },
          O = function O(t, e, n, r, i, a) {
        var o, u, c;
        return (o = Math.sqrt(t * t + e * e)) && (t /= o, e /= o), (c = t * n + e * r) && (n -= t * c, r -= e * c), (u = Math.sqrt(n * n + r * r)) && (n /= u, r /= u, c /= u), t * r < e * n && (t = -t, e = -e, c = -c, o = -o), {
          translateX: i,
          translateY: a,
          rotate: Math.atan2(e, t) * L,
          skewX: Math.atan(c) * L,
          scaleX: o,
          scaleY: u
        };
      };

      function k(t, e, n, r) {
        function i(t) {
          return t.length ? t.pop() + " " : "";
        }

        return function (a, o) {
          var u = [],
              c = [];
          return a = t(a), o = t(o), function (t, r, i, a, o, u) {
            if (t !== i || r !== a) {
              var c = o.push("translate(", null, e, null, n);
              u.push({
                i: c - 4,
                x: y(t, i)
              }, {
                i: c - 2,
                x: y(r, a)
              });
            } else (i || a) && o.push("translate(" + i + e + a + n);
          }(a.translateX, a.translateY, o.translateX, o.translateY, u, c), function (t, e, n, a) {
            t !== e ? (t - e > 180 ? e += 360 : e - t > 180 && (t += 360), a.push({
              i: n.push(i(n) + "rotate(", null, r) - 2,
              x: y(t, e)
            })) : e && n.push(i(n) + "rotate(" + e + r);
          }(a.rotate, o.rotate, u, c), function (t, e, n, a) {
            t !== e ? a.push({
              i: n.push(i(n) + "skewX(", null, r) - 2,
              x: y(t, e)
            }) : e && n.push(i(n) + "skewX(" + e + r);
          }(a.skewX, o.skewX, u, c), function (t, e, n, r, a, o) {
            if (t !== n || e !== r) {
              var u = a.push(i(a) + "scale(", null, ",", null, ")");
              o.push({
                i: u - 4,
                x: y(t, n)
              }, {
                i: u - 2,
                x: y(e, r)
              });
            } else 1 === n && 1 === r || a.push(i(a) + "scale(" + n + "," + r + ")");
          }(a.scaleX, a.scaleY, o.scaleX, o.scaleY, u, c), a = o = null, function (t) {
            for (var e, n = -1, r = c.length; ++n < r;) {
              u[(e = c[n]).i] = e.x(t);
            }

            return u.join("");
          };
        };
      }

      var V = k(function (t) {
        return "none" === t ? E : (w || (w = document.createElement("DIV"), S = document.documentElement, A = document.defaultView), w.style.transform = t, t = A.getComputedStyle(S.appendChild(w), null).getPropertyValue("transform"), S.removeChild(w), t = t.slice(7, -1).split(","), O(+t[0], +t[1], +t[2], +t[3], +t[4], +t[5]));
      }, "px, ", "px)", "deg)"),
          G = k(function (t) {
        return null == t ? E : (T || (T = document.createElementNS("http://www.w3.org/2000/svg", "g")), T.setAttribute("transform", t), (t = T.transform.baseVal.consolidate()) ? (t = t.matrix, O(t.a, t.b, t.c, t.d, t.e, t.f)) : E);
      }, ", ", ")", ")"),
          R = Math.SQRT2;

      function I(t) {
        return ((t = Math.exp(t)) + 1 / t) / 2;
      }

      var N = function N(t, e) {
        var n,
            r,
            i = t[0],
            a = t[1],
            o = t[2],
            u = e[0],
            c = e[1],
            s = e[2],
            f = u - i,
            l = c - a,
            d = f * f + l * l;
        if (d < 1e-12) r = Math.log(s / o) / R, n = function n(t) {
          return [i + t * f, a + t * l, o * Math.exp(R * t * r)];
        };else {
          var h = Math.sqrt(d),
              g = (s * s - o * o + 4 * d) / (2 * o * 2 * h),
              p = (s * s - o * o - 4 * d) / (2 * s * 2 * h),
              _ = Math.log(Math.sqrt(g * g + 1) - g),
              x = Math.log(Math.sqrt(p * p + 1) - p);

          r = (x - _) / R, n = function n(t) {
            var e,
                n = t * r,
                u = I(_),
                c = o / (2 * h) * (u * (e = R * n + _, ((e = Math.exp(2 * e)) - 1) / (e + 1)) - function (t) {
              return ((t = Math.exp(t)) - 1 / t) / 2;
            }(_));

            return [i + c * f, a + c * l, o * u / I(R * n + _)];
          };
        }
        return n.duration = 1e3 * r, n;
      };

      function D(t) {
        return function (e, n) {
          var i = t((e = Object(r.d)(e)).h, (n = Object(r.d)(n)).h),
              a = l(e.s, n.s),
              o = l(e.l, n.l),
              u = l(e.opacity, n.opacity);
          return function (t) {
            return e.h = i(t), e.s = a(t), e.l = o(t), e.opacity = u(t), e + "";
          };
        };
      }

      var F = D(s),
          z = D(l);

      function j(t, e) {
        var n = l((t = Object(r.e)(t)).l, (e = Object(r.e)(e)).l),
            i = l(t.a, e.a),
            a = l(t.b, e.b),
            o = l(t.opacity, e.opacity);
        return function (e) {
          return t.l = n(e), t.a = i(e), t.b = a(e), t.opacity = o(e), t + "";
        };
      }

      function X(t) {
        return function (e, n) {
          var i = t((e = Object(r.c)(e)).h, (n = Object(r.c)(n)).h),
              a = l(e.c, n.c),
              o = l(e.l, n.l),
              u = l(e.opacity, n.opacity);
          return function (t) {
            return e.h = i(t), e.c = a(t), e.l = o(t), e.opacity = u(t), e + "";
          };
        };
      }

      var B = X(s),
          H = X(l);

      function Y(t) {
        return function e(n) {
          function i(e, i) {
            var a = t((e = Object(r.b)(e)).h, (i = Object(r.b)(i)).h),
                o = l(e.s, i.s),
                u = l(e.l, i.l),
                c = l(e.opacity, i.opacity);
            return function (t) {
              return e.h = a(t), e.s = o(t), e.l = u(Math.pow(t, n)), e.opacity = c(t), e + "";
            };
          }

          return n = +n, i.gamma = e, i;
        }(1);
      }

      var U = Y(s),
          q = Y(l),
          W = function W(t, e) {
        for (var n = new Array(e), r = 0; r < e; ++r) {
          n[r] = t(r / (e - 1));
        }

        return n;
      };

      n.d(e, "a", function () {
        return C;
      }), n.d(e, "b", function () {
        return _;
      }), n.d(e, "c", function () {
        return a;
      }), n.d(e, "d", function () {
        return o;
      }), n.d(e, "g", function () {
        return x;
      }), n.d(e, "m", function () {
        return y;
      }), n.d(e, "n", function () {
        return v;
      }), n.d(e, "r", function () {
        return M;
      }), n.d(e, "s", function () {
        return P;
      }), n.d(e, "t", function () {
        return V;
      }), n.d(e, "u", function () {
        return G;
      }), n.d(e, "v", function () {
        return N;
      }), n.d(e, "o", function () {
        return d;
      }), n.d(e, "p", function () {
        return g;
      }), n.d(e, "q", function () {
        return p;
      }), n.d(e, "j", function () {
        return F;
      }), n.d(e, "k", function () {
        return z;
      }), n.d(e, "l", function () {
        return j;
      }), n.d(e, "h", function () {
        return B;
      }), n.d(e, "i", function () {
        return H;
      }), n.d(e, "e", function () {
        return U;
      }), n.d(e, "f", function () {
        return q;
      }), n.d(e, "w", function () {
        return W;
      });
    }, function (t, e, n) {
      "use strict";

      var r = function r(t, e, n) {
        t.prototype = e.prototype = n, n.constructor = t;
      };

      function i(t, e) {
        var n = Object.create(t.prototype);

        for (var r in e) {
          n[r] = e[r];
        }

        return n;
      }

      function a() {}

      var o = "\\s*([+-]?\\d+)\\s*",
          u = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)\\s*",
          c = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)%\\s*",
          s = /^#([0-9a-f]{3})$/,
          f = /^#([0-9a-f]{6})$/,
          l = new RegExp("^rgb\\(" + [o, o, o] + "\\)$"),
          d = new RegExp("^rgb\\(" + [c, c, c] + "\\)$"),
          h = new RegExp("^rgba\\(" + [o, o, o, u] + "\\)$"),
          g = new RegExp("^rgba\\(" + [c, c, c, u] + "\\)$"),
          p = new RegExp("^hsl\\(" + [u, c, c] + "\\)$"),
          _ = new RegExp("^hsla\\(" + [u, c, c, u] + "\\)$"),
          x = {
        aliceblue: 15792383,
        antiquewhite: 16444375,
        aqua: 65535,
        aquamarine: 8388564,
        azure: 15794175,
        beige: 16119260,
        bisque: 16770244,
        black: 0,
        blanchedalmond: 16772045,
        blue: 255,
        blueviolet: 9055202,
        brown: 10824234,
        burlywood: 14596231,
        cadetblue: 6266528,
        chartreuse: 8388352,
        chocolate: 13789470,
        coral: 16744272,
        cornflowerblue: 6591981,
        cornsilk: 16775388,
        crimson: 14423100,
        cyan: 65535,
        darkblue: 139,
        darkcyan: 35723,
        darkgoldenrod: 12092939,
        darkgray: 11119017,
        darkgreen: 25600,
        darkgrey: 11119017,
        darkkhaki: 12433259,
        darkmagenta: 9109643,
        darkolivegreen: 5597999,
        darkorange: 16747520,
        darkorchid: 10040012,
        darkred: 9109504,
        darksalmon: 15308410,
        darkseagreen: 9419919,
        darkslateblue: 4734347,
        darkslategray: 3100495,
        darkslategrey: 3100495,
        darkturquoise: 52945,
        darkviolet: 9699539,
        deeppink: 16716947,
        deepskyblue: 49151,
        dimgray: 6908265,
        dimgrey: 6908265,
        dodgerblue: 2003199,
        firebrick: 11674146,
        floralwhite: 16775920,
        forestgreen: 2263842,
        fuchsia: 16711935,
        gainsboro: 14474460,
        ghostwhite: 16316671,
        gold: 16766720,
        goldenrod: 14329120,
        gray: 8421504,
        green: 32768,
        greenyellow: 11403055,
        grey: 8421504,
        honeydew: 15794160,
        hotpink: 16738740,
        indianred: 13458524,
        indigo: 4915330,
        ivory: 16777200,
        khaki: 15787660,
        lavender: 15132410,
        lavenderblush: 16773365,
        lawngreen: 8190976,
        lemonchiffon: 16775885,
        lightblue: 11393254,
        lightcoral: 15761536,
        lightcyan: 14745599,
        lightgoldenrodyellow: 16448210,
        lightgray: 13882323,
        lightgreen: 9498256,
        lightgrey: 13882323,
        lightpink: 16758465,
        lightsalmon: 16752762,
        lightseagreen: 2142890,
        lightskyblue: 8900346,
        lightslategray: 7833753,
        lightslategrey: 7833753,
        lightsteelblue: 11584734,
        lightyellow: 16777184,
        lime: 65280,
        limegreen: 3329330,
        linen: 16445670,
        magenta: 16711935,
        maroon: 8388608,
        mediumaquamarine: 6737322,
        mediumblue: 205,
        mediumorchid: 12211667,
        mediumpurple: 9662683,
        mediumseagreen: 3978097,
        mediumslateblue: 8087790,
        mediumspringgreen: 64154,
        mediumturquoise: 4772300,
        mediumvioletred: 13047173,
        midnightblue: 1644912,
        mintcream: 16121850,
        mistyrose: 16770273,
        moccasin: 16770229,
        navajowhite: 16768685,
        navy: 128,
        oldlace: 16643558,
        olive: 8421376,
        olivedrab: 7048739,
        orange: 16753920,
        orangered: 16729344,
        orchid: 14315734,
        palegoldenrod: 15657130,
        palegreen: 10025880,
        paleturquoise: 11529966,
        palevioletred: 14381203,
        papayawhip: 16773077,
        peachpuff: 16767673,
        peru: 13468991,
        pink: 16761035,
        plum: 14524637,
        powderblue: 11591910,
        purple: 8388736,
        rebeccapurple: 6697881,
        red: 16711680,
        rosybrown: 12357519,
        royalblue: 4286945,
        saddlebrown: 9127187,
        salmon: 16416882,
        sandybrown: 16032864,
        seagreen: 3050327,
        seashell: 16774638,
        sienna: 10506797,
        silver: 12632256,
        skyblue: 8900331,
        slateblue: 6970061,
        slategray: 7372944,
        slategrey: 7372944,
        snow: 16775930,
        springgreen: 65407,
        steelblue: 4620980,
        tan: 13808780,
        teal: 32896,
        thistle: 14204888,
        tomato: 16737095,
        turquoise: 4251856,
        violet: 15631086,
        wheat: 16113331,
        white: 16777215,
        whitesmoke: 16119285,
        yellow: 16776960,
        yellowgreen: 10145074
      };

      function y(t) {
        var e;
        return t = (t + "").trim().toLowerCase(), (e = s.exec(t)) ? new S((e = parseInt(e[1], 16)) >> 8 & 15 | e >> 4 & 240, e >> 4 & 15 | 240 & e, (15 & e) << 4 | 15 & e, 1) : (e = f.exec(t)) ? v(parseInt(e[1], 16)) : (e = l.exec(t)) ? new S(e[1], e[2], e[3], 1) : (e = d.exec(t)) ? new S(255 * e[1] / 100, 255 * e[2] / 100, 255 * e[3] / 100, 1) : (e = h.exec(t)) ? b(e[1], e[2], e[3], e[4]) : (e = g.exec(t)) ? b(255 * e[1] / 100, 255 * e[2] / 100, 255 * e[3] / 100, e[4]) : (e = p.exec(t)) ? A(e[1], e[2] / 100, e[3] / 100, 1) : (e = _.exec(t)) ? A(e[1], e[2] / 100, e[3] / 100, e[4]) : x.hasOwnProperty(t) ? v(x[t]) : "transparent" === t ? new S(NaN, NaN, NaN, 0) : null;
      }

      function v(t) {
        return new S(t >> 16 & 255, t >> 8 & 255, 255 & t, 1);
      }

      function b(t, e, n, r) {
        return r <= 0 && (t = e = n = NaN), new S(t, e, n, r);
      }

      function m(t) {
        return t instanceof a || (t = y(t)), t ? new S((t = t.rgb()).r, t.g, t.b, t.opacity) : new S();
      }

      function w(t, e, n, r) {
        return 1 === arguments.length ? m(t) : new S(t, e, n, null == r ? 1 : r);
      }

      function S(t, e, n, r) {
        this.r = +t, this.g = +e, this.b = +n, this.opacity = +r;
      }

      function A(t, e, n, r) {
        return r <= 0 ? t = e = n = NaN : n <= 0 || n >= 1 ? t = e = NaN : e <= 0 && (t = NaN), new P(t, e, n, r);
      }

      function T(t, e, n, r) {
        return 1 === arguments.length ? function (t) {
          if (t instanceof P) return new P(t.h, t.s, t.l, t.opacity);
          if (t instanceof a || (t = y(t)), !t) return new P();
          if (t instanceof P) return t;
          var e = (t = t.rgb()).r / 255,
              n = t.g / 255,
              r = t.b / 255,
              i = Math.min(e, n, r),
              o = Math.max(e, n, r),
              u = NaN,
              c = o - i,
              s = (o + i) / 2;
          return c ? (u = e === o ? (n - r) / c + 6 * (n < r) : n === o ? (r - e) / c + 2 : (e - n) / c + 4, c /= s < .5 ? o + i : 2 - o - i, u *= 60) : c = s > 0 && s < 1 ? 0 : u, new P(u, c, s, t.opacity);
        }(t) : new P(t, e, n, null == r ? 1 : r);
      }

      function P(t, e, n, r) {
        this.h = +t, this.s = +e, this.l = +n, this.opacity = +r;
      }

      function C(t, e, n) {
        return 255 * (t < 60 ? e + (n - e) * t / 60 : t < 180 ? n : t < 240 ? e + (n - e) * (240 - t) / 60 : e);
      }

      r(a, y, {
        displayable: function displayable() {
          return this.rgb().displayable();
        },
        toString: function toString() {
          return this.rgb() + "";
        }
      }), r(S, w, i(a, {
        brighter: function brighter(t) {
          return t = null == t ? 1 / .7 : Math.pow(1 / .7, t), new S(this.r * t, this.g * t, this.b * t, this.opacity);
        },
        darker: function darker(t) {
          return t = null == t ? .7 : Math.pow(.7, t), new S(this.r * t, this.g * t, this.b * t, this.opacity);
        },
        rgb: function rgb() {
          return this;
        },
        displayable: function displayable() {
          return 0 <= this.r && this.r <= 255 && 0 <= this.g && this.g <= 255 && 0 <= this.b && this.b <= 255 && 0 <= this.opacity && this.opacity <= 1;
        },
        toString: function toString() {
          var t = this.opacity;
          return (1 === (t = isNaN(t) ? 1 : Math.max(0, Math.min(1, t))) ? "rgb(" : "rgba(") + Math.max(0, Math.min(255, Math.round(this.r) || 0)) + ", " + Math.max(0, Math.min(255, Math.round(this.g) || 0)) + ", " + Math.max(0, Math.min(255, Math.round(this.b) || 0)) + (1 === t ? ")" : ", " + t + ")");
        }
      })), r(P, T, i(a, {
        brighter: function brighter(t) {
          return t = null == t ? 1 / .7 : Math.pow(1 / .7, t), new P(this.h, this.s, this.l * t, this.opacity);
        },
        darker: function darker(t) {
          return t = null == t ? .7 : Math.pow(.7, t), new P(this.h, this.s, this.l * t, this.opacity);
        },
        rgb: function rgb() {
          var t = this.h % 360 + 360 * (this.h < 0),
              e = isNaN(t) || isNaN(this.s) ? 0 : this.s,
              n = this.l,
              r = n + (n < .5 ? n : 1 - n) * e,
              i = 2 * n - r;
          return new S(C(t >= 240 ? t - 240 : t + 120, i, r), C(t, i, r), C(t < 120 ? t + 240 : t - 120, i, r), this.opacity);
        },
        displayable: function displayable() {
          return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
        }
      }));
      var M = Math.PI / 180,
          L = 180 / Math.PI,
          E = .95047,
          O = 1,
          k = 1.08883,
          V = 4 / 29,
          G = 6 / 29,
          R = 3 * G * G,
          I = G * G * G;

      function N(t) {
        if (t instanceof F) return new F(t.l, t.a, t.b, t.opacity);

        if (t instanceof Y) {
          var e = t.h * M;
          return new F(t.l, Math.cos(e) * t.c, Math.sin(e) * t.c, t.opacity);
        }

        t instanceof S || (t = m(t));
        var n = B(t.r),
            r = B(t.g),
            i = B(t.b),
            a = z((.4124564 * n + .3575761 * r + .1804375 * i) / E),
            o = z((.2126729 * n + .7151522 * r + .072175 * i) / O);
        return new F(116 * o - 16, 500 * (a - o), 200 * (o - z((.0193339 * n + .119192 * r + .9503041 * i) / k)), t.opacity);
      }

      function D(t, e, n, r) {
        return 1 === arguments.length ? N(t) : new F(t, e, n, null == r ? 1 : r);
      }

      function F(t, e, n, r) {
        this.l = +t, this.a = +e, this.b = +n, this.opacity = +r;
      }

      function z(t) {
        return t > I ? Math.pow(t, 1 / 3) : t / R + V;
      }

      function j(t) {
        return t > G ? t * t * t : R * (t - V);
      }

      function X(t) {
        return 255 * (t <= .0031308 ? 12.92 * t : 1.055 * Math.pow(t, 1 / 2.4) - .055);
      }

      function B(t) {
        return (t /= 255) <= .04045 ? t / 12.92 : Math.pow((t + .055) / 1.055, 2.4);
      }

      function H(t, e, n, r) {
        return 1 === arguments.length ? function (t) {
          if (t instanceof Y) return new Y(t.h, t.c, t.l, t.opacity);
          t instanceof F || (t = N(t));
          var e = Math.atan2(t.b, t.a) * L;
          return new Y(e < 0 ? e + 360 : e, Math.sqrt(t.a * t.a + t.b * t.b), t.l, t.opacity);
        }(t) : new Y(t, e, n, null == r ? 1 : r);
      }

      function Y(t, e, n, r) {
        this.h = +t, this.c = +e, this.l = +n, this.opacity = +r;
      }

      r(F, D, i(a, {
        brighter: function brighter(t) {
          return new F(this.l + 18 * (null == t ? 1 : t), this.a, this.b, this.opacity);
        },
        darker: function darker(t) {
          return new F(this.l - 18 * (null == t ? 1 : t), this.a, this.b, this.opacity);
        },
        rgb: function rgb() {
          var t = (this.l + 16) / 116,
              e = isNaN(this.a) ? t : t + this.a / 500,
              n = isNaN(this.b) ? t : t - this.b / 200;
          return t = O * j(t), new S(X(3.2404542 * (e = E * j(e)) - 1.5371385 * t - .4985314 * (n = k * j(n))), X(-.969266 * e + 1.8760108 * t + .041556 * n), X(.0556434 * e - .2040259 * t + 1.0572252 * n), this.opacity);
        }
      })), r(Y, H, i(a, {
        brighter: function brighter(t) {
          return new Y(this.h, this.c, this.l + 18 * (null == t ? 1 : t), this.opacity);
        },
        darker: function darker(t) {
          return new Y(this.h, this.c, this.l - 18 * (null == t ? 1 : t), this.opacity);
        },
        rgb: function rgb() {
          return N(this).rgb();
        }
      }));
      var U = -.14861,
          q = 1.78277,
          W = -.29227,
          Q = -.90649,
          Z = 1.97294,
          $ = Z * Q,
          K = Z * q,
          J = q * W - Q * U;

      function tt(t, e, n, r) {
        return 1 === arguments.length ? function (t) {
          if (t instanceof et) return new et(t.h, t.s, t.l, t.opacity);
          t instanceof S || (t = m(t));
          var e = t.r / 255,
              n = t.g / 255,
              r = t.b / 255,
              i = (J * r + $ * e - K * n) / (J + $ - K),
              a = r - i,
              o = (Z * (n - i) - W * a) / Q,
              u = Math.sqrt(o * o + a * a) / (Z * i * (1 - i)),
              c = u ? Math.atan2(o, a) * L - 120 : NaN;
          return new et(c < 0 ? c + 360 : c, u, i, t.opacity);
        }(t) : new et(t, e, n, null == r ? 1 : r);
      }

      function et(t, e, n, r) {
        this.h = +t, this.s = +e, this.l = +n, this.opacity = +r;
      }

      r(et, tt, i(a, {
        brighter: function brighter(t) {
          return t = null == t ? 1 / .7 : Math.pow(1 / .7, t), new et(this.h, this.s, this.l * t, this.opacity);
        },
        darker: function darker(t) {
          return t = null == t ? .7 : Math.pow(.7, t), new et(this.h, this.s, this.l * t, this.opacity);
        },
        rgb: function rgb() {
          var t = isNaN(this.h) ? 0 : (this.h + 120) * M,
              e = +this.l,
              n = isNaN(this.s) ? 0 : this.s * e * (1 - e),
              r = Math.cos(t),
              i = Math.sin(t);
          return new S(255 * (e + n * (U * r + q * i)), 255 * (e + n * (W * r + Q * i)), 255 * (e + n * (Z * r)), this.opacity);
        }
      })), n.d(e, "a", function () {
        return y;
      }), n.d(e, "f", function () {
        return w;
      }), n.d(e, "d", function () {
        return T;
      }), n.d(e, "e", function () {
        return D;
      }), n.d(e, "c", function () {
        return H;
      }), n.d(e, "b", function () {
        return tt;
      });
    }, function (t, e, n) {
      "use strict";

      var r,
          i = function i(t, e) {
        if ((n = (t = e ? t.toExponential(e - 1) : t.toExponential()).indexOf("e")) < 0) return null;
        var n,
            r = t.slice(0, n);
        return [r.length > 1 ? r[0] + r.slice(2) : r, +t.slice(n + 1)];
      },
          a = function a(t) {
        return (t = i(Math.abs(t))) ? t[1] : NaN;
      },
          o = function o(t, e) {
        var n = i(t, e);
        if (!n) return t + "";
        var r = n[0],
            a = n[1];
        return a < 0 ? "0." + new Array(-a).join("0") + r : r.length > a + 1 ? r.slice(0, a + 1) + "." + r.slice(a + 1) : r + new Array(a - r.length + 2).join("0");
      },
          u = {
        "": function _(t, e) {
          t = t.toPrecision(e);

          t: for (var n, r = t.length, i = 1, a = -1; i < r; ++i) {
            switch (t[i]) {
              case ".":
                a = n = i;
                break;

              case "0":
                0 === a && (a = i), n = i;
                break;

              case "e":
                break t;

              default:
                a > 0 && (a = 0);
            }
          }

          return a > 0 ? t.slice(0, a) + t.slice(n + 1) : t;
        },
        "%": function _(t, e) {
          return (100 * t).toFixed(e);
        },
        b: function b(t) {
          return Math.round(t).toString(2);
        },
        c: function c(t) {
          return t + "";
        },
        d: function d(t) {
          return Math.round(t).toString(10);
        },
        e: function e(t, _e2) {
          return t.toExponential(_e2);
        },
        f: function f(t, e) {
          return t.toFixed(e);
        },
        g: function g(t, e) {
          return t.toPrecision(e);
        },
        o: function o(t) {
          return Math.round(t).toString(8);
        },
        p: function p(t, e) {
          return o(100 * t, e);
        },
        r: o,
        s: function s(t, e) {
          var n = i(t, e);
          if (!n) return t + "";
          var a = n[0],
              o = n[1],
              u = o - (r = 3 * Math.max(-8, Math.min(8, Math.floor(o / 3)))) + 1,
              c = a.length;
          return u === c ? a : u > c ? a + new Array(u - c + 1).join("0") : u > 0 ? a.slice(0, u) + "." + a.slice(u) : "0." + new Array(1 - u).join("0") + i(t, Math.max(0, e + u - 1))[0];
        },
        X: function X(t) {
          return Math.round(t).toString(16).toUpperCase();
        },
        x: function x(t) {
          return Math.round(t).toString(16);
        }
      },
          c = /^(?:(.)?([<>=^]))?([+\-\( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?([a-z%])?$/i;

      function s(t) {
        return new f(t);
      }

      function f(t) {
        if (!(e = c.exec(t))) throw new Error("invalid format: " + t);
        var e,
            n = e[1] || " ",
            r = e[2] || ">",
            i = e[3] || "-",
            a = e[4] || "",
            o = !!e[5],
            s = e[6] && +e[6],
            f = !!e[7],
            l = e[8] && +e[8].slice(1),
            d = e[9] || "";
        "n" === d ? (f = !0, d = "g") : u[d] || (d = ""), (o || "0" === n && "=" === r) && (o = !0, n = "0", r = "="), this.fill = n, this.align = r, this.sign = i, this.symbol = a, this.zero = o, this.width = s, this.comma = f, this.precision = l, this.type = d;
      }

      s.prototype = f.prototype, f.prototype.toString = function () {
        return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (null == this.width ? "" : Math.max(1, 0 | this.width)) + (this.comma ? "," : "") + (null == this.precision ? "" : "." + Math.max(0, 0 | this.precision)) + this.type;
      };

      var l,
          d,
          h,
          g = function g(t) {
        return t;
      },
          p = ["y", "z", "a", "f", "p", "n", "µ", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"],
          _ = function _(t) {
        var e,
            n,
            i = t.grouping && t.thousands ? (e = t.grouping, n = t.thousands, function (t, r) {
          for (var i = t.length, a = [], o = 0, u = e[0], c = 0; i > 0 && u > 0 && (c + u + 1 > r && (u = Math.max(1, r - c)), a.push(t.substring(i -= u, i + u)), !((c += u + 1) > r));) {
            u = e[o = (o + 1) % e.length];
          }

          return a.reverse().join(n);
        }) : g,
            o = t.currency,
            c = t.decimal,
            f = t.numerals ? function (t) {
          return function (e) {
            return e.replace(/[0-9]/g, function (e) {
              return t[+e];
            });
          };
        }(t.numerals) : g,
            l = t.percent || "%";

        function d(t) {
          var e = (t = s(t)).fill,
              n = t.align,
              a = t.sign,
              d = t.symbol,
              h = t.zero,
              g = t.width,
              _ = t.comma,
              x = t.precision,
              y = t.type,
              v = "$" === d ? o[0] : "#" === d && /[boxX]/.test(y) ? "0" + y.toLowerCase() : "",
              b = "$" === d ? o[1] : /[%p]/.test(y) ? l : "",
              m = u[y],
              w = !y || /[defgprs%]/.test(y);

          function S(t) {
            var o,
                u,
                s,
                l = v,
                d = b;
            if ("c" === y) d = m(t) + d, t = "";else {
              var S = (t = +t) < 0;
              if (t = m(Math.abs(t), x), S && 0 == +t && (S = !1), l = (S ? "(" === a ? a : "-" : "-" === a || "(" === a ? "" : a) + l, d = ("s" === y ? p[8 + r / 3] : "") + d + (S && "(" === a ? ")" : ""), w) for (o = -1, u = t.length; ++o < u;) {
                if (48 > (s = t.charCodeAt(o)) || s > 57) {
                  d = (46 === s ? c + t.slice(o + 1) : t.slice(o)) + d, t = t.slice(0, o);
                  break;
                }
              }
            }
            _ && !h && (t = i(t, 1 / 0));
            var A = l.length + t.length + d.length,
                T = A < g ? new Array(g - A + 1).join(e) : "";

            switch (_ && h && (t = i(T + t, T.length ? g - d.length : 1 / 0), T = ""), n) {
              case "<":
                t = l + t + d + T;
                break;

              case "=":
                t = l + T + t + d;
                break;

              case "^":
                t = T.slice(0, A = T.length >> 1) + l + t + d + T.slice(A);
                break;

              default:
                t = T + l + t + d;
            }

            return f(t);
          }

          return x = null == x ? y ? 6 : 12 : /[gprs]/.test(y) ? Math.max(1, Math.min(21, x)) : Math.max(0, Math.min(20, x)), S.toString = function () {
            return t + "";
          }, S;
        }

        return {
          format: d,
          formatPrefix: function formatPrefix(t, e) {
            var n = d(((t = s(t)).type = "f", t)),
                r = 3 * Math.max(-8, Math.min(8, Math.floor(a(e) / 3))),
                i = Math.pow(10, -r),
                o = p[8 + r / 3];
            return function (t) {
              return n(i * t) + o;
            };
          }
        };
      };

      function x(t) {
        return l = _(t), d = l.format, h = l.formatPrefix, l;
      }

      x({
        decimal: ".",
        thousands: ",",
        grouping: [3],
        currency: ["$", ""]
      });

      var y = function y(t) {
        return Math.max(0, -a(Math.abs(t)));
      },
          v = function v(t, e) {
        return Math.max(0, 3 * Math.max(-8, Math.min(8, Math.floor(a(e) / 3))) - a(Math.abs(t)));
      },
          b = function b(t, e) {
        return t = Math.abs(t), e = Math.abs(e) - t, Math.max(0, a(e) - a(t)) + 1;
      };

      n.d(e, "b", function () {
        return x;
      }), n.d(e, "a", function () {
        return d;
      }), n.d(e, "d", function () {
        return h;
      }), n.d(e, "c", function () {
        return _;
      }), n.d(e, "e", function () {
        return s;
      }), n.d(e, "f", function () {
        return y;
      }), n.d(e, "g", function () {
        return v;
      }), n.d(e, "h", function () {
        return b;
      });
    }, function (t, e, n) {
      "use strict";

      var r = Math.PI,
          i = 2 * r,
          a = i - 1e-6;

      function o() {
        this._x0 = this._y0 = this._x1 = this._y1 = null, this._ = "";
      }

      function u() {
        return new o();
      }

      o.prototype = u.prototype = {
        constructor: o,
        moveTo: function moveTo(t, e) {
          this._ += "M" + (this._x0 = this._x1 = +t) + "," + (this._y0 = this._y1 = +e);
        },
        closePath: function closePath() {
          null !== this._x1 && (this._x1 = this._x0, this._y1 = this._y0, this._ += "Z");
        },
        lineTo: function lineTo(t, e) {
          this._ += "L" + (this._x1 = +t) + "," + (this._y1 = +e);
        },
        quadraticCurveTo: function quadraticCurveTo(t, e, n, r) {
          this._ += "Q" + +t + "," + +e + "," + (this._x1 = +n) + "," + (this._y1 = +r);
        },
        bezierCurveTo: function bezierCurveTo(t, e, n, r, i, a) {
          this._ += "C" + +t + "," + +e + "," + +n + "," + +r + "," + (this._x1 = +i) + "," + (this._y1 = +a);
        },
        arcTo: function arcTo(t, e, n, i, a) {
          t = +t, e = +e, n = +n, i = +i, a = +a;
          var o = this._x1,
              u = this._y1,
              c = n - t,
              s = i - e,
              f = o - t,
              l = u - e,
              d = f * f + l * l;
          if (a < 0) throw new Error("negative radius: " + a);
          if (null === this._x1) this._ += "M" + (this._x1 = t) + "," + (this._y1 = e);else if (d > 1e-6) {
            if (Math.abs(l * c - s * f) > 1e-6 && a) {
              var h = n - o,
                  g = i - u,
                  p = c * c + s * s,
                  _ = h * h + g * g,
                  x = Math.sqrt(p),
                  y = Math.sqrt(d),
                  v = a * Math.tan((r - Math.acos((p + d - _) / (2 * x * y))) / 2),
                  b = v / y,
                  m = v / x;

              Math.abs(b - 1) > 1e-6 && (this._ += "L" + (t + b * f) + "," + (e + b * l)), this._ += "A" + a + "," + a + ",0,0," + +(l * h > f * g) + "," + (this._x1 = t + m * c) + "," + (this._y1 = e + m * s);
            } else this._ += "L" + (this._x1 = t) + "," + (this._y1 = e);
          } else ;
        },
        arc: function arc(t, e, n, o, u, c) {
          t = +t, e = +e;
          var s = (n = +n) * Math.cos(o),
              f = n * Math.sin(o),
              l = t + s,
              d = e + f,
              h = 1 ^ c,
              g = c ? o - u : u - o;
          if (n < 0) throw new Error("negative radius: " + n);
          null === this._x1 ? this._ += "M" + l + "," + d : (Math.abs(this._x1 - l) > 1e-6 || Math.abs(this._y1 - d) > 1e-6) && (this._ += "L" + l + "," + d), n && (g < 0 && (g = g % i + i), g > a ? this._ += "A" + n + "," + n + ",0,1," + h + "," + (t - s) + "," + (e - f) + "A" + n + "," + n + ",0,1," + h + "," + (this._x1 = l) + "," + (this._y1 = d) : g > 1e-6 && (this._ += "A" + n + "," + n + ",0," + +(g >= r) + "," + h + "," + (this._x1 = t + n * Math.cos(u)) + "," + (this._y1 = e + n * Math.sin(u))));
        },
        rect: function rect(t, e, n, r) {
          this._ += "M" + (this._x0 = this._x1 = +t) + "," + (this._y0 = this._y1 = +e) + "h" + +n + "v" + +r + "h" + -n + "Z";
        },
        toString: function toString() {
          return this._;
        }
      };
      var c = u;
      n.d(e, "a", function () {
        return c;
      });
    }, function (t, e, n) {
      "use strict";

      var r = {
        value: function value() {}
      };

      function i() {
        for (var t, e = 0, n = arguments.length, r = {}; e < n; ++e) {
          if (!(t = arguments[e] + "") || t in r) throw new Error("illegal type: " + t);
          r[t] = [];
        }

        return new a(r);
      }

      function a(t) {
        this._ = t;
      }

      function o(t, e) {
        for (var n, r = 0, i = t.length; r < i; ++r) {
          if ((n = t[r]).name === e) return n.value;
        }
      }

      function u(t, e, n) {
        for (var i = 0, a = t.length; i < a; ++i) {
          if (t[i].name === e) {
            t[i] = r, t = t.slice(0, i).concat(t.slice(i + 1));
            break;
          }
        }

        return null != n && t.push({
          name: e,
          value: n
        }), t;
      }

      a.prototype = i.prototype = {
        constructor: a,
        on: function on(t, e) {
          var n,
              r,
              i = this._,
              a = (r = i, (t + "").trim().split(/^|\s+/).map(function (t) {
            var e = "",
                n = t.indexOf(".");
            if (n >= 0 && (e = t.slice(n + 1), t = t.slice(0, n)), t && !r.hasOwnProperty(t)) throw new Error("unknown type: " + t);
            return {
              type: t,
              name: e
            };
          })),
              c = -1,
              s = a.length;

          if (!(arguments.length < 2)) {
            if (null != e && "function" != typeof e) throw new Error("invalid callback: " + e);

            for (; ++c < s;) {
              if (n = (t = a[c]).type) i[n] = u(i[n], t.name, e);else if (null == e) for (n in i) {
                i[n] = u(i[n], t.name, null);
              }
            }

            return this;
          }

          for (; ++c < s;) {
            if ((n = (t = a[c]).type) && (n = o(i[n], t.name))) return n;
          }
        },
        copy: function copy() {
          var t = {},
              e = this._;

          for (var n in e) {
            t[n] = e[n].slice();
          }

          return new a(t);
        },
        call: function call(t, e) {
          if ((n = arguments.length - 2) > 0) for (var n, r, i = new Array(n), a = 0; a < n; ++a) {
            i[a] = arguments[a + 2];
          }
          if (!this._.hasOwnProperty(t)) throw new Error("unknown type: " + t);

          for (a = 0, n = (r = this._[t]).length; a < n; ++a) {
            r[a].value.apply(e, i);
          }
        },
        apply: function apply(t, e, n) {
          if (!this._.hasOwnProperty(t)) throw new Error("unknown type: " + t);

          for (var r = this._[t], i = 0, a = r.length; i < a; ++i) {
            r[i].value.apply(e, n);
          }
        }
      };
      var c = i;
      n.d(e, "a", function () {
        return c;
      });
    }, function (t, e, n) {
      "use strict";

      function r() {}

      function i(t, e) {
        var n = new r();
        if (t instanceof r) t.each(function (t, e) {
          n.set(e, t);
        });else if (Array.isArray(t)) {
          var i,
              a = -1,
              o = t.length;
          if (null == e) for (; ++a < o;) {
            n.set(a, t[a]);
          } else for (; ++a < o;) {
            n.set(e(i = t[a], a, t), i);
          }
        } else if (t) for (var u in t) {
          n.set(u, t[u]);
        }
        return n;
      }

      r.prototype = i.prototype = {
        constructor: r,
        has: function has(t) {
          return "$" + t in this;
        },
        get: function get(t) {
          return this["$" + t];
        },
        set: function set(t, e) {
          return this["$" + t] = e, this;
        },
        remove: function remove(t) {
          var e = "$" + t;
          return e in this && delete this[e];
        },
        clear: function clear() {
          for (var t in this) {
            "$" === t[0] && delete this[t];
          }
        },
        keys: function keys() {
          var t = [];

          for (var e in this) {
            "$" === e[0] && t.push(e.slice(1));
          }

          return t;
        },
        values: function values() {
          var t = [];

          for (var e in this) {
            "$" === e[0] && t.push(this[e]);
          }

          return t;
        },
        entries: function entries() {
          var t = [];

          for (var e in this) {
            "$" === e[0] && t.push({
              key: e.slice(1),
              value: this[e]
            });
          }

          return t;
        },
        size: function size() {
          var t = 0;

          for (var e in this) {
            "$" === e[0] && ++t;
          }

          return t;
        },
        empty: function empty() {
          for (var t in this) {
            if ("$" === t[0]) return !1;
          }

          return !0;
        },
        each: function each(t) {
          for (var e in this) {
            "$" === e[0] && t(this[e], e.slice(1), this);
          }
        }
      };

      var a = i,
          o = function o() {
        var t,
            e,
            n,
            r = [],
            i = [];

        function o(n, i, u, c) {
          if (i >= r.length) return null != t && n.sort(t), null != e ? e(n) : n;

          for (var s, f, l, d = -1, h = n.length, g = r[i++], p = a(), _ = u(); ++d < h;) {
            (l = p.get(s = g(f = n[d]) + "")) ? l.push(f) : p.set(s, [f]);
          }

          return p.each(function (t, e) {
            c(_, e, o(t, i, u, c));
          }), _;
        }

        return n = {
          object: function object(t) {
            return o(t, 0, u, c);
          },
          map: function map(t) {
            return o(t, 0, s, f);
          },
          entries: function entries(t) {
            return function t(n, a) {
              if (++a > r.length) return n;
              var o,
                  u = i[a - 1];
              return null != e && a >= r.length ? o = n.entries() : (o = [], n.each(function (e, n) {
                o.push({
                  key: n,
                  values: t(e, a)
                });
              })), null != u ? o.sort(function (t, e) {
                return u(t.key, e.key);
              }) : o;
            }(o(t, 0, s, f), 0);
          },
          key: function key(t) {
            return r.push(t), n;
          },
          sortKeys: function sortKeys(t) {
            return i[r.length - 1] = t, n;
          },
          sortValues: function sortValues(e) {
            return t = e, n;
          },
          rollup: function rollup(t) {
            return e = t, n;
          }
        };
      };

      function u() {
        return {};
      }

      function c(t, e, n) {
        t[e] = n;
      }

      function s() {
        return a();
      }

      function f(t, e, n) {
        t.set(e, n);
      }

      function l() {}

      var d = a.prototype;

      function h(t, e) {
        var n = new l();
        if (t instanceof l) t.each(function (t) {
          n.add(t);
        });else if (t) {
          var r = -1,
              i = t.length;
          if (null == e) for (; ++r < i;) {
            n.add(t[r]);
          } else for (; ++r < i;) {
            n.add(e(t[r], r, t));
          }
        }
        return n;
      }

      l.prototype = h.prototype = {
        constructor: l,
        has: d.has,
        add: function add(t) {
          return this["$" + (t += "")] = t, this;
        },
        remove: d.remove,
        clear: d.clear,
        values: d.keys,
        size: d.size,
        empty: d.empty,
        each: d.each
      };

      var g = h,
          p = function p(t) {
        var e = [];

        for (var n in t) {
          e.push(n);
        }

        return e;
      },
          _ = function _(t) {
        var e = [];

        for (var n in t) {
          e.push(t[n]);
        }

        return e;
      },
          x = function x(t) {
        var e = [];

        for (var n in t) {
          e.push({
            key: n,
            value: t[n]
          });
        }

        return e;
      };

      n.d(e, "d", function () {
        return o;
      }), n.d(e, "e", function () {
        return g;
      }), n.d(e, "c", function () {
        return a;
      }), n.d(e, "b", function () {
        return p;
      }), n.d(e, "f", function () {
        return _;
      }), n.d(e, "a", function () {
        return x;
      });
    }, function (t, e, n) {
      "use strict";

      var r,
          i,
          a = 0,
          o = 0,
          u = 0,
          c = 1e3,
          s = 0,
          f = 0,
          l = 0,
          d = "object" == typeof performance && performance.now ? performance : Date,
          h = "object" == typeof window && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function (t) {
        setTimeout(t, 17);
      };

      function g() {
        return f || (h(p), f = d.now() + l);
      }

      function p() {
        f = 0;
      }

      function _() {
        this._call = this._time = this._next = null;
      }

      function x(t, e, n) {
        var r = new _();
        return r.restart(t, e, n), r;
      }

      function y() {
        g(), ++a;

        for (var t, e = r; e;) {
          (t = f - e._time) >= 0 && e._call.call(null, t), e = e._next;
        }

        --a;
      }

      function v() {
        f = (s = d.now()) + l, a = o = 0;

        try {
          y();
        } finally {
          a = 0, function () {
            var t,
                e,
                n = r,
                a = 1 / 0;

            for (; n;) {
              n._call ? (a > n._time && (a = n._time), t = n, n = n._next) : (e = n._next, n._next = null, n = t ? t._next = e : r = e);
            }

            i = t, m(a);
          }(), f = 0;
        }
      }

      function b() {
        var t = d.now(),
            e = t - s;
        e > c && (l -= e, s = t);
      }

      function m(t) {
        a || (o && (o = clearTimeout(o)), t - f > 24 ? (t < 1 / 0 && (o = setTimeout(v, t - d.now() - l)), u && (u = clearInterval(u))) : (u || (s = d.now(), u = setInterval(b, c)), a = 1, h(v)));
      }

      _.prototype = x.prototype = {
        constructor: _,
        restart: function restart(t, e, n) {
          if ("function" != typeof t) throw new TypeError("callback is not a function");
          n = (null == n ? g() : +n) + (null == e ? 0 : +e), this._next || i === this || (i ? i._next = this : r = this, i = this), this._call = t, this._time = n, m();
        },
        stop: function stop() {
          this._call && (this._call = null, this._time = 1 / 0, m());
        }
      };

      var w = function w(t, e, n) {
        var r = new _();
        return e = null == e ? 0 : +e, r.restart(function (n) {
          r.stop(), t(n + e);
        }, e, n), r;
      },
          S = function S(t, e, n) {
        var r = new _(),
            i = e;
        return null == e ? (r.restart(t, e, n), r) : (e = +e, n = null == n ? g() : +n, r.restart(function a(o) {
          o += i, r.restart(a, i += e, n), t(o);
        }, e, n), r);
      };

      n.d(e, "b", function () {
        return g;
      }), n.d(e, "d", function () {
        return x;
      }), n.d(e, "e", function () {
        return y;
      }), n.d(e, "c", function () {
        return w;
      }), n.d(e, "a", function () {
        return S;
      });
    }, function (t, e, n) {
      "use strict";

      var r = n(2);

      function i(t) {
        if (0 <= t.y && t.y < 100) {
          var e = new Date(-1, t.m, t.d, t.H, t.M, t.S, t.L);
          return e.setFullYear(t.y), e;
        }

        return new Date(t.y, t.m, t.d, t.H, t.M, t.S, t.L);
      }

      function a(t) {
        if (0 <= t.y && t.y < 100) {
          var e = new Date(Date.UTC(-1, t.m, t.d, t.H, t.M, t.S, t.L));
          return e.setUTCFullYear(t.y), e;
        }

        return new Date(Date.UTC(t.y, t.m, t.d, t.H, t.M, t.S, t.L));
      }

      function o(t) {
        return {
          y: t,
          m: 0,
          d: 1,
          H: 0,
          M: 0,
          S: 0,
          L: 0
        };
      }

      function u(t) {
        var e = t.dateTime,
            n = t.date,
            u = t.time,
            c = t.periods,
            s = t.days,
            f = t.shortDays,
            l = t.months,
            d = t.shortMonths,
            g = v(c),
            _p = b(c),
            _ = v(s),
            x = b(s),
            y = v(f),
            St = b(f),
            At = v(l),
            Tt = b(l),
            Pt = v(d),
            Ct = b(d),
            Mt = {
          a: function a(t) {
            return f[t.getDay()];
          },
          A: function A(t) {
            return s[t.getDay()];
          },
          b: function b(t) {
            return d[t.getMonth()];
          },
          B: function B(t) {
            return l[t.getMonth()];
          },
          c: null,
          d: z,
          e: z,
          f: Y,
          H: j,
          I: X,
          j: B,
          L: H,
          m: U,
          M: q,
          p: function p(t) {
            return c[+(t.getHours() >= 12)];
          },
          Q: mt,
          s: wt,
          S: W,
          u: Q,
          U: Z,
          V: $,
          w: K,
          W: J,
          x: null,
          X: null,
          y: tt,
          Y: et,
          Z: nt,
          "%": bt
        },
            Lt = {
          a: function a(t) {
            return f[t.getUTCDay()];
          },
          A: function A(t) {
            return s[t.getUTCDay()];
          },
          b: function b(t) {
            return d[t.getUTCMonth()];
          },
          B: function B(t) {
            return l[t.getUTCMonth()];
          },
          c: null,
          d: rt,
          e: rt,
          f: ct,
          H: it,
          I: at,
          j: ot,
          L: ut,
          m: st,
          M: ft,
          p: function p(t) {
            return c[+(t.getUTCHours() >= 12)];
          },
          Q: mt,
          s: wt,
          S: lt,
          u: dt,
          U: ht,
          V: gt,
          w: pt,
          W: _t,
          x: null,
          X: null,
          y: xt,
          Y: yt,
          Z: vt,
          "%": bt
        },
            Et = {
          a: function a(t, e, n) {
            var r = y.exec(e.slice(n));
            return r ? (t.w = St[r[0].toLowerCase()], n + r[0].length) : -1;
          },
          A: function A(t, e, n) {
            var r = _.exec(e.slice(n));

            return r ? (t.w = x[r[0].toLowerCase()], n + r[0].length) : -1;
          },
          b: function b(t, e, n) {
            var r = Pt.exec(e.slice(n));
            return r ? (t.m = Ct[r[0].toLowerCase()], n + r[0].length) : -1;
          },
          B: function B(t, e, n) {
            var r = At.exec(e.slice(n));
            return r ? (t.m = Tt[r[0].toLowerCase()], n + r[0].length) : -1;
          },
          c: function c(t, n, r) {
            return Vt(t, e, n, r);
          },
          d: E,
          e: E,
          f: I,
          H: k,
          I: k,
          j: O,
          L: R,
          m: L,
          M: V,
          p: function p(t, e, n) {
            var r = g.exec(e.slice(n));
            return r ? (t.p = _p[r[0].toLowerCase()], n + r[0].length) : -1;
          },
          Q: D,
          s: F,
          S: G,
          u: w,
          U: S,
          V: A,
          w: m,
          W: T,
          x: function x(t, e, r) {
            return Vt(t, n, e, r);
          },
          X: function X(t, e, n) {
            return Vt(t, u, e, n);
          },
          y: C,
          Y: P,
          Z: M,
          "%": N
        };

        function Ot(t, e) {
          return function (n) {
            var r,
                i,
                a,
                o = [],
                u = -1,
                c = 0,
                s = t.length;

            for (n instanceof Date || (n = new Date(+n)); ++u < s;) {
              37 === t.charCodeAt(u) && (o.push(t.slice(c, u)), null != (i = h[r = t.charAt(++u)]) ? r = t.charAt(++u) : i = "e" === r ? " " : "0", (a = e[r]) && (r = a(n, i)), o.push(r), c = u + 1);
            }

            return o.push(t.slice(c, u)), o.join("");
          };
        }

        function kt(t, e) {
          return function (n) {
            var i,
                u,
                c = o(1900);
            if (Vt(c, t, n += "", 0) != n.length) return null;
            if ("Q" in c) return new Date(c.Q);

            if ("p" in c && (c.H = c.H % 12 + 12 * c.p), "V" in c) {
              if (c.V < 1 || c.V > 53) return null;
              "w" in c || (c.w = 1), "Z" in c ? (i = (u = (i = a(o(c.y))).getUTCDay()) > 4 || 0 === u ? r.P.ceil(i) : Object(r.P)(i), i = r.F.offset(i, 7 * (c.V - 1)), c.y = i.getUTCFullYear(), c.m = i.getUTCMonth(), c.d = i.getUTCDate() + (c.w + 6) % 7) : (i = (u = (i = e(o(c.y))).getDay()) > 4 || 0 === u ? r.l.ceil(i) : Object(r.l)(i), i = r.a.offset(i, 7 * (c.V - 1)), c.y = i.getFullYear(), c.m = i.getMonth(), c.d = i.getDate() + (c.w + 6) % 7);
            } else ("W" in c || "U" in c) && ("w" in c || (c.w = "u" in c ? c.u % 7 : "W" in c ? 1 : 0), u = "Z" in c ? a(o(c.y)).getUTCDay() : e(o(c.y)).getDay(), c.m = 0, c.d = "W" in c ? (c.w + 6) % 7 + 7 * c.W - (u + 5) % 7 : c.w + 7 * c.U - (u + 6) % 7);

            return "Z" in c ? (c.H += c.Z / 100 | 0, c.M += c.Z % 100, a(c)) : e(c);
          };
        }

        function Vt(t, e, n, r) {
          for (var i, a, o = 0, u = e.length, c = n.length; o < u;) {
            if (r >= c) return -1;

            if (37 === (i = e.charCodeAt(o++))) {
              if (i = e.charAt(o++), !(a = Et[i in h ? e.charAt(o++) : i]) || (r = a(t, n, r)) < 0) return -1;
            } else if (i != n.charCodeAt(r++)) return -1;
          }

          return r;
        }

        return Mt.x = Ot(n, Mt), Mt.X = Ot(u, Mt), Mt.c = Ot(e, Mt), Lt.x = Ot(n, Lt), Lt.X = Ot(u, Lt), Lt.c = Ot(e, Lt), {
          format: function format(t) {
            var e = Ot(t += "", Mt);
            return e.toString = function () {
              return t;
            }, e;
          },
          parse: function parse(t) {
            var e = kt(t += "", i);
            return e.toString = function () {
              return t;
            }, e;
          },
          utcFormat: function utcFormat(t) {
            var e = Ot(t += "", Lt);
            return e.toString = function () {
              return t;
            }, e;
          },
          utcParse: function utcParse(t) {
            var e = kt(t, a);
            return e.toString = function () {
              return t;
            }, e;
          }
        };
      }

      var c,
          s,
          f,
          l,
          d,
          h = {
        "-": "",
        _: " ",
        0: "0"
      },
          g = /^\s*\d+/,
          p = /^%/,
          _ = /[\\^$*+?|[\]().{}]/g;

      function x(t, e, n) {
        var r = t < 0 ? "-" : "",
            i = (r ? -t : t) + "",
            a = i.length;
        return r + (a < n ? new Array(n - a + 1).join(e) + i : i);
      }

      function y(t) {
        return t.replace(_, "\\$&");
      }

      function v(t) {
        return new RegExp("^(?:" + t.map(y).join("|") + ")", "i");
      }

      function b(t) {
        for (var e = {}, n = -1, r = t.length; ++n < r;) {
          e[t[n].toLowerCase()] = n;
        }

        return e;
      }

      function m(t, e, n) {
        var r = g.exec(e.slice(n, n + 1));
        return r ? (t.w = +r[0], n + r[0].length) : -1;
      }

      function w(t, e, n) {
        var r = g.exec(e.slice(n, n + 1));
        return r ? (t.u = +r[0], n + r[0].length) : -1;
      }

      function S(t, e, n) {
        var r = g.exec(e.slice(n, n + 2));
        return r ? (t.U = +r[0], n + r[0].length) : -1;
      }

      function A(t, e, n) {
        var r = g.exec(e.slice(n, n + 2));
        return r ? (t.V = +r[0], n + r[0].length) : -1;
      }

      function T(t, e, n) {
        var r = g.exec(e.slice(n, n + 2));
        return r ? (t.W = +r[0], n + r[0].length) : -1;
      }

      function P(t, e, n) {
        var r = g.exec(e.slice(n, n + 4));
        return r ? (t.y = +r[0], n + r[0].length) : -1;
      }

      function C(t, e, n) {
        var r = g.exec(e.slice(n, n + 2));
        return r ? (t.y = +r[0] + (+r[0] > 68 ? 1900 : 2e3), n + r[0].length) : -1;
      }

      function M(t, e, n) {
        var r = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(e.slice(n, n + 6));
        return r ? (t.Z = r[1] ? 0 : -(r[2] + (r[3] || "00")), n + r[0].length) : -1;
      }

      function L(t, e, n) {
        var r = g.exec(e.slice(n, n + 2));
        return r ? (t.m = r[0] - 1, n + r[0].length) : -1;
      }

      function E(t, e, n) {
        var r = g.exec(e.slice(n, n + 2));
        return r ? (t.d = +r[0], n + r[0].length) : -1;
      }

      function O(t, e, n) {
        var r = g.exec(e.slice(n, n + 3));
        return r ? (t.m = 0, t.d = +r[0], n + r[0].length) : -1;
      }

      function k(t, e, n) {
        var r = g.exec(e.slice(n, n + 2));
        return r ? (t.H = +r[0], n + r[0].length) : -1;
      }

      function V(t, e, n) {
        var r = g.exec(e.slice(n, n + 2));
        return r ? (t.M = +r[0], n + r[0].length) : -1;
      }

      function G(t, e, n) {
        var r = g.exec(e.slice(n, n + 2));
        return r ? (t.S = +r[0], n + r[0].length) : -1;
      }

      function R(t, e, n) {
        var r = g.exec(e.slice(n, n + 3));
        return r ? (t.L = +r[0], n + r[0].length) : -1;
      }

      function I(t, e, n) {
        var r = g.exec(e.slice(n, n + 6));
        return r ? (t.L = Math.floor(r[0] / 1e3), n + r[0].length) : -1;
      }

      function N(t, e, n) {
        var r = p.exec(e.slice(n, n + 1));
        return r ? n + r[0].length : -1;
      }

      function D(t, e, n) {
        var r = g.exec(e.slice(n));
        return r ? (t.Q = +r[0], n + r[0].length) : -1;
      }

      function F(t, e, n) {
        var r = g.exec(e.slice(n));
        return r ? (t.Q = 1e3 * +r[0], n + r[0].length) : -1;
      }

      function z(t, e) {
        return x(t.getDate(), e, 2);
      }

      function j(t, e) {
        return x(t.getHours(), e, 2);
      }

      function X(t, e) {
        return x(t.getHours() % 12 || 12, e, 2);
      }

      function B(t, e) {
        return x(1 + r.a.count(Object(r.D)(t), t), e, 3);
      }

      function H(t, e) {
        return x(t.getMilliseconds(), e, 3);
      }

      function Y(t, e) {
        return H(t, e) + "000";
      }

      function U(t, e) {
        return x(t.getMonth() + 1, e, 2);
      }

      function q(t, e) {
        return x(t.getMinutes(), e, 2);
      }

      function W(t, e) {
        return x(t.getSeconds(), e, 2);
      }

      function Q(t) {
        var e = t.getDay();
        return 0 === e ? 7 : e;
      }

      function Z(t, e) {
        return x(r.t.count(Object(r.D)(t), t), e, 2);
      }

      function $(t, e) {
        var n = t.getDay();
        return t = n >= 4 || 0 === n ? Object(r.v)(t) : r.v.ceil(t), x(r.v.count(Object(r.D)(t), t) + (4 === Object(r.D)(t).getDay()), e, 2);
      }

      function K(t) {
        return t.getDay();
      }

      function J(t, e) {
        return x(r.l.count(Object(r.D)(t), t), e, 2);
      }

      function tt(t, e) {
        return x(t.getFullYear() % 100, e, 2);
      }

      function et(t, e) {
        return x(t.getFullYear() % 1e4, e, 4);
      }

      function nt(t) {
        var e = t.getTimezoneOffset();
        return (e > 0 ? "-" : (e *= -1, "+")) + x(e / 60 | 0, "0", 2) + x(e % 60, "0", 2);
      }

      function rt(t, e) {
        return x(t.getUTCDate(), e, 2);
      }

      function it(t, e) {
        return x(t.getUTCHours(), e, 2);
      }

      function at(t, e) {
        return x(t.getUTCHours() % 12 || 12, e, 2);
      }

      function ot(t, e) {
        return x(1 + r.F.count(Object(r.Ha)(t), t), e, 3);
      }

      function ut(t, e) {
        return x(t.getUTCMilliseconds(), e, 3);
      }

      function ct(t, e) {
        return ut(t, e) + "000";
      }

      function st(t, e) {
        return x(t.getUTCMonth() + 1, e, 2);
      }

      function ft(t, e) {
        return x(t.getUTCMinutes(), e, 2);
      }

      function lt(t, e) {
        return x(t.getUTCSeconds(), e, 2);
      }

      function dt(t) {
        var e = t.getUTCDay();
        return 0 === e ? 7 : e;
      }

      function ht(t, e) {
        return x(r.X.count(Object(r.Ha)(t), t), e, 2);
      }

      function gt(t, e) {
        var n = t.getUTCDay();
        return t = n >= 4 || 0 === n ? Object(r.Z)(t) : r.Z.ceil(t), x(r.Z.count(Object(r.Ha)(t), t) + (4 === Object(r.Ha)(t).getUTCDay()), e, 2);
      }

      function pt(t) {
        return t.getUTCDay();
      }

      function _t(t, e) {
        return x(r.P.count(Object(r.Ha)(t), t), e, 2);
      }

      function xt(t, e) {
        return x(t.getUTCFullYear() % 100, e, 2);
      }

      function yt(t, e) {
        return x(t.getUTCFullYear() % 1e4, e, 4);
      }

      function vt() {
        return "+0000";
      }

      function bt() {
        return "%";
      }

      function mt(t) {
        return +t;
      }

      function wt(t) {
        return Math.floor(+t / 1e3);
      }

      function St(t) {
        return c = u(t), s = c.format, f = c.parse, l = c.utcFormat, d = c.utcParse, c;
      }

      St({
        dateTime: "%x, %X",
        date: "%-m/%-d/%Y",
        time: "%-I:%M:%S %p",
        periods: ["AM", "PM"],
        days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
        months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
        shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
      });
      var At = Date.prototype.toISOString ? function (t) {
        return t.toISOString();
      } : l("%Y-%m-%dT%H:%M:%S.%LZ");
      var Tt = +new Date("2000-01-01T00:00:00.000Z") ? function (t) {
        var e = new Date(t);
        return isNaN(e) ? null : e;
      } : d("%Y-%m-%dT%H:%M:%S.%LZ");
      n.d(e, "d", function () {
        return St;
      }), n.d(e, "c", function () {
        return s;
      }), n.d(e, "f", function () {
        return f;
      }), n.d(e, "g", function () {
        return l;
      }), n.d(e, "h", function () {
        return d;
      }), n.d(e, "e", function () {
        return u;
      }), n.d(e, "a", function () {
        return At;
      }), n.d(e, "b", function () {
        return Tt;
      });
    }, function (t, e, n) {
      "use strict";

      var r = n(0),
          i = n(7),
          a = n(9),
          o = Object(i.a)("start", "end", "interrupt"),
          u = [],
          c = 0,
          s = 1,
          f = 2,
          l = 3,
          d = 4,
          h = 5,
          g = 6,
          p = function p(t, e, n, r, i, _p2) {
        var _ = t.__transition;

        if (_) {
          if (n in _) return;
        } else t.__transition = {};

        !function (t, e, n) {
          var r,
              i = t.__transition;

          function o(h) {
            var p, _, x, y;

            if (n.state !== s) return c();

            for (p in i) {
              if ((y = i[p]).name === n.name) {
                if (y.state === l) return Object(a.c)(o);
                y.state === d ? (y.state = g, y.timer.stop(), y.on.call("interrupt", t, t.__data__, y.index, y.group), delete i[p]) : +p < e && (y.state = g, y.timer.stop(), delete i[p]);
              }
            }

            if (Object(a.c)(function () {
              n.state === l && (n.state = d, n.timer.restart(u, n.delay, n.time), u(h));
            }), n.state = f, n.on.call("start", t, t.__data__, n.index, n.group), n.state === f) {
              for (n.state = l, r = new Array(x = n.tween.length), p = 0, _ = -1; p < x; ++p) {
                (y = n.tween[p].value.call(t, t.__data__, n.index, n.group)) && (r[++_] = y);
              }

              r.length = _ + 1;
            }
          }

          function u(e) {
            for (var i = e < n.duration ? n.ease.call(null, e / n.duration) : (n.timer.restart(c), n.state = h, 1), a = -1, o = r.length; ++a < o;) {
              r[a].call(null, i);
            }

            n.state === h && (n.on.call("end", t, t.__data__, n.index, n.group), c());
          }

          function c() {
            for (var r in n.state = g, n.timer.stop(), delete i[e], i) {
              return;
            }

            delete t.__transition;
          }

          i[e] = n, n.timer = Object(a.d)(function (t) {
            n.state = s, n.timer.restart(o, n.delay, n.time), n.delay <= t && o(t - n.delay);
          }, 0, n.time);
        }(t, n, {
          name: e,
          index: r,
          group: i,
          on: o,
          tween: u,
          time: _p2.time,
          delay: _p2.delay,
          duration: _p2.duration,
          ease: _p2.ease,
          timer: null,
          state: c
        });
      };

      function _(t, e) {
        var n = y(t, e);
        if (n.state > c) throw new Error("too late; already scheduled");
        return n;
      }

      function x(t, e) {
        var n = y(t, e);
        if (n.state > f) throw new Error("too late; already started");
        return n;
      }

      function y(t, e) {
        var n = t.__transition;
        if (!n || !(n = n[e])) throw new Error("transition not found");
        return n;
      }

      var v = function v(t, e) {
        var n,
            r,
            i,
            a = t.__transition,
            o = !0;

        if (a) {
          for (i in e = null == e ? null : e + "", a) {
            (n = a[i]).name === e ? (r = n.state > f && n.state < h, n.state = g, n.timer.stop(), r && n.on.call("interrupt", t, t.__data__, n.index, n.group), delete a[i]) : o = !1;
          }

          o && delete t.__transition;
        }
      },
          b = n(3);

      function m(t, e, n) {
        var r = t._id;
        return t.each(function () {
          var t = x(this, r);
          (t.value || (t.value = {}))[e] = n.apply(this, arguments);
        }), function (t) {
          return y(t, r).value[e];
        };
      }

      var w = n(4),
          S = function S(t, e) {
        var n;
        return ("number" == typeof e ? b.m : e instanceof w.a ? b.o : (n = Object(w.a)(e)) ? (e = n, b.o) : b.s)(t, e);
      };

      var A = r.m.prototype.constructor;
      var T = 0;

      function P(t, e, n, r) {
        this._groups = t, this._parents = e, this._name = n, this._id = r;
      }

      function C(t) {
        return Object(r.m)().transition(t);
      }

      function M() {
        return ++T;
      }

      var L = r.m.prototype;
      P.prototype = C.prototype = {
        constructor: P,
        select: function select(t) {
          var e = this._name,
              n = this._id;
          "function" != typeof t && (t = Object(r.n)(t));

          for (var i = this._groups, a = i.length, o = new Array(a), u = 0; u < a; ++u) {
            for (var c, s, f = i[u], l = f.length, d = o[u] = new Array(l), h = 0; h < l; ++h) {
              (c = f[h]) && (s = t.call(c, c.__data__, h, f)) && ("__data__" in c && (s.__data__ = c.__data__), d[h] = s, p(d[h], e, n, h, d, y(c, n)));
            }
          }

          return new P(o, this._parents, e, n);
        },
        selectAll: function selectAll(t) {
          var e = this._name,
              n = this._id;
          "function" != typeof t && (t = Object(r.o)(t));

          for (var i = this._groups, a = i.length, o = [], u = [], c = 0; c < a; ++c) {
            for (var s, f = i[c], l = f.length, d = 0; d < l; ++d) {
              if (s = f[d]) {
                for (var h, g = t.call(s, s.__data__, d, f), _ = y(s, n), x = 0, v = g.length; x < v; ++x) {
                  (h = g[x]) && p(h, e, n, x, g, _);
                }

                o.push(g), u.push(s);
              }
            }
          }

          return new P(o, u, e, n);
        },
        filter: function filter(t) {
          "function" != typeof t && (t = Object(r.g)(t));

          for (var e = this._groups, n = e.length, i = new Array(n), a = 0; a < n; ++a) {
            for (var o, u = e[a], c = u.length, s = i[a] = [], f = 0; f < c; ++f) {
              (o = u[f]) && t.call(o, o.__data__, f, u) && s.push(o);
            }
          }

          return new P(i, this._parents, this._name, this._id);
        },
        merge: function merge(t) {
          if (t._id !== this._id) throw new Error();

          for (var e = this._groups, n = t._groups, r = e.length, i = n.length, a = Math.min(r, i), o = new Array(r), u = 0; u < a; ++u) {
            for (var c, s = e[u], f = n[u], l = s.length, d = o[u] = new Array(l), h = 0; h < l; ++h) {
              (c = s[h] || f[h]) && (d[h] = c);
            }
          }

          for (; u < r; ++u) {
            o[u] = e[u];
          }

          return new P(o, this._parents, this._name, this._id);
        },
        selection: function selection() {
          return new A(this._groups, this._parents);
        },
        transition: function transition() {
          for (var t = this._name, e = this._id, n = M(), r = this._groups, i = r.length, a = 0; a < i; ++a) {
            for (var o, u = r[a], c = u.length, s = 0; s < c; ++s) {
              if (o = u[s]) {
                var f = y(o, e);
                p(o, t, n, s, u, {
                  time: f.time + f.delay + f.duration,
                  delay: 0,
                  duration: f.duration,
                  ease: f.ease
                });
              }
            }
          }

          return new P(r, this._parents, t, n);
        },
        call: L.call,
        nodes: L.nodes,
        node: L.node,
        size: L.size,
        empty: L.empty,
        each: L.each,
        on: function on(t, e) {
          var n = this._id;
          return arguments.length < 2 ? y(this.node(), n).on.on(t) : this.each(function (t, e, n) {
            var r,
                i,
                a = function (t) {
              return (t + "").trim().split(/^|\s+/).every(function (t) {
                var e = t.indexOf(".");
                return e >= 0 && (t = t.slice(0, e)), !t || "start" === t;
              });
            }(e) ? _ : x;
            return function () {
              var o = a(this, t),
                  u = o.on;
              u !== r && (i = (r = u).copy()).on(e, n), o.on = i;
            };
          }(n, t, e));
        },
        attr: function attr(t, e) {
          var n = Object(r.i)(t),
              i = "transform" === n ? b.u : S;
          return this.attrTween(t, "function" == typeof e ? (n.local ? function (t, e, n) {
            var r, i, a;
            return function () {
              var o,
                  u = n(this);
              if (null != u) return (o = this.getAttributeNS(t.space, t.local)) === u ? null : o === r && u === i ? a : a = e(r = o, i = u);
              this.removeAttributeNS(t.space, t.local);
            };
          } : function (t, e, n) {
            var r, i, a;
            return function () {
              var o,
                  u = n(this);
              if (null != u) return (o = this.getAttribute(t)) === u ? null : o === r && u === i ? a : a = e(r = o, i = u);
              this.removeAttribute(t);
            };
          })(n, i, m(this, "attr." + t, e)) : null == e ? (n.local ? function (t) {
            return function () {
              this.removeAttributeNS(t.space, t.local);
            };
          } : function (t) {
            return function () {
              this.removeAttribute(t);
            };
          })(n) : (n.local ? function (t, e, n) {
            var r, i;
            return function () {
              var a = this.getAttributeNS(t.space, t.local);
              return a === n ? null : a === r ? i : i = e(r = a, n);
            };
          } : function (t, e, n) {
            var r, i;
            return function () {
              var a = this.getAttribute(t);
              return a === n ? null : a === r ? i : i = e(r = a, n);
            };
          })(n, i, e + ""));
        },
        attrTween: function attrTween(t, e) {
          var n = "attr." + t;
          if (arguments.length < 2) return (n = this.tween(n)) && n._value;
          if (null == e) return this.tween(n, null);
          if ("function" != typeof e) throw new Error();
          var i = Object(r.i)(t);
          return this.tween(n, (i.local ? function (t, e) {
            function n() {
              var n = this,
                  r = e.apply(n, arguments);
              return r && function (e) {
                n.setAttributeNS(t.space, t.local, r(e));
              };
            }

            return n._value = e, n;
          } : function (t, e) {
            function n() {
              var n = this,
                  r = e.apply(n, arguments);
              return r && function (e) {
                n.setAttribute(t, r(e));
              };
            }

            return n._value = e, n;
          })(i, e));
        },
        style: function style(t, e, n) {
          var i = "transform" == (t += "") ? b.t : S;
          return null == e ? this.styleTween(t, function (t, e) {
            var n, i, a;
            return function () {
              var o = Object(r.p)(this, t),
                  u = (this.style.removeProperty(t), Object(r.p)(this, t));
              return o === u ? null : o === n && u === i ? a : a = e(n = o, i = u);
            };
          }(t, i)).on("end.style." + t, function (t) {
            return function () {
              this.style.removeProperty(t);
            };
          }(t)) : this.styleTween(t, "function" == typeof e ? function (t, e, n) {
            var i, a, o;
            return function () {
              var u = Object(r.p)(this, t),
                  c = n(this);
              return null == c && (this.style.removeProperty(t), c = Object(r.p)(this, t)), u === c ? null : u === i && c === a ? o : o = e(i = u, a = c);
            };
          }(t, i, m(this, "style." + t, e)) : function (t, e, n) {
            var i, a;
            return function () {
              var o = Object(r.p)(this, t);
              return o === n ? null : o === i ? a : a = e(i = o, n);
            };
          }(t, i, e + ""), n);
        },
        styleTween: function styleTween(t, e, n) {
          var r = "style." + (t += "");
          if (arguments.length < 2) return (r = this.tween(r)) && r._value;
          if (null == e) return this.tween(r, null);
          if ("function" != typeof e) throw new Error();
          return this.tween(r, function (t, e, n) {
            function r() {
              var r = this,
                  i = e.apply(r, arguments);
              return i && function (e) {
                r.style.setProperty(t, i(e), n);
              };
            }

            return r._value = e, r;
          }(t, e, null == n ? "" : n));
        },
        text: function text(t) {
          return this.tween("text", "function" == typeof t ? function (t) {
            return function () {
              var e = t(this);
              this.textContent = null == e ? "" : e;
            };
          }(m(this, "text", t)) : function (t) {
            return function () {
              this.textContent = t;
            };
          }(null == t ? "" : t + ""));
        },
        remove: function remove() {
          return this.on("end.remove", (t = this._id, function () {
            var e = this.parentNode;

            for (var n in this.__transition) {
              if (+n !== t) return;
            }

            e && e.removeChild(this);
          }));
          var t;
        },
        tween: function tween(t, e) {
          var n = this._id;

          if (t += "", arguments.length < 2) {
            for (var r, i = y(this.node(), n).tween, a = 0, o = i.length; a < o; ++a) {
              if ((r = i[a]).name === t) return r.value;
            }

            return null;
          }

          return this.each((null == e ? function (t, e) {
            var n, r;
            return function () {
              var i = x(this, t),
                  a = i.tween;
              if (a !== n) for (var o = 0, u = (r = n = a).length; o < u; ++o) {
                if (r[o].name === e) {
                  (r = r.slice()).splice(o, 1);
                  break;
                }
              }
              i.tween = r;
            };
          } : function (t, e, n) {
            var r, i;
            if ("function" != typeof n) throw new Error();
            return function () {
              var a = x(this, t),
                  o = a.tween;

              if (o !== r) {
                i = (r = o).slice();

                for (var u = {
                  name: e,
                  value: n
                }, c = 0, s = i.length; c < s; ++c) {
                  if (i[c].name === e) {
                    i[c] = u;
                    break;
                  }
                }

                c === s && i.push(u);
              }

              a.tween = i;
            };
          })(n, t, e));
        },
        delay: function delay(t) {
          var e = this._id;
          return arguments.length ? this.each(("function" == typeof t ? function (t, e) {
            return function () {
              _(this, t).delay = +e.apply(this, arguments);
            };
          } : function (t, e) {
            return e = +e, function () {
              _(this, t).delay = e;
            };
          })(e, t)) : y(this.node(), e).delay;
        },
        duration: function duration(t) {
          var e = this._id;
          return arguments.length ? this.each(("function" == typeof t ? function (t, e) {
            return function () {
              x(this, t).duration = +e.apply(this, arguments);
            };
          } : function (t, e) {
            return e = +e, function () {
              x(this, t).duration = e;
            };
          })(e, t)) : y(this.node(), e).duration;
        },
        ease: function ease(t) {
          var e = this._id;
          return arguments.length ? this.each(function (t, e) {
            if ("function" != typeof e) throw new Error();
            return function () {
              x(this, t).ease = e;
            };
          }(e, t)) : y(this.node(), e).ease;
        }
      };
      var E = {
        time: null,
        delay: 0,
        duration: 250,
        ease: n(15).o
      };

      function O(t, e) {
        for (var n; !(n = t.__transition) || !(n = n[e]);) {
          if (!(t = t.parentNode)) return E.time = Object(a.b)(), E;
        }

        return n;
      }

      r.m.prototype.interrupt = function (t) {
        return this.each(function () {
          v(this, t);
        });
      }, r.m.prototype.transition = function (t) {
        var e, n;
        t instanceof P ? (e = t._id, t = t._name) : (e = M(), (n = E).time = Object(a.b)(), t = null == t ? null : t + "");

        for (var r = this._groups, i = r.length, o = 0; o < i; ++o) {
          for (var u, c = r[o], s = c.length, f = 0; f < s; ++f) {
            (u = c[f]) && p(u, t, e, f, c, n || O(u, e));
          }
        }

        return new P(r, this._parents, t, e);
      };

      var k = [null],
          V = function V(t, e) {
        var n,
            r,
            i = t.__transition;
        if (i) for (r in e = null == e ? null : e + "", i) {
          if ((n = i[r]).state > s && n.name === e) return new P([[t]], k, e, +r);
        }
        return null;
      };

      n.d(e, "c", function () {
        return C;
      }), n.d(e, "a", function () {
        return V;
      }), n.d(e, "b", function () {
        return v;
      });
    }, function (t, e, n) {
      "use strict";

      var r = n(7),
          i = n(0);

      function a() {
        i.e.stopImmediatePropagation();
      }

      var o = function o() {
        i.e.preventDefault(), i.e.stopImmediatePropagation();
      },
          u = function u(t) {
        var e = t.document.documentElement,
            n = Object(i.k)(t).on("dragstart.drag", o, !0);
        "onselectstart" in e ? n.on("selectstart.drag", o, !0) : (e.__noselect = e.style.MozUserSelect, e.style.MozUserSelect = "none");
      };

      function c(t, e) {
        var n = t.document.documentElement,
            r = Object(i.k)(t).on("dragstart.drag", null);
        e && (r.on("click.drag", o, !0), setTimeout(function () {
          r.on("click.drag", null);
        }, 0)), "onselectstart" in n ? r.on("selectstart.drag", null) : (n.style.MozUserSelect = n.__noselect, delete n.__noselect);
      }

      var s = function s(t) {
        return function () {
          return t;
        };
      };

      function f(t, e, n, r, i, a, o, u, c, s) {
        this.target = t, this.type = e, this.subject = n, this.identifier = r, this.active = i, this.x = a, this.y = o, this.dx = u, this.dy = c, this._ = s;
      }

      function l() {
        return !i.e.button;
      }

      function d() {
        return this.parentNode;
      }

      function h(t) {
        return null == t ? {
          x: i.e.x,
          y: i.e.y
        } : t;
      }

      function g() {
        return "ontouchstart" in this;
      }

      f.prototype.on = function () {
        var t = this._.on.apply(this._, arguments);

        return t === this._ ? this : t;
      };

      var p = function p() {
        var t,
            e,
            n,
            p,
            _ = l,
            x = d,
            y = h,
            v = g,
            b = {},
            m = Object(r.a)("start", "drag", "end"),
            w = 0,
            S = 0;

        function A(t) {
          t.on("mousedown.drag", T).filter(v).on("touchstart.drag", M).on("touchmove.drag", L).on("touchend.drag touchcancel.drag", E).style("touch-action", "none").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
        }

        function T() {
          if (!p && _.apply(this, arguments)) {
            var r = O("mouse", x.apply(this, arguments), i.h, this, arguments);
            r && (Object(i.k)(i.e.view).on("mousemove.drag", P, !0).on("mouseup.drag", C, !0), u(i.e.view), a(), n = !1, t = i.e.clientX, e = i.e.clientY, r("start"));
          }
        }

        function P() {
          if (o(), !n) {
            var r = i.e.clientX - t,
                a = i.e.clientY - e;
            n = r * r + a * a > S;
          }

          b.mouse("drag");
        }

        function C() {
          Object(i.k)(i.e.view).on("mousemove.drag mouseup.drag", null), c(i.e.view, n), o(), b.mouse("end");
        }

        function M() {
          if (_.apply(this, arguments)) {
            var t,
                e,
                n = i.e.changedTouches,
                r = x.apply(this, arguments),
                o = n.length;

            for (t = 0; t < o; ++t) {
              (e = O(n[t].identifier, r, i.q, this, arguments)) && (a(), e("start"));
            }
          }
        }

        function L() {
          var t,
              e,
              n = i.e.changedTouches,
              r = n.length;

          for (t = 0; t < r; ++t) {
            (e = b[n[t].identifier]) && (o(), e("drag"));
          }
        }

        function E() {
          var t,
              e,
              n = i.e.changedTouches,
              r = n.length;

          for (p && clearTimeout(p), p = setTimeout(function () {
            p = null;
          }, 500), t = 0; t < r; ++t) {
            (e = b[n[t].identifier]) && (a(), e("end"));
          }
        }

        function O(t, e, n, r, a) {
          var o,
              u,
              c,
              s = n(e, t),
              l = m.copy();
          if (Object(i.d)(new f(A, "beforestart", o, t, w, s[0], s[1], 0, 0, l), function () {
            return null != (i.e.subject = o = y.apply(r, a)) && (u = o.x - s[0] || 0, c = o.y - s[1] || 0, !0);
          })) return function d(h) {
            var g,
                p = s;

            switch (h) {
              case "start":
                b[t] = d, g = w++;
                break;

              case "end":
                delete b[t], --w;

              case "drag":
                s = n(e, t), g = w;
            }

            Object(i.d)(new f(A, h, o, t, g, s[0] + u, s[1] + c, s[0] - p[0], s[1] - p[1], l), l.apply, l, [h, r, a]);
          };
        }

        return A.filter = function (t) {
          return arguments.length ? (_ = "function" == typeof t ? t : s(!!t), A) : _;
        }, A.container = function (t) {
          return arguments.length ? (x = "function" == typeof t ? t : s(t), A) : x;
        }, A.subject = function (t) {
          return arguments.length ? (y = "function" == typeof t ? t : s(t), A) : y;
        }, A.touchable = function (t) {
          return arguments.length ? (v = "function" == typeof t ? t : s(!!t), A) : v;
        }, A.on = function () {
          var t = m.on.apply(m, arguments);
          return t === m ? A : t;
        }, A.clickDistance = function (t) {
          return arguments.length ? (S = (t = +t) * t, A) : Math.sqrt(S);
        }, A;
      };

      n.d(e, "a", function () {
        return p;
      }), n.d(e, "b", function () {
        return u;
      }), n.d(e, "c", function () {
        return c;
      });
    }, function (t, e, n) {
      "use strict";

      function r(t, e, n, r) {
        if (isNaN(e) || isNaN(n)) return t;
        var i,
            a,
            o,
            u,
            c,
            s,
            f,
            l,
            d,
            h = t._root,
            g = {
          data: r
        },
            p = t._x0,
            _ = t._y0,
            x = t._x1,
            y = t._y1;
        if (!h) return t._root = g, t;

        for (; h.length;) {
          if ((s = e >= (a = (p + x) / 2)) ? p = a : x = a, (f = n >= (o = (_ + y) / 2)) ? _ = o : y = o, i = h, !(h = h[l = f << 1 | s])) return i[l] = g, t;
        }

        if (u = +t._x.call(null, h.data), c = +t._y.call(null, h.data), e === u && n === c) return g.next = h, i ? i[l] = g : t._root = g, t;

        do {
          i = i ? i[l] = new Array(4) : t._root = new Array(4), (s = e >= (a = (p + x) / 2)) ? p = a : x = a, (f = n >= (o = (_ + y) / 2)) ? _ = o : y = o;
        } while ((l = f << 1 | s) == (d = (c >= o) << 1 | u >= a));

        return i[d] = h, i[l] = g, t;
      }

      var i = function i(t, e, n, r, _i) {
        this.node = t, this.x0 = e, this.y0 = n, this.x1 = r, this.y1 = _i;
      };

      function a(t) {
        return t[0];
      }

      function o(t) {
        return t[1];
      }

      function u(t, e, n) {
        var r = new c(null == e ? a : e, null == n ? o : n, NaN, NaN, NaN, NaN);
        return null == t ? r : r.addAll(t);
      }

      function c(t, e, n, r, i, a) {
        this._x = t, this._y = e, this._x0 = n, this._y0 = r, this._x1 = i, this._y1 = a, this._root = void 0;
      }

      function s(t) {
        for (var e = {
          data: t.data
        }, n = e; t = t.next;) {
          n = n.next = {
            data: t.data
          };
        }

        return e;
      }

      var f = u.prototype = c.prototype;
      f.copy = function () {
        var t,
            e,
            n = new c(this._x, this._y, this._x0, this._y0, this._x1, this._y1),
            r = this._root;
        if (!r) return n;
        if (!r.length) return n._root = s(r), n;

        for (t = [{
          source: r,
          target: n._root = new Array(4)
        }]; r = t.pop();) {
          for (var i = 0; i < 4; ++i) {
            (e = r.source[i]) && (e.length ? t.push({
              source: e,
              target: r.target[i] = new Array(4)
            }) : r.target[i] = s(e));
          }
        }

        return n;
      }, f.add = function (t) {
        var e = +this._x.call(null, t),
            n = +this._y.call(null, t);
        return r(this.cover(e, n), e, n, t);
      }, f.addAll = function (t) {
        var e,
            n,
            i,
            a,
            o = t.length,
            u = new Array(o),
            c = new Array(o),
            s = 1 / 0,
            f = 1 / 0,
            l = -1 / 0,
            d = -1 / 0;

        for (n = 0; n < o; ++n) {
          isNaN(i = +this._x.call(null, e = t[n])) || isNaN(a = +this._y.call(null, e)) || (u[n] = i, c[n] = a, i < s && (s = i), i > l && (l = i), a < f && (f = a), a > d && (d = a));
        }

        for (l < s && (s = this._x0, l = this._x1), d < f && (f = this._y0, d = this._y1), this.cover(s, f).cover(l, d), n = 0; n < o; ++n) {
          r(this, u[n], c[n], t[n]);
        }

        return this;
      }, f.cover = function (t, e) {
        if (isNaN(t = +t) || isNaN(e = +e)) return this;
        var n = this._x0,
            r = this._y0,
            i = this._x1,
            a = this._y1;
        if (isNaN(n)) i = (n = Math.floor(t)) + 1, a = (r = Math.floor(e)) + 1;else {
          if (!(n > t || t > i || r > e || e > a)) return this;
          var o,
              u,
              c = i - n,
              s = this._root;

          switch (u = (e < (r + a) / 2) << 1 | t < (n + i) / 2) {
            case 0:
              do {
                (o = new Array(4))[u] = s, s = o;
              } while ((a = r + (c *= 2), t > (i = n + c) || e > a));

              break;

            case 1:
              do {
                (o = new Array(4))[u] = s, s = o;
              } while ((a = r + (c *= 2), (n = i - c) > t || e > a));

              break;

            case 2:
              do {
                (o = new Array(4))[u] = s, s = o;
              } while ((r = a - (c *= 2), t > (i = n + c) || r > e));

              break;

            case 3:
              do {
                (o = new Array(4))[u] = s, s = o;
              } while ((r = a - (c *= 2), (n = i - c) > t || r > e));

          }

          this._root && this._root.length && (this._root = s);
        }
        return this._x0 = n, this._y0 = r, this._x1 = i, this._y1 = a, this;
      }, f.data = function () {
        var t = [];
        return this.visit(function (e) {
          if (!e.length) do {
            t.push(e.data);
          } while (e = e.next);
        }), t;
      }, f.extent = function (t) {
        return arguments.length ? this.cover(+t[0][0], +t[0][1]).cover(+t[1][0], +t[1][1]) : isNaN(this._x0) ? void 0 : [[this._x0, this._y0], [this._x1, this._y1]];
      }, f.find = function (t, e, n) {
        var r,
            a,
            o,
            u,
            c,
            s,
            f,
            l = this._x0,
            d = this._y0,
            h = this._x1,
            g = this._y1,
            p = [],
            _ = this._root;

        for (_ && p.push(new i(_, l, d, h, g)), null == n ? n = 1 / 0 : (l = t - n, d = e - n, h = t + n, g = e + n, n *= n); s = p.pop();) {
          if (!(!(_ = s.node) || (a = s.x0) > h || (o = s.y0) > g || (u = s.x1) < l || (c = s.y1) < d)) if (_.length) {
            var x = (a + u) / 2,
                y = (o + c) / 2;
            p.push(new i(_[3], x, y, u, c), new i(_[2], a, y, x, c), new i(_[1], x, o, u, y), new i(_[0], a, o, x, y)), (f = (e >= y) << 1 | t >= x) && (s = p[p.length - 1], p[p.length - 1] = p[p.length - 1 - f], p[p.length - 1 - f] = s);
          } else {
            var v = t - +this._x.call(null, _.data),
                b = e - +this._y.call(null, _.data),
                m = v * v + b * b;

            if (m < n) {
              var w = Math.sqrt(n = m);
              l = t - w, d = e - w, h = t + w, g = e + w, r = _.data;
            }
          }
        }

        return r;
      }, f.remove = function (t) {
        if (isNaN(a = +this._x.call(null, t)) || isNaN(o = +this._y.call(null, t))) return this;
        var e,
            n,
            r,
            i,
            a,
            o,
            u,
            c,
            s,
            f,
            l,
            d,
            h = this._root,
            g = this._x0,
            p = this._y0,
            _ = this._x1,
            x = this._y1;
        if (!h) return this;
        if (h.length) for (;;) {
          if ((s = a >= (u = (g + _) / 2)) ? g = u : _ = u, (f = o >= (c = (p + x) / 2)) ? p = c : x = c, e = h, !(h = h[l = f << 1 | s])) return this;
          if (!h.length) break;
          (e[l + 1 & 3] || e[l + 2 & 3] || e[l + 3 & 3]) && (n = e, d = l);
        }

        for (; h.data !== t;) {
          if (r = h, !(h = h.next)) return this;
        }

        return (i = h.next) && delete h.next, r ? (i ? r.next = i : delete r.next, this) : e ? (i ? e[l] = i : delete e[l], (h = e[0] || e[1] || e[2] || e[3]) && h === (e[3] || e[2] || e[1] || e[0]) && !h.length && (n ? n[d] = h : this._root = h), this) : (this._root = i, this);
      }, f.removeAll = function (t) {
        for (var e = 0, n = t.length; e < n; ++e) {
          this.remove(t[e]);
        }

        return this;
      }, f.root = function () {
        return this._root;
      }, f.size = function () {
        var t = 0;
        return this.visit(function (e) {
          if (!e.length) do {
            ++t;
          } while (e = e.next);
        }), t;
      }, f.visit = function (t) {
        var e,
            n,
            r,
            a,
            o,
            u,
            c = [],
            s = this._root;

        for (s && c.push(new i(s, this._x0, this._y0, this._x1, this._y1)); e = c.pop();) {
          if (!t(s = e.node, r = e.x0, a = e.y0, o = e.x1, u = e.y1) && s.length) {
            var f = (r + o) / 2,
                l = (a + u) / 2;
            (n = s[3]) && c.push(new i(n, f, l, o, u)), (n = s[2]) && c.push(new i(n, r, l, f, u)), (n = s[1]) && c.push(new i(n, f, a, o, l)), (n = s[0]) && c.push(new i(n, r, a, f, l));
          }
        }

        return this;
      }, f.visitAfter = function (t) {
        var e,
            n = [],
            r = [];

        for (this._root && n.push(new i(this._root, this._x0, this._y0, this._x1, this._y1)); e = n.pop();) {
          var a = e.node;

          if (a.length) {
            var o,
                u = e.x0,
                c = e.y0,
                s = e.x1,
                f = e.y1,
                l = (u + s) / 2,
                d = (c + f) / 2;
            (o = a[0]) && n.push(new i(o, u, c, l, d)), (o = a[1]) && n.push(new i(o, l, c, s, d)), (o = a[2]) && n.push(new i(o, u, d, l, f)), (o = a[3]) && n.push(new i(o, l, d, s, f));
          }

          r.push(e);
        }

        for (; e = r.pop();) {
          t(e.node, e.x0, e.y0, e.x1, e.y1);
        }

        return this;
      }, f.x = function (t) {
        return arguments.length ? (this._x = t, this) : this._x;
      }, f.y = function (t) {
        return arguments.length ? (this._y = t, this) : this._y;
      }, n.d(e, "a", function () {
        return u;
      });
    }, function (t, e, n) {
      "use strict";

      var r = {},
          i = {},
          a = 34,
          o = 10,
          u = 13;

      function c(t) {
        return new Function("d", "return {" + t.map(function (t, e) {
          return JSON.stringify(t) + ": d[" + e + "]";
        }).join(",") + "}");
      }

      var s = function s(t) {
        var e = new RegExp('["' + t + "\n\r]"),
            n = t.charCodeAt(0);

        function s(t, e) {
          var c,
              s = [],
              f = t.length,
              l = 0,
              d = 0,
              h = f <= 0,
              g = !1;

          function p() {
            if (h) return i;
            if (g) return g = !1, r;
            var e,
                c,
                s = l;

            if (t.charCodeAt(s) === a) {
              for (; l++ < f && t.charCodeAt(l) !== a || t.charCodeAt(++l) === a;) {
                ;
              }

              return (e = l) >= f ? h = !0 : (c = t.charCodeAt(l++)) === o ? g = !0 : c === u && (g = !0, t.charCodeAt(l) === o && ++l), t.slice(s + 1, e - 1).replace(/""/g, '"');
            }

            for (; l < f;) {
              if ((c = t.charCodeAt(e = l++)) === o) g = !0;else if (c === u) g = !0, t.charCodeAt(l) === o && ++l;else if (c !== n) continue;
              return t.slice(s, e);
            }

            return h = !0, t.slice(s, f);
          }

          for (t.charCodeAt(f - 1) === o && --f, t.charCodeAt(f - 1) === u && --f; (c = p()) !== i;) {
            for (var _ = []; c !== r && c !== i;) {
              _.push(c), c = p();
            }

            e && null == (_ = e(_, d++)) || s.push(_);
          }

          return s;
        }

        function f(e) {
          return e.map(l).join(t);
        }

        function l(t) {
          return null == t ? "" : e.test(t += "") ? '"' + t.replace(/"/g, '""') + '"' : t;
        }

        return {
          parse: function parse(t, e) {
            var n,
                r,
                i = s(t, function (t, i) {
              if (n) return n(t, i - 1);
              r = t, n = e ? function (t, e) {
                var n = c(t);
                return function (r, i) {
                  return e(n(r), i, t);
                };
              }(t, e) : c(t);
            });
            return i.columns = r || [], i;
          },
          parseRows: s,
          format: function format(e, n) {
            return null == n && (n = function (t) {
              var e = Object.create(null),
                  n = [];
              return t.forEach(function (t) {
                for (var r in t) {
                  r in e || n.push(e[r] = r);
                }
              }), n;
            }(e)), [n.map(l).join(t)].concat(e.map(function (e) {
              return n.map(function (t) {
                return l(e[t]);
              }).join(t);
            })).join("\n");
          },
          formatRows: function formatRows(t) {
            return t.map(f).join("\n");
          }
        };
      },
          f = s(","),
          l = f.parse,
          d = f.parseRows,
          h = f.format,
          g = f.formatRows,
          p = s("\t"),
          _ = p.parse,
          x = p.parseRows,
          y = p.format,
          v = p.formatRows;

      n.d(e, "e", function () {
        return s;
      }), n.d(e, "c", function () {
        return l;
      }), n.d(e, "d", function () {
        return d;
      }), n.d(e, "a", function () {
        return h;
      }), n.d(e, "b", function () {
        return g;
      }), n.d(e, "h", function () {
        return _;
      }), n.d(e, "i", function () {
        return x;
      }), n.d(e, "f", function () {
        return y;
      }), n.d(e, "g", function () {
        return v;
      });
    }, function (t, e, n) {
      "use strict";

      function r(t) {
        return +t;
      }

      function i(t) {
        return t * t;
      }

      function a(t) {
        return t * (2 - t);
      }

      function o(t) {
        return ((t *= 2) <= 1 ? t * t : --t * (2 - t) + 1) / 2;
      }

      function u(t) {
        return t * t * t;
      }

      function c(t) {
        return --t * t * t + 1;
      }

      function s(t) {
        return ((t *= 2) <= 1 ? t * t * t : (t -= 2) * t * t + 2) / 2;
      }

      var f = function t(e) {
        function n(t) {
          return Math.pow(t, e);
        }

        return e = +e, n.exponent = t, n;
      }(3),
          l = function t(e) {
        function n(t) {
          return 1 - Math.pow(1 - t, e);
        }

        return e = +e, n.exponent = t, n;
      }(3),
          d = function t(e) {
        function n(t) {
          return ((t *= 2) <= 1 ? Math.pow(t, e) : 2 - Math.pow(2 - t, e)) / 2;
        }

        return e = +e, n.exponent = t, n;
      }(3),
          h = Math.PI,
          g = h / 2;

      function p(t) {
        return 1 - Math.cos(t * g);
      }

      function _(t) {
        return Math.sin(t * g);
      }

      function x(t) {
        return (1 - Math.cos(h * t)) / 2;
      }

      function y(t) {
        return Math.pow(2, 10 * t - 10);
      }

      function v(t) {
        return 1 - Math.pow(2, -10 * t);
      }

      function b(t) {
        return ((t *= 2) <= 1 ? Math.pow(2, 10 * t - 10) : 2 - Math.pow(2, 10 - 10 * t)) / 2;
      }

      function m(t) {
        return 1 - Math.sqrt(1 - t * t);
      }

      function w(t) {
        return Math.sqrt(1 - --t * t);
      }

      function S(t) {
        return ((t *= 2) <= 1 ? 1 - Math.sqrt(1 - t * t) : Math.sqrt(1 - (t -= 2) * t) + 1) / 2;
      }

      var A = 4 / 11,
          T = 6 / 11,
          P = 8 / 11,
          C = .75,
          M = 9 / 11,
          L = 10 / 11,
          E = .9375,
          O = 21 / 22,
          k = 63 / 64,
          V = 1 / A / A;

      function G(t) {
        return 1 - R(1 - t);
      }

      function R(t) {
        return (t = +t) < A ? V * t * t : t < P ? V * (t -= T) * t + C : t < L ? V * (t -= M) * t + E : V * (t -= O) * t + k;
      }

      function I(t) {
        return ((t *= 2) <= 1 ? 1 - R(1 - t) : R(t - 1) + 1) / 2;
      }

      var N = function t(e) {
        function n(t) {
          return t * t * ((e + 1) * t - e);
        }

        return e = +e, n.overshoot = t, n;
      }(1.70158),
          D = function t(e) {
        function n(t) {
          return --t * t * ((e + 1) * t + e) + 1;
        }

        return e = +e, n.overshoot = t, n;
      }(1.70158),
          F = function t(e) {
        function n(t) {
          return ((t *= 2) < 1 ? t * t * ((e + 1) * t - e) : (t -= 2) * t * ((e + 1) * t + e) + 2) / 2;
        }

        return e = +e, n.overshoot = t, n;
      }(1.70158),
          z = 2 * Math.PI,
          j = function t(e, n) {
        var r = Math.asin(1 / (e = Math.max(1, e))) * (n /= z);

        function i(t) {
          return e * Math.pow(2, 10 * --t) * Math.sin((r - t) / n);
        }

        return i.amplitude = function (e) {
          return t(e, n * z);
        }, i.period = function (n) {
          return t(e, n);
        }, i;
      }(1, .3),
          X = function t(e, n) {
        var r = Math.asin(1 / (e = Math.max(1, e))) * (n /= z);

        function i(t) {
          return 1 - e * Math.pow(2, -10 * (t = +t)) * Math.sin((t + r) / n);
        }

        return i.amplitude = function (e) {
          return t(e, n * z);
        }, i.period = function (n) {
          return t(e, n);
        }, i;
      }(1, .3),
          B = function t(e, n) {
        var r = Math.asin(1 / (e = Math.max(1, e))) * (n /= z);

        function i(t) {
          return ((t = 2 * t - 1) < 0 ? e * Math.pow(2, 10 * t) * Math.sin((r - t) / n) : 2 - e * Math.pow(2, -10 * t) * Math.sin((r + t) / n)) / 2;
        }

        return i.amplitude = function (e) {
          return t(e, n * z);
        }, i.period = function (n) {
          return t(e, n);
        }, i;
      }(1, .3);

      n.d(e, "y", function () {
        return r;
      }), n.d(e, "D", function () {
        return o;
      }), n.d(e, "E", function () {
        return i;
      }), n.d(e, "G", function () {
        return a;
      }), n.d(e, "F", function () {
        return o;
      }), n.d(e, "m", function () {
        return s;
      }), n.d(e, "n", function () {
        return u;
      }), n.d(e, "p", function () {
        return c;
      }), n.d(e, "o", function () {
        return s;
      }), n.d(e, "z", function () {
        return d;
      }), n.d(e, "A", function () {
        return f;
      }), n.d(e, "C", function () {
        return l;
      }), n.d(e, "B", function () {
        return d;
      }), n.d(e, "H", function () {
        return x;
      }), n.d(e, "I", function () {
        return p;
      }), n.d(e, "K", function () {
        return _;
      }), n.d(e, "J", function () {
        return x;
      }), n.d(e, "u", function () {
        return b;
      }), n.d(e, "v", function () {
        return y;
      }), n.d(e, "x", function () {
        return v;
      }), n.d(e, "w", function () {
        return b;
      }), n.d(e, "i", function () {
        return S;
      }), n.d(e, "j", function () {
        return m;
      }), n.d(e, "l", function () {
        return w;
      }), n.d(e, "k", function () {
        return S;
      }), n.d(e, "e", function () {
        return R;
      }), n.d(e, "f", function () {
        return G;
      }), n.d(e, "h", function () {
        return R;
      }), n.d(e, "g", function () {
        return I;
      }), n.d(e, "a", function () {
        return F;
      }), n.d(e, "b", function () {
        return N;
      }), n.d(e, "d", function () {
        return D;
      }), n.d(e, "c", function () {
        return F;
      }), n.d(e, "q", function () {
        return X;
      }), n.d(e, "r", function () {
        return j;
      }), n.d(e, "t", function () {
        return X;
      }), n.d(e, "s", function () {
        return B;
      });
    }, function (t, e, n) {
      "use strict";

      var r = Array.prototype.slice,
          i = function i(t) {
        return t;
      },
          a = 1,
          o = 2,
          u = 3,
          c = 4,
          s = 1e-6;

      function f(t) {
        return "translate(" + (t + .5) + ",0)";
      }

      function l(t) {
        return "translate(0," + (t + .5) + ")";
      }

      function d() {
        return !this.__axis;
      }

      function h(t, e) {
        var n = [],
            h = null,
            g = null,
            p = 6,
            _ = 6,
            x = 3,
            y = t === a || t === c ? -1 : 1,
            v = t === c || t === o ? "x" : "y",
            b = t === a || t === u ? f : l;

        function m(r) {
          var f = null == h ? e.ticks ? e.ticks.apply(e, n) : e.domain() : h,
              l = null == g ? e.tickFormat ? e.tickFormat.apply(e, n) : i : g,
              m = Math.max(p, 0) + x,
              w = e.range(),
              S = +w[0] + .5,
              A = +w[w.length - 1] + .5,
              T = (e.bandwidth ? function (t) {
            var e = Math.max(0, t.bandwidth() - 1) / 2;
            return t.round() && (e = Math.round(e)), function (n) {
              return +t(n) + e;
            };
          } : function (t) {
            return function (e) {
              return +t(e);
            };
          })(e.copy()),
              P = r.selection ? r.selection() : r,
              C = P.selectAll(".domain").data([null]),
              M = P.selectAll(".tick").data(f, e).order(),
              L = M.exit(),
              E = M.enter().append("g").attr("class", "tick"),
              O = M.select("line"),
              k = M.select("text");
          C = C.merge(C.enter().insert("path", ".tick").attr("class", "domain").attr("stroke", "#000")), M = M.merge(E), O = O.merge(E.append("line").attr("stroke", "#000").attr(v + "2", y * p)), k = k.merge(E.append("text").attr("fill", "#000").attr(v, y * m).attr("dy", t === a ? "0em" : t === u ? "0.71em" : "0.32em")), r !== P && (C = C.transition(r), M = M.transition(r), O = O.transition(r), k = k.transition(r), L = L.transition(r).attr("opacity", s).attr("transform", function (t) {
            return isFinite(t = T(t)) ? b(t) : this.getAttribute("transform");
          }), E.attr("opacity", s).attr("transform", function (t) {
            var e = this.parentNode.__axis;
            return b(e && isFinite(e = e(t)) ? e : T(t));
          })), L.remove(), C.attr("d", t === c || t == o ? "M" + y * _ + "," + S + "H0.5V" + A + "H" + y * _ : "M" + S + "," + y * _ + "V0.5H" + A + "V" + y * _), M.attr("opacity", 1).attr("transform", function (t) {
            return b(T(t));
          }), O.attr(v + "2", y * p), k.attr(v, y * m).text(l), P.filter(d).attr("fill", "none").attr("font-size", 10).attr("font-family", "sans-serif").attr("text-anchor", t === o ? "start" : t === c ? "end" : "middle"), P.each(function () {
            this.__axis = T;
          });
        }

        return m.scale = function (t) {
          return arguments.length ? (e = t, m) : e;
        }, m.ticks = function () {
          return n = r.call(arguments), m;
        }, m.tickArguments = function (t) {
          return arguments.length ? (n = null == t ? [] : r.call(t), m) : n.slice();
        }, m.tickValues = function (t) {
          return arguments.length ? (h = null == t ? null : r.call(t), m) : h && h.slice();
        }, m.tickFormat = function (t) {
          return arguments.length ? (g = t, m) : g;
        }, m.tickSize = function (t) {
          return arguments.length ? (p = _ = +t, m) : p;
        }, m.tickSizeInner = function (t) {
          return arguments.length ? (p = +t, m) : p;
        }, m.tickSizeOuter = function (t) {
          return arguments.length ? (_ = +t, m) : _;
        }, m.tickPadding = function (t) {
          return arguments.length ? (x = +t, m) : x;
        }, m;
      }

      function g(t) {
        return h(a, t);
      }

      function p(t) {
        return h(o, t);
      }

      function _(t) {
        return h(u, t);
      }

      function x(t) {
        return h(c, t);
      }

      n.d(e, "d", function () {
        return g;
      }), n.d(e, "c", function () {
        return p;
      }), n.d(e, "a", function () {
        return _;
      }), n.d(e, "b", function () {
        return x;
      });
    }, function (t, e, n) {
      "use strict";

      var r = n(7),
          i = n(12),
          a = n(3),
          o = n(0),
          u = n(11),
          c = function c(t) {
        return function () {
          return t;
        };
      },
          s = function s(t, e, n) {
        this.target = t, this.type = e, this.selection = n;
      };

      function f() {
        o.e.stopImmediatePropagation();
      }

      var l = function l() {
        o.e.preventDefault(), o.e.stopImmediatePropagation();
      },
          d = {
        name: "drag"
      },
          h = {
        name: "space"
      },
          g = {
        name: "handle"
      },
          p = {
        name: "center"
      },
          _ = {
        name: "x",
        handles: ["e", "w"].map(A),
        input: function input(t, e) {
          return t && [[t[0], e[0][1]], [t[1], e[1][1]]];
        },
        output: function output(t) {
          return t && [t[0][0], t[1][0]];
        }
      },
          x = {
        name: "y",
        handles: ["n", "s"].map(A),
        input: function input(t, e) {
          return t && [[e[0][0], t[0]], [e[1][0], t[1]]];
        },
        output: function output(t) {
          return t && [t[0][1], t[1][1]];
        }
      },
          y = {
        name: "xy",
        handles: ["n", "e", "s", "w", "nw", "ne", "se", "sw"].map(A),
        input: function input(t) {
          return t;
        },
        output: function output(t) {
          return t;
        }
      },
          v = {
        overlay: "crosshair",
        selection: "move",
        n: "ns-resize",
        e: "ew-resize",
        s: "ns-resize",
        w: "ew-resize",
        nw: "nwse-resize",
        ne: "nesw-resize",
        se: "nwse-resize",
        sw: "nesw-resize"
      },
          b = {
        e: "w",
        w: "e",
        nw: "ne",
        ne: "nw",
        se: "sw",
        sw: "se"
      },
          m = {
        n: "s",
        s: "n",
        nw: "sw",
        ne: "se",
        se: "ne",
        sw: "nw"
      },
          w = {
        overlay: 1,
        selection: 1,
        n: null,
        e: 1,
        s: null,
        w: -1,
        nw: -1,
        ne: 1,
        se: 1,
        sw: -1
      },
          S = {
        overlay: 1,
        selection: 1,
        n: -1,
        e: null,
        s: 1,
        w: null,
        nw: -1,
        ne: -1,
        se: 1,
        sw: 1
      };

      function A(t) {
        return {
          type: t
        };
      }

      function T() {
        return !o.e.button;
      }

      function P() {
        var t = this.ownerSVGElement || this;
        return [[0, 0], [t.width.baseVal.value, t.height.baseVal.value]];
      }

      function C(t) {
        for (; !t.__brush;) {
          if (!(t = t.parentNode)) return;
        }

        return t.__brush;
      }

      function M(t) {
        return t[0][0] === t[1][0] || t[0][1] === t[1][1];
      }

      function L(t) {
        var e = t.__brush;
        return e ? e.dim.output(e.selection) : null;
      }

      function E() {
        return V(_);
      }

      function O() {
        return V(x);
      }

      var k = function k() {
        return V(y);
      };

      function V(t) {
        var e,
            n = P,
            y = T,
            L = Object(r.a)(O, "start", "brush", "end"),
            E = 6;

        function O(e) {
          var n = e.property("__brush", I).selectAll(".overlay").data([A("overlay")]);
          n.enter().append("rect").attr("class", "overlay").attr("pointer-events", "all").attr("cursor", v.overlay).merge(n).each(function () {
            var t = C(this).extent;
            Object(o.k)(this).attr("x", t[0][0]).attr("y", t[0][1]).attr("width", t[1][0] - t[0][0]).attr("height", t[1][1] - t[0][1]);
          }), e.selectAll(".selection").data([A("selection")]).enter().append("rect").attr("class", "selection").attr("cursor", v.selection).attr("fill", "#777").attr("fill-opacity", .3).attr("stroke", "#fff").attr("shape-rendering", "crispEdges");
          var r = e.selectAll(".handle").data(t.handles, function (t) {
            return t.type;
          });
          r.exit().remove(), r.enter().append("rect").attr("class", function (t) {
            return "handle handle--" + t.type;
          }).attr("cursor", function (t) {
            return v[t.type];
          }), e.each(k).attr("fill", "none").attr("pointer-events", "all").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)").on("mousedown.brush touchstart.brush", R);
        }

        function k() {
          var t = Object(o.k)(this),
              e = C(this).selection;
          e ? (t.selectAll(".selection").style("display", null).attr("x", e[0][0]).attr("y", e[0][1]).attr("width", e[1][0] - e[0][0]).attr("height", e[1][1] - e[0][1]), t.selectAll(".handle").style("display", null).attr("x", function (t) {
            return "e" === t.type[t.type.length - 1] ? e[1][0] - E / 2 : e[0][0] - E / 2;
          }).attr("y", function (t) {
            return "s" === t.type[0] ? e[1][1] - E / 2 : e[0][1] - E / 2;
          }).attr("width", function (t) {
            return "n" === t.type || "s" === t.type ? e[1][0] - e[0][0] + E : E;
          }).attr("height", function (t) {
            return "e" === t.type || "w" === t.type ? e[1][1] - e[0][1] + E : E;
          })) : t.selectAll(".selection,.handle").style("display", "none").attr("x", null).attr("y", null).attr("width", null).attr("height", null);
        }

        function V(t, e) {
          return t.__brush.emitter || new G(t, e);
        }

        function G(t, e) {
          this.that = t, this.args = e, this.state = t.__brush, this.active = 0;
        }

        function R() {
          if (o.e.touches) {
            if (o.e.changedTouches.length < o.e.touches.length) return l();
          } else if (e) return;

          if (y.apply(this, arguments)) {
            var n,
                r,
                a,
                c,
                s,
                A,
                T,
                P,
                L,
                E,
                O,
                G,
                R,
                I = this,
                N = o.e.target.__data__.type,
                D = "selection" === (o.e.metaKey ? N = "overlay" : N) ? d : o.e.altKey ? p : g,
                F = t === x ? null : w[N],
                z = t === _ ? null : S[N],
                j = C(I),
                X = j.extent,
                B = j.selection,
                H = X[0][0],
                Y = X[0][1],
                U = X[1][0],
                q = X[1][1],
                W = F && z && o.e.shiftKey,
                Q = Object(o.h)(I),
                Z = Q,
                $ = V(I, arguments).beforestart();
            "overlay" === N ? j.selection = B = [[n = t === x ? H : Q[0], a = t === _ ? Y : Q[1]], [s = t === x ? U : n, T = t === _ ? q : a]] : (n = B[0][0], a = B[0][1], s = B[1][0], T = B[1][1]), r = n, c = a, A = s, P = T;
            var K = Object(o.k)(I).attr("pointer-events", "none"),
                J = K.selectAll(".overlay").attr("cursor", v[N]);
            if (o.e.touches) K.on("touchmove.brush", et, !0).on("touchend.brush touchcancel.brush", rt, !0);else {
              var tt = Object(o.k)(o.e.view).on("keydown.brush", function () {
                switch (o.e.keyCode) {
                  case 16:
                    W = F && z;
                    break;

                  case 18:
                    D === g && (F && (s = A - L * F, n = r + L * F), z && (T = P - E * z, a = c + E * z), D = p, nt());
                    break;

                  case 32:
                    D !== g && D !== p || (F < 0 ? s = A - L : F > 0 && (n = r - L), z < 0 ? T = P - E : z > 0 && (a = c - E), D = h, J.attr("cursor", v.selection), nt());
                    break;

                  default:
                    return;
                }

                l();
              }, !0).on("keyup.brush", function () {
                switch (o.e.keyCode) {
                  case 16:
                    W && (G = R = W = !1, nt());
                    break;

                  case 18:
                    D === p && (F < 0 ? s = A : F > 0 && (n = r), z < 0 ? T = P : z > 0 && (a = c), D = g, nt());
                    break;

                  case 32:
                    D === h && (o.e.altKey ? (F && (s = A - L * F, n = r + L * F), z && (T = P - E * z, a = c + E * z), D = p) : (F < 0 ? s = A : F > 0 && (n = r), z < 0 ? T = P : z > 0 && (a = c), D = g), J.attr("cursor", v[N]), nt());
                    break;

                  default:
                    return;
                }

                l();
              }, !0).on("mousemove.brush", et, !0).on("mouseup.brush", rt, !0);
              Object(i.b)(o.e.view);
            }
            f(), Object(u.b)(I), k.call(I), $.start();
          }

          function et() {
            var t = Object(o.h)(I);
            !W || G || R || (Math.abs(t[0] - Z[0]) > Math.abs(t[1] - Z[1]) ? R = !0 : G = !0), Z = t, O = !0, l(), nt();
          }

          function nt() {
            var t;

            switch (L = Z[0] - Q[0], E = Z[1] - Q[1], D) {
              case h:
              case d:
                F && (L = Math.max(H - n, Math.min(U - s, L)), r = n + L, A = s + L), z && (E = Math.max(Y - a, Math.min(q - T, E)), c = a + E, P = T + E);
                break;

              case g:
                F < 0 ? (L = Math.max(H - n, Math.min(U - n, L)), r = n + L, A = s) : F > 0 && (L = Math.max(H - s, Math.min(U - s, L)), r = n, A = s + L), z < 0 ? (E = Math.max(Y - a, Math.min(q - a, E)), c = a + E, P = T) : z > 0 && (E = Math.max(Y - T, Math.min(q - T, E)), c = a, P = T + E);
                break;

              case p:
                F && (r = Math.max(H, Math.min(U, n - L * F)), A = Math.max(H, Math.min(U, s + L * F))), z && (c = Math.max(Y, Math.min(q, a - E * z)), P = Math.max(Y, Math.min(q, T + E * z)));
            }

            A < r && (F *= -1, t = n, n = s, s = t, t = r, r = A, A = t, N in b && J.attr("cursor", v[N = b[N]])), P < c && (z *= -1, t = a, a = T, T = t, t = c, c = P, P = t, N in m && J.attr("cursor", v[N = m[N]])), j.selection && (B = j.selection), G && (r = B[0][0], A = B[1][0]), R && (c = B[0][1], P = B[1][1]), B[0][0] === r && B[0][1] === c && B[1][0] === A && B[1][1] === P || (j.selection = [[r, c], [A, P]], k.call(I), $.brush());
          }

          function rt() {
            if (f(), o.e.touches) {
              if (o.e.touches.length) return;
              e && clearTimeout(e), e = setTimeout(function () {
                e = null;
              }, 500), K.on("touchmove.brush touchend.brush touchcancel.brush", null);
            } else Object(i.c)(o.e.view, O), tt.on("keydown.brush keyup.brush mousemove.brush mouseup.brush", null);

            K.attr("pointer-events", "all"), J.attr("cursor", v.overlay), j.selection && (B = j.selection), M(B) && (j.selection = null, k.call(I)), $.end();
          }
        }

        function I() {
          var e = this.__brush || {
            selection: null
          };
          return e.extent = n.apply(this, arguments), e.dim = t, e;
        }

        return O.move = function (e, n) {
          e.selection ? e.on("start.brush", function () {
            V(this, arguments).beforestart().start();
          }).on("interrupt.brush end.brush", function () {
            V(this, arguments).end();
          }).tween("brush", function () {
            var e = this,
                r = e.__brush,
                i = V(e, arguments),
                o = r.selection,
                u = t.input("function" == typeof n ? n.apply(this, arguments) : n, r.extent),
                c = Object(a.a)(o, u);

            function s(t) {
              r.selection = 1 === t && M(u) ? null : c(t), k.call(e), i.brush();
            }

            return o && u ? s : s(1);
          }) : e.each(function () {
            var e = arguments,
                r = this.__brush,
                i = t.input("function" == typeof n ? n.apply(this, e) : n, r.extent),
                a = V(this, e).beforestart();
            Object(u.b)(this), r.selection = null == i || M(i) ? null : i, k.call(this), a.start().brush().end();
          });
        }, G.prototype = {
          beforestart: function beforestart() {
            return 1 == ++this.active && (this.state.emitter = this, this.starting = !0), this;
          },
          start: function start() {
            return this.starting && (this.starting = !1, this.emit("start")), this;
          },
          brush: function brush() {
            return this.emit("brush"), this;
          },
          end: function end() {
            return 0 == --this.active && (delete this.state.emitter, this.emit("end")), this;
          },
          emit: function emit(e) {
            Object(o.d)(new s(O, e, t.output(this.state.selection)), L.apply, L, [e, this.that, this.args]);
          }
        }, O.extent = function (t) {
          return arguments.length ? (n = "function" == typeof t ? t : c([[+t[0][0], +t[0][1]], [+t[1][0], +t[1][1]]]), O) : n;
        }, O.filter = function (t) {
          return arguments.length ? (y = "function" == typeof t ? t : c(!!t), O) : y;
        }, O.handleSize = function (t) {
          return arguments.length ? (E = +t, O) : E;
        }, O.on = function () {
          var t = L.on.apply(L, arguments);
          return t === L ? O : t;
        }, O;
      }

      n.d(e, "a", function () {
        return k;
      }), n.d(e, "c", function () {
        return E;
      }), n.d(e, "d", function () {
        return O;
      }), n.d(e, "b", function () {
        return L;
      });
    }, function (t, e, n) {
      "use strict";

      var r = n(1),
          i = Math.cos,
          a = Math.sin,
          o = Math.PI,
          u = o / 2,
          c = 2 * o,
          s = Math.max;

      var f = function f() {
        var t = 0,
            e = null,
            n = null,
            i = null;

        function a(a) {
          var o,
              u,
              f,
              l,
              d,
              h,
              g = a.length,
              p = [],
              _ = Object(r.s)(g),
              x = [],
              y = [],
              v = y.groups = new Array(g),
              b = new Array(g * g);

          for (o = 0, d = -1; ++d < g;) {
            for (u = 0, h = -1; ++h < g;) {
              u += a[d][h];
            }

            p.push(u), x.push(Object(r.s)(g)), o += u;
          }

          for (e && _.sort(function (t, n) {
            return e(p[t], p[n]);
          }), n && x.forEach(function (t, e) {
            t.sort(function (t, r) {
              return n(a[e][t], a[e][r]);
            });
          }), l = (o = s(0, c - t * g) / o) ? t : c / g, u = 0, d = -1; ++d < g;) {
            for (f = u, h = -1; ++h < g;) {
              var m = _[d],
                  w = x[m][h],
                  S = a[m][w],
                  A = u,
                  T = u += S * o;
              b[w * g + m] = {
                index: m,
                subindex: w,
                startAngle: A,
                endAngle: T,
                value: S
              };
            }

            v[m] = {
              index: m,
              startAngle: f,
              endAngle: u,
              value: p[m]
            }, u += l;
          }

          for (d = -1; ++d < g;) {
            for (h = d - 1; ++h < g;) {
              var P = b[h * g + d],
                  C = b[d * g + h];
              (P.value || C.value) && y.push(P.value < C.value ? {
                source: C,
                target: P
              } : {
                source: P,
                target: C
              });
            }
          }

          return i ? y.sort(i) : y;
        }

        return a.padAngle = function (e) {
          return arguments.length ? (t = s(0, e), a) : t;
        }, a.sortGroups = function (t) {
          return arguments.length ? (e = t, a) : e;
        }, a.sortSubgroups = function (t) {
          return arguments.length ? (n = t, a) : n;
        }, a.sortChords = function (t) {
          return arguments.length ? (null == t ? i = null : (e = t, i = function i(t, n) {
            return e(t.source.value + t.target.value, n.source.value + n.target.value);
          })._ = t, a) : i && i._;
          var e;
        }, a;
      },
          l = Array.prototype.slice,
          d = function d(t) {
        return function () {
          return t;
        };
      },
          h = n(6);

      function g(t) {
        return t.source;
      }

      function p(t) {
        return t.target;
      }

      function _(t) {
        return t.radius;
      }

      function x(t) {
        return t.startAngle;
      }

      function y(t) {
        return t.endAngle;
      }

      var v = function v() {
        var t = g,
            e = p,
            n = _,
            r = x,
            o = y,
            c = null;

        function s() {
          var s,
              f = l.call(arguments),
              d = t.apply(this, f),
              g = e.apply(this, f),
              p = +n.apply(this, (f[0] = d, f)),
              _ = r.apply(this, f) - u,
              x = o.apply(this, f) - u,
              y = p * i(_),
              v = p * a(_),
              b = +n.apply(this, (f[0] = g, f)),
              m = r.apply(this, f) - u,
              w = o.apply(this, f) - u;

          if (c || (c = s = Object(h.a)()), c.moveTo(y, v), c.arc(0, 0, p, _, x), _ === m && x === w || (c.quadraticCurveTo(0, 0, b * i(m), b * a(m)), c.arc(0, 0, b, m, w)), c.quadraticCurveTo(0, 0, y, v), c.closePath(), s) return c = null, s + "" || null;
        }

        return s.radius = function (t) {
          return arguments.length ? (n = "function" == typeof t ? t : d(+t), s) : n;
        }, s.startAngle = function (t) {
          return arguments.length ? (r = "function" == typeof t ? t : d(+t), s) : r;
        }, s.endAngle = function (t) {
          return arguments.length ? (o = "function" == typeof t ? t : d(+t), s) : o;
        }, s.source = function (e) {
          return arguments.length ? (t = e, s) : t;
        }, s.target = function (t) {
          return arguments.length ? (e = t, s) : e;
        }, s.context = function (t) {
          return arguments.length ? (c = null == t ? null : t, s) : c;
        }, s;
      };

      n.d(e, "a", function () {
        return f;
      }), n.d(e, "b", function () {
        return v;
      });
    }, function (t, e, n) {
      "use strict";

      var r = n(7),
          i = n(12),
          a = n(3),
          o = n(0),
          u = n(11),
          c = function c(t) {
        return function () {
          return t;
        };
      };

      function s(t, e, n) {
        this.k = t, this.x = e, this.y = n;
      }

      s.prototype = {
        constructor: s,
        scale: function scale(t) {
          return 1 === t ? this : new s(this.k * t, this.x, this.y);
        },
        translate: function translate(t, e) {
          return 0 === t & 0 === e ? this : new s(this.k, this.x + this.k * t, this.y + this.k * e);
        },
        apply: function apply(t) {
          return [t[0] * this.k + this.x, t[1] * this.k + this.y];
        },
        applyX: function applyX(t) {
          return t * this.k + this.x;
        },
        applyY: function applyY(t) {
          return t * this.k + this.y;
        },
        invert: function invert(t) {
          return [(t[0] - this.x) / this.k, (t[1] - this.y) / this.k];
        },
        invertX: function invertX(t) {
          return (t - this.x) / this.k;
        },
        invertY: function invertY(t) {
          return (t - this.y) / this.k;
        },
        rescaleX: function rescaleX(t) {
          return t.copy().domain(t.range().map(this.invertX, this).map(t.invert, t));
        },
        rescaleY: function rescaleY(t) {
          return t.copy().domain(t.range().map(this.invertY, this).map(t.invert, t));
        },
        toString: function toString() {
          return "translate(" + this.x + "," + this.y + ") scale(" + this.k + ")";
        }
      };
      var f = new s(1, 0, 0);

      function l(t) {
        return t.__zoom || f;
      }

      function d() {
        o.e.stopImmediatePropagation();
      }

      l.prototype = s.prototype;

      var h = function h() {
        o.e.preventDefault(), o.e.stopImmediatePropagation();
      };

      function g() {
        return !o.e.button;
      }

      function p() {
        var t,
            e,
            n = this;
        return n instanceof SVGElement ? (t = (n = n.ownerSVGElement || n).width.baseVal.value, e = n.height.baseVal.value) : (t = n.clientWidth, e = n.clientHeight), [[0, 0], [t, e]];
      }

      function _() {
        return this.__zoom || f;
      }

      function x() {
        return -o.e.deltaY * (o.e.deltaMode ? 120 : 1) / 500;
      }

      function y() {
        return "ontouchstart" in this;
      }

      function v(t, e, n) {
        var r = t.invertX(e[0][0]) - n[0][0],
            i = t.invertX(e[1][0]) - n[1][0],
            a = t.invertY(e[0][1]) - n[0][1],
            o = t.invertY(e[1][1]) - n[1][1];
        return t.translate(i > r ? (r + i) / 2 : Math.min(0, r) || Math.max(0, i), o > a ? (a + o) / 2 : Math.min(0, a) || Math.max(0, o));
      }

      var b = function b() {
        var t,
            e,
            n = g,
            l = p,
            b = v,
            m = x,
            w = y,
            S = [0, 1 / 0],
            A = [[-1 / 0, -1 / 0], [1 / 0, 1 / 0]],
            T = 250,
            P = a.v,
            C = [],
            M = Object(r.a)("start", "zoom", "end"),
            L = 500,
            E = 150,
            O = 0;

        function k(t) {
          t.property("__zoom", _).on("wheel.zoom", F).on("mousedown.zoom", z).on("dblclick.zoom", j).filter(w).on("touchstart.zoom", X).on("touchmove.zoom", B).on("touchend.zoom touchcancel.zoom", H).style("touch-action", "none").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
        }

        function V(t, e) {
          return (e = Math.max(S[0], Math.min(S[1], e))) === t.k ? t : new s(e, t.x, t.y);
        }

        function G(t, e, n) {
          var r = e[0] - n[0] * t.k,
              i = e[1] - n[1] * t.k;
          return r === t.x && i === t.y ? t : new s(t.k, r, i);
        }

        function R(t) {
          return [(+t[0][0] + +t[1][0]) / 2, (+t[0][1] + +t[1][1]) / 2];
        }

        function I(t, e, n) {
          t.on("start.zoom", function () {
            N(this, arguments).start();
          }).on("interrupt.zoom end.zoom", function () {
            N(this, arguments).end();
          }).tween("zoom", function () {
            var t = arguments,
                r = N(this, t),
                i = l.apply(this, t),
                a = n || R(i),
                o = Math.max(i[1][0] - i[0][0], i[1][1] - i[0][1]),
                u = this.__zoom,
                c = "function" == typeof e ? e.apply(this, t) : e,
                f = P(u.invert(a).concat(o / u.k), c.invert(a).concat(o / c.k));
            return function (t) {
              if (1 === t) t = c;else {
                var e = f(t),
                    n = o / e[2];
                t = new s(n, a[0] - e[0] * n, a[1] - e[1] * n);
              }
              r.zoom(null, t);
            };
          });
        }

        function N(t, e) {
          for (var n, r = 0, i = C.length; r < i; ++r) {
            if ((n = C[r]).that === t) return n;
          }

          return new D(t, e);
        }

        function D(t, e) {
          this.that = t, this.args = e, this.index = -1, this.active = 0, this.extent = l.apply(t, e);
        }

        function F() {
          if (n.apply(this, arguments)) {
            var t = N(this, arguments),
                e = this.__zoom,
                r = Math.max(S[0], Math.min(S[1], e.k * Math.pow(2, m.apply(this, arguments)))),
                i = Object(o.h)(this);
            if (t.wheel) t.mouse[0][0] === i[0] && t.mouse[0][1] === i[1] || (t.mouse[1] = e.invert(t.mouse[0] = i)), clearTimeout(t.wheel);else {
              if (e.k === r) return;
              t.mouse = [i, e.invert(i)], Object(u.b)(this), t.start();
            }
            h(), t.wheel = setTimeout(function () {
              t.wheel = null, t.end();
            }, E), t.zoom("mouse", b(G(V(e, r), t.mouse[0], t.mouse[1]), t.extent, A));
          }
        }

        function z() {
          if (!e && n.apply(this, arguments)) {
            var t = N(this, arguments),
                r = Object(o.k)(o.e.view).on("mousemove.zoom", function () {
              if (h(), !t.moved) {
                var e = o.e.clientX - c,
                    n = o.e.clientY - s;
                t.moved = e * e + n * n > O;
              }

              t.zoom("mouse", b(G(t.that.__zoom, t.mouse[0] = Object(o.h)(t.that), t.mouse[1]), t.extent, A));
            }, !0).on("mouseup.zoom", function () {
              r.on("mousemove.zoom mouseup.zoom", null), Object(i.c)(o.e.view, t.moved), h(), t.end();
            }, !0),
                a = Object(o.h)(this),
                c = o.e.clientX,
                s = o.e.clientY;
            Object(i.b)(o.e.view), d(), t.mouse = [a, this.__zoom.invert(a)], Object(u.b)(this), t.start();
          }
        }

        function j() {
          if (n.apply(this, arguments)) {
            var t = this.__zoom,
                e = Object(o.h)(this),
                r = t.invert(e),
                i = t.k * (o.e.shiftKey ? .5 : 2),
                a = b(G(V(t, i), e, r), l.apply(this, arguments), A);
            h(), T > 0 ? Object(o.k)(this).transition().duration(T).call(I, a, e) : Object(o.k)(this).call(k.transform, a);
          }
        }

        function X() {
          if (n.apply(this, arguments)) {
            var e,
                r,
                i,
                a,
                c = N(this, arguments),
                s = o.e.changedTouches,
                f = s.length;

            for (d(), r = 0; r < f; ++r) {
              i = s[r], a = [a = Object(o.q)(this, s, i.identifier), this.__zoom.invert(a), i.identifier], c.touch0 ? c.touch1 || (c.touch1 = a) : (c.touch0 = a, e = !0);
            }

            if (t && (t = clearTimeout(t), !c.touch1)) return c.end(), void ((a = Object(o.k)(this).on("dblclick.zoom")) && a.apply(this, arguments));
            e && (t = setTimeout(function () {
              t = null;
            }, L), Object(u.b)(this), c.start());
          }
        }

        function B() {
          var e,
              n,
              r,
              i,
              a = N(this, arguments),
              u = o.e.changedTouches,
              c = u.length;

          for (h(), t && (t = clearTimeout(t)), e = 0; e < c; ++e) {
            n = u[e], r = Object(o.q)(this, u, n.identifier), a.touch0 && a.touch0[2] === n.identifier ? a.touch0[0] = r : a.touch1 && a.touch1[2] === n.identifier && (a.touch1[0] = r);
          }

          if (n = a.that.__zoom, a.touch1) {
            var s = a.touch0[0],
                f = a.touch0[1],
                l = a.touch1[0],
                d = a.touch1[1],
                g = (g = l[0] - s[0]) * g + (g = l[1] - s[1]) * g,
                p = (p = d[0] - f[0]) * p + (p = d[1] - f[1]) * p;
            n = V(n, Math.sqrt(g / p)), r = [(s[0] + l[0]) / 2, (s[1] + l[1]) / 2], i = [(f[0] + d[0]) / 2, (f[1] + d[1]) / 2];
          } else {
            if (!a.touch0) return;
            r = a.touch0[0], i = a.touch0[1];
          }

          a.zoom("touch", b(G(n, r, i), a.extent, A));
        }

        function H() {
          var t,
              n,
              r = N(this, arguments),
              i = o.e.changedTouches,
              a = i.length;

          for (d(), e && clearTimeout(e), e = setTimeout(function () {
            e = null;
          }, L), t = 0; t < a; ++t) {
            n = i[t], r.touch0 && r.touch0[2] === n.identifier ? delete r.touch0 : r.touch1 && r.touch1[2] === n.identifier && delete r.touch1;
          }

          r.touch1 && !r.touch0 && (r.touch0 = r.touch1, delete r.touch1), r.touch0 ? r.touch0[1] = this.__zoom.invert(r.touch0[0]) : r.end();
        }

        return k.transform = function (t, e) {
          var n = t.selection ? t.selection() : t;
          n.property("__zoom", _), t !== n ? I(t, e) : n.interrupt().each(function () {
            N(this, arguments).start().zoom(null, "function" == typeof e ? e.apply(this, arguments) : e).end();
          });
        }, k.scaleBy = function (t, e) {
          k.scaleTo(t, function () {
            return this.__zoom.k * ("function" == typeof e ? e.apply(this, arguments) : e);
          });
        }, k.scaleTo = function (t, e) {
          k.transform(t, function () {
            var t = l.apply(this, arguments),
                n = this.__zoom,
                r = R(t),
                i = n.invert(r),
                a = "function" == typeof e ? e.apply(this, arguments) : e;
            return b(G(V(n, a), r, i), t, A);
          });
        }, k.translateBy = function (t, e, n) {
          k.transform(t, function () {
            return b(this.__zoom.translate("function" == typeof e ? e.apply(this, arguments) : e, "function" == typeof n ? n.apply(this, arguments) : n), l.apply(this, arguments), A);
          });
        }, k.translateTo = function (t, e, n) {
          k.transform(t, function () {
            var t = l.apply(this, arguments),
                r = this.__zoom,
                i = R(t);
            return b(f.translate(i[0], i[1]).scale(r.k).translate("function" == typeof e ? -e.apply(this, arguments) : -e, "function" == typeof n ? -n.apply(this, arguments) : -n), t, A);
          });
        }, D.prototype = {
          start: function start() {
            return 1 == ++this.active && (this.index = C.push(this) - 1, this.emit("start")), this;
          },
          zoom: function zoom(t, e) {
            return this.mouse && "mouse" !== t && (this.mouse[1] = e.invert(this.mouse[0])), this.touch0 && "touch" !== t && (this.touch0[1] = e.invert(this.touch0[0])), this.touch1 && "touch" !== t && (this.touch1[1] = e.invert(this.touch1[0])), this.that.__zoom = e, this.emit("zoom"), this;
          },
          end: function end() {
            return 0 == --this.active && (C.splice(this.index, 1), this.index = -1, this.emit("end")), this;
          },
          emit: function emit(t) {
            Object(o.d)(new function (t, e, n) {
              this.target = t, this.type = e, this.transform = n;
            }(k, t, this.that.__zoom), M.apply, M, [t, this.that, this.args]);
          }
        }, k.wheelDelta = function (t) {
          return arguments.length ? (m = "function" == typeof t ? t : c(+t), k) : m;
        }, k.filter = function (t) {
          return arguments.length ? (n = "function" == typeof t ? t : c(!!t), k) : n;
        }, k.touchable = function (t) {
          return arguments.length ? (w = "function" == typeof t ? t : c(!!t), k) : w;
        }, k.extent = function (t) {
          return arguments.length ? (l = "function" == typeof t ? t : c([[+t[0][0], +t[0][1]], [+t[1][0], +t[1][1]]]), k) : l;
        }, k.scaleExtent = function (t) {
          return arguments.length ? (S[0] = +t[0], S[1] = +t[1], k) : [S[0], S[1]];
        }, k.translateExtent = function (t) {
          return arguments.length ? (A[0][0] = +t[0][0], A[1][0] = +t[1][0], A[0][1] = +t[0][1], A[1][1] = +t[1][1], k) : [[A[0][0], A[0][1]], [A[1][0], A[1][1]]];
        }, k.constrain = function (t) {
          return arguments.length ? (b = t, k) : b;
        }, k.duration = function (t) {
          return arguments.length ? (T = +t, k) : T;
        }, k.interpolate = function (t) {
          return arguments.length ? (P = t, k) : P;
        }, k.on = function () {
          var t = M.on.apply(M, arguments);
          return t === M ? k : t;
        }, k.clickDistance = function (t) {
          return arguments.length ? (O = (t = +t) * t, k) : Math.sqrt(O);
        }, k;
      };

      n.d(e, "a", function () {
        return b;
      }), n.d(e, "c", function () {
        return l;
      }), n.d(e, "b", function () {
        return f;
      });
    }, function (t, e, n) {
      "use strict";

      var r = function r(t) {
        for (var e, n = -1, r = t.length, i = t[r - 1], a = 0; ++n < r;) {
          e = i, i = t[n], a += e[1] * i[0] - e[0] * i[1];
        }

        return a / 2;
      },
          i = function i(t) {
        for (var e, n, r = -1, i = t.length, a = 0, o = 0, u = t[i - 1], c = 0; ++r < i;) {
          e = u, u = t[r], c += n = e[0] * u[1] - u[0] * e[1], a += (e[0] + u[0]) * n, o += (e[1] + u[1]) * n;
        }

        return [a / (c *= 3), o / c];
      },
          a = function a(t, e, n) {
        return (e[0] - t[0]) * (n[1] - t[1]) - (e[1] - t[1]) * (n[0] - t[0]);
      };

      function o(t, e) {
        return t[0] - e[0] || t[1] - e[1];
      }

      function u(t) {
        for (var e = t.length, n = [0, 1], r = 2, i = 2; i < e; ++i) {
          for (; r > 1 && a(t[n[r - 2]], t[n[r - 1]], t[i]) <= 0;) {
            --r;
          }

          n[r++] = i;
        }

        return n.slice(0, r);
      }

      var c = function c(t) {
        if ((n = t.length) < 3) return null;
        var e,
            n,
            r = new Array(n),
            i = new Array(n);

        for (e = 0; e < n; ++e) {
          r[e] = [+t[e][0], +t[e][1], e];
        }

        for (r.sort(o), e = 0; e < n; ++e) {
          i[e] = [r[e][0], -r[e][1]];
        }

        var a = u(r),
            c = u(i),
            s = c[0] === a[0],
            f = c[c.length - 1] === a[a.length - 1],
            l = [];

        for (e = a.length - 1; e >= 0; --e) {
          l.push(t[r[a[e]][2]]);
        }

        for (e = +s; e < c.length - f; ++e) {
          l.push(t[r[c[e]][2]]);
        }

        return l;
      },
          s = function s(t, e) {
        for (var n, r, i = t.length, a = t[i - 1], o = e[0], u = e[1], c = a[0], s = a[1], f = !1, l = 0; l < i; ++l) {
          n = (a = t[l])[0], (r = a[1]) > u != s > u && o < (c - n) * (u - r) / (s - r) + n && (f = !f), c = n, s = r;
        }

        return f;
      },
          f = function f(t) {
        for (var e, n, r = -1, i = t.length, a = t[i - 1], o = a[0], u = a[1], c = 0; ++r < i;) {
          e = o, n = u, e -= o = (a = t[r])[0], n -= u = a[1], c += Math.sqrt(e * e + n * n);
        }

        return c;
      };

      n.d(e, "a", function () {
        return r;
      }), n.d(e, "b", function () {
        return i;
      }), n.d(e, "d", function () {
        return c;
      }), n.d(e, "c", function () {
        return s;
      }), n.d(e, "e", function () {
        return f;
      });
    }, function (t, e, n) {
      "use strict";

      var r = function r() {
        return Math.random();
      },
          i = function t(e) {
        function n(t, n) {
          return t = null == t ? 0 : +t, n = null == n ? 1 : +n, 1 === arguments.length ? (n = t, t = 0) : n -= t, function () {
            return e() * n + t;
          };
        }

        return n.source = t, n;
      }(r),
          a = function t(e) {
        function n(t, n) {
          var r, i;
          return t = null == t ? 0 : +t, n = null == n ? 1 : +n, function () {
            var a;
            if (null != r) a = r, r = null;else do {
              r = 2 * e() - 1, a = 2 * e() - 1, i = r * r + a * a;
            } while (!i || i > 1);
            return t + n * a * Math.sqrt(-2 * Math.log(i) / i);
          };
        }

        return n.source = t, n;
      }(r),
          o = function t(e) {
        function n() {
          var t = a.source(e).apply(this, arguments);
          return function () {
            return Math.exp(t());
          };
        }

        return n.source = t, n;
      }(r),
          u = function t(e) {
        function n(t) {
          return function () {
            for (var n = 0, r = 0; r < t; ++r) {
              n += e();
            }

            return n;
          };
        }

        return n.source = t, n;
      }(r),
          c = function t(e) {
        function n(t) {
          var n = u.source(e)(t);
          return function () {
            return n() / t;
          };
        }

        return n.source = t, n;
      }(r),
          s = function t(e) {
        function n(t) {
          return function () {
            return -Math.log(1 - e()) / t;
          };
        }

        return n.source = t, n;
      }(r);

      n.d(e, "f", function () {
        return i;
      }), n.d(e, "e", function () {
        return a;
      }), n.d(e, "d", function () {
        return o;
      }), n.d(e, "a", function () {
        return c;
      }), n.d(e, "c", function () {
        return u;
      }), n.d(e, "b", function () {
        return s;
      });
    }, function (t, e, n) {
      "use strict";

      function r(t) {
        if (!t.ok) throw new Error(t.status + " " + t.statusText);
        return t.blob();
      }

      var i = function i(t, e) {
        return fetch(t, e).then(r);
      };

      function a(t) {
        if (!t.ok) throw new Error(t.status + " " + t.statusText);
        return t.arrayBuffer();
      }

      var o = function o(t, e) {
        return fetch(t, e).then(a);
      },
          u = n(14);

      function c(t) {
        if (!t.ok) throw new Error(t.status + " " + t.statusText);
        return t.text();
      }

      var s = function s(t, e) {
        return fetch(t, e).then(c);
      };

      function f(t) {
        return function (e, n, r) {
          return 2 === arguments.length && "function" == typeof n && (r = n, n = void 0), s(e, n).then(function (e) {
            return t(e, r);
          });
        };
      }

      function l(t, e, n, r) {
        3 === arguments.length && "function" == typeof n && (r = n, n = void 0);
        var i = Object(u.e)(t);
        return s(e, n).then(function (t) {
          return i.parse(t, r);
        });
      }

      var d = f(u.c),
          h = f(u.h),
          g = function g(t, e) {
        return new Promise(function (n, r) {
          var i = new Image();

          for (var a in e) {
            i[a] = e[a];
          }

          i.onerror = r, i.onload = function () {
            n(i);
          }, i.src = t;
        });
      };

      function p(t) {
        if (!t.ok) throw new Error(t.status + " " + t.statusText);
        return t.json();
      }

      var _ = function _(t, e) {
        return fetch(t, e).then(p);
      };

      function x(t) {
        return function (e, n) {
          return s(e, n).then(function (e) {
            return new DOMParser().parseFromString(e, t);
          });
        };
      }

      var y = x("application/xml"),
          v = x("text/html"),
          b = x("image/svg+xml");
      n.d(e, "a", function () {
        return i;
      }), n.d(e, "b", function () {
        return o;
      }), n.d(e, "d", function () {
        return l;
      }), n.d(e, "c", function () {
        return d;
      }), n.d(e, "j", function () {
        return h;
      }), n.d(e, "f", function () {
        return g;
      }), n.d(e, "g", function () {
        return _;
      }), n.d(e, "i", function () {
        return s;
      }), n.d(e, "k", function () {
        return y;
      }), n.d(e, "e", function () {
        return v;
      }), n.d(e, "h", function () {
        return b;
      });
    }, function (t, e, n) {
      "use strict";

      var r = n(1),
          i = Array.prototype.slice,
          a = function a(t, e) {
        return t - e;
      },
          o = function o(t) {
        for (var e = 0, n = t.length, r = t[n - 1][1] * t[0][0] - t[n - 1][0] * t[0][1]; ++e < n;) {
          r += t[e - 1][1] * t[e][0] - t[e - 1][0] * t[e][1];
        }

        return r;
      },
          u = function u(t) {
        return function () {
          return t;
        };
      },
          c = function c(t, e) {
        for (var n, r = -1, i = e.length; ++r < i;) {
          if (n = s(t, e[r])) return n;
        }

        return 0;
      };

      function s(t, e) {
        for (var n = e[0], r = e[1], i = -1, a = 0, o = t.length, u = o - 1; a < o; u = a++) {
          var c = t[a],
              s = c[0],
              l = c[1],
              d = t[u],
              h = d[0],
              g = d[1];
          if (f(c, d, e)) return 0;
          l > r != g > r && n < (h - s) * (r - l) / (g - l) + s && (i = -i);
        }

        return i;
      }

      function f(t, e, n) {
        var r, i, a, o;
        return function (t, e, n) {
          return (e[0] - t[0]) * (n[1] - t[1]) == (n[0] - t[0]) * (e[1] - t[1]);
        }(t, e, n) && (i = t[r = +(t[0] === e[0])], a = n[r], o = e[r], i <= a && a <= o || o <= a && a <= i);
      }

      var l = function l() {},
          d = [[], [[[1, 1.5], [.5, 1]]], [[[1.5, 1], [1, 1.5]]], [[[1.5, 1], [.5, 1]]], [[[1, .5], [1.5, 1]]], [[[1, 1.5], [.5, 1]], [[1, .5], [1.5, 1]]], [[[1, .5], [1, 1.5]]], [[[1, .5], [.5, 1]]], [[[.5, 1], [1, .5]]], [[[1, 1.5], [1, .5]]], [[[.5, 1], [1, .5]], [[1.5, 1], [1, 1.5]]], [[[1.5, 1], [1, .5]]], [[[.5, 1], [1.5, 1]]], [[[1, 1.5], [1.5, 1]]], [[[.5, 1], [1, 1.5]]], []],
          h = function h() {
        var t = 1,
            e = 1,
            n = r.y,
            s = p;

        function f(t) {
          var e = n(t);
          if (Array.isArray(e)) e = e.slice().sort(a);else {
            var i = Object(r.i)(t),
                o = i[0],
                u = i[1];
            e = Object(r.A)(o, u, e), e = Object(r.s)(Math.floor(o / e) * e, Math.floor(u / e) * e, e);
          }
          return e.map(function (e) {
            return h(t, e);
          });
        }

        function h(n, r) {
          var i = [],
              a = [];
          return function (n, r, i) {
            var a,
                o,
                u,
                c,
                s,
                f,
                l = new Array(),
                h = new Array();
            a = o = -1, c = n[0] >= r, d[c << 1].forEach(p);

            for (; ++a < t - 1;) {
              u = c, c = n[a + 1] >= r, d[u | c << 1].forEach(p);
            }

            d[c << 0].forEach(p);

            for (; ++o < e - 1;) {
              for (a = -1, c = n[o * t + t] >= r, s = n[o * t] >= r, d[c << 1 | s << 2].forEach(p); ++a < t - 1;) {
                u = c, c = n[o * t + t + a + 1] >= r, f = s, s = n[o * t + a + 1] >= r, d[u | c << 1 | s << 2 | f << 3].forEach(p);
              }

              d[c | s << 3].forEach(p);
            }

            a = -1, s = n[o * t] >= r, d[s << 2].forEach(p);

            for (; ++a < t - 1;) {
              f = s, s = n[o * t + a + 1] >= r, d[s << 2 | f << 3].forEach(p);
            }

            function p(t) {
              var e,
                  n,
                  r = [t[0][0] + a, t[0][1] + o],
                  u = [t[1][0] + a, t[1][1] + o],
                  c = g(r),
                  s = g(u);
              (e = h[c]) ? (n = l[s]) ? (delete h[e.end], delete l[n.start], e === n ? (e.ring.push(u), i(e.ring)) : l[e.start] = h[n.end] = {
                start: e.start,
                end: n.end,
                ring: e.ring.concat(n.ring)
              }) : (delete h[e.end], e.ring.push(u), h[e.end = s] = e) : (e = l[s]) ? (n = h[c]) ? (delete l[e.start], delete h[n.end], e === n ? (e.ring.push(u), i(e.ring)) : l[n.start] = h[e.end] = {
                start: n.start,
                end: e.end,
                ring: n.ring.concat(e.ring)
              }) : (delete l[e.start], e.ring.unshift(r), l[e.start = c] = e) : l[c] = h[s] = {
                start: c,
                end: s,
                ring: [r, u]
              };
            }

            d[s << 3].forEach(p);
          }(n, r, function (t) {
            s(t, n, r), o(t) > 0 ? i.push([t]) : a.push(t);
          }), a.forEach(function (t) {
            for (var e, n = 0, r = i.length; n < r; ++n) {
              if (-1 !== c((e = i[n])[0], t)) return void e.push(t);
            }
          }), {
            type: "MultiPolygon",
            value: r,
            coordinates: i
          };
        }

        function g(e) {
          return 2 * e[0] + e[1] * (t + 1) * 4;
        }

        function p(n, r, i) {
          n.forEach(function (n) {
            var a,
                o = n[0],
                u = n[1],
                c = 0 | o,
                s = 0 | u,
                f = r[s * t + c];
            o > 0 && o < t && c === o && (a = r[s * t + c - 1], n[0] = o + (i - a) / (f - a) - .5), u > 0 && u < e && s === u && (a = r[(s - 1) * t + c], n[1] = u + (i - a) / (f - a) - .5);
          });
        }

        return f.contour = h, f.size = function (n) {
          if (!arguments.length) return [t, e];
          var r = Math.ceil(n[0]),
              i = Math.ceil(n[1]);
          if (!(r > 0 && i > 0)) throw new Error("invalid size");
          return t = r, e = i, f;
        }, f.thresholds = function (t) {
          return arguments.length ? (n = "function" == typeof t ? t : Array.isArray(t) ? u(i.call(t)) : u(t), f) : n;
        }, f.smooth = function (t) {
          return arguments.length ? (s = t ? p : l, f) : s === p;
        }, f;
      };

      function g(t, e, n) {
        for (var r = t.width, i = t.height, a = 1 + (n << 1), o = 0; o < i; ++o) {
          for (var u = 0, c = 0; u < r + n; ++u) {
            u < r && (c += t.data[u + o * r]), u >= n && (u >= a && (c -= t.data[u - a + o * r]), e.data[u - n + o * r] = c / Math.min(u + 1, r - 1 + a - u, a));
          }
        }
      }

      function p(t, e, n) {
        for (var r = t.width, i = t.height, a = 1 + (n << 1), o = 0; o < r; ++o) {
          for (var u = 0, c = 0; u < i + n; ++u) {
            u < i && (c += t.data[o + u * r]), u >= n && (u >= a && (c -= t.data[o + (u - a) * r]), e.data[o + (u - n) * r] = c / Math.min(u + 1, i - 1 + a - u, a));
          }
        }
      }

      function _(t) {
        return t[0];
      }

      function x(t) {
        return t[1];
      }

      var y = function y() {
        var t = _,
            e = x,
            n = 960,
            a = 500,
            o = 20,
            c = 2,
            s = 3 * o,
            f = n + 2 * s >> c,
            l = a + 2 * s >> c,
            d = u(20);

        function y(n) {
          var i = new Float32Array(f * l),
              a = new Float32Array(f * l);
          n.forEach(function (n, r, a) {
            var o = t(n, r, a) + s >> c,
                u = e(n, r, a) + s >> c;
            o >= 0 && o < f && u >= 0 && u < l && ++i[o + u * f];
          }), g({
            width: f,
            height: l,
            data: i
          }, {
            width: f,
            height: l,
            data: a
          }, o >> c), p({
            width: f,
            height: l,
            data: a
          }, {
            width: f,
            height: l,
            data: i
          }, o >> c), g({
            width: f,
            height: l,
            data: i
          }, {
            width: f,
            height: l,
            data: a
          }, o >> c), p({
            width: f,
            height: l,
            data: a
          }, {
            width: f,
            height: l,
            data: i
          }, o >> c), g({
            width: f,
            height: l,
            data: i
          }, {
            width: f,
            height: l,
            data: a
          }, o >> c), p({
            width: f,
            height: l,
            data: a
          }, {
            width: f,
            height: l,
            data: i
          }, o >> c);
          var u = d(i);

          if (!Array.isArray(u)) {
            var _ = Object(r.k)(i);

            u = Object(r.A)(0, _, u), (u = Object(r.s)(0, Math.floor(_ / u) * u, u)).shift();
          }

          return h().thresholds(u).size([f, l])(i).map(v);
        }

        function v(t) {
          return t.value *= Math.pow(2, -2 * c), t.coordinates.forEach(b), t;
        }

        function b(t) {
          t.forEach(m);
        }

        function m(t) {
          t.forEach(w);
        }

        function w(t) {
          t[0] = t[0] * Math.pow(2, c) - s, t[1] = t[1] * Math.pow(2, c) - s;
        }

        function S() {
          return f = n + 2 * (s = 3 * o) >> c, l = a + 2 * s >> c, y;
        }

        return y.x = function (e) {
          return arguments.length ? (t = "function" == typeof e ? e : u(+e), y) : t;
        }, y.y = function (t) {
          return arguments.length ? (e = "function" == typeof t ? t : u(+t), y) : e;
        }, y.size = function (t) {
          if (!arguments.length) return [n, a];
          var e = Math.ceil(t[0]),
              r = Math.ceil(t[1]);
          if (!(e >= 0 || e >= 0)) throw new Error("invalid size");
          return n = e, a = r, S();
        }, y.cellSize = function (t) {
          if (!arguments.length) return 1 << c;
          if (!((t = +t) >= 1)) throw new Error("invalid cell size");
          return c = Math.floor(Math.log(t) / Math.LN2), S();
        }, y.thresholds = function (t) {
          return arguments.length ? (d = "function" == typeof t ? t : Array.isArray(t) ? u(i.call(t)) : u(t), y) : d;
        }, y.bandwidth = function (t) {
          if (!arguments.length) return Math.sqrt(o * (o + 1));
          if (!((t = +t) >= 0)) throw new Error("invalid bandwidth");
          return o = Math.round((Math.sqrt(4 * t * t + 1) - 1) / 2), S();
        }, y;
      };

      n.d(e, "b", function () {
        return h;
      }), n.d(e, "a", function () {
        return y;
      });
    }, function (t, e, n) {
      "use strict";

      var r = function r(t) {
        return function () {
          return t;
        };
      };

      function i(t) {
        return t[0];
      }

      function a(t) {
        return t[1];
      }

      function o() {
        this._ = null;
      }

      function u(t) {
        t.U = t.C = t.L = t.R = t.P = t.N = null;
      }

      function c(t, e) {
        var n = e,
            r = e.R,
            i = n.U;
        i ? i.L === n ? i.L = r : i.R = r : t._ = r, r.U = i, n.U = r, n.R = r.L, n.R && (n.R.U = n), r.L = n;
      }

      function s(t, e) {
        var n = e,
            r = e.L,
            i = n.U;
        i ? i.L === n ? i.L = r : i.R = r : t._ = r, r.U = i, n.U = r, n.L = r.R, n.L && (n.L.U = n), r.R = n;
      }

      function f(t) {
        for (; t.L;) {
          t = t.L;
        }

        return t;
      }

      o.prototype = {
        constructor: o,
        insert: function insert(t, e) {
          var n, r, i;

          if (t) {
            if (e.P = t, e.N = t.N, t.N && (t.N.P = e), t.N = e, t.R) {
              for (t = t.R; t.L;) {
                t = t.L;
              }

              t.L = e;
            } else t.R = e;

            n = t;
          } else this._ ? (t = f(this._), e.P = null, e.N = t, t.P = t.L = e, n = t) : (e.P = e.N = null, this._ = e, n = null);

          for (e.L = e.R = null, e.U = n, e.C = !0, t = e; n && n.C;) {
            n === (r = n.U).L ? (i = r.R) && i.C ? (n.C = i.C = !1, r.C = !0, t = r) : (t === n.R && (c(this, n), n = (t = n).U), n.C = !1, r.C = !0, s(this, r)) : (i = r.L) && i.C ? (n.C = i.C = !1, r.C = !0, t = r) : (t === n.L && (s(this, n), n = (t = n).U), n.C = !1, r.C = !0, c(this, r)), n = t.U;
          }

          this._.C = !1;
        },
        remove: function remove(t) {
          t.N && (t.N.P = t.P), t.P && (t.P.N = t.N), t.N = t.P = null;
          var e,
              n,
              r,
              i = t.U,
              a = t.L,
              o = t.R;
          if (n = a ? o ? f(o) : a : o, i ? i.L === t ? i.L = n : i.R = n : this._ = n, a && o ? (r = n.C, n.C = t.C, n.L = a, a.U = n, n !== o ? (i = n.U, n.U = t.U, t = n.R, i.L = t, n.R = o, o.U = n) : (n.U = i, i = n, t = n.R)) : (r = t.C, t = n), t && (t.U = i), !r) if (t && t.C) t.C = !1;else {
            do {
              if (t === this._) break;

              if (t === i.L) {
                if ((e = i.R).C && (e.C = !1, i.C = !0, c(this, i), e = i.R), e.L && e.L.C || e.R && e.R.C) {
                  e.R && e.R.C || (e.L.C = !1, e.C = !0, s(this, e), e = i.R), e.C = i.C, i.C = e.R.C = !1, c(this, i), t = this._;
                  break;
                }
              } else if ((e = i.L).C && (e.C = !1, i.C = !0, s(this, i), e = i.L), e.L && e.L.C || e.R && e.R.C) {
                e.L && e.L.C || (e.R.C = !1, e.C = !0, c(this, e), e = i.L), e.C = i.C, i.C = e.L.C = !1, s(this, i), t = this._;
                break;
              }

              e.C = !0, t = i, i = i.U;
            } while (!t.C);

            t && (t.C = !1);
          }
        }
      };
      var l = o;

      function d(t, e, n, r) {
        var i = [null, null],
            a = G.push(i) - 1;
        return i.left = t, i.right = e, n && g(i, t, e, n), r && g(i, e, t, r), k[t.index].halfedges.push(a), k[e.index].halfedges.push(a), i;
      }

      function h(t, e, n) {
        var r = [e, n];
        return r.left = t, r;
      }

      function g(t, e, n, r) {
        t[0] || t[1] ? t.left === n ? t[1] = r : t[0] = r : (t[0] = r, t.left = e, t.right = n);
      }

      function p(t, e, n, r, i) {
        var a,
            o = t[0],
            u = t[1],
            c = o[0],
            s = o[1],
            f = 0,
            l = 1,
            d = u[0] - c,
            h = u[1] - s;

        if (a = e - c, d || !(a > 0)) {
          if (a /= d, d < 0) {
            if (a < f) return;
            a < l && (l = a);
          } else if (d > 0) {
            if (a > l) return;
            a > f && (f = a);
          }

          if (a = r - c, d || !(a < 0)) {
            if (a /= d, d < 0) {
              if (a > l) return;
              a > f && (f = a);
            } else if (d > 0) {
              if (a < f) return;
              a < l && (l = a);
            }

            if (a = n - s, h || !(a > 0)) {
              if (a /= h, h < 0) {
                if (a < f) return;
                a < l && (l = a);
              } else if (h > 0) {
                if (a > l) return;
                a > f && (f = a);
              }

              if (a = i - s, h || !(a < 0)) {
                if (a /= h, h < 0) {
                  if (a > l) return;
                  a > f && (f = a);
                } else if (h > 0) {
                  if (a < f) return;
                  a < l && (l = a);
                }

                return !(f > 0 || l < 1) || (f > 0 && (t[0] = [c + f * d, s + f * h]), l < 1 && (t[1] = [c + l * d, s + l * h]), !0);
              }
            }
          }
        }
      }

      function _(t, e, n, r, i) {
        var a = t[1];
        if (a) return !0;

        var o,
            u,
            c = t[0],
            s = t.left,
            f = t.right,
            l = s[0],
            d = s[1],
            h = f[0],
            g = f[1],
            p = (l + h) / 2,
            _ = (d + g) / 2;

        if (g === d) {
          if (p < e || p >= r) return;

          if (l > h) {
            if (c) {
              if (c[1] >= i) return;
            } else c = [p, n];

            a = [p, i];
          } else {
            if (c) {
              if (c[1] < n) return;
            } else c = [p, i];

            a = [p, n];
          }
        } else if (u = _ - (o = (l - h) / (g - d)) * p, o < -1 || o > 1) {
          if (l > h) {
            if (c) {
              if (c[1] >= i) return;
            } else c = [(n - u) / o, n];

            a = [(i - u) / o, i];
          } else {
            if (c) {
              if (c[1] < n) return;
            } else c = [(i - u) / o, i];

            a = [(n - u) / o, n];
          }
        } else if (d < g) {
          if (c) {
            if (c[0] >= r) return;
          } else c = [e, o * e + u];

          a = [r, o * r + u];
        } else {
          if (c) {
            if (c[0] < e) return;
          } else c = [r, o * r + u];

          a = [e, o * e + u];
        }

        return t[0] = c, t[1] = a, !0;
      }

      function x(t, e) {
        var n = t.site,
            r = e.left,
            i = e.right;
        return n === i && (i = r, r = n), i ? Math.atan2(i[1] - r[1], i[0] - r[0]) : (n === r ? (r = e[1], i = e[0]) : (r = e[0], i = e[1]), Math.atan2(r[0] - i[0], i[1] - r[1]));
      }

      function y(t, e) {
        return e[+(e.left !== t.site)];
      }

      function v(t, e) {
        return e[+(e.left === t.site)];
      }

      var b,
          m = [];

      function w(t) {
        var e = t.P,
            n = t.N;

        if (e && n) {
          var r = e.site,
              i = t.site,
              a = n.site;

          if (r !== a) {
            var o = i[0],
                c = i[1],
                s = r[0] - o,
                f = r[1] - c,
                l = a[0] - o,
                d = a[1] - c,
                h = 2 * (s * d - f * l);

            if (!(h >= -I)) {
              var g = s * s + f * f,
                  p = l * l + d * d,
                  _ = (d * g - f * p) / h,
                  x = (s * p - l * g) / h,
                  y = m.pop() || new function () {
                u(this), this.x = this.y = this.arc = this.site = this.cy = null;
              }();

              y.arc = t, y.site = i, y.x = _ + o, y.y = (y.cy = x + c) + Math.sqrt(_ * _ + x * x), t.circle = y;

              for (var v = null, w = V._; w;) {
                if (y.y < w.y || y.y === w.y && y.x <= w.x) {
                  if (!w.L) {
                    v = w.P;
                    break;
                  }

                  w = w.L;
                } else {
                  if (!w.R) {
                    v = w;
                    break;
                  }

                  w = w.R;
                }
              }

              V.insert(v, y), v || (b = y);
            }
          }
        }
      }

      function S(t) {
        var e = t.circle;
        e && (e.P || (b = e.N), V.remove(e), m.push(e), u(e), t.circle = null);
      }

      var A = [];

      function T(t) {
        var e = A.pop() || new function () {
          u(this), this.edge = this.site = this.circle = null;
        }();
        return e.site = t, e;
      }

      function P(t) {
        S(t), O.remove(t), A.push(t), u(t);
      }

      function C(t) {
        var e = t.circle,
            n = e.x,
            r = e.cy,
            i = [n, r],
            a = t.P,
            o = t.N,
            u = [t];
        P(t);

        for (var c = a; c.circle && Math.abs(n - c.circle.x) < R && Math.abs(r - c.circle.cy) < R;) {
          a = c.P, u.unshift(c), P(c), c = a;
        }

        u.unshift(c), S(c);

        for (var s = o; s.circle && Math.abs(n - s.circle.x) < R && Math.abs(r - s.circle.cy) < R;) {
          o = s.N, u.push(s), P(s), s = o;
        }

        u.push(s), S(s);
        var f,
            l = u.length;

        for (f = 1; f < l; ++f) {
          s = u[f], c = u[f - 1], g(s.edge, c.site, s.site, i);
        }

        c = u[0], (s = u[l - 1]).edge = d(c.site, s.site, null, i), w(c), w(s);
      }

      function M(t) {
        for (var e, n, r, i, a = t[0], o = t[1], u = O._; u;) {
          if ((r = L(u, o) - a) > R) u = u.L;else {
            if (!((i = a - E(u, o)) > R)) {
              r > -R ? (e = u.P, n = u) : i > -R ? (e = u, n = u.N) : e = n = u;
              break;
            }

            if (!u.R) {
              e = u;
              break;
            }

            u = u.R;
          }
        }

        !function (t) {
          k[t.index] = {
            site: t,
            halfedges: []
          };
        }(t);
        var c = T(t);

        if (O.insert(e, c), e || n) {
          if (e === n) return S(e), n = T(e.site), O.insert(c, n), c.edge = n.edge = d(e.site, c.site), w(e), void w(n);

          if (n) {
            S(e), S(n);
            var s = e.site,
                f = s[0],
                l = s[1],
                h = t[0] - f,
                p = t[1] - l,
                _ = n.site,
                x = _[0] - f,
                y = _[1] - l,
                v = 2 * (h * y - p * x),
                b = h * h + p * p,
                m = x * x + y * y,
                A = [(y * b - p * m) / v + f, (h * m - x * b) / v + l];
            g(n.edge, s, _, A), c.edge = d(s, t, null, A), n.edge = d(t, _, null, A), w(e), w(n);
          } else c.edge = d(e.site, c.site);
        }
      }

      function L(t, e) {
        var n = t.site,
            r = n[0],
            i = n[1],
            a = i - e;
        if (!a) return r;
        var o = t.P;
        if (!o) return -1 / 0;
        var u = (n = o.site)[0],
            c = n[1],
            s = c - e;
        if (!s) return u;
        var f = u - r,
            l = 1 / a - 1 / s,
            d = f / s;
        return l ? (-d + Math.sqrt(d * d - 2 * l * (f * f / (-2 * s) - c + s / 2 + i - a / 2))) / l + r : (r + u) / 2;
      }

      function E(t, e) {
        var n = t.N;
        if (n) return L(n, e);
        var r = t.site;
        return r[1] === e ? r[0] : 1 / 0;
      }

      var O,
          k,
          V,
          G,
          R = 1e-6,
          I = 1e-12;

      function N(t, e) {
        return e[1] - t[1] || e[0] - t[0];
      }

      function D(t, e) {
        var n,
            r,
            i,
            a = t.sort(N).pop();

        for (G = [], k = new Array(t.length), O = new l(), V = new l();;) {
          if (i = b, a && (!i || a[1] < i.y || a[1] === i.y && a[0] < i.x)) a[0] === n && a[1] === r || (M(a), n = a[0], r = a[1]), a = t.pop();else {
            if (!i) break;
            C(i.arc);
          }
        }

        if (function () {
          for (var t, e, n, r, i = 0, a = k.length; i < a; ++i) {
            if ((t = k[i]) && (r = (e = t.halfedges).length)) {
              var o = new Array(r),
                  u = new Array(r);

              for (n = 0; n < r; ++n) {
                o[n] = n, u[n] = x(t, G[e[n]]);
              }

              for (o.sort(function (t, e) {
                return u[e] - u[t];
              }), n = 0; n < r; ++n) {
                u[n] = e[o[n]];
              }

              for (n = 0; n < r; ++n) {
                e[n] = u[n];
              }
            }
          }
        }(), e) {
          var o = +e[0][0],
              u = +e[0][1],
              c = +e[1][0],
              s = +e[1][1];
          !function (t, e, n, r) {
            for (var i, a = G.length; a--;) {
              _(i = G[a], t, e, n, r) && p(i, t, e, n, r) && (Math.abs(i[0][0] - i[1][0]) > R || Math.abs(i[0][1] - i[1][1]) > R) || delete G[a];
            }
          }(o, u, c, s), function (t, e, n, r) {
            var i,
                a,
                o,
                u,
                c,
                s,
                f,
                l,
                d,
                g,
                p,
                _,
                x = k.length,
                b = !0;

            for (i = 0; i < x; ++i) {
              if (a = k[i]) {
                for (o = a.site, u = (c = a.halfedges).length; u--;) {
                  G[c[u]] || c.splice(u, 1);
                }

                for (u = 0, s = c.length; u < s;) {
                  p = (g = v(a, G[c[u]]))[0], _ = g[1], l = (f = y(a, G[c[++u % s]]))[0], d = f[1], (Math.abs(p - l) > R || Math.abs(_ - d) > R) && (c.splice(u, 0, G.push(h(o, g, Math.abs(p - t) < R && r - _ > R ? [t, Math.abs(l - t) < R ? d : r] : Math.abs(_ - r) < R && n - p > R ? [Math.abs(d - r) < R ? l : n, r] : Math.abs(p - n) < R && _ - e > R ? [n, Math.abs(l - n) < R ? d : e] : Math.abs(_ - e) < R && p - t > R ? [Math.abs(d - e) < R ? l : t, e] : null)) - 1), ++s);
                }

                s && (b = !1);
              }
            }

            if (b) {
              var m,
                  w,
                  S,
                  A = 1 / 0;

              for (i = 0, b = null; i < x; ++i) {
                (a = k[i]) && (S = (m = (o = a.site)[0] - t) * m + (w = o[1] - e) * w) < A && (A = S, b = a);
              }

              if (b) {
                var T = [t, e],
                    P = [t, r],
                    C = [n, r],
                    M = [n, e];
                b.halfedges.push(G.push(h(o = b.site, T, P)) - 1, G.push(h(o, P, C)) - 1, G.push(h(o, C, M)) - 1, G.push(h(o, M, T)) - 1);
              }
            }

            for (i = 0; i < x; ++i) {
              (a = k[i]) && (a.halfedges.length || delete k[i]);
            }
          }(o, u, c, s);
        }

        this.edges = G, this.cells = k, O = V = G = k = null;
      }

      D.prototype = {
        constructor: D,
        polygons: function polygons() {
          var t = this.edges;
          return this.cells.map(function (e) {
            var n = e.halfedges.map(function (n) {
              return y(e, t[n]);
            });
            return n.data = e.site.data, n;
          });
        },
        triangles: function triangles() {
          var t = [],
              e = this.edges;
          return this.cells.forEach(function (n, r) {
            if (a = (i = n.halfedges).length) for (var i, a, o, u, c, s, f = n.site, l = -1, d = e[i[a - 1]], h = d.left === f ? d.right : d.left; ++l < a;) {
              o = h, h = (d = e[i[l]]).left === f ? d.right : d.left, o && h && r < o.index && r < h.index && (c = o, s = h, ((u = f)[0] - s[0]) * (c[1] - u[1]) - (u[0] - c[0]) * (s[1] - u[1]) < 0) && t.push([f.data, o.data, h.data]);
            }
          }), t;
        },
        links: function links() {
          return this.edges.filter(function (t) {
            return t.right;
          }).map(function (t) {
            return {
              source: t.left.data,
              target: t.right.data
            };
          });
        },
        find: function find(t, e, n) {
          for (var r, i, a = this, o = a._found || 0, u = a.cells.length; !(i = a.cells[o]);) {
            if (++o >= u) return null;
          }

          var c = t - i.site[0],
              s = e - i.site[1],
              f = c * c + s * s;

          do {
            i = a.cells[r = o], o = null, i.halfedges.forEach(function (n) {
              var r = a.edges[n],
                  u = r.left;

              if (u !== i.site && u || (u = r.right)) {
                var c = t - u[0],
                    s = e - u[1],
                    l = c * c + s * s;
                l < f && (f = l, o = u.index);
              }
            });
          } while (null !== o);

          return a._found = r, null == n || f <= n * n ? i.site : null;
        }
      };

      var F = function F() {
        var t = i,
            e = a,
            n = null;

        function o(r) {
          return new D(r.map(function (n, i) {
            var a = [Math.round(t(n, i, r) / R) * R, Math.round(e(n, i, r) / R) * R];
            return a.index = i, a.data = n, a;
          }), n);
        }

        return o.polygons = function (t) {
          return o(t).polygons();
        }, o.links = function (t) {
          return o(t).links();
        }, o.triangles = function (t) {
          return o(t).triangles();
        }, o.x = function (e) {
          return arguments.length ? (t = "function" == typeof e ? e : r(+e), o) : t;
        }, o.y = function (t) {
          return arguments.length ? (e = "function" == typeof t ? t : r(+t), o) : e;
        }, o.extent = function (t) {
          return arguments.length ? (n = null == t ? null : [[+t[0][0], +t[0][1]], [+t[1][0], +t[1][1]]], o) : n && [[n[0][0], n[0][1]], [n[1][0], n[1][1]]];
        }, o.size = function (t) {
          return arguments.length ? (n = null == t ? null : [[0, 0], [+t[0], +t[1]]], o) : n && [n[1][0] - n[0][0], n[1][1] - n[0][1]];
        }, o;
      };

      n.d(e, "a", function () {
        return F;
      });
    }, function (t, e, n) {
      "use strict";

      var r = function r(t, e) {
        var n;

        function r() {
          var r,
              i,
              a = n.length,
              o = 0,
              u = 0;

          for (r = 0; r < a; ++r) {
            o += (i = n[r]).x, u += i.y;
          }

          for (o = o / a - t, u = u / a - e, r = 0; r < a; ++r) {
            (i = n[r]).x -= o, i.y -= u;
          }
        }

        return null == t && (t = 0), null == e && (e = 0), r.initialize = function (t) {
          n = t;
        }, r.x = function (e) {
          return arguments.length ? (t = +e, r) : t;
        }, r.y = function (t) {
          return arguments.length ? (e = +t, r) : e;
        }, r;
      },
          i = function i(t) {
        return function () {
          return t;
        };
      },
          a = function a() {
        return 1e-6 * (Math.random() - .5);
      },
          o = n(13);

      function u(t) {
        return t.x + t.vx;
      }

      function c(t) {
        return t.y + t.vy;
      }

      var s = function s(t) {
        var e,
            n,
            r = 1,
            s = 1;

        function f() {
          for (var t, i, f, d, h, g, p, _ = e.length, x = 0; x < s; ++x) {
            for (i = Object(o.a)(e, u, c).visitAfter(l), t = 0; t < _; ++t) {
              f = e[t], g = n[f.index], p = g * g, d = f.x + f.vx, h = f.y + f.vy, i.visit(y);
            }
          }

          function y(t, e, n, i, o) {
            var u = t.data,
                c = t.r,
                s = g + c;
            if (!u) return e > d + s || i < d - s || n > h + s || o < h - s;

            if (u.index > f.index) {
              var l = d - u.x - u.vx,
                  _ = h - u.y - u.vy,
                  x = l * l + _ * _;

              x < s * s && (0 === l && (x += (l = a()) * l), 0 === _ && (x += (_ = a()) * _), x = (s - (x = Math.sqrt(x))) / x * r, f.vx += (l *= x) * (s = (c *= c) / (p + c)), f.vy += (_ *= x) * s, u.vx -= l * (s = 1 - s), u.vy -= _ * s);
            }
          }
        }

        function l(t) {
          if (t.data) return t.r = n[t.data.index];

          for (var e = t.r = 0; e < 4; ++e) {
            t[e] && t[e].r > t.r && (t.r = t[e].r);
          }
        }

        function d() {
          if (e) {
            var r,
                i,
                a = e.length;

            for (n = new Array(a), r = 0; r < a; ++r) {
              i = e[r], n[i.index] = +t(i, r, e);
            }
          }
        }

        return "function" != typeof t && (t = i(null == t ? 1 : +t)), f.initialize = function (t) {
          e = t, d();
        }, f.iterations = function (t) {
          return arguments.length ? (s = +t, f) : s;
        }, f.strength = function (t) {
          return arguments.length ? (r = +t, f) : r;
        }, f.radius = function (e) {
          return arguments.length ? (t = "function" == typeof e ? e : i(+e), d(), f) : t;
        }, f;
      },
          f = n(8);

      function l(t) {
        return t.index;
      }

      function d(t, e) {
        var n = t.get(e);
        if (!n) throw new Error("missing: " + e);
        return n;
      }

      var h = function h(t) {
        var e,
            n,
            r,
            o,
            u,
            c = l,
            s = function s(t) {
          return 1 / Math.min(o[t.source.index], o[t.target.index]);
        },
            h = i(30),
            g = 1;

        function p(r) {
          for (var i = 0, o = t.length; i < g; ++i) {
            for (var c, s, f, l, d, h, p, _ = 0; _ < o; ++_) {
              s = (c = t[_]).source, l = (f = c.target).x + f.vx - s.x - s.vx || a(), d = f.y + f.vy - s.y - s.vy || a(), l *= h = ((h = Math.sqrt(l * l + d * d)) - n[_]) / h * r * e[_], d *= h, f.vx -= l * (p = u[_]), f.vy -= d * p, s.vx += l * (p = 1 - p), s.vy += d * p;
            }
          }
        }

        function _() {
          if (r) {
            var i,
                a,
                s = r.length,
                l = t.length,
                h = Object(f.c)(r, c);

            for (i = 0, o = new Array(s); i < l; ++i) {
              (a = t[i]).index = i, "object" != typeof a.source && (a.source = d(h, a.source)), "object" != typeof a.target && (a.target = d(h, a.target)), o[a.source.index] = (o[a.source.index] || 0) + 1, o[a.target.index] = (o[a.target.index] || 0) + 1;
            }

            for (i = 0, u = new Array(l); i < l; ++i) {
              a = t[i], u[i] = o[a.source.index] / (o[a.source.index] + o[a.target.index]);
            }

            e = new Array(l), x(), n = new Array(l), y();
          }
        }

        function x() {
          if (r) for (var n = 0, i = t.length; n < i; ++n) {
            e[n] = +s(t[n], n, t);
          }
        }

        function y() {
          if (r) for (var e = 0, i = t.length; e < i; ++e) {
            n[e] = +h(t[e], e, t);
          }
        }

        return null == t && (t = []), p.initialize = function (t) {
          r = t, _();
        }, p.links = function (e) {
          return arguments.length ? (t = e, _(), p) : t;
        }, p.id = function (t) {
          return arguments.length ? (c = t, p) : c;
        }, p.iterations = function (t) {
          return arguments.length ? (g = +t, p) : g;
        }, p.strength = function (t) {
          return arguments.length ? (s = "function" == typeof t ? t : i(+t), x(), p) : s;
        }, p.distance = function (t) {
          return arguments.length ? (h = "function" == typeof t ? t : i(+t), y(), p) : h;
        }, p;
      },
          g = n(7),
          p = n(9);

      function _(t) {
        return t.x;
      }

      function x(t) {
        return t.y;
      }

      var y = 10,
          v = Math.PI * (3 - Math.sqrt(5)),
          b = function b(t) {
        var e,
            n = 1,
            r = .001,
            i = 1 - Math.pow(r, 1 / 300),
            a = 0,
            o = .6,
            u = Object(f.c)(),
            c = Object(p.d)(l),
            s = Object(g.a)("tick", "end");

        function l() {
          d(), s.call("tick", e), n < r && (c.stop(), s.call("end", e));
        }

        function d() {
          var e,
              r,
              c = t.length;

          for (n += (a - n) * i, u.each(function (t) {
            t(n);
          }), e = 0; e < c; ++e) {
            null == (r = t[e]).fx ? r.x += r.vx *= o : (r.x = r.fx, r.vx = 0), null == r.fy ? r.y += r.vy *= o : (r.y = r.fy, r.vy = 0);
          }
        }

        function h() {
          for (var e, n = 0, r = t.length; n < r; ++n) {
            if ((e = t[n]).index = n, isNaN(e.x) || isNaN(e.y)) {
              var i = y * Math.sqrt(n),
                  a = n * v;
              e.x = i * Math.cos(a), e.y = i * Math.sin(a);
            }

            (isNaN(e.vx) || isNaN(e.vy)) && (e.vx = e.vy = 0);
          }
        }

        function _(e) {
          return e.initialize && e.initialize(t), e;
        }

        return null == t && (t = []), h(), e = {
          tick: d,
          restart: function restart() {
            return c.restart(l), e;
          },
          stop: function stop() {
            return c.stop(), e;
          },
          nodes: function nodes(n) {
            return arguments.length ? (t = n, h(), u.each(_), e) : t;
          },
          alpha: function alpha(t) {
            return arguments.length ? (n = +t, e) : n;
          },
          alphaMin: function alphaMin(t) {
            return arguments.length ? (r = +t, e) : r;
          },
          alphaDecay: function alphaDecay(t) {
            return arguments.length ? (i = +t, e) : +i;
          },
          alphaTarget: function alphaTarget(t) {
            return arguments.length ? (a = +t, e) : a;
          },
          velocityDecay: function velocityDecay(t) {
            return arguments.length ? (o = 1 - t, e) : 1 - o;
          },
          force: function force(t, n) {
            return arguments.length > 1 ? (null == n ? u.remove(t) : u.set(t, _(n)), e) : u.get(t);
          },
          find: function find(e, n, r) {
            var i,
                a,
                o,
                u,
                c,
                s = 0,
                f = t.length;

            for (null == r ? r = 1 / 0 : r *= r, s = 0; s < f; ++s) {
              (o = (i = e - (u = t[s]).x) * i + (a = n - u.y) * a) < r && (c = u, r = o);
            }

            return c;
          },
          on: function on(t, n) {
            return arguments.length > 1 ? (s.on(t, n), e) : s.on(t);
          }
        };
      },
          m = function m() {
        var t,
            e,
            n,
            r,
            u = i(-30),
            c = 1,
            s = 1 / 0,
            f = .81;

        function l(r) {
          var i,
              a = t.length,
              u = Object(o.a)(t, _, x).visitAfter(h);

          for (n = r, i = 0; i < a; ++i) {
            e = t[i], u.visit(g);
          }
        }

        function d() {
          if (t) {
            var e,
                n,
                i = t.length;

            for (r = new Array(i), e = 0; e < i; ++e) {
              n = t[e], r[n.index] = +u(n, e, t);
            }
          }
        }

        function h(t) {
          var e,
              n,
              i,
              a,
              o,
              u = 0,
              c = 0;

          if (t.length) {
            for (i = a = o = 0; o < 4; ++o) {
              (e = t[o]) && (n = Math.abs(e.value)) && (u += e.value, c += n, i += n * e.x, a += n * e.y);
            }

            t.x = i / c, t.y = a / c;
          } else {
            (e = t).x = e.data.x, e.y = e.data.y;

            do {
              u += r[e.data.index];
            } while (e = e.next);
          }

          t.value = u;
        }

        function g(t, i, o, u) {
          if (!t.value) return !0;
          var l = t.x - e.x,
              d = t.y - e.y,
              h = u - i,
              g = l * l + d * d;
          if (h * h / f < g) return g < s && (0 === l && (g += (l = a()) * l), 0 === d && (g += (d = a()) * d), g < c && (g = Math.sqrt(c * g)), e.vx += l * t.value * n / g, e.vy += d * t.value * n / g), !0;

          if (!(t.length || g >= s)) {
            (t.data !== e || t.next) && (0 === l && (g += (l = a()) * l), 0 === d && (g += (d = a()) * d), g < c && (g = Math.sqrt(c * g)));

            do {
              t.data !== e && (h = r[t.data.index] * n / g, e.vx += l * h, e.vy += d * h);
            } while (t = t.next);
          }
        }

        return l.initialize = function (e) {
          t = e, d();
        }, l.strength = function (t) {
          return arguments.length ? (u = "function" == typeof t ? t : i(+t), d(), l) : u;
        }, l.distanceMin = function (t) {
          return arguments.length ? (c = t * t, l) : Math.sqrt(c);
        }, l.distanceMax = function (t) {
          return arguments.length ? (s = t * t, l) : Math.sqrt(s);
        }, l.theta = function (t) {
          return arguments.length ? (f = t * t, l) : Math.sqrt(f);
        }, l;
      },
          w = function w(t, e, n) {
        var r,
            a,
            o,
            u = i(.1);

        function c(t) {
          for (var i = 0, u = r.length; i < u; ++i) {
            var c = r[i],
                s = c.x - e || 1e-6,
                f = c.y - n || 1e-6,
                l = Math.sqrt(s * s + f * f),
                d = (o[i] - l) * a[i] * t / l;
            c.vx += s * d, c.vy += f * d;
          }
        }

        function s() {
          if (r) {
            var e,
                n = r.length;

            for (a = new Array(n), o = new Array(n), e = 0; e < n; ++e) {
              o[e] = +t(r[e], e, r), a[e] = isNaN(o[e]) ? 0 : +u(r[e], e, r);
            }
          }
        }

        return "function" != typeof t && (t = i(+t)), null == e && (e = 0), null == n && (n = 0), c.initialize = function (t) {
          r = t, s();
        }, c.strength = function (t) {
          return arguments.length ? (u = "function" == typeof t ? t : i(+t), s(), c) : u;
        }, c.radius = function (e) {
          return arguments.length ? (t = "function" == typeof e ? e : i(+e), s(), c) : t;
        }, c.x = function (t) {
          return arguments.length ? (e = +t, c) : e;
        }, c.y = function (t) {
          return arguments.length ? (n = +t, c) : n;
        }, c;
      },
          S = function S(t) {
        var e,
            n,
            r,
            a = i(.1);

        function o(t) {
          for (var i, a = 0, o = e.length; a < o; ++a) {
            (i = e[a]).vx += (r[a] - i.x) * n[a] * t;
          }
        }

        function u() {
          if (e) {
            var i,
                o = e.length;

            for (n = new Array(o), r = new Array(o), i = 0; i < o; ++i) {
              n[i] = isNaN(r[i] = +t(e[i], i, e)) ? 0 : +a(e[i], i, e);
            }
          }
        }

        return "function" != typeof t && (t = i(null == t ? 0 : +t)), o.initialize = function (t) {
          e = t, u();
        }, o.strength = function (t) {
          return arguments.length ? (a = "function" == typeof t ? t : i(+t), u(), o) : a;
        }, o.x = function (e) {
          return arguments.length ? (t = "function" == typeof e ? e : i(+e), u(), o) : t;
        }, o;
      },
          A = function A(t) {
        var e,
            n,
            r,
            a = i(.1);

        function o(t) {
          for (var i, a = 0, o = e.length; a < o; ++a) {
            (i = e[a]).vy += (r[a] - i.y) * n[a] * t;
          }
        }

        function u() {
          if (e) {
            var i,
                o = e.length;

            for (n = new Array(o), r = new Array(o), i = 0; i < o; ++i) {
              n[i] = isNaN(r[i] = +t(e[i], i, e)) ? 0 : +a(e[i], i, e);
            }
          }
        }

        return "function" != typeof t && (t = i(null == t ? 0 : +t)), o.initialize = function (t) {
          e = t, u();
        }, o.strength = function (t) {
          return arguments.length ? (a = "function" == typeof t ? t : i(+t), u(), o) : a;
        }, o.y = function (e) {
          return arguments.length ? (t = "function" == typeof e ? e : i(+e), u(), o) : t;
        }, o;
      };

      n.d(e, "a", function () {
        return r;
      }), n.d(e, "b", function () {
        return s;
      }), n.d(e, "c", function () {
        return h;
      }), n.d(e, "d", function () {
        return m;
      }), n.d(e, "e", function () {
        return w;
      }), n.d(e, "f", function () {
        return b;
      }), n.d(e, "g", function () {
        return S;
      }), n.d(e, "h", function () {
        return A;
      });
    }, function (t, e, n) {
      "use strict";

      function r(t, e) {
        return t.parent === e.parent ? 1 : 2;
      }

      function i(t, e) {
        return t + e.x;
      }

      function a(t, e) {
        return Math.max(t, e.y);
      }

      var o = function o() {
        var t = r,
            e = 1,
            n = 1,
            o = !1;

        function u(r) {
          var u,
              c = 0;
          r.eachAfter(function (e) {
            var n = e.children;
            n ? (e.x = function (t) {
              return t.reduce(i, 0) / t.length;
            }(n), e.y = function (t) {
              return 1 + t.reduce(a, 0);
            }(n)) : (e.x = u ? c += t(e, u) : 0, e.y = 0, u = e);
          });

          var s = function (t) {
            for (var e; e = t.children;) {
              t = e[0];
            }

            return t;
          }(r),
              f = function (t) {
            for (var e; e = t.children;) {
              t = e[e.length - 1];
            }

            return t;
          }(r),
              l = s.x - t(s, f) / 2,
              d = f.x + t(f, s) / 2;

          return r.eachAfter(o ? function (t) {
            t.x = (t.x - r.x) * e, t.y = (r.y - t.y) * n;
          } : function (t) {
            t.x = (t.x - l) / (d - l) * e, t.y = (1 - (r.y ? t.y / r.y : 1)) * n;
          });
        }

        return u.separation = function (e) {
          return arguments.length ? (t = e, u) : t;
        }, u.size = function (t) {
          return arguments.length ? (o = !1, e = +t[0], n = +t[1], u) : o ? null : [e, n];
        }, u.nodeSize = function (t) {
          return arguments.length ? (o = !0, e = +t[0], n = +t[1], u) : o ? [e, n] : null;
        }, u;
      };

      function u(t) {
        var e = 0,
            n = t.children,
            r = n && n.length;
        if (r) for (; --r >= 0;) {
          e += n[r].value;
        } else e = 1;
        t.value = e;
      }

      function c(t, e) {
        var n,
            r,
            i,
            a,
            o,
            u = new d(t),
            c = +t.value && (u.value = t.value),
            f = [u];

        for (null == e && (e = s); n = f.pop();) {
          if (c && (n.value = +n.data.value), (i = e(n.data)) && (o = i.length)) for (n.children = new Array(o), a = o - 1; a >= 0; --a) {
            f.push(r = n.children[a] = new d(i[a])), r.parent = n, r.depth = n.depth + 1;
          }
        }

        return u.eachBefore(l);
      }

      function s(t) {
        return t.children;
      }

      function f(t) {
        t.data = t.data.data;
      }

      function l(t) {
        var e = 0;

        do {
          t.height = e;
        } while ((t = t.parent) && t.height < ++e);
      }

      function d(t) {
        this.data = t, this.depth = this.height = 0, this.parent = null;
      }

      d.prototype = c.prototype = {
        constructor: d,
        count: function count() {
          return this.eachAfter(u);
        },
        each: function each(t) {
          var e,
              n,
              r,
              i,
              a = this,
              o = [a];

          do {
            for (e = o.reverse(), o = []; a = e.pop();) {
              if (t(a), n = a.children) for (r = 0, i = n.length; r < i; ++r) {
                o.push(n[r]);
              }
            }
          } while (o.length);

          return this;
        },
        eachAfter: function eachAfter(t) {
          for (var e, n, r, i = this, a = [i], o = []; i = a.pop();) {
            if (o.push(i), e = i.children) for (n = 0, r = e.length; n < r; ++n) {
              a.push(e[n]);
            }
          }

          for (; i = o.pop();) {
            t(i);
          }

          return this;
        },
        eachBefore: function eachBefore(t) {
          for (var e, n, r = this, i = [r]; r = i.pop();) {
            if (t(r), e = r.children) for (n = e.length - 1; n >= 0; --n) {
              i.push(e[n]);
            }
          }

          return this;
        },
        sum: function sum(t) {
          return this.eachAfter(function (e) {
            for (var n = +t(e.data) || 0, r = e.children, i = r && r.length; --i >= 0;) {
              n += r[i].value;
            }

            e.value = n;
          });
        },
        sort: function sort(t) {
          return this.eachBefore(function (e) {
            e.children && e.children.sort(t);
          });
        },
        path: function path(t) {
          for (var e = this, n = function (t, e) {
            if (t === e) return t;
            var n = t.ancestors(),
                r = e.ancestors(),
                i = null;

            for (t = n.pop(), e = r.pop(); t === e;) {
              i = t, t = n.pop(), e = r.pop();
            }

            return i;
          }(e, t), r = [e]; e !== n;) {
            e = e.parent, r.push(e);
          }

          for (var i = r.length; t !== n;) {
            r.splice(i, 0, t), t = t.parent;
          }

          return r;
        },
        ancestors: function ancestors() {
          for (var t = this, e = [t]; t = t.parent;) {
            e.push(t);
          }

          return e;
        },
        descendants: function descendants() {
          var t = [];
          return this.each(function (e) {
            t.push(e);
          }), t;
        },
        leaves: function leaves() {
          var t = [];
          return this.eachBefore(function (e) {
            e.children || t.push(e);
          }), t;
        },
        links: function links() {
          var t = this,
              e = [];
          return t.each(function (n) {
            n !== t && e.push({
              source: n.parent,
              target: n
            });
          }), e;
        },
        copy: function copy() {
          return c(this).eachBefore(f);
        }
      };
      var h = Array.prototype.slice;

      var g = function g(t) {
        for (var e, n, r = 0, i = (t = function (t) {
          for (var e, n, r = t.length; r;) {
            n = Math.random() * r-- | 0, e = t[r], t[r] = t[n], t[n] = e;
          }

          return t;
        }(h.call(t))).length, a = []; r < i;) {
          e = t[r], n && x(n, e) ? ++r : (n = v(a = p(a, e)), r = 0);
        }

        return n;
      };

      function p(t, e) {
        var n, r;
        if (y(e, t)) return [e];

        for (n = 0; n < t.length; ++n) {
          if (_(e, t[n]) && y(b(t[n], e), t)) return [t[n], e];
        }

        for (n = 0; n < t.length - 1; ++n) {
          for (r = n + 1; r < t.length; ++r) {
            if (_(b(t[n], t[r]), e) && _(b(t[n], e), t[r]) && _(b(t[r], e), t[n]) && y(m(t[n], t[r], e), t)) return [t[n], t[r], e];
          }
        }

        throw new Error();
      }

      function _(t, e) {
        var n = t.r - e.r,
            r = e.x - t.x,
            i = e.y - t.y;
        return n < 0 || n * n < r * r + i * i;
      }

      function x(t, e) {
        var n = t.r - e.r + 1e-6,
            r = e.x - t.x,
            i = e.y - t.y;
        return n > 0 && n * n > r * r + i * i;
      }

      function y(t, e) {
        for (var n = 0; n < e.length; ++n) {
          if (!x(t, e[n])) return !1;
        }

        return !0;
      }

      function v(t) {
        switch (t.length) {
          case 1:
            return {
              x: (e = t[0]).x,
              y: e.y,
              r: e.r
            };

          case 2:
            return b(t[0], t[1]);

          case 3:
            return m(t[0], t[1], t[2]);
        }

        var e;
      }

      function b(t, e) {
        var n = t.x,
            r = t.y,
            i = t.r,
            a = e.x,
            o = e.y,
            u = e.r,
            c = a - n,
            s = o - r,
            f = u - i,
            l = Math.sqrt(c * c + s * s);
        return {
          x: (n + a + c / l * f) / 2,
          y: (r + o + s / l * f) / 2,
          r: (l + i + u) / 2
        };
      }

      function m(t, e, n) {
        var r = t.x,
            i = t.y,
            a = t.r,
            o = e.x,
            u = e.y,
            c = e.r,
            s = n.x,
            f = n.y,
            l = n.r,
            d = r - o,
            h = r - s,
            g = i - u,
            p = i - f,
            _ = c - a,
            x = l - a,
            y = r * r + i * i - a * a,
            v = y - o * o - u * u + c * c,
            b = y - s * s - f * f + l * l,
            m = h * g - d * p,
            w = (g * b - p * v) / (2 * m) - r,
            S = (p * _ - g * x) / m,
            A = (h * v - d * b) / (2 * m) - i,
            T = (d * x - h * _) / m,
            P = S * S + T * T - 1,
            C = 2 * (a + w * S + A * T),
            M = w * w + A * A - a * a,
            L = -(P ? (C + Math.sqrt(C * C - 4 * P * M)) / (2 * P) : M / C);

        return {
          x: r + w + S * L,
          y: i + A + T * L,
          r: L
        };
      }

      function w(t, e, n) {
        var r = t.x,
            i = t.y,
            a = e.r + n.r,
            o = t.r + n.r,
            u = e.x - r,
            c = e.y - i,
            s = u * u + c * c;

        if (s) {
          var f = .5 + ((o *= o) - (a *= a)) / (2 * s),
              l = Math.sqrt(Math.max(0, 2 * a * (o + s) - (o -= s) * o - a * a)) / (2 * s);
          n.x = r + f * u + l * c, n.y = i + f * c - l * u;
        } else n.x = r + o, n.y = i;
      }

      function S(t, e) {
        var n = e.x - t.x,
            r = e.y - t.y,
            i = t.r + e.r;
        return i * i - 1e-6 > n * n + r * r;
      }

      function A(t) {
        var e = t._,
            n = t.next._,
            r = e.r + n.r,
            i = (e.x * n.r + n.x * e.r) / r,
            a = (e.y * n.r + n.y * e.r) / r;
        return i * i + a * a;
      }

      function T(t) {
        this._ = t, this.next = null, this.previous = null;
      }

      function P(t) {
        if (!(i = t.length)) return 0;
        var e, n, r, i, a, o, u, c, s, f, l;
        if ((e = t[0]).x = 0, e.y = 0, !(i > 1)) return e.r;
        if (n = t[1], e.x = -n.r, n.x = e.r, n.y = 0, !(i > 2)) return e.r + n.r;
        w(n, e, r = t[2]), e = new T(e), n = new T(n), r = new T(r), e.next = r.previous = n, n.next = e.previous = r, r.next = n.previous = e;

        t: for (u = 3; u < i; ++u) {
          w(e._, n._, r = t[u]), r = new T(r), c = n.next, s = e.previous, f = n._.r, l = e._.r;

          do {
            if (f <= l) {
              if (S(c._, r._)) {
                n = c, e.next = n, n.previous = e, --u;
                continue t;
              }

              f += c._.r, c = c.next;
            } else {
              if (S(s._, r._)) {
                (e = s).next = n, n.previous = e, --u;
                continue t;
              }

              l += s._.r, s = s.previous;
            }
          } while (c !== s.next);

          for (r.previous = e, r.next = n, e.next = n.previous = n = r, a = A(e); (r = r.next) !== n;) {
            (o = A(r)) < a && (e = r, a = o);
          }

          n = e.next;
        }

        for (e = [n._], r = n; (r = r.next) !== n;) {
          e.push(r._);
        }

        for (r = g(e), u = 0; u < i; ++u) {
          (e = t[u]).x -= r.x, e.y -= r.y;
        }

        return r.r;
      }

      var C = function C(t) {
        return P(t), t;
      };

      function M(t) {
        if ("function" != typeof t) throw new Error();
        return t;
      }

      function L() {
        return 0;
      }

      var E = function E(t) {
        return function () {
          return t;
        };
      };

      function O(t) {
        return Math.sqrt(t.value);
      }

      var k = function k() {
        var t = null,
            e = 1,
            n = 1,
            r = L;

        function i(i) {
          return i.x = e / 2, i.y = n / 2, t ? i.eachBefore(V(t)).eachAfter(G(r, .5)).eachBefore(R(1)) : i.eachBefore(V(O)).eachAfter(G(L, 1)).eachAfter(G(r, i.r / Math.min(e, n))).eachBefore(R(Math.min(e, n) / (2 * i.r))), i;
        }

        return i.radius = function (e) {
          return arguments.length ? (t = null == (n = e) ? null : M(n), i) : t;
          var n;
        }, i.size = function (t) {
          return arguments.length ? (e = +t[0], n = +t[1], i) : [e, n];
        }, i.padding = function (t) {
          return arguments.length ? (r = "function" == typeof t ? t : E(+t), i) : r;
        }, i;
      };

      function V(t) {
        return function (e) {
          e.children || (e.r = Math.max(0, +t(e) || 0));
        };
      }

      function G(t, e) {
        return function (n) {
          if (r = n.children) {
            var r,
                i,
                a,
                o = r.length,
                u = t(n) * e || 0;
            if (u) for (i = 0; i < o; ++i) {
              r[i].r += u;
            }
            if (a = P(r), u) for (i = 0; i < o; ++i) {
              r[i].r -= u;
            }
            n.r = a + u;
          }
        };
      }

      function R(t) {
        return function (e) {
          var n = e.parent;
          e.r *= t, n && (e.x = n.x + t * e.x, e.y = n.y + t * e.y);
        };
      }

      var I = function I(t) {
        t.x0 = Math.round(t.x0), t.y0 = Math.round(t.y0), t.x1 = Math.round(t.x1), t.y1 = Math.round(t.y1);
      },
          N = function N(t, e, n, r, i) {
        for (var a, o = t.children, u = -1, c = o.length, s = t.value && (r - e) / t.value; ++u < c;) {
          (a = o[u]).y0 = n, a.y1 = i, a.x0 = e, a.x1 = e += a.value * s;
        }
      },
          D = function D() {
        var t = 1,
            e = 1,
            n = 0,
            r = !1;

        function i(i) {
          var a = i.height + 1;
          return i.x0 = i.y0 = n, i.x1 = t, i.y1 = e / a, i.eachBefore(function (t, e) {
            return function (r) {
              r.children && N(r, r.x0, t * (r.depth + 1) / e, r.x1, t * (r.depth + 2) / e);
              var i = r.x0,
                  a = r.y0,
                  o = r.x1 - n,
                  u = r.y1 - n;
              o < i && (i = o = (i + o) / 2), u < a && (a = u = (a + u) / 2), r.x0 = i, r.y0 = a, r.x1 = o, r.y1 = u;
            };
          }(e, a)), r && i.eachBefore(I), i;
        }

        return i.round = function (t) {
          return arguments.length ? (r = !!t, i) : r;
        }, i.size = function (n) {
          return arguments.length ? (t = +n[0], e = +n[1], i) : [t, e];
        }, i.padding = function (t) {
          return arguments.length ? (n = +t, i) : n;
        }, i;
      },
          F = "$",
          z = {
        depth: -1
      },
          j = {};

      function X(t) {
        return t.id;
      }

      function B(t) {
        return t.parentId;
      }

      var H = function H() {
        var t = X,
            e = B;

        function n(n) {
          var r,
              i,
              a,
              o,
              u,
              c,
              s,
              f = n.length,
              h = new Array(f),
              g = {};

          for (i = 0; i < f; ++i) {
            r = n[i], u = h[i] = new d(r), null != (c = t(r, i, n)) && (c += "") && (g[s = F + (u.id = c)] = s in g ? j : u);
          }

          for (i = 0; i < f; ++i) {
            if (u = h[i], null != (c = e(n[i], i, n)) && (c += "")) {
              if (!(o = g[F + c])) throw new Error("missing: " + c);
              if (o === j) throw new Error("ambiguous: " + c);
              o.children ? o.children.push(u) : o.children = [u], u.parent = o;
            } else {
              if (a) throw new Error("multiple roots");
              a = u;
            }
          }

          if (!a) throw new Error("no root");
          if (a.parent = z, a.eachBefore(function (t) {
            t.depth = t.parent.depth + 1, --f;
          }).eachBefore(l), a.parent = null, f > 0) throw new Error("cycle");
          return a;
        }

        return n.id = function (e) {
          return arguments.length ? (t = M(e), n) : t;
        }, n.parentId = function (t) {
          return arguments.length ? (e = M(t), n) : e;
        }, n;
      };

      function Y(t, e) {
        return t.parent === e.parent ? 1 : 2;
      }

      function U(t) {
        var e = t.children;
        return e ? e[0] : t.t;
      }

      function q(t) {
        var e = t.children;
        return e ? e[e.length - 1] : t.t;
      }

      function W(t, e, n) {
        var r = n / (e.i - t.i);
        e.c -= r, e.s += n, t.c += r, e.z += n, e.m += n;
      }

      function Q(t, e, n) {
        return t.a.parent === e.parent ? t.a : n;
      }

      function Z(t, e) {
        this._ = t, this.parent = null, this.children = null, this.A = null, this.a = this, this.z = 0, this.m = 0, this.c = 0, this.s = 0, this.t = null, this.i = e;
      }

      Z.prototype = Object.create(d.prototype);

      var $ = function $() {
        var t = Y,
            e = 1,
            n = 1,
            r = null;

        function i(i) {
          var c = function (t) {
            for (var e, n, r, i, a, o = new Z(t, 0), u = [o]; e = u.pop();) {
              if (r = e._.children) for (e.children = new Array(a = r.length), i = a - 1; i >= 0; --i) {
                u.push(n = e.children[i] = new Z(r[i], i)), n.parent = e;
              }
            }

            return (o.parent = new Z(null, 0)).children = [o], o;
          }(i);

          if (c.eachAfter(a), c.parent.m = -c.z, c.eachBefore(o), r) i.eachBefore(u);else {
            var s = i,
                f = i,
                l = i;
            i.eachBefore(function (t) {
              t.x < s.x && (s = t), t.x > f.x && (f = t), t.depth > l.depth && (l = t);
            });
            var d = s === f ? 1 : t(s, f) / 2,
                h = d - s.x,
                g = e / (f.x + d + h),
                p = n / (l.depth || 1);
            i.eachBefore(function (t) {
              t.x = (t.x + h) * g, t.y = t.depth * p;
            });
          }
          return i;
        }

        function a(e) {
          var n = e.children,
              r = e.parent.children,
              i = e.i ? r[e.i - 1] : null;

          if (n) {
            !function (t) {
              for (var e, n = 0, r = 0, i = t.children, a = i.length; --a >= 0;) {
                (e = i[a]).z += n, e.m += n, n += e.s + (r += e.c);
              }
            }(e);
            var a = (n[0].z + n[n.length - 1].z) / 2;
            i ? (e.z = i.z + t(e._, i._), e.m = e.z - a) : e.z = a;
          } else i && (e.z = i.z + t(e._, i._));

          e.parent.A = function (e, n, r) {
            if (n) {
              for (var i, a = e, o = e, u = n, c = a.parent.children[0], s = a.m, f = o.m, l = u.m, d = c.m; u = q(u), a = U(a), u && a;) {
                c = U(c), (o = q(o)).a = e, (i = u.z + l - a.z - s + t(u._, a._)) > 0 && (W(Q(u, e, r), e, i), s += i, f += i), l += u.m, s += a.m, d += c.m, f += o.m;
              }

              u && !q(o) && (o.t = u, o.m += l - f), a && !U(c) && (c.t = a, c.m += s - d, r = e);
            }

            return r;
          }(e, i, e.parent.A || r[0]);
        }

        function o(t) {
          t._.x = t.z + t.parent.m, t.m += t.parent.m;
        }

        function u(t) {
          t.x *= e, t.y = t.depth * n;
        }

        return i.separation = function (e) {
          return arguments.length ? (t = e, i) : t;
        }, i.size = function (t) {
          return arguments.length ? (r = !1, e = +t[0], n = +t[1], i) : r ? null : [e, n];
        }, i.nodeSize = function (t) {
          return arguments.length ? (r = !0, e = +t[0], n = +t[1], i) : r ? [e, n] : null;
        }, i;
      },
          K = function K(t, e, n, r, i) {
        for (var a, o = t.children, u = -1, c = o.length, s = t.value && (i - n) / t.value; ++u < c;) {
          (a = o[u]).x0 = e, a.x1 = r, a.y0 = n, a.y1 = n += a.value * s;
        }
      },
          J = (1 + Math.sqrt(5)) / 2;

      function tt(t, e, n, r, i, a) {
        for (var o, u, c, s, f, l, d, h, g, p, _, x = [], y = e.children, v = 0, b = 0, m = y.length, w = e.value; v < m;) {
          c = i - n, s = a - r;

          do {
            f = y[b++].value;
          } while (!f && b < m);

          for (l = d = f, _ = f * f * (p = Math.max(s / c, c / s) / (w * t)), g = Math.max(d / _, _ / l); b < m; ++b) {
            if (f += u = y[b].value, u < l && (l = u), u > d && (d = u), _ = f * f * p, (h = Math.max(d / _, _ / l)) > g) {
              f -= u;
              break;
            }

            g = h;
          }

          x.push(o = {
            value: f,
            dice: c < s,
            children: y.slice(v, b)
          }), o.dice ? N(o, n, r, i, w ? r += s * f / w : a) : K(o, n, r, w ? n += c * f / w : i, a), w -= f, v = b;
        }

        return x;
      }

      var et = function t(e) {
        function n(t, n, r, i, a) {
          tt(e, t, n, r, i, a);
        }

        return n.ratio = function (e) {
          return t((e = +e) > 1 ? e : 1);
        }, n;
      }(J),
          nt = function nt() {
        var t = et,
            e = !1,
            n = 1,
            r = 1,
            i = [0],
            a = L,
            o = L,
            u = L,
            c = L,
            s = L;

        function f(t) {
          return t.x0 = t.y0 = 0, t.x1 = n, t.y1 = r, t.eachBefore(l), i = [0], e && t.eachBefore(I), t;
        }

        function l(e) {
          var n = i[e.depth],
              r = e.x0 + n,
              f = e.y0 + n,
              l = e.x1 - n,
              d = e.y1 - n;
          l < r && (r = l = (r + l) / 2), d < f && (f = d = (f + d) / 2), e.x0 = r, e.y0 = f, e.x1 = l, e.y1 = d, e.children && (n = i[e.depth + 1] = a(e) / 2, r += s(e) - n, f += o(e) - n, l -= u(e) - n, d -= c(e) - n, l < r && (r = l = (r + l) / 2), d < f && (f = d = (f + d) / 2), t(e, r, f, l, d));
        }

        return f.round = function (t) {
          return arguments.length ? (e = !!t, f) : e;
        }, f.size = function (t) {
          return arguments.length ? (n = +t[0], r = +t[1], f) : [n, r];
        }, f.tile = function (e) {
          return arguments.length ? (t = M(e), f) : t;
        }, f.padding = function (t) {
          return arguments.length ? f.paddingInner(t).paddingOuter(t) : f.paddingInner();
        }, f.paddingInner = function (t) {
          return arguments.length ? (a = "function" == typeof t ? t : E(+t), f) : a;
        }, f.paddingOuter = function (t) {
          return arguments.length ? f.paddingTop(t).paddingRight(t).paddingBottom(t).paddingLeft(t) : f.paddingTop();
        }, f.paddingTop = function (t) {
          return arguments.length ? (o = "function" == typeof t ? t : E(+t), f) : o;
        }, f.paddingRight = function (t) {
          return arguments.length ? (u = "function" == typeof t ? t : E(+t), f) : u;
        }, f.paddingBottom = function (t) {
          return arguments.length ? (c = "function" == typeof t ? t : E(+t), f) : c;
        }, f.paddingLeft = function (t) {
          return arguments.length ? (s = "function" == typeof t ? t : E(+t), f) : s;
        }, f;
      },
          rt = function rt(t, e, n, r, i) {
        var a,
            o,
            u = t.children,
            c = u.length,
            s = new Array(c + 1);

        for (s[0] = o = a = 0; a < c; ++a) {
          s[a + 1] = o += u[a].value;
        }

        !function t(e, n, r, i, a, o, c) {
          if (e >= n - 1) {
            var f = u[e];
            return f.x0 = i, f.y0 = a, f.x1 = o, void (f.y1 = c);
          }

          var l = s[e],
              d = r / 2 + l,
              h = e + 1,
              g = n - 1;

          for (; h < g;) {
            var p = h + g >>> 1;
            s[p] < d ? h = p + 1 : g = p;
          }

          d - s[h - 1] < s[h] - d && e + 1 < h && --h;

          var _ = s[h] - l,
              x = r - _;

          if (o - i > c - a) {
            var y = (i * x + o * _) / r;
            t(e, h, _, i, a, y, c), t(h, n, x, y, a, o, c);
          } else {
            var v = (a * x + c * _) / r;
            t(e, h, _, i, a, o, v), t(h, n, x, i, v, o, c);
          }
        }(0, c, t.value, e, n, r, i);
      },
          it = function it(t, e, n, r, i) {
        (1 & t.depth ? K : N)(t, e, n, r, i);
      },
          at = function t(e) {
        function n(t, n, r, i, a) {
          if ((o = t._squarify) && o.ratio === e) for (var o, u, c, s, f, l = -1, d = o.length, h = t.value; ++l < d;) {
            for (c = (u = o[l]).children, s = u.value = 0, f = c.length; s < f; ++s) {
              u.value += c[s].value;
            }

            u.dice ? N(u, n, r, i, r += (a - r) * u.value / h) : K(u, n, r, n += (i - n) * u.value / h, a), h -= u.value;
          } else t._squarify = o = tt(e, t, n, r, i, a), o.ratio = e;
        }

        return n.ratio = function (e) {
          return t((e = +e) > 1 ? e : 1);
        }, n;
      }(J);

      n.d(e, "a", function () {
        return o;
      }), n.d(e, "b", function () {
        return c;
      }), n.d(e, "c", function () {
        return k;
      }), n.d(e, "e", function () {
        return C;
      }), n.d(e, "d", function () {
        return g;
      }), n.d(e, "f", function () {
        return D;
      }), n.d(e, "g", function () {
        return H;
      }), n.d(e, "h", function () {
        return $;
      }), n.d(e, "i", function () {
        return nt;
      }), n.d(e, "j", function () {
        return rt;
      }), n.d(e, "k", function () {
        return N;
      }), n.d(e, "m", function () {
        return K;
      }), n.d(e, "n", function () {
        return it;
      }), n.d(e, "o", function () {
        return et;
      }), n.d(e, "l", function () {
        return at;
      });
    }, function (t, e, n) {
      "use strict";

      var r = function r(t) {
        for (var e = t.length / 6 | 0, n = new Array(e), r = 0; r < e;) {
          n[r] = "#" + t.slice(6 * r, 6 * ++r);
        }

        return n;
      },
          i = r("1f77b4ff7f0e2ca02cd627289467bd8c564be377c27f7f7fbcbd2217becf"),
          a = r("7fc97fbeaed4fdc086ffff99386cb0f0027fbf5b17666666"),
          o = r("1b9e77d95f027570b3e7298a66a61ee6ab02a6761d666666"),
          u = r("a6cee31f78b4b2df8a33a02cfb9a99e31a1cfdbf6fff7f00cab2d66a3d9affff99b15928"),
          c = r("fbb4aeb3cde3ccebc5decbe4fed9a6ffffcce5d8bdfddaecf2f2f2"),
          s = r("b3e2cdfdcdaccbd5e8f4cae4e6f5c9fff2aef1e2cccccccc"),
          f = r("e41a1c377eb84daf4a984ea3ff7f00ffff33a65628f781bf999999"),
          l = r("66c2a5fc8d628da0cbe78ac3a6d854ffd92fe5c494b3b3b3"),
          d = r("8dd3c7ffffb3bebadafb807280b1d3fdb462b3de69fccde5d9d9d9bc80bdccebc5ffed6f"),
          h = n(3),
          g = function g(t) {
        return Object(h.p)(t[t.length - 1]);
      },
          p = new Array(3).concat("d8b365f5f5f55ab4ac", "a6611adfc27d80cdc1018571", "a6611adfc27df5f5f580cdc1018571", "8c510ad8b365f6e8c3c7eae55ab4ac01665e", "8c510ad8b365f6e8c3f5f5f5c7eae55ab4ac01665e", "8c510abf812ddfc27df6e8c3c7eae580cdc135978f01665e", "8c510abf812ddfc27df6e8c3f5f5f5c7eae580cdc135978f01665e", "5430058c510abf812ddfc27df6e8c3c7eae580cdc135978f01665e003c30", "5430058c510abf812ddfc27df6e8c3f5f5f5c7eae580cdc135978f01665e003c30").map(r),
          _ = g(p),
          x = new Array(3).concat("af8dc3f7f7f77fbf7b", "7b3294c2a5cfa6dba0008837", "7b3294c2a5cff7f7f7a6dba0008837", "762a83af8dc3e7d4e8d9f0d37fbf7b1b7837", "762a83af8dc3e7d4e8f7f7f7d9f0d37fbf7b1b7837", "762a839970abc2a5cfe7d4e8d9f0d3a6dba05aae611b7837", "762a839970abc2a5cfe7d4e8f7f7f7d9f0d3a6dba05aae611b7837", "40004b762a839970abc2a5cfe7d4e8d9f0d3a6dba05aae611b783700441b", "40004b762a839970abc2a5cfe7d4e8f7f7f7d9f0d3a6dba05aae611b783700441b").map(r),
          y = g(x),
          v = new Array(3).concat("e9a3c9f7f7f7a1d76a", "d01c8bf1b6dab8e1864dac26", "d01c8bf1b6daf7f7f7b8e1864dac26", "c51b7de9a3c9fde0efe6f5d0a1d76a4d9221", "c51b7de9a3c9fde0eff7f7f7e6f5d0a1d76a4d9221", "c51b7dde77aef1b6dafde0efe6f5d0b8e1867fbc414d9221", "c51b7dde77aef1b6dafde0eff7f7f7e6f5d0b8e1867fbc414d9221", "8e0152c51b7dde77aef1b6dafde0efe6f5d0b8e1867fbc414d9221276419", "8e0152c51b7dde77aef1b6dafde0eff7f7f7e6f5d0b8e1867fbc414d9221276419").map(r),
          b = g(v),
          m = new Array(3).concat("998ec3f7f7f7f1a340", "5e3c99b2abd2fdb863e66101", "5e3c99b2abd2f7f7f7fdb863e66101", "542788998ec3d8daebfee0b6f1a340b35806", "542788998ec3d8daebf7f7f7fee0b6f1a340b35806", "5427888073acb2abd2d8daebfee0b6fdb863e08214b35806", "5427888073acb2abd2d8daebf7f7f7fee0b6fdb863e08214b35806", "2d004b5427888073acb2abd2d8daebfee0b6fdb863e08214b358067f3b08", "2d004b5427888073acb2abd2d8daebf7f7f7fee0b6fdb863e08214b358067f3b08").map(r),
          w = g(m),
          S = new Array(3).concat("ef8a62f7f7f767a9cf", "ca0020f4a58292c5de0571b0", "ca0020f4a582f7f7f792c5de0571b0", "b2182bef8a62fddbc7d1e5f067a9cf2166ac", "b2182bef8a62fddbc7f7f7f7d1e5f067a9cf2166ac", "b2182bd6604df4a582fddbc7d1e5f092c5de4393c32166ac", "b2182bd6604df4a582fddbc7f7f7f7d1e5f092c5de4393c32166ac", "67001fb2182bd6604df4a582fddbc7d1e5f092c5de4393c32166ac053061", "67001fb2182bd6604df4a582fddbc7f7f7f7d1e5f092c5de4393c32166ac053061").map(r),
          A = g(S),
          T = new Array(3).concat("ef8a62ffffff999999", "ca0020f4a582bababa404040", "ca0020f4a582ffffffbababa404040", "b2182bef8a62fddbc7e0e0e09999994d4d4d", "b2182bef8a62fddbc7ffffffe0e0e09999994d4d4d", "b2182bd6604df4a582fddbc7e0e0e0bababa8787874d4d4d", "b2182bd6604df4a582fddbc7ffffffe0e0e0bababa8787874d4d4d", "67001fb2182bd6604df4a582fddbc7e0e0e0bababa8787874d4d4d1a1a1a", "67001fb2182bd6604df4a582fddbc7ffffffe0e0e0bababa8787874d4d4d1a1a1a").map(r),
          P = g(T),
          C = new Array(3).concat("fc8d59ffffbf91bfdb", "d7191cfdae61abd9e92c7bb6", "d7191cfdae61ffffbfabd9e92c7bb6", "d73027fc8d59fee090e0f3f891bfdb4575b4", "d73027fc8d59fee090ffffbfe0f3f891bfdb4575b4", "d73027f46d43fdae61fee090e0f3f8abd9e974add14575b4", "d73027f46d43fdae61fee090ffffbfe0f3f8abd9e974add14575b4", "a50026d73027f46d43fdae61fee090e0f3f8abd9e974add14575b4313695", "a50026d73027f46d43fdae61fee090ffffbfe0f3f8abd9e974add14575b4313695").map(r),
          M = g(C),
          L = new Array(3).concat("fc8d59ffffbf91cf60", "d7191cfdae61a6d96a1a9641", "d7191cfdae61ffffbfa6d96a1a9641", "d73027fc8d59fee08bd9ef8b91cf601a9850", "d73027fc8d59fee08bffffbfd9ef8b91cf601a9850", "d73027f46d43fdae61fee08bd9ef8ba6d96a66bd631a9850", "d73027f46d43fdae61fee08bffffbfd9ef8ba6d96a66bd631a9850", "a50026d73027f46d43fdae61fee08bd9ef8ba6d96a66bd631a9850006837", "a50026d73027f46d43fdae61fee08bffffbfd9ef8ba6d96a66bd631a9850006837").map(r),
          E = g(L),
          O = new Array(3).concat("fc8d59ffffbf99d594", "d7191cfdae61abdda42b83ba", "d7191cfdae61ffffbfabdda42b83ba", "d53e4ffc8d59fee08be6f59899d5943288bd", "d53e4ffc8d59fee08bffffbfe6f59899d5943288bd", "d53e4ff46d43fdae61fee08be6f598abdda466c2a53288bd", "d53e4ff46d43fdae61fee08bffffbfe6f598abdda466c2a53288bd", "9e0142d53e4ff46d43fdae61fee08be6f598abdda466c2a53288bd5e4fa2", "9e0142d53e4ff46d43fdae61fee08bffffbfe6f598abdda466c2a53288bd5e4fa2").map(r),
          k = g(O),
          V = new Array(3).concat("e5f5f999d8c92ca25f", "edf8fbb2e2e266c2a4238b45", "edf8fbb2e2e266c2a42ca25f006d2c", "edf8fbccece699d8c966c2a42ca25f006d2c", "edf8fbccece699d8c966c2a441ae76238b45005824", "f7fcfde5f5f9ccece699d8c966c2a441ae76238b45005824", "f7fcfde5f5f9ccece699d8c966c2a441ae76238b45006d2c00441b").map(r),
          G = g(V),
          R = new Array(3).concat("e0ecf49ebcda8856a7", "edf8fbb3cde38c96c688419d", "edf8fbb3cde38c96c68856a7810f7c", "edf8fbbfd3e69ebcda8c96c68856a7810f7c", "edf8fbbfd3e69ebcda8c96c68c6bb188419d6e016b", "f7fcfde0ecf4bfd3e69ebcda8c96c68c6bb188419d6e016b", "f7fcfde0ecf4bfd3e69ebcda8c96c68c6bb188419d810f7c4d004b").map(r),
          I = g(R),
          N = new Array(3).concat("e0f3dba8ddb543a2ca", "f0f9e8bae4bc7bccc42b8cbe", "f0f9e8bae4bc7bccc443a2ca0868ac", "f0f9e8ccebc5a8ddb57bccc443a2ca0868ac", "f0f9e8ccebc5a8ddb57bccc44eb3d32b8cbe08589e", "f7fcf0e0f3dbccebc5a8ddb57bccc44eb3d32b8cbe08589e", "f7fcf0e0f3dbccebc5a8ddb57bccc44eb3d32b8cbe0868ac084081").map(r),
          D = g(N),
          F = new Array(3).concat("fee8c8fdbb84e34a33", "fef0d9fdcc8afc8d59d7301f", "fef0d9fdcc8afc8d59e34a33b30000", "fef0d9fdd49efdbb84fc8d59e34a33b30000", "fef0d9fdd49efdbb84fc8d59ef6548d7301f990000", "fff7ecfee8c8fdd49efdbb84fc8d59ef6548d7301f990000", "fff7ecfee8c8fdd49efdbb84fc8d59ef6548d7301fb300007f0000").map(r),
          z = g(F),
          j = new Array(3).concat("ece2f0a6bddb1c9099", "f6eff7bdc9e167a9cf02818a", "f6eff7bdc9e167a9cf1c9099016c59", "f6eff7d0d1e6a6bddb67a9cf1c9099016c59", "f6eff7d0d1e6a6bddb67a9cf3690c002818a016450", "fff7fbece2f0d0d1e6a6bddb67a9cf3690c002818a016450", "fff7fbece2f0d0d1e6a6bddb67a9cf3690c002818a016c59014636").map(r),
          X = g(j),
          B = new Array(3).concat("ece7f2a6bddb2b8cbe", "f1eef6bdc9e174a9cf0570b0", "f1eef6bdc9e174a9cf2b8cbe045a8d", "f1eef6d0d1e6a6bddb74a9cf2b8cbe045a8d", "f1eef6d0d1e6a6bddb74a9cf3690c00570b0034e7b", "fff7fbece7f2d0d1e6a6bddb74a9cf3690c00570b0034e7b", "fff7fbece7f2d0d1e6a6bddb74a9cf3690c00570b0045a8d023858").map(r),
          H = g(B),
          Y = new Array(3).concat("e7e1efc994c7dd1c77", "f1eef6d7b5d8df65b0ce1256", "f1eef6d7b5d8df65b0dd1c77980043", "f1eef6d4b9dac994c7df65b0dd1c77980043", "f1eef6d4b9dac994c7df65b0e7298ace125691003f", "f7f4f9e7e1efd4b9dac994c7df65b0e7298ace125691003f", "f7f4f9e7e1efd4b9dac994c7df65b0e7298ace125698004367001f").map(r),
          U = g(Y),
          q = new Array(3).concat("fde0ddfa9fb5c51b8a", "feebe2fbb4b9f768a1ae017e", "feebe2fbb4b9f768a1c51b8a7a0177", "feebe2fcc5c0fa9fb5f768a1c51b8a7a0177", "feebe2fcc5c0fa9fb5f768a1dd3497ae017e7a0177", "fff7f3fde0ddfcc5c0fa9fb5f768a1dd3497ae017e7a0177", "fff7f3fde0ddfcc5c0fa9fb5f768a1dd3497ae017e7a017749006a").map(r),
          W = g(q),
          Q = new Array(3).concat("edf8b17fcdbb2c7fb8", "ffffcca1dab441b6c4225ea8", "ffffcca1dab441b6c42c7fb8253494", "ffffccc7e9b47fcdbb41b6c42c7fb8253494", "ffffccc7e9b47fcdbb41b6c41d91c0225ea80c2c84", "ffffd9edf8b1c7e9b47fcdbb41b6c41d91c0225ea80c2c84", "ffffd9edf8b1c7e9b47fcdbb41b6c41d91c0225ea8253494081d58").map(r),
          Z = g(Q),
          $ = new Array(3).concat("f7fcb9addd8e31a354", "ffffccc2e69978c679238443", "ffffccc2e69978c67931a354006837", "ffffccd9f0a3addd8e78c67931a354006837", "ffffccd9f0a3addd8e78c67941ab5d238443005a32", "ffffe5f7fcb9d9f0a3addd8e78c67941ab5d238443005a32", "ffffe5f7fcb9d9f0a3addd8e78c67941ab5d238443006837004529").map(r),
          K = g($),
          J = new Array(3).concat("fff7bcfec44fd95f0e", "ffffd4fed98efe9929cc4c02", "ffffd4fed98efe9929d95f0e993404", "ffffd4fee391fec44ffe9929d95f0e993404", "ffffd4fee391fec44ffe9929ec7014cc4c028c2d04", "ffffe5fff7bcfee391fec44ffe9929ec7014cc4c028c2d04", "ffffe5fff7bcfee391fec44ffe9929ec7014cc4c02993404662506").map(r),
          tt = g(J),
          et = new Array(3).concat("ffeda0feb24cf03b20", "ffffb2fecc5cfd8d3ce31a1c", "ffffb2fecc5cfd8d3cf03b20bd0026", "ffffb2fed976feb24cfd8d3cf03b20bd0026", "ffffb2fed976feb24cfd8d3cfc4e2ae31a1cb10026", "ffffccffeda0fed976feb24cfd8d3cfc4e2ae31a1cb10026", "ffffccffeda0fed976feb24cfd8d3cfc4e2ae31a1cbd0026800026").map(r),
          nt = g(et),
          rt = new Array(3).concat("deebf79ecae13182bd", "eff3ffbdd7e76baed62171b5", "eff3ffbdd7e76baed63182bd08519c", "eff3ffc6dbef9ecae16baed63182bd08519c", "eff3ffc6dbef9ecae16baed64292c62171b5084594", "f7fbffdeebf7c6dbef9ecae16baed64292c62171b5084594", "f7fbffdeebf7c6dbef9ecae16baed64292c62171b508519c08306b").map(r),
          it = g(rt),
          at = new Array(3).concat("e5f5e0a1d99b31a354", "edf8e9bae4b374c476238b45", "edf8e9bae4b374c47631a354006d2c", "edf8e9c7e9c0a1d99b74c47631a354006d2c", "edf8e9c7e9c0a1d99b74c47641ab5d238b45005a32", "f7fcf5e5f5e0c7e9c0a1d99b74c47641ab5d238b45005a32", "f7fcf5e5f5e0c7e9c0a1d99b74c47641ab5d238b45006d2c00441b").map(r),
          ot = g(at),
          ut = new Array(3).concat("f0f0f0bdbdbd636363", "f7f7f7cccccc969696525252", "f7f7f7cccccc969696636363252525", "f7f7f7d9d9d9bdbdbd969696636363252525", "f7f7f7d9d9d9bdbdbd969696737373525252252525", "fffffff0f0f0d9d9d9bdbdbd969696737373525252252525", "fffffff0f0f0d9d9d9bdbdbd969696737373525252252525000000").map(r),
          ct = g(ut),
          st = new Array(3).concat("efedf5bcbddc756bb1", "f2f0f7cbc9e29e9ac86a51a3", "f2f0f7cbc9e29e9ac8756bb154278f", "f2f0f7dadaebbcbddc9e9ac8756bb154278f", "f2f0f7dadaebbcbddc9e9ac8807dba6a51a34a1486", "fcfbfdefedf5dadaebbcbddc9e9ac8807dba6a51a34a1486", "fcfbfdefedf5dadaebbcbddc9e9ac8807dba6a51a354278f3f007d").map(r),
          ft = g(st),
          lt = new Array(3).concat("fee0d2fc9272de2d26", "fee5d9fcae91fb6a4acb181d", "fee5d9fcae91fb6a4ade2d26a50f15", "fee5d9fcbba1fc9272fb6a4ade2d26a50f15", "fee5d9fcbba1fc9272fb6a4aef3b2ccb181d99000d", "fff5f0fee0d2fcbba1fc9272fb6a4aef3b2ccb181d99000d", "fff5f0fee0d2fcbba1fc9272fb6a4aef3b2ccb181da50f1567000d").map(r),
          dt = g(lt),
          ht = new Array(3).concat("fee6cefdae6be6550d", "feeddefdbe85fd8d3cd94701", "feeddefdbe85fd8d3ce6550da63603", "feeddefdd0a2fdae6bfd8d3ce6550da63603", "feeddefdd0a2fdae6bfd8d3cf16913d948018c2d04", "fff5ebfee6cefdd0a2fdae6bfd8d3cf16913d948018c2d04", "fff5ebfee6cefdd0a2fdae6bfd8d3cf16913d94801a636037f2704").map(r),
          gt = g(ht),
          pt = n(4),
          _t = Object(h.f)(Object(pt.b)(300, .5, 0), Object(pt.b)(-240, .5, 1)),
          xt = Object(h.f)(Object(pt.b)(-100, .75, .35), Object(pt.b)(80, 1.5, .8)),
          yt = Object(h.f)(Object(pt.b)(260, .75, .35), Object(pt.b)(80, 1.5, .8)),
          vt = Object(pt.b)(),
          bt = function bt(t) {
        (t < 0 || t > 1) && (t -= Math.floor(t));
        var e = Math.abs(t - .5);
        return vt.h = 360 * t - 100, vt.s = 1.5 - 1.5 * e, vt.l = .8 - .9 * e, vt + "";
      },
          mt = Object(pt.f)(),
          wt = Math.PI / 3,
          St = 2 * Math.PI / 3,
          At = function At(t) {
        var e;
        return t = (.5 - t) * Math.PI, mt.r = 255 * (e = Math.sin(t)) * e, mt.g = 255 * (e = Math.sin(t + wt)) * e, mt.b = 255 * (e = Math.sin(t + St)) * e, mt + "";
      };

      function Tt(t) {
        var e = t.length;
        return function (n) {
          return t[Math.max(0, Math.min(e - 1, Math.floor(n * e)))];
        };
      }

      var Pt = Tt(r("44015444025645045745055946075a46085c460a5d460b5e470d60470e6147106347116447136548146748166848176948186a481a6c481b6d481c6e481d6f481f70482071482173482374482475482576482677482878482979472a7a472c7a472d7b472e7c472f7d46307e46327e46337f463480453581453781453882443983443a83443b84433d84433e85423f854240864241864142874144874045884046883f47883f48893e49893e4a893e4c8a3d4d8a3d4e8a3c4f8a3c508b3b518b3b528b3a538b3a548c39558c39568c38588c38598c375a8c375b8d365c8d365d8d355e8d355f8d34608d34618d33628d33638d32648e32658e31668e31678e31688e30698e306a8e2f6b8e2f6c8e2e6d8e2e6e8e2e6f8e2d708e2d718e2c718e2c728e2c738e2b748e2b758e2a768e2a778e2a788e29798e297a8e297b8e287c8e287d8e277e8e277f8e27808e26818e26828e26828e25838e25848e25858e24868e24878e23888e23898e238a8d228b8d228c8d228d8d218e8d218f8d21908d21918c20928c20928c20938c1f948c1f958b1f968b1f978b1f988b1f998a1f9a8a1e9b8a1e9c891e9d891f9e891f9f881fa0881fa1881fa1871fa28720a38620a48621a58521a68522a78522a88423a98324aa8325ab8225ac8226ad8127ad8128ae8029af7f2ab07f2cb17e2db27d2eb37c2fb47c31b57b32b67a34b67935b77937b87838b9773aba763bbb753dbc743fbc7340bd7242be7144bf7046c06f48c16e4ac16d4cc26c4ec36b50c46a52c56954c56856c66758c7655ac8645cc8635ec96260ca6063cb5f65cb5e67cc5c69cd5b6ccd5a6ece5870cf5773d05675d05477d1537ad1517cd2507fd34e81d34d84d44b86d54989d5488bd6468ed64590d74393d74195d84098d83e9bd93c9dd93ba0da39a2da37a5db36a8db34aadc32addc30b0dd2fb2dd2db5de2bb8de29bade28bddf26c0df25c2df23c5e021c8e020cae11fcde11dd0e11cd2e21bd5e21ad8e219dae319dde318dfe318e2e418e5e419e7e419eae51aece51befe51cf1e51df4e61ef6e620f8e621fbe723fde725")),
          Ct = Tt(r("00000401000501010601010802010902020b02020d03030f03031204041405041606051806051a07061c08071e0907200a08220b09240c09260d0a290e0b2b100b2d110c2f120d31130d34140e36150e38160f3b180f3d19103f1a10421c10441d11471e114920114b21114e22115024125325125527125829115a2a115c2c115f2d11612f116331116533106734106936106b38106c390f6e3b0f703d0f713f0f72400f74420f75440f764510774710784910784a10794c117a4e117b4f127b51127c52137c54137d56147d57157e59157e5a167e5c167f5d177f5f187f601880621980641a80651a80671b80681c816a1c816b1d816d1d816e1e81701f81721f817320817521817621817822817922827b23827c23827e24828025828125818326818426818627818827818928818b29818c29818e2a81902a81912b81932b80942c80962c80982d80992d809b2e7f9c2e7f9e2f7fa02f7fa1307ea3307ea5317ea6317da8327daa337dab337cad347cae347bb0357bb2357bb3367ab5367ab73779b83779ba3878bc3978bd3977bf3a77c03a76c23b75c43c75c53c74c73d73c83e73ca3e72cc3f71cd4071cf4070d0416fd2426fd3436ed5446dd6456cd8456cd9466bdb476adc4869de4968df4a68e04c67e24d66e34e65e44f64e55064e75263e85362e95462ea5661eb5760ec5860ed5a5fee5b5eef5d5ef05f5ef1605df2625df2645cf3655cf4675cf4695cf56b5cf66c5cf66e5cf7705cf7725cf8745cf8765cf9785df9795df97b5dfa7d5efa7f5efa815ffb835ffb8560fb8761fc8961fc8a62fc8c63fc8e64fc9065fd9266fd9467fd9668fd9869fd9a6afd9b6bfe9d6cfe9f6dfea16efea36ffea571fea772fea973feaa74feac76feae77feb078feb27afeb47bfeb67cfeb77efeb97ffebb81febd82febf84fec185fec287fec488fec68afec88cfeca8dfecc8ffecd90fecf92fed194fed395fed597fed799fed89afdda9cfddc9efddea0fde0a1fde2a3fde3a5fde5a7fde7a9fde9aafdebacfcecaefceeb0fcf0b2fcf2b4fcf4b6fcf6b8fcf7b9fcf9bbfcfbbdfcfdbf")),
          Mt = Tt(r("00000401000501010601010802010a02020c02020e03021004031204031405041706041907051b08051d09061f0a07220b07240c08260d08290e092b10092d110a30120a32140b34150b37160b39180c3c190c3e1b0c411c0c431e0c451f0c48210c4a230c4c240c4f260c51280b53290b552b0b572d0b592f0a5b310a5c320a5e340a5f3609613809623909633b09643d09653e0966400a67420a68440a68450a69470b6a490b6a4a0c6b4c0c6b4d0d6c4f0d6c510e6c520e6d540f6d550f6d57106e59106e5a116e5c126e5d126e5f136e61136e62146e64156e65156e67166e69166e6a176e6c186e6d186e6f196e71196e721a6e741a6e751b6e771c6d781c6d7a1d6d7c1d6d7d1e6d7f1e6c801f6c82206c84206b85216b87216b88226a8a226a8c23698d23698f24699025689225689326679526679727669827669a28659b29649d29649f2a63a02a63a22b62a32c61a52c60a62d60a82e5fa92e5eab2f5ead305dae305cb0315bb1325ab3325ab43359b63458b73557b93556ba3655bc3754bd3853bf3952c03a51c13a50c33b4fc43c4ec63d4dc73e4cc83f4bca404acb4149cc4248ce4347cf4446d04545d24644d34743d44842d54a41d74b3fd84c3ed94d3dda4e3cdb503bdd513ade5238df5337e05536e15635e25734e35933e45a31e55c30e65d2fe75e2ee8602de9612bea632aeb6429eb6628ec6726ed6925ee6a24ef6c23ef6e21f06f20f1711ff1731df2741cf3761bf37819f47918f57b17f57d15f67e14f68013f78212f78410f8850ff8870ef8890cf98b0bf98c0af98e09fa9008fa9207fa9407fb9606fb9706fb9906fb9b06fb9d07fc9f07fca108fca309fca50afca60cfca80dfcaa0ffcac11fcae12fcb014fcb216fcb418fbb61afbb81dfbba1ffbbc21fbbe23fac026fac228fac42afac62df9c72ff9c932f9cb35f8cd37f8cf3af7d13df7d340f6d543f6d746f5d949f5db4cf4dd4ff4df53f4e156f3e35af3e55df2e661f2e865f2ea69f1ec6df1ed71f1ef75f1f179f2f27df2f482f3f586f3f68af4f88ef5f992f6fa96f8fb9af9fc9dfafda1fcffa4")),
          Lt = Tt(r("0d088710078813078916078a19068c1b068d1d068e20068f2206902406912605912805922a05932c05942e05952f059631059733059735049837049938049a3a049a3c049b3e049c3f049c41049d43039e44039e46039f48039f4903a04b03a14c02a14e02a25002a25102a35302a35502a45601a45801a45901a55b01a55c01a65e01a66001a66100a76300a76400a76600a76700a86900a86a00a86c00a86e00a86f00a87100a87201a87401a87501a87701a87801a87a02a87b02a87d03a87e03a88004a88104a78305a78405a78606a68707a68808a68a09a58b0aa58d0ba58e0ca48f0da4910ea3920fa39410a29511a19613a19814a099159f9a169f9c179e9d189d9e199da01a9ca11b9ba21d9aa31e9aa51f99a62098a72197a82296aa2395ab2494ac2694ad2793ae2892b02991b12a90b22b8fb32c8eb42e8db52f8cb6308bb7318ab83289ba3388bb3488bc3587bd3786be3885bf3984c03a83c13b82c23c81c33d80c43e7fc5407ec6417dc7427cc8437bc9447aca457acb4679cc4778cc4977cd4a76ce4b75cf4c74d04d73d14e72d24f71d35171d45270d5536fd5546ed6556dd7566cd8576bd9586ada5a6ada5b69db5c68dc5d67dd5e66de5f65de6164df6263e06363e16462e26561e26660e3685fe4695ee56a5de56b5de66c5ce76e5be76f5ae87059e97158e97257ea7457eb7556eb7655ec7754ed7953ed7a52ee7b51ef7c51ef7e50f07f4ff0804ef1814df1834cf2844bf3854bf3874af48849f48948f58b47f58c46f68d45f68f44f79044f79143f79342f89441f89540f9973ff9983ef99a3efa9b3dfa9c3cfa9e3bfb9f3afba139fba238fca338fca537fca636fca835fca934fdab33fdac33fdae32fdaf31fdb130fdb22ffdb42ffdb52efeb72dfeb82cfeba2cfebb2bfebd2afebe2afec029fdc229fdc328fdc527fdc627fdc827fdca26fdcb26fccd25fcce25fcd025fcd225fbd324fbd524fbd724fad824fada24f9dc24f9dd25f8df25f8e125f7e225f7e425f6e626f6e826f5e926f5eb27f4ed27f3ee27f3f027f2f227f1f426f1f525f0f724f0f921"));
      n.d(e, "P", function () {
        return i;
      }), n.d(e, "K", function () {
        return a;
      }), n.d(e, "Q", function () {
        return o;
      }), n.d(e, "X", function () {
        return u;
      }), n.d(e, "Y", function () {
        return c;
      }), n.d(e, "Z", function () {
        return s;
      }), n.d(e, "Ma", function () {
        return f;
      }), n.d(e, "Na", function () {
        return l;
      }), n.d(e, "Oa", function () {
        return d;
      }), n.d(e, "b", function () {
        return _;
      }), n.d(e, "M", function () {
        return p;
      }), n.d(e, "n", function () {
        return y;
      }), n.d(e, "W", function () {
        return x;
      }), n.d(e, "o", function () {
        return b;
      }), n.d(e, "Aa", function () {
        return v;
      }), n.d(e, "s", function () {
        return w;
      }), n.d(e, "Da", function () {
        return m;
      }), n.d(e, "w", function () {
        return A;
      }), n.d(e, "Ga", function () {
        return S;
      }), n.d(e, "x", function () {
        return P;
      }), n.d(e, "Ha", function () {
        return T;
      }), n.d(e, "z", function () {
        return M;
      }), n.d(e, "Ja", function () {
        return C;
      }), n.d(e, "A", function () {
        return E;
      }), n.d(e, "Ka", function () {
        return L;
      }), n.d(e, "D", function () {
        return k;
      }), n.d(e, "Pa", function () {
        return O;
      }), n.d(e, "c", function () {
        return G;
      }), n.d(e, "N", function () {
        return V;
      }), n.d(e, "d", function () {
        return I;
      }), n.d(e, "O", function () {
        return R;
      }), n.d(e, "g", function () {
        return D;
      }), n.d(e, "R", function () {
        return N;
      }), n.d(e, "l", function () {
        return z;
      }), n.d(e, "U", function () {
        return F;
      }), n.d(e, "r", function () {
        return X;
      }), n.d(e, "Ca", function () {
        return j;
      }), n.d(e, "q", function () {
        return H;
      }), n.d(e, "Ba", function () {
        return B;
      }), n.d(e, "t", function () {
        return U;
      }), n.d(e, "Ea", function () {
        return Y;
      }), n.d(e, "y", function () {
        return W;
      }), n.d(e, "Ia", function () {
        return q;
      }), n.d(e, "H", function () {
        return Z;
      }), n.d(e, "Ra", function () {
        return Q;
      }), n.d(e, "G", function () {
        return K;
      }), n.d(e, "Qa", function () {
        return $;
      }), n.d(e, "I", function () {
        return tt;
      }), n.d(e, "Sa", function () {
        return J;
      }), n.d(e, "J", function () {
        return nt;
      }), n.d(e, "Ta", function () {
        return et;
      }), n.d(e, "a", function () {
        return it;
      }), n.d(e, "L", function () {
        return rt;
      }), n.d(e, "h", function () {
        return ot;
      }), n.d(e, "S", function () {
        return at;
      }), n.d(e, "i", function () {
        return ct;
      }), n.d(e, "T", function () {
        return ut;
      }), n.d(e, "u", function () {
        return ft;
      }), n.d(e, "Fa", function () {
        return st;
      }), n.d(e, "B", function () {
        return dt;
      }), n.d(e, "La", function () {
        return lt;
      }), n.d(e, "m", function () {
        return gt;
      }), n.d(e, "V", function () {
        return ht;
      }), n.d(e, "f", function () {
        return _t;
      }), n.d(e, "v", function () {
        return bt;
      }), n.d(e, "F", function () {
        return xt;
      }), n.d(e, "e", function () {
        return yt;
      }), n.d(e, "C", function () {
        return At;
      }), n.d(e, "E", function () {
        return Pt;
      }), n.d(e, "k", function () {
        return Ct;
      }), n.d(e, "j", function () {
        return Mt;
      }), n.d(e, "p", function () {
        return Lt;
      });
    }, function (t, e, n) {
      "use strict";

      var r = n(6),
          i = function i(t) {
        return function () {
          return t;
        };
      },
          a = Math.abs,
          o = Math.atan2,
          u = Math.cos,
          c = Math.max,
          s = Math.min,
          f = Math.sin,
          l = Math.sqrt,
          d = 1e-12,
          h = Math.PI,
          g = h / 2,
          p = 2 * h;

      function _(t) {
        return t >= 1 ? g : t <= -1 ? -g : Math.asin(t);
      }

      function x(t) {
        return t.innerRadius;
      }

      function y(t) {
        return t.outerRadius;
      }

      function v(t) {
        return t.startAngle;
      }

      function b(t) {
        return t.endAngle;
      }

      function m(t) {
        return t && t.padAngle;
      }

      function w(t, e, n, r, i, a, o) {
        var u = t - n,
            s = e - r,
            f = (o ? a : -a) / l(u * u + s * s),
            d = f * s,
            h = -f * u,
            g = t + d,
            p = e + h,
            _ = n + d,
            x = r + h,
            y = (g + _) / 2,
            v = (p + x) / 2,
            b = _ - g,
            m = x - p,
            w = b * b + m * m,
            S = i - a,
            A = g * x - _ * p,
            T = (m < 0 ? -1 : 1) * l(c(0, S * S * w - A * A)),
            P = (A * m - b * T) / w,
            C = (-A * b - m * T) / w,
            M = (A * m + b * T) / w,
            L = (-A * b + m * T) / w,
            E = P - y,
            O = C - v,
            k = M - y,
            V = L - v;

        return E * E + O * O > k * k + V * V && (P = M, C = L), {
          cx: P,
          cy: C,
          x01: -d,
          y01: -h,
          x11: P * (i / S - 1),
          y11: C * (i / S - 1)
        };
      }

      var S = function S() {
        var t = x,
            e = y,
            n = i(0),
            c = null,
            S = v,
            A = b,
            T = m,
            P = null;

        function C() {
          var i,
              x,
              y,
              v = +t.apply(this, arguments),
              b = +e.apply(this, arguments),
              m = S.apply(this, arguments) - g,
              C = A.apply(this, arguments) - g,
              M = a(C - m),
              L = C > m;
          if (P || (P = i = Object(r.a)()), b < v && (x = b, b = v, v = x), b > d) {
            if (M > p - d) P.moveTo(b * u(m), b * f(m)), P.arc(0, 0, b, m, C, !L), v > d && (P.moveTo(v * u(C), v * f(C)), P.arc(0, 0, v, C, m, L));else {
              var E,
                  O,
                  k = m,
                  V = C,
                  G = m,
                  R = C,
                  I = M,
                  N = M,
                  D = T.apply(this, arguments) / 2,
                  F = D > d && (c ? +c.apply(this, arguments) : l(v * v + b * b)),
                  z = s(a(b - v) / 2, +n.apply(this, arguments)),
                  j = z,
                  X = z;

              if (F > d) {
                var B = _(F / v * f(D)),
                    H = _(F / b * f(D));

                (I -= 2 * B) > d ? (G += B *= L ? 1 : -1, R -= B) : (I = 0, G = R = (m + C) / 2), (N -= 2 * H) > d ? (k += H *= L ? 1 : -1, V -= H) : (N = 0, k = V = (m + C) / 2);
              }

              var Y = b * u(k),
                  U = b * f(k),
                  q = v * u(R),
                  W = v * f(R);

              if (z > d) {
                var Q = b * u(V),
                    Z = b * f(V),
                    $ = v * u(G),
                    K = v * f(G);

                if (M < h) {
                  var J = I > d ? function (t, e, n, r, i, a, o, u) {
                    var c = n - t,
                        s = r - e,
                        f = o - i,
                        l = u - a,
                        d = (f * (e - a) - l * (t - i)) / (l * c - f * s);
                    return [t + d * c, e + d * s];
                  }(Y, U, $, K, Q, Z, q, W) : [q, W],
                      tt = Y - J[0],
                      et = U - J[1],
                      nt = Q - J[0],
                      rt = Z - J[1],
                      it = 1 / f(((y = (tt * nt + et * rt) / (l(tt * tt + et * et) * l(nt * nt + rt * rt))) > 1 ? 0 : y < -1 ? h : Math.acos(y)) / 2),
                      at = l(J[0] * J[0] + J[1] * J[1]);
                  j = s(z, (v - at) / (it - 1)), X = s(z, (b - at) / (it + 1));
                }
              }

              N > d ? X > d ? (E = w($, K, Y, U, b, X, L), O = w(Q, Z, q, W, b, X, L), P.moveTo(E.cx + E.x01, E.cy + E.y01), X < z ? P.arc(E.cx, E.cy, X, o(E.y01, E.x01), o(O.y01, O.x01), !L) : (P.arc(E.cx, E.cy, X, o(E.y01, E.x01), o(E.y11, E.x11), !L), P.arc(0, 0, b, o(E.cy + E.y11, E.cx + E.x11), o(O.cy + O.y11, O.cx + O.x11), !L), P.arc(O.cx, O.cy, X, o(O.y11, O.x11), o(O.y01, O.x01), !L))) : (P.moveTo(Y, U), P.arc(0, 0, b, k, V, !L)) : P.moveTo(Y, U), v > d && I > d ? j > d ? (E = w(q, W, Q, Z, v, -j, L), O = w(Y, U, $, K, v, -j, L), P.lineTo(E.cx + E.x01, E.cy + E.y01), j < z ? P.arc(E.cx, E.cy, j, o(E.y01, E.x01), o(O.y01, O.x01), !L) : (P.arc(E.cx, E.cy, j, o(E.y01, E.x01), o(E.y11, E.x11), !L), P.arc(0, 0, v, o(E.cy + E.y11, E.cx + E.x11), o(O.cy + O.y11, O.cx + O.x11), L), P.arc(O.cx, O.cy, j, o(O.y11, O.x11), o(O.y01, O.x01), !L))) : P.arc(0, 0, v, R, G, L) : P.lineTo(q, W);
            }
          } else P.moveTo(0, 0);
          if (P.closePath(), i) return P = null, i + "" || null;
        }

        return C.centroid = function () {
          var n = (+t.apply(this, arguments) + +e.apply(this, arguments)) / 2,
              r = (+S.apply(this, arguments) + +A.apply(this, arguments)) / 2 - h / 2;
          return [u(r) * n, f(r) * n];
        }, C.innerRadius = function (e) {
          return arguments.length ? (t = "function" == typeof e ? e : i(+e), C) : t;
        }, C.outerRadius = function (t) {
          return arguments.length ? (e = "function" == typeof t ? t : i(+t), C) : e;
        }, C.cornerRadius = function (t) {
          return arguments.length ? (n = "function" == typeof t ? t : i(+t), C) : n;
        }, C.padRadius = function (t) {
          return arguments.length ? (c = null == t ? null : "function" == typeof t ? t : i(+t), C) : c;
        }, C.startAngle = function (t) {
          return arguments.length ? (S = "function" == typeof t ? t : i(+t), C) : S;
        }, C.endAngle = function (t) {
          return arguments.length ? (A = "function" == typeof t ? t : i(+t), C) : A;
        }, C.padAngle = function (t) {
          return arguments.length ? (T = "function" == typeof t ? t : i(+t), C) : T;
        }, C.context = function (t) {
          return arguments.length ? (P = null == t ? null : t, C) : P;
        }, C;
      };

      function A(t) {
        this._context = t;
      }

      A.prototype = {
        areaStart: function areaStart() {
          this._line = 0;
        },
        areaEnd: function areaEnd() {
          this._line = NaN;
        },
        lineStart: function lineStart() {
          this._point = 0;
        },
        lineEnd: function lineEnd() {
          (this._line || 0 !== this._line && 1 === this._point) && this._context.closePath(), this._line = 1 - this._line;
        },
        point: function point(t, e) {
          switch (t = +t, e = +e, this._point) {
            case 0:
              this._point = 1, this._line ? this._context.lineTo(t, e) : this._context.moveTo(t, e);
              break;

            case 1:
              this._point = 2;

            default:
              this._context.lineTo(t, e);

          }
        }
      };

      var T = function T(t) {
        return new A(t);
      };

      function P(t) {
        return t[0];
      }

      function C(t) {
        return t[1];
      }

      var M = function M() {
        var t = P,
            e = C,
            n = i(!0),
            a = null,
            o = T,
            u = null;

        function c(i) {
          var c,
              s,
              f,
              l = i.length,
              d = !1;

          for (null == a && (u = o(f = Object(r.a)())), c = 0; c <= l; ++c) {
            !(c < l && n(s = i[c], c, i)) === d && ((d = !d) ? u.lineStart() : u.lineEnd()), d && u.point(+t(s, c, i), +e(s, c, i));
          }

          if (f) return u = null, f + "" || null;
        }

        return c.x = function (e) {
          return arguments.length ? (t = "function" == typeof e ? e : i(+e), c) : t;
        }, c.y = function (t) {
          return arguments.length ? (e = "function" == typeof t ? t : i(+t), c) : e;
        }, c.defined = function (t) {
          return arguments.length ? (n = "function" == typeof t ? t : i(!!t), c) : n;
        }, c.curve = function (t) {
          return arguments.length ? (o = t, null != a && (u = o(a)), c) : o;
        }, c.context = function (t) {
          return arguments.length ? (null == t ? a = u = null : u = o(a = t), c) : a;
        }, c;
      },
          L = function L() {
        var t = P,
            e = null,
            n = i(0),
            a = C,
            o = i(!0),
            u = null,
            c = T,
            s = null;

        function f(i) {
          var f,
              l,
              d,
              h,
              g,
              p = i.length,
              _ = !1,
              x = new Array(p),
              y = new Array(p);

          for (null == u && (s = c(g = Object(r.a)())), f = 0; f <= p; ++f) {
            if (!(f < p && o(h = i[f], f, i)) === _) if (_ = !_) l = f, s.areaStart(), s.lineStart();else {
              for (s.lineEnd(), s.lineStart(), d = f - 1; d >= l; --d) {
                s.point(x[d], y[d]);
              }

              s.lineEnd(), s.areaEnd();
            }
            _ && (x[f] = +t(h, f, i), y[f] = +n(h, f, i), s.point(e ? +e(h, f, i) : x[f], a ? +a(h, f, i) : y[f]));
          }

          if (g) return s = null, g + "" || null;
        }

        function l() {
          return M().defined(o).curve(c).context(u);
        }

        return f.x = function (n) {
          return arguments.length ? (t = "function" == typeof n ? n : i(+n), e = null, f) : t;
        }, f.x0 = function (e) {
          return arguments.length ? (t = "function" == typeof e ? e : i(+e), f) : t;
        }, f.x1 = function (t) {
          return arguments.length ? (e = null == t ? null : "function" == typeof t ? t : i(+t), f) : e;
        }, f.y = function (t) {
          return arguments.length ? (n = "function" == typeof t ? t : i(+t), a = null, f) : n;
        }, f.y0 = function (t) {
          return arguments.length ? (n = "function" == typeof t ? t : i(+t), f) : n;
        }, f.y1 = function (t) {
          return arguments.length ? (a = null == t ? null : "function" == typeof t ? t : i(+t), f) : a;
        }, f.lineX0 = f.lineY0 = function () {
          return l().x(t).y(n);
        }, f.lineY1 = function () {
          return l().x(t).y(a);
        }, f.lineX1 = function () {
          return l().x(e).y(n);
        }, f.defined = function (t) {
          return arguments.length ? (o = "function" == typeof t ? t : i(!!t), f) : o;
        }, f.curve = function (t) {
          return arguments.length ? (c = t, null != u && (s = c(u)), f) : c;
        }, f.context = function (t) {
          return arguments.length ? (null == t ? u = s = null : s = c(u = t), f) : u;
        }, f;
      },
          E = function E(t, e) {
        return e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN;
      },
          O = function O(t) {
        return t;
      },
          k = function k() {
        var t = O,
            e = E,
            n = null,
            r = i(0),
            a = i(p),
            o = i(0);

        function u(i) {
          var u,
              c,
              s,
              f,
              l,
              d = i.length,
              h = 0,
              g = new Array(d),
              _ = new Array(d),
              x = +r.apply(this, arguments),
              y = Math.min(p, Math.max(-p, a.apply(this, arguments) - x)),
              v = Math.min(Math.abs(y) / d, o.apply(this, arguments)),
              b = v * (y < 0 ? -1 : 1);

          for (u = 0; u < d; ++u) {
            (l = _[g[u] = u] = +t(i[u], u, i)) > 0 && (h += l);
          }

          for (null != e ? g.sort(function (t, n) {
            return e(_[t], _[n]);
          }) : null != n && g.sort(function (t, e) {
            return n(i[t], i[e]);
          }), u = 0, s = h ? (y - d * b) / h : 0; u < d; ++u, x = f) {
            c = g[u], f = x + ((l = _[c]) > 0 ? l * s : 0) + b, _[c] = {
              data: i[c],
              index: u,
              value: l,
              startAngle: x,
              endAngle: f,
              padAngle: v
            };
          }

          return _;
        }

        return u.value = function (e) {
          return arguments.length ? (t = "function" == typeof e ? e : i(+e), u) : t;
        }, u.sortValues = function (t) {
          return arguments.length ? (e = t, n = null, u) : e;
        }, u.sort = function (t) {
          return arguments.length ? (n = t, e = null, u) : n;
        }, u.startAngle = function (t) {
          return arguments.length ? (r = "function" == typeof t ? t : i(+t), u) : r;
        }, u.endAngle = function (t) {
          return arguments.length ? (a = "function" == typeof t ? t : i(+t), u) : a;
        }, u.padAngle = function (t) {
          return arguments.length ? (o = "function" == typeof t ? t : i(+t), u) : o;
        }, u;
      },
          V = R(T);

      function G(t) {
        this._curve = t;
      }

      function R(t) {
        function e(e) {
          return new G(t(e));
        }

        return e._curve = t, e;
      }

      function I(t) {
        var e = t.curve;
        return t.angle = t.x, delete t.x, t.radius = t.y, delete t.y, t.curve = function (t) {
          return arguments.length ? e(R(t)) : e()._curve;
        }, t;
      }

      G.prototype = {
        areaStart: function areaStart() {
          this._curve.areaStart();
        },
        areaEnd: function areaEnd() {
          this._curve.areaEnd();
        },
        lineStart: function lineStart() {
          this._curve.lineStart();
        },
        lineEnd: function lineEnd() {
          this._curve.lineEnd();
        },
        point: function point(t, e) {
          this._curve.point(e * Math.sin(t), e * -Math.cos(t));
        }
      };

      var N = function N() {
        return I(M().curve(V));
      },
          D = function D() {
        var t = L().curve(V),
            e = t.curve,
            n = t.lineX0,
            r = t.lineX1,
            i = t.lineY0,
            a = t.lineY1;
        return t.angle = t.x, delete t.x, t.startAngle = t.x0, delete t.x0, t.endAngle = t.x1, delete t.x1, t.radius = t.y, delete t.y, t.innerRadius = t.y0, delete t.y0, t.outerRadius = t.y1, delete t.y1, t.lineStartAngle = function () {
          return I(n());
        }, delete t.lineX0, t.lineEndAngle = function () {
          return I(r());
        }, delete t.lineX1, t.lineInnerRadius = function () {
          return I(i());
        }, delete t.lineY0, t.lineOuterRadius = function () {
          return I(a());
        }, delete t.lineY1, t.curve = function (t) {
          return arguments.length ? e(R(t)) : e()._curve;
        }, t;
      },
          F = function F(t, e) {
        return [(e = +e) * Math.cos(t -= Math.PI / 2), e * Math.sin(t)];
      },
          z = Array.prototype.slice;

      function j(t) {
        return t.source;
      }

      function X(t) {
        return t.target;
      }

      function B(t) {
        var e = j,
            n = X,
            a = P,
            o = C,
            u = null;

        function c() {
          var i,
              c = z.call(arguments),
              s = e.apply(this, c),
              f = n.apply(this, c);
          if (u || (u = i = Object(r.a)()), t(u, +a.apply(this, (c[0] = s, c)), +o.apply(this, c), +a.apply(this, (c[0] = f, c)), +o.apply(this, c)), i) return u = null, i + "" || null;
        }

        return c.source = function (t) {
          return arguments.length ? (e = t, c) : e;
        }, c.target = function (t) {
          return arguments.length ? (n = t, c) : n;
        }, c.x = function (t) {
          return arguments.length ? (a = "function" == typeof t ? t : i(+t), c) : a;
        }, c.y = function (t) {
          return arguments.length ? (o = "function" == typeof t ? t : i(+t), c) : o;
        }, c.context = function (t) {
          return arguments.length ? (u = null == t ? null : t, c) : u;
        }, c;
      }

      function H(t, e, n, r, i) {
        t.moveTo(e, n), t.bezierCurveTo(e = (e + r) / 2, n, e, i, r, i);
      }

      function Y(t, e, n, r, i) {
        t.moveTo(e, n), t.bezierCurveTo(e, n = (n + i) / 2, r, n, r, i);
      }

      function U(t, e, n, r, i) {
        var a = F(e, n),
            o = F(e, n = (n + i) / 2),
            u = F(r, n),
            c = F(r, i);
        t.moveTo(a[0], a[1]), t.bezierCurveTo(o[0], o[1], u[0], u[1], c[0], c[1]);
      }

      function q() {
        return B(H);
      }

      function W() {
        return B(Y);
      }

      function Q() {
        var t = B(U);
        return t.angle = t.x, delete t.x, t.radius = t.y, delete t.y, t;
      }

      var Z = {
        draw: function draw(t, e) {
          var n = Math.sqrt(e / h);
          t.moveTo(n, 0), t.arc(0, 0, n, 0, p);
        }
      },
          $ = {
        draw: function draw(t, e) {
          var n = Math.sqrt(e / 5) / 2;
          t.moveTo(-3 * n, -n), t.lineTo(-n, -n), t.lineTo(-n, -3 * n), t.lineTo(n, -3 * n), t.lineTo(n, -n), t.lineTo(3 * n, -n), t.lineTo(3 * n, n), t.lineTo(n, n), t.lineTo(n, 3 * n), t.lineTo(-n, 3 * n), t.lineTo(-n, n), t.lineTo(-3 * n, n), t.closePath();
        }
      },
          K = Math.sqrt(1 / 3),
          J = 2 * K,
          tt = {
        draw: function draw(t, e) {
          var n = Math.sqrt(e / J),
              r = n * K;
          t.moveTo(0, -n), t.lineTo(r, 0), t.lineTo(0, n), t.lineTo(-r, 0), t.closePath();
        }
      },
          et = Math.sin(h / 10) / Math.sin(7 * h / 10),
          nt = Math.sin(p / 10) * et,
          rt = -Math.cos(p / 10) * et,
          it = {
        draw: function draw(t, e) {
          var n = Math.sqrt(.8908130915292852 * e),
              r = nt * n,
              i = rt * n;
          t.moveTo(0, -n), t.lineTo(r, i);

          for (var a = 1; a < 5; ++a) {
            var o = p * a / 5,
                u = Math.cos(o),
                c = Math.sin(o);
            t.lineTo(c * n, -u * n), t.lineTo(u * r - c * i, c * r + u * i);
          }

          t.closePath();
        }
      },
          at = {
        draw: function draw(t, e) {
          var n = Math.sqrt(e),
              r = -n / 2;
          t.rect(r, r, n, n);
        }
      },
          ot = Math.sqrt(3),
          ut = {
        draw: function draw(t, e) {
          var n = -Math.sqrt(e / (3 * ot));
          t.moveTo(0, 2 * n), t.lineTo(-ot * n, -n), t.lineTo(ot * n, -n), t.closePath();
        }
      },
          ct = Math.sqrt(3) / 2,
          st = 1 / Math.sqrt(12),
          ft = 3 * (st / 2 + 1),
          lt = {
        draw: function draw(t, e) {
          var n = Math.sqrt(e / ft),
              r = n / 2,
              i = n * st,
              a = r,
              o = n * st + n,
              u = -a,
              c = o;
          t.moveTo(r, i), t.lineTo(a, o), t.lineTo(u, c), t.lineTo(-.5 * r - ct * i, ct * r + -.5 * i), t.lineTo(-.5 * a - ct * o, ct * a + -.5 * o), t.lineTo(-.5 * u - ct * c, ct * u + -.5 * c), t.lineTo(-.5 * r + ct * i, -.5 * i - ct * r), t.lineTo(-.5 * a + ct * o, -.5 * o - ct * a), t.lineTo(-.5 * u + ct * c, -.5 * c - ct * u), t.closePath();
        }
      },
          dt = [Z, $, tt, at, it, ut, lt],
          ht = function ht() {
        var t = i(Z),
            e = i(64),
            n = null;

        function a() {
          var i;
          if (n || (n = i = Object(r.a)()), t.apply(this, arguments).draw(n, +e.apply(this, arguments)), i) return n = null, i + "" || null;
        }

        return a.type = function (e) {
          return arguments.length ? (t = "function" == typeof e ? e : i(e), a) : t;
        }, a.size = function (t) {
          return arguments.length ? (e = "function" == typeof t ? t : i(+t), a) : e;
        }, a.context = function (t) {
          return arguments.length ? (n = null == t ? null : t, a) : n;
        }, a;
      },
          gt = function gt() {};

      function pt(t, e, n) {
        t._context.bezierCurveTo((2 * t._x0 + t._x1) / 3, (2 * t._y0 + t._y1) / 3, (t._x0 + 2 * t._x1) / 3, (t._y0 + 2 * t._y1) / 3, (t._x0 + 4 * t._x1 + e) / 6, (t._y0 + 4 * t._y1 + n) / 6);
      }

      function _t(t) {
        this._context = t;
      }

      _t.prototype = {
        areaStart: function areaStart() {
          this._line = 0;
        },
        areaEnd: function areaEnd() {
          this._line = NaN;
        },
        lineStart: function lineStart() {
          this._x0 = this._x1 = this._y0 = this._y1 = NaN, this._point = 0;
        },
        lineEnd: function lineEnd() {
          switch (this._point) {
            case 3:
              pt(this, this._x1, this._y1);

            case 2:
              this._context.lineTo(this._x1, this._y1);

          }

          (this._line || 0 !== this._line && 1 === this._point) && this._context.closePath(), this._line = 1 - this._line;
        },
        point: function point(t, e) {
          switch (t = +t, e = +e, this._point) {
            case 0:
              this._point = 1, this._line ? this._context.lineTo(t, e) : this._context.moveTo(t, e);
              break;

            case 1:
              this._point = 2;
              break;

            case 2:
              this._point = 3, this._context.lineTo((5 * this._x0 + this._x1) / 6, (5 * this._y0 + this._y1) / 6);

            default:
              pt(this, t, e);
          }

          this._x0 = this._x1, this._x1 = t, this._y0 = this._y1, this._y1 = e;
        }
      };

      var xt = function xt(t) {
        return new _t(t);
      };

      function yt(t) {
        this._context = t;
      }

      yt.prototype = {
        areaStart: gt,
        areaEnd: gt,
        lineStart: function lineStart() {
          this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = NaN, this._point = 0;
        },
        lineEnd: function lineEnd() {
          switch (this._point) {
            case 1:
              this._context.moveTo(this._x2, this._y2), this._context.closePath();
              break;

            case 2:
              this._context.moveTo((this._x2 + 2 * this._x3) / 3, (this._y2 + 2 * this._y3) / 3), this._context.lineTo((this._x3 + 2 * this._x2) / 3, (this._y3 + 2 * this._y2) / 3), this._context.closePath();
              break;

            case 3:
              this.point(this._x2, this._y2), this.point(this._x3, this._y3), this.point(this._x4, this._y4);
          }
        },
        point: function point(t, e) {
          switch (t = +t, e = +e, this._point) {
            case 0:
              this._point = 1, this._x2 = t, this._y2 = e;
              break;

            case 1:
              this._point = 2, this._x3 = t, this._y3 = e;
              break;

            case 2:
              this._point = 3, this._x4 = t, this._y4 = e, this._context.moveTo((this._x0 + 4 * this._x1 + t) / 6, (this._y0 + 4 * this._y1 + e) / 6);
              break;

            default:
              pt(this, t, e);
          }

          this._x0 = this._x1, this._x1 = t, this._y0 = this._y1, this._y1 = e;
        }
      };

      var vt = function vt(t) {
        return new yt(t);
      };

      function bt(t) {
        this._context = t;
      }

      bt.prototype = {
        areaStart: function areaStart() {
          this._line = 0;
        },
        areaEnd: function areaEnd() {
          this._line = NaN;
        },
        lineStart: function lineStart() {
          this._x0 = this._x1 = this._y0 = this._y1 = NaN, this._point = 0;
        },
        lineEnd: function lineEnd() {
          (this._line || 0 !== this._line && 3 === this._point) && this._context.closePath(), this._line = 1 - this._line;
        },
        point: function point(t, e) {
          switch (t = +t, e = +e, this._point) {
            case 0:
              this._point = 1;
              break;

            case 1:
              this._point = 2;
              break;

            case 2:
              this._point = 3;
              var n = (this._x0 + 4 * this._x1 + t) / 6,
                  r = (this._y0 + 4 * this._y1 + e) / 6;
              this._line ? this._context.lineTo(n, r) : this._context.moveTo(n, r);
              break;

            case 3:
              this._point = 4;

            default:
              pt(this, t, e);
          }

          this._x0 = this._x1, this._x1 = t, this._y0 = this._y1, this._y1 = e;
        }
      };

      var mt = function mt(t) {
        return new bt(t);
      };

      function wt(t, e) {
        this._basis = new _t(t), this._beta = e;
      }

      wt.prototype = {
        lineStart: function lineStart() {
          this._x = [], this._y = [], this._basis.lineStart();
        },
        lineEnd: function lineEnd() {
          var t = this._x,
              e = this._y,
              n = t.length - 1;
          if (n > 0) for (var r, i = t[0], a = e[0], o = t[n] - i, u = e[n] - a, c = -1; ++c <= n;) {
            r = c / n, this._basis.point(this._beta * t[c] + (1 - this._beta) * (i + r * o), this._beta * e[c] + (1 - this._beta) * (a + r * u));
          }
          this._x = this._y = null, this._basis.lineEnd();
        },
        point: function point(t, e) {
          this._x.push(+t), this._y.push(+e);
        }
      };

      var St = function t(e) {
        function n(t) {
          return 1 === e ? new _t(t) : new wt(t, e);
        }

        return n.beta = function (e) {
          return t(+e);
        }, n;
      }(.85);

      function At(t, e, n) {
        t._context.bezierCurveTo(t._x1 + t._k * (t._x2 - t._x0), t._y1 + t._k * (t._y2 - t._y0), t._x2 + t._k * (t._x1 - e), t._y2 + t._k * (t._y1 - n), t._x2, t._y2);
      }

      function Tt(t, e) {
        this._context = t, this._k = (1 - e) / 6;
      }

      Tt.prototype = {
        areaStart: function areaStart() {
          this._line = 0;
        },
        areaEnd: function areaEnd() {
          this._line = NaN;
        },
        lineStart: function lineStart() {
          this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN, this._point = 0;
        },
        lineEnd: function lineEnd() {
          switch (this._point) {
            case 2:
              this._context.lineTo(this._x2, this._y2);

              break;

            case 3:
              At(this, this._x1, this._y1);
          }

          (this._line || 0 !== this._line && 1 === this._point) && this._context.closePath(), this._line = 1 - this._line;
        },
        point: function point(t, e) {
          switch (t = +t, e = +e, this._point) {
            case 0:
              this._point = 1, this._line ? this._context.lineTo(t, e) : this._context.moveTo(t, e);
              break;

            case 1:
              this._point = 2, this._x1 = t, this._y1 = e;
              break;

            case 2:
              this._point = 3;

            default:
              At(this, t, e);
          }

          this._x0 = this._x1, this._x1 = this._x2, this._x2 = t, this._y0 = this._y1, this._y1 = this._y2, this._y2 = e;
        }
      };

      var Pt = function t(e) {
        function n(t) {
          return new Tt(t, e);
        }

        return n.tension = function (e) {
          return t(+e);
        }, n;
      }(0);

      function Ct(t, e) {
        this._context = t, this._k = (1 - e) / 6;
      }

      Ct.prototype = {
        areaStart: gt,
        areaEnd: gt,
        lineStart: function lineStart() {
          this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._x5 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = this._y5 = NaN, this._point = 0;
        },
        lineEnd: function lineEnd() {
          switch (this._point) {
            case 1:
              this._context.moveTo(this._x3, this._y3), this._context.closePath();
              break;

            case 2:
              this._context.lineTo(this._x3, this._y3), this._context.closePath();
              break;

            case 3:
              this.point(this._x3, this._y3), this.point(this._x4, this._y4), this.point(this._x5, this._y5);
          }
        },
        point: function point(t, e) {
          switch (t = +t, e = +e, this._point) {
            case 0:
              this._point = 1, this._x3 = t, this._y3 = e;
              break;

            case 1:
              this._point = 2, this._context.moveTo(this._x4 = t, this._y4 = e);
              break;

            case 2:
              this._point = 3, this._x5 = t, this._y5 = e;
              break;

            default:
              At(this, t, e);
          }

          this._x0 = this._x1, this._x1 = this._x2, this._x2 = t, this._y0 = this._y1, this._y1 = this._y2, this._y2 = e;
        }
      };

      var Mt = function t(e) {
        function n(t) {
          return new Ct(t, e);
        }

        return n.tension = function (e) {
          return t(+e);
        }, n;
      }(0);

      function Lt(t, e) {
        this._context = t, this._k = (1 - e) / 6;
      }

      Lt.prototype = {
        areaStart: function areaStart() {
          this._line = 0;
        },
        areaEnd: function areaEnd() {
          this._line = NaN;
        },
        lineStart: function lineStart() {
          this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN, this._point = 0;
        },
        lineEnd: function lineEnd() {
          (this._line || 0 !== this._line && 3 === this._point) && this._context.closePath(), this._line = 1 - this._line;
        },
        point: function point(t, e) {
          switch (t = +t, e = +e, this._point) {
            case 0:
              this._point = 1;
              break;

            case 1:
              this._point = 2;
              break;

            case 2:
              this._point = 3, this._line ? this._context.lineTo(this._x2, this._y2) : this._context.moveTo(this._x2, this._y2);
              break;

            case 3:
              this._point = 4;

            default:
              At(this, t, e);
          }

          this._x0 = this._x1, this._x1 = this._x2, this._x2 = t, this._y0 = this._y1, this._y1 = this._y2, this._y2 = e;
        }
      };

      var Et = function t(e) {
        function n(t) {
          return new Lt(t, e);
        }

        return n.tension = function (e) {
          return t(+e);
        }, n;
      }(0);

      function Ot(t, e, n) {
        var r = t._x1,
            i = t._y1,
            a = t._x2,
            o = t._y2;

        if (t._l01_a > d) {
          var u = 2 * t._l01_2a + 3 * t._l01_a * t._l12_a + t._l12_2a,
              c = 3 * t._l01_a * (t._l01_a + t._l12_a);
          r = (r * u - t._x0 * t._l12_2a + t._x2 * t._l01_2a) / c, i = (i * u - t._y0 * t._l12_2a + t._y2 * t._l01_2a) / c;
        }

        if (t._l23_a > d) {
          var s = 2 * t._l23_2a + 3 * t._l23_a * t._l12_a + t._l12_2a,
              f = 3 * t._l23_a * (t._l23_a + t._l12_a);
          a = (a * s + t._x1 * t._l23_2a - e * t._l12_2a) / f, o = (o * s + t._y1 * t._l23_2a - n * t._l12_2a) / f;
        }

        t._context.bezierCurveTo(r, i, a, o, t._x2, t._y2);
      }

      function kt(t, e) {
        this._context = t, this._alpha = e;
      }

      kt.prototype = {
        areaStart: function areaStart() {
          this._line = 0;
        },
        areaEnd: function areaEnd() {
          this._line = NaN;
        },
        lineStart: function lineStart() {
          this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN, this._l01_a = this._l12_a = this._l23_a = this._l01_2a = this._l12_2a = this._l23_2a = this._point = 0;
        },
        lineEnd: function lineEnd() {
          switch (this._point) {
            case 2:
              this._context.lineTo(this._x2, this._y2);

              break;

            case 3:
              this.point(this._x2, this._y2);
          }

          (this._line || 0 !== this._line && 1 === this._point) && this._context.closePath(), this._line = 1 - this._line;
        },
        point: function point(t, e) {
          if (t = +t, e = +e, this._point) {
            var n = this._x2 - t,
                r = this._y2 - e;
            this._l23_a = Math.sqrt(this._l23_2a = Math.pow(n * n + r * r, this._alpha));
          }

          switch (this._point) {
            case 0:
              this._point = 1, this._line ? this._context.lineTo(t, e) : this._context.moveTo(t, e);
              break;

            case 1:
              this._point = 2;
              break;

            case 2:
              this._point = 3;

            default:
              Ot(this, t, e);
          }

          this._l01_a = this._l12_a, this._l12_a = this._l23_a, this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a, this._x0 = this._x1, this._x1 = this._x2, this._x2 = t, this._y0 = this._y1, this._y1 = this._y2, this._y2 = e;
        }
      };

      var Vt = function t(e) {
        function n(t) {
          return e ? new kt(t, e) : new Tt(t, 0);
        }

        return n.alpha = function (e) {
          return t(+e);
        }, n;
      }(.5);

      function Gt(t, e) {
        this._context = t, this._alpha = e;
      }

      Gt.prototype = {
        areaStart: gt,
        areaEnd: gt,
        lineStart: function lineStart() {
          this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._x5 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = this._y5 = NaN, this._l01_a = this._l12_a = this._l23_a = this._l01_2a = this._l12_2a = this._l23_2a = this._point = 0;
        },
        lineEnd: function lineEnd() {
          switch (this._point) {
            case 1:
              this._context.moveTo(this._x3, this._y3), this._context.closePath();
              break;

            case 2:
              this._context.lineTo(this._x3, this._y3), this._context.closePath();
              break;

            case 3:
              this.point(this._x3, this._y3), this.point(this._x4, this._y4), this.point(this._x5, this._y5);
          }
        },
        point: function point(t, e) {
          if (t = +t, e = +e, this._point) {
            var n = this._x2 - t,
                r = this._y2 - e;
            this._l23_a = Math.sqrt(this._l23_2a = Math.pow(n * n + r * r, this._alpha));
          }

          switch (this._point) {
            case 0:
              this._point = 1, this._x3 = t, this._y3 = e;
              break;

            case 1:
              this._point = 2, this._context.moveTo(this._x4 = t, this._y4 = e);
              break;

            case 2:
              this._point = 3, this._x5 = t, this._y5 = e;
              break;

            default:
              Ot(this, t, e);
          }

          this._l01_a = this._l12_a, this._l12_a = this._l23_a, this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a, this._x0 = this._x1, this._x1 = this._x2, this._x2 = t, this._y0 = this._y1, this._y1 = this._y2, this._y2 = e;
        }
      };

      var Rt = function t(e) {
        function n(t) {
          return e ? new Gt(t, e) : new Ct(t, 0);
        }

        return n.alpha = function (e) {
          return t(+e);
        }, n;
      }(.5);

      function It(t, e) {
        this._context = t, this._alpha = e;
      }

      It.prototype = {
        areaStart: function areaStart() {
          this._line = 0;
        },
        areaEnd: function areaEnd() {
          this._line = NaN;
        },
        lineStart: function lineStart() {
          this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN, this._l01_a = this._l12_a = this._l23_a = this._l01_2a = this._l12_2a = this._l23_2a = this._point = 0;
        },
        lineEnd: function lineEnd() {
          (this._line || 0 !== this._line && 3 === this._point) && this._context.closePath(), this._line = 1 - this._line;
        },
        point: function point(t, e) {
          if (t = +t, e = +e, this._point) {
            var n = this._x2 - t,
                r = this._y2 - e;
            this._l23_a = Math.sqrt(this._l23_2a = Math.pow(n * n + r * r, this._alpha));
          }

          switch (this._point) {
            case 0:
              this._point = 1;
              break;

            case 1:
              this._point = 2;
              break;

            case 2:
              this._point = 3, this._line ? this._context.lineTo(this._x2, this._y2) : this._context.moveTo(this._x2, this._y2);
              break;

            case 3:
              this._point = 4;

            default:
              Ot(this, t, e);
          }

          this._l01_a = this._l12_a, this._l12_a = this._l23_a, this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a, this._x0 = this._x1, this._x1 = this._x2, this._x2 = t, this._y0 = this._y1, this._y1 = this._y2, this._y2 = e;
        }
      };

      var Nt = function t(e) {
        function n(t) {
          return e ? new It(t, e) : new Lt(t, 0);
        }

        return n.alpha = function (e) {
          return t(+e);
        }, n;
      }(.5);

      function Dt(t) {
        this._context = t;
      }

      Dt.prototype = {
        areaStart: gt,
        areaEnd: gt,
        lineStart: function lineStart() {
          this._point = 0;
        },
        lineEnd: function lineEnd() {
          this._point && this._context.closePath();
        },
        point: function point(t, e) {
          t = +t, e = +e, this._point ? this._context.lineTo(t, e) : (this._point = 1, this._context.moveTo(t, e));
        }
      };

      var Ft = function Ft(t) {
        return new Dt(t);
      };

      function zt(t) {
        return t < 0 ? -1 : 1;
      }

      function jt(t, e, n) {
        var r = t._x1 - t._x0,
            i = e - t._x1,
            a = (t._y1 - t._y0) / (r || i < 0 && -0),
            o = (n - t._y1) / (i || r < 0 && -0),
            u = (a * i + o * r) / (r + i);
        return (zt(a) + zt(o)) * Math.min(Math.abs(a), Math.abs(o), .5 * Math.abs(u)) || 0;
      }

      function Xt(t, e) {
        var n = t._x1 - t._x0;
        return n ? (3 * (t._y1 - t._y0) / n - e) / 2 : e;
      }

      function Bt(t, e, n) {
        var r = t._x0,
            i = t._y0,
            a = t._x1,
            o = t._y1,
            u = (a - r) / 3;

        t._context.bezierCurveTo(r + u, i + u * e, a - u, o - u * n, a, o);
      }

      function Ht(t) {
        this._context = t;
      }

      function Yt(t) {
        this._context = new Ut(t);
      }

      function Ut(t) {
        this._context = t;
      }

      function qt(t) {
        return new Ht(t);
      }

      function Wt(t) {
        return new Yt(t);
      }

      function Qt(t) {
        this._context = t;
      }

      function Zt(t) {
        var e,
            n,
            r = t.length - 1,
            i = new Array(r),
            a = new Array(r),
            o = new Array(r);

        for (i[0] = 0, a[0] = 2, o[0] = t[0] + 2 * t[1], e = 1; e < r - 1; ++e) {
          i[e] = 1, a[e] = 4, o[e] = 4 * t[e] + 2 * t[e + 1];
        }

        for (i[r - 1] = 2, a[r - 1] = 7, o[r - 1] = 8 * t[r - 1] + t[r], e = 1; e < r; ++e) {
          n = i[e] / a[e - 1], a[e] -= n, o[e] -= n * o[e - 1];
        }

        for (i[r - 1] = o[r - 1] / a[r - 1], e = r - 2; e >= 0; --e) {
          i[e] = (o[e] - i[e + 1]) / a[e];
        }

        for (a[r - 1] = (t[r] + i[r - 1]) / 2, e = 0; e < r - 1; ++e) {
          a[e] = 2 * t[e + 1] - i[e + 1];
        }

        return [i, a];
      }

      Ht.prototype = {
        areaStart: function areaStart() {
          this._line = 0;
        },
        areaEnd: function areaEnd() {
          this._line = NaN;
        },
        lineStart: function lineStart() {
          this._x0 = this._x1 = this._y0 = this._y1 = this._t0 = NaN, this._point = 0;
        },
        lineEnd: function lineEnd() {
          switch (this._point) {
            case 2:
              this._context.lineTo(this._x1, this._y1);

              break;

            case 3:
              Bt(this, this._t0, Xt(this, this._t0));
          }

          (this._line || 0 !== this._line && 1 === this._point) && this._context.closePath(), this._line = 1 - this._line;
        },
        point: function point(t, e) {
          var n = NaN;

          if (e = +e, (t = +t) !== this._x1 || e !== this._y1) {
            switch (this._point) {
              case 0:
                this._point = 1, this._line ? this._context.lineTo(t, e) : this._context.moveTo(t, e);
                break;

              case 1:
                this._point = 2;
                break;

              case 2:
                this._point = 3, Bt(this, Xt(this, n = jt(this, t, e)), n);
                break;

              default:
                Bt(this, this._t0, n = jt(this, t, e));
            }

            this._x0 = this._x1, this._x1 = t, this._y0 = this._y1, this._y1 = e, this._t0 = n;
          }
        }
      }, (Yt.prototype = Object.create(Ht.prototype)).point = function (t, e) {
        Ht.prototype.point.call(this, e, t);
      }, Ut.prototype = {
        moveTo: function moveTo(t, e) {
          this._context.moveTo(e, t);
        },
        closePath: function closePath() {
          this._context.closePath();
        },
        lineTo: function lineTo(t, e) {
          this._context.lineTo(e, t);
        },
        bezierCurveTo: function bezierCurveTo(t, e, n, r, i, a) {
          this._context.bezierCurveTo(e, t, r, n, a, i);
        }
      }, Qt.prototype = {
        areaStart: function areaStart() {
          this._line = 0;
        },
        areaEnd: function areaEnd() {
          this._line = NaN;
        },
        lineStart: function lineStart() {
          this._x = [], this._y = [];
        },
        lineEnd: function lineEnd() {
          var t = this._x,
              e = this._y,
              n = t.length;
          if (n) if (this._line ? this._context.lineTo(t[0], e[0]) : this._context.moveTo(t[0], e[0]), 2 === n) this._context.lineTo(t[1], e[1]);else for (var r = Zt(t), i = Zt(e), a = 0, o = 1; o < n; ++a, ++o) {
            this._context.bezierCurveTo(r[0][a], i[0][a], r[1][a], i[1][a], t[o], e[o]);
          }
          (this._line || 0 !== this._line && 1 === n) && this._context.closePath(), this._line = 1 - this._line, this._x = this._y = null;
        },
        point: function point(t, e) {
          this._x.push(+t), this._y.push(+e);
        }
      };

      var $t = function $t(t) {
        return new Qt(t);
      };

      function Kt(t, e) {
        this._context = t, this._t = e;
      }

      Kt.prototype = {
        areaStart: function areaStart() {
          this._line = 0;
        },
        areaEnd: function areaEnd() {
          this._line = NaN;
        },
        lineStart: function lineStart() {
          this._x = this._y = NaN, this._point = 0;
        },
        lineEnd: function lineEnd() {
          0 < this._t && this._t < 1 && 2 === this._point && this._context.lineTo(this._x, this._y), (this._line || 0 !== this._line && 1 === this._point) && this._context.closePath(), this._line >= 0 && (this._t = 1 - this._t, this._line = 1 - this._line);
        },
        point: function point(t, e) {
          switch (t = +t, e = +e, this._point) {
            case 0:
              this._point = 1, this._line ? this._context.lineTo(t, e) : this._context.moveTo(t, e);
              break;

            case 1:
              this._point = 2;

            default:
              if (this._t <= 0) this._context.lineTo(this._x, e), this._context.lineTo(t, e);else {
                var n = this._x * (1 - this._t) + t * this._t;
                this._context.lineTo(n, this._y), this._context.lineTo(n, e);
              }
          }

          this._x = t, this._y = e;
        }
      };

      var Jt = function Jt(t) {
        return new Kt(t, .5);
      };

      function te(t) {
        return new Kt(t, 0);
      }

      function ee(t) {
        return new Kt(t, 1);
      }

      var ne = function ne(t, e) {
        if ((i = t.length) > 1) for (var n, r, i, a = 1, o = t[e[0]], u = o.length; a < i; ++a) {
          for (r = o, o = t[e[a]], n = 0; n < u; ++n) {
            o[n][1] += o[n][0] = isNaN(r[n][1]) ? r[n][0] : r[n][1];
          }
        }
      },
          re = function re(t) {
        for (var e = t.length, n = new Array(e); --e >= 0;) {
          n[e] = e;
        }

        return n;
      };

      function ie(t, e) {
        return t[e];
      }

      var ae = function ae() {
        var t = i([]),
            e = re,
            n = ne,
            r = ie;

        function a(i) {
          var a,
              o,
              u = t.apply(this, arguments),
              c = i.length,
              s = u.length,
              f = new Array(s);

          for (a = 0; a < s; ++a) {
            for (var l, d = u[a], h = f[a] = new Array(c), g = 0; g < c; ++g) {
              h[g] = l = [0, +r(i[g], d, g, i)], l.data = i[g];
            }

            h.key = d;
          }

          for (a = 0, o = e(f); a < s; ++a) {
            f[o[a]].index = a;
          }

          return n(f, o), f;
        }

        return a.keys = function (e) {
          return arguments.length ? (t = "function" == typeof e ? e : i(z.call(e)), a) : t;
        }, a.value = function (t) {
          return arguments.length ? (r = "function" == typeof t ? t : i(+t), a) : r;
        }, a.order = function (t) {
          return arguments.length ? (e = null == t ? re : "function" == typeof t ? t : i(z.call(t)), a) : e;
        }, a.offset = function (t) {
          return arguments.length ? (n = null == t ? ne : t, a) : n;
        }, a;
      },
          oe = function oe(t, e) {
        if ((r = t.length) > 0) {
          for (var n, r, i, a = 0, o = t[0].length; a < o; ++a) {
            for (i = n = 0; n < r; ++n) {
              i += t[n][a][1] || 0;
            }

            if (i) for (n = 0; n < r; ++n) {
              t[n][a][1] /= i;
            }
          }

          ne(t, e);
        }
      },
          ue = function ue(t, e) {
        if ((u = t.length) > 1) for (var n, r, i, a, o, u, c = 0, s = t[e[0]].length; c < s; ++c) {
          for (a = o = 0, n = 0; n < u; ++n) {
            (i = (r = t[e[n]][c])[1] - r[0]) >= 0 ? (r[0] = a, r[1] = a += i) : i < 0 ? (r[1] = o, r[0] = o += i) : r[0] = a;
          }
        }
      },
          ce = function ce(t, e) {
        if ((n = t.length) > 0) {
          for (var n, r = 0, i = t[e[0]], a = i.length; r < a; ++r) {
            for (var o = 0, u = 0; o < n; ++o) {
              u += t[o][r][1] || 0;
            }

            i[r][1] += i[r][0] = -u / 2;
          }

          ne(t, e);
        }
      },
          se = function se(t, e) {
        if ((i = t.length) > 0 && (r = (n = t[e[0]]).length) > 0) {
          for (var n, r, i, a = 0, o = 1; o < r; ++o) {
            for (var u = 0, c = 0, s = 0; u < i; ++u) {
              for (var f = t[e[u]], l = f[o][1] || 0, d = (l - (f[o - 1][1] || 0)) / 2, h = 0; h < u; ++h) {
                var g = t[e[h]];
                d += (g[o][1] || 0) - (g[o - 1][1] || 0);
              }

              c += l, s += d * l;
            }

            n[o - 1][1] += n[o - 1][0] = a, c && (a -= s / c);
          }

          n[o - 1][1] += n[o - 1][0] = a, ne(t, e);
        }
      },
          fe = function fe(t) {
        var e = t.map(le);
        return re(t).sort(function (t, n) {
          return e[t] - e[n];
        });
      };

      function le(t) {
        for (var e, n = 0, r = -1, i = t.length; ++r < i;) {
          (e = +t[r][1]) && (n += e);
        }

        return n;
      }

      var de = function de(t) {
        return fe(t).reverse();
      },
          he = function he(t) {
        var e,
            n,
            r = t.length,
            i = t.map(le),
            a = re(t).sort(function (t, e) {
          return i[e] - i[t];
        }),
            o = 0,
            u = 0,
            c = [],
            s = [];

        for (e = 0; e < r; ++e) {
          n = a[e], o < u ? (o += i[n], c.push(n)) : (u += i[n], s.push(n));
        }

        return s.reverse().concat(c);
      },
          ge = function ge(t) {
        return re(t).reverse();
      };

      n.d(e, "a", function () {
        return S;
      }), n.d(e, "b", function () {
        return L;
      }), n.d(e, "v", function () {
        return M;
      }), n.d(e, "A", function () {
        return k;
      }), n.d(e, "c", function () {
        return D;
      }), n.d(e, "C", function () {
        return D;
      }), n.d(e, "w", function () {
        return N;
      }), n.d(e, "D", function () {
        return N;
      }), n.d(e, "B", function () {
        return F;
      }), n.d(e, "x", function () {
        return q;
      }), n.d(e, "z", function () {
        return W;
      }), n.d(e, "y", function () {
        return Q;
      }), n.d(e, "P", function () {
        return ht;
      }), n.d(e, "X", function () {
        return dt;
      }), n.d(e, "Q", function () {
        return Z;
      }), n.d(e, "R", function () {
        return $;
      }), n.d(e, "S", function () {
        return tt;
      }), n.d(e, "T", function () {
        return at;
      }), n.d(e, "U", function () {
        return it;
      }), n.d(e, "V", function () {
        return ut;
      }), n.d(e, "W", function () {
        return lt;
      }), n.d(e, "e", function () {
        return vt;
      }), n.d(e, "f", function () {
        return mt;
      }), n.d(e, "d", function () {
        return xt;
      }), n.d(e, "g", function () {
        return St;
      }), n.d(e, "i", function () {
        return Mt;
      }), n.d(e, "j", function () {
        return Et;
      }), n.d(e, "h", function () {
        return Pt;
      }), n.d(e, "l", function () {
        return Rt;
      }), n.d(e, "m", function () {
        return Nt;
      }), n.d(e, "k", function () {
        return Vt;
      }), n.d(e, "o", function () {
        return Ft;
      }), n.d(e, "n", function () {
        return T;
      }), n.d(e, "p", function () {
        return qt;
      }), n.d(e, "q", function () {
        return Wt;
      }), n.d(e, "r", function () {
        return $t;
      }), n.d(e, "s", function () {
        return Jt;
      }), n.d(e, "t", function () {
        return ee;
      }), n.d(e, "u", function () {
        return te;
      }), n.d(e, "E", function () {
        return ae;
      }), n.d(e, "G", function () {
        return oe;
      }), n.d(e, "F", function () {
        return ue;
      }), n.d(e, "H", function () {
        return ne;
      }), n.d(e, "I", function () {
        return ce;
      }), n.d(e, "J", function () {
        return se;
      }), n.d(e, "K", function () {
        return fe;
      }), n.d(e, "L", function () {
        return de;
      }), n.d(e, "M", function () {
        return he;
      }), n.d(e, "N", function () {
        return re;
      }), n.d(e, "O", function () {
        return ge;
      });
    }, function (t, e, n) {
      "use strict";

      var r = function r() {
        return new i();
      };

      function i() {
        this.reset();
      }

      i.prototype = {
        constructor: i,
        reset: function reset() {
          this.s = this.t = 0;
        },
        add: function add(t) {
          o(a, t, this.t), o(this, a.s, this.s), this.s ? this.t += a.t : this.s = a.t;
        },
        valueOf: function valueOf() {
          return this.s;
        }
      };
      var a = new i();

      function o(t, e, n) {
        var r = t.s = e + n,
            i = r - e,
            a = r - i;
        t.t = e - a + (n - i);
      }

      var u = 1e-6,
          c = Math.PI,
          s = c / 2,
          f = c / 4,
          l = 2 * c,
          d = 180 / c,
          h = c / 180,
          g = Math.abs,
          p = Math.atan,
          _ = Math.atan2,
          x = Math.cos,
          y = Math.ceil,
          v = Math.exp,
          b = (Math.floor, Math.log),
          m = Math.pow,
          w = Math.sin,
          S = Math.sign || function (t) {
        return t > 0 ? 1 : t < 0 ? -1 : 0;
      },
          A = Math.sqrt,
          T = Math.tan;

      function P(t) {
        return t > 1 ? 0 : t < -1 ? c : Math.acos(t);
      }

      function C(t) {
        return t > 1 ? s : t < -1 ? -s : Math.asin(t);
      }

      function M(t) {
        return (t = w(t / 2)) * t;
      }

      function L() {}

      function E(t, e) {
        t && k.hasOwnProperty(t.type) && k[t.type](t, e);
      }

      var O = {
        Feature: function Feature(t, e) {
          E(t.geometry, e);
        },
        FeatureCollection: function FeatureCollection(t, e) {
          for (var n = t.features, r = -1, i = n.length; ++r < i;) {
            E(n[r].geometry, e);
          }
        }
      },
          k = {
        Sphere: function Sphere(t, e) {
          e.sphere();
        },
        Point: function Point(t, e) {
          t = t.coordinates, e.point(t[0], t[1], t[2]);
        },
        MultiPoint: function MultiPoint(t, e) {
          for (var n = t.coordinates, r = -1, i = n.length; ++r < i;) {
            t = n[r], e.point(t[0], t[1], t[2]);
          }
        },
        LineString: function LineString(t, e) {
          V(t.coordinates, e, 0);
        },
        MultiLineString: function MultiLineString(t, e) {
          for (var n = t.coordinates, r = -1, i = n.length; ++r < i;) {
            V(n[r], e, 0);
          }
        },
        Polygon: function Polygon(t, e) {
          G(t.coordinates, e);
        },
        MultiPolygon: function MultiPolygon(t, e) {
          for (var n = t.coordinates, r = -1, i = n.length; ++r < i;) {
            G(n[r], e);
          }
        },
        GeometryCollection: function GeometryCollection(t, e) {
          for (var n = t.geometries, r = -1, i = n.length; ++r < i;) {
            E(n[r], e);
          }
        }
      };

      function V(t, e, n) {
        var r,
            i = -1,
            a = t.length - n;

        for (e.lineStart(); ++i < a;) {
          r = t[i], e.point(r[0], r[1], r[2]);
        }

        e.lineEnd();
      }

      function G(t, e) {
        var n = -1,
            r = t.length;

        for (e.polygonStart(); ++n < r;) {
          V(t[n], e, 1);
        }

        e.polygonEnd();
      }

      var R,
          I,
          N,
          D,
          F,
          z = function z(t, e) {
        t && O.hasOwnProperty(t.type) ? O[t.type](t, e) : E(t, e);
      },
          j = r(),
          X = r(),
          B = {
        point: L,
        lineStart: L,
        lineEnd: L,
        polygonStart: function polygonStart() {
          j.reset(), B.lineStart = H, B.lineEnd = Y;
        },
        polygonEnd: function polygonEnd() {
          var t = +j;
          X.add(t < 0 ? l + t : t), this.lineStart = this.lineEnd = this.point = L;
        },
        sphere: function sphere() {
          X.add(l);
        }
      };

      function H() {
        B.point = U;
      }

      function Y() {
        q(R, I);
      }

      function U(t, e) {
        B.point = q, R = t, I = e, N = t *= h, D = x(e = (e *= h) / 2 + f), F = w(e);
      }

      function q(t, e) {
        e = (e *= h) / 2 + f;
        var n = (t *= h) - N,
            r = n >= 0 ? 1 : -1,
            i = r * n,
            a = x(e),
            o = w(e),
            u = F * o,
            c = D * a + u * x(i),
            s = u * r * w(i);
        j.add(_(s, c)), N = t, D = a, F = o;
      }

      var W = function W(t) {
        return X.reset(), z(t, B), 2 * X;
      };

      function Q(t) {
        return [_(t[1], t[0]), C(t[2])];
      }

      function Z(t) {
        var e = t[0],
            n = t[1],
            r = x(n);
        return [r * x(e), r * w(e), w(n)];
      }

      function $(t, e) {
        return t[0] * e[0] + t[1] * e[1] + t[2] * e[2];
      }

      function K(t, e) {
        return [t[1] * e[2] - t[2] * e[1], t[2] * e[0] - t[0] * e[2], t[0] * e[1] - t[1] * e[0]];
      }

      function J(t, e) {
        t[0] += e[0], t[1] += e[1], t[2] += e[2];
      }

      function tt(t, e) {
        return [t[0] * e, t[1] * e, t[2] * e];
      }

      function et(t) {
        var e = A(t[0] * t[0] + t[1] * t[1] + t[2] * t[2]);
        t[0] /= e, t[1] /= e, t[2] /= e;
      }

      var nt,
          rt,
          it,
          at,
          ot,
          ut,
          ct,
          st,
          ft,
          lt,
          dt = r(),
          ht = {
        point: gt,
        lineStart: _t,
        lineEnd: xt,
        polygonStart: function polygonStart() {
          ht.point = yt, ht.lineStart = vt, ht.lineEnd = bt, dt.reset(), B.polygonStart();
        },
        polygonEnd: function polygonEnd() {
          B.polygonEnd(), ht.point = gt, ht.lineStart = _t, ht.lineEnd = xt, j < 0 ? (nt = -(it = 180), rt = -(at = 90)) : dt > u ? at = 90 : dt < -u && (rt = -90), lt[0] = nt, lt[1] = it;
        }
      };

      function gt(t, e) {
        ft.push(lt = [nt = t, it = t]), e < rt && (rt = e), e > at && (at = e);
      }

      function pt(t, e) {
        var n = Z([t * h, e * h]);

        if (st) {
          var r = K(st, n),
              i = K([r[1], -r[0], 0], r);
          et(i), i = Q(i);
          var a,
              o = t - ot,
              u = o > 0 ? 1 : -1,
              c = i[0] * d * u,
              s = g(o) > 180;
          s ^ (u * ot < c && c < u * t) ? (a = i[1] * d) > at && (at = a) : s ^ (u * ot < (c = (c + 360) % 360 - 180) && c < u * t) ? (a = -i[1] * d) < rt && (rt = a) : (e < rt && (rt = e), e > at && (at = e)), s ? t < ot ? mt(nt, t) > mt(nt, it) && (it = t) : mt(t, it) > mt(nt, it) && (nt = t) : it >= nt ? (t < nt && (nt = t), t > it && (it = t)) : t > ot ? mt(nt, t) > mt(nt, it) && (it = t) : mt(t, it) > mt(nt, it) && (nt = t);
        } else ft.push(lt = [nt = t, it = t]);

        e < rt && (rt = e), e > at && (at = e), st = n, ot = t;
      }

      function _t() {
        ht.point = pt;
      }

      function xt() {
        lt[0] = nt, lt[1] = it, ht.point = gt, st = null;
      }

      function yt(t, e) {
        if (st) {
          var n = t - ot;
          dt.add(g(n) > 180 ? n + (n > 0 ? 360 : -360) : n);
        } else ut = t, ct = e;

        B.point(t, e), pt(t, e);
      }

      function vt() {
        B.lineStart();
      }

      function bt() {
        yt(ut, ct), B.lineEnd(), g(dt) > u && (nt = -(it = 180)), lt[0] = nt, lt[1] = it, st = null;
      }

      function mt(t, e) {
        return (e -= t) < 0 ? e + 360 : e;
      }

      function wt(t, e) {
        return t[0] - e[0];
      }

      function St(t, e) {
        return t[0] <= t[1] ? t[0] <= e && e <= t[1] : e < t[0] || t[1] < e;
      }

      var At,
          Tt,
          Pt,
          Ct,
          Mt,
          Lt,
          Et,
          Ot,
          kt,
          Vt,
          Gt,
          Rt,
          It,
          Nt,
          Dt,
          Ft,
          zt = function zt(t) {
        var e, n, r, i, a, o, u;

        if (at = it = -(nt = rt = 1 / 0), ft = [], z(t, ht), n = ft.length) {
          for (ft.sort(wt), e = 1, a = [r = ft[0]]; e < n; ++e) {
            St(r, (i = ft[e])[0]) || St(r, i[1]) ? (mt(r[0], i[1]) > mt(r[0], r[1]) && (r[1] = i[1]), mt(i[0], r[1]) > mt(r[0], r[1]) && (r[0] = i[0])) : a.push(r = i);
          }

          for (o = -1 / 0, e = 0, r = a[n = a.length - 1]; e <= n; r = i, ++e) {
            i = a[e], (u = mt(r[1], i[0])) > o && (o = u, nt = i[0], it = r[1]);
          }
        }

        return ft = lt = null, nt === 1 / 0 || rt === 1 / 0 ? [[NaN, NaN], [NaN, NaN]] : [[nt, rt], [it, at]];
      },
          jt = {
        sphere: L,
        point: Xt,
        lineStart: Ht,
        lineEnd: qt,
        polygonStart: function polygonStart() {
          jt.lineStart = Wt, jt.lineEnd = Qt;
        },
        polygonEnd: function polygonEnd() {
          jt.lineStart = Ht, jt.lineEnd = qt;
        }
      };

      function Xt(t, e) {
        t *= h;
        var n = x(e *= h);
        Bt(n * x(t), n * w(t), w(e));
      }

      function Bt(t, e, n) {
        Pt += (t - Pt) / ++At, Ct += (e - Ct) / At, Mt += (n - Mt) / At;
      }

      function Ht() {
        jt.point = Yt;
      }

      function Yt(t, e) {
        t *= h;
        var n = x(e *= h);
        Nt = n * x(t), Dt = n * w(t), Ft = w(e), jt.point = Ut, Bt(Nt, Dt, Ft);
      }

      function Ut(t, e) {
        t *= h;

        var n = x(e *= h),
            r = n * x(t),
            i = n * w(t),
            a = w(e),
            o = _(A((o = Dt * a - Ft * i) * o + (o = Ft * r - Nt * a) * o + (o = Nt * i - Dt * r) * o), Nt * r + Dt * i + Ft * a);

        Tt += o, Lt += o * (Nt + (Nt = r)), Et += o * (Dt + (Dt = i)), Ot += o * (Ft + (Ft = a)), Bt(Nt, Dt, Ft);
      }

      function qt() {
        jt.point = Xt;
      }

      function Wt() {
        jt.point = Zt;
      }

      function Qt() {
        $t(Rt, It), jt.point = Xt;
      }

      function Zt(t, e) {
        Rt = t, It = e, t *= h, e *= h, jt.point = $t;
        var n = x(e);
        Nt = n * x(t), Dt = n * w(t), Ft = w(e), Bt(Nt, Dt, Ft);
      }

      function $t(t, e) {
        t *= h;
        var n = x(e *= h),
            r = n * x(t),
            i = n * w(t),
            a = w(e),
            o = Dt * a - Ft * i,
            u = Ft * r - Nt * a,
            c = Nt * i - Dt * r,
            s = A(o * o + u * u + c * c),
            f = C(s),
            l = s && -f / s;
        kt += l * o, Vt += l * u, Gt += l * c, Tt += f, Lt += f * (Nt + (Nt = r)), Et += f * (Dt + (Dt = i)), Ot += f * (Ft + (Ft = a)), Bt(Nt, Dt, Ft);
      }

      var Kt = function Kt(t) {
        At = Tt = Pt = Ct = Mt = Lt = Et = Ot = kt = Vt = Gt = 0, z(t, jt);
        var e = kt,
            n = Vt,
            r = Gt,
            i = e * e + n * n + r * r;
        return i < 1e-12 && (e = Lt, n = Et, r = Ot, Tt < u && (e = Pt, n = Ct, r = Mt), (i = e * e + n * n + r * r) < 1e-12) ? [NaN, NaN] : [_(n, e) * d, C(r / A(i)) * d];
      },
          Jt = function Jt(t) {
        return function () {
          return t;
        };
      },
          te = function te(t, e) {
        function n(n, r) {
          return n = t(n, r), e(n[0], n[1]);
        }

        return t.invert && e.invert && (n.invert = function (n, r) {
          return (n = e.invert(n, r)) && t.invert(n[0], n[1]);
        }), n;
      };

      function ee(t, e) {
        return [t > c ? t - l : t < -c ? t + l : t, e];
      }

      function ne(t, e, n) {
        return (t %= l) ? e || n ? te(ie(t), ae(e, n)) : ie(t) : e || n ? ae(e, n) : ee;
      }

      function re(t) {
        return function (e, n) {
          return [(e += t) > c ? e - l : e < -c ? e + l : e, n];
        };
      }

      function ie(t) {
        var e = re(t);
        return e.invert = re(-t), e;
      }

      function ae(t, e) {
        var n = x(t),
            r = w(t),
            i = x(e),
            a = w(e);

        function o(t, e) {
          var o = x(e),
              u = x(t) * o,
              c = w(t) * o,
              s = w(e),
              f = s * n + u * r;
          return [_(c * i - f * a, u * n - s * r), C(f * i + c * a)];
        }

        return o.invert = function (t, e) {
          var o = x(e),
              u = x(t) * o,
              c = w(t) * o,
              s = w(e),
              f = s * i - c * a;
          return [_(c * i + s * a, u * n + f * r), C(f * n - u * r)];
        }, o;
      }

      ee.invert = ee;

      var oe = function oe(t) {
        function e(e) {
          return (e = t(e[0] * h, e[1] * h))[0] *= d, e[1] *= d, e;
        }

        return t = ne(t[0] * h, t[1] * h, t.length > 2 ? t[2] * h : 0), e.invert = function (e) {
          return (e = t.invert(e[0] * h, e[1] * h))[0] *= d, e[1] *= d, e;
        }, e;
      };

      function ue(t, e, n, r, i, a) {
        if (n) {
          var o = x(e),
              u = w(e),
              c = r * n;
          null == i ? (i = e + r * l, a = e - c / 2) : (i = ce(o, i), a = ce(o, a), (r > 0 ? i < a : i > a) && (i += r * l));

          for (var s, f = i; r > 0 ? f > a : f < a; f -= c) {
            s = Q([o, -u * x(f), -u * w(f)]), t.point(s[0], s[1]);
          }
        }
      }

      function ce(t, e) {
        (e = Z(e))[0] -= t, et(e);
        var n = P(-e[1]);
        return ((-e[2] < 0 ? -n : n) + l - u) % l;
      }

      var se = function se() {
        var t,
            e,
            n = Jt([0, 0]),
            r = Jt(90),
            i = Jt(6),
            a = {
          point: function point(n, r) {
            t.push(n = e(n, r)), n[0] *= d, n[1] *= d;
          }
        };

        function o() {
          var o = n.apply(this, arguments),
              u = r.apply(this, arguments) * h,
              c = i.apply(this, arguments) * h;
          return t = [], e = ne(-o[0] * h, -o[1] * h, 0).invert, ue(a, u, c, 1), o = {
            type: "Polygon",
            coordinates: [t]
          }, t = e = null, o;
        }

        return o.center = function (t) {
          return arguments.length ? (n = "function" == typeof t ? t : Jt([+t[0], +t[1]]), o) : n;
        }, o.radius = function (t) {
          return arguments.length ? (r = "function" == typeof t ? t : Jt(+t), o) : r;
        }, o.precision = function (t) {
          return arguments.length ? (i = "function" == typeof t ? t : Jt(+t), o) : i;
        }, o;
      },
          fe = function fe() {
        var t,
            e = [];
        return {
          point: function point(e, n) {
            t.push([e, n]);
          },
          lineStart: function lineStart() {
            e.push(t = []);
          },
          lineEnd: L,
          rejoin: function rejoin() {
            e.length > 1 && e.push(e.pop().concat(e.shift()));
          },
          result: function result() {
            var n = e;
            return e = [], t = null, n;
          }
        };
      },
          le = function le(t, e) {
        return g(t[0] - e[0]) < u && g(t[1] - e[1]) < u;
      };

      function de(t, e, n, r) {
        this.x = t, this.z = e, this.o = n, this.e = r, this.v = !1, this.n = this.p = null;
      }

      var he = function he(t, e, n, r, i) {
        var a,
            o,
            u = [],
            c = [];

        if (t.forEach(function (t) {
          if (!((e = t.length - 1) <= 0)) {
            var e,
                n,
                r = t[0],
                o = t[e];

            if (le(r, o)) {
              for (i.lineStart(), a = 0; a < e; ++a) {
                i.point((r = t[a])[0], r[1]);
              }

              i.lineEnd();
            } else u.push(n = new de(r, t, null, !0)), c.push(n.o = new de(r, null, n, !1)), u.push(n = new de(o, t, null, !1)), c.push(n.o = new de(o, null, n, !0));
          }
        }), u.length) {
          for (c.sort(e), ge(u), ge(c), a = 0, o = c.length; a < o; ++a) {
            c[a].e = n = !n;
          }

          for (var s, f, l = u[0];;) {
            for (var d = l, h = !0; d.v;) {
              if ((d = d.n) === l) return;
            }

            s = d.z, i.lineStart();

            do {
              if (d.v = d.o.v = !0, d.e) {
                if (h) for (a = 0, o = s.length; a < o; ++a) {
                  i.point((f = s[a])[0], f[1]);
                } else r(d.x, d.n.x, 1, i);
                d = d.n;
              } else {
                if (h) for (s = d.p.z, a = s.length - 1; a >= 0; --a) {
                  i.point((f = s[a])[0], f[1]);
                } else r(d.x, d.p.x, -1, i);
                d = d.p;
              }

              s = (d = d.o).z, h = !h;
            } while (!d.v);

            i.lineEnd();
          }
        }
      };

      function ge(t) {
        if (e = t.length) {
          for (var e, n, r = 0, i = t[0]; ++r < e;) {
            i.n = n = t[r], n.p = i, i = n;
          }

          i.n = n = t[0], n.p = i;
        }
      }

      var pe = r(),
          _e = function _e(t, e) {
        var n = e[0],
            r = e[1],
            i = [w(n), -x(n), 0],
            a = 0,
            o = 0;
        pe.reset();

        for (var s = 0, d = t.length; s < d; ++s) {
          if (g = (h = t[s]).length) for (var h, g, p = h[g - 1], y = p[0], v = p[1] / 2 + f, b = w(v), m = x(v), S = 0; S < g; ++S, y = T, b = M, m = L, p = A) {
            var A = h[S],
                T = A[0],
                P = A[1] / 2 + f,
                M = w(P),
                L = x(P),
                E = T - y,
                O = E >= 0 ? 1 : -1,
                k = O * E,
                V = k > c,
                G = b * M;

            if (pe.add(_(G * O * w(k), m * L + G * x(k))), a += V ? E + O * l : E, V ^ y >= n ^ T >= n) {
              var R = K(Z(p), Z(A));
              et(R);
              var I = K(i, R);
              et(I);
              var N = (V ^ E >= 0 ? -1 : 1) * C(I[2]);
              (r > N || r === N && (R[0] || R[1])) && (o += V ^ E >= 0 ? 1 : -1);
            }
          }
        }

        return (a < -u || a < u && pe < -u) ^ 1 & o;
      },
          xe = n(1),
          ye = function ye(t, e, n, r) {
        return function (i) {
          var a,
              o,
              u,
              c = e(i),
              s = fe(),
              f = e(s),
              l = !1,
              d = {
            point: h,
            lineStart: p,
            lineEnd: _,
            polygonStart: function polygonStart() {
              d.point = x, d.lineStart = y, d.lineEnd = v, o = [], a = [];
            },
            polygonEnd: function polygonEnd() {
              d.point = h, d.lineStart = p, d.lineEnd = _, o = Object(xe.n)(o);

              var t = _e(a, r);

              o.length ? (l || (i.polygonStart(), l = !0), he(o, be, t, n, i)) : t && (l || (i.polygonStart(), l = !0), i.lineStart(), n(null, null, 1, i), i.lineEnd()), l && (i.polygonEnd(), l = !1), o = a = null;
            },
            sphere: function sphere() {
              i.polygonStart(), i.lineStart(), n(null, null, 1, i), i.lineEnd(), i.polygonEnd();
            }
          };

          function h(e, n) {
            t(e, n) && i.point(e, n);
          }

          function g(t, e) {
            c.point(t, e);
          }

          function p() {
            d.point = g, c.lineStart();
          }

          function _() {
            d.point = h, c.lineEnd();
          }

          function x(t, e) {
            u.push([t, e]), f.point(t, e);
          }

          function y() {
            f.lineStart(), u = [];
          }

          function v() {
            x(u[0][0], u[0][1]), f.lineEnd();
            var t,
                e,
                n,
                r,
                c = f.clean(),
                d = s.result(),
                h = d.length;
            if (u.pop(), a.push(u), u = null, h) if (1 & c) {
              if ((e = (n = d[0]).length - 1) > 0) {
                for (l || (i.polygonStart(), l = !0), i.lineStart(), t = 0; t < e; ++t) {
                  i.point((r = n[t])[0], r[1]);
                }

                i.lineEnd();
              }
            } else h > 1 && 2 & c && d.push(d.pop().concat(d.shift())), o.push(d.filter(ve));
          }

          return d;
        };
      };

      function ve(t) {
        return t.length > 1;
      }

      function be(t, e) {
        return ((t = t.x)[0] < 0 ? t[1] - s - u : s - t[1]) - ((e = e.x)[0] < 0 ? e[1] - s - u : s - e[1]);
      }

      var me = ye(function () {
        return !0;
      }, function (t) {
        var e,
            n = NaN,
            r = NaN,
            i = NaN;
        return {
          lineStart: function lineStart() {
            t.lineStart(), e = 1;
          },
          point: function point(a, o) {
            var f = a > 0 ? c : -c,
                l = g(a - n);
            g(l - c) < u ? (t.point(n, r = (r + o) / 2 > 0 ? s : -s), t.point(i, r), t.lineEnd(), t.lineStart(), t.point(f, r), t.point(a, r), e = 0) : i !== f && l >= c && (g(n - i) < u && (n -= i * u), g(a - f) < u && (a -= f * u), r = function (t, e, n, r) {
              var i,
                  a,
                  o = w(t - n);
              return g(o) > u ? p((w(e) * (a = x(r)) * w(n) - w(r) * (i = x(e)) * w(t)) / (i * a * o)) : (e + r) / 2;
            }(n, r, a, o), t.point(i, r), t.lineEnd(), t.lineStart(), t.point(f, r), e = 0), t.point(n = a, r = o), i = f;
          },
          lineEnd: function lineEnd() {
            t.lineEnd(), n = r = NaN;
          },
          clean: function clean() {
            return 2 - e;
          }
        };
      }, function (t, e, n, r) {
        var i;
        if (null == t) i = n * s, r.point(-c, i), r.point(0, i), r.point(c, i), r.point(c, 0), r.point(c, -i), r.point(0, -i), r.point(-c, -i), r.point(-c, 0), r.point(-c, i);else if (g(t[0] - e[0]) > u) {
          var a = t[0] < e[0] ? c : -c;
          i = n * a / 2, r.point(-a, i), r.point(0, i), r.point(a, i);
        } else r.point(e[0], e[1]);
      }, [-c, -s]);

      var we = function we(t) {
        var e = x(t),
            n = 6 * h,
            r = e > 0,
            i = g(e) > u;

        function a(t, n) {
          return x(t) * x(n) > e;
        }

        function o(t, n, r) {
          var i = [1, 0, 0],
              a = K(Z(t), Z(n)),
              o = $(a, a),
              s = a[0],
              f = o - s * s;
          if (!f) return !r && t;
          var l = e * o / f,
              d = -e * s / f,
              h = K(i, a),
              p = tt(i, l);
          J(p, tt(a, d));
          var _ = h,
              x = $(p, _),
              y = $(_, _),
              v = x * x - y * ($(p, p) - 1);

          if (!(v < 0)) {
            var b = A(v),
                m = tt(_, (-x - b) / y);
            if (J(m, p), m = Q(m), !r) return m;
            var w,
                S = t[0],
                T = n[0],
                P = t[1],
                C = n[1];
            T < S && (w = S, S = T, T = w);
            var M = T - S,
                L = g(M - c) < u;

            if (!L && C < P && (w = P, P = C, C = w), L || M < u ? L ? P + C > 0 ^ m[1] < (g(m[0] - S) < u ? P : C) : P <= m[1] && m[1] <= C : M > c ^ (S <= m[0] && m[0] <= T)) {
              var E = tt(_, (-x + b) / y);
              return J(E, p), [m, Q(E)];
            }
          }
        }

        function s(e, n) {
          var i = r ? t : c - t,
              a = 0;
          return e < -i ? a |= 1 : e > i && (a |= 2), n < -i ? a |= 4 : n > i && (a |= 8), a;
        }

        return ye(a, function (t) {
          var e, n, f, l, d;
          return {
            lineStart: function lineStart() {
              l = f = !1, d = 1;
            },
            point: function point(h, g) {
              var p,
                  _ = [h, g],
                  x = a(h, g),
                  y = r ? x ? 0 : s(h, g) : x ? s(h + (h < 0 ? c : -c), g) : 0;
              if (!e && (l = f = x) && t.lineStart(), x !== f && (!(p = o(e, _)) || le(e, p) || le(_, p)) && (_[0] += u, _[1] += u, x = a(_[0], _[1])), x !== f) d = 0, x ? (t.lineStart(), p = o(_, e), t.point(p[0], p[1])) : (p = o(e, _), t.point(p[0], p[1]), t.lineEnd()), e = p;else if (i && e && r ^ x) {
                var v;
                y & n || !(v = o(_, e, !0)) || (d = 0, r ? (t.lineStart(), t.point(v[0][0], v[0][1]), t.point(v[1][0], v[1][1]), t.lineEnd()) : (t.point(v[1][0], v[1][1]), t.lineEnd(), t.lineStart(), t.point(v[0][0], v[0][1])));
              }
              !x || e && le(e, _) || t.point(_[0], _[1]), e = _, f = x, n = y;
            },
            lineEnd: function lineEnd() {
              f && t.lineEnd(), e = null;
            },
            clean: function clean() {
              return d | (l && f) << 1;
            }
          };
        }, function (e, r, i, a) {
          ue(a, t, n, i, e, r);
        }, r ? [0, -t] : [-c, t - c]);
      },
          Se = function Se(t, e, n, r, i, a) {
        var o,
            u = t[0],
            c = t[1],
            s = 0,
            f = 1,
            l = e[0] - u,
            d = e[1] - c;

        if (o = n - u, l || !(o > 0)) {
          if (o /= l, l < 0) {
            if (o < s) return;
            o < f && (f = o);
          } else if (l > 0) {
            if (o > f) return;
            o > s && (s = o);
          }

          if (o = i - u, l || !(o < 0)) {
            if (o /= l, l < 0) {
              if (o > f) return;
              o > s && (s = o);
            } else if (l > 0) {
              if (o < s) return;
              o < f && (f = o);
            }

            if (o = r - c, d || !(o > 0)) {
              if (o /= d, d < 0) {
                if (o < s) return;
                o < f && (f = o);
              } else if (d > 0) {
                if (o > f) return;
                o > s && (s = o);
              }

              if (o = a - c, d || !(o < 0)) {
                if (o /= d, d < 0) {
                  if (o > f) return;
                  o > s && (s = o);
                } else if (d > 0) {
                  if (o < s) return;
                  o < f && (f = o);
                }

                return s > 0 && (t[0] = u + s * l, t[1] = c + s * d), f < 1 && (e[0] = u + f * l, e[1] = c + f * d), !0;
              }
            }
          }
        }
      },
          Ae = 1e9,
          Te = -Ae;

      function Pe(t, e, n, r) {
        function i(i, a) {
          return t <= i && i <= n && e <= a && a <= r;
        }

        function a(i, a, u, c) {
          var f = 0,
              l = 0;
          if (null == i || (f = o(i, u)) !== (l = o(a, u)) || s(i, a) < 0 ^ u > 0) do {
            c.point(0 === f || 3 === f ? t : n, f > 1 ? r : e);
          } while ((f = (f + u + 4) % 4) !== l);else c.point(a[0], a[1]);
        }

        function o(r, i) {
          return g(r[0] - t) < u ? i > 0 ? 0 : 3 : g(r[0] - n) < u ? i > 0 ? 2 : 1 : g(r[1] - e) < u ? i > 0 ? 1 : 0 : i > 0 ? 3 : 2;
        }

        function c(t, e) {
          return s(t.x, e.x);
        }

        function s(t, e) {
          var n = o(t, 1),
              r = o(e, 1);
          return n !== r ? n - r : 0 === n ? e[1] - t[1] : 1 === n ? t[0] - e[0] : 2 === n ? t[1] - e[1] : e[0] - t[0];
        }

        return function (o) {
          var u,
              s,
              f,
              l,
              d,
              h,
              g,
              p,
              _,
              x,
              y,
              v = o,
              b = fe(),
              m = {
            point: w,
            lineStart: function lineStart() {
              m.point = S, s && s.push(f = []);
              x = !0, _ = !1, g = p = NaN;
            },
            lineEnd: function lineEnd() {
              u && (S(l, d), h && _ && b.rejoin(), u.push(b.result()));
              m.point = w, _ && v.lineEnd();
            },
            polygonStart: function polygonStart() {
              v = b, u = [], s = [], y = !0;
            },
            polygonEnd: function polygonEnd() {
              var e = function () {
                for (var e = 0, n = 0, i = s.length; n < i; ++n) {
                  for (var a, o, u = s[n], c = 1, f = u.length, l = u[0], d = l[0], h = l[1]; c < f; ++c) {
                    a = d, o = h, l = u[c], d = l[0], h = l[1], o <= r ? h > r && (d - a) * (r - o) > (h - o) * (t - a) && ++e : h <= r && (d - a) * (r - o) < (h - o) * (t - a) && --e;
                  }
                }

                return e;
              }(),
                  n = y && e,
                  i = (u = Object(xe.n)(u)).length;

              (n || i) && (o.polygonStart(), n && (o.lineStart(), a(null, null, 1, o), o.lineEnd()), i && he(u, c, e, a, o), o.polygonEnd());
              v = o, u = s = f = null;
            }
          };

          function w(t, e) {
            i(t, e) && v.point(t, e);
          }

          function S(a, o) {
            var u = i(a, o);
            if (s && f.push([a, o]), x) l = a, d = o, h = u, x = !1, u && (v.lineStart(), v.point(a, o));else if (u && _) v.point(a, o);else {
              var c = [g = Math.max(Te, Math.min(Ae, g)), p = Math.max(Te, Math.min(Ae, p))],
                  b = [a = Math.max(Te, Math.min(Ae, a)), o = Math.max(Te, Math.min(Ae, o))];
              Se(c, b, t, e, n, r) ? (_ || (v.lineStart(), v.point(c[0], c[1])), v.point(b[0], b[1]), u || v.lineEnd(), y = !1) : u && (v.lineStart(), v.point(a, o), y = !1);
            }
            g = a, p = o, _ = u;
          }

          return m;
        };
      }

      var Ce,
          Me,
          Le,
          Ee = function Ee() {
        var t,
            e,
            n,
            r = 0,
            i = 0,
            a = 960,
            o = 500;
        return n = {
          stream: function stream(n) {
            return t && e === n ? t : t = Pe(r, i, a, o)(e = n);
          },
          extent: function extent(u) {
            return arguments.length ? (r = +u[0][0], i = +u[0][1], a = +u[1][0], o = +u[1][1], t = e = null, n) : [[r, i], [a, o]];
          }
        };
      },
          Oe = r(),
          ke = {
        sphere: L,
        point: L,
        lineStart: function lineStart() {
          ke.point = Ge, ke.lineEnd = Ve;
        },
        lineEnd: L,
        polygonStart: L,
        polygonEnd: L
      };

      function Ve() {
        ke.point = ke.lineEnd = L;
      }

      function Ge(t, e) {
        Ce = t *= h, Me = w(e *= h), Le = x(e), ke.point = Re;
      }

      function Re(t, e) {
        t *= h;
        var n = w(e *= h),
            r = x(e),
            i = g(t - Ce),
            a = x(i),
            o = r * w(i),
            u = Le * n - Me * r * a,
            c = Me * n + Le * r * a;
        Oe.add(_(A(o * o + u * u), c)), Ce = t, Me = n, Le = r;
      }

      var Ie = function Ie(t) {
        return Oe.reset(), z(t, ke), +Oe;
      },
          Ne = [null, null],
          De = {
        type: "LineString",
        coordinates: Ne
      },
          Fe = function Fe(t, e) {
        return Ne[0] = t, Ne[1] = e, Ie(De);
      },
          ze = {
        Feature: function Feature(t, e) {
          return Xe(t.geometry, e);
        },
        FeatureCollection: function FeatureCollection(t, e) {
          for (var n = t.features, r = -1, i = n.length; ++r < i;) {
            if (Xe(n[r].geometry, e)) return !0;
          }

          return !1;
        }
      },
          je = {
        Sphere: function Sphere() {
          return !0;
        },
        Point: function Point(t, e) {
          return Be(t.coordinates, e);
        },
        MultiPoint: function MultiPoint(t, e) {
          for (var n = t.coordinates, r = -1, i = n.length; ++r < i;) {
            if (Be(n[r], e)) return !0;
          }

          return !1;
        },
        LineString: function LineString(t, e) {
          return He(t.coordinates, e);
        },
        MultiLineString: function MultiLineString(t, e) {
          for (var n = t.coordinates, r = -1, i = n.length; ++r < i;) {
            if (He(n[r], e)) return !0;
          }

          return !1;
        },
        Polygon: function Polygon(t, e) {
          return Ye(t.coordinates, e);
        },
        MultiPolygon: function MultiPolygon(t, e) {
          for (var n = t.coordinates, r = -1, i = n.length; ++r < i;) {
            if (Ye(n[r], e)) return !0;
          }

          return !1;
        },
        GeometryCollection: function GeometryCollection(t, e) {
          for (var n = t.geometries, r = -1, i = n.length; ++r < i;) {
            if (Xe(n[r], e)) return !0;
          }

          return !1;
        }
      };

      function Xe(t, e) {
        return !(!t || !je.hasOwnProperty(t.type)) && je[t.type](t, e);
      }

      function Be(t, e) {
        return 0 === Fe(t, e);
      }

      function He(t, e) {
        var n = Fe(t[0], t[1]);
        return Fe(t[0], e) + Fe(e, t[1]) <= n + u;
      }

      function Ye(t, e) {
        return !!_e(t.map(Ue), qe(e));
      }

      function Ue(t) {
        return (t = t.map(qe)).pop(), t;
      }

      function qe(t) {
        return [t[0] * h, t[1] * h];
      }

      var We = function We(t, e) {
        return (t && ze.hasOwnProperty(t.type) ? ze[t.type] : Xe)(t, e);
      };

      function Qe(t, e, n) {
        var r = Object(xe.s)(t, e - u, n).concat(e);
        return function (t) {
          return r.map(function (e) {
            return [t, e];
          });
        };
      }

      function Ze(t, e, n) {
        var r = Object(xe.s)(t, e - u, n).concat(e);
        return function (t) {
          return r.map(function (e) {
            return [e, t];
          });
        };
      }

      function $e() {
        var t,
            e,
            n,
            r,
            i,
            a,
            o,
            c,
            s,
            f,
            l,
            d,
            h = 10,
            p = h,
            _ = 90,
            x = 360,
            v = 2.5;

        function b() {
          return {
            type: "MultiLineString",
            coordinates: m()
          };
        }

        function m() {
          return Object(xe.s)(y(r / _) * _, n, _).map(l).concat(Object(xe.s)(y(c / x) * x, o, x).map(d)).concat(Object(xe.s)(y(e / h) * h, t, h).filter(function (t) {
            return g(t % _) > u;
          }).map(s)).concat(Object(xe.s)(y(a / p) * p, i, p).filter(function (t) {
            return g(t % x) > u;
          }).map(f));
        }

        return b.lines = function () {
          return m().map(function (t) {
            return {
              type: "LineString",
              coordinates: t
            };
          });
        }, b.outline = function () {
          return {
            type: "Polygon",
            coordinates: [l(r).concat(d(o).slice(1), l(n).reverse().slice(1), d(c).reverse().slice(1))]
          };
        }, b.extent = function (t) {
          return arguments.length ? b.extentMajor(t).extentMinor(t) : b.extentMinor();
        }, b.extentMajor = function (t) {
          return arguments.length ? (r = +t[0][0], n = +t[1][0], c = +t[0][1], o = +t[1][1], r > n && (t = r, r = n, n = t), c > o && (t = c, c = o, o = t), b.precision(v)) : [[r, c], [n, o]];
        }, b.extentMinor = function (n) {
          return arguments.length ? (e = +n[0][0], t = +n[1][0], a = +n[0][1], i = +n[1][1], e > t && (n = e, e = t, t = n), a > i && (n = a, a = i, i = n), b.precision(v)) : [[e, a], [t, i]];
        }, b.step = function (t) {
          return arguments.length ? b.stepMajor(t).stepMinor(t) : b.stepMinor();
        }, b.stepMajor = function (t) {
          return arguments.length ? (_ = +t[0], x = +t[1], b) : [_, x];
        }, b.stepMinor = function (t) {
          return arguments.length ? (h = +t[0], p = +t[1], b) : [h, p];
        }, b.precision = function (u) {
          return arguments.length ? (v = +u, s = Qe(a, i, 90), f = Ze(e, t, v), l = Qe(c, o, 90), d = Ze(r, n, v), b) : v;
        }, b.extentMajor([[-180, -90 + u], [180, 90 - u]]).extentMinor([[-180, -80 - u], [180, 80 + u]]);
      }

      function Ke() {
        return $e()();
      }

      var Je,
          tn,
          en,
          nn,
          rn = function rn(t, e) {
        var n = t[0] * h,
            r = t[1] * h,
            i = e[0] * h,
            a = e[1] * h,
            o = x(r),
            u = w(r),
            c = x(a),
            s = w(a),
            f = o * x(n),
            l = o * w(n),
            g = c * x(i),
            p = c * w(i),
            y = 2 * C(A(M(a - r) + o * c * M(i - n))),
            v = w(y),
            b = y ? function (t) {
          var e = w(t *= y) / v,
              n = w(y - t) / v,
              r = n * f + e * g,
              i = n * l + e * p,
              a = n * u + e * s;
          return [_(i, r) * d, _(a, A(r * r + i * i)) * d];
        } : function () {
          return [n * d, r * d];
        };
        return b.distance = y, b;
      },
          an = function an(t) {
        return t;
      },
          on = r(),
          un = r(),
          cn = {
        point: L,
        lineStart: L,
        lineEnd: L,
        polygonStart: function polygonStart() {
          cn.lineStart = sn, cn.lineEnd = dn;
        },
        polygonEnd: function polygonEnd() {
          cn.lineStart = cn.lineEnd = cn.point = L, on.add(g(un)), un.reset();
        },
        result: function result() {
          var t = on / 2;
          return on.reset(), t;
        }
      };

      function sn() {
        cn.point = fn;
      }

      function fn(t, e) {
        cn.point = ln, Je = en = t, tn = nn = e;
      }

      function ln(t, e) {
        un.add(nn * t - en * e), en = t, nn = e;
      }

      function dn() {
        ln(Je, tn);
      }

      var hn = cn,
          gn = 1 / 0,
          pn = gn,
          _n = -gn,
          xn = _n;

      var yn,
          vn,
          bn,
          mn,
          wn = {
        point: function point(t, e) {
          t < gn && (gn = t);
          t > _n && (_n = t);
          e < pn && (pn = e);
          e > xn && (xn = e);
        },
        lineStart: L,
        lineEnd: L,
        polygonStart: L,
        polygonEnd: L,
        result: function result() {
          var t = [[gn, pn], [_n, xn]];
          return _n = xn = -(pn = gn = 1 / 0), t;
        }
      },
          Sn = 0,
          An = 0,
          Tn = 0,
          Pn = 0,
          Cn = 0,
          Mn = 0,
          Ln = 0,
          En = 0,
          On = 0,
          kn = {
        point: Vn,
        lineStart: Gn,
        lineEnd: Nn,
        polygonStart: function polygonStart() {
          kn.lineStart = Dn, kn.lineEnd = Fn;
        },
        polygonEnd: function polygonEnd() {
          kn.point = Vn, kn.lineStart = Gn, kn.lineEnd = Nn;
        },
        result: function result() {
          var t = On ? [Ln / On, En / On] : Mn ? [Pn / Mn, Cn / Mn] : Tn ? [Sn / Tn, An / Tn] : [NaN, NaN];
          return Sn = An = Tn = Pn = Cn = Mn = Ln = En = On = 0, t;
        }
      };

      function Vn(t, e) {
        Sn += t, An += e, ++Tn;
      }

      function Gn() {
        kn.point = Rn;
      }

      function Rn(t, e) {
        kn.point = In, Vn(bn = t, mn = e);
      }

      function In(t, e) {
        var n = t - bn,
            r = e - mn,
            i = A(n * n + r * r);
        Pn += i * (bn + t) / 2, Cn += i * (mn + e) / 2, Mn += i, Vn(bn = t, mn = e);
      }

      function Nn() {
        kn.point = Vn;
      }

      function Dn() {
        kn.point = zn;
      }

      function Fn() {
        jn(yn, vn);
      }

      function zn(t, e) {
        kn.point = jn, Vn(yn = bn = t, vn = mn = e);
      }

      function jn(t, e) {
        var n = t - bn,
            r = e - mn,
            i = A(n * n + r * r);
        Pn += i * (bn + t) / 2, Cn += i * (mn + e) / 2, Mn += i, Ln += (i = mn * t - bn * e) * (bn + t), En += i * (mn + e), On += 3 * i, Vn(bn = t, mn = e);
      }

      var Xn = kn;

      function Bn(t) {
        this._context = t;
      }

      Bn.prototype = {
        _radius: 4.5,
        pointRadius: function pointRadius(t) {
          return this._radius = t, this;
        },
        polygonStart: function polygonStart() {
          this._line = 0;
        },
        polygonEnd: function polygonEnd() {
          this._line = NaN;
        },
        lineStart: function lineStart() {
          this._point = 0;
        },
        lineEnd: function lineEnd() {
          0 === this._line && this._context.closePath(), this._point = NaN;
        },
        point: function point(t, e) {
          switch (this._point) {
            case 0:
              this._context.moveTo(t, e), this._point = 1;
              break;

            case 1:
              this._context.lineTo(t, e);

              break;

            default:
              this._context.moveTo(t + this._radius, e), this._context.arc(t, e, this._radius, 0, l);
          }
        },
        result: L
      };
      var Hn,
          Yn,
          Un,
          qn,
          Wn,
          Qn = r(),
          Zn = {
        point: L,
        lineStart: function lineStart() {
          Zn.point = $n;
        },
        lineEnd: function lineEnd() {
          Hn && Kn(Yn, Un), Zn.point = L;
        },
        polygonStart: function polygonStart() {
          Hn = !0;
        },
        polygonEnd: function polygonEnd() {
          Hn = null;
        },
        result: function result() {
          var t = +Qn;
          return Qn.reset(), t;
        }
      };

      function $n(t, e) {
        Zn.point = Kn, Yn = qn = t, Un = Wn = e;
      }

      function Kn(t, e) {
        qn -= t, Wn -= e, Qn.add(A(qn * qn + Wn * Wn)), qn = t, Wn = e;
      }

      var Jn = Zn;

      function tr() {
        this._string = [];
      }

      function er(t) {
        return "m0," + t + "a" + t + "," + t + " 0 1,1 0," + -2 * t + "a" + t + "," + t + " 0 1,1 0," + 2 * t + "z";
      }

      tr.prototype = {
        _radius: 4.5,
        _circle: er(4.5),
        pointRadius: function pointRadius(t) {
          return (t = +t) !== this._radius && (this._radius = t, this._circle = null), this;
        },
        polygonStart: function polygonStart() {
          this._line = 0;
        },
        polygonEnd: function polygonEnd() {
          this._line = NaN;
        },
        lineStart: function lineStart() {
          this._point = 0;
        },
        lineEnd: function lineEnd() {
          0 === this._line && this._string.push("Z"), this._point = NaN;
        },
        point: function point(t, e) {
          switch (this._point) {
            case 0:
              this._string.push("M", t, ",", e), this._point = 1;
              break;

            case 1:
              this._string.push("L", t, ",", e);

              break;

            default:
              null == this._circle && (this._circle = er(this._radius)), this._string.push("M", t, ",", e, this._circle);
          }
        },
        result: function result() {
          if (this._string.length) {
            var t = this._string.join("");

            return this._string = [], t;
          }

          return null;
        }
      };

      var nr = function nr(t, e) {
        var n,
            r,
            i = 4.5;

        function a(t) {
          return t && ("function" == typeof i && r.pointRadius(+i.apply(this, arguments)), z(t, n(r))), r.result();
        }

        return a.area = function (t) {
          return z(t, n(hn)), hn.result();
        }, a.measure = function (t) {
          return z(t, n(Jn)), Jn.result();
        }, a.bounds = function (t) {
          return z(t, n(wn)), wn.result();
        }, a.centroid = function (t) {
          return z(t, n(Xn)), Xn.result();
        }, a.projection = function (e) {
          return arguments.length ? (n = null == e ? (t = null, an) : (t = e).stream, a) : t;
        }, a.context = function (t) {
          return arguments.length ? (r = null == t ? (e = null, new tr()) : new Bn(e = t), "function" != typeof i && r.pointRadius(i), a) : e;
        }, a.pointRadius = function (t) {
          return arguments.length ? (i = "function" == typeof t ? t : (r.pointRadius(+t), +t), a) : i;
        }, a.projection(t).context(e);
      },
          rr = function rr(t) {
        return {
          stream: ir(t)
        };
      };

      function ir(t) {
        return function (e) {
          var n = new ar();

          for (var r in t) {
            n[r] = t[r];
          }

          return n.stream = e, n;
        };
      }

      function ar() {}

      function or(t, e, n) {
        var r = t.clipExtent && t.clipExtent();
        return t.scale(150).translate([0, 0]), null != r && t.clipExtent(null), z(n, t.stream(wn)), e(wn.result()), null != r && t.clipExtent(r), t;
      }

      function ur(t, e, n) {
        return or(t, function (n) {
          var r = e[1][0] - e[0][0],
              i = e[1][1] - e[0][1],
              a = Math.min(r / (n[1][0] - n[0][0]), i / (n[1][1] - n[0][1])),
              o = +e[0][0] + (r - a * (n[1][0] + n[0][0])) / 2,
              u = +e[0][1] + (i - a * (n[1][1] + n[0][1])) / 2;
          t.scale(150 * a).translate([o, u]);
        }, n);
      }

      function cr(t, e, n) {
        return ur(t, [[0, 0], e], n);
      }

      function sr(t, e, n) {
        return or(t, function (n) {
          var r = +e,
              i = r / (n[1][0] - n[0][0]),
              a = (r - i * (n[1][0] + n[0][0])) / 2,
              o = -i * n[0][1];
          t.scale(150 * i).translate([a, o]);
        }, n);
      }

      function fr(t, e, n) {
        return or(t, function (n) {
          var r = +e,
              i = r / (n[1][1] - n[0][1]),
              a = -i * n[0][0],
              o = (r - i * (n[1][1] + n[0][1])) / 2;
          t.scale(150 * i).translate([a, o]);
        }, n);
      }

      ar.prototype = {
        constructor: ar,
        point: function point(t, e) {
          this.stream.point(t, e);
        },
        sphere: function sphere() {
          this.stream.sphere();
        },
        lineStart: function lineStart() {
          this.stream.lineStart();
        },
        lineEnd: function lineEnd() {
          this.stream.lineEnd();
        },
        polygonStart: function polygonStart() {
          this.stream.polygonStart();
        },
        polygonEnd: function polygonEnd() {
          this.stream.polygonEnd();
        }
      };

      var lr = 16,
          dr = x(30 * h),
          hr = function hr(t, e) {
        return +e ? function (t, e) {
          function n(r, i, a, o, c, s, f, l, d, h, p, x, y, v) {
            var b = f - r,
                m = l - i,
                w = b * b + m * m;

            if (w > 4 * e && y--) {
              var S = o + h,
                  T = c + p,
                  P = s + x,
                  M = A(S * S + T * T + P * P),
                  L = C(P /= M),
                  E = g(g(P) - 1) < u || g(a - d) < u ? (a + d) / 2 : _(T, S),
                  O = t(E, L),
                  k = O[0],
                  V = O[1],
                  G = k - r,
                  R = V - i,
                  I = m * G - b * R;
              (I * I / w > e || g((b * G + m * R) / w - .5) > .3 || o * h + c * p + s * x < dr) && (n(r, i, a, o, c, s, k, V, E, S /= M, T /= M, P, y, v), v.point(k, V), n(k, V, E, S, T, P, f, l, d, h, p, x, y, v));
            }
          }

          return function (e) {
            var r,
                i,
                a,
                o,
                u,
                c,
                s,
                f,
                l,
                d,
                h,
                g,
                p = {
              point: _,
              lineStart: x,
              lineEnd: v,
              polygonStart: function polygonStart() {
                e.polygonStart(), p.lineStart = b;
              },
              polygonEnd: function polygonEnd() {
                e.polygonEnd(), p.lineStart = x;
              }
            };

            function _(n, r) {
              n = t(n, r), e.point(n[0], n[1]);
            }

            function x() {
              f = NaN, p.point = y, e.lineStart();
            }

            function y(r, i) {
              var a = Z([r, i]),
                  o = t(r, i);
              n(f, l, s, d, h, g, f = o[0], l = o[1], s = r, d = a[0], h = a[1], g = a[2], lr, e), e.point(f, l);
            }

            function v() {
              p.point = _, e.lineEnd();
            }

            function b() {
              x(), p.point = m, p.lineEnd = w;
            }

            function m(t, e) {
              y(r = t, e), i = f, a = l, o = d, u = h, c = g, p.point = y;
            }

            function w() {
              n(f, l, s, d, h, g, i, a, r, o, u, c, lr, e), p.lineEnd = v, v();
            }

            return p;
          };
        }(t, e) : function (t) {
          return ir({
            point: function point(e, n) {
              e = t(e, n), this.stream.point(e[0], e[1]);
            }
          });
        }(t);
      };

      var gr = ir({
        point: function point(t, e) {
          this.stream.point(t * h, e * h);
        }
      });

      function pr(t) {
        return _r(function () {
          return t;
        })();
      }

      function _r(t) {
        var e,
            n,
            r,
            i,
            a,
            o,
            u,
            c,
            s,
            f,
            l = 150,
            g = 480,
            p = 250,
            _ = 0,
            x = 0,
            y = 0,
            v = 0,
            b = 0,
            m = null,
            w = me,
            S = null,
            T = an,
            P = .5,
            C = hr(E, P);

        function M(t) {
          return [(t = a(t[0] * h, t[1] * h))[0] * l + n, r - t[1] * l];
        }

        function L(t) {
          return (t = a.invert((t[0] - n) / l, (r - t[1]) / l)) && [t[0] * d, t[1] * d];
        }

        function E(t, i) {
          return [(t = e(t, i))[0] * l + n, r - t[1] * l];
        }

        function O() {
          a = te(i = ne(y, v, b), e);
          var t = e(_, x);
          return n = g - t[0] * l, r = p + t[1] * l, k();
        }

        function k() {
          return s = f = null, M;
        }

        return M.stream = function (t) {
          return s && f === t ? s : s = gr(function (t) {
            return ir({
              point: function point(e, n) {
                var r = t(e, n);
                return this.stream.point(r[0], r[1]);
              }
            });
          }(i)(w(C(T(f = t)))));
        }, M.preclip = function (t) {
          return arguments.length ? (w = t, m = void 0, k()) : w;
        }, M.postclip = function (t) {
          return arguments.length ? (T = t, S = o = u = c = null, k()) : T;
        }, M.clipAngle = function (t) {
          return arguments.length ? (w = +t ? we(m = t * h) : (m = null, me), k()) : m * d;
        }, M.clipExtent = function (t) {
          return arguments.length ? (T = null == t ? (S = o = u = c = null, an) : Pe(S = +t[0][0], o = +t[0][1], u = +t[1][0], c = +t[1][1]), k()) : null == S ? null : [[S, o], [u, c]];
        }, M.scale = function (t) {
          return arguments.length ? (l = +t, O()) : l;
        }, M.translate = function (t) {
          return arguments.length ? (g = +t[0], p = +t[1], O()) : [g, p];
        }, M.center = function (t) {
          return arguments.length ? (_ = t[0] % 360 * h, x = t[1] % 360 * h, O()) : [_ * d, x * d];
        }, M.rotate = function (t) {
          return arguments.length ? (y = t[0] % 360 * h, v = t[1] % 360 * h, b = t.length > 2 ? t[2] % 360 * h : 0, O()) : [y * d, v * d, b * d];
        }, M.precision = function (t) {
          return arguments.length ? (C = hr(E, P = t * t), k()) : A(P);
        }, M.fitExtent = function (t, e) {
          return ur(M, t, e);
        }, M.fitSize = function (t, e) {
          return cr(M, t, e);
        }, M.fitWidth = function (t, e) {
          return sr(M, t, e);
        }, M.fitHeight = function (t, e) {
          return fr(M, t, e);
        }, function () {
          return e = t.apply(this, arguments), M.invert = e.invert && L, O();
        };
      }

      function xr(t) {
        var e = 0,
            n = c / 3,
            r = _r(t),
            i = r(e, n);

        return i.parallels = function (t) {
          return arguments.length ? r(e = t[0] * h, n = t[1] * h) : [e * d, n * d];
        }, i;
      }

      function yr(t, e) {
        var n = w(t),
            r = (n + w(e)) / 2;
        if (g(r) < u) return function (t) {
          var e = x(t);

          function n(t, n) {
            return [t * e, w(n) / e];
          }

          return n.invert = function (t, n) {
            return [t / e, C(n * e)];
          }, n;
        }(t);
        var i = 1 + n * (2 * r - n),
            a = A(i) / r;

        function o(t, e) {
          var n = A(i - 2 * r * w(e)) / r;
          return [n * w(t *= r), a - n * x(t)];
        }

        return o.invert = function (t, e) {
          var n = a - e;
          return [_(t, g(n)) / r * S(n), C((i - (t * t + n * n) * r * r) / (2 * r))];
        }, o;
      }

      var vr = function vr() {
        return xr(yr).scale(155.424).center([0, 33.6442]);
      },
          br = function br() {
        return vr().parallels([29.5, 45.5]).scale(1070).translate([480, 250]).rotate([96, 0]).center([-.6, 38.7]);
      };

      var mr = function mr() {
        var t,
            e,
            n,
            r,
            i,
            a,
            o = br(),
            c = vr().rotate([154, 0]).center([-2, 58.5]).parallels([55, 65]),
            s = vr().rotate([157, 0]).center([-3, 19.9]).parallels([8, 18]),
            f = {
          point: function point(t, e) {
            a = [t, e];
          }
        };

        function l(t) {
          var e = t[0],
              o = t[1];
          return a = null, n.point(e, o), a || (r.point(e, o), a) || (i.point(e, o), a);
        }

        function d() {
          return t = e = null, l;
        }

        return l.invert = function (t) {
          var e = o.scale(),
              n = o.translate(),
              r = (t[0] - n[0]) / e,
              i = (t[1] - n[1]) / e;
          return (i >= .12 && i < .234 && r >= -.425 && r < -.214 ? c : i >= .166 && i < .234 && r >= -.214 && r < -.115 ? s : o).invert(t);
        }, l.stream = function (n) {
          return t && e === n ? t : (r = [o.stream(e = n), c.stream(n), s.stream(n)], i = r.length, t = {
            point: function point(t, e) {
              for (var n = -1; ++n < i;) {
                r[n].point(t, e);
              }
            },
            sphere: function sphere() {
              for (var t = -1; ++t < i;) {
                r[t].sphere();
              }
            },
            lineStart: function lineStart() {
              for (var t = -1; ++t < i;) {
                r[t].lineStart();
              }
            },
            lineEnd: function lineEnd() {
              for (var t = -1; ++t < i;) {
                r[t].lineEnd();
              }
            },
            polygonStart: function polygonStart() {
              for (var t = -1; ++t < i;) {
                r[t].polygonStart();
              }
            },
            polygonEnd: function polygonEnd() {
              for (var t = -1; ++t < i;) {
                r[t].polygonEnd();
              }
            }
          });
          var r, i;
        }, l.precision = function (t) {
          return arguments.length ? (o.precision(t), c.precision(t), s.precision(t), d()) : o.precision();
        }, l.scale = function (t) {
          return arguments.length ? (o.scale(t), c.scale(.35 * t), s.scale(t), l.translate(o.translate())) : o.scale();
        }, l.translate = function (t) {
          if (!arguments.length) return o.translate();
          var e = o.scale(),
              a = +t[0],
              l = +t[1];
          return n = o.translate(t).clipExtent([[a - .455 * e, l - .238 * e], [a + .455 * e, l + .238 * e]]).stream(f), r = c.translate([a - .307 * e, l + .201 * e]).clipExtent([[a - .425 * e + u, l + .12 * e + u], [a - .214 * e - u, l + .234 * e - u]]).stream(f), i = s.translate([a - .205 * e, l + .212 * e]).clipExtent([[a - .214 * e + u, l + .166 * e + u], [a - .115 * e - u, l + .234 * e - u]]).stream(f), d();
        }, l.fitExtent = function (t, e) {
          return ur(l, t, e);
        }, l.fitSize = function (t, e) {
          return cr(l, t, e);
        }, l.fitWidth = function (t, e) {
          return sr(l, t, e);
        }, l.fitHeight = function (t, e) {
          return fr(l, t, e);
        }, l.scale(1070);
      };

      function wr(t) {
        return function (e, n) {
          var r = x(e),
              i = x(n),
              a = t(r * i);
          return [a * i * w(e), a * w(n)];
        };
      }

      function Sr(t) {
        return function (e, n) {
          var r = A(e * e + n * n),
              i = t(r),
              a = w(i),
              o = x(i);
          return [_(e * a, r * o), C(r && n * a / r)];
        };
      }

      var Ar = wr(function (t) {
        return A(2 / (1 + t));
      });
      Ar.invert = Sr(function (t) {
        return 2 * C(t / 2);
      });

      var Tr = function Tr() {
        return pr(Ar).scale(124.75).clipAngle(179.999);
      },
          Pr = wr(function (t) {
        return (t = P(t)) && t / w(t);
      });

      Pr.invert = Sr(function (t) {
        return t;
      });

      var Cr = function Cr() {
        return pr(Pr).scale(79.4188).clipAngle(179.999);
      };

      function Mr(t, e) {
        return [t, b(T((s + e) / 2))];
      }

      Mr.invert = function (t, e) {
        return [t, 2 * p(v(e)) - s];
      };

      var Lr = function Lr() {
        return Er(Mr).scale(961 / l);
      };

      function Er(t) {
        var e,
            n,
            r,
            i = pr(t),
            a = i.center,
            o = i.scale,
            u = i.translate,
            s = i.clipExtent,
            f = null;

        function l() {
          var a = c * o(),
              u = i(oe(i.rotate()).invert([0, 0]));
          return s(null == f ? [[u[0] - a, u[1] - a], [u[0] + a, u[1] + a]] : t === Mr ? [[Math.max(u[0] - a, f), e], [Math.min(u[0] + a, n), r]] : [[f, Math.max(u[1] - a, e)], [n, Math.min(u[1] + a, r)]]);
        }

        return i.scale = function (t) {
          return arguments.length ? (o(t), l()) : o();
        }, i.translate = function (t) {
          return arguments.length ? (u(t), l()) : u();
        }, i.center = function (t) {
          return arguments.length ? (a(t), l()) : a();
        }, i.clipExtent = function (t) {
          return arguments.length ? (null == t ? f = e = n = r = null : (f = +t[0][0], e = +t[0][1], n = +t[1][0], r = +t[1][1]), l()) : null == f ? null : [[f, e], [n, r]];
        }, l();
      }

      function Or(t) {
        return T((s + t) / 2);
      }

      function kr(t, e) {
        var n = x(t),
            r = t === e ? w(t) : b(n / x(e)) / b(Or(e) / Or(t)),
            i = n * m(Or(t), r) / r;
        if (!r) return Mr;

        function a(t, e) {
          i > 0 ? e < -s + u && (e = -s + u) : e > s - u && (e = s - u);
          var n = i / m(Or(e), r);
          return [n * w(r * t), i - n * x(r * t)];
        }

        return a.invert = function (t, e) {
          var n = i - e,
              a = S(r) * A(t * t + n * n);
          return [_(t, g(n)) / r * S(n), 2 * p(m(i / a, 1 / r)) - s];
        }, a;
      }

      var Vr = function Vr() {
        return xr(kr).scale(109.5).parallels([30, 30]);
      };

      function Gr(t, e) {
        return [t, e];
      }

      Gr.invert = Gr;

      var Rr = function Rr() {
        return pr(Gr).scale(152.63);
      };

      function Ir(t, e) {
        var n = x(t),
            r = t === e ? w(t) : (n - x(e)) / (e - t),
            i = n / r + t;
        if (g(r) < u) return Gr;

        function a(t, e) {
          var n = i - e,
              a = r * t;
          return [n * w(a), i - n * x(a)];
        }

        return a.invert = function (t, e) {
          var n = i - e;
          return [_(t, g(n)) / r * S(n), i - S(r) * A(t * t + n * n)];
        }, a;
      }

      var Nr = function Nr() {
        return xr(Ir).scale(131.154).center([0, 13.9389]);
      };

      function Dr(t, e) {
        var n = x(e),
            r = x(t) * n;
        return [n * w(t) / r, w(e) / r];
      }

      Dr.invert = Sr(p);

      var Fr = function Fr() {
        return pr(Dr).scale(144.049).clipAngle(60);
      };

      function zr(t, e, n, r) {
        return 1 === t && 1 === e && 0 === n && 0 === r ? an : ir({
          point: function point(i, a) {
            this.stream.point(i * t + n, a * e + r);
          }
        });
      }

      var jr = function jr() {
        var t,
            e,
            n,
            r,
            i,
            a,
            o = 1,
            u = 0,
            c = 0,
            s = 1,
            f = 1,
            l = an,
            d = null,
            h = an;

        function g() {
          return r = i = null, a;
        }

        return a = {
          stream: function stream(t) {
            return r && i === t ? r : r = l(h(i = t));
          },
          postclip: function postclip(r) {
            return arguments.length ? (h = r, d = t = e = n = null, g()) : h;
          },
          clipExtent: function clipExtent(r) {
            return arguments.length ? (h = null == r ? (d = t = e = n = null, an) : Pe(d = +r[0][0], t = +r[0][1], e = +r[1][0], n = +r[1][1]), g()) : null == d ? null : [[d, t], [e, n]];
          },
          scale: function scale(t) {
            return arguments.length ? (l = zr((o = +t) * s, o * f, u, c), g()) : o;
          },
          translate: function translate(t) {
            return arguments.length ? (l = zr(o * s, o * f, u = +t[0], c = +t[1]), g()) : [u, c];
          },
          reflectX: function reflectX(t) {
            return arguments.length ? (l = zr(o * (s = t ? -1 : 1), o * f, u, c), g()) : s < 0;
          },
          reflectY: function reflectY(t) {
            return arguments.length ? (l = zr(o * s, o * (f = t ? -1 : 1), u, c), g()) : f < 0;
          },
          fitExtent: function fitExtent(t, e) {
            return ur(a, t, e);
          },
          fitSize: function fitSize(t, e) {
            return cr(a, t, e);
          },
          fitWidth: function fitWidth(t, e) {
            return sr(a, t, e);
          },
          fitHeight: function fitHeight(t, e) {
            return fr(a, t, e);
          }
        };
      };

      function Xr(t, e) {
        var n = e * e,
            r = n * n;
        return [t * (.8707 - .131979 * n + r * (r * (.003971 * n - .001529 * r) - .013791)), e * (1.007226 + n * (.015085 + r * (.028874 * n - .044475 - .005916 * r)))];
      }

      Xr.invert = function (t, e) {
        var n,
            r = e,
            i = 25;

        do {
          var a = r * r,
              o = a * a;
          r -= n = (r * (1.007226 + a * (.015085 + o * (.028874 * a - .044475 - .005916 * o))) - e) / (1.007226 + a * (.045255 + o * (.259866 * a - .311325 - .005916 * 11 * o)));
        } while (g(n) > u && --i > 0);

        return [t / (.8707 + (a = r * r) * (a * (a * a * a * (.003971 - .001529 * a) - .013791) - .131979)), r];
      };

      var Br = function Br() {
        return pr(Xr).scale(175.295);
      };

      function Hr(t, e) {
        return [x(e) * w(t), w(e)];
      }

      Hr.invert = Sr(C);

      var Yr = function Yr() {
        return pr(Hr).scale(249.5).clipAngle(90 + u);
      };

      function Ur(t, e) {
        var n = x(e),
            r = 1 + x(t) * n;
        return [n * w(t) / r, w(e) / r];
      }

      Ur.invert = Sr(function (t) {
        return 2 * p(t);
      });

      var qr = function qr() {
        return pr(Ur).scale(250).clipAngle(142);
      };

      function Wr(t, e) {
        return [b(T((s + e) / 2)), -t];
      }

      Wr.invert = function (t, e) {
        return [-e, 2 * p(v(t)) - s];
      };

      var Qr = function Qr() {
        var t = Er(Wr),
            e = t.center,
            n = t.rotate;
        return t.center = function (t) {
          return arguments.length ? e([-t[1], t[0]]) : [(t = e())[1], -t[0]];
        }, t.rotate = function (t) {
          return arguments.length ? n([t[0], t[1], t.length > 2 ? t[2] + 90 : 90]) : [(t = n())[0], t[1], t[2] - 90];
        }, n([0, 0, 90]).scale(159.155);
      };

      n.d(e, "c", function () {
        return W;
      }), n.d(e, "h", function () {
        return zt;
      }), n.d(e, "i", function () {
        return Kt;
      }), n.d(e, "j", function () {
        return se;
      }), n.d(e, "k", function () {
        return me;
      }), n.d(e, "l", function () {
        return we;
      }), n.d(e, "m", function () {
        return Ee;
      }), n.d(e, "n", function () {
        return Pe;
      }), n.d(e, "u", function () {
        return We;
      }), n.d(e, "v", function () {
        return Fe;
      }), n.d(e, "A", function () {
        return $e;
      }), n.d(e, "B", function () {
        return Ke;
      }), n.d(e, "D", function () {
        return rn;
      }), n.d(e, "E", function () {
        return Ie;
      }), n.d(e, "L", function () {
        return nr;
      }), n.d(e, "a", function () {
        return br;
      }), n.d(e, "b", function () {
        return mr;
      }), n.d(e, "d", function () {
        return Tr;
      }), n.d(e, "e", function () {
        return Ar;
      }), n.d(e, "f", function () {
        return Cr;
      }), n.d(e, "g", function () {
        return Pr;
      }), n.d(e, "o", function () {
        return Vr;
      }), n.d(e, "p", function () {
        return kr;
      }), n.d(e, "q", function () {
        return vr;
      }), n.d(e, "r", function () {
        return yr;
      }), n.d(e, "s", function () {
        return Nr;
      }), n.d(e, "t", function () {
        return Ir;
      }), n.d(e, "w", function () {
        return Rr;
      }), n.d(e, "x", function () {
        return Gr;
      }), n.d(e, "y", function () {
        return Fr;
      }), n.d(e, "z", function () {
        return Dr;
      }), n.d(e, "C", function () {
        return jr;
      }), n.d(e, "M", function () {
        return pr;
      }), n.d(e, "N", function () {
        return _r;
      }), n.d(e, "F", function () {
        return Lr;
      }), n.d(e, "G", function () {
        return Mr;
      }), n.d(e, "H", function () {
        return Br;
      }), n.d(e, "I", function () {
        return Xr;
      }), n.d(e, "J", function () {
        return Yr;
      }), n.d(e, "K", function () {
        return Hr;
      }), n.d(e, "P", function () {
        return qr;
      }), n.d(e, "Q", function () {
        return Ur;
      }), n.d(e, "T", function () {
        return Qr;
      }), n.d(e, "U", function () {
        return Wr;
      }), n.d(e, "O", function () {
        return oe;
      }), n.d(e, "R", function () {
        return z;
      }), n.d(e, "S", function () {
        return rr;
      });
    }, function (t, e, n) {
      var r,
          i,
          a = {},
          o = (r = function r() {
        return window && document && document.all && !window.atob;
      }, function () {
        return void 0 === i && (i = r.apply(this, arguments)), i;
      }),
          u = function (t) {
        var e = {};
        return function (t) {
          if ("function" == typeof t) return t();

          if (void 0 === e[t]) {
            var n = function (t) {
              return document.querySelector(t);
            }.call(this, t);

            if (window.HTMLIFrameElement && n instanceof window.HTMLIFrameElement) try {
              n = n.contentDocument.head;
            } catch (t) {
              n = null;
            }
            e[t] = n;
          }

          return e[t];
        };
      }(),
          c = null,
          s = 0,
          f = [],
          l = n(37);

      function d(t, e) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n],
              i = a[r.id];

          if (i) {
            i.refs++;

            for (var o = 0; o < i.parts.length; o++) {
              i.parts[o](r.parts[o]);
            }

            for (; o < r.parts.length; o++) {
              i.parts.push(y(r.parts[o], e));
            }
          } else {
            var u = [];

            for (o = 0; o < r.parts.length; o++) {
              u.push(y(r.parts[o], e));
            }

            a[r.id] = {
              id: r.id,
              refs: 1,
              parts: u
            };
          }
        }
      }

      function h(t, e) {
        for (var n = [], r = {}, i = 0; i < t.length; i++) {
          var a = t[i],
              o = e.base ? a[0] + e.base : a[0],
              u = {
            css: a[1],
            media: a[2],
            sourceMap: a[3]
          };
          r[o] ? r[o].parts.push(u) : n.push(r[o] = {
            id: o,
            parts: [u]
          });
        }

        return n;
      }

      function g(t, e) {
        var n = u(t.insertInto);
        if (!n) throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
        var r = f[f.length - 1];
        if ("top" === t.insertAt) r ? r.nextSibling ? n.insertBefore(e, r.nextSibling) : n.appendChild(e) : n.insertBefore(e, n.firstChild), f.push(e);else if ("bottom" === t.insertAt) n.appendChild(e);else {
          if ("object" != typeof t.insertAt || !t.insertAt.before) throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
          var i = u(t.insertInto + " " + t.insertAt.before);
          n.insertBefore(e, i);
        }
      }

      function p(t) {
        if (null === t.parentNode) return !1;
        t.parentNode.removeChild(t);
        var e = f.indexOf(t);
        e >= 0 && f.splice(e, 1);
      }

      function _(t) {
        var e = document.createElement("style");
        return void 0 === t.attrs.type && (t.attrs.type = "text/css"), x(e, t.attrs), g(t, e), e;
      }

      function x(t, e) {
        Object.keys(e).forEach(function (n) {
          t.setAttribute(n, e[n]);
        });
      }

      function y(t, e) {
        var n, r, i, a;

        if (e.transform && t.css) {
          if (!(a = e.transform(t.css))) return function () {};
          t.css = a;
        }

        if (e.singleton) {
          var o = s++;
          n = c || (c = _(e)), r = m.bind(null, n, o, !1), i = m.bind(null, n, o, !0);
        } else t.sourceMap && "function" == typeof URL && "function" == typeof URL.createObjectURL && "function" == typeof URL.revokeObjectURL && "function" == typeof Blob && "function" == typeof btoa ? (n = function (t) {
          var e = document.createElement("link");
          return void 0 === t.attrs.type && (t.attrs.type = "text/css"), t.attrs.rel = "stylesheet", x(e, t.attrs), g(t, e), e;
        }(e), r = function (t, e, n) {
          var r = n.css,
              i = n.sourceMap,
              a = void 0 === e.convertToAbsoluteUrls && i;
          (e.convertToAbsoluteUrls || a) && (r = l(r));
          i && (r += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(i)))) + " */");
          var o = new Blob([r], {
            type: "text/css"
          }),
              u = t.href;
          t.href = URL.createObjectURL(o), u && URL.revokeObjectURL(u);
        }.bind(null, n, e), i = function i() {
          p(n), n.href && URL.revokeObjectURL(n.href);
        }) : (n = _(e), r = function (t, e) {
          var n = e.css,
              r = e.media;
          r && t.setAttribute("media", r);
          if (t.styleSheet) t.styleSheet.cssText = n;else {
            for (; t.firstChild;) {
              t.removeChild(t.firstChild);
            }

            t.appendChild(document.createTextNode(n));
          }
        }.bind(null, n), i = function i() {
          p(n);
        });

        return r(t), function (e) {
          if (e) {
            if (e.css === t.css && e.media === t.media && e.sourceMap === t.sourceMap) return;
            r(t = e);
          } else i();
        };
      }

      t.exports = function (t, e) {
        if ("undefined" != typeof DEBUG && DEBUG && "object" != typeof document) throw new Error("The style-loader cannot be used in a non-browser environment");
        (e = e || {}).attrs = "object" == typeof e.attrs ? e.attrs : {}, e.singleton || "boolean" == typeof e.singleton || (e.singleton = o()), e.insertInto || (e.insertInto = "head"), e.insertAt || (e.insertAt = "bottom");
        var n = h(t, e);
        return d(n, e), function (t) {
          for (var r = [], i = 0; i < n.length; i++) {
            var o = n[i];
            (u = a[o.id]).refs--, r.push(u);
          }

          t && d(h(t, e), e);

          for (i = 0; i < r.length; i++) {
            var u;

            if (0 === (u = r[i]).refs) {
              for (var c = 0; c < u.parts.length; c++) {
                u.parts[c]();
              }

              delete a[u.id];
            }
          }
        };
      };

      var v,
          b = (v = [], function (t, e) {
        return v[t] = e, v.filter(Boolean).join("\n");
      });

      function m(t, e, n, r) {
        var i = n ? "" : r.css;
        if (t.styleSheet) t.styleSheet.cssText = b(e, i);else {
          var a = document.createTextNode(i),
              o = t.childNodes;
          o[e] && t.removeChild(o[e]), o.length ? t.insertBefore(a, o[e]) : t.appendChild(a);
        }
      }
    }, function (t, e) {
      t.exports = function (t) {
        var e = [];
        return e.toString = function () {
          return this.map(function (e) {
            var n = function (t, e) {
              var n = t[1] || "",
                  r = t[3];
              if (!r) return n;

              if (e && "function" == typeof btoa) {
                var i = (o = r, "/*# sourceMappingURL=data:application/json;charset=utf-8;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(o)))) + " */"),
                    a = r.sources.map(function (t) {
                  return "/*# sourceURL=" + r.sourceRoot + t + " */";
                });
                return [n].concat(a).concat([i]).join("\n");
              }

              var o;
              return [n].join("\n");
            }(e, t);

            return e[2] ? "@media " + e[2] + "{" + n + "}" : n;
          }).join("");
        }, e.i = function (t, n) {
          "string" == typeof t && (t = [[null, t, ""]]);

          for (var r = {}, i = 0; i < this.length; i++) {
            var a = this[i][0];
            "number" == typeof a && (r[a] = !0);
          }

          for (i = 0; i < t.length; i++) {
            var o = t[i];
            "number" == typeof o[0] && r[o[0]] || (n && !o[2] ? o[2] = n : n && (o[2] = "(" + o[2] + ") and (" + n + ")"), e.push(o));
          }
        }, e;
      };
    }, function (t, e, n) {
      /* @license C3.js v0.6.1 | (c) C3 Team and other contributors | http://c3js.org/ */
      t.exports = function () {
        "use strict";

        var t,
            e,
            r = {
          target: "c3-target",
          chart: "c3-chart",
          chartLine: "c3-chart-line",
          chartLines: "c3-chart-lines",
          chartBar: "c3-chart-bar",
          chartBars: "c3-chart-bars",
          chartText: "c3-chart-text",
          chartTexts: "c3-chart-texts",
          chartArc: "c3-chart-arc",
          chartArcs: "c3-chart-arcs",
          chartArcsTitle: "c3-chart-arcs-title",
          chartArcsBackground: "c3-chart-arcs-background",
          chartArcsGaugeUnit: "c3-chart-arcs-gauge-unit",
          chartArcsGaugeMax: "c3-chart-arcs-gauge-max",
          chartArcsGaugeMin: "c3-chart-arcs-gauge-min",
          selectedCircle: "c3-selected-circle",
          selectedCircles: "c3-selected-circles",
          eventRect: "c3-event-rect",
          eventRects: "c3-event-rects",
          eventRectsSingle: "c3-event-rects-single",
          eventRectsMultiple: "c3-event-rects-multiple",
          zoomRect: "c3-zoom-rect",
          brush: "c3-brush",
          focused: "c3-focused",
          defocused: "c3-defocused",
          region: "c3-region",
          regions: "c3-regions",
          title: "c3-title",
          tooltipContainer: "c3-tooltip-container",
          tooltip: "c3-tooltip",
          tooltipName: "c3-tooltip-name",
          shape: "c3-shape",
          shapes: "c3-shapes",
          line: "c3-line",
          lines: "c3-lines",
          bar: "c3-bar",
          bars: "c3-bars",
          circle: "c3-circle",
          circles: "c3-circles",
          arc: "c3-arc",
          arcLabelLine: "c3-arc-label-line",
          arcs: "c3-arcs",
          area: "c3-area",
          areas: "c3-areas",
          empty: "c3-empty",
          text: "c3-text",
          texts: "c3-texts",
          gaugeValue: "c3-gauge-value",
          grid: "c3-grid",
          gridLines: "c3-grid-lines",
          xgrid: "c3-xgrid",
          xgrids: "c3-xgrids",
          xgridLine: "c3-xgrid-line",
          xgridLines: "c3-xgrid-lines",
          xgridFocus: "c3-xgrid-focus",
          ygrid: "c3-ygrid",
          ygrids: "c3-ygrids",
          ygridLine: "c3-ygrid-line",
          ygridLines: "c3-ygrid-lines",
          axis: "c3-axis",
          axisX: "c3-axis-x",
          axisXLabel: "c3-axis-x-label",
          axisY: "c3-axis-y",
          axisYLabel: "c3-axis-y-label",
          axisY2: "c3-axis-y2",
          axisY2Label: "c3-axis-y2-label",
          legendBackground: "c3-legend-background",
          legendItem: "c3-legend-item",
          legendItemEvent: "c3-legend-item-event",
          legendItemTile: "c3-legend-item-tile",
          legendItemHidden: "c3-legend-item-hidden",
          legendItemFocused: "c3-legend-item-focused",
          dragarea: "c3-dragarea",
          EXPANDED: "_expanded_",
          SELECTED: "_selected_",
          INCLUDED: "_included_"
        },
            i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
          return typeof t;
        } : function (t) {
          return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
        },
            a = function a(t, e) {
          if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
        },
            o = function o(t, e) {
          if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return !e || "object" != typeof e && "function" != typeof e ? t : e;
        },
            u = function u(t) {
          return t || 0 === t;
        },
            c = function c(t) {
          return "function" == typeof t;
        },
            s = function s(t) {
          return Array.isArray(t);
        },
            f = function f(t) {
          return "string" == typeof t;
        },
            l = function l(t) {
          return void 0 === t;
        },
            d = function d(t) {
          return void 0 !== t;
        },
            h = function h(t) {
          return 10 * Math.ceil(t / 10);
        },
            g = function g(t) {
          return Math.ceil(t) + .5;
        },
            p = function p(t) {
          return t[1] - t[0];
        },
            _ = function _(t) {
          return void 0 === t || null === t || f(t) && 0 === t.length || "object" === (void 0 === t ? "undefined" : i(t)) && 0 === Object.keys(t).length;
        },
            x = function x(t) {
          return !T.isEmpty(t);
        },
            y = function y(t, e, n) {
          return d(t[e]) ? t[e] : n;
        },
            v = function v(t, e) {
          var n = !1;
          return Object.keys(t).forEach(function (r) {
            t[r] === e && (n = !0);
          }), n;
        },
            b = function b(t) {
          return "string" == typeof t ? t.replace(/</g, "&lt;").replace(/>/g, "&gt;") : t;
        },
            m = function m(t) {
          var e = t.getBoundingClientRect(),
              n = [t.pathSegList.getItem(0), t.pathSegList.getItem(1)],
              r = n[0].x,
              i = Math.min(n[0].y, n[1].y);
          return {
            x: r,
            y: i,
            width: e.width,
            height: e.height
          };
        };

        function w(t, e) {
          this.component = t, this.params = e || {}, this.d3 = t.d3, this.scale = this.d3.scaleLinear(), this.range, this.orient = "bottom", this.innerTickSize = 6, this.outerTickSize = this.params.withOuterTick ? 6 : 0, this.tickPadding = 3, this.tickValues = null, this.tickFormat, this.tickArguments, this.tickOffset = 0, this.tickCulling = !0, this.tickCentered, this.tickTextCharSize, this.tickTextRotate = this.params.tickTextRotate, this.tickLength, this.axis = this.generateAxis();
        }

        (e = w.prototype).axisX = function (t, e, n) {
          t.attr("transform", function (t) {
            return "translate(" + Math.ceil(e(t) + n) + ", 0)";
          });
        }, e.axisY = function (t, e) {
          t.attr("transform", function (t) {
            return "translate(0," + Math.ceil(e(t)) + ")";
          });
        }, e.scaleExtent = function (t) {
          var e = t[0],
              n = t[t.length - 1];
          return e < n ? [e, n] : [n, e];
        }, e.generateTicks = function (t) {
          var e,
              n,
              r = [];
          if (t.ticks) return t.ticks.apply(t, this.tickArguments);

          for (n = t.domain(), e = Math.ceil(n[0]); e < n[1]; e++) {
            r.push(e);
          }

          return r.length > 0 && r[0] > 0 && r.unshift(r[0] - (r[1] - r[0])), r;
        }, e.copyScale = function () {
          var t,
              e = this.scale.copy();
          return this.params.isCategory && (t = this.scale.domain(), e.domain([t[0], t[1] - 1])), e;
        }, e.textFormatted = function (t) {
          var e = this.tickFormat ? this.tickFormat(t) : t;
          return void 0 !== e ? e : "";
        }, e.updateRange = function () {
          return this.range = this.scale.rangeExtent ? this.scale.rangeExtent() : this.scaleExtent(this.scale.range()), this.range;
        }, e.updateTickTextCharSize = function (t) {
          var e = this;
          if (e.tickTextCharSize) return e.tickTextCharSize;
          var n = {
            h: 11.5,
            w: 5.5
          };
          return t.select("text").text(function (t) {
            return e.textFormatted(t);
          }).each(function (t) {
            var r = this.getBoundingClientRect(),
                i = e.textFormatted(t),
                a = r.height,
                o = i ? r.width / i.length : void 0;
            a && o && (n.h = a, n.w = o);
          }).text(""), e.tickTextCharSize = n, n;
        }, e.isVertical = function () {
          return "left" === this.orient || "right" === this.orient;
        }, e.tspanData = function (t, e, n) {
          var r = this.params.tickMultiline ? this.splitTickText(t, n) : [].concat(this.textFormatted(t));
          return this.params.tickMultiline && this.params.tickMultilineMax > 0 && (r = this.ellipsify(r, this.params.tickMultilineMax)), r.map(function (t) {
            return {
              index: e,
              splitted: t,
              length: r.length
            };
          });
        }, e.splitTickText = function (t, e) {
          var n,
              r,
              i,
              a = this,
              o = a.textFormatted(t),
              u = a.params.tickWidth;
          return "[object Array]" === Object.prototype.toString.call(o) ? o : ((!u || u <= 0) && (u = a.isVertical() ? 95 : a.params.isCategory ? Math.ceil(e(1) - e(0)) - 12 : 110), function t(e, o) {
            r = void 0;

            for (var c = 1; c < o.length; c++) {
              if (" " === o.charAt(c) && (r = c), n = o.substr(0, c + 1), i = a.tickTextCharSize.w * n.length, u < i) return t(e.concat(o.substr(0, r || c)), o.slice(r ? r + 1 : c));
            }

            return e.concat(o);
          }([], o + ""));
        }, e.ellipsify = function (t, e) {
          if (t.length <= e) return t;

          for (var n = t.slice(0, e), r = 3, i = e - 1; i >= 0; i--) {
            var a = n[i].length;
            if (n[i] = n[i].substr(0, a - r).padEnd(a, "."), (r -= a) <= 0) break;
          }

          return n;
        }, e.updateTickLength = function () {
          this.tickLength = Math.max(this.innerTickSize, 0) + this.tickPadding;
        }, e.lineY2 = function (t) {
          var e = this.scale(t) + (this.tickCentered ? 0 : this.tickOffset);
          return this.range[0] < e && e < this.range[1] ? this.innerTickSize : 0;
        }, e.textY = function () {
          var t = this.tickTextRotate;
          return t ? 11.5 - t / 15 * 2.5 * (t > 0 ? 1 : -1) : this.tickLength;
        }, e.textTransform = function () {
          var t = this.tickTextRotate;
          return t ? "rotate(" + t + ")" : "";
        }, e.textTextAnchor = function () {
          var t = this.tickTextRotate;
          return t ? t > 0 ? "start" : "end" : "middle";
        }, e.tspanDx = function () {
          var t = this.tickTextRotate;
          return t ? 8 * Math.sin(Math.PI * (t / 180)) : 0;
        }, e.tspanDy = function (t, e) {
          var n = this.tickTextCharSize.h;
          return 0 === e && (n = this.isVertical() ? -((t.length - 1) * (this.tickTextCharSize.h / 2) - 3) : ".71em"), n;
        }, e.generateAxis = function () {
          var t = this,
              e = t.d3,
              n = t.params;

          function r(i, a) {
            var o;
            return i.each(function () {
              var i,
                  u,
                  c,
                  s = r.g = e.select(this),
                  f = this.__chart__ || t.scale,
                  l = this.__chart__ = t.copyScale(),
                  d = t.tickValues ? t.tickValues : t.generateTicks(l),
                  h = s.selectAll(".tick").data(d, l),
                  g = h.enter().insert("g", ".domain").attr("class", "tick").style("opacity", 1e-6),
                  p = h.exit().remove(),
                  _ = h.merge(g);

              n.isCategory ? (t.tickOffset = Math.ceil((l(1) - l(0)) / 2), u = t.tickCentered ? 0 : t.tickOffset, c = t.tickCentered ? t.tickOffset : 0) : t.tickOffset = u = 0, t.updateRange(), t.updateTickLength(), t.updateTickTextCharSize(s.select(".tick"));

              var x = _.select("line").merge(g.append("line")),
                  y = _.select("text").merge(g.append("text")),
                  v = _.selectAll("text").selectAll("tspan").data(function (e, n) {
                return t.tspanData(e, n, l);
              }),
                  b = v.enter().append("tspan"),
                  m = b.merge(v).text(function (t) {
                return t.splitted;
              });

              v.exit().remove();
              var w = s.selectAll(".domain").data([0]),
                  S = w.enter().append("path").merge(w).attr("class", "domain");

              switch (t.orient) {
                case "bottom":
                  i = t.axisX, x.attr("x1", u).attr("x2", u).attr("y2", function (e, n) {
                    return t.lineY2(e, n);
                  }), y.attr("x", 0).attr("y", function (e, n) {
                    return t.textY(e, n);
                  }).attr("transform", function (e, n) {
                    return t.textTransform(e, n);
                  }).style("text-anchor", function (e, n) {
                    return t.textTextAnchor(e, n);
                  }), m.attr("x", 0).attr("dy", function (e, n) {
                    return t.tspanDy(e, n);
                  }).attr("dx", function (e, n) {
                    return t.tspanDx(e, n);
                  }), S.attr("d", "M" + t.range[0] + "," + t.outerTickSize + "V0H" + t.range[1] + "V" + t.outerTickSize);
                  break;

                case "top":
                  i = t.axisX, x.attr("x1", u).attr("x2", u).attr("y2", function (e, n) {
                    return -1 * t.lineY2(e, n);
                  }), y.attr("x", 0).attr("y", function (e, r) {
                    return -1 * t.textY(e, r) - (n.isCategory ? 2 : t.tickLength - 2);
                  }).attr("transform", function (e, n) {
                    return t.textTransform(e, n);
                  }).style("text-anchor", function (e, n) {
                    return t.textTextAnchor(e, n);
                  }), m.attr("x", 0).attr("dy", function (e, n) {
                    return t.tspanDy(e, n);
                  }).attr("dx", function (e, n) {
                    return t.tspanDx(e, n);
                  }), S.attr("d", "M" + t.range[0] + "," + -t.outerTickSize + "V0H" + t.range[1] + "V" + -t.outerTickSize);
                  break;

                case "left":
                  i = t.axisY, x.attr("x2", -t.innerTickSize).attr("y1", c).attr("y2", c), y.attr("x", -t.tickLength).attr("y", t.tickOffset).style("text-anchor", "end"), m.attr("x", -t.tickLength).attr("dy", function (e, n) {
                    return t.tspanDy(e, n);
                  }), S.attr("d", "M" + -t.outerTickSize + "," + t.range[0] + "H0V" + t.range[1] + "H" + -t.outerTickSize);
                  break;

                case "right":
                  i = t.axisY, x.attr("x2", t.innerTickSize).attr("y1", c).attr("y2", c), y.attr("x", t.tickLength).attr("y", t.tickOffset).style("text-anchor", "start"), m.attr("x", t.tickLength).attr("dy", function (e, n) {
                    return t.tspanDy(e, n);
                  }), S.attr("d", "M" + t.outerTickSize + "," + t.range[0] + "H0V" + t.range[1] + "H" + t.outerTickSize);
              }

              if (l.rangeBand) {
                var A = l,
                    T = A.rangeBand() / 2;

                f = l = function l(t) {
                  return A(t) + T;
                };
              } else f.rangeBand ? f = l : p.call(i, l, t.tickOffset);

              g.call(i, f, t.tickOffset), o = (a ? _.transition(a) : _).style("opacity", 1).call(i, l, t.tickOffset);
            }), o;
          }

          return r.scale = function (e) {
            return arguments.length ? (t.scale = e, r) : t.scale;
          }, r.orient = function (e) {
            return arguments.length ? (t.orient = e in {
              top: 1,
              right: 1,
              bottom: 1,
              left: 1
            } ? e + "" : "bottom", r) : t.orient;
          }, r.tickFormat = function (e) {
            return arguments.length ? (t.tickFormat = e, r) : t.tickFormat;
          }, r.tickCentered = function (e) {
            return arguments.length ? (t.tickCentered = e, r) : t.tickCentered;
          }, r.tickOffset = function () {
            return t.tickOffset;
          }, r.tickInterval = function () {
            var e, i;
            return n.isCategory ? e = 2 * t.tickOffset : (i = r.g.select("path.domain").node().getTotalLength() - 2 * t.outerTickSize, e = i / r.g.selectAll("line").size()), e === 1 / 0 ? 0 : e;
          }, r.ticks = function () {
            return arguments.length ? (t.tickArguments = arguments, r) : t.tickArguments;
          }, r.tickCulling = function (e) {
            return arguments.length ? (t.tickCulling = e, r) : t.tickCulling;
          }, r.tickValues = function (e) {
            if ("function" == typeof e) t.tickValues = function () {
              return e(t.scale.domain());
            };else {
              if (!arguments.length) return t.tickValues;
              t.tickValues = e;
            }
            return r;
          }, r;
        };

        var S = function (n) {
          function r(n) {
            a(this, r);
            var i = {
              fn: t,
              internal: {
                fn: e
              }
            },
                u = o(this, (r.__proto__ || Object.getPrototypeOf(r)).call(this, n, "axis", i));
            return u.d3 = n.d3, u.internal = w, u;
          }

          return function (t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
            t.prototype = Object.create(e && e.prototype, {
              constructor: {
                value: t,
                enumerable: !1,
                writable: !0,
                configurable: !0
              }
            }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e);
          }(r, n), r;
        }(function (t, e, n) {
          this.owner = t, P.chart.internal[e] = n;
        });

        (t = S.prototype).init = function () {
          var t = this.owner,
              e = t.config,
              n = t.main;
          t.axes.x = n.append("g").attr("class", r.axis + " " + r.axisX).attr("clip-path", e.axis_x_inner ? "" : t.clipPathForXAxis).attr("transform", t.getTranslate("x")).style("visibility", e.axis_x_show ? "visible" : "hidden"), t.axes.x.append("text").attr("class", r.axisXLabel).attr("transform", e.axis_rotated ? "rotate(-90)" : "").style("text-anchor", this.textAnchorForXAxisLabel.bind(this)), t.axes.y = n.append("g").attr("class", r.axis + " " + r.axisY).attr("clip-path", e.axis_y_inner ? "" : t.clipPathForYAxis).attr("transform", t.getTranslate("y")).style("visibility", e.axis_y_show ? "visible" : "hidden"), t.axes.y.append("text").attr("class", r.axisYLabel).attr("transform", e.axis_rotated ? "" : "rotate(-90)").style("text-anchor", this.textAnchorForYAxisLabel.bind(this)), t.axes.y2 = n.append("g").attr("class", r.axis + " " + r.axisY2).attr("transform", t.getTranslate("y2")).style("visibility", e.axis_y2_show ? "visible" : "hidden"), t.axes.y2.append("text").attr("class", r.axisY2Label).attr("transform", e.axis_rotated ? "" : "rotate(-90)").style("text-anchor", this.textAnchorForY2AxisLabel.bind(this));
        }, t.getXAxis = function (t, e, n, r, i, a, o) {
          var u = this.owner,
              c = u.config,
              s = {
            isCategory: u.isCategorized(),
            withOuterTick: i,
            tickMultiline: c.axis_x_tick_multiline,
            tickMultilineMax: c.axis_x_tick_multiline ? Number(c.axis_x_tick_multilineMax) : 0,
            tickWidth: c.axis_x_tick_width,
            tickTextRotate: o ? 0 : c.axis_x_tick_rotate,
            withoutTransition: a
          },
              f = new this.internal(this, s).axis.scale(t).orient(e);
          return u.isTimeSeries() && r && "function" != typeof r && (r = r.map(function (t) {
            return u.parseDate(t);
          })), f.tickFormat(n).tickValues(r), u.isCategorized() && (f.tickCentered(c.axis_x_tick_centered), _(c.axis_x_tick_culling) && (c.axis_x_tick_culling = !1)), f;
        }, t.updateXAxisTickValues = function (t, e) {
          var n,
              r = this.owner,
              i = r.config;
          return (i.axis_x_tick_fit || i.axis_x_tick_count) && (n = this.generateTickValues(r.mapTargetsToUniqueXs(t), i.axis_x_tick_count, r.isTimeSeries())), e ? e.tickValues(n) : (r.xAxis.tickValues(n), r.subXAxis.tickValues(n)), n;
        }, t.getYAxis = function (t, e, n, r, i, a, o) {
          var u = this.owner,
              c = u.config,
              s = {
            withOuterTick: i,
            withoutTransition: a,
            tickTextRotate: o ? 0 : c.axis_y_tick_rotate
          },
              f = new this.internal(this, s).axis.scale(t).orient(e).tickFormat(n);
          return u.isTimeSeriesY() ? f.ticks(c.axis_y_tick_time_type, c.axis_y_tick_time_interval) : f.tickValues(r), f;
        }, t.getId = function (t) {
          var e = this.owner.config;
          return t in e.data_axes ? e.data_axes[t] : "y";
        }, t.getXAxisTickFormat = function () {
          var t = this.owner,
              e = t.config,
              n = t.isTimeSeries() ? t.defaultAxisTimeFormat : t.isCategorized() ? t.categoryName : function (t) {
            return t;
          };
          return e.axis_x_tick_format && (c(e.axis_x_tick_format) ? n = e.axis_x_tick_format : t.isTimeSeries() && (n = function n(_n2) {
            return _n2 ? t.axisTimeFormat(e.axis_x_tick_format)(_n2) : "";
          })), c(n) ? function (e) {
            return n.call(t, e);
          } : n;
        }, t.getTickValues = function (t, e) {
          return t || (e ? e.tickValues() : void 0);
        }, t.getXAxisTickValues = function () {
          return this.getTickValues(this.owner.config.axis_x_tick_values, this.owner.xAxis);
        }, t.getYAxisTickValues = function () {
          return this.getTickValues(this.owner.config.axis_y_tick_values, this.owner.yAxis);
        }, t.getY2AxisTickValues = function () {
          return this.getTickValues(this.owner.config.axis_y2_tick_values, this.owner.y2Axis);
        }, t.getLabelOptionByAxisId = function (t) {
          var e,
              n = this.owner,
              r = n.config;
          return "y" === t ? e = r.axis_y_label : "y2" === t ? e = r.axis_y2_label : "x" === t && (e = r.axis_x_label), e;
        }, t.getLabelText = function (t) {
          var e = this.getLabelOptionByAxisId(t);
          return f(e) ? e : e ? e.text : null;
        }, t.setLabelText = function (t, e) {
          var n = this.owner,
              r = n.config,
              i = this.getLabelOptionByAxisId(t);
          f(i) ? "y" === t ? r.axis_y_label = e : "y2" === t ? r.axis_y2_label = e : "x" === t && (r.axis_x_label = e) : i && (i.text = e);
        }, t.getLabelPosition = function (t, e) {
          var n = this.getLabelOptionByAxisId(t),
              r = n && "object" === (void 0 === n ? "undefined" : i(n)) && n.position ? n.position : e;
          return {
            isInner: r.indexOf("inner") >= 0,
            isOuter: r.indexOf("outer") >= 0,
            isLeft: r.indexOf("left") >= 0,
            isCenter: r.indexOf("center") >= 0,
            isRight: r.indexOf("right") >= 0,
            isTop: r.indexOf("top") >= 0,
            isMiddle: r.indexOf("middle") >= 0,
            isBottom: r.indexOf("bottom") >= 0
          };
        }, t.getXAxisLabelPosition = function () {
          return this.getLabelPosition("x", this.owner.config.axis_rotated ? "inner-top" : "inner-right");
        }, t.getYAxisLabelPosition = function () {
          return this.getLabelPosition("y", this.owner.config.axis_rotated ? "inner-right" : "inner-top");
        }, t.getY2AxisLabelPosition = function () {
          return this.getLabelPosition("y2", this.owner.config.axis_rotated ? "inner-right" : "inner-top");
        }, t.getLabelPositionById = function (t) {
          return "y2" === t ? this.getY2AxisLabelPosition() : "y" === t ? this.getYAxisLabelPosition() : this.getXAxisLabelPosition();
        }, t.textForXAxisLabel = function () {
          return this.getLabelText("x");
        }, t.textForYAxisLabel = function () {
          return this.getLabelText("y");
        }, t.textForY2AxisLabel = function () {
          return this.getLabelText("y2");
        }, t.xForAxisLabel = function (t, e) {
          var n = this.owner;
          return t ? e.isLeft ? 0 : e.isCenter ? n.width / 2 : n.width : e.isBottom ? -n.height : e.isMiddle ? -n.height / 2 : 0;
        }, t.dxForAxisLabel = function (t, e) {
          return t ? e.isLeft ? "0.5em" : e.isRight ? "-0.5em" : "0" : e.isTop ? "-0.5em" : e.isBottom ? "0.5em" : "0";
        }, t.textAnchorForAxisLabel = function (t, e) {
          return t ? e.isLeft ? "start" : e.isCenter ? "middle" : "end" : e.isBottom ? "start" : e.isMiddle ? "middle" : "end";
        }, t.xForXAxisLabel = function () {
          return this.xForAxisLabel(!this.owner.config.axis_rotated, this.getXAxisLabelPosition());
        }, t.xForYAxisLabel = function () {
          return this.xForAxisLabel(this.owner.config.axis_rotated, this.getYAxisLabelPosition());
        }, t.xForY2AxisLabel = function () {
          return this.xForAxisLabel(this.owner.config.axis_rotated, this.getY2AxisLabelPosition());
        }, t.dxForXAxisLabel = function () {
          return this.dxForAxisLabel(!this.owner.config.axis_rotated, this.getXAxisLabelPosition());
        }, t.dxForYAxisLabel = function () {
          return this.dxForAxisLabel(this.owner.config.axis_rotated, this.getYAxisLabelPosition());
        }, t.dxForY2AxisLabel = function () {
          return this.dxForAxisLabel(this.owner.config.axis_rotated, this.getY2AxisLabelPosition());
        }, t.dyForXAxisLabel = function () {
          var t = this.owner,
              e = t.config,
              n = this.getXAxisLabelPosition();
          return e.axis_rotated ? n.isInner ? "1.2em" : -25 - (t.config.axis_x_inner ? 0 : this.getMaxTickWidth("x")) : n.isInner ? "-0.5em" : e.axis_x_height ? e.axis_x_height - 10 : "3em";
        }, t.dyForYAxisLabel = function () {
          var t = this.owner,
              e = this.getYAxisLabelPosition();
          return t.config.axis_rotated ? e.isInner ? "-0.5em" : "3em" : e.isInner ? "1.2em" : -10 - (t.config.axis_y_inner ? 0 : this.getMaxTickWidth("y") + 10);
        }, t.dyForY2AxisLabel = function () {
          var t = this.owner,
              e = this.getY2AxisLabelPosition();
          return t.config.axis_rotated ? e.isInner ? "1.2em" : "-2.2em" : e.isInner ? "-0.5em" : 15 + (t.config.axis_y2_inner ? 0 : this.getMaxTickWidth("y2") + 15);
        }, t.textAnchorForXAxisLabel = function () {
          var t = this.owner;
          return this.textAnchorForAxisLabel(!t.config.axis_rotated, this.getXAxisLabelPosition());
        }, t.textAnchorForYAxisLabel = function () {
          var t = this.owner;
          return this.textAnchorForAxisLabel(t.config.axis_rotated, this.getYAxisLabelPosition());
        }, t.textAnchorForY2AxisLabel = function () {
          var t = this.owner;
          return this.textAnchorForAxisLabel(t.config.axis_rotated, this.getY2AxisLabelPosition());
        }, t.getMaxTickWidth = function (t, e) {
          var n,
              r,
              i,
              a,
              o = this.owner,
              u = o.config,
              c = 0;
          return e && o.currentMaxTickWidths[t] ? o.currentMaxTickWidths[t] : (o.svg && (n = o.filterTargetsToShow(o.data.targets), "y" === t ? (r = o.y.copy().domain(o.getYDomain(n, "y")), i = this.getYAxis(r, o.yOrient, u.axis_y_tick_format, o.yAxisTickValues, !1, !0, !0)) : "y2" === t ? (r = o.y2.copy().domain(o.getYDomain(n, "y2")), i = this.getYAxis(r, o.y2Orient, u.axis_y2_tick_format, o.y2AxisTickValues, !1, !0, !0)) : (r = o.x.copy().domain(o.getXDomain(n)), i = this.getXAxis(r, o.xOrient, o.xAxisTickFormat, o.xAxisTickValues, !1, !0, !0), this.updateXAxisTickValues(n, i)), (a = o.d3.select("body").append("div").classed("c3", !0)).append("svg").style("visibility", "hidden").style("position", "fixed").style("top", 0).style("left", 0).append("g").call(i).each(function () {
            o.d3.select(this).selectAll("text").each(function () {
              var t = this.getBoundingClientRect();
              c < t.width && (c = t.width);
            }), a.remove();
          })), o.currentMaxTickWidths[t] = c <= 0 ? o.currentMaxTickWidths[t] : c, o.currentMaxTickWidths[t]);
        }, t.updateLabels = function (t) {
          var e = this.owner,
              n = e.main.select("." + r.axisX + " ." + r.axisXLabel),
              i = e.main.select("." + r.axisY + " ." + r.axisYLabel),
              a = e.main.select("." + r.axisY2 + " ." + r.axisY2Label);
          (t ? n.transition() : n).attr("x", this.xForXAxisLabel.bind(this)).attr("dx", this.dxForXAxisLabel.bind(this)).attr("dy", this.dyForXAxisLabel.bind(this)).text(this.textForXAxisLabel.bind(this)), (t ? i.transition() : i).attr("x", this.xForYAxisLabel.bind(this)).attr("dx", this.dxForYAxisLabel.bind(this)).attr("dy", this.dyForYAxisLabel.bind(this)).text(this.textForYAxisLabel.bind(this)), (t ? a.transition() : a).attr("x", this.xForY2AxisLabel.bind(this)).attr("dx", this.dxForY2AxisLabel.bind(this)).attr("dy", this.dyForY2AxisLabel.bind(this)).text(this.textForY2AxisLabel.bind(this));
        }, t.getPadding = function (t, e, n, r) {
          var i = "number" == typeof t ? t : t[e];
          return u(i) ? "ratio" === t.unit ? t[e] * r : this.convertPixelsToAxisPadding(i, r) : n;
        }, t.convertPixelsToAxisPadding = function (t, e) {
          var n = this.owner,
              r = n.config.axis_rotated ? n.width : n.height;
          return e * (t / r);
        }, t.generateTickValues = function (t, e, n) {
          var r,
              i,
              a,
              o,
              u,
              s,
              f,
              l = t;
          if (e) if (1 === (r = c(e) ? e() : e)) l = [t[0]];else if (2 === r) l = [t[0], t[t.length - 1]];else if (r > 2) {
            for (o = r - 2, i = t[0], a = t[t.length - 1], u = (a - i) / (o + 1), l = [i], s = 0; s < o; s++) {
              f = +i + u * (s + 1), l.push(n ? new Date(f) : f);
            }

            l.push(a);
          }
          return n || (l = l.sort(function (t, e) {
            return t - e;
          })), l;
        }, t.generateTransitions = function (t) {
          var e = this.owner,
              n = e.axes;
          return {
            axisX: t ? n.x.transition().duration(t) : n.x,
            axisY: t ? n.y.transition().duration(t) : n.y,
            axisY2: t ? n.y2.transition().duration(t) : n.y2,
            axisSubX: t ? n.subx.transition().duration(t) : n.subx
          };
        }, t.redraw = function (t, e) {
          var n = this.owner,
              r = t ? n.d3.transition().duration(t) : null;
          n.axes.x.style("opacity", e ? 0 : 1).call(n.xAxis, r), n.axes.y.style("opacity", e ? 0 : 1).call(n.yAxis, r), n.axes.y2.style("opacity", e ? 0 : 1).call(n.y2Axis, r), n.axes.subx.style("opacity", e ? 0 : 1).call(n.subXAxis, r);
        };
        var A,
            T,
            P = {
          version: "0.6.1"
        };

        function C(t) {
          var e = this.internal = new M(this);
          e.loadConfig(t), e.beforeInit(t), e.init(), e.afterInit(t), function t(e, n, r) {
            Object.keys(e).forEach(function (i) {
              n[i] = e[i].bind(r), Object.keys(e[i]).length > 0 && t(e[i], n[i], r);
            });
          }(A, this, this);
        }

        function M(t) {
          var e = this;
          e.d3 = window.d3 ? window.d3 : n(33), e.api = t, e.config = e.getDefaultConfig(), e.data = {}, e.cache = {}, e.axes = {};
        }

        return P.generate = function (t) {
          return new C(t);
        }, P.chart = {
          fn: C.prototype,
          internal: {
            fn: M.prototype
          }
        }, A = P.chart.fn, (T = P.chart.internal.fn).beforeInit = function () {}, T.afterInit = function () {}, T.init = function () {
          var t = this,
              e = t.config;
          if (t.initParams(), e.data_url) t.convertUrlToData(e.data_url, e.data_mimeType, e.data_headers, e.data_keys, t.initWithData);else if (e.data_json) t.initWithData(t.convertJsonToData(e.data_json, e.data_keys));else if (e.data_rows) t.initWithData(t.convertRowsToData(e.data_rows));else {
            if (!e.data_columns) throw Error("url or json or rows or columns is required.");
            t.initWithData(t.convertColumnsToData(e.data_columns));
          }
        }, T.initParams = function () {
          var t = this,
              e = t.d3,
              n = t.config;
          t.clipId = "c3-" + +new Date() + "-clip", t.clipIdForXAxis = t.clipId + "-xaxis", t.clipIdForYAxis = t.clipId + "-yaxis", t.clipIdForGrid = t.clipId + "-grid", t.clipIdForSubchart = t.clipId + "-subchart", t.clipPath = t.getClipPath(t.clipId), t.clipPathForXAxis = t.getClipPath(t.clipIdForXAxis), t.clipPathForYAxis = t.getClipPath(t.clipIdForYAxis), t.clipPathForGrid = t.getClipPath(t.clipIdForGrid), t.clipPathForSubchart = t.getClipPath(t.clipIdForSubchart), t.dragStart = null, t.dragging = !1, t.flowing = !1, t.cancelClick = !1, t.mouseover = !1, t.transiting = !1, t.color = t.generateColor(), t.levelColor = t.generateLevelColor(), t.dataTimeParse = (n.data_xLocaltime ? e.timeParse : e.utcParse)(t.config.data_xFormat), t.axisTimeFormat = n.axis_x_localtime ? e.timeFormat : e.utcFormat, t.defaultAxisTimeFormat = function (t) {
            return t.getMilliseconds() ? e.timeFormat(".%L")(t) : t.getSeconds() ? e.timeFormat(":%S")(t) : t.getMinutes() ? e.timeFormat("%I:%M")(t) : t.getHours() ? e.timeFormat("%I %p")(t) : t.getDay() && 1 !== t.getDate() ? e.timeFormat("%-m/%-d")(t) : 1 !== t.getDate() ? e.timeFormat("%-m/%-d")(t) : t.getMonth() ? e.timeFormat("%-m/%-d")(t) : e.timeFormat("%Y/%-m/%-d")(t);
          }, t.hiddenTargetIds = [], t.hiddenLegendIds = [], t.focusedTargetIds = [], t.defocusedTargetIds = [], t.xOrient = n.axis_rotated ? n.axis_x_inner ? "right" : "left" : n.axis_x_inner ? "top" : "bottom", t.yOrient = n.axis_rotated ? n.axis_y_inner ? "top" : "bottom" : n.axis_y_inner ? "right" : "left", t.y2Orient = n.axis_rotated ? n.axis_y2_inner ? "bottom" : "top" : n.axis_y2_inner ? "left" : "right", t.subXOrient = n.axis_rotated ? "left" : "bottom", t.isLegendRight = "right" === n.legend_position, t.isLegendInset = "inset" === n.legend_position, t.isLegendTop = "top-left" === n.legend_inset_anchor || "top-right" === n.legend_inset_anchor, t.isLegendLeft = "top-left" === n.legend_inset_anchor || "bottom-left" === n.legend_inset_anchor, t.legendStep = 0, t.legendItemWidth = 0, t.legendItemHeight = 0, t.currentMaxTickWidths = {
            x: 0,
            y: 0,
            y2: 0
          }, t.rotated_padding_left = 30, t.rotated_padding_right = n.axis_rotated && !n.axis_x_show ? 0 : 30, t.rotated_padding_top = 5, t.withoutFadeIn = {}, t.intervalForObserveInserted = void 0, t.axes.subx = e.selectAll([]);
        }, T.initChartElements = function () {
          this.initBar && this.initBar(), this.initLine && this.initLine(), this.initArc && this.initArc(), this.initGauge && this.initGauge(), this.initText && this.initText();
        }, T.initWithData = function (t) {
          var e,
              n,
              i = this,
              a = i.d3,
              o = i.config,
              u = !0;
          i.axis = new S(i), o.bindto ? "function" == typeof o.bindto.node ? i.selectChart = o.bindto : i.selectChart = a.select(o.bindto) : i.selectChart = a.selectAll([]), i.selectChart.empty() && (i.selectChart = a.select(document.createElement("div")).style("opacity", 0), i.observeInserted(i.selectChart), u = !1), i.selectChart.html("").classed("c3", !0), i.data.xs = {}, i.data.targets = i.convertDataToTargets(t), o.data_filter && (i.data.targets = i.data.targets.filter(o.data_filter)), o.data_hide && i.addHiddenTargetIds(!0 === o.data_hide ? i.mapToIds(i.data.targets) : o.data_hide), o.legend_hide && i.addHiddenLegendIds(!0 === o.legend_hide ? i.mapToIds(i.data.targets) : o.legend_hide), i.updateSizes(), i.updateScales(), i.x.domain(a.extent(i.getXDomain(i.data.targets))), i.y.domain(i.getYDomain(i.data.targets, "y")), i.y2.domain(i.getYDomain(i.data.targets, "y2")), i.subX.domain(i.x.domain()), i.subY.domain(i.y.domain()), i.subY2.domain(i.y2.domain()), i.orgXDomain = i.x.domain(), i.svg = i.selectChart.append("svg").style("overflow", "hidden").on("mouseenter", function () {
            return o.onmouseover.call(i);
          }).on("mouseleave", function () {
            return o.onmouseout.call(i);
          }), i.config.svg_classname && i.svg.attr("class", i.config.svg_classname), e = i.svg.append("defs"), i.clipChart = i.appendClip(e, i.clipId), i.clipXAxis = i.appendClip(e, i.clipIdForXAxis), i.clipYAxis = i.appendClip(e, i.clipIdForYAxis), i.clipGrid = i.appendClip(e, i.clipIdForGrid), i.clipSubchart = i.appendClip(e, i.clipIdForSubchart), i.updateSvgSize(), n = i.main = i.svg.append("g").attr("transform", i.getTranslate("main")), i.initPie && i.initPie(), i.initSubchart && i.initSubchart(), i.initTooltip && i.initTooltip(), i.initLegend && i.initLegend(), i.initTitle && i.initTitle(), i.initZoom && i.initZoom(), i.initSubchartBrush && i.initSubchartBrush(), n.append("text").attr("class", r.text + " " + r.empty).attr("text-anchor", "middle").attr("dominant-baseline", "middle"), i.initRegion(), i.initGrid(), n.append("g").attr("clip-path", i.clipPath).attr("class", r.chart), o.grid_lines_front && i.initGridLines(), i.initChartElements(), i.axis.init(), i.updateTargets(i.data.targets), i.initEventRect(), o.axis_x_selection && i.brush.selectionAsValue(i.getDefaultSelection()), u && (i.updateDimension(), i.config.oninit.call(i), i.redraw({
            withTransition: !1,
            withTransform: !0,
            withUpdateXDomain: !0,
            withUpdateOrgXDomain: !0,
            withTransitionForAxis: !1
          })), i.bindResize(), i.api.element = i.selectChart.node();
        }, T.smoothLines = function (t, e) {
          var n = this;
          "grid" === e && t.each(function () {
            var t = n.d3.select(this),
                e = t.attr("x1"),
                r = t.attr("x2"),
                i = t.attr("y1"),
                a = t.attr("y2");
            t.attr({
              x1: Math.ceil(e),
              x2: Math.ceil(r),
              y1: Math.ceil(i),
              y2: Math.ceil(a)
            });
          });
        }, T.updateSizes = function () {
          var t = this,
              e = t.config,
              n = t.legend ? t.getLegendHeight() : 0,
              r = t.legend ? t.getLegendWidth() : 0,
              i = t.isLegendRight || t.isLegendInset ? 0 : n,
              a = t.hasArcType(),
              o = e.axis_rotated || a ? 0 : t.getHorizontalAxisHeight("x"),
              u = e.subchart_show && !a ? e.subchart_size_height + o : 0;
          t.currentWidth = t.getCurrentWidth(), t.currentHeight = t.getCurrentHeight(), t.margin = e.axis_rotated ? {
            top: t.getHorizontalAxisHeight("y2") + t.getCurrentPaddingTop(),
            right: a ? 0 : t.getCurrentPaddingRight(),
            bottom: t.getHorizontalAxisHeight("y") + i + t.getCurrentPaddingBottom(),
            left: u + (a ? 0 : t.getCurrentPaddingLeft())
          } : {
            top: 4 + t.getCurrentPaddingTop(),
            right: a ? 0 : t.getCurrentPaddingRight(),
            bottom: o + u + i + t.getCurrentPaddingBottom(),
            left: a ? 0 : t.getCurrentPaddingLeft()
          }, t.margin2 = e.axis_rotated ? {
            top: t.margin.top,
            right: NaN,
            bottom: 20 + i,
            left: t.rotated_padding_left
          } : {
            top: t.currentHeight - u - i,
            right: NaN,
            bottom: o + i,
            left: t.margin.left
          }, t.margin3 = {
            top: 0,
            right: NaN,
            bottom: 0,
            left: 0
          }, t.updateSizeForLegend && t.updateSizeForLegend(n, r), t.width = t.currentWidth - t.margin.left - t.margin.right, t.height = t.currentHeight - t.margin.top - t.margin.bottom, t.width < 0 && (t.width = 0), t.height < 0 && (t.height = 0), t.width2 = e.axis_rotated ? t.margin.left - t.rotated_padding_left - t.rotated_padding_right : t.width, t.height2 = e.axis_rotated ? t.height : t.currentHeight - t.margin2.top - t.margin2.bottom, t.width2 < 0 && (t.width2 = 0), t.height2 < 0 && (t.height2 = 0), t.arcWidth = t.width - (t.isLegendRight ? r + 10 : 0), t.arcHeight = t.height - (t.isLegendRight ? 0 : 10), t.hasType("gauge") && !e.gauge_fullCircle && (t.arcHeight += t.height - t.getGaugeLabelHeight()), t.updateRadius && t.updateRadius(), t.isLegendRight && a && (t.margin3.left = t.arcWidth / 2 + 1.1 * t.radiusExpanded);
        }, T.updateTargets = function (t) {
          var e = this;
          e.updateTargetsForText(t), e.updateTargetsForBar(t), e.updateTargetsForLine(t), e.hasArcType() && e.updateTargetsForArc && e.updateTargetsForArc(t), e.updateTargetsForSubchart && e.updateTargetsForSubchart(t), e.showTargets();
        }, T.showTargets = function () {
          var t = this;
          t.svg.selectAll("." + r.target).filter(function (e) {
            return t.isTargetToShow(e.id);
          }).transition().duration(t.config.transition_duration).style("opacity", 1);
        }, T.redraw = function (t, e) {
          var n,
              i,
              a,
              o,
              u,
              c,
              s,
              f,
              l,
              d,
              h,
              g,
              p,
              _,
              x,
              v,
              b,
              m,
              w,
              S,
              A,
              T,
              P,
              C,
              M,
              L,
              E,
              O,
              k,
              V,
              G,
              R = this,
              I = R.main,
              N = R.d3,
              D = R.config,
              F = R.getShapeIndices(R.isAreaType),
              z = R.getShapeIndices(R.isBarType),
              j = R.getShapeIndices(R.isLineType),
              X = R.hasArcType(),
              B = R.filterTargetsToShow(R.data.targets),
              H = R.xv.bind(R);

          if (n = y(t = t || {}, "withY", !0), i = y(t, "withSubchart", !0), a = y(t, "withTransition", !0), c = y(t, "withTransform", !1), s = y(t, "withUpdateXDomain", !1), f = y(t, "withUpdateOrgXDomain", !1), l = y(t, "withTrimXDomain", !0), p = y(t, "withUpdateXAxis", s), d = y(t, "withLegend", !1), h = y(t, "withEventRect", !0), g = y(t, "withDimension", !0), o = y(t, "withTransitionForExit", a), u = y(t, "withTransitionForAxis", a), w = a ? D.transition_duration : 0, S = o ? w : 0, A = u ? w : 0, e = e || R.axis.generateTransitions(A), d && D.legend_show ? R.updateLegend(R.mapToIds(R.data.targets), t, e) : g && R.updateDimension(!0), R.isCategorized() && 0 === B.length && R.x.domain([0, R.axes.x.selectAll(".tick").size()]), B.length ? (R.updateXDomain(B, s, f, l), D.axis_x_tick_values || (L = R.axis.updateXAxisTickValues(B))) : (R.xAxis.tickValues([]), R.subXAxis.tickValues([])), D.zoom_rescale && !t.flow && (k = R.x.orgDomain()), R.y.domain(R.getYDomain(B, "y", k)), R.y2.domain(R.getYDomain(B, "y2", k)), !D.axis_y_tick_values && D.axis_y_tick_count && R.yAxis.tickValues(R.axis.generateTickValues(R.y.domain(), D.axis_y_tick_count)), !D.axis_y2_tick_values && D.axis_y2_tick_count && R.y2Axis.tickValues(R.axis.generateTickValues(R.y2.domain(), D.axis_y2_tick_count)), R.axis.redraw(A, X), R.axis.updateLabels(a), (s || p) && B.length) if (D.axis_x_tick_culling && L) {
            for (E = 1; E < L.length; E++) {
              if (L.length / E < D.axis_x_tick_culling_max) {
                O = E;
                break;
              }
            }

            R.svg.selectAll("." + r.axisX + " .tick text").each(function (t) {
              var e = L.indexOf(t);
              e >= 0 && N.select(this).style("display", e % O ? "none" : "block");
            });
          } else R.svg.selectAll("." + r.axisX + " .tick text").style("display", "block");
          _ = R.generateDrawArea ? R.generateDrawArea(F, !1) : void 0, x = R.generateDrawBar ? R.generateDrawBar(z) : void 0, v = R.generateDrawLine ? R.generateDrawLine(j, !1) : void 0, b = R.generateXYForText(F, z, j, !0), m = R.generateXYForText(F, z, j, !1), R.updateCircleY(), V = (R.config.axis_rotated ? R.circleY : R.circleX).bind(R), G = (R.config.axis_rotated ? R.circleX : R.circleY).bind(R), n && (R.subY.domain(R.getYDomain(B, "y")), R.subY2.domain(R.getYDomain(B, "y2"))), R.updateXgridFocus(), I.select("text." + r.text + "." + r.empty).attr("x", R.width / 2).attr("y", R.height / 2).text(D.data_empty_label_text).transition().style("opacity", B.length ? 0 : 1), h && R.redrawEventRect(), R.updateGrid(w), R.updateRegion(w), R.updateBar(S), R.updateLine(S), R.updateArea(S), R.updateCircle(V, G), R.hasDataLabel() && R.updateText(b, m, S), R.redrawTitle && R.redrawTitle(), R.redrawArc && R.redrawArc(w, S, c), R.redrawSubchart && R.redrawSubchart(i, e, w, S, F, z, j), I.selectAll("." + r.selectedCircles).filter(R.isBarType.bind(R)).selectAll("circle").remove(), t.flow && (C = R.generateFlow({
            targets: B,
            flow: t.flow,
            duration: t.flow.duration,
            drawBar: x,
            drawLine: v,
            drawArea: _,
            cx: V,
            cy: G,
            xv: H,
            xForText: b,
            yForText: m
          })), R.isTabVisible() && (w ? (M = N.transition().duration(w), T = [], [R.redrawBar(x, !0, M), R.redrawLine(v, !0, M), R.redrawArea(_, !0, M), R.redrawCircle(V, G, !0, M), R.redrawText(b, m, t.flow, !0, M), R.redrawRegion(!0, M), R.redrawGrid(!0, M)].forEach(function (t) {
            t.forEach(function (t) {
              T.push(t);
            });
          }), P = R.generateWait(), T.forEach(function (t) {
            P.add(t);
          }), P(function () {
            C && C(), D.onrendered && D.onrendered.call(R);
          })) : (R.redrawBar(x), R.redrawLine(v), R.redrawArea(_), R.redrawCircle(V, G), R.redrawText(b, m, t.flow), R.redrawRegion(), R.redrawGrid(), C && C(), D.onrendered && D.onrendered.call(R))), R.mapToIds(R.data.targets).forEach(function (t) {
            R.withoutFadeIn[t] = !0;
          });
        }, T.updateAndRedraw = function (t) {
          var e,
              n = this,
              r = n.config;
          (t = t || {}).withTransition = y(t, "withTransition", !0), t.withTransform = y(t, "withTransform", !1), t.withLegend = y(t, "withLegend", !1), t.withUpdateXDomain = y(t, "withUpdateXDomain", !0), t.withUpdateOrgXDomain = y(t, "withUpdateOrgXDomain", !0), t.withTransitionForExit = !1, t.withTransitionForTransform = y(t, "withTransitionForTransform", t.withTransition), n.updateSizes(), t.withLegend && r.legend_show || (e = n.axis.generateTransitions(t.withTransitionForAxis ? r.transition_duration : 0), n.updateScales(), n.updateSvgSize(), n.transformAll(t.withTransitionForTransform, e)), n.redraw(t, e);
        }, T.redrawWithoutRescale = function () {
          this.redraw({
            withY: !1,
            withSubchart: !1,
            withEventRect: !1,
            withTransitionForAxis: !1
          });
        }, T.isTimeSeries = function () {
          return "timeseries" === this.config.axis_x_type;
        }, T.isCategorized = function () {
          return this.config.axis_x_type.indexOf("categor") >= 0;
        }, T.isCustomX = function () {
          var t = this.config;
          return !this.isTimeSeries() && (t.data_x || x(t.data_xs));
        }, T.isTimeSeriesY = function () {
          return "timeseries" === this.config.axis_y_type;
        }, T.getTranslate = function (t) {
          var e,
              n,
              r = this,
              i = r.config;
          return "main" === t ? (e = g(r.margin.left), n = g(r.margin.top)) : "context" === t ? (e = g(r.margin2.left), n = g(r.margin2.top)) : "legend" === t ? (e = r.margin3.left, n = r.margin3.top) : "x" === t ? (e = 0, n = i.axis_rotated ? 0 : r.height) : "y" === t ? (e = 0, n = i.axis_rotated ? r.height : 0) : "y2" === t ? (e = i.axis_rotated ? 0 : r.width, n = i.axis_rotated ? 1 : 0) : "subx" === t ? (e = 0, n = i.axis_rotated ? 0 : r.height2) : "arc" === t && (e = r.arcWidth / 2, n = r.arcHeight / 2 - (r.hasType("gauge") ? 6 : 0)), "translate(" + e + "," + n + ")";
        }, T.initialOpacity = function (t) {
          return null !== t.value && this.withoutFadeIn[t.id] ? 1 : 0;
        }, T.initialOpacityForCircle = function (t) {
          return null !== t.value && this.withoutFadeIn[t.id] ? this.opacityForCircle(t) : 0;
        }, T.opacityForCircle = function (t) {
          var e = (c(this.config.point_show) ? this.config.point_show(t) : this.config.point_show) ? 1 : 0;
          return u(t.value) ? this.isScatterType(t) ? .5 : e : 0;
        }, T.opacityForText = function () {
          return this.hasDataLabel() ? 1 : 0;
        }, T.xx = function (t) {
          return t ? this.x(t.x) : null;
        }, T.xv = function (t) {
          var e = this,
              n = t.value;
          return e.isTimeSeries() ? n = e.parseDate(t.value) : e.isCategorized() && "string" == typeof t.value && (n = e.config.axis_x_categories.indexOf(t.value)), Math.ceil(e.x(n));
        }, T.yv = function (t) {
          var e = t.axis && "y2" === t.axis ? this.y2 : this.y;
          return Math.ceil(e(t.value));
        }, T.subxx = function (t) {
          return t ? this.subX(t.x) : null;
        }, T.transformMain = function (t, e) {
          var n,
              i,
              a,
              o = this;
          e && e.axisX ? n = e.axisX : (n = o.main.select("." + r.axisX), t && (n = n.transition())), e && e.axisY ? i = e.axisY : (i = o.main.select("." + r.axisY), t && (i = i.transition())), e && e.axisY2 ? a = e.axisY2 : (a = o.main.select("." + r.axisY2), t && (a = a.transition())), (t ? o.main.transition() : o.main).attr("transform", o.getTranslate("main")), n.attr("transform", o.getTranslate("x")), i.attr("transform", o.getTranslate("y")), a.attr("transform", o.getTranslate("y2")), o.main.select("." + r.chartArcs).attr("transform", o.getTranslate("arc"));
        }, T.transformAll = function (t, e) {
          var n = this;
          n.transformMain(t, e), n.config.subchart_show && n.transformContext(t, e), n.legend && n.transformLegend(t);
        }, T.updateSvgSize = function () {
          var t = this,
              e = t.svg.select(".c3-brush .overlay");
          t.svg.attr("width", t.currentWidth).attr("height", t.currentHeight), t.svg.selectAll(["#" + t.clipId, "#" + t.clipIdForGrid]).select("rect").attr("width", t.width).attr("height", t.height), t.svg.select("#" + t.clipIdForXAxis).select("rect").attr("x", t.getXAxisClipX.bind(t)).attr("y", t.getXAxisClipY.bind(t)).attr("width", t.getXAxisClipWidth.bind(t)).attr("height", t.getXAxisClipHeight.bind(t)), t.svg.select("#" + t.clipIdForYAxis).select("rect").attr("x", t.getYAxisClipX.bind(t)).attr("y", t.getYAxisClipY.bind(t)).attr("width", t.getYAxisClipWidth.bind(t)).attr("height", t.getYAxisClipHeight.bind(t)), t.svg.select("#" + t.clipIdForSubchart).select("rect").attr("width", t.width).attr("height", e.size() ? e.attr("height") : 0), t.selectChart.style("max-height", t.currentHeight + "px");
        }, T.updateDimension = function (t) {
          var e = this;
          t || (e.config.axis_rotated ? (e.axes.x.call(e.xAxis), e.axes.subx.call(e.subXAxis)) : (e.axes.y.call(e.yAxis), e.axes.y2.call(e.y2Axis))), e.updateSizes(), e.updateScales(), e.updateSvgSize(), e.transformAll(!1);
        }, T.observeInserted = function (t) {
          var e,
              n = this;
          "undefined" != typeof MutationObserver ? (e = new MutationObserver(function (r) {
            r.forEach(function (r) {
              "childList" === r.type && r.previousSibling && (e.disconnect(), n.intervalForObserveInserted = window.setInterval(function () {
                t.node().parentNode && (window.clearInterval(n.intervalForObserveInserted), n.updateDimension(), n.brush && n.brush.update(), n.config.oninit.call(n), n.redraw({
                  withTransform: !0,
                  withUpdateXDomain: !0,
                  withUpdateOrgXDomain: !0,
                  withTransition: !1,
                  withTransitionForTransform: !1,
                  withLegend: !0
                }), t.transition().style("opacity", 1));
              }, 10));
            });
          })).observe(t.node(), {
            attributes: !0,
            childList: !0,
            characterData: !0
          }) : window.console.error("MutationObserver not defined.");
        }, T.bindResize = function () {
          var t = this,
              e = t.config;
          if (t.resizeFunction = t.generateResize(), t.resizeFunction.add(function () {
            e.onresize.call(t);
          }), e.resize_auto && t.resizeFunction.add(function () {
            void 0 !== t.resizeTimeout && window.clearTimeout(t.resizeTimeout), t.resizeTimeout = window.setTimeout(function () {
              delete t.resizeTimeout, t.updateAndRedraw({
                withUpdateXDomain: !1,
                withUpdateOrgXDomain: !1,
                withTransition: !1,
                withTransitionForTransform: !1,
                withLegend: !0
              }), t.brush && t.brush.update();
            }, 100);
          }), t.resizeFunction.add(function () {
            e.onresized.call(t);
          }), t.resizeIfElementDisplayed = function () {
            null != t.api && t.api.element.offsetParent && t.resizeFunction();
          }, window.attachEvent) window.attachEvent("onresize", t.resizeIfElementDisplayed);else if (window.addEventListener) window.addEventListener("resize", t.resizeIfElementDisplayed, !1);else {
            var n = window.onresize;
            n ? n.add && n.remove || (n = t.generateResize()).add(window.onresize) : n = t.generateResize(), n.add(t.resizeFunction), window.onresize = function () {
              t.api.element.offsetParent && n();
            };
          }
        }, T.generateResize = function () {
          var t = [];

          function e() {
            t.forEach(function (t) {
              t();
            });
          }

          return e.add = function (e) {
            t.push(e);
          }, e.remove = function (e) {
            for (var n = 0; n < t.length; n++) {
              if (t[n] === e) {
                t.splice(n, 1);
                break;
              }
            }
          }, e;
        }, T.endall = function (t, e) {
          var n = 0;
          t.each(function () {
            ++n;
          }).on("end", function () {
            --n || e.apply(this, arguments);
          });
        }, T.generateWait = function () {
          var t = [],
              e = function e(_e3) {
            var n = setInterval(function () {
              var r = 0;
              t.forEach(function (t) {
                if (t.empty()) r += 1;else try {
                  t.transition();
                } catch (t) {
                  r += 1;
                }
              }), r === t.length && (clearInterval(n), _e3 && _e3());
            }, 50);
          };

          return e.add = function (e) {
            t.push(e);
          }, e;
        }, T.parseDate = function (t) {
          var e;
          return t instanceof Date ? e = t : "string" == typeof t ? e = this.dataTimeParse(t) : "object" === (void 0 === t ? "undefined" : i(t)) ? e = new Date(+t) : "number" != typeof t || isNaN(t) || (e = new Date(+t)), e && !isNaN(+e) || window.console.error("Failed to parse x '" + t + "' to Date object"), e;
        }, T.isTabVisible = function () {
          var t;
          return void 0 !== document.hidden ? t = "hidden" : void 0 !== document.mozHidden ? t = "mozHidden" : void 0 !== document.msHidden ? t = "msHidden" : void 0 !== document.webkitHidden && (t = "webkitHidden"), !document[t];
        }, T.isValue = u, T.isFunction = c, T.isString = f, T.isUndefined = l, T.isDefined = d, T.ceil10 = h, T.asHalfPixel = g, T.diffDomain = p, T.isEmpty = _, T.notEmpty = x, T.notEmpty = x, T.getOption = y, T.hasValue = v, T.sanitise = b, T.getPathBox = m, T.CLASS = r, Function.prototype.bind || (Function.prototype.bind = function (t) {
          if ("function" != typeof this) throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable");

          var e = Array.prototype.slice.call(arguments, 1),
              n = this,
              r = function r() {},
              i = function i() {
            return n.apply(this instanceof r ? this : t, e.concat(Array.prototype.slice.call(arguments)));
          };

          return r.prototype = this.prototype, i.prototype = new r(), i;
        }), "SVGPathSeg" in window || (window.SVGPathSeg = function (t, e, n) {
          this.pathSegType = t, this.pathSegTypeAsLetter = e, this._owningPathSegList = n;
        }, window.SVGPathSeg.prototype.classname = "SVGPathSeg", window.SVGPathSeg.PATHSEG_UNKNOWN = 0, window.SVGPathSeg.PATHSEG_CLOSEPATH = 1, window.SVGPathSeg.PATHSEG_MOVETO_ABS = 2, window.SVGPathSeg.PATHSEG_MOVETO_REL = 3, window.SVGPathSeg.PATHSEG_LINETO_ABS = 4, window.SVGPathSeg.PATHSEG_LINETO_REL = 5, window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_ABS = 6, window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_REL = 7, window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_ABS = 8, window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_REL = 9, window.SVGPathSeg.PATHSEG_ARC_ABS = 10, window.SVGPathSeg.PATHSEG_ARC_REL = 11, window.SVGPathSeg.PATHSEG_LINETO_HORIZONTAL_ABS = 12, window.SVGPathSeg.PATHSEG_LINETO_HORIZONTAL_REL = 13, window.SVGPathSeg.PATHSEG_LINETO_VERTICAL_ABS = 14, window.SVGPathSeg.PATHSEG_LINETO_VERTICAL_REL = 15, window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_SMOOTH_ABS = 16, window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_SMOOTH_REL = 17, window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_SMOOTH_ABS = 18, window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_SMOOTH_REL = 19, window.SVGPathSeg.prototype._segmentChanged = function () {
          this._owningPathSegList && this._owningPathSegList.segmentChanged(this);
        }, window.SVGPathSegClosePath = function (t) {
          window.SVGPathSeg.call(this, window.SVGPathSeg.PATHSEG_CLOSEPATH, "z", t);
        }, window.SVGPathSegClosePath.prototype = Object.create(window.SVGPathSeg.prototype), window.SVGPathSegClosePath.prototype.toString = function () {
          return "[object SVGPathSegClosePath]";
        }, window.SVGPathSegClosePath.prototype._asPathString = function () {
          return this.pathSegTypeAsLetter;
        }, window.SVGPathSegClosePath.prototype.clone = function () {
          return new window.SVGPathSegClosePath(void 0);
        }, window.SVGPathSegMovetoAbs = function (t, e, n) {
          window.SVGPathSeg.call(this, window.SVGPathSeg.PATHSEG_MOVETO_ABS, "M", t), this._x = e, this._y = n;
        }, window.SVGPathSegMovetoAbs.prototype = Object.create(window.SVGPathSeg.prototype), window.SVGPathSegMovetoAbs.prototype.toString = function () {
          return "[object SVGPathSegMovetoAbs]";
        }, window.SVGPathSegMovetoAbs.prototype._asPathString = function () {
          return this.pathSegTypeAsLetter + " " + this._x + " " + this._y;
        }, window.SVGPathSegMovetoAbs.prototype.clone = function () {
          return new window.SVGPathSegMovetoAbs(void 0, this._x, this._y);
        }, Object.defineProperty(window.SVGPathSegMovetoAbs.prototype, "x", {
          get: function get() {
            return this._x;
          },
          set: function set(t) {
            this._x = t, this._segmentChanged();
          },
          enumerable: !0
        }), Object.defineProperty(window.SVGPathSegMovetoAbs.prototype, "y", {
          get: function get() {
            return this._y;
          },
          set: function set(t) {
            this._y = t, this._segmentChanged();
          },
          enumerable: !0
        }), window.SVGPathSegMovetoRel = function (t, e, n) {
          window.SVGPathSeg.call(this, window.SVGPathSeg.PATHSEG_MOVETO_REL, "m", t), this._x = e, this._y = n;
        }, window.SVGPathSegMovetoRel.prototype = Object.create(window.SVGPathSeg.prototype), window.SVGPathSegMovetoRel.prototype.toString = function () {
          return "[object SVGPathSegMovetoRel]";
        }, window.SVGPathSegMovetoRel.prototype._asPathString = function () {
          return this.pathSegTypeAsLetter + " " + this._x + " " + this._y;
        }, window.SVGPathSegMovetoRel.prototype.clone = function () {
          return new window.SVGPathSegMovetoRel(void 0, this._x, this._y);
        }, Object.defineProperty(window.SVGPathSegMovetoRel.prototype, "x", {
          get: function get() {
            return this._x;
          },
          set: function set(t) {
            this._x = t, this._segmentChanged();
          },
          enumerable: !0
        }), Object.defineProperty(window.SVGPathSegMovetoRel.prototype, "y", {
          get: function get() {
            return this._y;
          },
          set: function set(t) {
            this._y = t, this._segmentChanged();
          },
          enumerable: !0
        }), window.SVGPathSegLinetoAbs = function (t, e, n) {
          window.SVGPathSeg.call(this, window.SVGPathSeg.PATHSEG_LINETO_ABS, "L", t), this._x = e, this._y = n;
        }, window.SVGPathSegLinetoAbs.prototype = Object.create(window.SVGPathSeg.prototype), window.SVGPathSegLinetoAbs.prototype.toString = function () {
          return "[object SVGPathSegLinetoAbs]";
        }, window.SVGPathSegLinetoAbs.prototype._asPathString = function () {
          return this.pathSegTypeAsLetter + " " + this._x + " " + this._y;
        }, window.SVGPathSegLinetoAbs.prototype.clone = function () {
          return new window.SVGPathSegLinetoAbs(void 0, this._x, this._y);
        }, Object.defineProperty(window.SVGPathSegLinetoAbs.prototype, "x", {
          get: function get() {
            return this._x;
          },
          set: function set(t) {
            this._x = t, this._segmentChanged();
          },
          enumerable: !0
        }), Object.defineProperty(window.SVGPathSegLinetoAbs.prototype, "y", {
          get: function get() {
            return this._y;
          },
          set: function set(t) {
            this._y = t, this._segmentChanged();
          },
          enumerable: !0
        }), window.SVGPathSegLinetoRel = function (t, e, n) {
          window.SVGPathSeg.call(this, window.SVGPathSeg.PATHSEG_LINETO_REL, "l", t), this._x = e, this._y = n;
        }, window.SVGPathSegLinetoRel.prototype = Object.create(window.SVGPathSeg.prototype), window.SVGPathSegLinetoRel.prototype.toString = function () {
          return "[object SVGPathSegLinetoRel]";
        }, window.SVGPathSegLinetoRel.prototype._asPathString = function () {
          return this.pathSegTypeAsLetter + " " + this._x + " " + this._y;
        }, window.SVGPathSegLinetoRel.prototype.clone = function () {
          return new window.SVGPathSegLinetoRel(void 0, this._x, this._y);
        }, Object.defineProperty(window.SVGPathSegLinetoRel.prototype, "x", {
          get: function get() {
            return this._x;
          },
          set: function set(t) {
            this._x = t, this._segmentChanged();
          },
          enumerable: !0
        }), Object.defineProperty(window.SVGPathSegLinetoRel.prototype, "y", {
          get: function get() {
            return this._y;
          },
          set: function set(t) {
            this._y = t, this._segmentChanged();
          },
          enumerable: !0
        }), window.SVGPathSegCurvetoCubicAbs = function (t, e, n, r, i, a, o) {
          window.SVGPathSeg.call(this, window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_ABS, "C", t), this._x = e, this._y = n, this._x1 = r, this._y1 = i, this._x2 = a, this._y2 = o;
        }, window.SVGPathSegCurvetoCubicAbs.prototype = Object.create(window.SVGPathSeg.prototype), window.SVGPathSegCurvetoCubicAbs.prototype.toString = function () {
          return "[object SVGPathSegCurvetoCubicAbs]";
        }, window.SVGPathSegCurvetoCubicAbs.prototype._asPathString = function () {
          return this.pathSegTypeAsLetter + " " + this._x1 + " " + this._y1 + " " + this._x2 + " " + this._y2 + " " + this._x + " " + this._y;
        }, window.SVGPathSegCurvetoCubicAbs.prototype.clone = function () {
          return new window.SVGPathSegCurvetoCubicAbs(void 0, this._x, this._y, this._x1, this._y1, this._x2, this._y2);
        }, Object.defineProperty(window.SVGPathSegCurvetoCubicAbs.prototype, "x", {
          get: function get() {
            return this._x;
          },
          set: function set(t) {
            this._x = t, this._segmentChanged();
          },
          enumerable: !0
        }), Object.defineProperty(window.SVGPathSegCurvetoCubicAbs.prototype, "y", {
          get: function get() {
            return this._y;
          },
          set: function set(t) {
            this._y = t, this._segmentChanged();
          },
          enumerable: !0
        }), Object.defineProperty(window.SVGPathSegCurvetoCubicAbs.prototype, "x1", {
          get: function get() {
            return this._x1;
          },
          set: function set(t) {
            this._x1 = t, this._segmentChanged();
          },
          enumerable: !0
        }), Object.defineProperty(window.SVGPathSegCurvetoCubicAbs.prototype, "y1", {
          get: function get() {
            return this._y1;
          },
          set: function set(t) {
            this._y1 = t, this._segmentChanged();
          },
          enumerable: !0
        }), Object.defineProperty(window.SVGPathSegCurvetoCubicAbs.prototype, "x2", {
          get: function get() {
            return this._x2;
          },
          set: function set(t) {
            this._x2 = t, this._segmentChanged();
          },
          enumerable: !0
        }), Object.defineProperty(window.SVGPathSegCurvetoCubicAbs.prototype, "y2", {
          get: function get() {
            return this._y2;
          },
          set: function set(t) {
            this._y2 = t, this._segmentChanged();
          },
          enumerable: !0
        }), window.SVGPathSegCurvetoCubicRel = function (t, e, n, r, i, a, o) {
          window.SVGPathSeg.call(this, window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_REL, "c", t), this._x = e, this._y = n, this._x1 = r, this._y1 = i, this._x2 = a, this._y2 = o;
        }, window.SVGPathSegCurvetoCubicRel.prototype = Object.create(window.SVGPathSeg.prototype), window.SVGPathSegCurvetoCubicRel.prototype.toString = function () {
          return "[object SVGPathSegCurvetoCubicRel]";
        }, window.SVGPathSegCurvetoCubicRel.prototype._asPathString = function () {
          return this.pathSegTypeAsLetter + " " + this._x1 + " " + this._y1 + " " + this._x2 + " " + this._y2 + " " + this._x + " " + this._y;
        }, window.SVGPathSegCurvetoCubicRel.prototype.clone = function () {
          return new window.SVGPathSegCurvetoCubicRel(void 0, this._x, this._y, this._x1, this._y1, this._x2, this._y2);
        }, Object.defineProperty(window.SVGPathSegCurvetoCubicRel.prototype, "x", {
          get: function get() {
            return this._x;
          },
          set: function set(t) {
            this._x = t, this._segmentChanged();
          },
          enumerable: !0
        }), Object.defineProperty(window.SVGPathSegCurvetoCubicRel.prototype, "y", {
          get: function get() {
            return this._y;
          },
          set: function set(t) {
            this._y = t, this._segmentChanged();
          },
          enumerable: !0
        }), Object.defineProperty(window.SVGPathSegCurvetoCubicRel.prototype, "x1", {
          get: function get() {
            return this._x1;
          },
          set: function set(t) {
            this._x1 = t, this._segmentChanged();
          },
          enumerable: !0
        }), Object.defineProperty(window.SVGPathSegCurvetoCubicRel.prototype, "y1", {
          get: function get() {
            return this._y1;
          },
          set: function set(t) {
            this._y1 = t, this._segmentChanged();
          },
          enumerable: !0
        }), Object.defineProperty(window.SVGPathSegCurvetoCubicRel.prototype, "x2", {
          get: function get() {
            return this._x2;
          },
          set: function set(t) {
            this._x2 = t, this._segmentChanged();
          },
          enumerable: !0
        }), Object.defineProperty(window.SVGPathSegCurvetoCubicRel.prototype, "y2", {
          get: function get() {
            return this._y2;
          },
          set: function set(t) {
            this._y2 = t, this._segmentChanged();
          },
          enumerable: !0
        }), window.SVGPathSegCurvetoQuadraticAbs = function (t, e, n, r, i) {
          window.SVGPathSeg.call(this, window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_ABS, "Q", t), this._x = e, this._y = n, this._x1 = r, this._y1 = i;
        }, window.SVGPathSegCurvetoQuadraticAbs.prototype = Object.create(window.SVGPathSeg.prototype), window.SVGPathSegCurvetoQuadraticAbs.prototype.toString = function () {
          return "[object SVGPathSegCurvetoQuadraticAbs]";
        }, window.SVGPathSegCurvetoQuadraticAbs.prototype._asPathString = function () {
          return this.pathSegTypeAsLetter + " " + this._x1 + " " + this._y1 + " " + this._x + " " + this._y;
        }, window.SVGPathSegCurvetoQuadraticAbs.prototype.clone = function () {
          return new window.SVGPathSegCurvetoQuadraticAbs(void 0, this._x, this._y, this._x1, this._y1);
        }, Object.defineProperty(window.SVGPathSegCurvetoQuadraticAbs.prototype, "x", {
          get: function get() {
            return this._x;
          },
          set: function set(t) {
            this._x = t, this._segmentChanged();
          },
          enumerable: !0
        }), Object.defineProperty(window.SVGPathSegCurvetoQuadraticAbs.prototype, "y", {
          get: function get() {
            return this._y;
          },
          set: function set(t) {
            this._y = t, this._segmentChanged();
          },
          enumerable: !0
        }), Object.defineProperty(window.SVGPathSegCurvetoQuadraticAbs.prototype, "x1", {
          get: function get() {
            return this._x1;
          },
          set: function set(t) {
            this._x1 = t, this._segmentChanged();
          },
          enumerable: !0
        }), Object.defineProperty(window.SVGPathSegCurvetoQuadraticAbs.prototype, "y1", {
          get: function get() {
            return this._y1;
          },
          set: function set(t) {
            this._y1 = t, this._segmentChanged();
          },
          enumerable: !0
        }), window.SVGPathSegCurvetoQuadraticRel = function (t, e, n, r, i) {
          window.SVGPathSeg.call(this, window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_REL, "q", t), this._x = e, this._y = n, this._x1 = r, this._y1 = i;
        }, window.SVGPathSegCurvetoQuadraticRel.prototype = Object.create(window.SVGPathSeg.prototype), window.SVGPathSegCurvetoQuadraticRel.prototype.toString = function () {
          return "[object SVGPathSegCurvetoQuadraticRel]";
        }, window.SVGPathSegCurvetoQuadraticRel.prototype._asPathString = function () {
          return this.pathSegTypeAsLetter + " " + this._x1 + " " + this._y1 + " " + this._x + " " + this._y;
        }, window.SVGPathSegCurvetoQuadraticRel.prototype.clone = function () {
          return new window.SVGPathSegCurvetoQuadraticRel(void 0, this._x, this._y, this._x1, this._y1);
        }, Object.defineProperty(window.SVGPathSegCurvetoQuadraticRel.prototype, "x", {
          get: function get() {
            return this._x;
          },
          set: function set(t) {
            this._x = t, this._segmentChanged();
          },
          enumerable: !0
        }), Object.defineProperty(window.SVGPathSegCurvetoQuadraticRel.prototype, "y", {
          get: function get() {
            return this._y;
          },
          set: function set(t) {
            this._y = t, this._segmentChanged();
          },
          enumerable: !0
        }), Object.defineProperty(window.SVGPathSegCurvetoQuadraticRel.prototype, "x1", {
          get: function get() {
            return this._x1;
          },
          set: function set(t) {
            this._x1 = t, this._segmentChanged();
          },
          enumerable: !0
        }), Object.defineProperty(window.SVGPathSegCurvetoQuadraticRel.prototype, "y1", {
          get: function get() {
            return this._y1;
          },
          set: function set(t) {
            this._y1 = t, this._segmentChanged();
          },
          enumerable: !0
        }), window.SVGPathSegArcAbs = function (t, e, n, r, i, a, o, u) {
          window.SVGPathSeg.call(this, window.SVGPathSeg.PATHSEG_ARC_ABS, "A", t), this._x = e, this._y = n, this._r1 = r, this._r2 = i, this._angle = a, this._largeArcFlag = o, this._sweepFlag = u;
        }, window.SVGPathSegArcAbs.prototype = Object.create(window.SVGPathSeg.prototype), window.SVGPathSegArcAbs.prototype.toString = function () {
          return "[object SVGPathSegArcAbs]";
        }, window.SVGPathSegArcAbs.prototype._asPathString = function () {
          return this.pathSegTypeAsLetter + " " + this._r1 + " " + this._r2 + " " + this._angle + " " + (this._largeArcFlag ? "1" : "0") + " " + (this._sweepFlag ? "1" : "0") + " " + this._x + " " + this._y;
        }, window.SVGPathSegArcAbs.prototype.clone = function () {
          return new window.SVGPathSegArcAbs(void 0, this._x, this._y, this._r1, this._r2, this._angle, this._largeArcFlag, this._sweepFlag);
        }, Object.defineProperty(window.SVGPathSegArcAbs.prototype, "x", {
          get: function get() {
            return this._x;
          },
          set: function set(t) {
            this._x = t, this._segmentChanged();
          },
          enumerable: !0
        }), Object.defineProperty(window.SVGPathSegArcAbs.prototype, "y", {
          get: function get() {
            return this._y;
          },
          set: function set(t) {
            this._y = t, this._segmentChanged();
          },
          enumerable: !0
        }), Object.defineProperty(window.SVGPathSegArcAbs.prototype, "r1", {
          get: function get() {
            return this._r1;
          },
          set: function set(t) {
            this._r1 = t, this._segmentChanged();
          },
          enumerable: !0
        }), Object.defineProperty(window.SVGPathSegArcAbs.prototype, "r2", {
          get: function get() {
            return this._r2;
          },
          set: function set(t) {
            this._r2 = t, this._segmentChanged();
          },
          enumerable: !0
        }), Object.defineProperty(window.SVGPathSegArcAbs.prototype, "angle", {
          get: function get() {
            return this._angle;
          },
          set: function set(t) {
            this._angle = t, this._segmentChanged();
          },
          enumerable: !0
        }), Object.defineProperty(window.SVGPathSegArcAbs.prototype, "largeArcFlag", {
          get: function get() {
            return this._largeArcFlag;
          },
          set: function set(t) {
            this._largeArcFlag = t, this._segmentChanged();
          },
          enumerable: !0
        }), Object.defineProperty(window.SVGPathSegArcAbs.prototype, "sweepFlag", {
          get: function get() {
            return this._sweepFlag;
          },
          set: function set(t) {
            this._sweepFlag = t, this._segmentChanged();
          },
          enumerable: !0
        }), window.SVGPathSegArcRel = function (t, e, n, r, i, a, o, u) {
          window.SVGPathSeg.call(this, window.SVGPathSeg.PATHSEG_ARC_REL, "a", t), this._x = e, this._y = n, this._r1 = r, this._r2 = i, this._angle = a, this._largeArcFlag = o, this._sweepFlag = u;
        }, window.SVGPathSegArcRel.prototype = Object.create(window.SVGPathSeg.prototype), window.SVGPathSegArcRel.prototype.toString = function () {
          return "[object SVGPathSegArcRel]";
        }, window.SVGPathSegArcRel.prototype._asPathString = function () {
          return this.pathSegTypeAsLetter + " " + this._r1 + " " + this._r2 + " " + this._angle + " " + (this._largeArcFlag ? "1" : "0") + " " + (this._sweepFlag ? "1" : "0") + " " + this._x + " " + this._y;
        }, window.SVGPathSegArcRel.prototype.clone = function () {
          return new window.SVGPathSegArcRel(void 0, this._x, this._y, this._r1, this._r2, this._angle, this._largeArcFlag, this._sweepFlag);
        }, Object.defineProperty(window.SVGPathSegArcRel.prototype, "x", {
          get: function get() {
            return this._x;
          },
          set: function set(t) {
            this._x = t, this._segmentChanged();
          },
          enumerable: !0
        }), Object.defineProperty(window.SVGPathSegArcRel.prototype, "y", {
          get: function get() {
            return this._y;
          },
          set: function set(t) {
            this._y = t, this._segmentChanged();
          },
          enumerable: !0
        }), Object.defineProperty(window.SVGPathSegArcRel.prototype, "r1", {
          get: function get() {
            return this._r1;
          },
          set: function set(t) {
            this._r1 = t, this._segmentChanged();
          },
          enumerable: !0
        }), Object.defineProperty(window.SVGPathSegArcRel.prototype, "r2", {
          get: function get() {
            return this._r2;
          },
          set: function set(t) {
            this._r2 = t, this._segmentChanged();
          },
          enumerable: !0
        }), Object.defineProperty(window.SVGPathSegArcRel.prototype, "angle", {
          get: function get() {
            return this._angle;
          },
          set: function set(t) {
            this._angle = t, this._segmentChanged();
          },
          enumerable: !0
        }), Object.defineProperty(window.SVGPathSegArcRel.prototype, "largeArcFlag", {
          get: function get() {
            return this._largeArcFlag;
          },
          set: function set(t) {
            this._largeArcFlag = t, this._segmentChanged();
          },
          enumerable: !0
        }), Object.defineProperty(window.SVGPathSegArcRel.prototype, "sweepFlag", {
          get: function get() {
            return this._sweepFlag;
          },
          set: function set(t) {
            this._sweepFlag = t, this._segmentChanged();
          },
          enumerable: !0
        }), window.SVGPathSegLinetoHorizontalAbs = function (t, e) {
          window.SVGPathSeg.call(this, window.SVGPathSeg.PATHSEG_LINETO_HORIZONTAL_ABS, "H", t), this._x = e;
        }, window.SVGPathSegLinetoHorizontalAbs.prototype = Object.create(window.SVGPathSeg.prototype), window.SVGPathSegLinetoHorizontalAbs.prototype.toString = function () {
          return "[object SVGPathSegLinetoHorizontalAbs]";
        }, window.SVGPathSegLinetoHorizontalAbs.prototype._asPathString = function () {
          return this.pathSegTypeAsLetter + " " + this._x;
        }, window.SVGPathSegLinetoHorizontalAbs.prototype.clone = function () {
          return new window.SVGPathSegLinetoHorizontalAbs(void 0, this._x);
        }, Object.defineProperty(window.SVGPathSegLinetoHorizontalAbs.prototype, "x", {
          get: function get() {
            return this._x;
          },
          set: function set(t) {
            this._x = t, this._segmentChanged();
          },
          enumerable: !0
        }), window.SVGPathSegLinetoHorizontalRel = function (t, e) {
          window.SVGPathSeg.call(this, window.SVGPathSeg.PATHSEG_LINETO_HORIZONTAL_REL, "h", t), this._x = e;
        }, window.SVGPathSegLinetoHorizontalRel.prototype = Object.create(window.SVGPathSeg.prototype), window.SVGPathSegLinetoHorizontalRel.prototype.toString = function () {
          return "[object SVGPathSegLinetoHorizontalRel]";
        }, window.SVGPathSegLinetoHorizontalRel.prototype._asPathString = function () {
          return this.pathSegTypeAsLetter + " " + this._x;
        }, window.SVGPathSegLinetoHorizontalRel.prototype.clone = function () {
          return new window.SVGPathSegLinetoHorizontalRel(void 0, this._x);
        }, Object.defineProperty(window.SVGPathSegLinetoHorizontalRel.prototype, "x", {
          get: function get() {
            return this._x;
          },
          set: function set(t) {
            this._x = t, this._segmentChanged();
          },
          enumerable: !0
        }), window.SVGPathSegLinetoVerticalAbs = function (t, e) {
          window.SVGPathSeg.call(this, window.SVGPathSeg.PATHSEG_LINETO_VERTICAL_ABS, "V", t), this._y = e;
        }, window.SVGPathSegLinetoVerticalAbs.prototype = Object.create(window.SVGPathSeg.prototype), window.SVGPathSegLinetoVerticalAbs.prototype.toString = function () {
          return "[object SVGPathSegLinetoVerticalAbs]";
        }, window.SVGPathSegLinetoVerticalAbs.prototype._asPathString = function () {
          return this.pathSegTypeAsLetter + " " + this._y;
        }, window.SVGPathSegLinetoVerticalAbs.prototype.clone = function () {
          return new window.SVGPathSegLinetoVerticalAbs(void 0, this._y);
        }, Object.defineProperty(window.SVGPathSegLinetoVerticalAbs.prototype, "y", {
          get: function get() {
            return this._y;
          },
          set: function set(t) {
            this._y = t, this._segmentChanged();
          },
          enumerable: !0
        }), window.SVGPathSegLinetoVerticalRel = function (t, e) {
          window.SVGPathSeg.call(this, window.SVGPathSeg.PATHSEG_LINETO_VERTICAL_REL, "v", t), this._y = e;
        }, window.SVGPathSegLinetoVerticalRel.prototype = Object.create(window.SVGPathSeg.prototype), window.SVGPathSegLinetoVerticalRel.prototype.toString = function () {
          return "[object SVGPathSegLinetoVerticalRel]";
        }, window.SVGPathSegLinetoVerticalRel.prototype._asPathString = function () {
          return this.pathSegTypeAsLetter + " " + this._y;
        }, window.SVGPathSegLinetoVerticalRel.prototype.clone = function () {
          return new window.SVGPathSegLinetoVerticalRel(void 0, this._y);
        }, Object.defineProperty(window.SVGPathSegLinetoVerticalRel.prototype, "y", {
          get: function get() {
            return this._y;
          },
          set: function set(t) {
            this._y = t, this._segmentChanged();
          },
          enumerable: !0
        }), window.SVGPathSegCurvetoCubicSmoothAbs = function (t, e, n, r, i) {
          window.SVGPathSeg.call(this, window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_SMOOTH_ABS, "S", t), this._x = e, this._y = n, this._x2 = r, this._y2 = i;
        }, window.SVGPathSegCurvetoCubicSmoothAbs.prototype = Object.create(window.SVGPathSeg.prototype), window.SVGPathSegCurvetoCubicSmoothAbs.prototype.toString = function () {
          return "[object SVGPathSegCurvetoCubicSmoothAbs]";
        }, window.SVGPathSegCurvetoCubicSmoothAbs.prototype._asPathString = function () {
          return this.pathSegTypeAsLetter + " " + this._x2 + " " + this._y2 + " " + this._x + " " + this._y;
        }, window.SVGPathSegCurvetoCubicSmoothAbs.prototype.clone = function () {
          return new window.SVGPathSegCurvetoCubicSmoothAbs(void 0, this._x, this._y, this._x2, this._y2);
        }, Object.defineProperty(window.SVGPathSegCurvetoCubicSmoothAbs.prototype, "x", {
          get: function get() {
            return this._x;
          },
          set: function set(t) {
            this._x = t, this._segmentChanged();
          },
          enumerable: !0
        }), Object.defineProperty(window.SVGPathSegCurvetoCubicSmoothAbs.prototype, "y", {
          get: function get() {
            return this._y;
          },
          set: function set(t) {
            this._y = t, this._segmentChanged();
          },
          enumerable: !0
        }), Object.defineProperty(window.SVGPathSegCurvetoCubicSmoothAbs.prototype, "x2", {
          get: function get() {
            return this._x2;
          },
          set: function set(t) {
            this._x2 = t, this._segmentChanged();
          },
          enumerable: !0
        }), Object.defineProperty(window.SVGPathSegCurvetoCubicSmoothAbs.prototype, "y2", {
          get: function get() {
            return this._y2;
          },
          set: function set(t) {
            this._y2 = t, this._segmentChanged();
          },
          enumerable: !0
        }), window.SVGPathSegCurvetoCubicSmoothRel = function (t, e, n, r, i) {
          window.SVGPathSeg.call(this, window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_SMOOTH_REL, "s", t), this._x = e, this._y = n, this._x2 = r, this._y2 = i;
        }, window.SVGPathSegCurvetoCubicSmoothRel.prototype = Object.create(window.SVGPathSeg.prototype), window.SVGPathSegCurvetoCubicSmoothRel.prototype.toString = function () {
          return "[object SVGPathSegCurvetoCubicSmoothRel]";
        }, window.SVGPathSegCurvetoCubicSmoothRel.prototype._asPathString = function () {
          return this.pathSegTypeAsLetter + " " + this._x2 + " " + this._y2 + " " + this._x + " " + this._y;
        }, window.SVGPathSegCurvetoCubicSmoothRel.prototype.clone = function () {
          return new window.SVGPathSegCurvetoCubicSmoothRel(void 0, this._x, this._y, this._x2, this._y2);
        }, Object.defineProperty(window.SVGPathSegCurvetoCubicSmoothRel.prototype, "x", {
          get: function get() {
            return this._x;
          },
          set: function set(t) {
            this._x = t, this._segmentChanged();
          },
          enumerable: !0
        }), Object.defineProperty(window.SVGPathSegCurvetoCubicSmoothRel.prototype, "y", {
          get: function get() {
            return this._y;
          },
          set: function set(t) {
            this._y = t, this._segmentChanged();
          },
          enumerable: !0
        }), Object.defineProperty(window.SVGPathSegCurvetoCubicSmoothRel.prototype, "x2", {
          get: function get() {
            return this._x2;
          },
          set: function set(t) {
            this._x2 = t, this._segmentChanged();
          },
          enumerable: !0
        }), Object.defineProperty(window.SVGPathSegCurvetoCubicSmoothRel.prototype, "y2", {
          get: function get() {
            return this._y2;
          },
          set: function set(t) {
            this._y2 = t, this._segmentChanged();
          },
          enumerable: !0
        }), window.SVGPathSegCurvetoQuadraticSmoothAbs = function (t, e, n) {
          window.SVGPathSeg.call(this, window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_SMOOTH_ABS, "T", t), this._x = e, this._y = n;
        }, window.SVGPathSegCurvetoQuadraticSmoothAbs.prototype = Object.create(window.SVGPathSeg.prototype), window.SVGPathSegCurvetoQuadraticSmoothAbs.prototype.toString = function () {
          return "[object SVGPathSegCurvetoQuadraticSmoothAbs]";
        }, window.SVGPathSegCurvetoQuadraticSmoothAbs.prototype._asPathString = function () {
          return this.pathSegTypeAsLetter + " " + this._x + " " + this._y;
        }, window.SVGPathSegCurvetoQuadraticSmoothAbs.prototype.clone = function () {
          return new window.SVGPathSegCurvetoQuadraticSmoothAbs(void 0, this._x, this._y);
        }, Object.defineProperty(window.SVGPathSegCurvetoQuadraticSmoothAbs.prototype, "x", {
          get: function get() {
            return this._x;
          },
          set: function set(t) {
            this._x = t, this._segmentChanged();
          },
          enumerable: !0
        }), Object.defineProperty(window.SVGPathSegCurvetoQuadraticSmoothAbs.prototype, "y", {
          get: function get() {
            return this._y;
          },
          set: function set(t) {
            this._y = t, this._segmentChanged();
          },
          enumerable: !0
        }), window.SVGPathSegCurvetoQuadraticSmoothRel = function (t, e, n) {
          window.SVGPathSeg.call(this, window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_SMOOTH_REL, "t", t), this._x = e, this._y = n;
        }, window.SVGPathSegCurvetoQuadraticSmoothRel.prototype = Object.create(window.SVGPathSeg.prototype), window.SVGPathSegCurvetoQuadraticSmoothRel.prototype.toString = function () {
          return "[object SVGPathSegCurvetoQuadraticSmoothRel]";
        }, window.SVGPathSegCurvetoQuadraticSmoothRel.prototype._asPathString = function () {
          return this.pathSegTypeAsLetter + " " + this._x + " " + this._y;
        }, window.SVGPathSegCurvetoQuadraticSmoothRel.prototype.clone = function () {
          return new window.SVGPathSegCurvetoQuadraticSmoothRel(void 0, this._x, this._y);
        }, Object.defineProperty(window.SVGPathSegCurvetoQuadraticSmoothRel.prototype, "x", {
          get: function get() {
            return this._x;
          },
          set: function set(t) {
            this._x = t, this._segmentChanged();
          },
          enumerable: !0
        }), Object.defineProperty(window.SVGPathSegCurvetoQuadraticSmoothRel.prototype, "y", {
          get: function get() {
            return this._y;
          },
          set: function set(t) {
            this._y = t, this._segmentChanged();
          },
          enumerable: !0
        }), window.SVGPathElement.prototype.createSVGPathSegClosePath = function () {
          return new window.SVGPathSegClosePath(void 0);
        }, window.SVGPathElement.prototype.createSVGPathSegMovetoAbs = function (t, e) {
          return new window.SVGPathSegMovetoAbs(void 0, t, e);
        }, window.SVGPathElement.prototype.createSVGPathSegMovetoRel = function (t, e) {
          return new window.SVGPathSegMovetoRel(void 0, t, e);
        }, window.SVGPathElement.prototype.createSVGPathSegLinetoAbs = function (t, e) {
          return new window.SVGPathSegLinetoAbs(void 0, t, e);
        }, window.SVGPathElement.prototype.createSVGPathSegLinetoRel = function (t, e) {
          return new window.SVGPathSegLinetoRel(void 0, t, e);
        }, window.SVGPathElement.prototype.createSVGPathSegCurvetoCubicAbs = function (t, e, n, r, i, a) {
          return new window.SVGPathSegCurvetoCubicAbs(void 0, t, e, n, r, i, a);
        }, window.SVGPathElement.prototype.createSVGPathSegCurvetoCubicRel = function (t, e, n, r, i, a) {
          return new window.SVGPathSegCurvetoCubicRel(void 0, t, e, n, r, i, a);
        }, window.SVGPathElement.prototype.createSVGPathSegCurvetoQuadraticAbs = function (t, e, n, r) {
          return new window.SVGPathSegCurvetoQuadraticAbs(void 0, t, e, n, r);
        }, window.SVGPathElement.prototype.createSVGPathSegCurvetoQuadraticRel = function (t, e, n, r) {
          return new window.SVGPathSegCurvetoQuadraticRel(void 0, t, e, n, r);
        }, window.SVGPathElement.prototype.createSVGPathSegArcAbs = function (t, e, n, r, i, a, o) {
          return new window.SVGPathSegArcAbs(void 0, t, e, n, r, i, a, o);
        }, window.SVGPathElement.prototype.createSVGPathSegArcRel = function (t, e, n, r, i, a, o) {
          return new window.SVGPathSegArcRel(void 0, t, e, n, r, i, a, o);
        }, window.SVGPathElement.prototype.createSVGPathSegLinetoHorizontalAbs = function (t) {
          return new window.SVGPathSegLinetoHorizontalAbs(void 0, t);
        }, window.SVGPathElement.prototype.createSVGPathSegLinetoHorizontalRel = function (t) {
          return new window.SVGPathSegLinetoHorizontalRel(void 0, t);
        }, window.SVGPathElement.prototype.createSVGPathSegLinetoVerticalAbs = function (t) {
          return new window.SVGPathSegLinetoVerticalAbs(void 0, t);
        }, window.SVGPathElement.prototype.createSVGPathSegLinetoVerticalRel = function (t) {
          return new window.SVGPathSegLinetoVerticalRel(void 0, t);
        }, window.SVGPathElement.prototype.createSVGPathSegCurvetoCubicSmoothAbs = function (t, e, n, r) {
          return new window.SVGPathSegCurvetoCubicSmoothAbs(void 0, t, e, n, r);
        }, window.SVGPathElement.prototype.createSVGPathSegCurvetoCubicSmoothRel = function (t, e, n, r) {
          return new window.SVGPathSegCurvetoCubicSmoothRel(void 0, t, e, n, r);
        }, window.SVGPathElement.prototype.createSVGPathSegCurvetoQuadraticSmoothAbs = function (t, e) {
          return new window.SVGPathSegCurvetoQuadraticSmoothAbs(void 0, t, e);
        }, window.SVGPathElement.prototype.createSVGPathSegCurvetoQuadraticSmoothRel = function (t, e) {
          return new window.SVGPathSegCurvetoQuadraticSmoothRel(void 0, t, e);
        }, "getPathSegAtLength" in window.SVGPathElement.prototype || (window.SVGPathElement.prototype.getPathSegAtLength = function (t) {
          if (void 0 === t || !isFinite(t)) throw "Invalid arguments.";
          var e = document.createElementNS("http://www.w3.org/2000/svg", "path");
          e.setAttribute("d", this.getAttribute("d"));
          var n = e.pathSegList.numberOfItems - 1;
          if (n <= 0) return 0;

          do {
            if (e.pathSegList.removeItem(n), t > e.getTotalLength()) break;
            n--;
          } while (n > 0);

          return n;
        })), "SVGPathSegList" in window || (window.SVGPathSegList = function (t) {
          this._pathElement = t, this._list = this._parsePath(this._pathElement.getAttribute("d")), this._mutationObserverConfig = {
            attributes: !0,
            attributeFilter: ["d"]
          }, this._pathElementMutationObserver = new MutationObserver(this._updateListFromPathMutations.bind(this)), this._pathElementMutationObserver.observe(this._pathElement, this._mutationObserverConfig);
        }, window.SVGPathSegList.prototype.classname = "SVGPathSegList", Object.defineProperty(window.SVGPathSegList.prototype, "numberOfItems", {
          get: function get() {
            return this._checkPathSynchronizedToList(), this._list.length;
          },
          enumerable: !0
        }), Object.defineProperty(window.SVGPathElement.prototype, "pathSegList", {
          get: function get() {
            return this._pathSegList || (this._pathSegList = new window.SVGPathSegList(this)), this._pathSegList;
          },
          enumerable: !0
        }), Object.defineProperty(window.SVGPathElement.prototype, "normalizedPathSegList", {
          get: function get() {
            return this.pathSegList;
          },
          enumerable: !0
        }), Object.defineProperty(window.SVGPathElement.prototype, "animatedPathSegList", {
          get: function get() {
            return this.pathSegList;
          },
          enumerable: !0
        }), Object.defineProperty(window.SVGPathElement.prototype, "animatedNormalizedPathSegList", {
          get: function get() {
            return this.pathSegList;
          },
          enumerable: !0
        }), window.SVGPathSegList.prototype._checkPathSynchronizedToList = function () {
          this._updateListFromPathMutations(this._pathElementMutationObserver.takeRecords());
        }, window.SVGPathSegList.prototype._updateListFromPathMutations = function (t) {
          if (this._pathElement) {
            var e = !1;
            t.forEach(function (t) {
              "d" == t.attributeName && (e = !0);
            }), e && (this._list = this._parsePath(this._pathElement.getAttribute("d")));
          }
        }, window.SVGPathSegList.prototype._writeListToPath = function () {
          this._pathElementMutationObserver.disconnect(), this._pathElement.setAttribute("d", window.SVGPathSegList._pathSegArrayAsString(this._list)), this._pathElementMutationObserver.observe(this._pathElement, this._mutationObserverConfig);
        }, window.SVGPathSegList.prototype.segmentChanged = function (t) {
          this._writeListToPath();
        }, window.SVGPathSegList.prototype.clear = function () {
          this._checkPathSynchronizedToList(), this._list.forEach(function (t) {
            t._owningPathSegList = null;
          }), this._list = [], this._writeListToPath();
        }, window.SVGPathSegList.prototype.initialize = function (t) {
          return this._checkPathSynchronizedToList(), this._list = [t], t._owningPathSegList = this, this._writeListToPath(), t;
        }, window.SVGPathSegList.prototype._checkValidIndex = function (t) {
          if (isNaN(t) || t < 0 || t >= this.numberOfItems) throw "INDEX_SIZE_ERR";
        }, window.SVGPathSegList.prototype.getItem = function (t) {
          return this._checkPathSynchronizedToList(), this._checkValidIndex(t), this._list[t];
        }, window.SVGPathSegList.prototype.insertItemBefore = function (t, e) {
          return this._checkPathSynchronizedToList(), e > this.numberOfItems && (e = this.numberOfItems), t._owningPathSegList && (t = t.clone()), this._list.splice(e, 0, t), t._owningPathSegList = this, this._writeListToPath(), t;
        }, window.SVGPathSegList.prototype.replaceItem = function (t, e) {
          return this._checkPathSynchronizedToList(), t._owningPathSegList && (t = t.clone()), this._checkValidIndex(e), this._list[e] = t, t._owningPathSegList = this, this._writeListToPath(), t;
        }, window.SVGPathSegList.prototype.removeItem = function (t) {
          this._checkPathSynchronizedToList(), this._checkValidIndex(t);
          var e = this._list[t];
          return this._list.splice(t, 1), this._writeListToPath(), e;
        }, window.SVGPathSegList.prototype.appendItem = function (t) {
          return this._checkPathSynchronizedToList(), t._owningPathSegList && (t = t.clone()), this._list.push(t), t._owningPathSegList = this, this._writeListToPath(), t;
        }, window.SVGPathSegList._pathSegArrayAsString = function (t) {
          var e = "",
              n = !0;
          return t.forEach(function (t) {
            n ? (n = !1, e += t._asPathString()) : e += " " + t._asPathString();
          }), e;
        }, window.SVGPathSegList.prototype._parsePath = function (t) {
          if (!t || 0 == t.length) return [];

          var e = this,
              n = function n() {
            this.pathSegList = [];
          };

          n.prototype.appendSegment = function (t) {
            this.pathSegList.push(t);
          };

          var r = function r(t) {
            this._string = t, this._currentIndex = 0, this._endIndex = this._string.length, this._previousCommand = window.SVGPathSeg.PATHSEG_UNKNOWN, this._skipOptionalSpaces();
          };

          r.prototype._isCurrentSpace = function () {
            var t = this._string[this._currentIndex];
            return t <= " " && (" " == t || "\n" == t || "\t" == t || "\r" == t || "\f" == t);
          }, r.prototype._skipOptionalSpaces = function () {
            for (; this._currentIndex < this._endIndex && this._isCurrentSpace();) {
              this._currentIndex++;
            }

            return this._currentIndex < this._endIndex;
          }, r.prototype._skipOptionalSpacesOrDelimiter = function () {
            return !(this._currentIndex < this._endIndex && !this._isCurrentSpace() && "," != this._string.charAt(this._currentIndex)) && (this._skipOptionalSpaces() && this._currentIndex < this._endIndex && "," == this._string.charAt(this._currentIndex) && (this._currentIndex++, this._skipOptionalSpaces()), this._currentIndex < this._endIndex);
          }, r.prototype.hasMoreData = function () {
            return this._currentIndex < this._endIndex;
          }, r.prototype.peekSegmentType = function () {
            var t = this._string[this._currentIndex];
            return this._pathSegTypeFromChar(t);
          }, r.prototype._pathSegTypeFromChar = function (t) {
            switch (t) {
              case "Z":
              case "z":
                return window.SVGPathSeg.PATHSEG_CLOSEPATH;

              case "M":
                return window.SVGPathSeg.PATHSEG_MOVETO_ABS;

              case "m":
                return window.SVGPathSeg.PATHSEG_MOVETO_REL;

              case "L":
                return window.SVGPathSeg.PATHSEG_LINETO_ABS;

              case "l":
                return window.SVGPathSeg.PATHSEG_LINETO_REL;

              case "C":
                return window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_ABS;

              case "c":
                return window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_REL;

              case "Q":
                return window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_ABS;

              case "q":
                return window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_REL;

              case "A":
                return window.SVGPathSeg.PATHSEG_ARC_ABS;

              case "a":
                return window.SVGPathSeg.PATHSEG_ARC_REL;

              case "H":
                return window.SVGPathSeg.PATHSEG_LINETO_HORIZONTAL_ABS;

              case "h":
                return window.SVGPathSeg.PATHSEG_LINETO_HORIZONTAL_REL;

              case "V":
                return window.SVGPathSeg.PATHSEG_LINETO_VERTICAL_ABS;

              case "v":
                return window.SVGPathSeg.PATHSEG_LINETO_VERTICAL_REL;

              case "S":
                return window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_SMOOTH_ABS;

              case "s":
                return window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_SMOOTH_REL;

              case "T":
                return window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_SMOOTH_ABS;

              case "t":
                return window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_SMOOTH_REL;

              default:
                return window.SVGPathSeg.PATHSEG_UNKNOWN;
            }
          }, r.prototype._nextCommandHelper = function (t, e) {
            return ("+" == t || "-" == t || "." == t || t >= "0" && t <= "9") && e != window.SVGPathSeg.PATHSEG_CLOSEPATH ? e == window.SVGPathSeg.PATHSEG_MOVETO_ABS ? window.SVGPathSeg.PATHSEG_LINETO_ABS : e == window.SVGPathSeg.PATHSEG_MOVETO_REL ? window.SVGPathSeg.PATHSEG_LINETO_REL : e : window.SVGPathSeg.PATHSEG_UNKNOWN;
          }, r.prototype.initialCommandIsMoveTo = function () {
            if (!this.hasMoreData()) return !0;
            var t = this.peekSegmentType();
            return t == window.SVGPathSeg.PATHSEG_MOVETO_ABS || t == window.SVGPathSeg.PATHSEG_MOVETO_REL;
          }, r.prototype._parseNumber = function () {
            var t = 0,
                e = 0,
                n = 1,
                r = 0,
                i = 1,
                a = 1,
                o = this._currentIndex;

            if (this._skipOptionalSpaces(), this._currentIndex < this._endIndex && "+" == this._string.charAt(this._currentIndex) ? this._currentIndex++ : this._currentIndex < this._endIndex && "-" == this._string.charAt(this._currentIndex) && (this._currentIndex++, i = -1), !(this._currentIndex == this._endIndex || (this._string.charAt(this._currentIndex) < "0" || this._string.charAt(this._currentIndex) > "9") && "." != this._string.charAt(this._currentIndex))) {
              for (var u = this._currentIndex; this._currentIndex < this._endIndex && this._string.charAt(this._currentIndex) >= "0" && this._string.charAt(this._currentIndex) <= "9";) {
                this._currentIndex++;
              }

              if (this._currentIndex != u) for (var c = this._currentIndex - 1, s = 1; c >= u;) {
                e += s * (this._string.charAt(c--) - "0"), s *= 10;
              }

              if (this._currentIndex < this._endIndex && "." == this._string.charAt(this._currentIndex)) {
                if (this._currentIndex++, this._currentIndex >= this._endIndex || this._string.charAt(this._currentIndex) < "0" || this._string.charAt(this._currentIndex) > "9") return;

                for (; this._currentIndex < this._endIndex && this._string.charAt(this._currentIndex) >= "0" && this._string.charAt(this._currentIndex) <= "9";) {
                  n *= 10, r += (this._string.charAt(this._currentIndex) - "0") / n, this._currentIndex += 1;
                }
              }

              if (this._currentIndex != o && this._currentIndex + 1 < this._endIndex && ("e" == this._string.charAt(this._currentIndex) || "E" == this._string.charAt(this._currentIndex)) && "x" != this._string.charAt(this._currentIndex + 1) && "m" != this._string.charAt(this._currentIndex + 1)) {
                if (this._currentIndex++, "+" == this._string.charAt(this._currentIndex) ? this._currentIndex++ : "-" == this._string.charAt(this._currentIndex) && (this._currentIndex++, a = -1), this._currentIndex >= this._endIndex || this._string.charAt(this._currentIndex) < "0" || this._string.charAt(this._currentIndex) > "9") return;

                for (; this._currentIndex < this._endIndex && this._string.charAt(this._currentIndex) >= "0" && this._string.charAt(this._currentIndex) <= "9";) {
                  t *= 10, t += this._string.charAt(this._currentIndex) - "0", this._currentIndex++;
                }
              }

              var f = e + r;
              if (f *= i, t && (f *= Math.pow(10, a * t)), o != this._currentIndex) return this._skipOptionalSpacesOrDelimiter(), f;
            }
          }, r.prototype._parseArcFlag = function () {
            if (!(this._currentIndex >= this._endIndex)) {
              var t = !1,
                  e = this._string.charAt(this._currentIndex++);

              if ("0" == e) t = !1;else {
                if ("1" != e) return;
                t = !0;
              }
              return this._skipOptionalSpacesOrDelimiter(), t;
            }
          }, r.prototype.parseSegment = function () {
            var t = this._string[this._currentIndex],
                n = this._pathSegTypeFromChar(t);

            if (n == window.SVGPathSeg.PATHSEG_UNKNOWN) {
              if (this._previousCommand == window.SVGPathSeg.PATHSEG_UNKNOWN) return null;
              if ((n = this._nextCommandHelper(t, this._previousCommand)) == window.SVGPathSeg.PATHSEG_UNKNOWN) return null;
            } else this._currentIndex++;

            switch (this._previousCommand = n, n) {
              case window.SVGPathSeg.PATHSEG_MOVETO_REL:
                return new window.SVGPathSegMovetoRel(e, this._parseNumber(), this._parseNumber());

              case window.SVGPathSeg.PATHSEG_MOVETO_ABS:
                return new window.SVGPathSegMovetoAbs(e, this._parseNumber(), this._parseNumber());

              case window.SVGPathSeg.PATHSEG_LINETO_REL:
                return new window.SVGPathSegLinetoRel(e, this._parseNumber(), this._parseNumber());

              case window.SVGPathSeg.PATHSEG_LINETO_ABS:
                return new window.SVGPathSegLinetoAbs(e, this._parseNumber(), this._parseNumber());

              case window.SVGPathSeg.PATHSEG_LINETO_HORIZONTAL_REL:
                return new window.SVGPathSegLinetoHorizontalRel(e, this._parseNumber());

              case window.SVGPathSeg.PATHSEG_LINETO_HORIZONTAL_ABS:
                return new window.SVGPathSegLinetoHorizontalAbs(e, this._parseNumber());

              case window.SVGPathSeg.PATHSEG_LINETO_VERTICAL_REL:
                return new window.SVGPathSegLinetoVerticalRel(e, this._parseNumber());

              case window.SVGPathSeg.PATHSEG_LINETO_VERTICAL_ABS:
                return new window.SVGPathSegLinetoVerticalAbs(e, this._parseNumber());

              case window.SVGPathSeg.PATHSEG_CLOSEPATH:
                return this._skipOptionalSpaces(), new window.SVGPathSegClosePath(e);

              case window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_REL:
                var r = {
                  x1: this._parseNumber(),
                  y1: this._parseNumber(),
                  x2: this._parseNumber(),
                  y2: this._parseNumber(),
                  x: this._parseNumber(),
                  y: this._parseNumber()
                };
                return new window.SVGPathSegCurvetoCubicRel(e, r.x, r.y, r.x1, r.y1, r.x2, r.y2);

              case window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_ABS:
                return r = {
                  x1: this._parseNumber(),
                  y1: this._parseNumber(),
                  x2: this._parseNumber(),
                  y2: this._parseNumber(),
                  x: this._parseNumber(),
                  y: this._parseNumber()
                }, new window.SVGPathSegCurvetoCubicAbs(e, r.x, r.y, r.x1, r.y1, r.x2, r.y2);

              case window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_SMOOTH_REL:
                return r = {
                  x2: this._parseNumber(),
                  y2: this._parseNumber(),
                  x: this._parseNumber(),
                  y: this._parseNumber()
                }, new window.SVGPathSegCurvetoCubicSmoothRel(e, r.x, r.y, r.x2, r.y2);

              case window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_SMOOTH_ABS:
                return r = {
                  x2: this._parseNumber(),
                  y2: this._parseNumber(),
                  x: this._parseNumber(),
                  y: this._parseNumber()
                }, new window.SVGPathSegCurvetoCubicSmoothAbs(e, r.x, r.y, r.x2, r.y2);

              case window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_REL:
                return r = {
                  x1: this._parseNumber(),
                  y1: this._parseNumber(),
                  x: this._parseNumber(),
                  y: this._parseNumber()
                }, new window.SVGPathSegCurvetoQuadraticRel(e, r.x, r.y, r.x1, r.y1);

              case window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_ABS:
                return r = {
                  x1: this._parseNumber(),
                  y1: this._parseNumber(),
                  x: this._parseNumber(),
                  y: this._parseNumber()
                }, new window.SVGPathSegCurvetoQuadraticAbs(e, r.x, r.y, r.x1, r.y1);

              case window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_SMOOTH_REL:
                return new window.SVGPathSegCurvetoQuadraticSmoothRel(e, this._parseNumber(), this._parseNumber());

              case window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_SMOOTH_ABS:
                return new window.SVGPathSegCurvetoQuadraticSmoothAbs(e, this._parseNumber(), this._parseNumber());

              case window.SVGPathSeg.PATHSEG_ARC_REL:
                return r = {
                  x1: this._parseNumber(),
                  y1: this._parseNumber(),
                  arcAngle: this._parseNumber(),
                  arcLarge: this._parseArcFlag(),
                  arcSweep: this._parseArcFlag(),
                  x: this._parseNumber(),
                  y: this._parseNumber()
                }, new window.SVGPathSegArcRel(e, r.x, r.y, r.x1, r.y1, r.arcAngle, r.arcLarge, r.arcSweep);

              case window.SVGPathSeg.PATHSEG_ARC_ABS:
                return r = {
                  x1: this._parseNumber(),
                  y1: this._parseNumber(),
                  arcAngle: this._parseNumber(),
                  arcLarge: this._parseArcFlag(),
                  arcSweep: this._parseArcFlag(),
                  x: this._parseNumber(),
                  y: this._parseNumber()
                }, new window.SVGPathSegArcAbs(e, r.x, r.y, r.x1, r.y1, r.arcAngle, r.arcLarge, r.arcSweep);

              default:
                throw "Unknown path seg type.";
            }
          };
          var i = new n(),
              a = new r(t);
          if (!a.initialCommandIsMoveTo()) return [];

          for (; a.hasMoreData();) {
            var o = a.parseSegment();
            if (!o) return [];
            i.appendSegment(o);
          }

          return i.pathSegList;
        }), String.prototype.padEnd || (String.prototype.padEnd = function (t, e) {
          return t >>= 0, e = String(void 0 !== e ? e : " "), this.length > t ? String(this) : ((t -= this.length) > e.length && (e += e.repeat(t / e.length)), String(this) + e.slice(0, t));
        }), A.axis = function () {}, A.axis.labels = function (t) {
          var e = this.internal;
          arguments.length && (Object.keys(t).forEach(function (n) {
            e.axis.setLabelText(n, t[n]);
          }), e.axis.updateLabels());
        }, A.axis.max = function (t) {
          var e = this.internal,
              n = e.config;
          if (!arguments.length) return {
            x: n.axis_x_max,
            y: n.axis_y_max,
            y2: n.axis_y2_max
          };
          "object" === (void 0 === t ? "undefined" : i(t)) ? (u(t.x) && (n.axis_x_max = t.x), u(t.y) && (n.axis_y_max = t.y), u(t.y2) && (n.axis_y2_max = t.y2)) : n.axis_y_max = n.axis_y2_max = t, e.redraw({
            withUpdateOrgXDomain: !0,
            withUpdateXDomain: !0
          });
        }, A.axis.min = function (t) {
          var e = this.internal,
              n = e.config;
          if (!arguments.length) return {
            x: n.axis_x_min,
            y: n.axis_y_min,
            y2: n.axis_y2_min
          };
          "object" === (void 0 === t ? "undefined" : i(t)) ? (u(t.x) && (n.axis_x_min = t.x), u(t.y) && (n.axis_y_min = t.y), u(t.y2) && (n.axis_y2_min = t.y2)) : n.axis_y_min = n.axis_y2_min = t, e.redraw({
            withUpdateOrgXDomain: !0,
            withUpdateXDomain: !0
          });
        }, A.axis.range = function (t) {
          if (!arguments.length) return {
            max: this.axis.max(),
            min: this.axis.min()
          };
          d(t.max) && this.axis.max(t.max), d(t.min) && this.axis.min(t.min);
        }, A.category = function (t, e) {
          var n = this.internal,
              r = n.config;
          return arguments.length > 1 && (r.axis_x_categories[t] = e, n.redraw()), r.axis_x_categories[t];
        }, A.categories = function (t) {
          var e = this.internal,
              n = e.config;
          return arguments.length ? (n.axis_x_categories = t, e.redraw(), n.axis_x_categories) : n.axis_x_categories;
        }, A.resize = function (t) {
          var e = this.internal.config;
          e.size_width = t ? t.width : null, e.size_height = t ? t.height : null, this.flush();
        }, A.flush = function () {
          this.internal.updateAndRedraw({
            withLegend: !0,
            withTransition: !1,
            withTransitionForTransform: !1
          });
        }, A.destroy = function () {
          var t = this.internal;
          if (window.clearInterval(t.intervalForObserveInserted), void 0 !== t.resizeTimeout && window.clearTimeout(t.resizeTimeout), window.detachEvent) window.detachEvent("onresize", t.resizeIfElementDisplayed);else if (window.removeEventListener) window.removeEventListener("resize", t.resizeIfElementDisplayed);else {
            var e = window.onresize;
            e && e.add && e.remove && e.remove(t.resizeFunction);
          }
          return t.resizeFunction.remove(), t.selectChart.classed("c3", !1).html(""), Object.keys(t).forEach(function (e) {
            t[e] = null;
          }), null;
        }, A.color = function (t) {
          return this.internal.color(t);
        }, A.data = function (t) {
          var e = this.internal.data.targets;
          return void 0 === t ? e : e.filter(function (e) {
            return [].concat(t).indexOf(e.id) >= 0;
          });
        }, A.data.shown = function (t) {
          return this.internal.filterTargetsToShow(this.data(t));
        }, A.data.values = function (t) {
          var e,
              n = null;
          return t && (n = (e = this.data(t))[0] ? e[0].values.map(function (t) {
            return t.value;
          }) : null), n;
        }, A.data.names = function (t) {
          return this.internal.clearLegendItemTextBoxCache(), this.internal.updateDataAttributes("names", t);
        }, A.data.colors = function (t) {
          return this.internal.updateDataAttributes("colors", t);
        }, A.data.axes = function (t) {
          return this.internal.updateDataAttributes("axes", t);
        }, A.flow = function (t) {
          var e,
              n,
              r,
              i,
              a,
              o,
              c,
              s = this.internal,
              f = [],
              l = s.getMaxDataCount(),
              h = 0,
              g = 0;
          if (t.json) n = s.convertJsonToData(t.json, t.keys);else if (t.rows) n = s.convertRowsToData(t.rows);else {
            if (!t.columns) return;
            n = s.convertColumnsToData(t.columns);
          }
          e = s.convertDataToTargets(n, !0), s.data.targets.forEach(function (t) {
            var n,
                r,
                i = !1;

            for (n = 0; n < e.length; n++) {
              if (t.id === e[n].id) {
                for (i = !0, t.values[t.values.length - 1] && (g = t.values[t.values.length - 1].index + 1), h = e[n].values.length, r = 0; r < h; r++) {
                  e[n].values[r].index = g + r, s.isTimeSeries() || (e[n].values[r].x = g + r);
                }

                t.values = t.values.concat(e[n].values), e.splice(n, 1);
                break;
              }
            }

            i || f.push(t.id);
          }), s.data.targets.forEach(function (t) {
            var e, n;

            for (e = 0; e < f.length; e++) {
              if (t.id === f[e]) for (g = t.values[t.values.length - 1].index + 1, n = 0; n < h; n++) {
                t.values.push({
                  id: t.id,
                  index: g + n,
                  x: s.isTimeSeries() ? s.getOtherTargetX(g + n) : g + n,
                  value: null
                });
              }
            }
          }), s.data.targets.length && e.forEach(function (t) {
            var e,
                n = [];

            for (e = s.data.targets[0].values[0].index; e < g; e++) {
              n.push({
                id: t.id,
                index: e,
                x: s.isTimeSeries() ? s.getOtherTargetX(e) : e,
                value: null
              });
            }

            t.values.forEach(function (t) {
              t.index += g, s.isTimeSeries() || (t.x += g);
            }), t.values = n.concat(t.values);
          }), s.data.targets = s.data.targets.concat(e), s.getMaxDataCount(), a = (i = s.data.targets[0]).values[0], d(t.to) ? (h = 0, c = s.isTimeSeries() ? s.parseDate(t.to) : t.to, i.values.forEach(function (t) {
            t.x < c && h++;
          })) : d(t.length) && (h = t.length), l ? 1 === l && s.isTimeSeries() && (o = (i.values[i.values.length - 1].x - a.x) / 2, r = [new Date(+a.x - o), new Date(+a.x + o)], s.updateXDomain(null, !0, !0, !1, r)) : (o = s.isTimeSeries() ? i.values.length > 1 ? i.values[i.values.length - 1].x - a.x : a.x - s.getXDomain(s.data.targets)[0] : 1, r = [a.x - o, a.x], s.updateXDomain(null, !0, !0, !1, r)), s.updateTargets(s.data.targets), s.redraw({
            flow: {
              index: a.index,
              length: h,
              duration: u(t.duration) ? t.duration : s.config.transition_duration,
              done: t.done,
              orgDataCount: l
            },
            withLegend: !0,
            withTransition: l > 1,
            withTrimXDomain: !1,
            withUpdateXAxis: !0
          });
        }, T.generateFlow = function (t) {
          var e = this,
              n = e.config,
              i = e.d3;
          return function () {
            var a,
                o,
                u,
                c,
                s,
                f,
                l,
                d,
                h,
                g,
                _,
                x = t.targets,
                y = t.flow,
                v = t.drawBar,
                b = t.drawLine,
                m = t.drawArea,
                w = t.cx,
                S = t.cy,
                A = t.xv,
                T = t.xForText,
                P = t.yForText,
                C = t.duration,
                M = y.index,
                L = y.length,
                E = e.getValueOnIndex(e.data.targets[0].values, M),
                O = e.getValueOnIndex(e.data.targets[0].values, M + L),
                k = e.x.domain(),
                V = y.duration || C,
                G = y.done || function () {},
                R = e.generateWait();

            e.flowing = !0, e.data.targets.forEach(function (t) {
              t.values.splice(0, L);
            }), u = e.updateXDomain(x, !0, !0), e.updateXGrid && e.updateXGrid(!0), c = e.xgrid || i.selectAll([]), s = e.xgridLines || i.selectAll([]), f = e.mainRegion || i.selectAll([]), l = e.mainText || i.selectAll([]), d = e.mainBar || i.selectAll([]), h = e.mainLine || i.selectAll([]), g = e.mainArea || i.selectAll([]), _ = e.mainCircle || i.selectAll([]), y.orgDataCount ? a = 1 === y.orgDataCount || (E && E.x) === (O && O.x) ? e.x(k[0]) - e.x(u[0]) : e.isTimeSeries() ? e.x(k[0]) - e.x(u[0]) : e.x(E.x) - e.x(O.x) : 1 !== e.data.targets[0].values.length ? a = e.x(k[0]) - e.x(u[0]) : e.isTimeSeries() ? (E = e.getValueOnIndex(e.data.targets[0].values, 0), O = e.getValueOnIndex(e.data.targets[0].values, e.data.targets[0].values.length - 1), a = e.x(E.x) - e.x(O.x)) : a = p(u) / 2, o = "translate(" + a + ",0) scale(" + p(k) / p(u) + ",1)", e.hideXGridFocus();
            var I = i.transition().ease(i.easeLinear).duration(V);
            R.add(e.xAxis(e.axes.x, I)), R.add(d.transition(I).attr("transform", o)), R.add(h.transition(I).attr("transform", o)), R.add(g.transition(I).attr("transform", o)), R.add(_.transition(I).attr("transform", o)), R.add(l.transition(I).attr("transform", o)), R.add(f.filter(e.isRegionOnX).transition(I).attr("transform", o)), R.add(c.transition(I).attr("transform", o)), R.add(s.transition(I).attr("transform", o)), R(function () {
              var t,
                  i = [],
                  a = [];

              if (L) {
                for (t = 0; t < L; t++) {
                  i.push("." + r.shape + "-" + (M + t)), a.push("." + r.text + "-" + (M + t));
                }

                e.svg.selectAll("." + r.shapes).selectAll(i).remove(), e.svg.selectAll("." + r.texts).selectAll(a).remove(), e.svg.select("." + r.xgrid).remove();
              }

              c.attr("transform", null).attr("x1", e.xgridAttr.x1).attr("x2", e.xgridAttr.x2).attr("y1", e.xgridAttr.y1).attr("y2", e.xgridAttr.y2).style("opacity", e.xgridAttr.opacity), s.attr("transform", null), s.select("line").attr("x1", n.axis_rotated ? 0 : A).attr("x2", n.axis_rotated ? e.width : A), s.select("text").attr("x", n.axis_rotated ? e.width : 0).attr("y", A), d.attr("transform", null).attr("d", v), h.attr("transform", null).attr("d", b), g.attr("transform", null).attr("d", m), _.attr("transform", null).attr("cx", w).attr("cy", S), l.attr("transform", null).attr("x", T).attr("y", P).style("fill-opacity", e.opacityForText.bind(e)), f.attr("transform", null), f.filter(e.isRegionOnX).attr("x", e.regionX.bind(e)).attr("width", e.regionWidth.bind(e)), G(), e.flowing = !1;
            });
          };
        }, A.focus = function (t) {
          var e,
              n = this.internal;
          t = n.mapToTargetIds(t), e = n.svg.selectAll(n.selectorTargets(t.filter(n.isTargetToShow, n))), this.revert(), this.defocus(), e.classed(r.focused, !0).classed(r.defocused, !1), n.hasArcType() && n.expandArc(t), n.toggleFocusLegend(t, !0), n.focusedTargetIds = t, n.defocusedTargetIds = n.defocusedTargetIds.filter(function (e) {
            return t.indexOf(e) < 0;
          });
        }, A.defocus = function (t) {
          var e = this.internal;
          t = e.mapToTargetIds(t), e.svg.selectAll(e.selectorTargets(t.filter(e.isTargetToShow, e))).classed(r.focused, !1).classed(r.defocused, !0), e.hasArcType() && e.unexpandArc(t), e.toggleFocusLegend(t, !1), e.focusedTargetIds = e.focusedTargetIds.filter(function (e) {
            return t.indexOf(e) < 0;
          }), e.defocusedTargetIds = t;
        }, A.revert = function (t) {
          var e = this.internal;
          t = e.mapToTargetIds(t), e.svg.selectAll(e.selectorTargets(t)).classed(r.focused, !1).classed(r.defocused, !1), e.hasArcType() && e.unexpandArc(t), e.config.legend_show && (e.showLegend(t.filter(e.isLegendToShow.bind(e))), e.legend.selectAll(e.selectorLegends(t)).filter(function () {
            return e.d3.select(this).classed(r.legendItemFocused);
          }).classed(r.legendItemFocused, !1)), e.focusedTargetIds = [], e.defocusedTargetIds = [];
        }, A.xgrids = function (t) {
          var e = this.internal,
              n = e.config;
          return t ? (n.grid_x_lines = t, e.redrawWithoutRescale(), n.grid_x_lines) : n.grid_x_lines;
        }, A.xgrids.add = function (t) {
          var e = this.internal;
          return this.xgrids(e.config.grid_x_lines.concat(t || []));
        }, A.xgrids.remove = function (t) {
          this.internal.removeGridLines(t, !0);
        }, A.ygrids = function (t) {
          var e = this.internal,
              n = e.config;
          return t ? (n.grid_y_lines = t, e.redrawWithoutRescale(), n.grid_y_lines) : n.grid_y_lines;
        }, A.ygrids.add = function (t) {
          var e = this.internal;
          return this.ygrids(e.config.grid_y_lines.concat(t || []));
        }, A.ygrids.remove = function (t) {
          this.internal.removeGridLines(t, !1);
        }, A.groups = function (t) {
          var e = this.internal,
              n = e.config;
          return l(t) ? n.data_groups : (n.data_groups = t, e.redraw(), n.data_groups);
        }, A.legend = function () {}, A.legend.show = function (t) {
          var e = this.internal;
          e.showLegend(e.mapToTargetIds(t)), e.updateAndRedraw({
            withLegend: !0
          });
        }, A.legend.hide = function (t) {
          var e = this.internal;
          e.hideLegend(e.mapToTargetIds(t)), e.updateAndRedraw({
            withLegend: !0
          });
        }, A.load = function (t) {
          var e = this.internal,
              n = e.config;
          t.xs && e.addXs(t.xs), "names" in t && A.data.names.bind(this)(t.names), "classes" in t && Object.keys(t.classes).forEach(function (e) {
            n.data_classes[e] = t.classes[e];
          }), "categories" in t && e.isCategorized() && (n.axis_x_categories = t.categories), "axes" in t && Object.keys(t.axes).forEach(function (e) {
            n.data_axes[e] = t.axes[e];
          }), "colors" in t && Object.keys(t.colors).forEach(function (e) {
            n.data_colors[e] = t.colors[e];
          }), "cacheIds" in t && e.hasCaches(t.cacheIds) ? e.load(e.getCaches(t.cacheIds), t.done) : "unload" in t ? e.unload(e.mapToTargetIds("boolean" == typeof t.unload && t.unload ? null : t.unload), function () {
            e.loadFromArgs(t);
          }) : e.loadFromArgs(t);
        }, A.unload = function (t) {
          var e = this.internal;
          (t = t || {}) instanceof Array ? t = {
            ids: t
          } : "string" == typeof t && (t = {
            ids: [t]
          }), e.unload(e.mapToTargetIds(t.ids), function () {
            e.redraw({
              withUpdateOrgXDomain: !0,
              withUpdateXDomain: !0,
              withLegend: !0
            }), t.done && t.done();
          });
        }, A.regions = function (t) {
          var e = this.internal,
              n = e.config;
          return t ? (n.regions = t, e.redrawWithoutRescale(), n.regions) : n.regions;
        }, A.regions.add = function (t) {
          var e = this.internal,
              n = e.config;
          return t ? (n.regions = n.regions.concat(t), e.redrawWithoutRescale(), n.regions) : n.regions;
        }, A.regions.remove = function (t) {
          var e,
              n,
              i,
              a = this.internal,
              o = a.config;
          return t = t || {}, e = a.getOption(t, "duration", o.transition_duration), n = a.getOption(t, "classes", [r.region]), i = a.main.select("." + r.regions).selectAll(n.map(function (t) {
            return "." + t;
          })), (e ? i.transition().duration(e) : i).style("opacity", 0).remove(), o.regions = o.regions.filter(function (t) {
            var e = !1;
            return !t["class"] || (t["class"].split(" ").forEach(function (t) {
              n.indexOf(t) >= 0 && (e = !0);
            }), !e);
          }), o.regions;
        }, A.selected = function (t) {
          var e = this.internal,
              n = e.d3;
          return n.merge(e.main.selectAll("." + r.shapes + e.getTargetSelectorSuffix(t)).selectAll("." + r.shape).filter(function () {
            return n.select(this).classed(r.SELECTED);
          }).map(function (t) {
            return t.map(function (t) {
              var e = t.__data__;
              return e.data ? e.data : e;
            });
          }));
        }, A.select = function (t, e, n) {
          var i = this.internal,
              a = i.d3,
              o = i.config;
          o.data_selection_enabled && i.main.selectAll("." + r.shapes).selectAll("." + r.shape).each(function (u, c) {
            var s = a.select(this),
                f = u.data ? u.data.id : u.id,
                l = i.getToggle(this, u).bind(i),
                h = o.data_selection_grouped || !t || t.indexOf(f) >= 0,
                g = !e || e.indexOf(c) >= 0,
                p = s.classed(r.SELECTED);
            s.classed(r.line) || s.classed(r.area) || (h && g ? o.data_selection_isselectable(u) && !p && l(!0, s.classed(r.SELECTED, !0), u, c) : d(n) && n && p && l(!1, s.classed(r.SELECTED, !1), u, c));
          });
        }, A.unselect = function (t, e) {
          var n = this.internal,
              i = n.d3,
              a = n.config;
          a.data_selection_enabled && n.main.selectAll("." + r.shapes).selectAll("." + r.shape).each(function (o, u) {
            var c = i.select(this),
                s = o.data ? o.data.id : o.id,
                f = n.getToggle(this, o).bind(n),
                l = a.data_selection_grouped || !t || t.indexOf(s) >= 0,
                d = !e || e.indexOf(u) >= 0,
                h = c.classed(r.SELECTED);
            c.classed(r.line) || c.classed(r.area) || l && d && a.data_selection_isselectable(o) && h && f(!1, c.classed(r.SELECTED, !1), o, u);
          });
        }, A.show = function (t, e) {
          var n,
              r = this.internal;
          t = r.mapToTargetIds(t), e = e || {}, r.removeHiddenTargetIds(t), (n = r.svg.selectAll(r.selectorTargets(t))).transition().style("display", "initial", "important").style("opacity", 1, "important").call(r.endall, function () {
            n.style("opacity", null).style("opacity", 1);
          }), e.withLegend && r.showLegend(t), r.redraw({
            withUpdateOrgXDomain: !0,
            withUpdateXDomain: !0,
            withLegend: !0
          });
        }, A.hide = function (t, e) {
          var n,
              r = this.internal;
          t = r.mapToTargetIds(t), e = e || {}, r.addHiddenTargetIds(t), (n = r.svg.selectAll(r.selectorTargets(t))).transition().style("opacity", 0, "important").call(r.endall, function () {
            n.style("opacity", null).style("opacity", 0), n.style("display", "none");
          }), e.withLegend && r.hideLegend(t), r.redraw({
            withUpdateOrgXDomain: !0,
            withUpdateXDomain: !0,
            withLegend: !0
          });
        }, A.toggle = function (t, e) {
          var n = this,
              r = this.internal;
          r.mapToTargetIds(t).forEach(function (t) {
            r.isTargetToShow(t) ? n.hide(t, e) : n.show(t, e);
          });
        }, A.tooltip = function () {}, A.tooltip.show = function (t) {
          var e,
              n,
              r = this.internal,
              i = {};
          t.mouse ? i = t.mouse : (t.data ? n = t.data : void 0 !== t.x && (e = t.id ? r.data.targets.filter(function (e) {
            return e.id === t.id;
          }) : r.data.targets, n = r.filterByX(e, t.x).slice(0, 1)[0]), i = n ? r.getMousePosition(n) : null), r.dispatchEvent("mousemove", i), r.config.tooltip_onshow.call(r, n);
        }, A.tooltip.hide = function () {
          this.internal.dispatchEvent("mouseout", 0), this.internal.config.tooltip_onhide.call(this);
        }, A.transform = function (t, e) {
          var n = this.internal,
              r = ["pie", "donut"].indexOf(t) >= 0 ? {
            withTransform: !0
          } : null;
          n.transformTo(e, t, r);
        }, T.transformTo = function (t, e, n) {
          var r = this,
              i = !r.hasArcType(),
              a = n || {
            withTransitionForAxis: i
          };
          a.withTransitionForTransform = !1, r.transiting = !1, r.setTargetType(t, e), r.updateTargets(r.data.targets), r.updateAndRedraw(a);
        }, A.x = function (t) {
          var e = this.internal;
          return arguments.length && (e.updateTargetX(e.data.targets, t), e.redraw({
            withUpdateOrgXDomain: !0,
            withUpdateXDomain: !0
          })), e.data.xs;
        }, A.xs = function (t) {
          var e = this.internal;
          return arguments.length && (e.updateTargetXs(e.data.targets, t), e.redraw({
            withUpdateOrgXDomain: !0,
            withUpdateXDomain: !0
          })), e.data.xs;
        }, A.zoom = function (t) {
          var e = this.internal;
          return t ? (e.isTimeSeries() && (t = t.map(function (t) {
            return e.parseDate(t);
          })), e.config.subchart_show ? e.brush.selectionAsValue(t, !0) : (e.updateXDomain(null, !0, !1, !1, t), e.redraw({
            withY: e.config.zoom_rescale,
            withSubchart: !1
          })), e.config.zoom_onzoom.call(this, e.x.orgDomain()), t) : e.x.domain();
        }, A.zoom.enable = function (t) {
          var e = this.internal;
          e.config.zoom_enabled = t, e.updateAndRedraw();
        }, A.unzoom = function () {
          var t = this.internal;
          t.config.subchart_show ? t.brush.clear() : (t.updateXDomain(null, !0, !1, !1, t.subX.domain()), t.redraw({
            withY: t.config.zoom_rescale,
            withSubchart: !1
          }));
        }, A.zoom.max = function (t) {
          var e = this.internal,
              n = e.config,
              r = e.d3;
          if (0 !== t && !t) return n.zoom_x_max;
          n.zoom_x_max = r.max([e.orgXDomain[1], t]);
        }, A.zoom.min = function (t) {
          var e = this.internal,
              n = e.config,
              r = e.d3;
          if (0 !== t && !t) return n.zoom_x_min;
          n.zoom_x_min = r.min([e.orgXDomain[0], t]);
        }, A.zoom.range = function (t) {
          if (!arguments.length) return {
            max: this.domain.max(),
            min: this.domain.min()
          };
          d(t.max) && this.domain.max(t.max), d(t.min) && this.domain.min(t.min);
        }, T.initPie = function () {
          var t = this,
              e = t.d3;
          t.pie = e.pie().value(function (t) {
            return t.values.reduce(function (t, e) {
              return t + e.value;
            }, 0);
          });
          var n = t.getOrderFunction();

          if (n && (t.isOrderAsc() || t.isOrderDesc())) {
            var r = n;

            n = function n(t, e) {
              return -1 * r(t, e);
            };
          }

          t.pie.sort(n || null);
        }, T.updateRadius = function () {
          var t = this,
              e = t.config,
              n = e.gauge_width || e.donut_width,
              r = t.filterTargetsToShow(t.data.targets).length * t.config.gauge_arcs_minWidth;
          t.radiusExpanded = Math.min(t.arcWidth, t.arcHeight) / 2 * (t.hasType("gauge") ? .85 : 1), t.radius = .95 * t.radiusExpanded, t.innerRadiusRatio = n ? (t.radius - n) / t.radius : .6, t.innerRadius = t.hasType("donut") || t.hasType("gauge") ? t.radius * t.innerRadiusRatio : 0, t.gaugeArcWidth = n || (r <= t.radius - t.innerRadius ? t.radius - t.innerRadius : r <= t.radius ? r : t.radius);
        }, T.updateArc = function () {
          var t = this;
          t.svgArc = t.getSvgArc(), t.svgArcExpanded = t.getSvgArcExpanded(), t.svgArcExpandedSub = t.getSvgArcExpanded(.98);
        }, T.updateAngle = function (t) {
          var e,
              n,
              r,
              i,
              a = this,
              o = a.config,
              u = !1,
              c = 0;
          return o ? (a.pie(a.filterTargetsToShow(a.data.targets)).forEach(function (e) {
            u || e.data.id !== t.data.id || (u = !0, (t = e).index = c), c++;
          }), isNaN(t.startAngle) && (t.startAngle = 0), isNaN(t.endAngle) && (t.endAngle = t.startAngle), a.isGaugeType(t.data) && (e = o.gauge_min, n = o.gauge_max, r = Math.PI * (o.gauge_fullCircle ? 2 : 1) / (n - e), i = t.value < e ? 0 : t.value < n ? t.value - e : n - e, t.startAngle = o.gauge_startingAngle, t.endAngle = t.startAngle + r * i), u ? t : null) : null;
        }, T.getSvgArc = function () {
          var t = this,
              e = t.hasType("gauge"),
              n = t.gaugeArcWidth / t.filterTargetsToShow(t.data.targets).length,
              r = t.d3.arc().outerRadius(function (r) {
            return e ? t.radius - n * r.index : t.radius;
          }).innerRadius(function (r) {
            return e ? t.radius - n * (r.index + 1) : t.innerRadius;
          }),
              i = function i(e, n) {
            var i;
            return n ? r(e) : (i = t.updateAngle(e)) ? r(i) : "M 0 0";
          };

          return i.centroid = r.centroid, i;
        }, T.getSvgArcExpanded = function (t) {
          t = t || 1;
          var e = this,
              n = e.hasType("gauge"),
              r = e.gaugeArcWidth / e.filterTargetsToShow(e.data.targets).length,
              i = Math.min(e.radiusExpanded * t - e.radius, .8 * r - 100 * (1 - t)),
              a = e.d3.arc().outerRadius(function (a) {
            return n ? e.radius - r * a.index + i : e.radiusExpanded * t;
          }).innerRadius(function (t) {
            return n ? e.radius - r * (t.index + 1) : e.innerRadius;
          });
          return function (t) {
            var n = e.updateAngle(t);
            return n ? a(n) : "M 0 0";
          };
        }, T.getArc = function (t, e, n) {
          return n || this.isArcType(t.data) ? this.svgArc(t, e) : "M 0 0";
        }, T.transformForArcLabel = function (t) {
          var e,
              n,
              r,
              i,
              a,
              o = this,
              u = o.config,
              s = o.updateAngle(t),
              f = "",
              l = o.hasType("gauge");
          if (s && !l) e = this.svgArc.centroid(s), n = isNaN(e[0]) ? 0 : e[0], r = isNaN(e[1]) ? 0 : e[1], i = Math.sqrt(n * n + r * r), f = "translate(" + n * (a = o.hasType("donut") && u.donut_label_ratio ? c(u.donut_label_ratio) ? u.donut_label_ratio(t, o.radius, i) : u.donut_label_ratio : o.hasType("pie") && u.pie_label_ratio ? c(u.pie_label_ratio) ? u.pie_label_ratio(t, o.radius, i) : u.pie_label_ratio : o.radius && i ? (36 / o.radius > .375 ? 1.175 - 36 / o.radius : .8) * o.radius / i : 0) + "," + r * a + ")";else if (s && l && o.filterTargetsToShow(o.data.targets).length > 1) {
            var d = Math.sin(s.endAngle - Math.PI / 2);
            f = "translate(" + (n = Math.cos(s.endAngle - Math.PI / 2) * (o.radiusExpanded + 25)) + "," + (r = d * (o.radiusExpanded + 15 - Math.abs(10 * d)) + 3) + ")";
          }
          return f;
        }, T.getArcRatio = function (t) {
          var e = this.config,
              n = Math.PI * (this.hasType("gauge") && !e.gauge_fullCircle ? 1 : 2);
          return t ? (t.endAngle - t.startAngle) / n : null;
        }, T.convertToArcData = function (t) {
          return this.addName({
            id: t.data.id,
            value: t.value,
            ratio: this.getArcRatio(t),
            index: t.index
          });
        }, T.textForArcLabel = function (t) {
          var e,
              n,
              r,
              i,
              a,
              o = this;
          return o.shouldShowArcLabel() ? (n = (e = o.updateAngle(t)) ? e.value : null, r = o.getArcRatio(e), i = t.data.id, o.hasType("gauge") || o.meetsArcLabelThreshold(r) ? (a = o.getArcLabelFormat()) ? a(n, r, i) : o.defaultArcValueFormat(n, r) : "") : "";
        }, T.textForGaugeMinMax = function (t, e) {
          var n = this.getGaugeLabelExtents();
          return n ? n(t, e) : t;
        }, T.expandArc = function (t) {
          var e,
              n = this;
          n.transiting ? e = window.setInterval(function () {
            n.transiting || (window.clearInterval(e), n.legend.selectAll(".c3-legend-item-focused").size() > 0 && n.expandArc(t));
          }, 10) : (t = n.mapToTargetIds(t), n.svg.selectAll(n.selectorTargets(t, "." + r.chartArc)).each(function (t) {
            n.shouldExpand(t.data.id) && n.d3.select(this).selectAll("path").transition().duration(n.expandDuration(t.data.id)).attr("d", n.svgArcExpanded).transition().duration(2 * n.expandDuration(t.data.id)).attr("d", n.svgArcExpandedSub).each(function (t) {
              n.isDonutType(t.data);
            });
          }));
        }, T.unexpandArc = function (t) {
          var e = this;
          e.transiting || (t = e.mapToTargetIds(t), e.svg.selectAll(e.selectorTargets(t, "." + r.chartArc)).selectAll("path").transition().duration(function (t) {
            return e.expandDuration(t.data.id);
          }).attr("d", e.svgArc), e.svg.selectAll("." + r.arc));
        }, T.expandDuration = function (t) {
          var e = this.config;
          return this.isDonutType(t) ? e.donut_expand_duration : this.isGaugeType(t) ? e.gauge_expand_duration : this.isPieType(t) ? e.pie_expand_duration : 50;
        }, T.shouldExpand = function (t) {
          var e = this.config;
          return this.isDonutType(t) && e.donut_expand || this.isGaugeType(t) && e.gauge_expand || this.isPieType(t) && e.pie_expand;
        }, T.shouldShowArcLabel = function () {
          var t = this.config,
              e = !0;
          return this.hasType("donut") ? e = t.donut_label_show : this.hasType("pie") && (e = t.pie_label_show), e;
        }, T.meetsArcLabelThreshold = function (t) {
          var e = this.config;
          return t >= (this.hasType("donut") ? e.donut_label_threshold : e.pie_label_threshold);
        }, T.getArcLabelFormat = function () {
          var t = this.config,
              e = t.pie_label_format;
          return this.hasType("gauge") ? e = t.gauge_label_format : this.hasType("donut") && (e = t.donut_label_format), e;
        }, T.getGaugeLabelExtents = function () {
          return this.config.gauge_label_extents;
        }, T.getArcTitle = function () {
          return this.hasType("donut") ? this.config.donut_title : "";
        }, T.updateTargetsForArc = function (t) {
          var e,
              n = this,
              i = n.main,
              a = n.classChartArc.bind(n),
              o = n.classArcs.bind(n),
              u = n.classFocus.bind(n);
          (e = i.select("." + r.chartArcs).selectAll("." + r.chartArc).data(n.pie(t)).attr("class", function (t) {
            return a(t) + u(t.data);
          }).enter().append("g").attr("class", a)).append("g").attr("class", o), e.append("text").attr("dy", n.hasType("gauge") ? "-.1em" : ".35em").style("opacity", 0).style("text-anchor", "middle").style("pointer-events", "none");
        }, T.initArc = function () {
          var t = this;
          t.arcs = t.main.select("." + r.chart).append("g").attr("class", r.chartArcs).attr("transform", t.getTranslate("arc")), t.arcs.append("text").attr("class", r.chartArcsTitle).style("text-anchor", "middle").text(t.getArcTitle());
        }, T.redrawArc = function (t, e, n) {
          var i,
              a,
              o,
              u,
              c,
              s = this,
              f = s.d3,
              l = s.config,
              d = s.main,
              h = s.hasType("gauge");

          if (a = (i = d.selectAll("." + r.arcs).selectAll("." + r.arc).data(s.arcData.bind(s))).enter().append("path").attr("class", s.classArc.bind(s)).style("fill", function (t) {
            return s.color(t.data);
          }).style("cursor", function (t) {
            return l.interaction_enabled && l.data_selection_isselectable(t) ? "pointer" : null;
          }).each(function (t) {
            s.isGaugeType(t.data) && (t.startAngle = t.endAngle = l.gauge_startingAngle), this._current = t;
          }).merge(i), h && (c = (u = d.selectAll("." + r.arcs).selectAll("." + r.arcLabelLine).data(s.arcData.bind(s))).enter().append("rect").attr("class", function (t) {
            return r.arcLabelLine + " " + r.target + " " + r.target + "-" + t.data.id;
          }).merge(u), 1 === s.filterTargetsToShow(s.data.targets).length ? c.style("display", "none") : c.style("fill", function (t) {
            return l.color_pattern.length > 0 ? s.levelColor(t.data.values[0].value) : s.color(t.data);
          }).style("display", l.gauge_labelLine_show ? "" : "none").each(function (t) {
            var e = 0,
                n = 0,
                r = 0,
                i = "";

            if (s.hiddenTargetIds.indexOf(t.data.id) < 0) {
              var a = s.updateAngle(t),
                  o = s.gaugeArcWidth / s.filterTargetsToShow(s.data.targets).length * (a.index + 1),
                  u = a.endAngle - Math.PI / 2,
                  c = s.radius - o,
                  l = u - (0 === c ? 0 : 1 / c);
              e = s.radiusExpanded - s.radius + o, n = Math.cos(l) * c, r = Math.sin(l) * c, i = "rotate(" + 180 * u / Math.PI + ", " + n + ", " + r + ")";
            }

            f.select(this).attr("x", n).attr("y", r).attr("width", e).attr("height", 2).attr("transform", i).style("stroke-dasharray", "0, " + (e + 2) + ", 0");
          })), a.attr("transform", function (t) {
            return !s.isGaugeType(t.data) && n ? "scale(0)" : "";
          }).on("mouseover", l.interaction_enabled ? function (t) {
            var e, n;
            s.transiting || (e = s.updateAngle(t)) && (n = s.convertToArcData(e), s.expandArc(e.data.id), s.api.focus(e.data.id), s.toggleFocusLegend(e.data.id, !0), s.config.data_onmouseover(n, this));
          } : null).on("mousemove", l.interaction_enabled ? function (t) {
            var e,
                n = s.updateAngle(t);
            n && (e = [s.convertToArcData(n)], s.showTooltip(e, this));
          } : null).on("mouseout", l.interaction_enabled ? function (t) {
            var e, n;
            s.transiting || (e = s.updateAngle(t)) && (n = s.convertToArcData(e), s.unexpandArc(e.data.id), s.api.revert(), s.revertLegend(), s.hideTooltip(), s.config.data_onmouseout(n, this));
          } : null).on("click", l.interaction_enabled ? function (t, e) {
            var n,
                r = s.updateAngle(t);
            r && (n = s.convertToArcData(r), s.toggleShape && s.toggleShape(this, n, e), s.config.data_onclick.call(s.api, n, this));
          } : null).each(function () {
            s.transiting = !0;
          }).transition().duration(t).attrTween("d", function (t) {
            var e,
                n = s.updateAngle(t);
            return n ? (isNaN(this._current.startAngle) && (this._current.startAngle = 0), isNaN(this._current.endAngle) && (this._current.endAngle = this._current.startAngle), e = f.interpolate(this._current, n), this._current = e(0), function (n) {
              var r = e(n);
              return r.data = t.data, s.getArc(r, !0);
            }) : function () {
              return "M 0 0";
            };
          }).attr("transform", n ? "scale(1)" : "").style("fill", function (t) {
            return s.levelColor ? s.levelColor(t.data.values[0].value) : s.color(t.data.id);
          }).call(s.endall, function () {
            s.transiting = !1;
          }), i.exit().transition().duration(e).style("opacity", 0).remove(), d.selectAll("." + r.chartArc).select("text").style("opacity", 0).attr("class", function (t) {
            return s.isGaugeType(t.data) ? r.gaugeValue : "";
          }).text(s.textForArcLabel.bind(s)).attr("transform", s.transformForArcLabel.bind(s)).style("font-size", function (t) {
            return s.isGaugeType(t.data) && 1 === s.filterTargetsToShow(s.data.targets).length ? Math.round(s.radius / 5) + "px" : "";
          }).transition().duration(t).style("opacity", function (t) {
            return s.isTargetToShow(t.data.id) && s.isArcType(t.data) ? 1 : 0;
          }), d.select("." + r.chartArcsTitle).style("opacity", s.hasType("donut") || h ? 1 : 0), h) {
            var g = 0;
            (o = s.arcs.select("g." + r.chartArcsBackground).selectAll("path." + r.chartArcsBackground).data(s.data.targets)).enter().append("path"), o.attr("class", function (t, e) {
              return r.chartArcsBackground + " " + r.chartArcsBackground + "-" + e;
            }).attr("d", function (t) {
              if (s.hiddenTargetIds.indexOf(t.id) >= 0) return "M 0 0";
              var e = {
                data: [{
                  value: l.gauge_max
                }],
                startAngle: l.gauge_startingAngle,
                endAngle: -1 * l.gauge_startingAngle * (l.gauge_fullCircle ? Math.PI : 1),
                index: g++
              };
              return s.getArc(e, !0, !0);
            }), o.exit().remove(), s.arcs.select("." + r.chartArcsGaugeUnit).attr("dy", ".75em").text(l.gauge_label_show ? l.gauge_units : ""), s.arcs.select("." + r.chartArcsGaugeMin).attr("dx", -1 * (s.innerRadius + (s.radius - s.innerRadius) / (l.gauge_fullCircle ? 1 : 2)) + "px").attr("dy", "1.2em").text(l.gauge_label_show ? s.textForGaugeMinMax(l.gauge_min, !1) : ""), s.arcs.select("." + r.chartArcsGaugeMax).attr("dx", s.innerRadius + (s.radius - s.innerRadius) / (l.gauge_fullCircle ? 1 : 2) + "px").attr("dy", "1.2em").text(l.gauge_label_show ? s.textForGaugeMinMax(l.gauge_max, !0) : "");
          }
        }, T.initGauge = function () {
          var t = this.arcs;
          this.hasType("gauge") && (t.append("g").attr("class", r.chartArcsBackground), t.append("text").attr("class", r.chartArcsGaugeUnit).style("text-anchor", "middle").style("pointer-events", "none"), t.append("text").attr("class", r.chartArcsGaugeMin).style("text-anchor", "middle").style("pointer-events", "none"), t.append("text").attr("class", r.chartArcsGaugeMax).style("text-anchor", "middle").style("pointer-events", "none"));
        }, T.getGaugeLabelHeight = function () {
          return this.config.gauge_label_show ? 20 : 0;
        }, T.hasCaches = function (t) {
          for (var e = 0; e < t.length; e++) {
            if (!(t[e] in this.cache)) return !1;
          }

          return !0;
        }, T.addCache = function (t, e) {
          this.cache[t] = this.cloneTarget(e);
        }, T.getCaches = function (t) {
          var e,
              n = [];

          for (e = 0; e < t.length; e++) {
            t[e] in this.cache && n.push(this.cloneTarget(this.cache[t[e]]));
          }

          return n;
        }, T.categoryName = function (t) {
          var e = this.config;
          return t < e.axis_x_categories.length ? e.axis_x_categories[t] : t;
        }, T.generateTargetClass = function (t) {
          return t || 0 === t ? ("-" + t).replace(/\s/g, "-") : "";
        }, T.generateClass = function (t, e) {
          return " " + t + " " + t + this.generateTargetClass(e);
        }, T.classText = function (t) {
          return this.generateClass(r.text, t.index);
        }, T.classTexts = function (t) {
          return this.generateClass(r.texts, t.id);
        }, T.classShape = function (t) {
          return this.generateClass(r.shape, t.index);
        }, T.classShapes = function (t) {
          return this.generateClass(r.shapes, t.id);
        }, T.classLine = function (t) {
          return this.classShape(t) + this.generateClass(r.line, t.id);
        }, T.classLines = function (t) {
          return this.classShapes(t) + this.generateClass(r.lines, t.id);
        }, T.classCircle = function (t) {
          return this.classShape(t) + this.generateClass(r.circle, t.index);
        }, T.classCircles = function (t) {
          return this.classShapes(t) + this.generateClass(r.circles, t.id);
        }, T.classBar = function (t) {
          return this.classShape(t) + this.generateClass(r.bar, t.index);
        }, T.classBars = function (t) {
          return this.classShapes(t) + this.generateClass(r.bars, t.id);
        }, T.classArc = function (t) {
          return this.classShape(t.data) + this.generateClass(r.arc, t.data.id);
        }, T.classArcs = function (t) {
          return this.classShapes(t.data) + this.generateClass(r.arcs, t.data.id);
        }, T.classArea = function (t) {
          return this.classShape(t) + this.generateClass(r.area, t.id);
        }, T.classAreas = function (t) {
          return this.classShapes(t) + this.generateClass(r.areas, t.id);
        }, T.classRegion = function (t, e) {
          return this.generateClass(r.region, e) + " " + ("class" in t ? t["class"] : "");
        }, T.classEvent = function (t) {
          return this.generateClass(r.eventRect, t.index);
        }, T.classTarget = function (t) {
          var e = this.config.data_classes[t],
              n = "";
          return e && (n = " " + r.target + "-" + e), this.generateClass(r.target, t) + n;
        }, T.classFocus = function (t) {
          return this.classFocused(t) + this.classDefocused(t);
        }, T.classFocused = function (t) {
          return " " + (this.focusedTargetIds.indexOf(t.id) >= 0 ? r.focused : "");
        }, T.classDefocused = function (t) {
          return " " + (this.defocusedTargetIds.indexOf(t.id) >= 0 ? r.defocused : "");
        }, T.classChartText = function (t) {
          return r.chartText + this.classTarget(t.id);
        }, T.classChartLine = function (t) {
          return r.chartLine + this.classTarget(t.id);
        }, T.classChartBar = function (t) {
          return r.chartBar + this.classTarget(t.id);
        }, T.classChartArc = function (t) {
          return r.chartArc + this.classTarget(t.data.id);
        }, T.getTargetSelectorSuffix = function (t) {
          return this.generateTargetClass(t).replace(/([?!@#$%^&*()_=+,.<>'":;\[\]\/|~`{}\\])/g, "\\$1");
        }, T.selectorTarget = function (t, e) {
          return (e || "") + "." + r.target + this.getTargetSelectorSuffix(t);
        }, T.selectorTargets = function (t, e) {
          var n = this;
          return (t = t || []).length ? t.map(function (t) {
            return n.selectorTarget(t, e);
          }) : null;
        }, T.selectorLegend = function (t) {
          return "." + r.legendItem + this.getTargetSelectorSuffix(t);
        }, T.selectorLegends = function (t) {
          var e = this;
          return t && t.length ? t.map(function (t) {
            return e.selectorLegend(t);
          }) : null;
        }, T.getClipPath = function (t) {
          return "url(" + (window.navigator.appVersion.toLowerCase().indexOf("msie 9.") >= 0 ? "" : document.URL.split("#")[0]) + "#" + t + ")";
        }, T.appendClip = function (t, e) {
          return t.append("clipPath").attr("id", e).append("rect");
        }, T.getAxisClipX = function (t) {
          var e = Math.max(30, this.margin.left);
          return t ? -(1 + e) : -(e - 1);
        }, T.getAxisClipY = function (t) {
          return t ? -20 : -this.margin.top;
        }, T.getXAxisClipX = function () {
          return this.getAxisClipX(!this.config.axis_rotated);
        }, T.getXAxisClipY = function () {
          return this.getAxisClipY(!this.config.axis_rotated);
        }, T.getYAxisClipX = function () {
          return this.config.axis_y_inner ? -1 : this.getAxisClipX(this.config.axis_rotated);
        }, T.getYAxisClipY = function () {
          return this.getAxisClipY(this.config.axis_rotated);
        }, T.getAxisClipWidth = function (t) {
          var e = Math.max(30, this.margin.left),
              n = Math.max(30, this.margin.right);
          return t ? this.width + 2 + e + n : this.margin.left + 20;
        }, T.getAxisClipHeight = function (t) {
          return (t ? this.margin.bottom : this.margin.top + this.height) + 20;
        }, T.getXAxisClipWidth = function () {
          return this.getAxisClipWidth(!this.config.axis_rotated);
        }, T.getXAxisClipHeight = function () {
          return this.getAxisClipHeight(!this.config.axis_rotated);
        }, T.getYAxisClipWidth = function () {
          return this.getAxisClipWidth(this.config.axis_rotated) + (this.config.axis_y_inner ? 20 : 0);
        }, T.getYAxisClipHeight = function () {
          return this.getAxisClipHeight(this.config.axis_rotated);
        }, T.generateColor = function () {
          var t = this.config,
              e = this.d3,
              n = t.data_colors,
              r = x(t.color_pattern) ? t.color_pattern : e.schemeCategory10,
              i = t.data_color,
              a = [];
          return function (t) {
            var e,
                o = t.id || t.data && t.data.id || t;
            return n[o] instanceof Function ? e = n[o](t) : n[o] ? e = n[o] : (a.indexOf(o) < 0 && a.push(o), e = r[a.indexOf(o) % r.length], n[o] = e), i instanceof Function ? i(e, t) : e;
          };
        }, T.generateLevelColor = function () {
          var t = this.config,
              e = t.color_pattern,
              n = t.color_threshold,
              r = "value" === n.unit,
              i = n.values && n.values.length ? n.values : [],
              a = n.max || 100;
          return x(t.color_threshold) ? function (t) {
            var n,
                o = e[e.length - 1];

            for (n = 0; n < i.length; n++) {
              if ((r ? t : 100 * t / a) < i[n]) {
                o = e[n];
                break;
              }
            }

            return o;
          } : null;
        }, T.getDefaultConfig = function () {
          var t = {
            bindto: "#chart",
            svg_classname: void 0,
            size_width: void 0,
            size_height: void 0,
            padding_left: void 0,
            padding_right: void 0,
            padding_top: void 0,
            padding_bottom: void 0,
            resize_auto: !0,
            zoom_enabled: !1,
            zoom_initialRange: void 0,
            zoom_privileged: !1,
            zoom_rescale: !1,
            zoom_onzoom: function zoom_onzoom() {},
            zoom_onzoomstart: function zoom_onzoomstart() {},
            zoom_onzoomend: function zoom_onzoomend() {},
            zoom_x_min: void 0,
            zoom_x_max: void 0,
            interaction_brighten: !0,
            interaction_enabled: !0,
            onmouseover: function onmouseover() {},
            onmouseout: function onmouseout() {},
            onresize: function onresize() {},
            onresized: function onresized() {},
            oninit: function oninit() {},
            onrendered: function onrendered() {},
            transition_duration: 350,
            data_x: void 0,
            data_xs: {},
            data_xFormat: "%Y-%m-%d",
            data_xLocaltime: !0,
            data_xSort: !0,
            data_idConverter: function data_idConverter(t) {
              return t;
            },
            data_names: {},
            data_classes: {},
            data_groups: [],
            data_axes: {},
            data_type: void 0,
            data_types: {},
            data_labels: {},
            data_order: "desc",
            data_regions: {},
            data_color: void 0,
            data_colors: {},
            data_hide: !1,
            data_filter: void 0,
            data_selection_enabled: !1,
            data_selection_grouped: !1,
            data_selection_isselectable: function data_selection_isselectable() {
              return !0;
            },
            data_selection_multiple: !0,
            data_selection_draggable: !1,
            data_onclick: function data_onclick() {},
            data_onmouseover: function data_onmouseover() {},
            data_onmouseout: function data_onmouseout() {},
            data_onselected: function data_onselected() {},
            data_onunselected: function data_onunselected() {},
            data_url: void 0,
            data_headers: void 0,
            data_json: void 0,
            data_rows: void 0,
            data_columns: void 0,
            data_mimeType: void 0,
            data_keys: void 0,
            data_empty_label_text: "",
            subchart_show: !1,
            subchart_size_height: 60,
            subchart_axis_x_show: !0,
            subchart_onbrush: function subchart_onbrush() {},
            color_pattern: [],
            color_threshold: {},
            legend_show: !0,
            legend_hide: !1,
            legend_position: "bottom",
            legend_inset_anchor: "top-left",
            legend_inset_x: 10,
            legend_inset_y: 0,
            legend_inset_step: void 0,
            legend_item_onclick: void 0,
            legend_item_onmouseover: void 0,
            legend_item_onmouseout: void 0,
            legend_equally: !1,
            legend_padding: 0,
            legend_item_tile_width: 10,
            legend_item_tile_height: 10,
            axis_rotated: !1,
            axis_x_show: !0,
            axis_x_type: "indexed",
            axis_x_localtime: !0,
            axis_x_categories: [],
            axis_x_tick_centered: !1,
            axis_x_tick_format: void 0,
            axis_x_tick_culling: {},
            axis_x_tick_culling_max: 10,
            axis_x_tick_count: void 0,
            axis_x_tick_fit: !0,
            axis_x_tick_values: null,
            axis_x_tick_rotate: 0,
            axis_x_tick_outer: !0,
            axis_x_tick_multiline: !0,
            axis_x_tick_multilineMax: 0,
            axis_x_tick_width: null,
            axis_x_max: void 0,
            axis_x_min: void 0,
            axis_x_padding: {},
            axis_x_height: void 0,
            axis_x_selection: void 0,
            axis_x_label: {},
            axis_x_inner: void 0,
            axis_y_show: !0,
            axis_y_type: void 0,
            axis_y_max: void 0,
            axis_y_min: void 0,
            axis_y_inverted: !1,
            axis_y_center: void 0,
            axis_y_inner: void 0,
            axis_y_label: {},
            axis_y_tick_format: void 0,
            axis_y_tick_outer: !0,
            axis_y_tick_values: null,
            axis_y_tick_rotate: 0,
            axis_y_tick_count: void 0,
            axis_y_tick_time_type: void 0,
            axis_y_tick_time_interval: void 0,
            axis_y_padding: {},
            axis_y_default: void 0,
            axis_y2_show: !1,
            axis_y2_max: void 0,
            axis_y2_min: void 0,
            axis_y2_inverted: !1,
            axis_y2_center: void 0,
            axis_y2_inner: void 0,
            axis_y2_label: {},
            axis_y2_tick_format: void 0,
            axis_y2_tick_outer: !0,
            axis_y2_tick_values: null,
            axis_y2_tick_count: void 0,
            axis_y2_padding: {},
            axis_y2_default: void 0,
            grid_x_show: !1,
            grid_x_type: "tick",
            grid_x_lines: [],
            grid_y_show: !1,
            grid_y_lines: [],
            grid_y_ticks: 10,
            grid_focus_show: !0,
            grid_lines_front: !0,
            point_show: !0,
            point_r: 2.5,
            point_sensitivity: 10,
            point_focus_expand_enabled: !0,
            point_focus_expand_r: void 0,
            point_select_r: void 0,
            line_connectNull: !1,
            line_step_type: "step",
            bar_width: void 0,
            bar_width_ratio: .6,
            bar_width_max: void 0,
            bar_zerobased: !0,
            bar_space: 0,
            area_zerobased: !0,
            area_above: !1,
            pie_label_show: !0,
            pie_label_format: void 0,
            pie_label_threshold: .05,
            pie_label_ratio: void 0,
            pie_expand: {},
            pie_expand_duration: 50,
            gauge_fullCircle: !1,
            gauge_label_show: !0,
            gauge_labelLine_show: !0,
            gauge_label_format: void 0,
            gauge_min: 0,
            gauge_max: 100,
            gauge_startingAngle: -1 * Math.PI / 2,
            gauge_label_extents: void 0,
            gauge_units: void 0,
            gauge_width: void 0,
            gauge_arcs_minWidth: 5,
            gauge_expand: {},
            gauge_expand_duration: 50,
            donut_label_show: !0,
            donut_label_format: void 0,
            donut_label_threshold: .05,
            donut_label_ratio: void 0,
            donut_width: void 0,
            donut_title: "",
            donut_expand: {},
            donut_expand_duration: 50,
            spline_interpolation_type: "cardinal",
            regions: [],
            tooltip_show: !0,
            tooltip_grouped: !0,
            tooltip_order: void 0,
            tooltip_format_title: void 0,
            tooltip_format_name: void 0,
            tooltip_format_value: void 0,
            tooltip_position: void 0,
            tooltip_contents: function tooltip_contents(t, e, n, r) {
              return this.getTooltipContent ? this.getTooltipContent(t, e, n, r) : "";
            },
            tooltip_init_show: !1,
            tooltip_init_x: 0,
            tooltip_init_position: {
              top: "0px",
              left: "50px"
            },
            tooltip_onshow: function tooltip_onshow() {},
            tooltip_onhide: function tooltip_onhide() {},
            title_text: void 0,
            title_padding: {
              top: 0,
              right: 0,
              bottom: 0,
              left: 0
            },
            title_position: "top-center"
          };
          return Object.keys(this.additionalConfig).forEach(function (e) {
            t[e] = this.additionalConfig[e];
          }, this), t;
        }, T.additionalConfig = {}, T.loadConfig = function (t) {
          var e,
              n,
              r,
              a = this.config;
          Object.keys(a).forEach(function (o) {
            e = t, n = o.split("_"), r = function t() {
              var r = n.shift();
              return r && e && "object" === (void 0 === e ? "undefined" : i(e)) && r in e ? (e = e[r], t()) : r ? void 0 : e;
            }(), d(r) && (a[o] = r);
          });
        }, T.convertUrlToData = function (t, e, n, r, i) {
          var a,
              o,
              u = this,
              c = e || "csv";
          "json" === c ? (a = u.d3.json, o = u.convertJsonToData) : "tsv" === c ? (a = u.d3.tsv, o = u.convertXsvToData) : (a = u.d3.csv, o = u.convertXsvToData), a(t, n).then(function (t) {
            i.call(u, o.call(u, t, r));
          })["catch"](function (t) {
            throw t;
          });
        }, T.convertXsvToData = function (t) {
          var e = t.columns;
          return 0 === t.length ? {
            keys: e,
            rows: [e.reduce(function (t, e) {
              return Object.assign(t, function (t, e, n) {
                return e in t ? Object.defineProperty(t, e, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
                }) : t[e] = n, t;
              }({}, e, null));
            }, {})]
          } : {
            keys: e,
            rows: [].concat(t)
          };
        }, T.convertJsonToData = function (t, e) {
          var n,
              r,
              i = this,
              a = [];
          return e ? (e.x ? (n = e.value.concat(e.x), i.config.data_x = e.x) : n = e.value, a.push(n), t.forEach(function (t) {
            var e = [];
            n.forEach(function (n) {
              var r = i.findValueInJson(t, n);
              l(r) && (r = null), e.push(r);
            }), a.push(e);
          }), r = i.convertRowsToData(a)) : (Object.keys(t).forEach(function (e) {
            a.push([e].concat(t[e]));
          }), r = i.convertColumnsToData(a)), r;
        }, T.findValueInJson = function (t, e) {
          for (var n = (e = (e = e.replace(/\[(\w+)\]/g, ".$1")).replace(/^\./, "")).split("."), r = 0; r < n.length; ++r) {
            var i = n[r];
            if (!(i in t)) return;
            t = t[i];
          }

          return t;
        }, T.convertRowsToData = function (t) {
          for (var e = [], n = t[0], r = 1; r < t.length; r++) {
            for (var i = {}, a = 0; a < t[r].length; a++) {
              if (l(t[r][a])) throw new Error("Source data is missing a component at (" + r + "," + a + ")!");
              i[n[a]] = t[r][a];
            }

            e.push(i);
          }

          return {
            keys: n,
            rows: e
          };
        }, T.convertColumnsToData = function (t) {
          for (var e = [], n = [], r = 0; r < t.length; r++) {
            for (var i = t[r][0], a = 1; a < t[r].length; a++) {
              if (l(e[a - 1]) && (e[a - 1] = {}), l(t[r][a])) throw new Error("Source data is missing a component at (" + r + "," + a + ")!");
              e[a - 1][i] = t[r][a];
            }

            n.push(i);
          }

          return {
            keys: n,
            rows: e
          };
        }, T.convertDataToTargets = function (t, e) {
          var n,
              r,
              i,
              a,
              o = this,
              c = o.config;
          return s(t) ? a = Object.keys(t[0]) : (a = t.keys, t = t.rows), r = a.filter(o.isNotX, o), i = a.filter(o.isX, o), r.forEach(function (n) {
            var r = o.getXKey(n);
            o.isCustomX() || o.isTimeSeries() ? i.indexOf(r) >= 0 ? o.data.xs[n] = (e && o.data.xs[n] ? o.data.xs[n] : []).concat(t.map(function (t) {
              return t[r];
            }).filter(u).map(function (t, e) {
              return o.generateTargetX(t, n, e);
            })) : c.data_x ? o.data.xs[n] = o.getOtherTargetXs() : x(c.data_xs) && (o.data.xs[n] = o.getXValuesOfXKey(r, o.data.targets)) : o.data.xs[n] = t.map(function (t, e) {
              return e;
            });
          }), r.forEach(function (t) {
            if (!o.data.xs[t]) throw new Error('x is not defined for id = "' + t + '".');
          }), (n = r.map(function (e, n) {
            var r = c.data_idConverter(e);
            return {
              id: r,
              id_org: e,
              values: t.map(function (t, i) {
                var a,
                    u = t[o.getXKey(e)],
                    s = null === t[e] || isNaN(t[e]) ? null : +t[e];
                return o.isCustomX() && o.isCategorized() && !l(u) ? (0 === n && 0 === i && (c.axis_x_categories = []), -1 === (a = c.axis_x_categories.indexOf(u)) && (a = c.axis_x_categories.length, c.axis_x_categories.push(u))) : a = o.generateTargetX(u, e, i), (l(t[e]) || o.data.xs[e].length <= i) && (a = void 0), {
                  x: a,
                  value: s,
                  id: r
                };
              }).filter(function (t) {
                return d(t.x);
              })
            };
          })).forEach(function (t) {
            var e;
            c.data_xSort && (t.values = t.values.sort(function (t, e) {
              return (t.x || 0 === t.x ? t.x : 1 / 0) - (e.x || 0 === e.x ? e.x : 1 / 0);
            })), e = 0, t.values.forEach(function (t) {
              t.index = e++;
            }), o.data.xs[t.id].sort(function (t, e) {
              return t - e;
            });
          }), o.hasNegativeValue = o.hasNegativeValueInTargets(n), o.hasPositiveValue = o.hasPositiveValueInTargets(n), c.data_type && o.setTargetType(o.mapToIds(n).filter(function (t) {
            return !(t in c.data_types);
          }), c.data_type), n.forEach(function (t) {
            o.addCache(t.id_org, t);
          }), n;
        }, T.isX = function (t) {
          var e = this.config;
          return e.data_x && t === e.data_x || x(e.data_xs) && v(e.data_xs, t);
        }, T.isNotX = function (t) {
          return !this.isX(t);
        }, T.getXKey = function (t) {
          var e = this.config;
          return e.data_x ? e.data_x : x(e.data_xs) ? e.data_xs[t] : null;
        }, T.getXValuesOfXKey = function (t, e) {
          var n,
              r = this;
          return (e && x(e) ? r.mapToIds(e) : []).forEach(function (e) {
            r.getXKey(e) === t && (n = r.data.xs[e]);
          }), n;
        }, T.getXValue = function (t, e) {
          return t in this.data.xs && this.data.xs[t] && u(this.data.xs[t][e]) ? this.data.xs[t][e] : e;
        }, T.getOtherTargetXs = function () {
          var t = Object.keys(this.data.xs);
          return t.length ? this.data.xs[t[0]] : null;
        }, T.getOtherTargetX = function (t) {
          var e = this.getOtherTargetXs();
          return e && t < e.length ? e[t] : null;
        }, T.addXs = function (t) {
          var e = this;
          Object.keys(t).forEach(function (n) {
            e.config.data_xs[n] = t[n];
          });
        }, T.addName = function (t) {
          var e;
          return t && (e = this.config.data_names[t.id], t.name = void 0 !== e ? e : t.id), t;
        }, T.getValueOnIndex = function (t, e) {
          var n = t.filter(function (t) {
            return t.index === e;
          });
          return n.length ? n[0] : null;
        }, T.updateTargetX = function (t, e) {
          var n = this;
          t.forEach(function (t) {
            t.values.forEach(function (r, i) {
              r.x = n.generateTargetX(e[i], t.id, i);
            }), n.data.xs[t.id] = e;
          });
        }, T.updateTargetXs = function (t, e) {
          var n = this;
          t.forEach(function (t) {
            e[t.id] && n.updateTargetX([t], e[t.id]);
          });
        }, T.generateTargetX = function (t, e, n) {
          var r = this;
          return r.isTimeSeries() ? t ? r.parseDate(t) : r.parseDate(r.getXValue(e, n)) : r.isCustomX() && !r.isCategorized() ? u(t) ? +t : r.getXValue(e, n) : n;
        }, T.cloneTarget = function (t) {
          return {
            id: t.id,
            id_org: t.id_org,
            values: t.values.map(function (t) {
              return {
                x: t.x,
                value: t.value,
                id: t.id
              };
            })
          };
        }, T.getMaxDataCount = function () {
          return this.d3.max(this.data.targets, function (t) {
            return t.values.length;
          });
        }, T.mapToIds = function (t) {
          return t.map(function (t) {
            return t.id;
          });
        }, T.mapToTargetIds = function (t) {
          return t ? [].concat(t) : this.mapToIds(this.data.targets);
        }, T.hasTarget = function (t, e) {
          var n,
              r = this.mapToIds(t);

          for (n = 0; n < r.length; n++) {
            if (r[n] === e) return !0;
          }

          return !1;
        }, T.isTargetToShow = function (t) {
          return this.hiddenTargetIds.indexOf(t) < 0;
        }, T.isLegendToShow = function (t) {
          return this.hiddenLegendIds.indexOf(t) < 0;
        }, T.filterTargetsToShow = function (t) {
          var e = this;
          return t.filter(function (t) {
            return e.isTargetToShow(t.id);
          });
        }, T.mapTargetsToUniqueXs = function (t) {
          var e = this.d3.set(this.d3.merge(t.map(function (t) {
            return t.values.map(function (t) {
              return +t.x;
            });
          }))).values();
          return (e = this.isTimeSeries() ? e.map(function (t) {
            return new Date(+t);
          }) : e.map(function (t) {
            return +t;
          })).sort(function (t, e) {
            return t < e ? -1 : t > e ? 1 : t >= e ? 0 : NaN;
          });
        }, T.addHiddenTargetIds = function (t) {
          t = t instanceof Array ? t : new Array(t);

          for (var e = 0; e < t.length; e++) {
            this.hiddenTargetIds.indexOf(t[e]) < 0 && (this.hiddenTargetIds = this.hiddenTargetIds.concat(t[e]));
          }
        }, T.removeHiddenTargetIds = function (t) {
          this.hiddenTargetIds = this.hiddenTargetIds.filter(function (e) {
            return t.indexOf(e) < 0;
          });
        }, T.addHiddenLegendIds = function (t) {
          t = t instanceof Array ? t : new Array(t);

          for (var e = 0; e < t.length; e++) {
            this.hiddenLegendIds.indexOf(t[e]) < 0 && (this.hiddenLegendIds = this.hiddenLegendIds.concat(t[e]));
          }
        }, T.removeHiddenLegendIds = function (t) {
          this.hiddenLegendIds = this.hiddenLegendIds.filter(function (e) {
            return t.indexOf(e) < 0;
          });
        }, T.getValuesAsIdKeyed = function (t) {
          var e = {};
          return t.forEach(function (t) {
            e[t.id] = [], t.values.forEach(function (n) {
              e[t.id].push(n.value);
            });
          }), e;
        }, T.checkValueInTargets = function (t, e) {
          var n,
              r,
              i,
              a = Object.keys(t);

          for (n = 0; n < a.length; n++) {
            for (i = t[a[n]].values, r = 0; r < i.length; r++) {
              if (e(i[r].value)) return !0;
            }
          }

          return !1;
        }, T.hasNegativeValueInTargets = function (t) {
          return this.checkValueInTargets(t, function (t) {
            return t < 0;
          });
        }, T.hasPositiveValueInTargets = function (t) {
          return this.checkValueInTargets(t, function (t) {
            return t > 0;
          });
        }, T.isOrderDesc = function () {
          var t = this.config;
          return "string" == typeof t.data_order && "desc" === t.data_order.toLowerCase();
        }, T.isOrderAsc = function () {
          var t = this.config;
          return "string" == typeof t.data_order && "asc" === t.data_order.toLowerCase();
        }, T.getOrderFunction = function () {
          var t = this.config,
              e = this.isOrderAsc(),
              n = this.isOrderDesc();

          if (e || n) {
            var r = function r(t, e) {
              return t + Math.abs(e.value);
            };

            return function (t, n) {
              var i = t.values.reduce(r, 0),
                  a = n.values.reduce(r, 0);
              return e ? a - i : i - a;
            };
          }

          if (c(t.data_order)) return t.data_order;

          if (s(t.data_order)) {
            var i = t.data_order;
            return function (t, e) {
              return i.indexOf(t.id) - i.indexOf(e.id);
            };
          }
        }, T.orderTargets = function (t) {
          var e = this.getOrderFunction();
          return e && t.sort(e), t;
        }, T.filterByX = function (t, e) {
          return this.d3.merge(t.map(function (t) {
            return t.values;
          })).filter(function (t) {
            return t.x - e == 0;
          });
        }, T.filterRemoveNull = function (t) {
          return t.filter(function (t) {
            return u(t.value);
          });
        }, T.filterByXDomain = function (t, e) {
          return t.map(function (t) {
            return {
              id: t.id,
              id_org: t.id_org,
              values: t.values.filter(function (t) {
                return e[0] <= t.x && t.x <= e[1];
              })
            };
          });
        }, T.hasDataLabel = function () {
          var t = this.config;
          return !("boolean" != typeof t.data_labels || !t.data_labels) || !("object" !== i(t.data_labels) || !x(t.data_labels));
        }, T.getDataLabelLength = function (t, e, n) {
          var r = this,
              i = [0, 0];
          return r.selectChart.select("svg").selectAll(".dummy").data([t, e]).enter().append("text").text(function (t) {
            return r.dataLabelFormat(t.id)(t);
          }).each(function (t, e) {
            i[e] = 1.3 * this.getBoundingClientRect()[n];
          }).remove(), i;
        }, T.isNoneArc = function (t) {
          return this.hasTarget(this.data.targets, t.id);
        }, T.isArc = function (t) {
          return "data" in t && this.hasTarget(this.data.targets, t.data.id);
        }, T.findClosestFromTargets = function (t, e) {
          var n,
              r = this;
          return n = t.map(function (t) {
            return r.findClosest(t.values, e);
          }), r.findClosest(n, e);
        }, T.findClosest = function (t, e) {
          var n,
              i = this,
              a = i.config.point_sensitivity;
          return t.filter(function (t) {
            return t && i.isBarType(t.id);
          }).forEach(function (t) {
            var e = i.main.select("." + r.bars + i.getTargetSelectorSuffix(t.id) + " ." + r.bar + "-" + t.index).node();
            !n && i.isWithinBar(i.d3.mouse(e), e) && (n = t);
          }), t.filter(function (t) {
            return t && !i.isBarType(t.id);
          }).forEach(function (t) {
            var r = i.dist(t, e);
            r < a && (a = r, n = t);
          }), n;
        }, T.dist = function (t, e) {
          var n = this.config,
              r = n.axis_rotated ? 1 : 0,
              i = n.axis_rotated ? 0 : 1,
              a = this.circleY(t, t.index),
              o = this.x(t.x);
          return Math.sqrt(Math.pow(o - e[r], 2) + Math.pow(a - e[i], 2));
        }, T.convertValuesToStep = function (t) {
          var e,
              n = [].concat(t);
          if (!this.isCategorized()) return t;

          for (e = t.length + 1; 0 < e; e--) {
            n[e] = n[e - 1];
          }

          return n[0] = {
            x: n[0].x - 1,
            value: n[0].value,
            id: n[0].id
          }, n[t.length + 1] = {
            x: n[t.length].x + 1,
            value: n[t.length].value,
            id: n[t.length].id
          }, n;
        }, T.updateDataAttributes = function (t, e) {
          var n = this.config["data_" + t];
          return void 0 === e ? n : (Object.keys(e).forEach(function (t) {
            n[t] = e[t];
          }), this.redraw({
            withLegend: !0
          }), n);
        }, T.load = function (t, e) {
          var n = this;
          t && (e.filter && (t = t.filter(e.filter)), (e.type || e.types) && t.forEach(function (t) {
            var r = e.types && e.types[t.id] ? e.types[t.id] : e.type;
            n.setTargetType(t.id, r);
          }), n.data.targets.forEach(function (e) {
            for (var n = 0; n < t.length; n++) {
              if (e.id === t[n].id) {
                e.values = t[n].values, t.splice(n, 1);
                break;
              }
            }
          }), n.data.targets = n.data.targets.concat(t)), n.updateTargets(n.data.targets), n.redraw({
            withUpdateOrgXDomain: !0,
            withUpdateXDomain: !0,
            withLegend: !0
          }), e.done && e.done();
        }, T.loadFromArgs = function (t) {
          var e = this;
          t.data ? e.load(e.convertDataToTargets(t.data), t) : t.url ? e.convertUrlToData(t.url, t.mimeType, t.headers, t.keys, function (n) {
            e.load(e.convertDataToTargets(n), t);
          }) : t.json ? e.load(e.convertDataToTargets(e.convertJsonToData(t.json, t.keys)), t) : t.rows ? e.load(e.convertDataToTargets(e.convertRowsToData(t.rows)), t) : t.columns ? e.load(e.convertDataToTargets(e.convertColumnsToData(t.columns)), t) : e.load(null, t);
        }, T.unload = function (t, e) {
          var n = this;
          e || (e = function e() {}), (t = t.filter(function (t) {
            return n.hasTarget(n.data.targets, t);
          })) && 0 !== t.length ? (n.svg.selectAll(t.map(function (t) {
            return n.selectorTarget(t);
          })).transition().style("opacity", 0).remove().call(n.endall, e), t.forEach(function (t) {
            n.withoutFadeIn[t] = !1, n.legend && n.legend.selectAll("." + r.legendItem + n.getTargetSelectorSuffix(t)).remove(), n.data.targets = n.data.targets.filter(function (e) {
              return e.id !== t;
            });
          })) : e();
        }, T.getYDomainMin = function (t) {
          var e,
              n,
              r,
              i,
              a,
              o,
              u = this,
              c = u.config,
              s = u.mapToIds(t),
              f = u.getValuesAsIdKeyed(t);
          if (c.data_groups.length > 0) for (o = u.hasNegativeValueInTargets(t), e = 0; e < c.data_groups.length; e++) {
            if (0 !== (i = c.data_groups[e].filter(function (t) {
              return s.indexOf(t) >= 0;
            })).length) for (r = i[0], o && f[r] && f[r].forEach(function (t, e) {
              f[r][e] = t < 0 ? t : 0;
            }), n = 1; n < i.length; n++) {
              a = i[n], f[a] && f[a].forEach(function (t, e) {
                u.axis.getId(a) !== u.axis.getId(r) || !f[r] || o && +t > 0 || (f[r][e] += +t);
              });
            }
          }
          return u.d3.min(Object.keys(f).map(function (t) {
            return u.d3.min(f[t]);
          }));
        }, T.getYDomainMax = function (t) {
          var e,
              n,
              r,
              i,
              a,
              o,
              u = this,
              c = u.config,
              s = u.mapToIds(t),
              f = u.getValuesAsIdKeyed(t);
          if (c.data_groups.length > 0) for (o = u.hasPositiveValueInTargets(t), e = 0; e < c.data_groups.length; e++) {
            if (0 !== (i = c.data_groups[e].filter(function (t) {
              return s.indexOf(t) >= 0;
            })).length) for (r = i[0], o && f[r] && f[r].forEach(function (t, e) {
              f[r][e] = t > 0 ? t : 0;
            }), n = 1; n < i.length; n++) {
              a = i[n], f[a] && f[a].forEach(function (t, e) {
                u.axis.getId(a) !== u.axis.getId(r) || !f[r] || o && +t < 0 || (f[r][e] += +t);
              });
            }
          }
          return u.d3.max(Object.keys(f).map(function (t) {
            return u.d3.max(f[t]);
          }));
        }, T.getYDomain = function (t, e, n) {
          var r,
              i,
              a,
              o,
              c,
              s,
              f,
              l,
              d,
              h,
              g = this,
              _ = g.config,
              y = t.filter(function (t) {
            return g.axis.getId(t.id) === e;
          }),
              v = n ? g.filterByXDomain(y, n) : y,
              b = "y2" === e ? _.axis_y2_min : _.axis_y_min,
              m = "y2" === e ? _.axis_y2_max : _.axis_y_max,
              w = g.getYDomainMin(v),
              S = g.getYDomainMax(v),
              A = "y2" === e ? _.axis_y2_center : _.axis_y_center,
              T = g.hasType("bar", v) && _.bar_zerobased || g.hasType("area", v) && _.area_zerobased,
              P = "y2" === e ? _.axis_y2_inverted : _.axis_y_inverted,
              C = g.hasDataLabel() && _.axis_rotated,
              M = g.hasDataLabel() && !_.axis_rotated;

          return w = u(b) ? b : u(m) ? w < m ? w : m - 10 : w, S = u(m) ? m : u(b) ? b < S ? S : b + 10 : S, 0 === v.length ? "y2" === e ? g.y2.domain() : g.y.domain() : (isNaN(w) && (w = 0), isNaN(S) && (S = w), w === S && (w < 0 ? S = 0 : w = 0), d = w >= 0 && S >= 0, h = w <= 0 && S <= 0, (u(b) && d || u(m) && h) && (T = !1), T && (d && (w = 0), h && (S = 0)), a = o = .1 * (i = Math.abs(S - w)), void 0 !== A && (S = A + (c = Math.max(Math.abs(w), Math.abs(S))), w = A - c), C ? (s = g.getDataLabelLength(w, S, "width"), f = p(g.y.range()), a += i * ((l = [s[0] / f, s[1] / f])[1] / (1 - l[0] - l[1])), o += i * (l[0] / (1 - l[0] - l[1]))) : M && (s = g.getDataLabelLength(w, S, "height"), a += g.axis.convertPixelsToAxisPadding(s[1], i), o += g.axis.convertPixelsToAxisPadding(s[0], i)), "y" === e && x(_.axis_y_padding) && (a = g.axis.getPadding(_.axis_y_padding, "top", a, i), o = g.axis.getPadding(_.axis_y_padding, "bottom", o, i)), "y2" === e && x(_.axis_y2_padding) && (a = g.axis.getPadding(_.axis_y2_padding, "top", a, i), o = g.axis.getPadding(_.axis_y2_padding, "bottom", o, i)), T && (d && (o = w), h && (a = -S)), r = [w - o, S + a], P ? r.reverse() : r);
        }, T.getXDomainMin = function (t) {
          var e = this,
              n = e.config;
          return d(n.axis_x_min) ? e.isTimeSeries() ? this.parseDate(n.axis_x_min) : n.axis_x_min : e.d3.min(t, function (t) {
            return e.d3.min(t.values, function (t) {
              return t.x;
            });
          });
        }, T.getXDomainMax = function (t) {
          var e = this,
              n = e.config;
          return d(n.axis_x_max) ? e.isTimeSeries() ? this.parseDate(n.axis_x_max) : n.axis_x_max : e.d3.max(t, function (t) {
            return e.d3.max(t.values, function (t) {
              return t.x;
            });
          });
        }, T.getXDomainPadding = function (t) {
          var e,
              n,
              r,
              a,
              o = this.config,
              c = t[1] - t[0];
          return n = this.isCategorized() ? 0 : this.hasType("bar") ? (e = this.getMaxDataCount()) > 1 ? c / (e - 1) / 2 : .5 : .01 * c, "object" === i(o.axis_x_padding) && x(o.axis_x_padding) ? (r = u(o.axis_x_padding.left) ? o.axis_x_padding.left : n, a = u(o.axis_x_padding.right) ? o.axis_x_padding.right : n) : r = a = "number" == typeof o.axis_x_padding ? o.axis_x_padding : n, {
            left: r,
            right: a
          };
        }, T.getXDomain = function (t) {
          var e = this,
              n = [e.getXDomainMin(t), e.getXDomainMax(t)],
              r = n[0],
              i = n[1],
              a = e.getXDomainPadding(n),
              o = 0,
              u = 0;
          return r - i != 0 || e.isCategorized() || (e.isTimeSeries() ? (r = new Date(.5 * r.getTime()), i = new Date(1.5 * i.getTime())) : (r = 0 === r ? 1 : .5 * r, i = 0 === i ? -1 : 1.5 * i)), (r || 0 === r) && (o = e.isTimeSeries() ? new Date(r.getTime() - a.left) : r - a.left), (i || 0 === i) && (u = e.isTimeSeries() ? new Date(i.getTime() + a.right) : i + a.right), [o, u];
        }, T.updateXDomain = function (t, e, n, r, i) {
          var a = this,
              o = a.config;
          return n && (a.x.domain(i || a.d3.extent(a.getXDomain(t))), a.orgXDomain = a.x.domain(), o.zoom_enabled && a.zoom.update(), a.subX.domain(a.x.domain()), a.brush && a.brush.updateScale(a.subX)), e && a.x.domain(i || (!a.brush || a.brush.empty() ? a.orgXDomain : a.brush.selectionAsValue())), r && a.x.domain(a.trimXDomain(a.x.orgDomain())), a.x.domain();
        }, T.trimXDomain = function (t) {
          var e = this.getZoomDomain(),
              n = e[0],
              r = e[1];
          return t[0] <= n && (t[1] = +t[1] + (n - t[0]), t[0] = n), r <= t[1] && (t[0] = +t[0] - (t[1] - r), t[1] = r), t;
        }, T.drag = function (t) {
          var e,
              n,
              i,
              a,
              o,
              u,
              c,
              s,
              f = this,
              l = f.config,
              d = f.main,
              h = f.d3;
          f.hasArcType() || l.data_selection_enabled && l.data_selection_multiple && (e = f.dragStart[0], n = f.dragStart[1], i = t[0], a = t[1], o = Math.min(e, i), u = Math.max(e, i), c = l.data_selection_grouped ? f.margin.top : Math.min(n, a), s = l.data_selection_grouped ? f.height : Math.max(n, a), d.select("." + r.dragarea).attr("x", o).attr("y", c).attr("width", u - o).attr("height", s - c), d.selectAll("." + r.shapes).selectAll("." + r.shape).filter(function (t) {
            return l.data_selection_isselectable(t);
          }).each(function (t, e) {
            var n,
                i,
                a,
                l,
                d,
                g,
                p = h.select(this),
                _ = p.classed(r.SELECTED),
                x = p.classed(r.INCLUDED),
                y = !1;

            if (p.classed(r.circle)) n = 1 * p.attr("cx"), i = 1 * p.attr("cy"), d = f.togglePoint, y = o < n && n < u && c < i && i < s;else {
              if (!p.classed(r.bar)) return;
              n = (g = m(this)).x, i = g.y, a = g.width, l = g.height, d = f.togglePath, y = !(u < n || n + a < o || s < i || i + l < c);
            }
            y ^ x && (p.classed(r.INCLUDED, !x), p.classed(r.SELECTED, !_), d.call(f, !_, p, t, e));
          }));
        }, T.dragstart = function (t) {
          var e = this,
              n = e.config;
          e.hasArcType() || n.data_selection_enabled && (e.dragStart = t, e.main.select("." + r.chart).append("rect").attr("class", r.dragarea).style("opacity", .1), e.dragging = !0);
        }, T.dragend = function () {
          var t = this,
              e = t.config;
          t.hasArcType() || e.data_selection_enabled && (t.main.select("." + r.dragarea).transition().duration(100).style("opacity", 0).remove(), t.main.selectAll("." + r.shape).classed(r.INCLUDED, !1), t.dragging = !1);
        }, T.getYFormat = function (t) {
          var e = this,
              n = t && !e.hasType("gauge") ? e.defaultArcValueFormat : e.yFormat,
              r = t && !e.hasType("gauge") ? e.defaultArcValueFormat : e.y2Format;
          return function (t, i, a) {
            return ("y2" === e.axis.getId(a) ? r : n).call(e, t, i);
          };
        }, T.yFormat = function (t) {
          var e = this.config;
          return (e.axis_y_tick_format ? e.axis_y_tick_format : this.defaultValueFormat)(t);
        }, T.y2Format = function (t) {
          var e = this.config;
          return (e.axis_y2_tick_format ? e.axis_y2_tick_format : this.defaultValueFormat)(t);
        }, T.defaultValueFormat = function (t) {
          return u(t) ? +t : "";
        }, T.defaultArcValueFormat = function (t, e) {
          return (100 * e).toFixed(1) + "%";
        }, T.dataLabelFormat = function (t) {
          var e = this.config.data_labels,
              n = function n(t) {
            return u(t) ? +t : "";
          };

          return "function" == typeof e.format ? e.format : "object" === i(e.format) ? e.format[t] ? !0 === e.format[t] ? n : e.format[t] : function () {
            return "";
          } : n;
        }, T.initGrid = function () {
          var t = this,
              e = t.config,
              n = t.d3;
          t.grid = t.main.append("g").attr("clip-path", t.clipPathForGrid).attr("class", r.grid), e.grid_x_show && t.grid.append("g").attr("class", r.xgrids), e.grid_y_show && t.grid.append("g").attr("class", r.ygrids), e.grid_focus_show && t.grid.append("g").attr("class", r.xgridFocus).append("line").attr("class", r.xgridFocus), t.xgrid = n.selectAll([]), e.grid_lines_front || t.initGridLines();
        }, T.initGridLines = function () {
          var t = this,
              e = t.d3;
          t.gridLines = t.main.append("g").attr("clip-path", t.clipPathForGrid).attr("class", r.grid + " " + r.gridLines), t.gridLines.append("g").attr("class", r.xgridLines), t.gridLines.append("g").attr("class", r.ygridLines), t.xgridLines = e.selectAll([]);
        }, T.updateXGrid = function (t) {
          var e = this,
              n = e.config,
              i = e.d3,
              a = e.generateGridData(n.grid_x_type, e.x),
              o = e.isCategorized() ? e.xAxis.tickOffset() : 0;
          e.xgridAttr = n.axis_rotated ? {
            x1: 0,
            x2: e.width,
            y1: function y1(t) {
              return e.x(t) - o;
            },
            y2: function y2(t) {
              return e.x(t) - o;
            }
          } : {
            x1: function x1(t) {
              return e.x(t) + o;
            },
            x2: function x2(t) {
              return e.x(t) + o;
            },
            y1: 0,
            y2: e.height
          }, e.xgridAttr.opacity = function () {
            return +i.select(this).attr(n.axis_rotated ? "y1" : "x1") === (n.axis_rotated ? e.height : 0) ? 0 : 1;
          };
          var u = e.main.select("." + r.xgrids).selectAll("." + r.xgrid).data(a),
              c = u.enter().append("line").attr("class", r.xgrid).attr("x1", e.xgridAttr.x1).attr("x2", e.xgridAttr.x2).attr("y1", e.xgridAttr.y1).attr("y2", e.xgridAttr.y2).style("opacity", 0);
          e.xgrid = c.merge(u), t || e.xgrid.attr("x1", e.xgridAttr.x1).attr("x2", e.xgridAttr.x2).attr("y1", e.xgridAttr.y1).attr("y2", e.xgridAttr.y2).style("opacity", e.xgridAttr.opacity), u.exit().remove();
        }, T.updateYGrid = function () {
          var t = this,
              e = t.config,
              n = t.yAxis.tickValues() || t.y.ticks(e.grid_y_ticks),
              i = t.main.select("." + r.ygrids).selectAll("." + r.ygrid).data(n),
              a = i.enter().append("line").attr("class", r.ygrid);
          t.ygrid = a.merge(i), t.ygrid.attr("x1", e.axis_rotated ? t.y : 0).attr("x2", e.axis_rotated ? t.y : t.width).attr("y1", e.axis_rotated ? 0 : t.y).attr("y2", e.axis_rotated ? t.height : t.y), i.exit().remove(), t.smoothLines(t.ygrid, "grid");
        }, T.gridTextAnchor = function (t) {
          return t.position ? t.position : "end";
        }, T.gridTextDx = function (t) {
          return "start" === t.position ? 4 : "middle" === t.position ? 0 : -4;
        }, T.xGridTextX = function (t) {
          return "start" === t.position ? -this.height : "middle" === t.position ? -this.height / 2 : 0;
        }, T.yGridTextX = function (t) {
          return "start" === t.position ? 0 : "middle" === t.position ? this.width / 2 : this.width;
        }, T.updateGrid = function (t) {
          var e,
              n,
              i,
              a,
              o = this,
              u = o.main,
              c = o.config,
              s = o.xv.bind(o),
              f = o.yv.bind(o),
              l = o.xGridTextX.bind(o),
              d = o.yGridTextX.bind(o);
          o.grid.style("visibility", o.hasArcType() ? "hidden" : "visible"), u.select("line." + r.xgridFocus).style("visibility", "hidden"), c.grid_x_show && o.updateXGrid(), (n = (e = u.select("." + r.xgridLines).selectAll("." + r.xgridLine).data(c.grid_x_lines)).enter().append("g").attr("class", function (t) {
            return r.xgridLine + (t["class"] ? " " + t["class"] : "");
          })).append("line").attr("x1", c.axis_rotated ? 0 : s).attr("x2", c.axis_rotated ? o.width : s).attr("y1", c.axis_rotated ? s : 0).attr("y2", c.axis_rotated ? s : o.height).style("opacity", 0), n.append("text").attr("text-anchor", o.gridTextAnchor).attr("transform", c.axis_rotated ? "" : "rotate(-90)").attr("x", c.axis_rotated ? d : l).attr("y", s).attr("dx", o.gridTextDx).attr("dy", -5).style("opacity", 0), o.xgridLines = n.merge(e), e.exit().transition().duration(t).style("opacity", 0).remove(), c.grid_y_show && o.updateYGrid(), (a = (i = u.select("." + r.ygridLines).selectAll("." + r.ygridLine).data(c.grid_y_lines)).enter().append("g").attr("class", function (t) {
            return r.ygridLine + (t["class"] ? " " + t["class"] : "");
          })).append("line").attr("x1", c.axis_rotated ? f : 0).attr("x2", c.axis_rotated ? f : o.width).attr("y1", c.axis_rotated ? 0 : f).attr("y2", c.axis_rotated ? o.height : f).style("opacity", 0), a.append("text").attr("text-anchor", o.gridTextAnchor).attr("transform", c.axis_rotated ? "rotate(-90)" : "").attr("x", c.axis_rotated ? l : d).attr("y", f).attr("dx", o.gridTextDx).attr("dy", -5).style("opacity", 0), o.ygridLines = a.merge(i), o.ygridLines.select("line").transition().duration(t).attr("x1", c.axis_rotated ? f : 0).attr("x2", c.axis_rotated ? f : o.width).attr("y1", c.axis_rotated ? 0 : f).attr("y2", c.axis_rotated ? o.height : f).style("opacity", 1), o.ygridLines.select("text").transition().duration(t).attr("x", c.axis_rotated ? o.xGridTextX.bind(o) : o.yGridTextX.bind(o)).attr("y", f).text(function (t) {
            return t.text;
          }).style("opacity", 1), i.exit().transition().duration(t).style("opacity", 0).remove();
        }, T.redrawGrid = function (t, e) {
          var n = this,
              r = n.config,
              i = n.xv.bind(n),
              a = n.xgridLines.select("line"),
              o = n.xgridLines.select("text");
          return [(t ? a.transition(e) : a).attr("x1", r.axis_rotated ? 0 : i).attr("x2", r.axis_rotated ? n.width : i).attr("y1", r.axis_rotated ? i : 0).attr("y2", r.axis_rotated ? i : n.height).style("opacity", 1), (t ? o.transition(e) : o).attr("x", r.axis_rotated ? n.yGridTextX.bind(n) : n.xGridTextX.bind(n)).attr("y", i).text(function (t) {
            return t.text;
          }).style("opacity", 1)];
        }, T.showXGridFocus = function (t) {
          var e = this,
              n = e.config,
              i = t.filter(function (t) {
            return t && u(t.value);
          }),
              a = e.main.selectAll("line." + r.xgridFocus),
              o = e.xx.bind(e);
          n.tooltip_show && (e.hasType("scatter") || e.hasArcType() || (a.style("visibility", "visible").data([i[0]]).attr(n.axis_rotated ? "y1" : "x1", o).attr(n.axis_rotated ? "y2" : "x2", o), e.smoothLines(a, "grid")));
        }, T.hideXGridFocus = function () {
          this.main.select("line." + r.xgridFocus).style("visibility", "hidden");
        }, T.updateXgridFocus = function () {
          var t = this.config;
          this.main.select("line." + r.xgridFocus).attr("x1", t.axis_rotated ? 0 : -10).attr("x2", t.axis_rotated ? this.width : -10).attr("y1", t.axis_rotated ? -10 : 0).attr("y2", t.axis_rotated ? -10 : this.height);
        }, T.generateGridData = function (t, e) {
          var n,
              i,
              a,
              o,
              u = [],
              c = this.main.select("." + r.axisX).selectAll(".tick").size();
          if ("year" === t) for (i = (n = this.getXDomain())[0].getFullYear(), a = n[1].getFullYear(), o = i; o <= a; o++) {
            u.push(new Date(o + "-01-01 00:00:00"));
          } else (u = e.ticks(10)).length > c && (u = u.filter(function (t) {
            return ("" + t).indexOf(".") < 0;
          }));
          return u;
        }, T.getGridFilterToRemove = function (t) {
          return t ? function (e) {
            var n = !1;
            return [].concat(t).forEach(function (t) {
              ("value" in t && e.value === t.value || "class" in t && e["class"] === t["class"]) && (n = !0);
            }), n;
          } : function () {
            return !0;
          };
        }, T.removeGridLines = function (t, e) {
          var n = this.config,
              i = this.getGridFilterToRemove(t),
              a = function a(t) {
            return !i(t);
          },
              o = e ? r.xgridLines : r.ygridLines,
              u = e ? r.xgridLine : r.ygridLine;

          this.main.select("." + o).selectAll("." + u).filter(i).transition().duration(n.transition_duration).style("opacity", 0).remove(), e ? n.grid_x_lines = n.grid_x_lines.filter(a) : n.grid_y_lines = n.grid_y_lines.filter(a);
        }, T.initEventRect = function () {
          var t = this,
              e = t.config;
          t.main.select("." + r.chart).append("g").attr("class", r.eventRects).style("fill-opacity", 0), t.eventRect = t.main.select("." + r.eventRects).append("rect").attr("class", r.eventRect), e.zoom_enabled && t.zoom && (t.eventRect.call(t.zoom).on("dblclick.zoom", null), e.zoom_initialRange && t.eventRect.transition().duration(0).call(t.zoom.transform, t.zoomTransform(e.zoom_initialRange)));
        }, T.redrawEventRect = function () {
          var t,
              e,
              n = this,
              i = n.d3,
              a = n.config;

          function o() {
            n.svg.select("." + r.eventRect).style("cursor", null), n.hideXGridFocus(), n.hideTooltip(), n.unexpandCircles(), n.unexpandBars();
          }

          t = n.width, e = n.height, n.main.select("." + r.eventRects).style("cursor", a.zoom_enabled ? a.axis_rotated ? "ns-resize" : "ew-resize" : null), n.eventRect.attr("x", 0).attr("y", 0).attr("width", t).attr("height", e).on("mouseout", a.interaction_enabled ? function () {
            a && (n.hasArcType() || o());
          } : null).on("mousemove", a.interaction_enabled ? function () {
            var t, e, u, c;
            n.dragging || n.hasArcType(t) || (t = n.filterTargetsToShow(n.data.targets), e = i.mouse(this), u = n.findClosestFromTargets(t, e), !n.mouseover || u && u.id === n.mouseover.id || (a.data_onmouseout.call(n.api, n.mouseover), n.mouseover = void 0), u ? (c = (n.isScatterType(u) || !a.tooltip_grouped ? [u] : n.filterByX(t, u.x)).map(function (t) {
              return n.addName(t);
            }), n.showTooltip(c, this), a.point_focus_expand_enabled && (n.unexpandCircles(), c.forEach(function (t) {
              n.expandCircles(t.index, t.id, !1);
            })), n.expandBars(u.index, u.id, !0), n.showXGridFocus(c), (n.isBarType(u.id) || n.dist(u, e) < a.point_sensitivity) && (n.svg.select("." + r.eventRect).style("cursor", "pointer"), n.mouseover || (a.data_onmouseover.call(n.api, u), n.mouseover = u))) : o());
          } : null).on("click", a.interaction_enabled ? function () {
            var t, e, o;
            n.hasArcType(t) || (t = n.filterTargetsToShow(n.data.targets), e = i.mouse(this), (o = n.findClosestFromTargets(t, e)) && (n.isBarType(o.id) || n.dist(o, e) < a.point_sensitivity) && (n.isScatterType(o) || !a.data_selection_grouped ? [o] : n.filterByX(t, o.x)).forEach(function (t) {
              n.main.selectAll("." + r.shapes + n.getTargetSelectorSuffix(t.id)).selectAll("." + r.shape + "-" + t.index).each(function () {
                (a.data_selection_grouped || n.isWithinShape(this, t)) && (n.toggleShape(this, t, t.index), a.data_onclick.call(n.api, t, this));
              });
            }));
          } : null).call(a.interaction_enabled && a.data_selection_draggable && n.drag ? i.drag().on("drag", function () {
            n.drag(i.mouse(this));
          }).on("start", function () {
            n.dragstart(i.mouse(this));
          }).on("end", function () {
            n.dragend();
          }) : function () {});
        }, T.getMousePosition = function (t) {
          return [this.x(t.x), this.getYScale(t.id)(t.value)];
        }, T.dispatchEvent = function (t, e) {
          var n = "." + r.eventRect,
              i = this.main.select(n).node(),
              a = i.getBoundingClientRect(),
              o = a.left + (e ? e[0] : 0),
              u = a.top + (e ? e[1] : 0),
              c = document.createEvent("MouseEvents");
          c.initMouseEvent(t, !0, !0, window, 0, o, u, o, u, !1, !1, !1, !1, 0, null), i.dispatchEvent(c);
        }, T.initLegend = function () {
          var t = this;
          if (t.legendItemTextBox = {}, t.legendHasRendered = !1, t.legend = t.svg.append("g").attr("transform", t.getTranslate("legend")), !t.config.legend_show) return t.legend.style("visibility", "hidden"), void (t.hiddenLegendIds = t.mapToIds(t.data.targets));
          t.updateLegendWithDefaults();
        }, T.updateLegendWithDefaults = function () {
          this.updateLegend(this.mapToIds(this.data.targets), {
            withTransform: !1,
            withTransitionForTransform: !1,
            withTransition: !1
          });
        }, T.updateSizeForLegend = function (t, e) {
          var n = this,
              r = n.config,
              i = {
            top: n.isLegendTop ? n.getCurrentPaddingTop() + r.legend_inset_y + 5.5 : n.currentHeight - t - n.getCurrentPaddingBottom() - r.legend_inset_y,
            left: n.isLegendLeft ? n.getCurrentPaddingLeft() + r.legend_inset_x + .5 : n.currentWidth - e - n.getCurrentPaddingRight() - r.legend_inset_x + .5
          };
          n.margin3 = {
            top: n.isLegendRight ? 0 : n.isLegendInset ? i.top : n.currentHeight - t,
            right: NaN,
            bottom: 0,
            left: n.isLegendRight ? n.currentWidth - e : n.isLegendInset ? i.left : 0
          };
        }, T.transformLegend = function (t) {
          (t ? this.legend.transition() : this.legend).attr("transform", this.getTranslate("legend"));
        }, T.updateLegendStep = function (t) {
          this.legendStep = t;
        }, T.updateLegendItemWidth = function (t) {
          this.legendItemWidth = t;
        }, T.updateLegendItemHeight = function (t) {
          this.legendItemHeight = t;
        }, T.getLegendWidth = function () {
          var t = this;
          return t.config.legend_show ? t.isLegendRight || t.isLegendInset ? t.legendItemWidth * (t.legendStep + 1) : t.currentWidth : 0;
        }, T.getLegendHeight = function () {
          var t = this,
              e = 0;
          return t.config.legend_show && (e = t.isLegendRight ? t.currentHeight : Math.max(20, t.legendItemHeight) * (t.legendStep + 1)), e;
        }, T.opacityForLegend = function (t) {
          return t.classed(r.legendItemHidden) ? null : 1;
        }, T.opacityForUnfocusedLegend = function (t) {
          return t.classed(r.legendItemHidden) ? null : .3;
        }, T.toggleFocusLegend = function (t, e) {
          var n = this;
          t = n.mapToTargetIds(t), n.legend.selectAll("." + r.legendItem).filter(function (e) {
            return t.indexOf(e) >= 0;
          }).classed(r.legendItemFocused, e).transition().duration(100).style("opacity", function () {
            return (e ? n.opacityForLegend : n.opacityForUnfocusedLegend).call(n, n.d3.select(this));
          });
        }, T.revertLegend = function () {
          var t = this,
              e = t.d3;
          t.legend.selectAll("." + r.legendItem).classed(r.legendItemFocused, !1).transition().duration(100).style("opacity", function () {
            return t.opacityForLegend(e.select(this));
          });
        }, T.showLegend = function (t) {
          var e = this,
              n = e.config;
          n.legend_show || (n.legend_show = !0, e.legend.style("visibility", "visible"), e.legendHasRendered || e.updateLegendWithDefaults()), e.removeHiddenLegendIds(t), e.legend.selectAll(e.selectorLegends(t)).style("visibility", "visible").transition().style("opacity", function () {
            return e.opacityForLegend(e.d3.select(this));
          });
        }, T.hideLegend = function (t) {
          var e = this,
              n = e.config;
          n.legend_show && _(t) && (n.legend_show = !1, e.legend.style("visibility", "hidden")), e.addHiddenLegendIds(t), e.legend.selectAll(e.selectorLegends(t)).style("opacity", 0).style("visibility", "hidden");
        }, T.clearLegendItemTextBoxCache = function () {
          this.legendItemTextBox = {};
        }, T.updateLegend = function (t, e, n) {
          var i,
              a,
              o,
              u,
              c,
              s,
              f,
              l,
              h,
              g,
              p,
              _,
              x,
              v,
              b,
              m,
              w = this,
              S = w.config,
              A = 4,
              T = 10,
              P = 0,
              C = 0,
              M = 10,
              L = S.legend_item_tile_width + 5,
              E = 0,
              O = {},
              k = {},
              V = {},
              G = [0],
              R = {},
              I = 0;

          function N(e, n, i) {
            var a,
                o,
                u = 0 === i,
                c = i === t.length - 1,
                s = function (t, e) {
              return w.legendItemTextBox[e] || (w.legendItemTextBox[e] = w.getTextRect(t.textContent, r.legendItem, t)), w.legendItemTextBox[e];
            }(e, n),
                f = s.width + L + (!c || w.isLegendRight || w.isLegendInset ? T : 0) + S.legend_padding,
                l = s.height + A,
                d = w.isLegendRight || w.isLegendInset ? l : f,
                h = w.isLegendRight || w.isLegendInset ? w.getLegendHeight() : w.getLegendWidth();

            function g(t, e) {
              e || (a = (h - E - d) / 2) < M && (a = (h - d) / 2, E = 0, I++), R[t] = I, G[I] = w.isLegendInset ? 10 : a, O[t] = E, E += d;
            }

            u && (E = 0, I = 0, P = 0, C = 0), !S.legend_show || w.isLegendToShow(n) ? (k[n] = f, V[n] = l, (!P || f >= P) && (P = f), (!C || l >= C) && (C = l), o = w.isLegendRight || w.isLegendInset ? C : P, S.legend_equally ? (Object.keys(k).forEach(function (t) {
              k[t] = P;
            }), Object.keys(V).forEach(function (t) {
              V[t] = C;
            }), (a = (h - o * t.length) / 2) < M ? (E = 0, I = 0, t.forEach(function (t) {
              g(t);
            })) : g(n, !0)) : g(n)) : k[n] = V[n] = R[n] = O[n] = 0;
          }

          t = t.filter(function (t) {
            return !d(S.data_names[t]) || null !== S.data_names[t];
          }), p = y(e = e || {}, "withTransition", !0), _ = y(e, "withTransitionForTransform", !0), w.isLegendInset && (I = S.legend_inset_step ? S.legend_inset_step : t.length, w.updateLegendStep(I)), w.isLegendRight ? (i = function i(t) {
            return P * R[t];
          }, u = function u(t) {
            return G[R[t]] + O[t];
          }) : w.isLegendInset ? (i = function i(t) {
            return P * R[t] + 10;
          }, u = function u(t) {
            return G[R[t]] + O[t];
          }) : (i = function i(t) {
            return G[R[t]] + O[t];
          }, u = function u(t) {
            return C * R[t];
          }), a = function a(t, e) {
            return i(t, e) + 4 + S.legend_item_tile_width;
          }, c = function c(t, e) {
            return u(t, e) + 9;
          }, o = function o(t, e) {
            return i(t, e);
          }, s = function s(t, e) {
            return u(t, e) - 5;
          }, f = function f(t, e) {
            return i(t, e) - 2;
          }, l = function l(t, e) {
            return i(t, e) - 2 + S.legend_item_tile_width;
          }, h = function h(t, e) {
            return u(t, e) + 4;
          }, (g = w.legend.selectAll("." + r.legendItem).data(t).enter().append("g").attr("class", function (t) {
            return w.generateClass(r.legendItem, t);
          }).style("visibility", function (t) {
            return w.isLegendToShow(t) ? "visible" : "hidden";
          }).style("cursor", "pointer").on("click", function (t) {
            S.legend_item_onclick ? S.legend_item_onclick.call(w, t) : w.d3.event.altKey ? (w.api.hide(), w.api.show(t)) : (w.api.toggle(t), w.isTargetToShow(t) ? w.api.focus(t) : w.api.revert());
          }).on("mouseover", function (t) {
            S.legend_item_onmouseover ? S.legend_item_onmouseover.call(w, t) : (w.d3.select(this).classed(r.legendItemFocused, !0), !w.transiting && w.isTargetToShow(t) && w.api.focus(t));
          }).on("mouseout", function (t) {
            S.legend_item_onmouseout ? S.legend_item_onmouseout.call(w, t) : (w.d3.select(this).classed(r.legendItemFocused, !1), w.api.revert());
          })).append("text").text(function (t) {
            return d(S.data_names[t]) ? S.data_names[t] : t;
          }).each(function (t, e) {
            N(this, t, e);
          }).style("pointer-events", "none").attr("x", w.isLegendRight || w.isLegendInset ? a : -200).attr("y", w.isLegendRight || w.isLegendInset ? -200 : c), g.append("rect").attr("class", r.legendItemEvent).style("fill-opacity", 0).attr("x", w.isLegendRight || w.isLegendInset ? o : -200).attr("y", w.isLegendRight || w.isLegendInset ? -200 : s), g.append("line").attr("class", r.legendItemTile).style("stroke", w.color).style("pointer-events", "none").attr("x1", w.isLegendRight || w.isLegendInset ? f : -200).attr("y1", w.isLegendRight || w.isLegendInset ? -200 : h).attr("x2", w.isLegendRight || w.isLegendInset ? l : -200).attr("y2", w.isLegendRight || w.isLegendInset ? -200 : h).attr("stroke-width", S.legend_item_tile_height), m = w.legend.select("." + r.legendBackground + " rect"), w.isLegendInset && P > 0 && 0 === m.size() && (m = w.legend.insert("g", "." + r.legendItem).attr("class", r.legendBackground).append("rect")), x = w.legend.selectAll("text").data(t).text(function (t) {
            return d(S.data_names[t]) ? S.data_names[t] : t;
          }).each(function (t, e) {
            N(this, t, e);
          }), (p ? x.transition() : x).attr("x", a).attr("y", c), v = w.legend.selectAll("rect." + r.legendItemEvent).data(t), (p ? v.transition() : v).attr("width", function (t) {
            return k[t];
          }).attr("height", function (t) {
            return V[t];
          }).attr("x", o).attr("y", s), b = w.legend.selectAll("line." + r.legendItemTile).data(t), (p ? b.transition() : b).style("stroke", w.levelColor ? function (t) {
            return w.levelColor(w.cache[t].values[0].value);
          } : w.color).attr("x1", f).attr("y1", h).attr("x2", l).attr("y2", h), m && (p ? m.transition() : m).attr("height", w.getLegendHeight() - 12).attr("width", P * (I + 1) + 10), w.legend.selectAll("." + r.legendItem).classed(r.legendItemHidden, function (t) {
            return !w.isTargetToShow(t);
          }), w.updateLegendItemWidth(P), w.updateLegendItemHeight(C), w.updateLegendStep(I), w.updateSizes(), w.updateScales(), w.updateSvgSize(), w.transformAll(_, n), w.legendHasRendered = !0;
        }, T.initRegion = function () {
          this.region = this.main.append("g").attr("clip-path", this.clipPath).attr("class", r.regions);
        }, T.updateRegion = function (t) {
          var e = this,
              n = e.config;
          e.region.style("visibility", e.hasArcType() ? "hidden" : "visible");
          var i = e.main.select("." + r.regions).selectAll("." + r.region).data(n.regions),
              a = i.enter().append("rect").attr("x", e.regionX.bind(e)).attr("y", e.regionY.bind(e)).attr("width", e.regionWidth.bind(e)).attr("height", e.regionHeight.bind(e)).style("fill-opacity", 0);
          e.mainRegion = a.merge(i).attr("class", e.classRegion.bind(e)), i.exit().transition().duration(t).style("opacity", 0).remove();
        }, T.redrawRegion = function (t, e) {
          var n = this,
              r = n.mainRegion;
          return [(t ? r.transition(e) : r).attr("x", n.regionX.bind(n)).attr("y", n.regionY.bind(n)).attr("width", n.regionWidth.bind(n)).attr("height", n.regionHeight.bind(n)).style("fill-opacity", function (t) {
            return u(t.opacity) ? t.opacity : .1;
          })];
        }, T.regionX = function (t) {
          var e = this,
              n = e.config,
              r = "y" === t.axis ? e.y : e.y2;
          return "y" === t.axis || "y2" === t.axis ? n.axis_rotated && "start" in t ? r(t.start) : 0 : n.axis_rotated ? 0 : "start" in t ? e.x(e.isTimeSeries() ? e.parseDate(t.start) : t.start) : 0;
        }, T.regionY = function (t) {
          var e = this,
              n = e.config,
              r = "y" === t.axis ? e.y : e.y2;
          return "y" === t.axis || "y2" === t.axis ? n.axis_rotated ? 0 : "end" in t ? r(t.end) : 0 : n.axis_rotated && "start" in t ? e.x(e.isTimeSeries() ? e.parseDate(t.start) : t.start) : 0;
        }, T.regionWidth = function (t) {
          var e,
              n = this,
              r = n.config,
              i = n.regionX(t),
              a = "y" === t.axis ? n.y : n.y2;
          return (e = "y" === t.axis || "y2" === t.axis ? r.axis_rotated && "end" in t ? a(t.end) : n.width : r.axis_rotated ? n.width : "end" in t ? n.x(n.isTimeSeries() ? n.parseDate(t.end) : t.end) : n.width) < i ? 0 : e - i;
        }, T.regionHeight = function (t) {
          var e,
              n = this,
              r = n.config,
              i = this.regionY(t),
              a = "y" === t.axis ? n.y : n.y2;
          return (e = "y" === t.axis || "y2" === t.axis ? r.axis_rotated ? n.height : "start" in t ? a(t.start) : n.height : r.axis_rotated && "end" in t ? n.x(n.isTimeSeries() ? n.parseDate(t.end) : t.end) : n.height) < i ? 0 : e - i;
        }, T.isRegionOnX = function (t) {
          return !t.axis || "x" === t.axis;
        }, T.getScale = function (t, e, n) {
          return (n ? this.d3.scaleTime() : this.d3.scaleLinear()).range([t, e]);
        }, T.getX = function (t, e, n, r) {
          var i,
              a = this.getScale(t, e, this.isTimeSeries()),
              o = n ? a.domain(n) : a;

          for (i in this.isCategorized() ? (r = r || function () {
            return 0;
          }, a = function a(t, e) {
            var n = o(t) + r(t);
            return e ? n : Math.ceil(n);
          }) : a = function a(t, e) {
            var n = o(t);
            return e ? n : Math.ceil(n);
          }, o) {
            a[i] = o[i];
          }

          return a.orgDomain = function () {
            return o.domain();
          }, this.isCategorized() && (a.domain = function (t) {
            return arguments.length ? (o.domain(t), a) : [(t = this.orgDomain())[0], t[1] + 1];
          }), a;
        }, T.getY = function (t, e, n) {
          var r = this.getScale(t, e, this.isTimeSeriesY());
          return n && r.domain(n), r;
        }, T.getYScale = function (t) {
          return "y2" === this.axis.getId(t) ? this.y2 : this.y;
        }, T.getSubYScale = function (t) {
          return "y2" === this.axis.getId(t) ? this.subY2 : this.subY;
        }, T.updateScales = function () {
          var t = this,
              e = t.config,
              n = !t.x;
          t.xMin = e.axis_rotated ? 1 : 0, t.xMax = e.axis_rotated ? t.height : t.width, t.yMin = e.axis_rotated ? 0 : t.height, t.yMax = e.axis_rotated ? t.width : 1, t.subXMin = t.xMin, t.subXMax = t.xMax, t.subYMin = e.axis_rotated ? 0 : t.height2, t.subYMax = e.axis_rotated ? t.width2 : 1, t.x = t.getX(t.xMin, t.xMax, n ? void 0 : t.x.orgDomain(), function () {
            return t.xAxis.tickOffset();
          }), t.y = t.getY(t.yMin, t.yMax, n ? e.axis_y_default : t.y.domain()), t.y2 = t.getY(t.yMin, t.yMax, n ? e.axis_y2_default : t.y2.domain()), t.subX = t.getX(t.xMin, t.xMax, t.orgXDomain, function (e) {
            return e % 1 ? 0 : t.subXAxis.tickOffset();
          }), t.subY = t.getY(t.subYMin, t.subYMax, n ? e.axis_y_default : t.subY.domain()), t.subY2 = t.getY(t.subYMin, t.subYMax, n ? e.axis_y2_default : t.subY2.domain()), t.xAxisTickFormat = t.axis.getXAxisTickFormat(), t.xAxisTickValues = t.axis.getXAxisTickValues(), t.yAxisTickValues = t.axis.getYAxisTickValues(), t.y2AxisTickValues = t.axis.getY2AxisTickValues(), t.xAxis = t.axis.getXAxis(t.x, t.xOrient, t.xAxisTickFormat, t.xAxisTickValues, e.axis_x_tick_outer), t.subXAxis = t.axis.getXAxis(t.subX, t.subXOrient, t.xAxisTickFormat, t.xAxisTickValues, e.axis_x_tick_outer), t.yAxis = t.axis.getYAxis(t.y, t.yOrient, e.axis_y_tick_format, t.yAxisTickValues, e.axis_y_tick_outer), t.y2Axis = t.axis.getYAxis(t.y2, t.y2Orient, e.axis_y2_tick_format, t.y2AxisTickValues, e.axis_y2_tick_outer), n || t.brush && t.brush.updateScale(t.subX), t.updateArc && t.updateArc();
        }, T.selectPoint = function (t, e, n) {
          var i = this,
              a = i.config,
              o = (a.axis_rotated ? i.circleY : i.circleX).bind(i),
              u = (a.axis_rotated ? i.circleX : i.circleY).bind(i),
              c = i.pointSelectR.bind(i);
          a.data_onselected.call(i.api, e, t.node()), i.main.select("." + r.selectedCircles + i.getTargetSelectorSuffix(e.id)).selectAll("." + r.selectedCircle + "-" + n).data([e]).enter().append("circle").attr("class", function () {
            return i.generateClass(r.selectedCircle, n);
          }).attr("cx", o).attr("cy", u).attr("stroke", function () {
            return i.color(e);
          }).attr("r", function (t) {
            return 1.4 * i.pointSelectR(t);
          }).transition().duration(100).attr("r", c);
        }, T.unselectPoint = function (t, e, n) {
          this.config.data_onunselected.call(this.api, e, t.node()), this.main.select("." + r.selectedCircles + this.getTargetSelectorSuffix(e.id)).selectAll("." + r.selectedCircle + "-" + n).transition().duration(100).attr("r", 0).remove();
        }, T.togglePoint = function (t, e, n, r) {
          t ? this.selectPoint(e, n, r) : this.unselectPoint(e, n, r);
        }, T.selectPath = function (t, e) {
          var n = this;
          n.config.data_onselected.call(n, e, t.node()), n.config.interaction_brighten && t.transition().duration(100).style("fill", function () {
            return n.d3.rgb(n.color(e)).brighter(.75);
          });
        }, T.unselectPath = function (t, e) {
          var n = this;
          n.config.data_onunselected.call(n, e, t.node()), n.config.interaction_brighten && t.transition().duration(100).style("fill", function () {
            return n.color(e);
          });
        }, T.togglePath = function (t, e, n, r) {
          t ? this.selectPath(e, n, r) : this.unselectPath(e, n, r);
        }, T.getToggle = function (t, e) {
          var n;
          return "circle" === t.nodeName ? n = this.isStepType(e) ? function () {} : this.togglePoint : "path" === t.nodeName && (n = this.togglePath), n;
        }, T.toggleShape = function (t, e, n) {
          var i = this,
              a = i.d3,
              o = i.config,
              u = a.select(t),
              c = u.classed(r.SELECTED),
              s = i.getToggle(t, e).bind(i);
          o.data_selection_enabled && o.data_selection_isselectable(e) && (o.data_selection_multiple || i.main.selectAll("." + r.shapes + (o.data_selection_grouped ? i.getTargetSelectorSuffix(e.id) : "")).selectAll("." + r.shape).each(function (t, e) {
            var n = a.select(this);
            n.classed(r.SELECTED) && s(!1, n.classed(r.SELECTED, !1), t, e);
          }), u.classed(r.SELECTED, !c), s(!c, u, e, n));
        }, T.initBar = function () {
          this.main.select("." + r.chart).append("g").attr("class", r.chartBars);
        }, T.updateTargetsForBar = function (t) {
          var e = this,
              n = e.config,
              i = e.classChartBar.bind(e),
              a = e.classBars.bind(e),
              o = e.classFocus.bind(e);
          e.main.select("." + r.chartBars).selectAll("." + r.chartBar).data(t).attr("class", function (t) {
            return i(t) + o(t);
          }).enter().append("g").attr("class", i).style("pointer-events", "none").append("g").attr("class", a).style("cursor", function (t) {
            return n.data_selection_isselectable(t) ? "pointer" : null;
          });
        }, T.updateBar = function (t) {
          var e = this,
              n = e.barData.bind(e),
              i = e.classBar.bind(e),
              a = e.initialOpacity.bind(e),
              o = function o(t) {
            return e.color(t.id);
          },
              u = e.main.selectAll("." + r.bars).selectAll("." + r.bar).data(n),
              c = u.enter().append("path").attr("class", i).style("stroke", o).style("fill", o);

          e.mainBar = c.merge(u).style("opacity", a), u.exit().transition().duration(t).style("opacity", 0);
        }, T.redrawBar = function (t, e, n) {
          return [(e ? this.mainBar.transition(n) : this.mainBar).attr("d", t).style("stroke", this.color).style("fill", this.color).style("opacity", 1)];
        }, T.getBarW = function (t, e) {
          var n = this.config,
              r = "number" == typeof n.bar_width ? n.bar_width : e ? t.tickInterval() * n.bar_width_ratio / e : 0;
          return n.bar_width_max && r > n.bar_width_max ? n.bar_width_max : r;
        }, T.getBars = function (t, e) {
          return (e ? this.main.selectAll("." + r.bars + this.getTargetSelectorSuffix(e)) : this.main).selectAll("." + r.bar + (u(t) ? "-" + t : ""));
        }, T.expandBars = function (t, e, n) {
          n && this.unexpandBars(), this.getBars(t, e).classed(r.EXPANDED, !0);
        }, T.unexpandBars = function (t) {
          this.getBars(t).classed(r.EXPANDED, !1);
        }, T.generateDrawBar = function (t, e) {
          var n = this.config,
              r = this.generateGetBarPoints(t, e);
          return function (t, e) {
            var i = r(t, e),
                a = n.axis_rotated ? 1 : 0,
                o = n.axis_rotated ? 0 : 1;
            return "M " + i[0][a] + "," + i[0][o] + " L" + i[1][a] + "," + i[1][o] + " L" + i[2][a] + "," + i[2][o] + " L" + i[3][a] + "," + i[3][o] + " z";
          };
        }, T.generateGetBarPoints = function (t, e) {
          var n = this,
              r = e ? n.subXAxis : n.xAxis,
              i = t.__max__ + 1,
              a = n.getBarW(r, i),
              o = n.getShapeX(a, i, t, !!e),
              u = n.getShapeY(!!e),
              c = n.getShapeOffset(n.isBarType, t, !!e),
              s = a * (n.config.bar_space / 2),
              f = e ? n.getSubYScale : n.getYScale;
          return function (t, e) {
            var r = f.call(n, t.id)(0),
                i = c(t, e) || r,
                l = o(t),
                d = u(t);
            return n.config.axis_rotated && (0 < t.value && d < r || t.value < 0 && r < d) && (d = r), [[l + s, i], [l + s, d - (r - i)], [l + a - s, d - (r - i)], [l + a - s, i]];
          };
        }, T.isWithinBar = function (t, e) {
          var n = e.getBoundingClientRect(),
              r = e.pathSegList.getItem(0),
              i = e.pathSegList.getItem(1),
              a = Math.min(r.x, i.x),
              o = Math.min(r.y, i.y),
              u = a + n.width + 2,
              c = o + n.height + 2,
              s = o - 2;
          return a - 2 < t[0] && t[0] < u && s < t[1] && t[1] < c;
        }, T.getShapeIndices = function (t) {
          var e,
              n,
              r = this.config,
              i = {},
              a = 0;
          return this.filterTargetsToShow(this.data.targets.filter(t, this)).forEach(function (t) {
            for (e = 0; e < r.data_groups.length; e++) {
              if (!(r.data_groups[e].indexOf(t.id) < 0)) for (n = 0; n < r.data_groups[e].length; n++) {
                if (r.data_groups[e][n] in i) {
                  i[t.id] = i[r.data_groups[e][n]];
                  break;
                }
              }
            }

            l(i[t.id]) && (i[t.id] = a++);
          }), i.__max__ = a - 1, i;
        }, T.getShapeX = function (t, e, n, r) {
          var i = r ? this.subX : this.x;
          return function (r) {
            var a = r.id in n ? n[r.id] : 0;
            return r.x || 0 === r.x ? i(r.x) - t * (e / 2 - a) : 0;
          };
        }, T.getShapeY = function (t) {
          var e = this;
          return function (n) {
            return (t ? e.getSubYScale(n.id) : e.getYScale(n.id))(n.value);
          };
        }, T.getShapeOffset = function (t, e, n) {
          var r = this,
              i = r.orderTargets(r.filterTargetsToShow(r.data.targets.filter(t, r))),
              a = i.map(function (t) {
            return t.id;
          });
          return function (t, o) {
            var u = n ? r.getSubYScale(t.id) : r.getYScale(t.id),
                c = u(0),
                s = c;
            return i.forEach(function (n) {
              var i = r.isStepType(t) ? r.convertValuesToStep(n.values) : n.values;
              n.id !== t.id && e[n.id] === e[t.id] && a.indexOf(n.id) < a.indexOf(t.id) && (void 0 !== i[o] && +i[o].x == +t.x || (o = -1, i.forEach(function (e, n) {
                e.x === t.x && (o = n);
              })), o in i && i[o].value * t.value >= 0 && (s += u(i[o].value) - c));
            }), s;
          };
        }, T.isWithinShape = function (t, e) {
          var n,
              i = this,
              a = i.d3.select(t);
          return i.isTargetToShow(e.id) ? "circle" === t.nodeName ? n = i.isStepType(e) ? i.isWithinStep(t, i.getYScale(e.id)(e.value)) : i.isWithinCircle(t, 1.5 * i.pointSelectR(e)) : "path" === t.nodeName && (n = !a.classed(r.bar) || i.isWithinBar(i.d3.mouse(t), t)) : n = !1, n;
        }, T.getInterpolate = function (t) {
          var e = this,
              n = e.d3,
              r = {
            linear: n.curveLinear,
            "linear-closed": n.curveLinearClosed,
            basis: n.curveBasis,
            "basis-open": n.curveBasisOpen,
            "basis-closed": n.curveBasisClosed,
            bundle: n.curveBundle,
            cardinal: n.curveCardinal,
            "cardinal-open": n.curveCardinalOpen,
            "cardinal-closed": n.curveCardinalClosed,
            monotone: n.curveMonotoneX,
            step: n.curveStep
          };
          return e.isSplineType(t) ? r[e.config.spline_interpolation_type] || r.cardinal : e.isStepType(t) ? r[e.config.line_step_type] : r.linear;
        }, T.initLine = function () {
          this.main.select("." + r.chart).append("g").attr("class", r.chartLines);
        }, T.updateTargetsForLine = function (t) {
          var e,
              n = this,
              i = n.config,
              a = n.classChartLine.bind(n),
              o = n.classLines.bind(n),
              u = n.classAreas.bind(n),
              c = n.classCircles.bind(n),
              s = n.classFocus.bind(n);
          (e = n.main.select("." + r.chartLines).selectAll("." + r.chartLine).data(t).attr("class", function (t) {
            return a(t) + s(t);
          }).enter().append("g").attr("class", a).style("opacity", 0).style("pointer-events", "none")).append("g").attr("class", o), e.append("g").attr("class", u), e.append("g").attr("class", function (t) {
            return n.generateClass(r.selectedCircles, t.id);
          }), e.append("g").attr("class", c).style("cursor", function (t) {
            return i.data_selection_isselectable(t) ? "pointer" : null;
          }), t.forEach(function (t) {
            n.main.selectAll("." + r.selectedCircles + n.getTargetSelectorSuffix(t.id)).selectAll("." + r.selectedCircle).each(function (e) {
              e.value = t.values[e.index].value;
            });
          });
        }, T.updateLine = function (t) {
          var e = this,
              n = e.main.selectAll("." + r.lines).selectAll("." + r.line).data(e.lineData.bind(e)),
              i = n.enter().append("path").attr("class", e.classLine.bind(e)).style("stroke", e.color);
          e.mainLine = i.merge(n).style("opacity", e.initialOpacity.bind(e)).style("shape-rendering", function (t) {
            return e.isStepType(t) ? "crispEdges" : "";
          }).attr("transform", null), n.exit().transition().duration(t).style("opacity", 0);
        }, T.redrawLine = function (t, e, n) {
          return [(e ? this.mainLine.transition(n) : this.mainLine).attr("d", t).style("stroke", this.color).style("opacity", 1)];
        }, T.generateDrawLine = function (t, e) {
          var n = this,
              r = n.config,
              i = n.d3.line(),
              a = n.generateGetLinePoints(t, e),
              o = e ? n.getSubYScale : n.getYScale,
              u = function u(t) {
            return (e ? n.subxx : n.xx).call(n, t);
          },
              c = function c(t, e) {
            return r.data_groups.length > 0 ? a(t, e)[0][1] : o.call(n, t.id)(t.value);
          };

          return i = r.axis_rotated ? i.x(c).y(u) : i.x(u).y(c), r.line_connectNull || (i = i.defined(function (t) {
            return null != t.value;
          })), function (t) {
            var a,
                u = r.line_connectNull ? n.filterRemoveNull(t.values) : t.values,
                c = e ? n.subX : n.x,
                s = o.call(n, t.id),
                f = 0,
                l = 0;
            return n.isLineType(t) ? r.data_regions[t.id] ? a = n.lineWithRegions(u, c, s, r.data_regions[t.id]) : (n.isStepType(t) && (u = n.convertValuesToStep(u)), a = i.curve(n.getInterpolate(t))(u)) : (u[0] && (f = c(u[0].x), l = s(u[0].value)), a = r.axis_rotated ? "M " + l + " " + f : "M " + f + " " + l), a || "M 0 0";
          };
        }, T.generateGetLinePoints = function (t, e) {
          var n = this,
              r = n.config,
              i = t.__max__ + 1,
              a = n.getShapeX(0, i, t, !!e),
              o = n.getShapeY(!!e),
              u = n.getShapeOffset(n.isLineType, t, !!e),
              c = e ? n.getSubYScale : n.getYScale;
          return function (t, e) {
            var i = c.call(n, t.id)(0),
                s = u(t, e) || i,
                f = a(t),
                l = o(t);
            return r.axis_rotated && (0 < t.value && l < i || t.value < 0 && i < l) && (l = i), [[f, l - (i - s)], [f, l - (i - s)], [f, l - (i - s)], [f, l - (i - s)]];
          };
        }, T.lineWithRegions = function (t, e, n, r) {
          var i,
              a,
              o,
              u,
              c,
              s,
              f,
              h,
              g,
              p,
              _,
              x = this,
              y = x.config,
              v = "M",
              b = x.isCategorized() ? .5 : 0,
              m = [];

          function w(t, e) {
            var n;

            for (n = 0; n < e.length; n++) {
              if (e[n].start < t && t <= e[n].end) return !0;
            }

            return !1;
          }

          if (d(r)) for (i = 0; i < r.length; i++) {
            m[i] = {}, l(r[i].start) ? m[i].start = t[0].x : m[i].start = x.isTimeSeries() ? x.parseDate(r[i].start) : r[i].start, l(r[i].end) ? m[i].end = t[t.length - 1].x : m[i].end = x.isTimeSeries() ? x.parseDate(r[i].end) : r[i].end;
          }

          function S(t) {
            return "M" + t[0][0] + " " + t[0][1] + " " + t[1][0] + " " + t[1][1];
          }

          for (p = y.axis_rotated ? function (t) {
            return n(t.value);
          } : function (t) {
            return e(t.x);
          }, _ = y.axis_rotated ? function (t) {
            return e(t.x);
          } : function (t) {
            return n(t.value);
          }, o = x.isTimeSeries() ? function (t, r, i, a) {
            var o = t.x.getTime(),
                u = r.x - t.x,
                s = new Date(o + u * i),
                f = new Date(o + u * (i + a));
            return S(y.axis_rotated ? [[n(c(i)), e(s)], [n(c(i + a)), e(f)]] : [[e(s), n(c(i))], [e(f), n(c(i + a))]]);
          } : function (t, r, i, a) {
            return S(y.axis_rotated ? [[n(c(i), !0), e(u(i))], [n(c(i + a), !0), e(u(i + a))]] : [[e(u(i), !0), n(c(i))], [e(u(i + a), !0), n(c(i + a))]]);
          }, i = 0; i < t.length; i++) {
            if (l(m) || !w(t[i].x, m)) v += " " + p(t[i]) + " " + _(t[i]);else for (u = x.getScale(t[i - 1].x + b, t[i].x + b, x.isTimeSeries()), c = x.getScale(t[i - 1].value, t[i].value), s = e(t[i].x) - e(t[i - 1].x), f = n(t[i].value) - n(t[i - 1].value), g = 2 * (h = 2 / Math.sqrt(Math.pow(s, 2) + Math.pow(f, 2))), a = h; a <= 1; a += g) {
              v += o(t[i - 1], t[i], a, h);
            }
            t[i].x;
          }

          return v;
        }, T.updateArea = function (t) {
          var e = this,
              n = e.d3,
              i = e.main.selectAll("." + r.areas).selectAll("." + r.area).data(e.lineData.bind(e)),
              a = i.enter().append("path").attr("class", e.classArea.bind(e)).style("fill", e.color).style("opacity", function () {
            return e.orgAreaOpacity = +n.select(this).style("opacity"), 0;
          });
          e.mainArea = a.merge(i).style("opacity", e.orgAreaOpacity), i.exit().transition().duration(t).style("opacity", 0);
        }, T.redrawArea = function (t, e, n) {
          return [(e ? this.mainArea.transition(n) : this.mainArea).attr("d", t).style("fill", this.color).style("opacity", this.orgAreaOpacity)];
        }, T.generateDrawArea = function (t, e) {
          var n = this,
              r = n.config,
              i = n.d3.area(),
              a = n.generateGetAreaPoints(t, e),
              o = e ? n.getSubYScale : n.getYScale,
              u = function u(t) {
            return (e ? n.subxx : n.xx).call(n, t);
          },
              c = function c(t, e) {
            return r.data_groups.length > 0 ? a(t, e)[0][1] : o.call(n, t.id)(n.getAreaBaseValue(t.id));
          },
              s = function s(t, e) {
            return r.data_groups.length > 0 ? a(t, e)[1][1] : o.call(n, t.id)(t.value);
          };

          return i = r.axis_rotated ? i.x0(c).x1(s).y(u) : i.x(u).y0(r.area_above ? 0 : c).y1(s), r.line_connectNull || (i = i.defined(function (t) {
            return null !== t.value;
          })), function (t) {
            var e,
                a = r.line_connectNull ? n.filterRemoveNull(t.values) : t.values,
                o = 0,
                u = 0;
            return n.isAreaType(t) ? (n.isStepType(t) && (a = n.convertValuesToStep(a)), e = i.curve(n.getInterpolate(t))(a)) : (a[0] && (o = n.x(a[0].x), u = n.getYScale(t.id)(a[0].value)), e = r.axis_rotated ? "M " + u + " " + o : "M " + o + " " + u), e || "M 0 0";
          };
        }, T.getAreaBaseValue = function () {
          return 0;
        }, T.generateGetAreaPoints = function (t, e) {
          var n = this,
              r = n.config,
              i = t.__max__ + 1,
              a = n.getShapeX(0, i, t, !!e),
              o = n.getShapeY(!!e),
              u = n.getShapeOffset(n.isAreaType, t, !!e),
              c = e ? n.getSubYScale : n.getYScale;
          return function (t, e) {
            var i = c.call(n, t.id)(0),
                s = u(t, e) || i,
                f = a(t),
                l = o(t);
            return r.axis_rotated && (0 < t.value && l < i || t.value < 0 && i < l) && (l = i), [[f, s], [f, l - (i - s)], [f, l - (i - s)], [f, s]];
          };
        }, T.updateCircle = function (t, e) {
          var n = this,
              i = n.main.selectAll("." + r.circles).selectAll("." + r.circle).data(n.lineOrScatterData.bind(n)),
              a = i.enter().append("circle").attr("class", n.classCircle.bind(n)).attr("cx", t).attr("cy", e).attr("r", n.pointR.bind(n)).style("fill", n.color);
          n.mainCircle = a.merge(i).style("opacity", n.initialOpacityForCircle.bind(n)), i.exit().style("opacity", 0);
        }, T.redrawCircle = function (t, e, n, i) {
          var a = this,
              o = a.main.selectAll("." + r.selectedCircle);
          return [(n ? a.mainCircle.transition(i) : a.mainCircle).style("opacity", this.opacityForCircle.bind(a)).style("fill", a.color).attr("cx", t).attr("cy", e), (n ? o.transition(i) : o).attr("cx", t).attr("cy", e)];
        }, T.circleX = function (t) {
          return t.x || 0 === t.x ? this.x(t.x) : null;
        }, T.updateCircleY = function () {
          var t,
              e,
              n = this;
          n.config.data_groups.length > 0 ? (t = n.getShapeIndices(n.isLineType), e = n.generateGetLinePoints(t), n.circleY = function (t, n) {
            return e(t, n)[0][1];
          }) : n.circleY = function (t) {
            return n.getYScale(t.id)(t.value);
          };
        }, T.getCircles = function (t, e) {
          return (e ? this.main.selectAll("." + r.circles + this.getTargetSelectorSuffix(e)) : this.main).selectAll("." + r.circle + (u(t) ? "-" + t : ""));
        }, T.expandCircles = function (t, e, n) {
          var i = this.pointExpandedR.bind(this);
          n && this.unexpandCircles(), this.getCircles(t, e).classed(r.EXPANDED, !0).attr("r", i);
        }, T.unexpandCircles = function (t) {
          var e = this,
              n = e.pointR.bind(e);
          e.getCircles(t).filter(function () {
            return e.d3.select(this).classed(r.EXPANDED);
          }).classed(r.EXPANDED, !1).attr("r", n);
        }, T.pointR = function (t) {
          var e = this.config;
          return this.isStepType(t) ? 0 : c(e.point_r) ? e.point_r(t) : e.point_r;
        }, T.pointExpandedR = function (t) {
          var e = this.config;
          return e.point_focus_expand_enabled ? c(e.point_focus_expand_r) ? e.point_focus_expand_r(t) : e.point_focus_expand_r ? e.point_focus_expand_r : 1.75 * this.pointR(t) : this.pointR(t);
        }, T.pointSelectR = function (t) {
          var e = this.config;
          return c(e.point_select_r) ? e.point_select_r(t) : e.point_select_r ? e.point_select_r : 4 * this.pointR(t);
        }, T.isWithinCircle = function (t, e) {
          var n = this.d3,
              r = n.mouse(t),
              i = n.select(t),
              a = +i.attr("cx"),
              o = +i.attr("cy");
          return Math.sqrt(Math.pow(a - r[0], 2) + Math.pow(o - r[1], 2)) < e;
        }, T.isWithinStep = function (t, e) {
          return Math.abs(e - this.d3.mouse(t)[1]) < 30;
        }, T.getCurrentWidth = function () {
          var t = this.config;
          return t.size_width ? t.size_width : this.getParentWidth();
        }, T.getCurrentHeight = function () {
          var t = this.config,
              e = t.size_height ? t.size_height : this.getParentHeight();
          return e > 0 ? e : 320 / (this.hasType("gauge") && !t.gauge_fullCircle ? 2 : 1);
        }, T.getCurrentPaddingTop = function () {
          var t = this.config,
              e = u(t.padding_top) ? t.padding_top : 0;
          return this.title && this.title.node() && (e += this.getTitlePadding()), e;
        }, T.getCurrentPaddingBottom = function () {
          var t = this.config;
          return u(t.padding_bottom) ? t.padding_bottom : 0;
        }, T.getCurrentPaddingLeft = function (t) {
          var e = this.config;
          return u(e.padding_left) ? e.padding_left : e.axis_rotated ? !e.axis_x_show || e.axis_x_inner ? 1 : Math.max(h(this.getAxisWidthByAxisId("x", t)), 40) : !e.axis_y_show || e.axis_y_inner ? this.axis.getYAxisLabelPosition().isOuter ? 30 : 1 : h(this.getAxisWidthByAxisId("y", t));
        }, T.getCurrentPaddingRight = function () {
          var t = this,
              e = t.config,
              n = t.isLegendRight ? t.getLegendWidth() + 20 : 0;
          return u(e.padding_right) ? e.padding_right + 1 : e.axis_rotated ? 10 + n : !e.axis_y2_show || e.axis_y2_inner ? 2 + n + (t.axis.getY2AxisLabelPosition().isOuter ? 20 : 0) : h(t.getAxisWidthByAxisId("y2")) + n;
        }, T.getParentRectValue = function (t) {
          for (var e, n = this.selectChart.node(); n && "BODY" !== n.tagName;) {
            try {
              e = n.getBoundingClientRect()[t];
            } catch (r) {
              "width" === t && (e = n.offsetWidth);
            }

            if (e) break;
            n = n.parentNode;
          }

          return e;
        }, T.getParentWidth = function () {
          return this.getParentRectValue("width");
        }, T.getParentHeight = function () {
          var t = this.selectChart.style("height");
          return t.indexOf("px") > 0 ? +t.replace("px", "") : 0;
        }, T.getSvgLeft = function (t) {
          var e = this,
              n = e.config,
              i = n.axis_rotated || !n.axis_rotated && !n.axis_y_inner,
              a = n.axis_rotated ? r.axisX : r.axisY,
              o = e.main.select("." + a).node(),
              u = o && i ? o.getBoundingClientRect() : {
            right: 0
          },
              c = e.selectChart.node().getBoundingClientRect(),
              s = e.hasArcType(),
              f = u.right - c.left - (s ? 0 : e.getCurrentPaddingLeft(t));
          return f > 0 ? f : 0;
        }, T.getAxisWidthByAxisId = function (t, e) {
          var n = this.axis.getLabelPositionById(t);
          return this.axis.getMaxTickWidth(t, e) + (n.isInner ? 20 : 40);
        }, T.getHorizontalAxisHeight = function (t) {
          var e = this,
              n = e.config,
              r = 30;
          return "x" !== t || n.axis_x_show ? "x" === t && n.axis_x_height ? n.axis_x_height : "y" !== t || n.axis_y_show ? "y2" !== t || n.axis_y2_show ? ("x" === t && !n.axis_rotated && n.axis_x_tick_rotate && (r = 30 + e.axis.getMaxTickWidth(t) * Math.cos(Math.PI * (90 - Math.abs(n.axis_x_tick_rotate)) / 180)), "y" === t && n.axis_rotated && n.axis_y_tick_rotate && (r = 30 + e.axis.getMaxTickWidth(t) * Math.cos(Math.PI * (90 - Math.abs(n.axis_y_tick_rotate)) / 180)), r + (e.axis.getLabelPositionById(t).isInner ? 0 : 10) + ("y2" === t ? -10 : 0)) : e.rotated_padding_top : !n.legend_show || e.isLegendRight || e.isLegendInset ? 1 : 10 : 8;
        }, T.initBrush = function (t) {
          var e = this,
              n = e.d3;
          return e.brush = (e.config.axis_rotated ? n.brushY() : n.brushX()).on("brush", function () {
            var t = n.event.sourceEvent;
            t && "zoom" === t.type || e.redrawForBrush();
          }).on("end", function () {
            var t = n.event.sourceEvent;
            t && "zoom" === t.type || e.brush.empty() && t && "end" !== t.type && e.brush.clear();
          }), e.brush.updateExtent = function () {
            var t,
                n = this.scale.range();
            return t = e.config.axis_rotated ? [[0, n[0]], [e.width2, n[1]]] : [[n[0], 0], [n[1], e.height2]], this.extent(t), this;
          }, e.brush.updateScale = function (t) {
            return this.scale = t, this;
          }, e.brush.update = function (t) {
            this.updateScale(t || e.subX).updateExtent(), e.context.select("." + r.brush).call(this);
          }, e.brush.clear = function () {
            e.context.select("." + r.brush).call(e.brush.move, null);
          }, e.brush.selection = function () {
            return n.brushSelection(e.context.select("." + r.brush).node());
          }, e.brush.selectionAsValue = function (t, n) {
            var i, a;
            return t ? (e.context && (i = [this.scale(t[0]), this.scale(t[1])], a = e.context.select("." + r.brush), n && (a = a.transition()), e.brush.move(a, i)), []) : (i = e.brush.selection() || [0, 0], [this.scale.invert(i[0]), this.scale.invert(i[1])]);
          }, e.brush.empty = function () {
            var t = e.brush.selection();
            return !t || t[0] === t[1];
          }, e.brush.updateScale(t);
        }, T.initSubchart = function () {
          var t = this,
              e = t.config,
              n = t.context = t.svg.append("g").attr("transform", t.getTranslate("context")),
              i = e.subchart_show ? "visible" : "hidden";
          n.style("visibility", i), n.append("g").attr("clip-path", t.clipPathForSubchart).attr("class", r.chart), n.select("." + r.chart).append("g").attr("class", r.chartBars), n.select("." + r.chart).append("g").attr("class", r.chartLines), n.append("g").attr("clip-path", t.clipPath).attr("class", r.brush), t.axes.subx = n.append("g").attr("class", r.axisX).attr("transform", t.getTranslate("subx")).attr("clip-path", e.axis_rotated ? "" : t.clipPathForXAxis);
        }, T.initSubchartBrush = function () {
          this.initBrush(this.subX).updateExtent(), this.context.select("." + r.brush).call(this.brush);
        }, T.updateTargetsForSubchart = function (t) {
          var e,
              n,
              i,
              a,
              o = this,
              u = o.context,
              c = o.config,
              s = o.classChartBar.bind(o),
              f = o.classBars.bind(o),
              l = o.classChartLine.bind(o),
              d = o.classLines.bind(o),
              h = o.classAreas.bind(o);
          c.subchart_show && ((i = (a = u.select("." + r.chartBars).selectAll("." + r.chartBar).data(t)).enter().append("g").style("opacity", 0)).merge(a).attr("class", s), i.append("g").attr("class", f), (e = (n = u.select("." + r.chartLines).selectAll("." + r.chartLine).data(t)).enter().append("g").style("opacity", 0)).merge(n).attr("class", l), e.append("g").attr("class", d), e.append("g").attr("class", h), u.selectAll("." + r.brush + " rect").attr(c.axis_rotated ? "width" : "height", c.axis_rotated ? o.width2 : o.height2));
        }, T.updateBarForSubchart = function (t) {
          var e = this,
              n = e.context.selectAll("." + r.bars).selectAll("." + r.bar).data(e.barData.bind(e)),
              i = n.enter().append("path").attr("class", e.classBar.bind(e)).style("stroke", "none").style("fill", e.color);
          n.exit().transition().duration(t).style("opacity", 0).remove(), e.contextBar = i.merge(n).style("opacity", e.initialOpacity.bind(e));
        }, T.redrawBarForSubchart = function (t, e, n) {
          (e ? this.contextBar.transition(Math.random().toString()).duration(n) : this.contextBar).attr("d", t).style("opacity", 1);
        }, T.updateLineForSubchart = function (t) {
          var e = this,
              n = e.context.selectAll("." + r.lines).selectAll("." + r.line).data(e.lineData.bind(e)),
              i = n.enter().append("path").attr("class", e.classLine.bind(e)).style("stroke", e.color);
          n.exit().transition().duration(t).style("opacity", 0).remove(), e.contextLine = i.merge(n).style("opacity", e.initialOpacity.bind(e));
        }, T.redrawLineForSubchart = function (t, e, n) {
          (e ? this.contextLine.transition(Math.random().toString()).duration(n) : this.contextLine).attr("d", t).style("opacity", 1);
        }, T.updateAreaForSubchart = function (t) {
          var e = this,
              n = e.d3,
              i = e.context.selectAll("." + r.areas).selectAll("." + r.area).data(e.lineData.bind(e)),
              a = i.enter().append("path").attr("class", e.classArea.bind(e)).style("fill", e.color).style("opacity", function () {
            return e.orgAreaOpacity = +n.select(this).style("opacity"), 0;
          });
          i.exit().transition().duration(t).style("opacity", 0).remove(), e.contextArea = a.merge(i).style("opacity", 0);
        }, T.redrawAreaForSubchart = function (t, e, n) {
          (e ? this.contextArea.transition(Math.random().toString()).duration(n) : this.contextArea).attr("d", t).style("fill", this.color).style("opacity", this.orgAreaOpacity);
        }, T.redrawSubchart = function (t, e, n, r, i, a, o) {
          var u,
              c,
              s,
              f = this,
              l = f.d3,
              d = f.config;
          f.context.style("visibility", d.subchart_show ? "visible" : "hidden"), d.subchart_show && (l.event && "zoom" === l.event.type && f.brush.selectionAsValue(f.x.orgDomain()), t && (f.brush.empty() || f.brush.selectionAsValue(f.x.orgDomain()), u = f.generateDrawArea(i, !0), c = f.generateDrawBar(a, !0), s = f.generateDrawLine(o, !0), f.updateBarForSubchart(n), f.updateLineForSubchart(n), f.updateAreaForSubchart(n), f.redrawBarForSubchart(c, n, n), f.redrawLineForSubchart(s, n, n), f.redrawAreaForSubchart(u, n, n)));
        }, T.redrawForBrush = function () {
          var t,
              e = this,
              n = e.x,
              i = e.d3;
          e.redraw({
            withTransition: !1,
            withY: e.config.zoom_rescale,
            withSubchart: !1,
            withUpdateXDomain: !0,
            withEventRect: !1,
            withDimension: !1
          }), t = i.event.selection || e.brush.scale.range(), e.main.select("." + r.eventRect).call(e.zoom.transform, i.zoomIdentity.scale(e.width / (t[1] - t[0])).translate(-t[0], 0)), e.config.subchart_onbrush.call(e.api, n.orgDomain());
        }, T.transformContext = function (t, e) {
          var n;
          e && e.axisSubX ? n = e.axisSubX : (n = this.context.select("." + r.axisX), t && (n = n.transition())), this.context.attr("transform", this.getTranslate("context")), n.attr("transform", this.getTranslate("subx"));
        }, T.getDefaultSelection = function () {
          var t = this,
              e = t.config,
              n = c(e.axis_x_selection) ? e.axis_x_selection(t.getXDomain(t.data.targets)) : e.axis_x_selection;
          return t.isTimeSeries() && (n = [t.parseDate(n[0]), t.parseDate(n[1])]), n;
        }, T.initText = function () {
          this.main.select("." + r.chart).append("g").attr("class", r.chartTexts), this.mainText = this.d3.selectAll([]);
        }, T.updateTargetsForText = function (t) {
          var e = this,
              n = e.classChartText.bind(e),
              i = e.classTexts.bind(e),
              a = e.classFocus.bind(e),
              o = e.main.select("." + r.chartTexts).selectAll("." + r.chartText).data(t),
              u = o.enter().append("g").attr("class", n).style("opacity", 0).style("pointer-events", "none");
          u.append("g").attr("class", i), u.merge(o).attr("class", function (t) {
            return n(t) + a(t);
          });
        }, T.updateText = function (t, e, n) {
          var i = this,
              a = i.config,
              o = i.barOrLineData.bind(i),
              u = i.classText.bind(i),
              c = i.main.selectAll("." + r.texts).selectAll("." + r.text).data(o),
              s = c.enter().append("text").attr("class", u).attr("text-anchor", function (t) {
            return a.axis_rotated ? t.value < 0 ? "end" : "start" : "middle";
          }).style("stroke", "none").attr("x", t).attr("y", e).style("fill", function (t) {
            return i.color(t);
          }).style("fill-opacity", 0);
          i.mainText = s.merge(c).text(function (t, e, n) {
            return i.dataLabelFormat(t.id)(t.value, t.id, e, n);
          }), c.exit().transition().duration(n).style("fill-opacity", 0).remove();
        }, T.redrawText = function (t, e, n, r, i) {
          return [(r ? this.mainText.transition(i) : this.mainText).attr("x", t).attr("y", e).style("fill", this.color).style("fill-opacity", n ? 0 : this.opacityForText.bind(this))];
        }, T.getTextRect = function (t, e, n) {
          var r,
              i = this.d3.select("body").append("div").classed("c3", !0),
              a = i.append("svg").style("visibility", "hidden").style("position", "fixed").style("top", 0).style("left", 0),
              o = this.d3.select(n).style("font");
          return a.selectAll(".dummy").data([t]).enter().append("text").classed(e || "", !0).style("font", o).text(t).each(function () {
            r = this.getBoundingClientRect();
          }), i.remove(), r;
        }, T.generateXYForText = function (t, e, n, r) {
          var i = this,
              a = i.generateGetAreaPoints(t, !1),
              o = i.generateGetBarPoints(e, !1),
              u = i.generateGetLinePoints(n, !1),
              c = r ? i.getXForText : i.getYForText;
          return function (t, e) {
            var n = i.isAreaType(t) ? a : i.isBarType(t) ? o : u;
            return c.call(i, n(t, e), t, this);
          };
        }, T.getXForText = function (t, e, n) {
          var r,
              i,
              a = this,
              o = n.getBoundingClientRect();
          return a.config.axis_rotated ? (i = a.isBarType(e) ? 4 : 6, r = t[2][1] + i * (e.value < 0 ? -1 : 1)) : r = a.hasType("bar") ? (t[2][0] + t[0][0]) / 2 : t[0][0], null === e.value && (r > a.width ? r = a.width - o.width : r < 0 && (r = 4)), r;
        }, T.getYForText = function (t, e, n) {
          var r,
              i = this,
              a = n.getBoundingClientRect();
          return i.config.axis_rotated ? r = (t[0][0] + t[2][0] + .6 * a.height) / 2 : (r = t[2][1], e.value < 0 || 0 === e.value && !i.hasPositiveValue ? (r += a.height, i.isBarType(e) && i.isSafari() ? r -= 3 : !i.isBarType(e) && i.isChrome() && (r += 3)) : r += i.isBarType(e) ? -3 : -6), null !== e.value || i.config.axis_rotated || (r < a.height ? r = a.height : r > this.height && (r = this.height - 4)), r;
        }, T.initTitle = function () {
          this.title = this.svg.append("text").text(this.config.title_text).attr("class", this.CLASS.title);
        }, T.redrawTitle = function () {
          var t = this;
          t.title.attr("x", t.xForTitle.bind(t)).attr("y", t.yForTitle.bind(t));
        }, T.xForTitle = function () {
          var t = this,
              e = t.config,
              n = e.title_position || "left";
          return n.indexOf("right") >= 0 ? t.currentWidth - t.getTextRect(t.title.node().textContent, t.CLASS.title, t.title.node()).width - e.title_padding.right : n.indexOf("center") >= 0 ? (t.currentWidth - t.getTextRect(t.title.node().textContent, t.CLASS.title, t.title.node()).width) / 2 : e.title_padding.left;
        }, T.yForTitle = function () {
          var t = this;
          return t.config.title_padding.top + t.getTextRect(t.title.node().textContent, t.CLASS.title, t.title.node()).height;
        }, T.getTitlePadding = function () {
          return this.yForTitle() + this.config.title_padding.bottom;
        }, T.initTooltip = function () {
          var t,
              e = this,
              n = e.config;

          if (e.tooltip = e.selectChart.style("position", "relative").append("div").attr("class", r.tooltipContainer).style("position", "absolute").style("pointer-events", "none").style("display", "none"), n.tooltip_init_show) {
            if (e.isTimeSeries() && f(n.tooltip_init_x)) {
              for (n.tooltip_init_x = e.parseDate(n.tooltip_init_x), t = 0; t < e.data.targets[0].values.length && e.data.targets[0].values[t].x - n.tooltip_init_x != 0; t++) {
                ;
              }

              n.tooltip_init_x = t;
            }

            e.tooltip.html(n.tooltip_contents.call(e, e.data.targets.map(function (t) {
              return e.addName(t.values[n.tooltip_init_x]);
            }), e.axis.getXAxisTickFormat(), e.getYFormat(e.hasArcType()), e.color)), e.tooltip.style("top", n.tooltip_init_position.top).style("left", n.tooltip_init_position.left).style("display", "block");
          }
        }, T.getTooltipSortFunction = function () {
          var t = this,
              e = t.config;

          if (0 !== e.data_groups.length && void 0 === e.tooltip_order) {
            var n = t.orderTargets(t.data.targets).map(function (t) {
              return t.id;
            });
            return (t.isOrderAsc() || t.isOrderDesc()) && (n = n.reverse()), function (t, e) {
              return n.indexOf(t.id) - n.indexOf(e.id);
            };
          }

          var r = e.tooltip_order;
          void 0 === r && (r = e.data_order);

          var i = function i(t) {
            return t ? t.value : null;
          };

          if (f(r) && "asc" === r.toLowerCase()) return function (t, e) {
            return i(t) - i(e);
          };
          if (f(r) && "desc" === r.toLowerCase()) return function (t, e) {
            return i(e) - i(t);
          };

          if (c(r)) {
            var a = r;
            return void 0 === e.tooltip_order && (a = function a(t, e) {
              return r(t ? {
                id: t.id,
                values: [t]
              } : null, e ? {
                id: e.id,
                values: [e]
              } : null);
            }), a;
          }

          return s(r) ? function (t, e) {
            return r.indexOf(t.id) - r.indexOf(e.id);
          } : void 0;
        }, T.getTooltipContent = function (t, e, n, r) {
          var i,
              a,
              o,
              u,
              c,
              s,
              f = this,
              l = f.config,
              d = l.tooltip_format_title || e,
              h = l.tooltip_format_name || function (t) {
            return t;
          },
              g = l.tooltip_format_value || n,
              p = this.getTooltipSortFunction();

          for (p && t.sort(p), a = 0; a < t.length; a++) {
            if (t[a] && (t[a].value || 0 === t[a].value) && (i || (o = b(d ? d(t[a].x) : t[a].x), i = "<table class='" + f.CLASS.tooltip + "'>" + (o || 0 === o ? "<tr><th colspan='2'>" + o + "</th></tr>" : "")), void 0 !== (u = b(g(t[a].value, t[a].ratio, t[a].id, t[a].index, t))))) {
              if (null === t[a].name) continue;
              c = b(h(t[a].name, t[a].ratio, t[a].id, t[a].index)), s = f.levelColor ? f.levelColor(t[a].value) : r(t[a].id), i += "<tr class='" + f.CLASS.tooltipName + "-" + f.getTargetSelectorSuffix(t[a].id) + "'>", i += "<td class='name'><span style='background-color:" + s + "'></span>" + c + "</td>", i += "<td class='value'>" + u + "</td>", i += "</tr>";
            }
          }

          return i + "</table>";
        }, T.tooltipPosition = function (t, e, n, r) {
          var i,
              a,
              o,
              u,
              c,
              s = this,
              f = s.config,
              l = s.d3,
              d = s.hasArcType(),
              h = l.mouse(r);
          return d ? (a = (s.width - (s.isLegendRight ? s.getLegendWidth() : 0)) / 2 + h[0], u = (s.hasType("gauge") ? s.height : s.height / 2) + h[1] + 20) : (i = s.getSvgLeft(!0), f.axis_rotated ? (o = (a = i + h[0] + 100) + e, c = s.currentWidth - s.getCurrentPaddingRight(), u = s.x(t[0].x) + 20) : (o = (a = i + s.getCurrentPaddingLeft(!0) + s.x(t[0].x) + 20) + e, c = i + s.currentWidth - s.getCurrentPaddingRight(), u = h[1] + 15), o > c && (a -= o - c + 20), u + n > s.currentHeight && (u -= n + 30)), u < 0 && (u = 0), {
            top: u,
            left: a
          };
        }, T.showTooltip = function (t, e) {
          var n,
              r,
              i,
              a = this,
              o = a.config,
              c = a.hasArcType(),
              s = t.filter(function (t) {
            return t && u(t.value);
          }),
              f = o.tooltip_position || T.tooltipPosition;
          0 !== s.length && o.tooltip_show && (a.tooltip.html(o.tooltip_contents.call(a, t, a.axis.getXAxisTickFormat(), a.getYFormat(c), a.color)).style("display", "block"), n = a.tooltip.property("offsetWidth"), r = a.tooltip.property("offsetHeight"), i = f.call(this, s, n, r, e), a.tooltip.style("top", i.top + "px").style("left", i.left + "px"));
        }, T.hideTooltip = function () {
          this.tooltip.style("display", "none");
        }, T.setTargetType = function (t, e) {
          var n = this,
              r = n.config;
          n.mapToTargetIds(t).forEach(function (t) {
            n.withoutFadeIn[t] = e === r.data_types[t], r.data_types[t] = e;
          }), t || (r.data_type = e);
        }, T.hasType = function (t, e) {
          var n = this.config.data_types,
              r = !1;
          return (e = e || this.data.targets) && e.length ? e.forEach(function (e) {
            var i = n[e.id];
            (i && i.indexOf(t) >= 0 || !i && "line" === t) && (r = !0);
          }) : Object.keys(n).length ? Object.keys(n).forEach(function (e) {
            n[e] === t && (r = !0);
          }) : r = this.config.data_type === t, r;
        }, T.hasArcType = function (t) {
          return this.hasType("pie", t) || this.hasType("donut", t) || this.hasType("gauge", t);
        }, T.isLineType = function (t) {
          var e = this.config,
              n = f(t) ? t : t.id;
          return !e.data_types[n] || ["line", "spline", "area", "area-spline", "step", "area-step"].indexOf(e.data_types[n]) >= 0;
        }, T.isStepType = function (t) {
          var e = f(t) ? t : t.id;
          return ["step", "area-step"].indexOf(this.config.data_types[e]) >= 0;
        }, T.isSplineType = function (t) {
          var e = f(t) ? t : t.id;
          return ["spline", "area-spline"].indexOf(this.config.data_types[e]) >= 0;
        }, T.isAreaType = function (t) {
          var e = f(t) ? t : t.id;
          return ["area", "area-spline", "area-step"].indexOf(this.config.data_types[e]) >= 0;
        }, T.isBarType = function (t) {
          var e = f(t) ? t : t.id;
          return "bar" === this.config.data_types[e];
        }, T.isScatterType = function (t) {
          var e = f(t) ? t : t.id;
          return "scatter" === this.config.data_types[e];
        }, T.isPieType = function (t) {
          var e = f(t) ? t : t.id;
          return "pie" === this.config.data_types[e];
        }, T.isGaugeType = function (t) {
          var e = f(t) ? t : t.id;
          return "gauge" === this.config.data_types[e];
        }, T.isDonutType = function (t) {
          var e = f(t) ? t : t.id;
          return "donut" === this.config.data_types[e];
        }, T.isArcType = function (t) {
          return this.isPieType(t) || this.isDonutType(t) || this.isGaugeType(t);
        }, T.lineData = function (t) {
          return this.isLineType(t) ? [t] : [];
        }, T.arcData = function (t) {
          return this.isArcType(t.data) ? [t] : [];
        }, T.barData = function (t) {
          return this.isBarType(t) ? t.values : [];
        }, T.lineOrScatterData = function (t) {
          return this.isLineType(t) || this.isScatterType(t) ? t.values : [];
        }, T.barOrLineData = function (t) {
          return this.isBarType(t) || this.isLineType(t) ? t.values : [];
        }, T.isSafari = function () {
          var t = window.navigator.userAgent;
          return t.indexOf("Safari") >= 0 && t.indexOf("Chrome") < 0;
        }, T.isChrome = function () {
          return window.navigator.userAgent.indexOf("Chrome") >= 0;
        }, T.initZoom = function () {
          var t,
              e = this,
              n = e.d3,
              r = e.config;
          return e.zoom = n.zoom().on("start", function () {
            var i = n.event.sourceEvent;
            i && "brush" === i.type || (t = i, r.zoom_onzoomstart.call(e.api, i));
          }).on("zoom", function () {
            var t = n.event.sourceEvent;
            t && "brush" === t.type || e.redrawForZoom.call(e);
          }).on("end", function () {
            var i = n.event.sourceEvent;
            i && "brush" === i.type || i && t.clientX === i.clientX && t.clientY === i.clientY || r.zoom_onzoomend.call(e.api, e.x.orgDomain());
          }), e.zoom.updateDomain = function () {
            return n.event && n.event.transform && e.x.domain(n.event.transform.rescaleX(e.subX).domain()), this;
          }, e.zoom.updateExtent = function () {
            return this.scaleExtent([1, 1 / 0]).translateExtent([[0, 0], [e.width, e.height]]).extent([[0, 0], [e.width, e.height]]), this;
          }, e.zoom.update = function () {
            return this.updateExtent().updateDomain();
          }, e.zoom.updateExtent();
        }, T.zoomTransform = function (t) {
          var e = [this.x(t[0]), this.x(t[1])];
          return this.d3.zoomIdentity.scale(this.width / (e[1] - e[0])).translate(-e[0], 0);
        }, T.getZoomDomain = function () {
          var t = this.config,
              e = this.d3;
          return [e.min([this.orgXDomain[0], t.zoom_x_min]), e.max([this.orgXDomain[1], t.zoom_x_max])];
        }, T.redrawForZoom = function () {
          var t = this,
              e = t.d3,
              n = t.config,
              r = t.zoom,
              i = t.x;
          n.zoom_enabled && 0 !== t.filterTargetsToShow(t.data.targets).length && (r.update(), t.isCategorized() && i.orgDomain()[0] === t.orgXDomain[0] && i.domain([t.orgXDomain[0] - 1e-10, i.orgDomain()[1]]), t.redraw({
            withTransition: !1,
            withY: n.zoom_rescale,
            withSubchart: !1,
            withEventRect: !1,
            withDimension: !1
          }), e.event.sourceEvent && "mousemove" === e.event.sourceEvent.type && (t.cancelClick = !0), n.zoom_onzoom.call(t.api, i.orgDomain()));
        }, P;
      }();
    }, function (t, e, n) {
      "use strict";

      n.r(e);

      var r = n(1),
          i = n(16),
          a = n(17),
          o = n(18),
          u = n(8),
          c = n(4),
          s = n(23),
          f = n(7),
          l = n(12),
          d = n(14),
          h = n(15),
          g = n(22),
          p = n(25),
          _ = n(5),
          x = n(29),
          y = n(26),
          v = n(3),
          b = n(6),
          m = n(20),
          w = n(13),
          S = n(21),
          A = Array.prototype,
          T = A.map,
          P = A.slice,
          C = {
        name: "implicit"
      };

      function M(t) {
        var e = Object(u.c)(),
            n = [],
            r = C;

        function i(i) {
          var a = i + "",
              o = e.get(a);

          if (!o) {
            if (r !== C) return r;
            e.set(a, o = n.push(i));
          }

          return t[(o - 1) % t.length];
        }

        return t = null == t ? [] : P.call(t), i.domain = function (t) {
          if (!arguments.length) return n.slice();
          n = [], e = Object(u.c)();

          for (var r, a, o = -1, c = t.length; ++o < c;) {
            e.has(a = (r = t[o]) + "") || e.set(a, n.push(r));
          }

          return i;
        }, i.range = function (e) {
          return arguments.length ? (t = P.call(e), i) : t.slice();
        }, i.unknown = function (t) {
          return arguments.length ? (r = t, i) : r;
        }, i.copy = function () {
          return M().domain(n).range(t).unknown(r);
        }, i;
      }

      function L() {
        var t,
            e,
            n = M().unknown(void 0),
            i = n.domain,
            a = n.range,
            o = [0, 1],
            u = !1,
            c = 0,
            s = 0,
            f = .5;

        function l() {
          var n = i().length,
              l = o[1] < o[0],
              d = o[l - 0],
              h = o[1 - l];
          t = (h - d) / Math.max(1, n - c + 2 * s), u && (t = Math.floor(t)), d += (h - d - t * (n - c)) * f, e = t * (1 - c), u && (d = Math.round(d), e = Math.round(e));
          var g = Object(r.s)(n).map(function (e) {
            return d + t * e;
          });
          return a(l ? g.reverse() : g);
        }

        return delete n.unknown, n.domain = function (t) {
          return arguments.length ? (i(t), l()) : i();
        }, n.range = function (t) {
          return arguments.length ? (o = [+t[0], +t[1]], l()) : o.slice();
        }, n.rangeRound = function (t) {
          return o = [+t[0], +t[1]], u = !0, l();
        }, n.bandwidth = function () {
          return e;
        }, n.step = function () {
          return t;
        }, n.round = function (t) {
          return arguments.length ? (u = !!t, l()) : u;
        }, n.padding = function (t) {
          return arguments.length ? (c = s = Math.max(0, Math.min(1, t)), l()) : c;
        }, n.paddingInner = function (t) {
          return arguments.length ? (c = Math.max(0, Math.min(1, t)), l()) : c;
        }, n.paddingOuter = function (t) {
          return arguments.length ? (s = Math.max(0, Math.min(1, t)), l()) : s;
        }, n.align = function (t) {
          return arguments.length ? (f = Math.max(0, Math.min(1, t)), l()) : f;
        }, n.copy = function () {
          return L().domain(i()).range(o).round(u).paddingInner(c).paddingOuter(s).align(f);
        }, l();
      }

      function E() {
        return function t(e) {
          var n = e.copy;
          return e.padding = e.paddingOuter, delete e.paddingInner, delete e.paddingOuter, e.copy = function () {
            return t(n());
          }, e;
        }(L().paddingInner(1));
      }

      var O = function O(t) {
        return function () {
          return t;
        };
      },
          k = function k(t) {
        return +t;
      },
          V = [0, 1];

      function G(t, e) {
        return (e -= t = +t) ? function (n) {
          return (n - t) / e;
        } : O(e);
      }

      function R(t, e, n, r) {
        var i = t[0],
            a = t[1],
            o = e[0],
            u = e[1];
        return a < i ? (i = n(a, i), o = r(u, o)) : (i = n(i, a), o = r(o, u)), function (t) {
          return o(i(t));
        };
      }

      function I(t, e, n, i) {
        var a = Math.min(t.length, e.length) - 1,
            o = new Array(a),
            u = new Array(a),
            c = -1;

        for (t[a] < t[0] && (t = t.slice().reverse(), e = e.slice().reverse()); ++c < a;) {
          o[c] = n(t[c], t[c + 1]), u[c] = i(e[c], e[c + 1]);
        }

        return function (e) {
          var n = Object(r.b)(t, e, 1, a) - 1;
          return u[n](o[n](e));
        };
      }

      function N(t, e) {
        return e.domain(t.domain()).range(t.range()).interpolate(t.interpolate()).clamp(t.clamp());
      }

      function D(t, e) {
        var n,
            r,
            i,
            a = V,
            o = V,
            u = v.a,
            c = !1;

        function s() {
          return n = Math.min(a.length, o.length) > 2 ? I : R, r = i = null, f;
        }

        function f(e) {
          return (r || (r = n(a, o, c ? function (t) {
            return function (e, n) {
              var r = t(e = +e, n = +n);
              return function (t) {
                return t <= e ? 0 : t >= n ? 1 : r(t);
              };
            };
          }(t) : t, u)))(+e);
        }

        return f.invert = function (t) {
          return (i || (i = n(o, a, G, c ? function (t) {
            return function (e, n) {
              var r = t(e = +e, n = +n);
              return function (t) {
                return t <= 0 ? e : t >= 1 ? n : r(t);
              };
            };
          }(e) : e)))(+t);
        }, f.domain = function (t) {
          return arguments.length ? (a = T.call(t, k), s()) : a.slice();
        }, f.range = function (t) {
          return arguments.length ? (o = P.call(t), s()) : o.slice();
        }, f.rangeRound = function (t) {
          return o = P.call(t), u = v.r, s();
        }, f.clamp = function (t) {
          return arguments.length ? (c = !!t, s()) : c;
        }, f.interpolate = function (t) {
          return arguments.length ? (u = t, s()) : u;
        }, s();
      }

      var F = function F(t, e, n) {
        var i,
            a = t[0],
            o = t[t.length - 1],
            u = Object(r.A)(a, o, null == e ? 10 : e);

        switch ((n = Object(_.e)(null == n ? ",f" : n)).type) {
          case "s":
            var c = Math.max(Math.abs(a), Math.abs(o));
            return null != n.precision || isNaN(i = Object(_.g)(u, c)) || (n.precision = i), Object(_.d)(n, c);

          case "":
          case "e":
          case "g":
          case "p":
          case "r":
            null != n.precision || isNaN(i = Object(_.h)(u, Math.max(Math.abs(a), Math.abs(o)))) || (n.precision = i - ("e" === n.type));
            break;

          case "f":
          case "%":
            null != n.precision || isNaN(i = Object(_.f)(u)) || (n.precision = i - 2 * ("%" === n.type));
        }

        return Object(_.a)(n);
      };

      function z(t) {
        var e = t.domain;
        return t.ticks = function (t) {
          var n = e();
          return Object(r.B)(n[0], n[n.length - 1], null == t ? 10 : t);
        }, t.tickFormat = function (t, n) {
          return F(e(), t, n);
        }, t.nice = function (n) {
          null == n && (n = 10);
          var i,
              a = e(),
              o = 0,
              u = a.length - 1,
              c = a[o],
              s = a[u];
          return s < c && (i = c, c = s, s = i, i = o, o = u, u = i), (i = Object(r.z)(c, s, n)) > 0 ? (c = Math.floor(c / i) * i, s = Math.ceil(s / i) * i, i = Object(r.z)(c, s, n)) : i < 0 && (c = Math.ceil(c * i) / i, s = Math.floor(s * i) / i, i = Object(r.z)(c, s, n)), i > 0 ? (a[o] = Math.floor(c / i) * i, a[u] = Math.ceil(s / i) * i, e(a)) : i < 0 && (a[o] = Math.ceil(c * i) / i, a[u] = Math.floor(s * i) / i, e(a)), t;
        }, t;
      }

      function j() {
        var t = D(G, v.m);
        return t.copy = function () {
          return N(t, j());
        }, z(t);
      }

      function X() {
        var t = [0, 1];

        function e(t) {
          return +t;
        }

        return e.invert = e, e.domain = e.range = function (n) {
          return arguments.length ? (t = T.call(n, k), e) : t.slice();
        }, e.copy = function () {
          return X().domain(t);
        }, z(e);
      }

      var B = function B(t, e) {
        var n,
            r = 0,
            i = (t = t.slice()).length - 1,
            a = t[r],
            o = t[i];
        return o < a && (n = r, r = i, i = n, n = a, a = o, o = n), t[r] = e.floor(a), t[i] = e.ceil(o), t;
      };

      function H(t, e) {
        return (e = Math.log(e / t)) ? function (n) {
          return Math.log(n / t) / e;
        } : O(e);
      }

      function Y(t, e) {
        return t < 0 ? function (n) {
          return -Math.pow(-e, n) * Math.pow(-t, 1 - n);
        } : function (n) {
          return Math.pow(e, n) * Math.pow(t, 1 - n);
        };
      }

      function U(t) {
        return isFinite(t) ? +("1e" + t) : t < 0 ? 0 : t;
      }

      function q(t) {
        return 10 === t ? U : t === Math.E ? Math.exp : function (e) {
          return Math.pow(t, e);
        };
      }

      function W(t) {
        return t === Math.E ? Math.log : 10 === t && Math.log10 || 2 === t && Math.log2 || (t = Math.log(t), function (e) {
          return Math.log(e) / t;
        });
      }

      function Q(t) {
        return function (e) {
          return -t(-e);
        };
      }

      function Z() {
        var t = D(H, Y).domain([1, 10]),
            e = t.domain,
            n = 10,
            i = W(10),
            a = q(10);

        function o() {
          return i = W(n), a = q(n), e()[0] < 0 && (i = Q(i), a = Q(a)), t;
        }

        return t.base = function (t) {
          return arguments.length ? (n = +t, o()) : n;
        }, t.domain = function (t) {
          return arguments.length ? (e(t), o()) : e();
        }, t.ticks = function (t) {
          var o,
              u = e(),
              c = u[0],
              s = u[u.length - 1];
          (o = s < c) && (h = c, c = s, s = h);
          var f,
              l,
              d,
              h = i(c),
              g = i(s),
              p = null == t ? 10 : +t,
              _ = [];

          if (!(n % 1) && g - h < p) {
            if (h = Math.round(h) - 1, g = Math.round(g) + 1, c > 0) {
              for (; h < g; ++h) {
                for (l = 1, f = a(h); l < n; ++l) {
                  if (!((d = f * l) < c)) {
                    if (d > s) break;

                    _.push(d);
                  }
                }
              }
            } else for (; h < g; ++h) {
              for (l = n - 1, f = a(h); l >= 1; --l) {
                if (!((d = f * l) < c)) {
                  if (d > s) break;

                  _.push(d);
                }
              }
            }
          } else _ = Object(r.B)(h, g, Math.min(g - h, p)).map(a);

          return o ? _.reverse() : _;
        }, t.tickFormat = function (e, r) {
          if (null == r && (r = 10 === n ? ".0e" : ","), "function" != typeof r && (r = Object(_.a)(r)), e === 1 / 0) return r;
          null == e && (e = 10);
          var o = Math.max(1, n * e / t.ticks().length);
          return function (t) {
            var e = t / a(Math.round(i(t)));
            return e * n < n - .5 && (e *= n), e <= o ? r(t) : "";
          };
        }, t.nice = function () {
          return e(B(e(), {
            floor: function floor(t) {
              return a(Math.floor(i(t)));
            },
            ceil: function ceil(t) {
              return a(Math.ceil(i(t)));
            }
          }));
        }, t.copy = function () {
          return N(t, Z().base(n));
        }, t;
      }

      function $(t, e) {
        return t < 0 ? -Math.pow(-t, e) : Math.pow(t, e);
      }

      function K() {
        var t = 1,
            e = D(function (e, n) {
          return (n = $(n, t) - (e = $(e, t))) ? function (r) {
            return ($(r, t) - e) / n;
          } : O(n);
        }, function (e, n) {
          return n = $(n, t) - (e = $(e, t)), function (r) {
            return $(e + n * r, 1 / t);
          };
        }),
            n = e.domain;
        return e.exponent = function (e) {
          return arguments.length ? (t = +e, n(n())) : t;
        }, e.copy = function () {
          return N(e, K().exponent(t));
        }, z(e);
      }

      function J() {
        return K().exponent(.5);
      }

      function tt() {
        var t = [],
            e = [],
            n = [];

        function i() {
          var i = 0,
              o = Math.max(1, e.length);

          for (n = new Array(o - 1); ++i < o;) {
            n[i - 1] = Object(r.r)(t, i / o);
          }

          return a;
        }

        function a(t) {
          if (!isNaN(t = +t)) return e[Object(r.b)(n, t)];
        }

        return a.invertExtent = function (r) {
          var i = e.indexOf(r);
          return i < 0 ? [NaN, NaN] : [i > 0 ? n[i - 1] : t[0], i < n.length ? n[i] : t[t.length - 1]];
        }, a.domain = function (e) {
          if (!arguments.length) return t.slice();
          t = [];

          for (var n, a = 0, o = e.length; a < o; ++a) {
            null == (n = e[a]) || isNaN(n = +n) || t.push(n);
          }

          return t.sort(r.a), i();
        }, a.range = function (t) {
          return arguments.length ? (e = P.call(t), i()) : e.slice();
        }, a.quantiles = function () {
          return n.slice();
        }, a.copy = function () {
          return tt().domain(t).range(e);
        }, a;
      }

      function et() {
        var t = 0,
            e = 1,
            n = 1,
            i = [.5],
            a = [0, 1];

        function o(t) {
          if (t <= t) return a[Object(r.b)(i, t, 0, n)];
        }

        function u() {
          var r = -1;

          for (i = new Array(n); ++r < n;) {
            i[r] = ((r + 1) * e - (r - n) * t) / (n + 1);
          }

          return o;
        }

        return o.domain = function (n) {
          return arguments.length ? (t = +n[0], e = +n[1], u()) : [t, e];
        }, o.range = function (t) {
          return arguments.length ? (n = (a = P.call(t)).length - 1, u()) : a.slice();
        }, o.invertExtent = function (r) {
          var o = a.indexOf(r);
          return o < 0 ? [NaN, NaN] : o < 1 ? [t, i[0]] : o >= n ? [i[n - 1], e] : [i[o - 1], i[o]];
        }, o.copy = function () {
          return et().domain([t, e]).range(a);
        }, z(o);
      }

      function nt() {
        var t = [.5],
            e = [0, 1],
            n = 1;

        function i(i) {
          if (i <= i) return e[Object(r.b)(t, i, 0, n)];
        }

        return i.domain = function (r) {
          return arguments.length ? (t = P.call(r), n = Math.min(t.length, e.length - 1), i) : t.slice();
        }, i.range = function (r) {
          return arguments.length ? (e = P.call(r), n = Math.min(t.length, e.length - 1), i) : e.slice();
        }, i.invertExtent = function (n) {
          var r = e.indexOf(n);
          return [t[r - 1], t[r]];
        }, i.copy = function () {
          return nt().domain(t).range(e);
        }, i;
      }

      var rt = n(2),
          it = n(10),
          at = 1e3,
          ot = 60 * at,
          ut = 60 * ot,
          ct = 24 * ut,
          st = 7 * ct,
          ft = 30 * ct,
          lt = 365 * ct;

      function dt(t) {
        return new Date(t);
      }

      function ht(t) {
        return t instanceof Date ? +t : +new Date(+t);
      }

      function gt(t, e, n, i, a, o, u, c, s) {
        var f = D(G, v.m),
            l = f.invert,
            d = f.domain,
            h = s(".%L"),
            g = s(":%S"),
            p = s("%I:%M"),
            _ = s("%I %p"),
            x = s("%a %d"),
            y = s("%b %d"),
            b = s("%B"),
            m = s("%Y"),
            w = [[u, 1, at], [u, 5, 5 * at], [u, 15, 15 * at], [u, 30, 30 * at], [o, 1, ot], [o, 5, 5 * ot], [o, 15, 15 * ot], [o, 30, 30 * ot], [a, 1, ut], [a, 3, 3 * ut], [a, 6, 6 * ut], [a, 12, 12 * ut], [i, 1, ct], [i, 2, 2 * ct], [n, 1, st], [e, 1, ft], [e, 3, 3 * ft], [t, 1, lt]];

        function S(r) {
          return (u(r) < r ? h : o(r) < r ? g : a(r) < r ? p : i(r) < r ? _ : e(r) < r ? n(r) < r ? x : y : t(r) < r ? b : m)(r);
        }

        function A(e, n, i, a) {
          if (null == e && (e = 10), "number" == typeof e) {
            var o = Math.abs(i - n) / e,
                u = Object(r.e)(function (t) {
              return t[2];
            }).right(w, o);
            u === w.length ? (a = Object(r.A)(n / lt, i / lt, e), e = t) : u ? (a = (u = w[o / w[u - 1][2] < w[u][2] / o ? u - 1 : u])[1], e = u[0]) : (a = Math.max(Object(r.A)(n, i, e), 1), e = c);
          }

          return null == a ? e : e.every(a);
        }

        return f.invert = function (t) {
          return new Date(l(t));
        }, f.domain = function (t) {
          return arguments.length ? d(T.call(t, ht)) : d().map(dt);
        }, f.ticks = function (t, e) {
          var n,
              r = d(),
              i = r[0],
              a = r[r.length - 1],
              o = a < i;
          return o && (n = i, i = a, a = n), n = (n = A(t, i, a, e)) ? n.range(i, a + 1) : [], o ? n.reverse() : n;
        }, f.tickFormat = function (t, e) {
          return null == e ? S : s(e);
        }, f.nice = function (t, e) {
          var n = d();
          return (t = A(t, n[0], n[n.length - 1], e)) ? d(B(n, t)) : f;
        }, f.copy = function () {
          return N(f, gt(t, e, n, i, a, o, u, c, s));
        }, f;
      }

      var pt = function pt() {
        return gt(rt.D, rt.n, rt.B, rt.a, rt.e, rt.j, rt.r, rt.h, it.c).domain([new Date(2e3, 0, 1), new Date(2e3, 0, 2)]);
      },
          _t = function _t() {
        return gt(rt.Ha, rt.R, rt.Fa, rt.F, rt.J, rt.N, rt.V, rt.L, it.g).domain([Date.UTC(2e3, 0, 1), Date.UTC(2e3, 0, 2)]);
      };

      function xt(t) {
        var e = 0,
            n = 1,
            r = !1;

        function i(i) {
          var a = (i - e) / (n - e);
          return t(r ? Math.max(0, Math.min(1, a)) : a);
        }

        return i.domain = function (t) {
          return arguments.length ? (e = +t[0], n = +t[1], i) : [e, n];
        }, i.clamp = function (t) {
          return arguments.length ? (r = !!t, i) : r;
        }, i.interpolator = function (e) {
          return arguments.length ? (t = e, i) : t;
        }, i.copy = function () {
          return xt(t).domain([e, n]).clamp(r);
        }, z(i);
      }

      var yt = n(27),
          vt = n(0),
          bt = n(28),
          mt = n(9),
          wt = n(11),
          St = n(24),
          At = n(19);
      n.d(e, "version", function () {
        return "5.4.0";
      }), n.d(e, "bisect", function () {
        return r.b;
      }), n.d(e, "bisectRight", function () {
        return r.d;
      }), n.d(e, "bisectLeft", function () {
        return r.c;
      }), n.d(e, "ascending", function () {
        return r.a;
      }), n.d(e, "bisector", function () {
        return r.e;
      }), n.d(e, "cross", function () {
        return r.f;
      }), n.d(e, "descending", function () {
        return r.g;
      }), n.d(e, "deviation", function () {
        return r.h;
      }), n.d(e, "extent", function () {
        return r.i;
      }), n.d(e, "histogram", function () {
        return r.j;
      }), n.d(e, "thresholdFreedmanDiaconis", function () {
        return r.w;
      }), n.d(e, "thresholdScott", function () {
        return r.x;
      }), n.d(e, "thresholdSturges", function () {
        return r.y;
      }), n.d(e, "max", function () {
        return r.k;
      }), n.d(e, "mean", function () {
        return r.l;
      }), n.d(e, "median", function () {
        return r.m;
      }), n.d(e, "merge", function () {
        return r.n;
      }), n.d(e, "min", function () {
        return r.o;
      }), n.d(e, "pairs", function () {
        return r.p;
      }), n.d(e, "permute", function () {
        return r.q;
      }), n.d(e, "quantile", function () {
        return r.r;
      }), n.d(e, "range", function () {
        return r.s;
      }), n.d(e, "scan", function () {
        return r.t;
      }), n.d(e, "shuffle", function () {
        return r.u;
      }), n.d(e, "sum", function () {
        return r.v;
      }), n.d(e, "ticks", function () {
        return r.B;
      }), n.d(e, "tickIncrement", function () {
        return r.z;
      }), n.d(e, "tickStep", function () {
        return r.A;
      }), n.d(e, "transpose", function () {
        return r.C;
      }), n.d(e, "variance", function () {
        return r.D;
      }), n.d(e, "zip", function () {
        return r.E;
      }), n.d(e, "axisTop", function () {
        return i.d;
      }), n.d(e, "axisRight", function () {
        return i.c;
      }), n.d(e, "axisBottom", function () {
        return i.a;
      }), n.d(e, "axisLeft", function () {
        return i.b;
      }), n.d(e, "brush", function () {
        return a.a;
      }), n.d(e, "brushX", function () {
        return a.c;
      }), n.d(e, "brushY", function () {
        return a.d;
      }), n.d(e, "brushSelection", function () {
        return a.b;
      }), n.d(e, "chord", function () {
        return o.a;
      }), n.d(e, "ribbon", function () {
        return o.b;
      }), n.d(e, "nest", function () {
        return u.d;
      }), n.d(e, "set", function () {
        return u.e;
      }), n.d(e, "map", function () {
        return u.c;
      }), n.d(e, "keys", function () {
        return u.b;
      }), n.d(e, "values", function () {
        return u.f;
      }), n.d(e, "entries", function () {
        return u.a;
      }), n.d(e, "color", function () {
        return c.a;
      }), n.d(e, "rgb", function () {
        return c.f;
      }), n.d(e, "hsl", function () {
        return c.d;
      }), n.d(e, "lab", function () {
        return c.e;
      }), n.d(e, "hcl", function () {
        return c.c;
      }), n.d(e, "cubehelix", function () {
        return c.b;
      }), n.d(e, "contours", function () {
        return s.b;
      }), n.d(e, "contourDensity", function () {
        return s.a;
      }), n.d(e, "dispatch", function () {
        return f.a;
      }), n.d(e, "drag", function () {
        return l.a;
      }), n.d(e, "dragDisable", function () {
        return l.b;
      }), n.d(e, "dragEnable", function () {
        return l.c;
      }), n.d(e, "dsvFormat", function () {
        return d.e;
      }), n.d(e, "csvParse", function () {
        return d.c;
      }), n.d(e, "csvParseRows", function () {
        return d.d;
      }), n.d(e, "csvFormat", function () {
        return d.a;
      }), n.d(e, "csvFormatRows", function () {
        return d.b;
      }), n.d(e, "tsvParse", function () {
        return d.h;
      }), n.d(e, "tsvParseRows", function () {
        return d.i;
      }), n.d(e, "tsvFormat", function () {
        return d.f;
      }), n.d(e, "tsvFormatRows", function () {
        return d.g;
      }), n.d(e, "easeLinear", function () {
        return h.y;
      }), n.d(e, "easeQuad", function () {
        return h.D;
      }), n.d(e, "easeQuadIn", function () {
        return h.E;
      }), n.d(e, "easeQuadOut", function () {
        return h.G;
      }), n.d(e, "easeQuadInOut", function () {
        return h.F;
      }), n.d(e, "easeCubic", function () {
        return h.m;
      }), n.d(e, "easeCubicIn", function () {
        return h.n;
      }), n.d(e, "easeCubicOut", function () {
        return h.p;
      }), n.d(e, "easeCubicInOut", function () {
        return h.o;
      }), n.d(e, "easePoly", function () {
        return h.z;
      }), n.d(e, "easePolyIn", function () {
        return h.A;
      }), n.d(e, "easePolyOut", function () {
        return h.C;
      }), n.d(e, "easePolyInOut", function () {
        return h.B;
      }), n.d(e, "easeSin", function () {
        return h.H;
      }), n.d(e, "easeSinIn", function () {
        return h.I;
      }), n.d(e, "easeSinOut", function () {
        return h.K;
      }), n.d(e, "easeSinInOut", function () {
        return h.J;
      }), n.d(e, "easeExp", function () {
        return h.u;
      }), n.d(e, "easeExpIn", function () {
        return h.v;
      }), n.d(e, "easeExpOut", function () {
        return h.x;
      }), n.d(e, "easeExpInOut", function () {
        return h.w;
      }), n.d(e, "easeCircle", function () {
        return h.i;
      }), n.d(e, "easeCircleIn", function () {
        return h.j;
      }), n.d(e, "easeCircleOut", function () {
        return h.l;
      }), n.d(e, "easeCircleInOut", function () {
        return h.k;
      }), n.d(e, "easeBounce", function () {
        return h.e;
      }), n.d(e, "easeBounceIn", function () {
        return h.f;
      }), n.d(e, "easeBounceOut", function () {
        return h.h;
      }), n.d(e, "easeBounceInOut", function () {
        return h.g;
      }), n.d(e, "easeBack", function () {
        return h.a;
      }), n.d(e, "easeBackIn", function () {
        return h.b;
      }), n.d(e, "easeBackOut", function () {
        return h.d;
      }), n.d(e, "easeBackInOut", function () {
        return h.c;
      }), n.d(e, "easeElastic", function () {
        return h.q;
      }), n.d(e, "easeElasticIn", function () {
        return h.r;
      }), n.d(e, "easeElasticOut", function () {
        return h.t;
      }), n.d(e, "easeElasticInOut", function () {
        return h.s;
      }), n.d(e, "blob", function () {
        return g.a;
      }), n.d(e, "buffer", function () {
        return g.b;
      }), n.d(e, "dsv", function () {
        return g.d;
      }), n.d(e, "csv", function () {
        return g.c;
      }), n.d(e, "tsv", function () {
        return g.j;
      }), n.d(e, "image", function () {
        return g.f;
      }), n.d(e, "json", function () {
        return g.g;
      }), n.d(e, "text", function () {
        return g.i;
      }), n.d(e, "xml", function () {
        return g.k;
      }), n.d(e, "html", function () {
        return g.e;
      }), n.d(e, "svg", function () {
        return g.h;
      }), n.d(e, "forceCenter", function () {
        return p.a;
      }), n.d(e, "forceCollide", function () {
        return p.b;
      }), n.d(e, "forceLink", function () {
        return p.c;
      }), n.d(e, "forceManyBody", function () {
        return p.d;
      }), n.d(e, "forceRadial", function () {
        return p.e;
      }), n.d(e, "forceSimulation", function () {
        return p.f;
      }), n.d(e, "forceX", function () {
        return p.g;
      }), n.d(e, "forceY", function () {
        return p.h;
      }), n.d(e, "formatDefaultLocale", function () {
        return _.b;
      }), n.d(e, "format", function () {
        return _.a;
      }), n.d(e, "formatPrefix", function () {
        return _.d;
      }), n.d(e, "formatLocale", function () {
        return _.c;
      }), n.d(e, "formatSpecifier", function () {
        return _.e;
      }), n.d(e, "precisionFixed", function () {
        return _.f;
      }), n.d(e, "precisionPrefix", function () {
        return _.g;
      }), n.d(e, "precisionRound", function () {
        return _.h;
      }), n.d(e, "geoArea", function () {
        return x.c;
      }), n.d(e, "geoBounds", function () {
        return x.h;
      }), n.d(e, "geoCentroid", function () {
        return x.i;
      }), n.d(e, "geoCircle", function () {
        return x.j;
      }), n.d(e, "geoClipAntimeridian", function () {
        return x.k;
      }), n.d(e, "geoClipCircle", function () {
        return x.l;
      }), n.d(e, "geoClipExtent", function () {
        return x.m;
      }), n.d(e, "geoClipRectangle", function () {
        return x.n;
      }), n.d(e, "geoContains", function () {
        return x.u;
      }), n.d(e, "geoDistance", function () {
        return x.v;
      }), n.d(e, "geoGraticule", function () {
        return x.A;
      }), n.d(e, "geoGraticule10", function () {
        return x.B;
      }), n.d(e, "geoInterpolate", function () {
        return x.D;
      }), n.d(e, "geoLength", function () {
        return x.E;
      }), n.d(e, "geoPath", function () {
        return x.L;
      }), n.d(e, "geoAlbers", function () {
        return x.a;
      }), n.d(e, "geoAlbersUsa", function () {
        return x.b;
      }), n.d(e, "geoAzimuthalEqualArea", function () {
        return x.d;
      }), n.d(e, "geoAzimuthalEqualAreaRaw", function () {
        return x.e;
      }), n.d(e, "geoAzimuthalEquidistant", function () {
        return x.f;
      }), n.d(e, "geoAzimuthalEquidistantRaw", function () {
        return x.g;
      }), n.d(e, "geoConicConformal", function () {
        return x.o;
      }), n.d(e, "geoConicConformalRaw", function () {
        return x.p;
      }), n.d(e, "geoConicEqualArea", function () {
        return x.q;
      }), n.d(e, "geoConicEqualAreaRaw", function () {
        return x.r;
      }), n.d(e, "geoConicEquidistant", function () {
        return x.s;
      }), n.d(e, "geoConicEquidistantRaw", function () {
        return x.t;
      }), n.d(e, "geoEquirectangular", function () {
        return x.w;
      }), n.d(e, "geoEquirectangularRaw", function () {
        return x.x;
      }), n.d(e, "geoGnomonic", function () {
        return x.y;
      }), n.d(e, "geoGnomonicRaw", function () {
        return x.z;
      }), n.d(e, "geoIdentity", function () {
        return x.C;
      }), n.d(e, "geoProjection", function () {
        return x.M;
      }), n.d(e, "geoProjectionMutator", function () {
        return x.N;
      }), n.d(e, "geoMercator", function () {
        return x.F;
      }), n.d(e, "geoMercatorRaw", function () {
        return x.G;
      }), n.d(e, "geoNaturalEarth1", function () {
        return x.H;
      }), n.d(e, "geoNaturalEarth1Raw", function () {
        return x.I;
      }), n.d(e, "geoOrthographic", function () {
        return x.J;
      }), n.d(e, "geoOrthographicRaw", function () {
        return x.K;
      }), n.d(e, "geoStereographic", function () {
        return x.P;
      }), n.d(e, "geoStereographicRaw", function () {
        return x.Q;
      }), n.d(e, "geoTransverseMercator", function () {
        return x.T;
      }), n.d(e, "geoTransverseMercatorRaw", function () {
        return x.U;
      }), n.d(e, "geoRotation", function () {
        return x.O;
      }), n.d(e, "geoStream", function () {
        return x.R;
      }), n.d(e, "geoTransform", function () {
        return x.S;
      }), n.d(e, "cluster", function () {
        return y.a;
      }), n.d(e, "hierarchy", function () {
        return y.b;
      }), n.d(e, "pack", function () {
        return y.c;
      }), n.d(e, "packSiblings", function () {
        return y.e;
      }), n.d(e, "packEnclose", function () {
        return y.d;
      }), n.d(e, "partition", function () {
        return y.f;
      }), n.d(e, "stratify", function () {
        return y.g;
      }), n.d(e, "tree", function () {
        return y.h;
      }), n.d(e, "treemap", function () {
        return y.i;
      }), n.d(e, "treemapBinary", function () {
        return y.j;
      }), n.d(e, "treemapDice", function () {
        return y.k;
      }), n.d(e, "treemapSlice", function () {
        return y.m;
      }), n.d(e, "treemapSliceDice", function () {
        return y.n;
      }), n.d(e, "treemapSquarify", function () {
        return y.o;
      }), n.d(e, "treemapResquarify", function () {
        return y.l;
      }), n.d(e, "interpolate", function () {
        return v.a;
      }), n.d(e, "interpolateArray", function () {
        return v.b;
      }), n.d(e, "interpolateBasis", function () {
        return v.c;
      }), n.d(e, "interpolateBasisClosed", function () {
        return v.d;
      }), n.d(e, "interpolateDate", function () {
        return v.g;
      }), n.d(e, "interpolateNumber", function () {
        return v.m;
      }), n.d(e, "interpolateObject", function () {
        return v.n;
      }), n.d(e, "interpolateRound", function () {
        return v.r;
      }), n.d(e, "interpolateString", function () {
        return v.s;
      }), n.d(e, "interpolateTransformCss", function () {
        return v.t;
      }), n.d(e, "interpolateTransformSvg", function () {
        return v.u;
      }), n.d(e, "interpolateZoom", function () {
        return v.v;
      }), n.d(e, "interpolateRgb", function () {
        return v.o;
      }), n.d(e, "interpolateRgbBasis", function () {
        return v.p;
      }), n.d(e, "interpolateRgbBasisClosed", function () {
        return v.q;
      }), n.d(e, "interpolateHsl", function () {
        return v.j;
      }), n.d(e, "interpolateHslLong", function () {
        return v.k;
      }), n.d(e, "interpolateLab", function () {
        return v.l;
      }), n.d(e, "interpolateHcl", function () {
        return v.h;
      }), n.d(e, "interpolateHclLong", function () {
        return v.i;
      }), n.d(e, "interpolateCubehelix", function () {
        return v.e;
      }), n.d(e, "interpolateCubehelixLong", function () {
        return v.f;
      }), n.d(e, "quantize", function () {
        return v.w;
      }), n.d(e, "path", function () {
        return b.a;
      }), n.d(e, "polygonArea", function () {
        return m.a;
      }), n.d(e, "polygonCentroid", function () {
        return m.b;
      }), n.d(e, "polygonHull", function () {
        return m.d;
      }), n.d(e, "polygonContains", function () {
        return m.c;
      }), n.d(e, "polygonLength", function () {
        return m.e;
      }), n.d(e, "quadtree", function () {
        return w.a;
      }), n.d(e, "randomUniform", function () {
        return S.f;
      }), n.d(e, "randomNormal", function () {
        return S.e;
      }), n.d(e, "randomLogNormal", function () {
        return S.d;
      }), n.d(e, "randomBates", function () {
        return S.a;
      }), n.d(e, "randomIrwinHall", function () {
        return S.c;
      }), n.d(e, "randomExponential", function () {
        return S.b;
      }), n.d(e, "scaleBand", function () {
        return L;
      }), n.d(e, "scalePoint", function () {
        return E;
      }), n.d(e, "scaleIdentity", function () {
        return X;
      }), n.d(e, "scaleLinear", function () {
        return j;
      }), n.d(e, "scaleLog", function () {
        return Z;
      }), n.d(e, "scaleOrdinal", function () {
        return M;
      }), n.d(e, "scaleImplicit", function () {
        return C;
      }), n.d(e, "scalePow", function () {
        return K;
      }), n.d(e, "scaleSqrt", function () {
        return J;
      }), n.d(e, "scaleQuantile", function () {
        return tt;
      }), n.d(e, "scaleQuantize", function () {
        return et;
      }), n.d(e, "scaleThreshold", function () {
        return nt;
      }), n.d(e, "scaleTime", function () {
        return pt;
      }), n.d(e, "scaleUtc", function () {
        return _t;
      }), n.d(e, "scaleSequential", function () {
        return xt;
      }), n.d(e, "schemeCategory10", function () {
        return yt.P;
      }), n.d(e, "schemeAccent", function () {
        return yt.K;
      }), n.d(e, "schemeDark2", function () {
        return yt.Q;
      }), n.d(e, "schemePaired", function () {
        return yt.X;
      }), n.d(e, "schemePastel1", function () {
        return yt.Y;
      }), n.d(e, "schemePastel2", function () {
        return yt.Z;
      }), n.d(e, "schemeSet1", function () {
        return yt.Ma;
      }), n.d(e, "schemeSet2", function () {
        return yt.Na;
      }), n.d(e, "schemeSet3", function () {
        return yt.Oa;
      }), n.d(e, "interpolateBrBG", function () {
        return yt.b;
      }), n.d(e, "schemeBrBG", function () {
        return yt.M;
      }), n.d(e, "interpolatePRGn", function () {
        return yt.n;
      }), n.d(e, "schemePRGn", function () {
        return yt.W;
      }), n.d(e, "interpolatePiYG", function () {
        return yt.o;
      }), n.d(e, "schemePiYG", function () {
        return yt.Aa;
      }), n.d(e, "interpolatePuOr", function () {
        return yt.s;
      }), n.d(e, "schemePuOr", function () {
        return yt.Da;
      }), n.d(e, "interpolateRdBu", function () {
        return yt.w;
      }), n.d(e, "schemeRdBu", function () {
        return yt.Ga;
      }), n.d(e, "interpolateRdGy", function () {
        return yt.x;
      }), n.d(e, "schemeRdGy", function () {
        return yt.Ha;
      }), n.d(e, "interpolateRdYlBu", function () {
        return yt.z;
      }), n.d(e, "schemeRdYlBu", function () {
        return yt.Ja;
      }), n.d(e, "interpolateRdYlGn", function () {
        return yt.A;
      }), n.d(e, "schemeRdYlGn", function () {
        return yt.Ka;
      }), n.d(e, "interpolateSpectral", function () {
        return yt.D;
      }), n.d(e, "schemeSpectral", function () {
        return yt.Pa;
      }), n.d(e, "interpolateBuGn", function () {
        return yt.c;
      }), n.d(e, "schemeBuGn", function () {
        return yt.N;
      }), n.d(e, "interpolateBuPu", function () {
        return yt.d;
      }), n.d(e, "schemeBuPu", function () {
        return yt.O;
      }), n.d(e, "interpolateGnBu", function () {
        return yt.g;
      }), n.d(e, "schemeGnBu", function () {
        return yt.R;
      }), n.d(e, "interpolateOrRd", function () {
        return yt.l;
      }), n.d(e, "schemeOrRd", function () {
        return yt.U;
      }), n.d(e, "interpolatePuBuGn", function () {
        return yt.r;
      }), n.d(e, "schemePuBuGn", function () {
        return yt.Ca;
      }), n.d(e, "interpolatePuBu", function () {
        return yt.q;
      }), n.d(e, "schemePuBu", function () {
        return yt.Ba;
      }), n.d(e, "interpolatePuRd", function () {
        return yt.t;
      }), n.d(e, "schemePuRd", function () {
        return yt.Ea;
      }), n.d(e, "interpolateRdPu", function () {
        return yt.y;
      }), n.d(e, "schemeRdPu", function () {
        return yt.Ia;
      }), n.d(e, "interpolateYlGnBu", function () {
        return yt.H;
      }), n.d(e, "schemeYlGnBu", function () {
        return yt.Ra;
      }), n.d(e, "interpolateYlGn", function () {
        return yt.G;
      }), n.d(e, "schemeYlGn", function () {
        return yt.Qa;
      }), n.d(e, "interpolateYlOrBr", function () {
        return yt.I;
      }), n.d(e, "schemeYlOrBr", function () {
        return yt.Sa;
      }), n.d(e, "interpolateYlOrRd", function () {
        return yt.J;
      }), n.d(e, "schemeYlOrRd", function () {
        return yt.Ta;
      }), n.d(e, "interpolateBlues", function () {
        return yt.a;
      }), n.d(e, "schemeBlues", function () {
        return yt.L;
      }), n.d(e, "interpolateGreens", function () {
        return yt.h;
      }), n.d(e, "schemeGreens", function () {
        return yt.S;
      }), n.d(e, "interpolateGreys", function () {
        return yt.i;
      }), n.d(e, "schemeGreys", function () {
        return yt.T;
      }), n.d(e, "interpolatePurples", function () {
        return yt.u;
      }), n.d(e, "schemePurples", function () {
        return yt.Fa;
      }), n.d(e, "interpolateReds", function () {
        return yt.B;
      }), n.d(e, "schemeReds", function () {
        return yt.La;
      }), n.d(e, "interpolateOranges", function () {
        return yt.m;
      }), n.d(e, "schemeOranges", function () {
        return yt.V;
      }), n.d(e, "interpolateCubehelixDefault", function () {
        return yt.f;
      }), n.d(e, "interpolateRainbow", function () {
        return yt.v;
      }), n.d(e, "interpolateWarm", function () {
        return yt.F;
      }), n.d(e, "interpolateCool", function () {
        return yt.e;
      }), n.d(e, "interpolateSinebow", function () {
        return yt.C;
      }), n.d(e, "interpolateViridis", function () {
        return yt.E;
      }), n.d(e, "interpolateMagma", function () {
        return yt.k;
      }), n.d(e, "interpolateInferno", function () {
        return yt.j;
      }), n.d(e, "interpolatePlasma", function () {
        return yt.p;
      }), n.d(e, "create", function () {
        return vt.b;
      }), n.d(e, "creator", function () {
        return vt.c;
      }), n.d(e, "local", function () {
        return vt.f;
      }), n.d(e, "matcher", function () {
        return vt.g;
      }), n.d(e, "mouse", function () {
        return vt.h;
      }), n.d(e, "namespace", function () {
        return vt.i;
      }), n.d(e, "namespaces", function () {
        return vt.j;
      }), n.d(e, "clientPoint", function () {
        return vt.a;
      }), n.d(e, "select", function () {
        return vt.k;
      }), n.d(e, "selectAll", function () {
        return vt.l;
      }), n.d(e, "selection", function () {
        return vt.m;
      }), n.d(e, "selector", function () {
        return vt.n;
      }), n.d(e, "selectorAll", function () {
        return vt.o;
      }), n.d(e, "style", function () {
        return vt.p;
      }), n.d(e, "touch", function () {
        return vt.q;
      }), n.d(e, "touches", function () {
        return vt.r;
      }), n.d(e, "window", function () {
        return vt.s;
      }), n.d(e, "event", function () {
        return vt.e;
      }), n.d(e, "customEvent", function () {
        return vt.d;
      }), n.d(e, "arc", function () {
        return bt.a;
      }), n.d(e, "area", function () {
        return bt.b;
      }), n.d(e, "line", function () {
        return bt.v;
      }), n.d(e, "pie", function () {
        return bt.A;
      }), n.d(e, "areaRadial", function () {
        return bt.c;
      }), n.d(e, "radialArea", function () {
        return bt.C;
      }), n.d(e, "lineRadial", function () {
        return bt.w;
      }), n.d(e, "radialLine", function () {
        return bt.D;
      }), n.d(e, "pointRadial", function () {
        return bt.B;
      }), n.d(e, "linkHorizontal", function () {
        return bt.x;
      }), n.d(e, "linkVertical", function () {
        return bt.z;
      }), n.d(e, "linkRadial", function () {
        return bt.y;
      }), n.d(e, "symbol", function () {
        return bt.P;
      }), n.d(e, "symbols", function () {
        return bt.X;
      }), n.d(e, "symbolCircle", function () {
        return bt.Q;
      }), n.d(e, "symbolCross", function () {
        return bt.R;
      }), n.d(e, "symbolDiamond", function () {
        return bt.S;
      }), n.d(e, "symbolSquare", function () {
        return bt.T;
      }), n.d(e, "symbolStar", function () {
        return bt.U;
      }), n.d(e, "symbolTriangle", function () {
        return bt.V;
      }), n.d(e, "symbolWye", function () {
        return bt.W;
      }), n.d(e, "curveBasisClosed", function () {
        return bt.e;
      }), n.d(e, "curveBasisOpen", function () {
        return bt.f;
      }), n.d(e, "curveBasis", function () {
        return bt.d;
      }), n.d(e, "curveBundle", function () {
        return bt.g;
      }), n.d(e, "curveCardinalClosed", function () {
        return bt.i;
      }), n.d(e, "curveCardinalOpen", function () {
        return bt.j;
      }), n.d(e, "curveCardinal", function () {
        return bt.h;
      }), n.d(e, "curveCatmullRomClosed", function () {
        return bt.l;
      }), n.d(e, "curveCatmullRomOpen", function () {
        return bt.m;
      }), n.d(e, "curveCatmullRom", function () {
        return bt.k;
      }), n.d(e, "curveLinearClosed", function () {
        return bt.o;
      }), n.d(e, "curveLinear", function () {
        return bt.n;
      }), n.d(e, "curveMonotoneX", function () {
        return bt.p;
      }), n.d(e, "curveMonotoneY", function () {
        return bt.q;
      }), n.d(e, "curveNatural", function () {
        return bt.r;
      }), n.d(e, "curveStep", function () {
        return bt.s;
      }), n.d(e, "curveStepAfter", function () {
        return bt.t;
      }), n.d(e, "curveStepBefore", function () {
        return bt.u;
      }), n.d(e, "stack", function () {
        return bt.E;
      }), n.d(e, "stackOffsetExpand", function () {
        return bt.G;
      }), n.d(e, "stackOffsetDiverging", function () {
        return bt.F;
      }), n.d(e, "stackOffsetNone", function () {
        return bt.H;
      }), n.d(e, "stackOffsetSilhouette", function () {
        return bt.I;
      }), n.d(e, "stackOffsetWiggle", function () {
        return bt.J;
      }), n.d(e, "stackOrderAscending", function () {
        return bt.K;
      }), n.d(e, "stackOrderDescending", function () {
        return bt.L;
      }), n.d(e, "stackOrderInsideOut", function () {
        return bt.M;
      }), n.d(e, "stackOrderNone", function () {
        return bt.N;
      }), n.d(e, "stackOrderReverse", function () {
        return bt.O;
      }), n.d(e, "timeInterval", function () {
        return rt.g;
      }), n.d(e, "timeMillisecond", function () {
        return rt.h;
      }), n.d(e, "timeMilliseconds", function () {
        return rt.i;
      }), n.d(e, "utcMillisecond", function () {
        return rt.L;
      }), n.d(e, "utcMilliseconds", function () {
        return rt.M;
      }), n.d(e, "timeSecond", function () {
        return rt.r;
      }), n.d(e, "timeSeconds", function () {
        return rt.s;
      }), n.d(e, "utcSecond", function () {
        return rt.V;
      }), n.d(e, "utcSeconds", function () {
        return rt.W;
      }), n.d(e, "timeMinute", function () {
        return rt.j;
      }), n.d(e, "timeMinutes", function () {
        return rt.k;
      }), n.d(e, "timeHour", function () {
        return rt.e;
      }), n.d(e, "timeHours", function () {
        return rt.f;
      }), n.d(e, "timeDay", function () {
        return rt.a;
      }), n.d(e, "timeDays", function () {
        return rt.b;
      }), n.d(e, "timeWeek", function () {
        return rt.B;
      }), n.d(e, "timeWeeks", function () {
        return rt.C;
      }), n.d(e, "timeSunday", function () {
        return rt.t;
      }), n.d(e, "timeSundays", function () {
        return rt.u;
      }), n.d(e, "timeMonday", function () {
        return rt.l;
      }), n.d(e, "timeMondays", function () {
        return rt.m;
      }), n.d(e, "timeTuesday", function () {
        return rt.x;
      }), n.d(e, "timeTuesdays", function () {
        return rt.y;
      }), n.d(e, "timeWednesday", function () {
        return rt.z;
      }), n.d(e, "timeWednesdays", function () {
        return rt.A;
      }), n.d(e, "timeThursday", function () {
        return rt.v;
      }), n.d(e, "timeThursdays", function () {
        return rt.w;
      }), n.d(e, "timeFriday", function () {
        return rt.c;
      }), n.d(e, "timeFridays", function () {
        return rt.d;
      }), n.d(e, "timeSaturday", function () {
        return rt.p;
      }), n.d(e, "timeSaturdays", function () {
        return rt.q;
      }), n.d(e, "timeMonth", function () {
        return rt.n;
      }), n.d(e, "timeMonths", function () {
        return rt.o;
      }), n.d(e, "timeYear", function () {
        return rt.D;
      }), n.d(e, "timeYears", function () {
        return rt.E;
      }), n.d(e, "utcMinute", function () {
        return rt.N;
      }), n.d(e, "utcMinutes", function () {
        return rt.O;
      }), n.d(e, "utcHour", function () {
        return rt.J;
      }), n.d(e, "utcHours", function () {
        return rt.K;
      }), n.d(e, "utcDay", function () {
        return rt.F;
      }), n.d(e, "utcDays", function () {
        return rt.G;
      }), n.d(e, "utcWeek", function () {
        return rt.Fa;
      }), n.d(e, "utcWeeks", function () {
        return rt.Ga;
      }), n.d(e, "utcSunday", function () {
        return rt.X;
      }), n.d(e, "utcSundays", function () {
        return rt.Y;
      }), n.d(e, "utcMonday", function () {
        return rt.P;
      }), n.d(e, "utcMondays", function () {
        return rt.Q;
      }), n.d(e, "utcTuesday", function () {
        return rt.Ba;
      }), n.d(e, "utcTuesdays", function () {
        return rt.Ca;
      }), n.d(e, "utcWednesday", function () {
        return rt.Da;
      }), n.d(e, "utcWednesdays", function () {
        return rt.Ea;
      }), n.d(e, "utcThursday", function () {
        return rt.Z;
      }), n.d(e, "utcThursdays", function () {
        return rt.Aa;
      }), n.d(e, "utcFriday", function () {
        return rt.H;
      }), n.d(e, "utcFridays", function () {
        return rt.I;
      }), n.d(e, "utcSaturday", function () {
        return rt.T;
      }), n.d(e, "utcSaturdays", function () {
        return rt.U;
      }), n.d(e, "utcMonth", function () {
        return rt.R;
      }), n.d(e, "utcMonths", function () {
        return rt.S;
      }), n.d(e, "utcYear", function () {
        return rt.Ha;
      }), n.d(e, "utcYears", function () {
        return rt.Ia;
      }), n.d(e, "timeFormatDefaultLocale", function () {
        return it.d;
      }), n.d(e, "timeFormat", function () {
        return it.c;
      }), n.d(e, "timeParse", function () {
        return it.f;
      }), n.d(e, "utcFormat", function () {
        return it.g;
      }), n.d(e, "utcParse", function () {
        return it.h;
      }), n.d(e, "timeFormatLocale", function () {
        return it.e;
      }), n.d(e, "isoFormat", function () {
        return it.a;
      }), n.d(e, "isoParse", function () {
        return it.b;
      }), n.d(e, "now", function () {
        return mt.b;
      }), n.d(e, "timer", function () {
        return mt.d;
      }), n.d(e, "timerFlush", function () {
        return mt.e;
      }), n.d(e, "timeout", function () {
        return mt.c;
      }), n.d(e, "interval", function () {
        return mt.a;
      }), n.d(e, "transition", function () {
        return wt.c;
      }), n.d(e, "active", function () {
        return wt.a;
      }), n.d(e, "interrupt", function () {
        return wt.b;
      }), n.d(e, "voronoi", function () {
        return St.a;
      }), n.d(e, "zoom", function () {
        return At.a;
      }), n.d(e, "zoomTransform", function () {
        return At.c;
      }), n.d(e, "zoomIdentity", function () {
        return At.b;
      });
    }, function (t, e, n) {
      "use strict";

      n.r(e);
      n(1), n(16), n(17), n(18), n(8), n(4), n(23), n(7), n(12), n(14), n(15), n(22), n(25);
      var r = n(5),
          i = (n(29), n(26), n(3), n(6), n(20), n(13), n(21), Array.prototype);
      i.map, i.slice;
      n(2), n(10);
      n(27), n(0), n(28), n(9), n(11), n(24), n(19);
      var a = n(32);
      n(39), n(36);

      function o(_x, _x2) {
        return _o.apply(this, arguments);
      }

      function _o() {
        _o = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(t, e) {
          var _n4, _r4, _i4;

          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _context.prev = 0;
                  _n4 = null != e ? "dev-openebench" : "openebench", console.log("https://" + _n4 + ".bsc.es/monitor/metrics/" + t);
                  _context.next = 4;
                  return fetch("https://" + _n4 + ".bsc.es/monitor/metrics/" + t);

                case 4:
                  _r4 = _context.sent;
                  _context.next = 7;
                  return _r4.text();

                case 7:
                  _i4 = _context.sent;
                  return _context.abrupt("return", JSON.parse(_i4));

                case 11:
                  _context.prev = 11;
                  _context.t0 = _context["catch"](0);

                case 13:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee, null, [[0, 11]]);
        }));
        return _o.apply(this, arguments);
      }

      function u(t, e, n, i, o, u) {
        var c = [],
            s = {},
            f = new Date().getFullYear();
        t.project.publications.forEach(function (t) {
          t.entries.forEach(function (t) {
            var e = t.year;

            if (null != e) {
              var _n3 = e,
                  _r2 = {};

              for (; e <= f; e++) {
                _r2[e] = 0;
              }

              var _i2 = {},
                  _a = "";
              t.pmid ? (_a = "PMID: " + t.pmid + " (" + t.cit_count + ")", "true" == u && (_a = t.title ? t.title + " (" + t.cit_count + ")" : "N/A PMID: " + t.pmid + " (" + t.cit_count + ")")) : (_a = "Doi: " + t.doi + " (" + t.cit_count + ")", "true" == u && (_a = t.title ? t.title + " (" + t.cit_count + ")" : "N/A Doi: " + t.doi + " (" + t.cit_count + ")")), t.citations.forEach(function (t) {
                t.year >= _n3 - 1 && (_i2[t.year] = t.count);
              });

              var _o2 = Object.assign(_r2, _i2),
                  l = Object.keys(_o2),
                  d = Object.values(_o2);

              d.unshift(_a), l.unshift(_a + "y"), c.push(l, d), s[_a] = _a + "y";
            }
          });
        }), function (t, e, n, i, o, u) {
          var c = {
            format: r.a("d"),
            outer: !1
          };
          a.generate({
            size: {
              height: o || "",
              width: u || ""
            },
            title: {
              text: i
            },
            data: {
              xs: e,
              columns: t
            },
            legend: {
              show: !0
            },
            axis: {
              y: {
                tick: {
                  outer: !1,
                  format: function format(t) {
                    return t % 1 == 0 ? t : "";
                  }
                },
                label: {
                  text: "Citations",
                  position: "outer-right"
                },
                min: 0,
                padding: {
                  bottom: 5
                }
              },
              x: {
                tick: c,
                label: {
                  text: "Year",
                  position: "outer-right"
                },
                padding: {
                  right: .3
                }
              }
            },
            point: {
              show: !0
            },
            bindto: "#" + n,
            tooltip: {
              contents: function contents(t, e, n, r) {
                var i,
                    a,
                    o,
                    u,
                    c,
                    s,
                    f = this,
                    l = f.config,
                    d = l.tooltip_format_title || e,
                    h = l.tooltip_format_name || function (t) {
                  return t;
                },
                    g = l.tooltip_format_value || n,
                    p = 0;

                for (a = 0; a < t.length; a++) {
                  p += t[a].value, t[a] && (t[a].value || 0 === t[a].value) && (i || (o = d ? d(t[a].x) : t[a].x, i = "<table class='" + f.CLASS.tooltip + "'>" + (o || 0 === o ? "<tr><th colspan='2'>" + o + "</th></tr>" : "")), c = h(t[a].name), u = g(t[a].value, t[a].ratio, t[a].id, t[a].index), s = f.levelColor ? f.levelColor(t[a].value) : r(t[a].id), i += "<tr class='" + f.CLASS.tooltipName + "-" + t[a].id + "'>", i += "<td class='name'><span style='background-color:" + s + "'></span>" + c + "</td>", i += "<td class='value'>" + u + "</td>", i += "</tr>");
                }

                return i += "<tr class='" + f.CLASS.tooltipName + "'>", i += "<td class='name'> Total </td>", i += "<td class='value'>" + p + "</td>", (i += "</tr>") + "</table>";
              }
            }
          });
        }(c, s, e, n, i, o);
      }

      function c(t, e, n) {
        var r = document.createElement("p");
        r.id = "errorMessage", r.setAttribute("class", "citationChartErrorMessage"), r.text = n, e.appendChild(r);
      }

      function s() {
        var t = document.getElementsByClassName("opebcitations");
        var e = 0;

        var _iterator = _createForOfIteratorHelper(t),
            _step;

        try {
          var _loop = function _loop() {
            var n = _step.value;

            try {
              e++;
              var _t3 = "";

              var _r3 = n.getAttribute("data-id"),
                  _i3 = n.getAttribute("data-url"),
                  _a2 = n.getAttribute("data-title"),
                  _s = n.getAttribute("data-h"),
                  f = n.getAttribute("data-w"),
                  l = n.getAttribute("data-legend"),
                  d = n.getAttribute("dev"),
                  h = document.createElement("div"),
                  g = _r3 + e;

              h.id = g, n.appendChild(h), o(_i3, d).then(function (e) {
                try {
                  0 == e.project.publications ? c(0, n, _t3 = "No publications found") : u(e, g, _a2, _s, f, l);
                } catch (e) {
                  c(0, n, _t3 = "Incorrect url");
                }
              });
            } catch (t) {
              console.log(t);
            }
          };

          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            _loop();
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
      }

      n.d(e, "loadCitationChart", function () {
        return s;
      }), s();
    }, function (t, e, n) {
      (t.exports = n(31)(!1)).push([t.i, ".c3-line{stroke-width:2px}", ""]);
    }, function (t, e, n) {
      var r = n(35);
      "string" == typeof r && (r = [[t.i, r, ""]]);
      var i = {
        hmr: !0,
        transform: void 0,
        insertInto: void 0
      };
      n(30)(r, i);
      r.locals && (t.exports = r.locals);
    }, function (t, e) {
      t.exports = function (t) {
        var e = "undefined" != typeof window && window.location;
        if (!e) throw new Error("fixUrls requires window.location");
        if (!t || "string" != typeof t) return t;
        var n = e.protocol + "//" + e.host,
            r = n + e.pathname.replace(/\/[^\/]*$/, "/");
        return t.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function (t, e) {
          var i,
              a = e.trim().replace(/^"(.*)"$/, function (t, e) {
            return e;
          }).replace(/^'(.*)'$/, function (t, e) {
            return e;
          });
          return /^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(a) ? t : (i = 0 === a.indexOf("//") ? a : 0 === a.indexOf("/") ? n + a : r + a.replace(/^\.\//, ""), "url(" + JSON.stringify(i) + ")");
        });
      };
    }, function (t, e, n) {
      (t.exports = n(31)(!1)).push([t.i, ".c3 svg{font:10px sans-serif;-webkit-tap-highlight-color:transparent}.c3 line,.c3 path{fill:none;stroke:#000}.c3 text{-webkit-user-select:none;-moz-user-select:none;user-select:none}.c3-bars path,.c3-event-rect,.c3-legend-item-tile,.c3-xgrid-focus,.c3-ygrid{shape-rendering:crispEdges}.c3-chart-arc path{stroke:#fff}.c3-chart-arc rect{stroke:#fff;stroke-width:1}.c3-chart-arc text{fill:#fff;font-size:13px}.c3-grid line{stroke:#aaa}.c3-grid text{fill:#aaa}.c3-xgrid,.c3-ygrid{stroke-dasharray:3 3}.c3-text.c3-empty{fill:gray;font-size:2em}.c3-line{stroke-width:1px}.c3-circle._expanded_{stroke-width:1px;stroke:#fff}.c3-selected-circle{fill:#fff;stroke-width:2px}.c3-bar{stroke-width:0}.c3-bar._expanded_{fill-opacity:1;fill-opacity:.75}.c3-target.c3-focused{opacity:1}.c3-target.c3-focused path.c3-line,.c3-target.c3-focused path.c3-step{stroke-width:2px}.c3-target.c3-defocused{opacity:.3!important}.c3-region{fill:#4682b4;fill-opacity:.1}.c3-brush .extent{fill-opacity:.1}.c3-legend-item{font-size:12px}.c3-legend-item-hidden{opacity:.15}.c3-legend-background{opacity:.75;fill:#fff;stroke:#d3d3d3;stroke-width:1}.c3-title{font:14px sans-serif}.c3-tooltip-container{z-index:10}.c3-tooltip{border-collapse:collapse;border-spacing:0;background-color:#fff;empty-cells:show;-webkit-box-shadow:7px 7px 12px -9px #777;-moz-box-shadow:7px 7px 12px -9px #777;box-shadow:7px 7px 12px -9px #777;opacity:.9}.c3-tooltip tr{border:1px solid #ccc}.c3-tooltip th{background-color:#aaa;font-size:14px;padding:2px 5px;text-align:left;color:#fff}.c3-tooltip td{font-size:13px;padding:3px 6px;background-color:#fff;border-left:1px dotted #999}.c3-tooltip td>span{display:inline-block;width:10px;height:10px;margin-right:6px}.c3-tooltip td.value{text-align:right}.c3-area{stroke-width:0;opacity:.2}.c3-chart-arcs-title{dominant-baseline:middle;font-size:1.3em}.c3-chart-arcs .c3-chart-arcs-background{fill:#e0e0e0;stroke:#fff}.c3-chart-arcs .c3-chart-arcs-gauge-unit{fill:#000;font-size:16px}.c3-chart-arcs .c3-chart-arcs-gauge-max,.c3-chart-arcs .c3-chart-arcs-gauge-min{fill:#777}.c3-chart-arc .c3-gauge-value{fill:#000}.c3-chart-arc.c3-target.c3-focused g path,.c3-chart-arc.c3-target g path{opacity:1}", ""]);
    }, function (t, e, n) {
      var r = n(38);
      "string" == typeof r && (r = [[t.i, r, ""]]);
      var i = {
        hmr: !0,
        transform: void 0,
        insertInto: void 0
      };
      n(30)(r, i);
      r.locals && (t.exports = r.locals);
    }]));
    /***/
  },

  /***/
  "./src/app/tool/shared/pipes/chart-id.pipe.ts":
  /*!****************************************************!*\
    !*** ./src/app/tool/shared/pipes/chart-id.pipe.ts ***!
    \****************************************************/

  /*! exports provided: ChartIdPipe */

  /***/
  function srcAppToolSharedPipesChartIdPipeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ChartIdPipe", function () {
      return ChartIdPipe;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /**
     * pipe function for chartID
     */


    var ChartIdPipe =
    /*#__PURE__*/

    /**
     * Class chart id pipe
     */
    function () {
      function ChartIdPipe() {
        _classCallCheck(this, ChartIdPipe);
      }

      _createClass(ChartIdPipe, [{
        key: "transform",
        value: function transform(dict) {
          return dict.split('/tool/')[1];
        }
      }]);

      return ChartIdPipe;
    }();

    ChartIdPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
      name: 'chartId'
    })
    /**
     * Class chart id pipe
     */
    ], ChartIdPipe);
    /***/
  },

  /***/
  "./src/app/tool/shared/pipes/key-value.pipe.ts":
  /*!*****************************************************!*\
    !*** ./src/app/tool/shared/pipes/key-value.pipe.ts ***!
    \*****************************************************/

  /*! exports provided: KeyValuePipe */

  /***/
  function srcAppToolSharedPipesKeyValuePipeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "KeyValuePipe", function () {
      return KeyValuePipe;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /**
     * pipe function for Key Value
     */


    var KeyValuePipe =
    /*#__PURE__*/

    /**
     * Class KeyValue Pipe
     */
    function () {
      function KeyValuePipe() {
        _classCallCheck(this, KeyValuePipe);
      }

      _createClass(KeyValuePipe, [{
        key: "transform",
        value: function transform(dict) {
          var res = [];

          for (var key in dict) {
            if (dict.hasOwnProperty(key)) {
              res.push({
                key: key,
                value: dict[key].replace('@', ' (at) ')
              });
            }
          }

          return res;
        }
      }]);

      return KeyValuePipe;
    }();

    KeyValuePipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
      name: 'keyValue'
    })
    /**
     * Class KeyValue Pipe
     */
    ], KeyValuePipe);
    /***/
  },

  /***/
  "./src/app/tool/shared/pipes/source-badge-class.pipe.ts":
  /*!**************************************************************!*\
    !*** ./src/app/tool/shared/pipes/source-badge-class.pipe.ts ***!
    \**************************************************************/

  /*! exports provided: SourceBadgeClassPipe */

  /***/
  function srcAppToolSharedPipesSourceBadgeClassPipeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SourceBadgeClassPipe", function () {
      return SourceBadgeClassPipe;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /**
     * Pipe for Badges
     */


    var SourceBadgeClassPipe =
    /*#__PURE__*/

    /**
     * Class for SourceBadgeClass pipe
     */
    function () {
      function SourceBadgeClassPipe() {
        _classCallCheck(this, SourceBadgeClassPipe);
      }

      _createClass(SourceBadgeClassPipe, [{
        key: "transform",
        value: function transform(dist) {
          console.log(dist);
        }
      }]);

      return SourceBadgeClassPipe;
    }();

    SourceBadgeClassPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
      name: 'sourceBadgeClass'
    })
    /**
     * Class for SourceBadgeClass pipe
     */
    ], SourceBadgeClassPipe);
    /***/
  },

  /***/
  "./src/app/tool/shared/tool.service.ts":
  /*!*********************************************!*\
    !*** ./src/app/tool/shared/tool.service.ts ***!
    \*********************************************/

  /*! exports provided: ToolService */

  /***/
  function srcAppToolSharedToolServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ToolService", function () {
      return ToolService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../environments/environment */
    "./src/environments/environment.ts");
    /**
     * injectable tool service
     */


    var ToolService = /*#__PURE__*/function () {
      /**
       * constructor
       */
      function ToolService(http) {
        _classCallCheck(this, ToolService);

        this.http = http;
        /**
         * url
         */

        this.toolUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].TOOL_SERVICE_URL;
        /**
         * url
         */

        this.toolSearchUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].TOOL_SEARCH_URL;
        /**
         * url
         */

        this.toolStats = _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].TOOL_STATISTICS_URL;
      }
      /**
       * Get tool by id from server
       */


      _createClass(ToolService, [{
        key: "getToolById",
        value: function getToolById(id) {
          this.tool = this.http.get(this.toolUrl, {
            params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpParams"]().set('id', id)
          });
          return this.tool.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('getToolById', [])));
        }
        /**
         * Get tool metrics by id
         */

      }, {
        key: "getToolMetricsById",
        value: function getToolMetricsById(url) {
          this.metrics = this.http.get(url);
          return this.metrics.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('getToolMetricsById', [])));
        }
        /**
         * Filter search for tools
         */

      }, {
        key: "getToolWithFilters",
        value: function getToolWithFilters(filter, skip, limit) {
          var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]().set('Range', 'items=' + skip + '-' + limit);
          var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpParams"]().set('projection', 'description').append('projection', 'web');

          if (filter.type != null) {
            var _iterator2 = _createForOfIteratorHelper(filter.type),
                _step2;

            try {
              for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                var x = _step2.value;
                params = params.append('type', x);
              }
            } catch (err) {
              _iterator2.e(err);
            } finally {
              _iterator2.f();
            }
          }

          switch (filter.filter) {
            case 'Name':
              this.res = this.http.get(this.toolSearchUrl, {
                headers: headers,
                params: params = params.set('name', filter.text).set('label', filter.label),
                observe: 'response'
              });
              break;

            case 'Description':
              this.res = this.http.get(this.toolSearchUrl, {
                headers: headers,
                params: params = params.set('description', filter.text).set('label', filter.label),
                observe: 'response'
              });
              console.log(params);
              break;

            default:
              this.res = this.http.get(this.toolSearchUrl, {
                headers: headers,
                params: params = params.set('text', filter.text).set('label', filter.label),
                observe: 'response'
              });
              break;
          }

          return this.res.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('getToolById', [])));
        }
        /**
         * Get global statistics
         */

      }, {
        key: "getStats",
        value: function getStats() {
          return this.http.get(this.toolStats);
        }
        /**
         * Error handling
         */

      }, {
        key: "handleError",
        value: function handleError() {
          var operation = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'operation';
          var result = arguments.length > 1 ? arguments[1] : undefined;
          return function (error) {
            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead
            // TODO: better job of transforming error for user consumption
            // this.log(`${operation} failed: ${error.message}`);
            // Let the app keep running by returning an empty result.

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(result);
          };
        }
      }]);

      return ToolService;
    }();

    ToolService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
      }];
    };

    ToolService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])], ToolService);
    /***/
  },

  /***/
  "./src/app/tool/shared/uptime.js":
  /*!***************************************!*\
    !*** ./src/app/tool/shared/uptime.js ***!
    \***************************************/

  /*! no static exports found */

  /***/
  function srcAppToolSharedUptimeJs(module, exports) {
    !function (t, e) {
      for (var n in e) {
        t[n] = e[n];
      }
    }(this, function (t) {
      var e = {};

      function n(r) {
        if (e[r]) return e[r].exports;
        var o = e[r] = {
          i: r,
          l: !1,
          exports: {}
        };
        return t[r].call(o.exports, o, o.exports, n), o.l = !0, o.exports;
      }

      return n.m = t, n.c = e, n.d = function (t, e, r) {
        n.o(t, e) || Object.defineProperty(t, e, {
          enumerable: !0,
          get: r
        });
      }, n.r = function (t) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
          value: "Module"
        }), Object.defineProperty(t, "__esModule", {
          value: !0
        });
      }, n.t = function (t, e) {
        if (1 & e && (t = n(t)), 8 & e) return t;
        if (4 & e && "object" == typeof t && t && t.__esModule) return t;
        var r = Object.create(null);
        if (n.r(r), Object.defineProperty(r, "default", {
          enumerable: !0,
          value: t
        }), 2 & e && "string" != typeof t) for (var o in t) {
          n.d(r, o, function (e) {
            return t[e];
          }.bind(null, o));
        }
        return r;
      }, n.n = function (t) {
        var e = t && t.__esModule ? function () {
          return t["default"];
        } : function () {
          return t;
        };
        return n.d(e, "a", e), e;
      }, n.o = function (t, e) {
        return Object.prototype.hasOwnProperty.call(t, e);
      }, n.p = "", n(n.s = 0);
    }([function (t, e, n) {
      "use strict";

      n.r(e), n.d(e, "loadChart", function () {
        return o;
      });
      n(1);

      function r(t, e, n, r, o, i) {
        var a = [],
            s = [],
            c = [];

        var _iterator3 = _createForOfIteratorHelper(t),
            _step3;

        try {
          for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
            var _e4 = _step3.value;

            var _t4 = _e4.date.split(".")[0].split("T")[0];

            var _n5 = void 0;

            _n5 = 408 == _e4.code || 404 == _e4.code || 301 == _e4.code || 302 == _e4.code || 502 == _e4.code ? 199 : 200 == _e4.code || 202 == _e4.code ? 200 : null == _e4.code ? 201 : _e4.code, a[a.length - 1] != _t4 && (a.push(_t4), s.push(_n5), c.push(_e4.access_time));
          }
        } catch (err) {
          _iterator3.e(err);
        } finally {
          _iterator3.f();
        }

        a.unshift("dates"), s.unshift("Status"), c.unshift("Access Time"), function (t, e, n, r, o, i, a, s) {
          var c = c3.generate({
            data: {
              x: "dates",
              columns: [e, n, t],
              types: {
                "Access Time": "area",
                Status: "bar"
              },
              axes: {
                "Access Time": "y",
                Status: "y2"
              },
              colors: {
                "Access Time": function AccessTime(t) {
                  return t.value >= 240 ? "#7C151D" : "#ff8214";
                },
                Status: function Status(t) {
                  return 200 == t.value ? "#8ab803" : 199 == t.value ? "#cd5741" : "#cccccc";
                },
                Online: "#8ab803",
                Offline: "#cd5741",
                "No information captured": "#cccccc"
              },
              order: !1
            },
            bar: {
              width: {
                ratio: 1
              }
            },
            size: {
              height: Number(a),
              width: Number(i)
            },
            title: {
              text: s
            },
            axis: {
              y2: {
                show: !1,
                tick: {
                  outer: !1,
                  format: function format(t) {
                    return t % 1 == 0 ? t : "";
                  }
                },
                max: 4e3,
                inverted: !1,
                padding: {
                  left: 0
                }
              },
              y: {
                show: !0,
                tick: {
                  outer: !1,
                  tooltip: !1
                },
                min: 0,
                label: {
                  text: "Access time in milliseconds",
                  position: "outer-center"
                },
                padding: {
                  bottom: 11
                }
              },
              x: {
                type: "category",
                tick: {
                  rotate: 90,
                  multiline: !1,
                  outer: !1
                },
                label: {
                  text: "Dates",
                  position: "outer-right"
                },
                padding: {
                  right: 2
                }
              }
            },
            subchart: {
              show: !1
            },
            padding: {
              top: 0
            },
            legend: {
              padding: 5,
              item: {
                tile: {
                  width: 15,
                  height: 2
                }
              },
              show: !1,
              position: "bottom"
            },
            bindto: "#" + r,
            tooltip: {
              contents: function contents(t, e, n, r) {
                var o,
                    i,
                    a,
                    s,
                    c,
                    l,
                    u = this,
                    f = u.config,
                    d = f.tooltip_format_title || e,
                    p = f.tooltip_format_name || function (t) {
                  return t;
                },
                    h = f.tooltip_format_value || n,
                    b = 0;

                for (i = 0; i < t.length; i++) {
                  b += t[i].value, t[i] && (t[i].value || 0 === t[i].value) && (o || (a = d ? d(t[i].x) : t[i].x, o = "<table class='" + u.CLASS.tooltip + "'>" + (a || 0 === a ? "<tr><th colspan='2'>" + a + "</th></tr>" : "")), c = p(t[i].name, t[i].ratio, t[i].id, t[i].index), s = h(t[i].value, t[i].ratio, t[i].id, t[i].index), l = "Access Time" == c ? t[i].value >= 160 ? "#7C151D" : "#ff8214" : 200 == t[i].value ? "#8ab803" : 199 == t[i].value ? "#cd5741" : "#cccccc", o += "<tr class='" + u.CLASS.tooltipName + "-" + t[i].id + "'>", o += "<td class='name'><span style='background-color:" + l + "'></span>" + c + "</td>", o += "Access Time" == c ? "<td class='value'>" + s + "ms </td>" : 200 == s ? "<td class='value'> Online </td>" : 199 == s ? "<td class='value'> Offline </td>" : 201 == s ? "<td class='value'> No information captured </td>" : "<td class='value'>" + s + "</td>", o += "</tr>");
                }

                return o + "</table>";
              }
            }
          });
          d3.select("#" + r).insert("div", ".chart").attr("class", "oeb-legend").insert("div", ".chart").attr("class", "legend-scale").insert("ul", ".chart").attr("class", "legend-labels").selectAll("span").data(["Online", "Offline", "No information captured", "Access Time"]).enter().append("li").html(function (t) {
            return t;
          }).append("span").attr("data-id", function (t) {
            return t;
          }).each(function (t) {
            d3.select(this).style("background-color", c.color(t));
          });
        }(a, s, c, e, 0, r, o, i);
      }

      function o(_x3) {
        return _o3.apply(this, arguments);
      }

      function _o3() {
        _o3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(t) {
          var e, _iterator4, _step4, _n6, _t5, _o4, a, s, c, l, u, f, d, p;

          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  void 0 === t && (t = document.getElementsByClassName("opebuptime"));
                  e = 0;
                  _iterator4 = _createForOfIteratorHelper(t);
                  _context2.prev = 3;

                  _iterator4.s();

                case 5:
                  if ((_step4 = _iterator4.n()).done) {
                    _context2.next = 39;
                    break;
                  }

                  _n6 = _step4.value;
                  _context2.prev = 7;
                  e++;
                  _t5 = _n6.getAttribute("data-id"), _o4 = _n6.getAttribute("data-url"), a = _n6.getAttribute("dev");
                  s = _n6.getAttribute("data-title");
                  s || (s = "");
                  c = _n6.getAttribute("data-xaxis");
                  c || (c = "false");
                  l = _n6.getAttribute("data-w");
                  (l < 200 || 0 == l || !l) && (l = null);
                  u = _n6.getAttribute("data-h");
                  (u < 200 || 0 == u || !u) && (u = null);
                  f = _n6.getAttribute("data-limit");
                  (!f || f < 5) && (f = 5);
                  d = document.createElement("div"), p = _t5 + e;
                  d.id = p;

                  _n6.appendChild(d);

                  _context2.t0 = r;
                  _context2.next = 26;
                  return i(_o4, f, a);

                case 26:
                  _context2.t1 = _context2.sent;
                  _context2.t2 = p;
                  _context2.t3 = l;
                  _context2.t4 = u;
                  _context2.t5 = s;
                  (0, _context2.t0)(_context2.t1, _context2.t2, 0, _context2.t3, _context2.t4, _context2.t5);
                  _context2.next = 37;
                  break;

                case 34:
                  _context2.prev = 34;
                  _context2.t6 = _context2["catch"](7);
                  console.log("Internat error :" + _context2.t6);

                case 37:
                  _context2.next = 5;
                  break;

                case 39:
                  _context2.next = 44;
                  break;

                case 41:
                  _context2.prev = 41;
                  _context2.t7 = _context2["catch"](3);

                  _iterator4.e(_context2.t7);

                case 44:
                  _context2.prev = 44;

                  _iterator4.f();

                  return _context2.finish(44);

                case 47:
                case "end":
                  return _context2.stop();
              }
            }
          }, _callee2, null, [[3, 41, 44, 47], [7, 34]]);
        }));
        return _o3.apply(this, arguments);
      }

      function i(_x4, _x5, _x6) {
        return _i5.apply(this, arguments);
      }

      function _i5() {
        _i5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(t, e, n) {
          var _i6, r, o, a;

          return regeneratorRuntime.wrap(function _callee3$(_context3) {
            while (1) {
              switch (_context3.prev = _context3.next) {
                case 0:
                  _context3.prev = 0;
                  _i6 = null != n ? "dev-openebench" : "openebench";
                  r = Math.floor(new Date().getTime() / 1e3), o = r - 86400 * e;
                  _context3.next = 5;
                  return fetch("https://" + _i6 + ".bsc.es/monitor/rest/homepage/" + t + "?date1=" + o + "&date2=" + r);

                case 5:
                  a = _context3.sent;
                  _context3.next = 8;
                  return a.json();

                case 8:
                  return _context3.abrupt("return", _context3.sent);

                case 11:
                  _context3.prev = 11;
                  _context3.t0 = _context3["catch"](0);
                  console.log("Invalid Url Error: ".concat(_context3.t0.stack, " "));

                case 14:
                case "end":
                  return _context3.stop();
              }
            }
          }, _callee3, null, [[0, 11]]);
        }));
        return _i5.apply(this, arguments);
      }

      o();
    }, function (t, e, n) {
      var r = n(2);
      "string" == typeof r && (r = [[t.i, r, ""]]);
      var o = {
        hmr: !0,
        transform: void 0,
        insertInto: void 0
      };
      n(4)(r, o);
      r.locals && (t.exports = r.locals);
    }, function (t, e, n) {
      (t.exports = n(3)(!1)).push([t.i, ".c3-area{opacity:.1}.oeb-legend .legend-scale ul li{float:left;text-align:left;margin-right:10px;font-size:80%;list-style:none}.oeb-legend ul.legend-labels{margin:0}.oeb-legend ul.legend-labels li span{float:left;height:12px;width:12px;margin-top:4px;margin-right:4px}.oeb-legend .legend-source{color:#999;clear:both}.oeb-legend a{color:#777}", ""]);
    }, function (t, e) {
      t.exports = function (t) {
        var e = [];
        return e.toString = function () {
          return this.map(function (e) {
            var n = function (t, e) {
              var n = t[1] || "",
                  r = t[3];
              if (!r) return n;

              if (e && "function" == typeof btoa) {
                var o = (a = r, "/*# sourceMappingURL=data:application/json;charset=utf-8;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(a)))) + " */"),
                    i = r.sources.map(function (t) {
                  return "/*# sourceURL=" + r.sourceRoot + t + " */";
                });
                return [n].concat(i).concat([o]).join("\n");
              }

              var a;
              return [n].join("\n");
            }(e, t);

            return e[2] ? "@media " + e[2] + "{" + n + "}" : n;
          }).join("");
        }, e.i = function (t, n) {
          "string" == typeof t && (t = [[null, t, ""]]);

          for (var r = {}, o = 0; o < this.length; o++) {
            var i = this[o][0];
            "number" == typeof i && (r[i] = !0);
          }

          for (o = 0; o < t.length; o++) {
            var a = t[o];
            "number" == typeof a[0] && r[a[0]] || (n && !a[2] ? a[2] = n : n && (a[2] = "(" + a[2] + ") and (" + n + ")"), e.push(a));
          }
        }, e;
      };
    }, function (t, e, n) {
      var r,
          o,
          i = {},
          a = (r = function r() {
        return window && document && document.all && !window.atob;
      }, function () {
        return void 0 === o && (o = r.apply(this, arguments)), o;
      }),
          s = function (t) {
        var e = {};
        return function (t) {
          if ("function" == typeof t) return t();

          if (void 0 === e[t]) {
            var n = function (t) {
              return document.querySelector(t);
            }.call(this, t);

            if (window.HTMLIFrameElement && n instanceof window.HTMLIFrameElement) try {
              n = n.contentDocument.head;
            } catch (t) {
              n = null;
            }
            e[t] = n;
          }

          return e[t];
        };
      }(),
          c = null,
          l = 0,
          u = [],
          f = n(5);

      function d(t, e) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n],
              o = i[r.id];

          if (o) {
            o.refs++;

            for (var a = 0; a < o.parts.length; a++) {
              o.parts[a](r.parts[a]);
            }

            for (; a < r.parts.length; a++) {
              o.parts.push(g(r.parts[a], e));
            }
          } else {
            var s = [];

            for (a = 0; a < r.parts.length; a++) {
              s.push(g(r.parts[a], e));
            }

            i[r.id] = {
              id: r.id,
              refs: 1,
              parts: s
            };
          }
        }
      }

      function p(t, e) {
        for (var n = [], r = {}, o = 0; o < t.length; o++) {
          var i = t[o],
              a = e.base ? i[0] + e.base : i[0],
              s = {
            css: i[1],
            media: i[2],
            sourceMap: i[3]
          };
          r[a] ? r[a].parts.push(s) : n.push(r[a] = {
            id: a,
            parts: [s]
          });
        }

        return n;
      }

      function h(t, e) {
        var n = s(t.insertInto);
        if (!n) throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
        var r = u[u.length - 1];
        if ("top" === t.insertAt) r ? r.nextSibling ? n.insertBefore(e, r.nextSibling) : n.appendChild(e) : n.insertBefore(e, n.firstChild), u.push(e);else if ("bottom" === t.insertAt) n.appendChild(e);else {
          if ("object" != typeof t.insertAt || !t.insertAt.before) throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
          var o = s(t.insertInto + " " + t.insertAt.before);
          n.insertBefore(e, o);
        }
      }

      function b(t) {
        if (null === t.parentNode) return !1;
        t.parentNode.removeChild(t);
        var e = u.indexOf(t);
        e >= 0 && u.splice(e, 1);
      }

      function m(t) {
        var e = document.createElement("style");
        return t.attrs.type = "text/css", v(e, t.attrs), h(t, e), e;
      }

      function v(t, e) {
        Object.keys(e).forEach(function (n) {
          t.setAttribute(n, e[n]);
        });
      }

      function g(t, e) {
        var n, r, o, i;

        if (e.transform && t.css) {
          if (!(i = e.transform(t.css))) return function () {};
          t.css = i;
        }

        if (e.singleton) {
          var a = l++;
          n = c || (c = m(e)), r = w.bind(null, n, a, !1), o = w.bind(null, n, a, !0);
        } else t.sourceMap && "function" == typeof URL && "function" == typeof URL.createObjectURL && "function" == typeof URL.revokeObjectURL && "function" == typeof Blob && "function" == typeof btoa ? (n = function (t) {
          var e = document.createElement("link");
          return t.attrs.type = "text/css", t.attrs.rel = "stylesheet", v(e, t.attrs), h(t, e), e;
        }(e), r = function (t, e, n) {
          var r = n.css,
              o = n.sourceMap,
              i = void 0 === e.convertToAbsoluteUrls && o;
          (e.convertToAbsoluteUrls || i) && (r = f(r));
          o && (r += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(o)))) + " */");
          var a = new Blob([r], {
            type: "text/css"
          }),
              s = t.href;
          t.href = URL.createObjectURL(a), s && URL.revokeObjectURL(s);
        }.bind(null, n, e), o = function o() {
          b(n), n.href && URL.revokeObjectURL(n.href);
        }) : (n = m(e), r = function (t, e) {
          var n = e.css,
              r = e.media;
          r && t.setAttribute("media", r);
          if (t.styleSheet) t.styleSheet.cssText = n;else {
            for (; t.firstChild;) {
              t.removeChild(t.firstChild);
            }

            t.appendChild(document.createTextNode(n));
          }
        }.bind(null, n), o = function o() {
          b(n);
        });

        return r(t), function (e) {
          if (e) {
            if (e.css === t.css && e.media === t.media && e.sourceMap === t.sourceMap) return;
            r(t = e);
          } else o();
        };
      }

      t.exports = function (t, e) {
        if ("undefined" != typeof DEBUG && DEBUG && "object" != typeof document) throw new Error("The style-loader cannot be used in a non-browser environment");
        (e = e || {}).attrs = "object" == typeof e.attrs ? e.attrs : {}, e.singleton || "boolean" == typeof e.singleton || (e.singleton = a()), e.insertInto || (e.insertInto = "head"), e.insertAt || (e.insertAt = "bottom");
        var n = p(t, e);
        return d(n, e), function (t) {
          for (var r = [], o = 0; o < n.length; o++) {
            var a = n[o];
            (s = i[a.id]).refs--, r.push(s);
          }

          t && d(p(t, e), e);

          for (o = 0; o < r.length; o++) {
            var s;

            if (0 === (s = r[o]).refs) {
              for (var c = 0; c < s.parts.length; c++) {
                s.parts[c]();
              }

              delete i[s.id];
            }
          }
        };
      };

      var y,
          x = (y = [], function (t, e) {
        return y[t] = e, y.filter(Boolean).join("\n");
      });

      function w(t, e, n, r) {
        var o = n ? "" : r.css;
        if (t.styleSheet) t.styleSheet.cssText = x(e, o);else {
          var i = document.createTextNode(o),
              a = t.childNodes;
          a[e] && t.removeChild(a[e]), a.length ? t.insertBefore(i, a[e]) : t.appendChild(i);
        }
      }
    }, function (t, e) {
      t.exports = function (t) {
        var e = "undefined" != typeof window && window.location;
        if (!e) throw new Error("fixUrls requires window.location");
        if (!t || "string" != typeof t) return t;
        var n = e.protocol + "//" + e.host,
            r = n + e.pathname.replace(/\/[^\/]*$/, "/");
        return t.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function (t, e) {
          var o,
              i = e.trim().replace(/^"(.*)"$/, function (t, e) {
            return e;
          }).replace(/^'(.*)'$/, function (t, e) {
            return e;
          });
          return /^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(i) ? t : (o = 0 === i.indexOf("//") ? i : 0 === i.indexOf("/") ? n + i : r + i.replace(/^\.\//, ""), "url(" + JSON.stringify(o) + ")");
        });
      };
    }]));
    /***/
  },

  /***/
  "./src/app/tool/tool-detail/tool-detail.component.css":
  /*!************************************************************!*\
    !*** ./src/app/tool/tool-detail/tool-detail.component.css ***!
    \************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppToolToolDetailToolDetailComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Rvb2wvdG9vbC1kZXRhaWwvdG9vbC1kZXRhaWwuY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/tool/tool-detail/tool-detail.component.ts":
  /*!***********************************************************!*\
    !*** ./src/app/tool/tool-detail/tool-detail.component.ts ***!
    \***********************************************************/

  /*! exports provided: ToolDetailComponent */

  /***/
  function srcAppToolToolDetailToolDetailComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ToolDetailComponent", function () {
      return ToolDetailComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _shared_tool_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../shared/tool.service */
    "./src/app/tool/shared/tool.service.ts");
    /* harmony import */


    var _shared_uptime_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../shared/uptime.js */
    "./src/app/tool/shared/uptime.js");
    /* harmony import */


    var _shared_uptime_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_shared_uptime_js__WEBPACK_IMPORTED_MODULE_4__);
    /* harmony import */


    var _shared_citation_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../shared/citation.js */
    "./src/app/tool/shared/citation.js");
    /* harmony import */


    var _shared_citation_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_shared_citation_js__WEBPACK_IMPORTED_MODULE_5__);
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/esm2015/dialog.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /**
     * Component for tool details
     */


    var ToolDetailComponent = /*#__PURE__*/function () {
      function ToolDetailComponent(toolService, route, router, dialog, titleService) {
        _classCallCheck(this, ToolDetailComponent);

        this.toolService = toolService;
        this.route = route;
        this.router = router;
        this.dialog = dialog;
        this.titleService = titleService;
        this.tableOfContent = ["Metrics", "Uptime", "Publication"];
        this.cdr = ["ensembl", "ensembl_genomes", "europe_pmc", "proteinatlas", "intact", "mint", "interpro", "orphadata", "pdbe", "pride", "silva", "string"];
        /**
         *  panelOpenState
         */

        this.panelOpenState = true;
        /**
         *  sources
         */

        this.sources = [];
      }
      /**
       * Initializer
       */


      _createClass(ToolDetailComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.id = this.getParam("id");
          this.titleService.setTitle(this.id);
          this.getToolById();
        }
        /**
         * Get param from url
         */

      }, {
        key: "getParam",
        value: function getParam(param) {
          return this.route.snapshot.paramMap.get(param);
        }
        /**
         * Find tool by id
         */

      }, {
        key: "getToolById",
        value: function getToolById() {
          var _this = this;

          this.toolService.getToolById(this.id).subscribe(function (tools) {
            _this.tools = tools;

            if (_this.tools.length !== 0) {
              _this.getSources(_this.tools);

              _this.selectInitialValue(1);
            }
          });
        }
        /**
         * Source of info (Bio.tools, Galaxy, Biocontainers etc .... )
         */

      }, {
        key: "getSources",
        value: function getSources(tools) {
          var _this2 = this;

          var i = 0;
          tools.forEach(function (tool) {
            tool.entities.forEach(function (entity) {
              entity.tools.forEach(function (element) {
                var str = element["@id"];
                var s = str.split("/tool/")[1].split(":")[0];

                if (i > 0) {
                  if (!_this2.sources.includes(s)) {
                    _this2.sources.push(s);
                  }
                }

                i++;
              });
            });
          });
        }
        /**
         * Helper function for getSource
         */

      }, {
        key: "sourceHref",
        value: function sourceHref(source, tool) {
          switch (source) {
            case "biotools":
              window.open("https://bio.tools/" + tool, "_blank");
              break;

            case "bioconda":
              window.open("https://anaconda.org/bioconda/" + tool, "_blank");
              break;

            case "galaxy":
            default:
              break;
          }
        }
        /**
         * metrics that loads the graphs
         */

      }, {
        key: "getMetrics",
        value: function getMetrics() {
          var _this3 = this;

          this.selectedValue["metrics"] = this.selectedValue["@id"].replace("/tool/", "/metrics/");
          this.toolService.getToolMetricsById(this.selectedValue.metrics).subscribe(function (res) {
            _this3.metrics = res;
          });
          setTimeout(function () {
            _this3.loadCharts();
          }, 1000);
        }
        /**
         * helper function for loading the charts
         */

      }, {
        key: "loadCharts",
        value: function loadCharts() {
          _shared_citation_js__WEBPACK_IMPORTED_MODULE_5___default.a.loadCitationChart();

          _shared_uptime_js__WEBPACK_IMPORTED_MODULE_4___default.a.loadChart();
        }
        /**
         * setting whcih version of tool to be shown first
         */

      }, {
        key: "selectInitialValue",
        value: function selectInitialValue(i) {
          this.selectedValue = this.tools[0].entities[i].tools[0];
          this.getMetrics();
        }
        /**
         * Managing the tab change
         */

      }, {
        key: "onTabChange",
        value: function onTabChange(e) {
          this.selectInitialValue(e.index + 1);
        }
        /**
         * Managing the versoions
         */

      }, {
        key: "onVersionChange",
        value: function onVersionChange(e) {
          this.metrics = null;
          this.getMetrics();
        }
      }]);

      return ToolDetailComponent;
    }();

    ToolDetailComponent.ctorParameters = function () {
      return [{
        type: _shared_tool_service__WEBPACK_IMPORTED_MODULE_3__["ToolService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"]
      }, {
        type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["Title"]
      }];
    };

    ToolDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-tool-detail",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./tool-detail.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/tool/tool-detail/tool-detail.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./tool-detail.component.css */
      "./src/app/tool/tool-detail/tool-detail.component.css"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_tool_service__WEBPACK_IMPORTED_MODULE_3__["ToolService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["Title"]])], ToolDetailComponent);
    /***/
  },

  /***/
  "./src/app/tool/tool-routing.module.ts":
  /*!*********************************************!*\
    !*** ./src/app/tool/tool-routing.module.ts ***!
    \*********************************************/

  /*! exports provided: ToolRoutingModule, AllToolRoutingComponents */

  /***/
  function srcAppToolToolRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ToolRoutingModule", function () {
      return ToolRoutingModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AllToolRoutingComponents", function () {
      return AllToolRoutingComponents;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _tool_table_tool_table_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./tool-table/tool-table.component */
    "./src/app/tool/tool-table/tool-table.component.ts");
    /* harmony import */


    var _tool_detail_tool_detail_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./tool-detail/tool-detail.component */
    "./src/app/tool/tool-detail/tool-detail.component.ts");

    var routes = [{
      path: "",
      children: [{
        path: "",
        component: _tool_table_tool_table_component__WEBPACK_IMPORTED_MODULE_3__["ToolTableComponent"]
      }, {
        path: ":id",
        component: _tool_detail_tool_detail_component__WEBPACK_IMPORTED_MODULE_4__["ToolDetailComponent"]
      }]
    }];

    var ToolRoutingModule =
    /**
     * Export Routing Module
     */
    function ToolRoutingModule() {
      _classCallCheck(this, ToolRoutingModule);
    };

    ToolRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      /**
       * Import RouterModule
       * This is a child module so we use forChild
       */
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],

      /**
       * Export RoutingModule
       */
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
    /**
     * Export Routing Module
     */
    ], ToolRoutingModule);
    /**
     * Export routing components
     */

    var AllToolRoutingComponents = [_tool_table_tool_table_component__WEBPACK_IMPORTED_MODULE_3__["ToolTableComponent"], _tool_detail_tool_detail_component__WEBPACK_IMPORTED_MODULE_4__["ToolDetailComponent"]];
    /***/
  },

  /***/
  "./src/app/tool/tool-table/tool-table.component.css":
  /*!**********************************************************!*\
    !*** ./src/app/tool/tool-table/tool-table.component.css ***!
    \**********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppToolToolTableToolTableComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".sidenav {\n    padding: 0 2em 2em 2em;\n}\n\n.table-content {\n    min-height: 55vh\n}\n\n.table-desc {\n    text-align: justify;\n}\n\n.table-fields {\n    padding: 1rem!important;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdG9vbC90b29sLXRhYmxlL3Rvb2wtdGFibGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJO0FBQ0o7O0FBRUE7SUFDSSxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSx1QkFBdUI7QUFDM0IiLCJmaWxlIjoic3JjL2FwcC90b29sL3Rvb2wtdGFibGUvdG9vbC10YWJsZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNpZGVuYXYge1xuICAgIHBhZGRpbmc6IDAgMmVtIDJlbSAyZW07XG59XG5cbi50YWJsZS1jb250ZW50IHtcbiAgICBtaW4taGVpZ2h0OiA1NXZoXG59XG5cbi50YWJsZS1kZXNjIHtcbiAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xufVxuXG4udGFibGUtZmllbGRzIHtcbiAgICBwYWRkaW5nOiAxcmVtIWltcG9ydGFudDtcbn1cbiJdfQ== */";
    /***/
  },

  /***/
  "./src/app/tool/tool-table/tool-table.component.ts":
  /*!*********************************************************!*\
    !*** ./src/app/tool/tool-table/tool-table.component.ts ***!
    \*********************************************************/

  /*! exports provided: ToolTableComponent */

  /***/
  function srcAppToolToolTableToolTableComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ToolTableComponent", function () {
      return ToolTableComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/paginator */
    "./node_modules/@angular/material/esm2015/paginator.js");
    /* harmony import */


    var _shared_tool_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../shared/tool.service */
    "./src/app/tool/shared/tool.service.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js"); // import { Stats } from '../../shared/stats';

    /**
     * Component to list the tools
     */


    var ToolTableComponent =
    /*#__PURE__*/

    /**
     * Class ToolTable Component
     */
    function () {
      function ToolTableComponent(toolService, route, router, fb, titleService) {
        _classCallCheck(this, ToolTableComponent);

        this.toolService = toolService;
        this.route = route;
        this.router = router;
        this.titleService = titleService;
        this.cdr = ["ensembl", "ensembl_genomes", "europe_pmc", "proteinatlas", "intact", "mint", "interpro", "orphadata", "pdbe", "pride", "silva", "string"];
        /**
         * Construtor for the tool table;
         */

        this.pageTitle = "Technical monitoring";
        this.optionss = fb.group({
          bottom: 0,
          fixed: false,
          top: 100
        });
      }
      /**
       * On init method checks for search param in the url or filters applied
       */


      _createClass(ToolTableComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.titleService.setTitle(this.pageTitle);
          this.filterValue = this.getQueryParam("search");
          this.filter = {
            text: this.getQueryParam("search") != null ? this.getQueryParam("search") : "",
            filter: this.getQueryParam("filter") != null ? this.getQueryParam("filter") : "",
            type: this.getQueryParam("type") != null ? this.getQueryParam("type") : "",
            label: this.getQueryParam("label") != null ? this.getQueryParam("label") : ""
          };
          this.skip = 0;
          this.limit = 10;
          this.initializeForm();
        }
        /**
         * Helper method to get the query param
         */

      }, {
        key: "getQueryParam",
        value: function getQueryParam(param) {
          return this.route.snapshot.queryParamMap.get(param);
        }
        /**
         * Gets the tools
         */

      }, {
        key: "getTools",
        value: function getTools() {
          var _this4 = this;

          this.toolService.getToolWithFilters(this.filter, this.skip, this.limit).subscribe(function (res) {
            _this4.tools = res.body;
          });
        }
        /**
         * Initialize search from
         */

      }, {
        key: "initializeForm",
        value: function initializeForm() {
          this.options = ["Name", "Name & Description", "Description"];
          this.search = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"](this.filter = {
            text: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](this.filterValue),
            filter: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](this.options[0]),
            type: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](),
            label: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](this.edamFilterValue)
          });
          this.submitForm();
        }
        /**
         * Submit search form
         */

      }, {
        key: "submitForm",
        value: function submitForm() {
          this.filter = {
            text: this.search.value.text == null ? "" : this.search.value.text,
            filter: this.search.value.filter,
            type: this.search.value.type,
            label: this.search.value.label
          };
          this.router.navigate([], {
            queryParams: {
              search: this.filter.text
            },
            queryParamsHandling: "merge"
          });

          if (this.paginator) {
            this.paginator.firstPage();
          }

          this.getTools();
        }
        /**
         * Url Metrics for tools
         */

      }, {
        key: "getMetricsForTool",
        value: function getMetricsForTool(id) {}
      }, {
        key: "onActivate",
        value: function onActivate($event) {
          console.log($event);
        }
      }, {
        key: "onDeactivate",
        value: function onDeactivate($event) {
          console.log($event);
        }
      }]);

      return ToolTableComponent;
    }();

    ToolTableComponent.ctorParameters = function () {
      return [{
        type: _shared_tool_service__WEBPACK_IMPORTED_MODULE_3__["ToolService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]
      }, {
        type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["Title"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"], {
      "static": true
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"])], ToolTableComponent.prototype, "paginator", void 0);
    ToolTableComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-tool-table",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./tool-table.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/tool/tool-table/tool-table.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./tool-table.component.css */
      "./src/app/tool/tool-table/tool-table.component.css"))["default"]]
    })
    /**
     * Class ToolTable Component
     */
    , tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_tool_service__WEBPACK_IMPORTED_MODULE_3__["ToolService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["Title"]])], ToolTableComponent);
    /***/
  },

  /***/
  "./src/app/tool/tool.component.css":
  /*!*****************************************!*\
    !*** ./src/app/tool/tool.component.css ***!
    \*****************************************/

  /*! exports provided: default */

  /***/
  function srcAppToolToolComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Rvb2wvdG9vbC5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/tool/tool.component.ts":
  /*!****************************************!*\
    !*** ./src/app/tool/tool.component.ts ***!
    \****************************************/

  /*! exports provided: ToolComponent */

  /***/
  function srcAppToolToolComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ToolComponent", function () {
      return ToolComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /**
     * Wrapper component for tool componentes
     */


    var ToolComponent =
    /*#__PURE__*/

    /**
     * Class tool component
     */
    function () {
      /**
       * Constructor for wrapper
       */
      function ToolComponent() {
        _classCallCheck(this, ToolComponent);
      }
      /**
       * On init function
       */


      _createClass(ToolComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ToolComponent;
    }();

    ToolComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-tool",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./tool.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/tool/tool.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./tool.component.css */
      "./src/app/tool/tool.component.css"))["default"]]
    })
    /**
     * Class tool component
     */
    , tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], ToolComponent);
    /***/
  },

  /***/
  "./src/app/tool/tool.module.ts":
  /*!*************************************!*\
    !*** ./src/app/tool/tool.module.ts ***!
    \*************************************/

  /*! exports provided: ToolModule */

  /***/
  function srcAppToolToolModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ToolModule", function () {
      return ToolModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _tool_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./tool-routing.module */
    "./src/app/tool/tool-routing.module.ts");
    /* harmony import */


    var _material_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../material.module */
    "./src/app/material.module.ts");
    /* harmony import */


    var _tool_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./tool.component */
    "./src/app/tool/tool.component.ts");
    /* harmony import */


    var _shared_tool_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./shared/tool.service */
    "./src/app/tool/shared/tool.service.ts");
    /* harmony import */


    var _shared_pipes_key_value_pipe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./shared/pipes/key-value.pipe */
    "./src/app/tool/shared/pipes/key-value.pipe.ts");
    /* harmony import */


    var _shared_pipes_chart_id_pipe__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./shared/pipes/chart-id.pipe */
    "./src/app/tool/shared/pipes/chart-id.pipe.ts");
    /* harmony import */


    var _shared_pipes_source_badge_class_pipe__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./shared/pipes/source-badge-class.pipe */
    "./src/app/tool/shared/pipes/source-badge-class.pipe.ts");
    /* harmony import */


    var _content_table_content_table_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ../content-table/content-table.module */
    "./src/app/content-table/content-table.module.ts");
    /* harmony import */


    var _uptime_uptime_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ../uptime/uptime.component */
    "./src/app/uptime/uptime.component.ts"); // import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


    var ToolModule = function ToolModule() {
      _classCallCheck(this, ToolModule);
    };

    ToolModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_tool_component__WEBPACK_IMPORTED_MODULE_7__["ToolComponent"], _tool_routing_module__WEBPACK_IMPORTED_MODULE_5__["AllToolRoutingComponents"], _shared_pipes_key_value_pipe__WEBPACK_IMPORTED_MODULE_9__["KeyValuePipe"], _shared_pipes_chart_id_pipe__WEBPACK_IMPORTED_MODULE_10__["ChartIdPipe"], _shared_pipes_source_badge_class_pipe__WEBPACK_IMPORTED_MODULE_11__["SourceBadgeClassPipe"], _uptime_uptime_component__WEBPACK_IMPORTED_MODULE_13__["UptimeComponent"]],
      imports: [_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _tool_routing_module__WEBPACK_IMPORTED_MODULE_5__["ToolRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], // BrowserAnimationsModule,
      _material_module__WEBPACK_IMPORTED_MODULE_6__["MaterialModule"], _content_table_content_table_module__WEBPACK_IMPORTED_MODULE_12__["ContentTableModule"]],
      providers: [_shared_tool_service__WEBPACK_IMPORTED_MODULE_8__["ToolService"]],
      bootstrap: [_tool_component__WEBPACK_IMPORTED_MODULE_7__["ToolComponent"]],
      exports: []
    })], ToolModule);
    /***/
  },

  /***/
  "./src/app/uptime/uptime.component.css":
  /*!*********************************************!*\
    !*** ./src/app/uptime/uptime.component.css ***!
    \*********************************************/

  /*! exports provided: default */

  /***/
  function srcAppUptimeUptimeComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VwdGltZS91cHRpbWUuY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/uptime/uptime.component.ts":
  /*!********************************************!*\
    !*** ./src/app/uptime/uptime.component.ts ***!
    \********************************************/

  /*! exports provided: UptimeComponent */

  /***/
  function srcAppUptimeUptimeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UptimeComponent", function () {
      return UptimeComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var UptimeComponent = /*#__PURE__*/function () {
      function UptimeComponent() {
        _classCallCheck(this, UptimeComponent);
      }

      _createClass(UptimeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return UptimeComponent;
    }();

    UptimeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-uptime',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./uptime.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/uptime/uptime.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./uptime.component.css */
      "./src/app/uptime/uptime.component.css"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], UptimeComponent);
    /***/
  }
}]);
//# sourceMappingURL=tool-tool-module-es5.js.map