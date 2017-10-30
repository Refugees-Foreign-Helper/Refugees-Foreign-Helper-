webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports
exports.i(__webpack_require__("../../../../css-loader/index.js?{\"sourceMap\":false,\"importLoaders\":1}!../../../../postcss-loader/index.js?{\"ident\":\"postcss\"}!../../../../bootstrap/dist/css/bootstrap.min.css"), "");

// module
exports.push([module.i, "h1 {\n  color: #360;\n  font-family: Arial, Helvetica, sans-serif;\n  font-size: 250%;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <a routerLink='login'\nrouterLinkActive=\"active\">login from here</a> -->\n\n<app-navbar></app-navbar>\n\n<!-- if you don`t have account sign up from here\n\n<a routerLink='/signup'\nrouterLinkActive=\"active\">signup</a> -->\n\n<router-outlet></router-outlet>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_service__ = __webpack_require__("../../../../../src/app/data.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var AppComponent = (function () {
    function AppComponent() {
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_1__data_service__["a" /* DataService */]]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__speech_recognition_service__ = __webpack_require__("../../../../../src/app/speech-recognition.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__login_index__ = __webpack_require__("../../../../../src/app/login/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__main_main_component__ = __webpack_require__("../../../../../src/app/main/main.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__signup_signup_component__ = __webpack_require__("../../../../../src/app/signup/signup.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__post_post_component__ = __webpack_require__("../../../../../src/app/post/post.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__navbar_navbar_component__ = __webpack_require__("../../../../../src/app/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__profile_profile_component__ = __webpack_require__("../../../../../src/app/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__language_language_component__ = __webpack_require__("../../../../../src/app/language/language.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






//Components








//import { BootstrapCompComponent } from './bootstrap-comp/bootstrap-comp.component';
var appRoutes = [
    { path: 'signup', component: __WEBPACK_IMPORTED_MODULE_9__signup_signup_component__["a" /* SignupComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_7__login_index__["a" /* LoginComponent */] },
    { path: 'main', component: __WEBPACK_IMPORTED_MODULE_8__main_main_component__["a" /* MainComponent */] },
    { path: 'post', component: __WEBPACK_IMPORTED_MODULE_10__post_post_component__["a" /* PostComponent */] },
    { path: 'navbar', component: __WEBPACK_IMPORTED_MODULE_11__navbar_navbar_component__["a" /* NavbarComponent */] },
    { path: 'profile', component: __WEBPACK_IMPORTED_MODULE_12__profile_profile_component__["a" /* ProfileComponent */] },
    { path: 'language', component: __WEBPACK_IMPORTED_MODULE_13__language_language_component__["a" /* LanguageComponent */] }
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["M" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_7__login_index__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_8__main_main_component__["a" /* MainComponent */],
            __WEBPACK_IMPORTED_MODULE_9__signup_signup_component__["a" /* SignupComponent */],
            __WEBPACK_IMPORTED_MODULE_10__post_post_component__["a" /* PostComponent */],
            __WEBPACK_IMPORTED_MODULE_11__navbar_navbar_component__["a" /* NavbarComponent */],
            __WEBPACK_IMPORTED_MODULE_12__profile_profile_component__["a" /* ProfileComponent */],
            __WEBPACK_IMPORTED_MODULE_13__language_language_component__["a" /* LanguageComponent */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* RouterModule */].forRoot(appRoutes, { enableTracing: true })
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_5__speech_recognition_service__["a" /* SpeechRecognitionService */]],
        bootstrap: [
            __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_8__main_main_component__["a" /* MainComponent */],
            __WEBPACK_IMPORTED_MODULE_10__post_post_component__["a" /* PostComponent */],
            __WEBPACK_IMPORTED_MODULE_11__navbar_navbar_component__["a" /* NavbarComponent */],
            __WEBPACK_IMPORTED_MODULE_12__profile_profile_component__["a" /* ProfileComponent */]
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/data.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__ = __webpack_require__("../../../../rxjs/BehaviorSubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DataService = (function () {
    function DataService() {
        this.FlagSource = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["BehaviorSubject"](false);
        this.currentFlag = this.FlagSource.asObservable();
    }
    DataService.prototype.changeFlag = function (flag) {
        this.FlagSource.next(flag);
    };
    return DataService;
}());
DataService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], DataService);

//# sourceMappingURL=data.service.js.map

/***/ }),

/***/ "../../../../../src/app/language/language.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/language/language.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n    <div class=\"row\">\n        <div class=\"col-lg-12 col-md-12\">\n            <div class=\"card\">\n                <div class=\"header\">\n                    <h4 class=\"title\">&nbsp;&nbsp; Let's Make Communication Easier</h4>\n                </div>\n                <div class=\"content\">\n                    <div class=\"row\">\n                        <div class=\"col-md-2\"></div>\n                        <div class=\"col-md-8\">\n                            <div class=\"form-group\">\n                                <label></label>\n                                <input type=\"text\" class=\"form-control border-input\" name=\"txtSpeechSearchMovieName\" id=\"txtSpeechSearchMovieName\" value=\"\"\n                                placeholder=\"say something!!!\" [(ngModel)]=\"speechData\">\n                            </div>\n                        </div>\n                        <div class=\"col-md-2\"></div>\n                    </div>\n                    <br />\n                    <div class=\"text-center\">\n                        <button class=\"btn btn-info btn-fill btn-wd\" \n                        name=\"btnActivateSpeechSearchMovie\" \n                        id=\"btnActivateSpeechSearchMovie\" \n                        (click)=\"activateSpeechSearchMovie()\"\n                        [hidden]=\"show\">\n                        Start\n                    </button>\n                    <button class=\"btn btn-danger\" \n                    (click)=\"ngOnDestroy()\"\n                    [hidden]=\"!show\">\n                    Stop\n                </button>\n                <select id=\"language\">\n                   <option value='ar'>arabic</option>\n                   <option value='en-us'>English US</option>\n               </select>\n           </div>\n           <br />\n       </div>\n   </div>\n</div>\n</div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/language/language.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LanguageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__speech_recognition_service__ = __webpack_require__("../../../../../src/app/speech-recognition.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LanguageComponent = (function () {
    function LanguageComponent(speechRecognitionService) {
        this.speechRecognitionService = speechRecognitionService;
        this.show = false;
        this.speechData = "";
    }
    LanguageComponent.prototype.ngOnInit = function () {
        console.log("areej and hanan");
    };
    LanguageComponent.prototype.ngOnDestroy = function () {
        this.show = !this.show;
        this.speechRecognitionService.stop();
    };
    LanguageComponent.prototype.activateSpeechSearchMovie = function () {
        var _this = this;
        this.show = !this.show;
        this.speechRecognitionService.record()
            .subscribe(
        //listener
        function (value) {
            _this.speechData = value;
            console.log(value);
        }, 
        //errror
        function (err) {
            console.log(err);
            if (err.error == "there is no speech untile now") {
                _this.activateSpeechSearchMovie();
            }
        }, 
        //completion
        function () {
            _this.activateSpeechSearchMovie();
        });
    };
    return LanguageComponent;
}());
LanguageComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-language',
        template: __webpack_require__("../../../../../src/app/language/language.component.html"),
        styles: [__webpack_require__("../../../../../src/app/language/language.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__speech_recognition_service__["a" /* SpeechRecognitionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__speech_recognition_service__["a" /* SpeechRecognitionService */]) === "function" && _a || Object])
], LanguageComponent);

var _a;
//# sourceMappingURL=language.component.js.map

/***/ }),

/***/ "../../../../../src/app/login/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__login_component__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <form>\nUser name:<input [(ngModel)]=\"username\" id = \"username\" type=\"username\" name=\"username\">\t<br>\n<br>\nPassword :<input [(ngModel)]=\"password\" id = \"password\" type=\"password\" name=\"password\">\t<br>\t\n<button (click)=\"login()\"> Login </button>\n</form>\n\n\n\n\n -->"

/***/ }),

/***/ "../../../../../src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export toggle */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_service__ = __webpack_require__("../../../../../src/app/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__navbar_navbar_component__ = __webpack_require__("../../../../../src/app/navbar/navbar.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

 //1




var toggle = true;
var LoginComponent = (function () {
    // login;
    function LoginComponent(http, router, data, logs) {
        this.http = http;
        this.router = router;
        this.data = data;
        this.logs = logs;
        // this.login = this.logs.login;
        // this.login = log.login();
    }
    LoginComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.data.currentFlag.subscribe(function (flag) { return _this.flag = flag; }); //2
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('/login', { password: this.password, username: this.username }, { headers: headers })
            .map(function (res) {
            if (res) {
                _this.data.changeFlag(true);
                //console.log("rearea",res)
                // console.log("showHidda",toggle);
                _this.router.navigateByUrl('/main');
            }
            else {
                alert('wrong password or username stupid!!!');
                _this.router.navigateByUrl('/');
            }
        }).subscribe();
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-login',
        template: __webpack_require__("../../../../../src/app/login/login.component.html"),
        providers: [__WEBPACK_IMPORTED_MODULE_1__data_service__["a" /* DataService */]] //2
    })
    // @Injectable()
    ,
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__data_service__["a" /* DataService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__navbar_navbar_component__["a" /* NavbarComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__navbar_navbar_component__["a" /* NavbarComponent */]) === "function" && _d || Object])
], LoginComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "../../../../../src/app/main/main.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".panel-shadow {\n    box-shadow: rgba(0, 0, 0, 0.3) 7px 7px 7px;\n}\n.panel-white {\n  border: 1px solid #dddddd;\n}\n.panel-white  .panel-heading {\n  color: #333;\n  background-color: #fff;\n  border-color: #ddd;\n}\n.panel-white  .panel-footer {\n  background-color: #fff;\n  border-color: #ddd;\n}\n\n.post .post-heading {\n  height: 20px;\n  padding: 20px 15px;\n}\n.post .post-heading .avatar {\n  width: 60px;\n  height: 60px;\n  display: block;\n  margin-right: 15px;\n}\n.post .post-heading .meta .title {\n  margin-bottom: 0;\n}\n.post .post-heading .meta .title a {\n  color: black;\n}\n.post .post-heading .meta .title a:hover {\n  color: #aaaaaa;\n}\n.post .post-heading .meta .time {\n  margin-top: 8px;\n  color: #999;\n}\n.post .post-image .image {\n  width: 100%;\n  height: auto;\n}\n.post .post-description {\n  padding: 15px;\n}\n.post .post-description p {\n  font-size: 14px;\n}\n.post .post-description .stats {\n  margin-top: 20px;\n}\n.post .post-description .stats .stat-item {\n  display: inline-block;\n  margin-right: 15px;\n}\n.post .post-description .stats .stat-item .icon {\n  margin-right: 8px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/main/main.component.html":
/***/ (function(module, exports) {

module.exports = "<app-post></app-post>\n<div *ngFor=\"let post of posts ;index as i\">\n\n\n   <div class=\"w3-container w3-card-2 w3-white w3-round w3-margin\"><br>\n\n        <img src=\"{{post.imag}}\" alt=\"Avatar\" class=\"w3-left w3-circle w3-margin-right\" style=\"width:60px\">\n        <span class=\"w3-right w3-opacity\">32 min</span>\n        <h4>{{post.userName}}</h4><br>\n        <hr class=\"w3-clear\">\n        <p>\n          Location : {{post.location}}  <br>\n          Description : {{post.discribtion}} <br>\n         Contact Info : {{post.contactInfo}} <br>\n        </p>\n        <img src=\"{{post.image}}\" style=\"width:25%\" class=\"w3-margin-bottom\">\n\n      <!-- comment tag start hear  -->\n      <div *ngFor=\"let com of comments;index as j\" [hidden]=\"i != comID\">\n      <link rel=\"stylesheet\" type=\"text/css\" href=\"//netdna.bootstrapcdn.com/font-awesome/4.1.0/css/font-awesome.min.css\">\n<div class=\"container\" >\n    <div class=\"row\"  style=\"height:5% , width:4%\">\n        <div class=\"col-sm-8\" >\n            <div class=\"panel panel-white post panel-shadow\">\n                <div class=\"post-heading\">\n                    <div class=\"pull-left image\">\n                        <img src={{com.imag}} class=\"img-circle avatar\" alt=\"user profile image\">\n                    </div>\n                    <div class=\"pull-left meta\">\n                        <div class=\"title h5\">\n                            <a href=\"#\"><b>{{com.username}}</b></a>\n                        </div>\n                    </div>\n                </div> \n                <div class=\"post-description\"> \n                    <p>{{com.comment}}</p>\n                    \n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n</div>\n\n\n<!-- end for comment filed  -->\n\n\n        <input type=\"text\" name=\"type your comment\" id=\"{{i}}\" placeholder=\"write a comment here...\">\n        <button type=\"button\"\n        (click)=\"commentFun(i,post.id)\" \n        class=\"w3-button w3-theme-d2 w3-margin-bottom\"><i class=\"fa fa-comment\"></i>  Comment</button>  \n</div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/main/main.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MainComponent = (function () {
    function MainComponent(http) {
        this.http = http;
    }
    MainComponent.prototype.ngOnInit = function () {
        var _this = this;
        //setInterval(() => {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.get('/main', { headers: headers })
            .map(function (res) {
            if (res) {
                _this.posts = res.json();
                console.log(_this.posts);
                // console.log("response from post",res.json());
            }
            else {
            }
        }).subscribe();
        // }, 5000);
    };
    MainComponent.prototype.commentFun = function (postIndex, roomId) {
        var _this = this;
        this.comment = $("#" + postIndex).val();
        this.id = roomId;
        this.comID = postIndex;
        console.log(this.comment);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('/postcomment', { commet: this.comment, roomid: this.id }, { headers: headers })
            .map(function (res) {
            if (res) {
                _this.comments = res.json();
            }
            else {
            }
        }).subscribe();
    };
    return MainComponent;
}());
MainComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-main',
        template: __webpack_require__("../../../../../src/app/main/main.component.html"),
        styles: [__webpack_require__("../../../../../src/app/main/main.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], MainComponent);

var _a;
//# sourceMappingURL=main.component.js.map

/***/ }),

/***/ "../../../../../src/app/navbar/navbar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = " <link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css\" integrity=\"sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u\" crossorigin=\"anonymous\">\n <link rel=\"stylesheet\" href=\"https://www.w3schools.com/w3css/4/w3.css\">\n<link rel=\"stylesheet\" href=\"https://www.w3schools.com/lib/w3-theme-blue-grey.css\">\n<link rel='stylesheet' href='https://fonts.googleapis.com/css?family=Open+Sans'>\n<link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css\">\n<nav class=\"navbar navbar-inverse\">\n  <div class=\"container-fluid\">\n    <div class=\"navbar-header\">\n      <a class=\"navbar-brand\" href=\"#\">Batee5</a>\n    </div>\n    <ul class=\"nav navbar-nav\">\n      <li class=\"active\"><a [hidden]= \"!flag\" href=\"#\"\n        routerLink='/main'\n        routerLinkActive=\"active\"\n        (click) = \"main\"\n      \t>Home</a></li>\n      <li><a href=\"#\"  \n        [hidden]= \"!flag\" \n      \trouterLink=\"/profile\" \n      \trouterLinkActive=\"active\" >Profile</a></li>\n          <li><a href=\"#\"  \n        [hidden]= \"!flag\" \n        routerLink=\"/language\" \n        routerLinkActive=\"active\" >Language</a></li>\n   \n\n      <!-- <li><a href=\"#\">Page 2</a></li> -->\n    </ul>\n    <ul class=\"nav navbar-nav navbar-right\">\n      <li><a href=\"#\"\n        [hidden]= \"flag\"\n        routerLink='/signup'\n        routerLinkActive=\"active\"\n      \t><span class=\"glyphicon glyphicon-user\"></span> Sign Up</a></li>\n      <li><a href=\"#\"\n            [hidden]= \"flag\"\n      \t    routerLink=\"login\"\n            routerLinkActive=\"active\"><span class=\"glyphicon glyphicon-log-in\" \n      \t></span> Login</a>\n      </li>\n         <li><a href=\"#\"\n          (click)=\"logout()\"\n        [hidden]= \"!flag\"\n        routerLink='/login'\n        routerLinkActive=\"active\"\n        ><span class=\"glyphicon glyphicon-user\"></span> Logout</a></li>\n    </ul>\n  </div>\n</nav>\n{{flag}}\n<form [hidden]= \"flag\">\nUser name:<input [(ngModel)]=\"username\" id = \"username\" type=\"username\" name=\"username\">  <br>\n<br>\nPassword :<input [(ngModel)]=\"password\" id = \"password\" type=\"password\" name=\"password\">  <br>  \n<button (click)=\"login()\"> Login </button>\n</form>\n\n<router-outlet></router-outlet>"

/***/ }),

/***/ "../../../../../src/app/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__data_service__ = __webpack_require__("../../../../../src/app/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__signup_signup_component__ = __webpack_require__("../../../../../src/app/signup/signup.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// import { AfterViewInit, ViewChild } from '@angular/core';



 //1


var NavbarComponent = (function () {
    function NavbarComponent(http, data, router, signup) {
        this.http = http;
        this.data = data;
        this.router = router;
        this.signup = signup;
    }
    NavbarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.data.currentFlag.subscribe(function (flag) { return _this.flag = flag; }); //4
        // 	setInterval(() => {
        //    let headers = new Headers();
        //  headers.append('Content-Type', 'application/json');
        //   return this.http.get('/show',{headers: headers})
        //   .map((res) => {
        //     if(res){
        //        this.show = res.json();
        //     }else{
        //     }
        //   }).subscribe();
        // }, 5000);
    };
    NavbarComponent.prototype.login = function () {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('/login', { password: this.password, username: this.username }, { headers: headers })
            .map(function (res) {
            if (res) {
                _this.data.changeFlag(!_this.flag);
                console.log(_this.flag, 'hghgfghfgh');
                _this.router.navigateByUrl('/main');
            }
            else {
                alert('wrong password or username stupid!!!');
                _this.router.navigateByUrl('/');
            }
        }).subscribe();
    };
    NavbarComponent.prototype.logout = function () {
        this.data.changeFlag(!this.flag); //5
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.get('/logout', { headers: headers })
            .map(function (res) { }).subscribe();
    };
    return NavbarComponent;
}());
NavbarComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-navbar',
        template: __webpack_require__("../../../../../src/app/navbar/navbar.component.html"),
        styles: [__webpack_require__("../../../../../src/app/navbar/navbar.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_3__data_service__["a" /* DataService */], __WEBPACK_IMPORTED_MODULE_5__signup_signup_component__["a" /* SignupComponent */]] //2
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__data_service__["a" /* DataService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__signup_signup_component__["a" /* SignupComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__signup_signup_component__["a" /* SignupComponent */]) === "function" && _d || Object])
], NavbarComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=navbar.component.js.map

/***/ }),

/***/ "../../../../../src/app/post/post.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/post/post.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"container\"> -->\n  <!-- Trigger the modal with a button -->\n <!--  <button type=\"button\" class=\"btn btn-info btn-lg\" data-toggle=\"modal\" data-target=\"#myModal\">Post</button> -->\n\n  <!-- Modal -->\n <!--  <div class=\"modal fade\" id=\"myModal\" role=\"dialog\">\n    <div class=\"modal-dialog\"> -->\n    \n      <!-- Modal content-->\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n          <h4 class=\"modal-title\">ADD room</h4>\n        </div>\n        <div class=\"modal-body\">\n         Location: <input [(ngModel)]=\"location\" name=\"Location\" type=\"text\">  <br>\n         <br>\n         Description: <input [(ngModel)]=\"description\" name=\"Description\" type=\"text\">  <br><br>\n         Contact info: <input [(ngModel)]=\"contactInfo\" name=\"ContactInfo\" type=\"text\"> <br>\n         Image:<input [(ngModel)]=\"image\" type=\"file\" id=\"image\" (change)=\"ima($event)\">\n        </div>\n        <div class=\"modal-footer\">\n        <button (click)=\"submit()\" type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Submit</button>\n          <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>\n        </div>\n      </div>\n      \n  <!--   </div>\n  </div>\n</div>\n\n -->\n"

/***/ }),

/***/ "../../../../../src/app/post/post.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PostComponent = (function () {
    function PostComponent(http) {
        this.http = http;
    }
    PostComponent.prototype.ngOnInit = function () {
    };
    PostComponent.prototype.ima = function (event) {
        var _this = this;
        if (event.target.files && event.target.files[0]) {
            var reader = new FileReader();
            reader.onload = function (event) {
                _this.url = event.target.result;
            };
            reader.readAsDataURL(event.target.files[0]);
        }
        this.url = reader["__zone_symbol__originalInstance"];
    };
    PostComponent.prototype.submit = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('/post', { location: this.location, discribtion: this.description, image: this.url, contactInfo: this.contactInfo }, { headers: headers })
            .map(function (res) {
            if (res) {
                console.log("response from post", res);
            }
            else {
            }
        }).subscribe();
    };
    return PostComponent;
}());
PostComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-post',
        template: __webpack_require__("../../../../../src/app/post/post.component.html"),
        styles: [__webpack_require__("../../../../../src/app/post/post.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], PostComponent);

var _a;
//# sourceMappingURL=post.component.js.map

/***/ }),

/***/ "../../../../../src/app/profile/profile.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/profile/profile.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"w3-container w3-content\" style=\"max-width:1400px;margin-top:80px\">    \n  <!-- The Grid -->\n  <div class=\"w3-row\">\n    <!-- Left Column -->\n    <div class=\"w3-col m3\">\n      <!-- Profile -->\n      \n      <div class=\"w3-card-2 w3-round w3-white\">\n        <div class=\"w3-container\">\n         <h4 class=\"w3-center\">{{currentUser}}</h4>\n         <p class=\"w3-center\"><img src=\"{{profile}}\" class=\"w3-circle\" style=\"height:106px;width:106px\" alt=\"Avatar\"></p>\n         <hr>\n         <p><i class=\"fa fa-pencil fa-fw w3-margin-right w3-text-theme\"></i> {{nationality}}</p>\n         <p><i class=\"fa fa-home fa-fw w3-margin-right w3-text-theme\"></i> {{location}}</p>\n         <p><i class=\"fa fa-birthday-cake fa-fw w3-margin-right w3-text-theme\"></i> {{birthday}}</p>\n        </div>\n      </div>\n      <br>          \n      <!-- Alert Box -->\n      <div class=\"w3-container w3-display-container w3-round w3-theme-l4 w3-border w3-theme-border w3-margin-bottom w3-hide-small\">\n        <span onclick=\"this.parentElement.style.display='none'\" class=\"w3-button w3-theme-l3 w3-display-topright\">\n          <i class=\"fa fa-remove\"></i>\n        </span>\n        <p><strong>Hey!</strong></p>\n        <p>Then you have no fear anymore. You're completely free.</p>\n      </div>\n    \n    <!-- End Left Column -->\n    </div>\n    \n    <!-- Middle Column -->\n    <div class=\"w3-col m7\">\n    \n      <div class=\"w3-row-padding\">\n        <div class=\"w3-col m12\">\n          <div class=\"w3-card-2 w3-round w3-white\">\n            <div class=\"w3-container w3-padding\">\n              <h6 class=\"w3-opacity\">Social Media template by w3.css</h6>\n              <p contenteditable=\"true\" class=\"w3-border w3-padding\">Status: Feeling Blue</p>\n              <button type=\"button\" class=\"w3-button w3-theme\"><i class=\"fa fa-pencil\"></i>  Post</button> \n            </div>\n          </div>\n        </div>\n      </div>\n      \n\n   <!-- <div class=\"w3-container w3-card-2 w3-white w3-round w3-margin\"><br>\n        <img src=\"https://upload.wikimedia.org/wikipedia/commons/e/ed/Conejo_astronomo.png\" alt=\"Avatar\" class=\"w3-left w3-circle w3-margin-right\" style=\"width:60px\">\n        <span class=\"w3-right w3-opacity\">16 min</span>\n        <h4>{{data.userName}}</h4><br>\n        <hr class=\"w3-clear\">\n        <p>\n        Location : {{data.location}} <br>\n        Description : {{data.discribtion}} <br>\n        Contact Info : {{data.contactInfo}} <br>\n\n      </p> \n        <button type=\"button\" class=\"w3-button w3-theme-d1 w3-margin-bottom\"><i class=\"fa fa-thumbs-up\"></i>  Like</button> \n        <button type=\"button\" class=\"w3-button w3-theme-d2 w3-margin-bottom\"><i class=\"fa fa-comment\"></i>  Comment</button> \n      </div>  \n</div> -->\n\n      \n<!--       <div class=\"w3-container w3-card-2 w3-white w3-round w3-margin\"><br>\n        <img src=\"https://upload.wikimedia.org/wikipedia/commons/e/ed/Conejo_astronomo.png\" alt=\"Avatar\" class=\"w3-left w3-circle w3-margin-right\" style=\"width:60px\">\n        <span class=\"w3-right w3-opacity\">16 min</span>\n        <h4>Jane Doe</h4><br>\n        <hr class=\"w3-clear\">\n        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>\n        <button type=\"button\" class=\"w3-button w3-theme-d1 w3-margin-bottom\"><i class=\"fa fa-thumbs-up\"></i>  Like</button> \n        <button type=\"button\" class=\"w3-button w3-theme-d2 w3-margin-bottom\"><i class=\"fa fa-comment\"></i>  Comment</button> \n      </div>  --> \n\n      <!-- <div class=\"w3-container w3-card-2 w3-white w3-round w3-margin\"><br> -->\n      <div *ngFor=\"let data of postdata\">\n        <img src=\"{{profile}}\" alt=\"Avatar\" class=\"w3-left w3-circle w3-margin-right\" style=\"width:60px\">\n        <span class=\"w3-right w3-opacity\">32 min</span>\n        <h4>{{data.userName}}</h4><br>\n        <hr class=\"w3-clear\">\n        <p>\n          Location : {{data.location}} <br>\n          Description : {{data.discribtion}} <br>\n         Contact Info : {{data.contactInfo}} <br>\n        </p>\n        <img src=\"{{data.image}}\" style=\"width:100%\" class=\"w3-margin-bottom\">\n        <button type=\"button\" class=\"w3-button w3-theme-d1 w3-margin-bottom\"><i class=\"fa fa-thumbs-up\"></i>  Like</button> \n        <button type=\"button\" class=\"w3-button w3-theme-d2 w3-margin-bottom\"><i class=\"fa fa-comment\"></i>  Comment</button> \n      </div> \n      \n    <!-- End Middle Column -->\n    </div>\n    \n    <!-- Right Column -->\n   <!--  <div class=\"w3-col m2\">\n      <div class=\"w3-card-2 w3-round w3-white w3-center\">\n        <div class=\"w3-container\">\n          <p>Upcoming Events:</p>\n          <img src=\"https://upload.wikimedia.org/wikipedia/commons/e/ed/Conejo_astronomo.png\" alt=\"Forest\" style=\"width:100%;\">\n          <p><strong>Holiday</strong></p>\n          <p>Friday 15:00</p>\n          <p><button class=\"w3-button w3-block w3-theme-l4\">Info</button></p>\n        </div>\n      </div>\n      <br>\n      \n      <div class=\"w3-card-2 w3-round w3-white w3-center\">\n        <div class=\"w3-container\">\n          <p>Friend Request</p>\n          <img src=\"https://upload.wikimedia.org/wikipedia/commons/e/ed/Conejo_astronomo.png alt=\"Avatar\" style=\"width:50%\"><br>\n          <span>Jane Doe</span>\n          <div class=\"w3-row w3-opacity\">\n            <div class=\"w3-half\">\n              <button class=\"w3-button w3-block w3-green w3-section\" title=\"Accept\"><i class=\"fa fa-check\"></i></button>\n            </div>\n            <div class=\"w3-half\">\n              <button class=\"w3-button w3-block w3-red w3-section\" title=\"Decline\"><i class=\"fa fa-remove\"></i></button>\n            </div>\n          </div>\n        </div>\n      </div>\n      <br> -->\n      \n   <!--    <div class=\"w3-card-2 w3-round w3-white w3-padding-16 w3-center\">\n        <p>ADS</p>\n      </div>\n      <br> -->\n      \n      <div class=\"w3-card-2 w3-round w3-white w3-padding-32 w3-center\">\n        <p><i class=\"fa fa-bug w3-xxlarge\"></i></p>\n      </div>\n      \n    <!-- End Right Column -->\n   <!--  </div> -->\n    \n  <!-- End Grid -->\n  </div>\n  \n<!-- End Page Container -->\n</div>\n<br>"

/***/ }),

/***/ "../../../../../src/app/profile/profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProfileComponent = (function () {
    function ProfileComponent(http) {
        this.http = http;
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.get('/profile', { headers: headers })
            .map(function (res) {
            if (res) {
                _this.userData = res.json();
                _this.postdata = _this.userData[0];
                _this.currentUser = _this.userData[1][0].username;
                _this.nationality = _this.userData[1][0].Nationallity;
                _this.location = _this.userData[1][0].Location;
                _this.birthday = _this.userData[1][0].Birthday;
                _this.profile = _this.userData[1][0].imag;
                // console.log("ttttttt",this.nationality);
            }
            else {
            }
        }).subscribe();
    };
    return ProfileComponent;
}());
ProfileComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-profile',
        template: __webpack_require__("../../../../../src/app/profile/profile.component.html"),
        styles: [__webpack_require__("../../../../../src/app/profile/profile.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], ProfileComponent);

var _a;
//# sourceMappingURL=profile.component.js.map

/***/ }),

/***/ "../../../../../src/app/signup/signup.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/signup/signup.component.html":
/***/ (function(module, exports) {

module.exports = "<form>\n  Username:<input [(ngModel)]=\"username\"  id = \"username\" type=\"username\" name=\"username\">\t<br>\n<br>\n  Password :<input [(ngModel)]=\"password\" id = \"password\" type=\"password\" name=\"password\">\t<br>\n<br>\n  Birthday :\n  <select name=\"months\" id=\"month\">\n  <option value=\"JAN\">January</option>\n  <option value=\"FEB\">February</option>\n  <option value=\"MAR\">March</option>\n  <option value=\"APR\">April</option>\n  <option value=\"MAY\">May</option>\n  <option value=\"Jun\">June</option>\n  <option value=\"Jul\">July</option>\n    <option value=\"AUG\">August</option>\n    <option value=\"SEP\">Septemper</option>\n    <option value=\"OCT\">October</option>\n    <option value=\"NOV\">November</option>\n    <option value=\"DEC\">December</option>\n  </select>\n  <select  id= \"day\" >\n  \t<option *ngFor=\"let day of days\">{{day}}</option>\n  </select>\n  <select id=\"year\" >\n  \t<option *ngFor=\"let year of years\" [value]=\"year\">{{year}}</option>\n  </select>\n<br>\n<br>\n\n   Nationality :<input [(ngModel)]=\"nationality\" id = \"nationality\" type=\"text\" name=\"nationality\">\t<br><br>\t\n   Location :<input [(ngModel)]=\"location\" id = \"location\" type=\"text\" name=\"location\">\t<br>\t\n   Upload your photo:<input  type=\"file\" id=\"image\" (change)=\"ima($event)\">\n\n<button (click)=\"signup()\"> Signup </button>\n</form>\n\n\n"

/***/ }),

/***/ "../../../../../src/app/signup/signup.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SignupComponent = (function () {
    function SignupComponent(http, router, _sanitizer) {
        this.http = http;
        this.router = router;
        this._sanitizer = _sanitizer;
        this._html = $("#myimg");
        this.days = [];
        this.years = [];
    }
    Object.defineProperty(SignupComponent.prototype, "htmlProperty", {
        get: function () {
            return this._sanitizer.bypassSecurityTrustHtml(this._html);
        },
        enumerable: true,
        configurable: true
    });
    SignupComponent.prototype.ima = function (event) {
        var _this = this;
        if (event.target.files && event.target.files[0]) {
            var reader = new FileReader();
            reader.onload = function (event) {
                _this.url = event.target.result;
            };
            reader.readAsDataURL(event.target.files[0]);
        }
        this.url = reader["__zone_symbol__originalInstance"];
        console.log(this.url);
    };
    SignupComponent.prototype.ngOnInit = function () {
        for (var i = 1; i <= 31; ++i) {
            this.days.push(i);
        }
        for (var i = 1905; i <= 2017; ++i) {
            this.years.push(i);
        }
    };
    SignupComponent.prototype.signup = function () {
        var _this = this;
        this.y = $("#year").val();
        this.m = $("#month").val();
        this.d = $("#day").val();
        this.date = this.d + '/' + this.m + '/' + this.y;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('/signup', { password: this.password, username: this.username, birthday: this.date, nationality: this.nationality, location: this.location, image: this.url }, { headers: headers })
            .map(function (res) {
            if (res) {
                _this.router.navigateByUrl('/login');
            }
            else {
                alert('account is already exist !!');
                _this.router.navigateByUrl('/');
            }
        }).subscribe();
    };
    return SignupComponent;
}());
SignupComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-signup',
        template: __webpack_require__("../../../../../src/app/signup/signup.component.html"),
        styles: [__webpack_require__("../../../../../src/app/signup/signup.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["b" /* DomSanitizer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["b" /* DomSanitizer */]) === "function" && _c || Object])
], SignupComponent);

var _a, _b, _c;
//# sourceMappingURL=signup.component.js.map

/***/ }),

/***/ "../../../../../src/app/speech-recognition.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SpeechRecognitionService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash__ = __webpack_require__("../../../../lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_lodash__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SpeechRecognitionService = (function () {
    function SpeechRecognitionService(zone) {
        this.zone = zone;
    }
    SpeechRecognitionService.prototype.record = function () {
        var _this = this;
        return __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__["Observable"].create(function (observer) {
            var language = $("#language").val();
            //Speech recognition interfaces are currently prefixed on Chrome, so we'll need to prefix interface names appropriately so we used "webkitSpeechRecognition"
            var webkitSpeechRecognition = window.webkitSpeechRecognition;
            _this.speechRecognition = new webkitSpeechRecognition();
            // seting the attibutes 
            _this.speechRecognition.lang = language;
            _this.speechRecognition.continuous = true;
            _this.speechRecognition.maxAlternatives = 20;
            _this.speechRecognition.onresult = function (speech) {
                // The SpeechRecognitionEvent results property returns a SpeechRecognitionResultList object
                // The SpeechRecognitionResultList object contains SpeechRecognitionResult objects.
                // It has a getter so it can be accessed like an array
                // The first [0] returns the SpeechRecognitionResult at position 0.
                // Each SpeechRecognitionResult object contains SpeechRecognitionAlternative objects that contain individual results.
                // These also have getters so they can be accessed like arrays.
                // The second [0] returns the SpeechRecognitionAlternative at position 0.
                // We then return the transcript property of the SpeechRecognitionAlternative object
                var word = "";
                if (speech.results) {
                    var result = speech.results[speech.resultIndex];
                    // SpeechRecognitionResult {0: SpeechRecognitionAlternative, 1: SpeechRecognitionAlternative,... up to 19  isFinal: true}
                    // 0:SpeechRecognitionAlternative {transcript: "Isabella", confidence: 0}
                    console.log("result", speech.results, speech.resultIndex);
                    var nearWord = result[0].transcript; //the original word alternative
                    if (result.isFinal) {
                        if (result[0].confidence < 0.3) {
                            console.log("sorry!! this result kind of bad data");
                        }
                        else {
                            //we used trim here to Removes whitespace from the beginning and end of the 'nearword'.
                            word = __WEBPACK_IMPORTED_MODULE_2_lodash__["trim"](nearWord);
                            console.log("Did you mean? -> " + word + " , If not try say something else...");
                        }
                    }
                }
                _this.zone.run(function () {
                    observer.next(word);
                });
            };
            _this.speechRecognition.start();
            console.log("Say something - I am giving up on you");
            // this.speechRecognition.onend = () => {
            //     observer.complete();
            // };
            _this.speechRecognition.onerror = function (error) {
                observer.error(error);
            };
        });
    };
    SpeechRecognitionService.prototype.stop = function () {
        this.speechRecognition.stop();
    };
    return SpeechRecognitionService;
}());
SpeechRecognitionService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* NgZone */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* NgZone */]) === "function" && _a || Object])
], SpeechRecognitionService);

var _a;
//# sourceMappingURL=speech-recognition.service.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map