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
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".title{\n    color:rgba(255, 64, 64, 0.973);\n    background-color: #222222;\n    display: block;\n    font-weight: bold;\n    font-size: 25px;\n}\n\n@media screen and (max-width: 768px) {\n    img{\n        display:none;\n    }\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div style=\"text-align:center\">\n  <span class='title'>\n    POWER CYCLES {{title}}!\n  </span>\n  <img width=\"100\" alt=\"Angular Logo\" src=\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj4KICAgIDxwYXRoIGZpbGw9IiNERDAwMzEiIGQ9Ik0xMjUgMzBMMzEuOSA2My4ybDE0LjIgMTIzLjFMMTI1IDIzMGw3OC45LTQzLjcgMTQuMi0xMjMuMXoiIC8+CiAgICA8cGF0aCBmaWxsPSIjQzMwMDJGIiBkPSJNMTI1IDMwdjIyLjItLjFWMjMwbDc4LjktNDMuNyAxNC4yLTEyMy4xTDEyNSAzMHoiIC8+CiAgICA8cGF0aCAgZmlsbD0iI0ZGRkZGRiIgZD0iTTEyNSA1Mi4xTDY2LjggMTgyLjZoMjEuN2wxMS43LTI5LjJoNDkuNGwxMS43IDI5LjJIMTgzTDEyNSA1Mi4xem0xNyA4My4zaC0zNGwxNy00MC45IDE3IDQwLjl6IiAvPgogIDwvc3ZnPg==\">\n</div>\n<div class=\"container\">\n    <app-cars></app-cars>\n</div>\n<!-- <h2>Here are some links to help you start: </h2>\n<ul>\n  <li>\n    <h2><a target=\"_blank\" rel=\"noopener\" href=\"https://angular.io/tutorial\">Tour of Heroes</a></h2>\n  </li>\n  <li>\n    <h2><a target=\"_blank\" rel=\"noopener\" href=\"https://github.com/angular/angular-cli/wiki\">CLI Documentation</a></h2>\n  </li>\n  <li>\n    <h2><a target=\"_blank\" rel=\"noopener\" href=\"https://blog.angular.io/\">Angular blog</a></h2>\n  </li>\n</ul> -->\n\n"

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

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'CALCULATOR';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
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
/* harmony import */ var _cars_cars_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./cars/cars.component */ "./src/app/cars/cars.component.ts");
/* harmony import */ var _view_car_view_car_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./view-car/view-car.component */ "./src/app/view-car/view-car.component.ts");
/* harmony import */ var _input_car_input_car_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./input-car/input-car.component */ "./src/app/input-car/input-car.component.ts");
/* harmony import */ var _cars_training_servise__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./cars/training.servise */ "./src/app/cars/training.servise.ts");
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
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]
            ],
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _cars_cars_component__WEBPACK_IMPORTED_MODULE_4__["CarsComponent"],
                _view_car_view_car_component__WEBPACK_IMPORTED_MODULE_5__["ViewCarComponent"],
                _input_car_input_car_component__WEBPACK_IMPORTED_MODULE_6__["InputCarComponent"]
            ],
            providers: [_cars_training_servise__WEBPACK_IMPORTED_MODULE_7__["TrainingService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"], _cars_cars_component__WEBPACK_IMPORTED_MODULE_4__["CarsComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/cars/cars.component.css":
/*!*****************************************!*\
  !*** ./src/app/cars/cars.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".full{\n    width:100%\n}"

/***/ }),

/***/ "./src/app/cars/cars.component.html":
/*!******************************************!*\
  !*** ./src/app/cars/cars.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n \n\n  <app-input-car (newCar)='updateCar($event)'></app-input-car>\n \n\n  <app-view-car *ngFor='let car of cars' (delCar)='deleteCar($event)' [singleCar]='car'></app-view-car>\n\n  <!-- <app-view-car1 *ngFor='let car of cars' [singleCar]='car'></app-view-car1> -->\n\n   <button class='btn btn-default full' (click)='clear()'>CLEAR</button>\n</div>"

/***/ }),

/***/ "./src/app/cars/cars.component.ts":
/*!****************************************!*\
  !*** ./src/app/cars/cars.component.ts ***!
  \****************************************/
/*! exports provided: CarsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarsComponent", function() { return CarsComponent; });
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

var CarsComponent = /** @class */ (function () {
    function CarsComponent() {
        this.cars = [];
        this.first = this.cars[0];
    }
    CarsComponent.prototype.updateCar = function (car) {
        this.cars.push(car);
        // console.log(this.cars)
        localStorage.setItem('array', JSON.stringify(this.cars));
    };
    CarsComponent.prototype.deleteCar = function (car) {
        console.log('woohoo!');
        this.cars.shift();
        localStorage.clear();
        localStorage.setItem('array', JSON.stringify(this.cars));
    };
    CarsComponent.prototype.clear = function () {
        localStorage.clear();
        window.location.reload();
    };
    CarsComponent.prototype.ngOnInit = function () {
        if (localStorage.getItem('array')) {
            this.cars = JSON.parse(localStorage.getItem('array'));
            // console.log(localStorage.getItem('array'));
            // localStorage.clear()
        }
    };
    CarsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-cars',
            template: __webpack_require__(/*! ./cars.component.html */ "./src/app/cars/cars.component.html"),
            styles: [__webpack_require__(/*! ./cars.component.css */ "./src/app/cars/cars.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CarsComponent);
    return CarsComponent;
}());



/***/ }),

/***/ "./src/app/cars/training.servise.ts":
/*!******************************************!*\
  !*** ./src/app/cars/training.servise.ts ***!
  \******************************************/
/*! exports provided: TrainingService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrainingService", function() { return TrainingService; });
var TrainingService = /** @class */ (function () {
    function TrainingService() {
        this.cars = [];
    }
    TrainingService.prototype.updateCar = function (car) {
        this.cars.push(car);
        console.log(this.cars);
    };
    TrainingService.prototype.getTraining = function () {
        return this.cars;
    };
    return TrainingService;
}());



/***/ }),

/***/ "./src/app/input-car/input-car.component.css":
/*!***************************************************!*\
  !*** ./src/app/input-car/input-car.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".full{\n    width:100%;\n}\n\n@media screen and (max-width: 768px) {\n    h3 , h6{\n        display:none;\n    }\n}"

/***/ }),

/***/ "./src/app/input-car/input-car.component.html":
/*!****************************************************!*\
  !*** ./src/app/input-car/input-car.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n<h3>YOU CAN MULTIPLY YOUR POWER!</h3><h6 style='color:white;'>POWERLIFTING | WEIGHTLIFTING | BODYBUILDING</h6>\n  <div [style.display]=\"allHide()\">\n    <label for=\"car\" style='color:red;font-weight:bold;'>ENTER YOUR 1 REP MAX:</label>\n    <input type=\"text\" class='form-control' name='car' [(ngModel)]='carName'/>\n \n\n  <br>\n      <button class='btn btn-danger full' (click)='addCar()'>CALCULATE</button>\n    </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/input-car/input-car.component.ts":
/*!**************************************************!*\
  !*** ./src/app/input-car/input-car.component.ts ***!
  \**************************************************/
/*! exports provided: InputCarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputCarComponent", function() { return InputCarComponent; });
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

// import {TrainingService} from './../cars/training.servise'
var InputCarComponent = /** @class */ (function () {
    function InputCarComponent() {
        this.carName = null;
        this.inputCalc = false;
        this.newCar = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    InputCarComponent.prototype.addCar = function () {
        var count = 1;
        var step = 85;
        var input = Number(this.carName);
        var weight = input * 80 / 100;
        var goal = null;
        var times = Number(6);
        var rec = Number(2);
        var rutine = Number(2);
        var six = Number(6);
        var final = input * 105 / 100;
        var first = input * 80 / 100;
        while (count < 5) {
            rutine++;
            this.createWeeks(count, weight, times, rutine, six, rec, final, first);
            count++;
        }
        while (count < 10) {
            goal = input * step / 100;
            times--;
            rutine--;
            this.createWeeks(count, goal, times, rutine, six, rec, final, first);
            count++;
            step += 5;
        }
        this.carName = null;
        this.inputCalc = true;
        localStorage.setItem('inputCalc', JSON.stringify(this.inputCalc));
    };
    InputCarComponent.prototype.createWeeks = function (count, goal, times, rutine, six, rec, final, first) {
        this.newCar.emit({
            name: goal,
            counter: count,
            times: times,
            rutine: rutine,
            six: six,
            rec: rec,
            final: final,
            first: first
        });
        // this.carName = null;
    };
    InputCarComponent.prototype.allHide = function () {
        if (this.inputCalc) {
            return "none";
        }
        else {
            return "";
        }
    };
    InputCarComponent.prototype.ngOnInit = function () {
        if (localStorage.getItem('inputCalc')) {
            this.inputCalc = JSON.parse(localStorage.getItem('inputCalc'));
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])('newCar'),
        __metadata("design:type", Object)
    ], InputCarComponent.prototype, "newCar", void 0);
    InputCarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-input-car',
            template: __webpack_require__(/*! ./input-car.component.html */ "./src/app/input-car/input-car.component.html"),
            styles: [__webpack_require__(/*! ./input-car.component.css */ "./src/app/input-car/input-car.component.css")]
        })
    ], InputCarComponent);
    return InputCarComponent;
}());



/***/ }),

/***/ "./src/app/view-car/view-car.component.css":
/*!*************************************************!*\
  !*** ./src/app/view-car/view-car.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".view{\n    margin:20px 0;\n    padding:20px;\n    border:1px solid #121212;\n    border-radius:5px 5px 5px 5px;\n    width:100%;\n    background-color: #222223;\n}\n\nstrong{\n    color:red;\n    font-size: 25px;\n    display: inline-block;\n    width:100%;\n    margin-right:10px;\n}\n\n.info{\n    color:white;\n    font-size: 25px;\n    margin-right:20px;\n    padding-left:20px;\n    width:320px;\n    text-transform: uppercase;\n}\n\n.item{\n    font-size: 30px;\n    color:red;\n    margin-right:2%;\n}\n\n.itemTraining{\n    color:lightblue;\n    font-size: 25px;\n}\n\n.round{\n    color:white;\n    font-size: 25px;\n    display: inline-block;\n    width: 40px;\n    height:40px;\n    border-radius:50%;\n    border:1px solid white;\n    text-align: center;\n    margin:0 10px;\n}\n\n.round:hover{\n    background-color: red;\n    color:white;\n    cursor:pointer;\n}\n\n.new{\n    background-color: red;\n    color:white;\n}\n\n.recovery{\n    margin-top:20px;\n}\n\n.disabled{\n    margin-top:20px;\n    cursor:pointer;\n    display: none;\n    \n}\n\n.inline{\n    display: inline-block;\n    \n}\n\n.head{\n    margin-left: -20px;\n    margin-right: -20px;\n    margin-bottom: 30px;\n    margin-top:-20px;\n    padding:10px;\n    background-color: #121212;\n}\n\n.cong{\n    color:white;\n    padding:10px 20px;\n    margin-left: -20px;\n    margin-right: -20px;\n    margin-top:-20px;\n    margin-bottom:20px;\n    background-color: red;\n}\n\n.lines{\n    display: inline-block;\n}\n\n@media screen and (max-width: 768px) {\nstrong{\n    padding-left: 10px;\n    font-size: 16px;\n}\n    .inline{\n        display: block; \n    }\n    .round{\n        color:white;\n        font-size: 25px;\n        display:block;\n        width:100%;\n        height:35px;\n        border:1px solid white;\n        text-align: center;\n        margin:10px 0;\n    }\n\n    .round:hover{\n        background-color: red;\n        color:white;\n        cursor:pointer;\n    }\n\n    .round[_ngcontent-c3] {\n\n        border-radius: 5px;\n    }\n    .lines{\n        display:block;\n    }\n    .info{\n        font-size: 16px;\n    }\n    .item{\n        font-size: 16px;\n    }\n   \n}"

/***/ }),

/***/ "./src/app/view-car/view-car.component.html":
/*!**************************************************!*\
  !*** ./src/app/view-car/view-car.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class='view' [style.background-color]=\"getStyle()\" [style.display]=\"allDone()\" *ngIf=\"singleCar.counter === this.nonCounter \">\n      <h3 class='cong' *ngIf=\"this.message\">{{this.message}}</h3>\n      <div class='head'>\n      <div class=\"lines\">\n        <span class='info'> Week:</span>\n        <span class='item'>{{singleCar.counter}} of 9</span> &nbsp;\n      </div>\n      <div class=\"lines\">\n        <span class='info'> Weight of the week:</span>\n        <span class='item'> {{singleCar.name}} KG</span> &nbsp;\n      </div>\n      <div class=\"lines\">\n        <span class='info'> 1 REP MAX Goal:</span>\n        <span class='item'> {{singleCar.final}} KG</span> &nbsp;\n      </div>\n      </div>\n\n      <strong>Hard training : &nbsp;&nbsp; &nbsp;&nbsp;&nbsp; {{singleCar.name}} KG &nbsp;&nbsp;DAY 1</strong>\n      <div class='itemTraining'>\n\n        <!-- {{singleCar.times}} -->\n\n        <div class='inline' *ngIf=\"singleCar.times === 6 && singleCar.counter === this.nonCounter \"  (click)='checked($event)'>\n     \n          <span class='round {{ this.check }}' >{{singleCar.rutine}}</span>\n          <span class='round {{ this.check }}' >{{singleCar.rutine}}</span>\n          <span class='round {{ this.check }}' >{{singleCar.rutine}}</span>\n          <span class='round {{ this.check }}' >{{singleCar.rutine}}</span>\n          <span class='round {{ this.check }}' >{{singleCar.rutine}}</span>\n          <span class='round {{ this.check }}' >{{singleCar.rutine}}</span>\n         \n        </div>\n\n\n        <div class='inline' *ngIf=\"singleCar.times === 5 && singleCar.counter === this.nonCounter\" (click)='checked($event)'>\n            <span class='round {{ this.check }}' >{{singleCar.rutine}}</span>\n            <span class='round {{ this.check }}' >{{singleCar.rutine}}</span>\n            <span class='round {{ this.check }}' >{{singleCar.rutine}}</span>\n            <span class='round {{ this.check }}' >{{singleCar.rutine}}</span>\n            <span class='round {{ this.check }}' >{{singleCar.rutine}}</span>\n        </div>\n\n\n        <div class='inline' *ngIf=\"singleCar.times === 4 && singleCar.counter === this.nonCounter\" (click)='checked($event)'>\n            <span class='round {{ this.check }}' >{{singleCar.rutine}}</span>\n            <span class='round {{ this.check }}' >{{singleCar.rutine}}</span>\n            <span class='round {{ this.check }}' >{{singleCar.rutine}}</span>\n            <span class='round {{ this.check }}' >{{singleCar.rutine}}</span>\n        </div>\n\n        <div class='inline' *ngIf=\"singleCar.times === 3 && singleCar.counter === this.nonCounter\" (click)='checked($event)'>\n            <span class='round {{ this.check }}' >{{singleCar.rutine}}</span>\n            <span class='round {{ this.check }}' >{{singleCar.rutine}}</span>\n            <span class='round {{ this.check }}' >{{singleCar.rutine}}</span>\n        </div>\n\n        <div class='inline' *ngIf=\"singleCar.times === 2 && singleCar.counter === this.nonCounter\" (click)='checked($event)'>\n            <span class='round {{ this.check }}' >{{singleCar.rutine}}</span>\n            <span class='round {{ this.check }}' >{{singleCar.rutine}}</span>\n        </div>\n\n        <div class='inline' *ngIf=\"singleCar.times === 1 && singleCar.counter === this.nonCounter\" (click)='checked($event)'>\n            <span class='round {{ this.check }}' >{{singleCar.rutine}}</span>\n        </div>\n\n      </div>\n\n      <div class='recovery'>\n        <strong>Recovery training : {{singleCar.first}} KG &nbsp;&nbsp;DAY 2</strong>\n        <span class='itemTraining' *ngIf=\"singleCar.counter === this.nonCounter \">\n          <!-- {{singleCar.six}} -->\n\n          <span class='round' (click)='checked($event)'>{{singleCar.rec}}</span>\n          <span class='round' (click)='checked($event)'>{{singleCar.rec}}</span>\n          <span class='round' (click)='checked($event)'>{{singleCar.rec}}</span>\n          <span class='round' (click)='checked($event)'>{{singleCar.rec}}</span>\n          <span class='round' (click)='checked($event)'>{{singleCar.rec}}</span>\n          <span class='round' (click)='checked($event)' (click)=\"showStyle = true\">{{singleCar.rec}}</span>\n\n        </span>\n      </div>\n\n      <button class='btn btn-danger disabled' [style.display]=\"getDone()\" (click)='done = true' (click)=\"remove()\">Done</button>\n\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/view-car/view-car.component.ts":
/*!************************************************!*\
  !*** ./src/app/view-car/view-car.component.ts ***!
  \************************************************/
/*! exports provided: ViewCarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewCarComponent", function() { return ViewCarComponent; });
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

var ViewCarComponent = /** @class */ (function () {
    function ViewCarComponent() {
        this.delCar = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.targetClass = 'current';
        this.count = 0;
        this.nonCounter = 1;
        // dataArr = [];
        this.check = '';
        this.message = '';
    }
    ViewCarComponent.prototype.checked = function (event) {
        event.target.setAttribute("class", "round new");
        // event.target.setAttribute("id", this.count);
        this.count++;
        if (this.count === 6) {
            this.check = 'new';
            localStorage.setItem('checked', JSON.stringify(this.check));
        }
        if (this.singleCar.counter === 5) {
            if (this.count === 5) {
                this.check = 'new';
                localStorage.setItem('checked', JSON.stringify(this.check));
            }
        }
        if (this.singleCar.counter === 6) {
            if (this.count === 4) {
                this.check = 'new';
                localStorage.setItem('checked', JSON.stringify(this.check));
            }
        }
        if (this.singleCar.counter === 7) {
            if (this.count === 3) {
                this.check = 'new';
                localStorage.setItem('checked', JSON.stringify(this.check));
            }
        }
        if (this.singleCar.counter === 8) {
            if (this.count === 2) {
                this.check = 'new';
                localStorage.setItem('checked', JSON.stringify(this.check));
            }
        }
        if (this.singleCar.counter === 9) {
            if (this.count === 1) {
                this.check = 'new';
                localStorage.setItem('checked', JSON.stringify(this.check));
            }
            if (this.count >= 6) {
                this.message = '! CONGRATULATIONS THIS IS YOUR LAST TRAINING IN THIS CYCLE !';
            }
        }
        console.log(this.singleCar);
        console.log(this.count);
    };
    ViewCarComponent.prototype.getStyle = function () {
        if (this.showStyle) {
            this.getDone();
            return "silver";
        }
        else {
            return "";
        }
    };
    ViewCarComponent.prototype.getDone = function () {
        if (this.showStyle) {
            return "inline";
        }
        else {
            return "";
        }
    };
    ViewCarComponent.prototype.allDone = function () {
        if (this.done) {
            return "none";
        }
        else {
            return "";
        }
    };
    ViewCarComponent.prototype.remove = function () {
        this.delCar.emit({
            name: null,
            counter: null,
            times: null,
            rutine: null,
            six: null,
            rec: null
        });
        this.count = 0;
        console.log(this.nonCounter);
        this.nonCounter++;
        localStorage.setItem('nonCounter', JSON.stringify(this.nonCounter));
        var input = true;
        localStorage.setItem('inputCalc', JSON.stringify(input));
        if (this.singleCar.counter === 9) {
            localStorage.clear();
        }
        window.location.reload();
    };
    ViewCarComponent.prototype.ngOnInit = function () {
        if (localStorage.getItem('checked')) {
            this.check = JSON.parse(localStorage.getItem('checked'));
            // console.log(localStorage.getItem('array'));
            // localStorage.clear()
        }
        if (localStorage.getItem('nonCounter')) {
            this.nonCounter = JSON.parse(localStorage.getItem('nonCounter'));
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])('delCar'),
        __metadata("design:type", Object)
    ], ViewCarComponent.prototype, "delCar", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('singleCar'),
        __metadata("design:type", Object)
    ], ViewCarComponent.prototype, "singleCar", void 0);
    ViewCarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-view-car',
            template: __webpack_require__(/*! ./view-car.component.html */ "./src/app/view-car/view-car.component.html"),
            styles: [__webpack_require__(/*! ./view-car.component.css */ "./src/app/view-car/view-car.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ViewCarComponent);
    return ViewCarComponent;
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
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
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

module.exports = __webpack_require__(/*! /Users/yderz/Documents/Angular/ANGULAR/App/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map