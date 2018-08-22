(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _system_customers_customers_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./system/customers/customers.component */ "./src/app/system/customers/customers.component.ts");
/* harmony import */ var _auth_login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth/login/login.component */ "./src/app/auth/login/login.component.ts");
/* harmony import */ var _system_add_customer_add_customer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./system/add-customer/add-customer.component */ "./src/app/system/add-customer/add-customer.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    { path: 'customers', component: _system_customers_customers_component__WEBPACK_IMPORTED_MODULE_2__["CustomersComponent"] },
    { path: 'customers/add', component: _system_add_customer_add_customer_component__WEBPACK_IMPORTED_MODULE_4__["AddCustomerComponent"] },
    { path: '', component: _auth_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] },
];
// const routes: Routes = [
//   {path: '', redirectTo: 'login', pathMatch: 'full'}
// ];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <title>Bootstrap Example</title>\n  <meta charset=\"utf-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n  <link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css\">\n</head>\n<body>\n\n<nav class=\"navbar navbar-default\">\n  <div class=\"container-fluid\">\n    <div class=\"navbar-header\">\n      <a class=\"navbar-brand\" routerLink=\"/\">Akinator</a>\n    </div>\n    <ul class=\"nav navbar-nav\">\n      <li routerLinkActive=\"active\"><a routerLink=\"/customers\">Customers</a></li>\n      <li routerLinkActive=\"active\"><a routerLink=\"/items\">Items</a></li>\n      <li routerLinkActive=\"active\"><a routerLink=\"/systems\">Systems</a></li>\n    </ul>\n    <ul class=\"nav navbar-nav navbar-right\">\n      <li\n        routerLinkActive=\"active\"\n        [routerLinkActiveOptions]=\"{exact:true}\"\n      >\n        <a routerLink=\"/\"><span class=\"glyphicon glyphicon-log-in\"></span> Login</a></li>\n    </ul>\n  </div>\n</nav>\n<div class=\"row\">\n  <div class=\"col-xs-5 col-xs-offset-1\">\n    <router-outlet></router-outlet>\n  </div>\n</div>\n</body>\n</html>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.word = 'How are you';
        console.log('constructor');
    }
    AppComponent.prototype.ngOnInit = function () {
        console.log('ngoninit_appComponent');
    };
    AppComponent.prototype.ngOnChanges = function (changes) {
        console.log('Change_appcomp');
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'wfm-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _system_customers_customers_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./system/customers/customers.component */ "./src/app/system/customers/customers.component.ts");
/* harmony import */ var _system_customer_customer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./system/customer/customer.component */ "./src/app/system/customer/customer.component.ts");
/* harmony import */ var _system_add_customer_add_customer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./system/add-customer/add-customer.component */ "./src/app/system/add-customer/add-customer.component.ts");
/* harmony import */ var _auth_login_login_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./auth/login/login.component */ "./src/app/auth/login/login.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _system_customers_customers_filter_pipe__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./system/customers/customers-filter.pipe */ "./src/app/system/customers/customers-filter.pipe.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _system_customers_customers_component__WEBPACK_IMPORTED_MODULE_5__["CustomersComponent"],
                _system_customer_customer_component__WEBPACK_IMPORTED_MODULE_6__["CustomerComponent"],
                _system_add_customer_add_customer_component__WEBPACK_IMPORTED_MODULE_7__["AddCustomerComponent"],
                _auth_login_login_component__WEBPACK_IMPORTED_MODULE_8__["LoginComponent"],
                _system_customers_customers_filter_pipe__WEBPACK_IMPORTED_MODULE_11__["CustomersFilterPipe"]
                // AuthComponent
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_9__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"]
                // SystemModule
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/auth/login/login.component.html":
/*!*************************************************!*\
  !*** ./src/app/auth/login/login.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p class=\"text-xs-center\"></p>\n<form>\n  <div class=\"form-group\">\n    <label for=\"email\">Email</label>\n    <input\n      type=\"text\"\n      class=\"form-control underlined\"\n      id=\"email\"\n      placeholder=\"Enter your email\"\n    >\n  </div>\n  <div class=\"form-group\">\n    <label for=\"password\">Password</label>\n    <input\n      type=\"password\"\n      class=\"form-control underlined\"\n      id=\"password\"\n      placeholder=\"Password\"\n    >\n  </div>\n  <div class=\"form-group\">\n    <button type=\"submit\" class=\"btn btn-block btn-primary\">Enter</button>\n  </div>\n\n</form>\n"

/***/ }),

/***/ "./src/app/auth/login/login.component.scss":
/*!*************************************************!*\
  !*** ./src/app/auth/login/login.component.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/auth/login/login.component.ts":
/*!***********************************************!*\
  !*** ./src/app/auth/login/login.component.ts ***!
  \***********************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var LoginComponent = /** @class */ (function () {
    function LoginComponent() {
    }
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'wfm-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/auth/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.scss */ "./src/app/auth/login/login.component.scss")]
        })
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/system/add-customer/add-customer.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/system/add-customer/add-customer.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "Name <input type=\"text\" class=\"form-control\" [(ngModel)]=\"name\">\nInn<input type=\"text\" class=\"form-control\" [(ngModel)]=\"inn\">\n<hr>\n<button class=\"btn btn-primary\" (click)=\"createCustomer()\">Create customer</button>\n<button class=\"btn btn-primary\" (click)=\"returnToCustomers()\">Back</button>\n\n"

/***/ }),

/***/ "./src/app/system/add-customer/add-customer.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/system/add-customer/add-customer.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/system/add-customer/add-customer.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/system/add-customer/add-customer.component.ts ***!
  \***************************************************************/
/*! exports provided: AddCustomerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddCustomerComponent", function() { return AddCustomerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
///<reference path="../../../../node_modules/@angular/core/src/metadata/directives.d.ts"/>
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AddCustomerComponent = /** @class */ (function () {
    function AddCustomerComponent(router) {
        this.router = router;
        this.customerEmitter = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    AddCustomerComponent.prototype.ngOnInit = function () {
    };
    AddCustomerComponent.prototype.createCustomer = function () {
        this.customerEmitter.emit({
            name: this.name,
            inn: this.inn
        });
        this.router.navigate(['customers']);
    };
    AddCustomerComponent.prototype.returnToCustomers = function () {
        this.router.navigate(['customers']);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])('onAddCustomer'),
        __metadata("design:type", Object)
    ], AddCustomerComponent.prototype, "customerEmitter", void 0);
    AddCustomerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'wfm-add-customer',
            template: __webpack_require__(/*! ./add-customer.component.html */ "./src/app/system/add-customer/add-customer.component.html"),
            styles: [__webpack_require__(/*! ./add-customer.component.scss */ "./src/app/system/add-customer/add-customer.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AddCustomerComponent);
    return AddCustomerComponent;
}());



/***/ }),

/***/ "./src/app/system/customer/customer.component.html":
/*!*********************************************************!*\
  !*** ./src/app/system/customer/customer.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>Customer: {{customer.name}} inn: {{customer.inn}}  </p>\n\n\n"

/***/ }),

/***/ "./src/app/system/customer/customer.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/system/customer/customer.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/system/customer/customer.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/system/customer/customer.component.ts ***!
  \*******************************************************/
/*! exports provided: CustomerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerComponent", function() { return CustomerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
///<reference path="../../../../node_modules/@angular/core/src/metadata/directives.d.ts"/>


var CustomerComponent = /** @class */ (function () {
    function CustomerComponent(router) {
        this.router = router;
    }
    CustomerComponent.prototype.ngOnInit = function () {
        console.log('ngOnInit_customer');
    };
    CustomerComponent.prototype.ngOnChanges = function (changes) {
        console.log('changes_customer');
    };
    CustomerComponent.prototype.openCustomer = function () {
        //this.router.navigateByUrl("/");
        this.customer = {};
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('client'),
        __metadata("design:type", Object)
    ], CustomerComponent.prototype, "customer", void 0);
    CustomerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'wfm-customer',
            template: __webpack_require__(/*! ./customer.component.html */ "./src/app/system/customer/customer.component.html"),
            styles: [__webpack_require__(/*! ./customer.component.scss */ "./src/app/system/customer/customer.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], CustomerComponent);
    return CustomerComponent;
}());



/***/ }),

/***/ "./src/app/system/customers/customers-filter.pipe.ts":
/*!***********************************************************!*\
  !*** ./src/app/system/customers/customers-filter.pipe.ts ***!
  \***********************************************************/
/*! exports provided: CustomersFilterPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomersFilterPipe", function() { return CustomersFilterPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var CustomersFilterPipe = /** @class */ (function () {
    function CustomersFilterPipe() {
    }
    CustomersFilterPipe.prototype.transform = function (customerList, searchStr) {
        if (customerList.length === 0 || searchStr === '') {
            return customerList;
        }
        return customerList.filter(function (customer) { return customer.name === searchStr; });
    };
    CustomersFilterPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'customersPipe'
        })
    ], CustomersFilterPipe);
    return CustomersFilterPipe;
}());



/***/ }),

/***/ "./src/app/system/customers/customers.component.html":
/*!***********************************************************!*\
  !*** ./src/app/system/customers/customers.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>Customers</h2>\n<div class=\"btn btn-primary\" (click)=\"addCustomer()\">Add customer</div>\n<hr>\n\n<input type=\"text\" class=\"form-control\" [(ngModel)]=\"filter\" placeholder=\"Search\" [(ngModel)]=\"searchCustomer\">\n<hr>\n<ul class=\"list-group\">\n  <li class=\"list-group-item\" *ngFor=\"let c of customers | customersPipe:searchCustomer\">\n    <span> <a routerLink=\"\">{{c.name}}</a></span>\n  </li>\n\n</ul>\n<!--<wfm-customer *ngFor=\"let c of customers\" [client]=\"c\" ></wfm-customer>-->\n\n\n"

/***/ }),

/***/ "./src/app/system/customers/customers.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/system/customers/customers.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/system/customers/customers.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/system/customers/customers.component.ts ***!
  \*********************************************************/
/*! exports provided: CustomersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomersComponent", function() { return CustomersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
///<reference path="../../../../node_modules/@angular/core/src/metadata/directives.d.ts"/>



var CustomersComponent = /** @class */ (function () {
    function CustomersComponent(router, route, http) {
        this.router = router;
        this.route = route;
        this.http = http;
        this.searchCustomer = '';
        this.customers = [];
    }
    CustomersComponent.prototype.ngOnInit = function () {
        var _this = this;
        // this.http.get('http://localhost:8080/customers').subscribe((data: any[]) => {
        //   this.customers = data.filter(x => x.name !== null);
        // });
        this.http.get('https://akinatoraqua.herokuapp.com/customers').subscribe(function (data) {
            _this.customers = data.filter(function (x) { return x.name !== null; });
        });
        // this.customers = this.customersService.getCustomers();
    };
    CustomersComponent.prototype.updateCustomersList = function (car) {
        if (this.customers.findIndex(function (x) { return x.name === car.name; }) < 0) {
            this.customers.push(car);
        }
    };
    CustomersComponent.prototype.addCustomer = function () {
        this.router.navigate(['add'], { relativeTo: this.route });
    };
    CustomersComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'wfm-customers',
            template: __webpack_require__(/*! ./customers.component.html */ "./src/app/system/customers/customers.component.html"),
            styles: [__webpack_require__(/*! ./customers.component.scss */ "./src/app/system/customers/customers.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], CustomersComponent);
    return CustomersComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, for easier debugging, you can ignore zone related error
 * stack frames such as `zone.run`/`zoneDelegate.invokeTask` by importing the
 * below file. Don't forget to comment it out in production mode
 * because it will have a performance impact when errors are thrown
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/badic/Projects/AkinatorFront/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map