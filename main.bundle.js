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

/***/ "../../../../../src/app/about-us/about-us.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/about-us/about-us.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  about-us works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/about-us/about-us.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutUsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutUsComponent = (function () {
    function AboutUsComponent() {
    }
    AboutUsComponent.prototype.ngOnInit = function () {
    };
    return AboutUsComponent;
}());
AboutUsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-about-us',
        template: __webpack_require__("../../../../../src/app/about-us/about-us.component.html"),
        styles: [__webpack_require__("../../../../../src/app/about-us/about-us.component.css")]
    }),
    __metadata("design:paramtypes", [])
], AboutUsComponent);

//# sourceMappingURL=about-us.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-navigation></app-navigation>\r\n\r\n<router-outlet></router-outlet>\r\n\r\n<app-footer></app-footer>\r\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ngx_facebook__ = __webpack_require__("../../../../ngx-facebook/dist/esm/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ngx_infinite_scroll__ = __webpack_require__("../../../../ngx-infinite-scroll/modules/ngx-infinite-scroll.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__shared_sections_header_header_component__ = __webpack_require__("../../../../../src/app/shared/sections/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__shared_sections_navigation_navigation_component__ = __webpack_require__("../../../../../src/app/shared/sections/navigation/navigation.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__shared_sections_sidebar_sidebar_component__ = __webpack_require__("../../../../../src/app/shared/sections/sidebar/sidebar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__shared_sections_footer_footer_component__ = __webpack_require__("../../../../../src/app/shared/sections/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__core_sections_content_content_component__ = __webpack_require__("../../../../../src/app/core/sections/content/content.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__core_sections_contributors_contributors_component__ = __webpack_require__("../../../../../src/app/core/sections/contributors/contributors.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__jobs_jobs_component__ = __webpack_require__("../../../../../src/app/jobs/jobs.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__network_network_component__ = __webpack_require__("../../../../../src/app/network/network.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__contact_us_contact_us_component__ = __webpack_require__("../../../../../src/app/contact-us/contact-us.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__about_us_about_us_component__ = __webpack_require__("../../../../../src/app/about-us/about-us.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__faq_faq_component__ = __webpack_require__("../../../../../src/app/faq/faq.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__not_found_not_found_component__ = __webpack_require__("../../../../../src/app/not-found/not-found.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







// Import HttpClientModule from @angular/common/http















var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["M" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_12__shared_sections_footer_footer_component__["a" /* FooterComponent */],
            __WEBPACK_IMPORTED_MODULE_9__shared_sections_header_header_component__["a" /* HeaderComponent */],
            __WEBPACK_IMPORTED_MODULE_10__shared_sections_navigation_navigation_component__["a" /* NavigationComponent */],
            __WEBPACK_IMPORTED_MODULE_11__shared_sections_sidebar_sidebar_component__["a" /* SidebarComponent */],
            __WEBPACK_IMPORTED_MODULE_13__core_sections_content_content_component__["a" /* ContentComponent */],
            __WEBPACK_IMPORTED_MODULE_14__core_sections_contributors_contributors_component__["a" /* ContributorsComponent */],
            __WEBPACK_IMPORTED_MODULE_15__jobs_jobs_component__["a" /* JobsComponent */],
            __WEBPACK_IMPORTED_MODULE_16__network_network_component__["a" /* NetworkComponent */],
            __WEBPACK_IMPORTED_MODULE_17__contact_us_contact_us_component__["a" /* ContactUsComponent */],
            __WEBPACK_IMPORTED_MODULE_18__about_us_about_us_component__["a" /* AboutUsComponent */],
            __WEBPACK_IMPORTED_MODULE_19__faq_faq_component__["a" /* FaqComponent */],
            __WEBPACK_IMPORTED_MODULE_20__not_found_not_found_component__["a" /* NotFoundComponent */],
            __WEBPACK_IMPORTED_MODULE_21__home_home_component__["a" /* HomeComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_6__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forRoot([
                { path: '', component: __WEBPACK_IMPORTED_MODULE_21__home_home_component__["a" /* HomeComponent */] },
                { path: 'jobs', component: __WEBPACK_IMPORTED_MODULE_15__jobs_jobs_component__["a" /* JobsComponent */] },
                { path: 'network', component: __WEBPACK_IMPORTED_MODULE_16__network_network_component__["a" /* NetworkComponent */] },
                { path: 'contact-us', component: __WEBPACK_IMPORTED_MODULE_17__contact_us_contact_us_component__["a" /* ContactUsComponent */] },
                { path: 'about-us', component: __WEBPACK_IMPORTED_MODULE_18__about_us_about_us_component__["a" /* AboutUsComponent */] },
                { path: 'faq', component: __WEBPACK_IMPORTED_MODULE_19__faq_faq_component__["a" /* FaqComponent */] },
                { path: '**', component: __WEBPACK_IMPORTED_MODULE_20__not_found_not_found_component__["a" /* NotFoundComponent */] }
            ]),
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_4_ngx_facebook__["a" /* FacebookModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_5_ngx_infinite_scroll__["a" /* InfiniteScrollModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_common_http__["b" /* HttpClientModule */]
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */]]
    })
], AppModule);

Object(__WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(AppModule);
//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/contact-us/contact-us.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/contact-us/contact-us.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  contact-us works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/contact-us/contact-us.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactUsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ContactUsComponent = (function () {
    function ContactUsComponent() {
    }
    ContactUsComponent.prototype.ngOnInit = function () {
    };
    return ContactUsComponent;
}());
ContactUsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-contact-us',
        template: __webpack_require__("../../../../../src/app/contact-us/contact-us.component.html"),
        styles: [__webpack_require__("../../../../../src/app/contact-us/contact-us.component.css")]
    }),
    __metadata("design:paramtypes", [])
], ContactUsComponent);

//# sourceMappingURL=contact-us.component.js.map

/***/ }),

/***/ "../../../../../src/app/core/sections/content/content.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".posts-holder {\r\n    margin-top: 10%;\r\n    max-height: 300px;\r\n    overflow: auto;    \r\n    overflow-x: hidden;\r\n    width: auto;\r\n  }\r\n\r\n  ", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/core/sections/content/content.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-sm-8 offset-sm-2 text\">\r\n      <h1>Jobs Login &amp; Register Forms</h1>\r\n      <div class=\"description\">\r\n          <p>\r\n              Create a good career with us!\r\n          </p>\r\n      </div>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"row\">\r\n  <div class=\"col-sm-10 offset-sm-1 show-forms\">\r\n      <span class=\"show-register-form active\">Signin</span>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"row register-form\">\r\n  <div class=\"col-sm-4 offset-sm-1\">\r\n      <form role=\"form\" action=\"\" method=\"post\" class=\"r-form\">\r\n          <div class=\"form-group\">\r\n            <label class=\"sr-only\" for=\"l-form-email\">Email</label>\r\n            <input type=\"text\" name=\"l-form-email\" placeholder=\"Email...\" class=\"l-form-email form-control\" id=\"l-form-email\" [(ngModel)]=\"email\">\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <label class=\"sr-only\" for=\"l-form-password\">Password</label>\r\n            <input type=\"password\" name=\"l-form-password\" placeholder=\"Password...\" class=\"l-form-password form-control\" id=\"l-form-password\">\r\n        </div>\r\n        <button type=\"submit\" class=\"btn\">Sign in!</button>\r\n      </form>\r\n      <div class=\"social-login\">\r\n        <p>Or login with:</p>\r\n        <div class=\"social-login-buttons\">\r\n            <a class=\"btn btn-link-1\" (click)=\"login()\"><i class=\"fa fa-facebook\"></i></a>\r\n            <a class=\"btn btn-link-1\" href=\"#\"><i class=\"fa fa-twitter\"></i></a>\r\n            <a class=\"btn btn-link-1\" href=\"#\"><i class=\"fa fa-google-plus\"></i></a>\r\n        </div>\r\n\r\n\r\n          <div id=\"status\">\r\n          </div>\r\n\r\n          <a (click)=\"logout()\">FB logout</a>\r\n    </div>\r\n  </div>\r\n  <div class=\"col-sm-6 forms-right-icons\">\r\n\r\n    <div class=\"fb-page\" \r\n        data-href=\"https://www.facebook.com/wejustdevelop/\" \r\n        data-small-header=\"false\" \r\n        data-adapt-container-width=\"true\" \r\n        data-hide-cover=\"false\" \r\n        data-show-facepile=\"true\">\r\n        <blockquote cite=\"https://www.facebook.com/wejustdevelop/\" class=\"fb-xfbml-parse-ignore\">\r\n            <a href=\"https://www.facebook.com/wejustdevelop/\">Wejustdevelop</a>\r\n        </blockquote>\r\n    </div>\r\n        \r\n    <div class=\"posts-holder\"\r\n        infinite-scroll\r\n        [infiniteScrollDistance]=\"1\"\r\n        [infiniteScrollThrottle]=\"10\"\r\n        [scrollWindow]=\"false\"\r\n        (scrolled)=\"postsScrollDown()\"\r\n        >\r\n\r\n                <a [href]=\"post.permalink_url\" target=\"_blank\" *ngFor=\"let post of pagePosts\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-sm-3\">\r\n                            <img [src]=\"post.full_picture\" *ngIf=\"post.full_picture\">\r\n                            <img src=\"/assets/img/wjd_logo.jpg\" *ngIf=\"!post.full_picture\">\r\n                        </div>\r\n                        <div class=\"col-sm-8\">\r\n                            <h3>{{post.message}}</h3>\r\n                        </div>\r\n                    </div>\r\n                </a>\r\n    </div>\r\n    <!--\r\n      <div class=\"row\">\r\n          <div class=\"col-sm-2 icon\"><i class=\"fa fa-commenting\"></i></div>\r\n          <div class=\"col-sm-10\">\r\n              <h3>Awesome Login</h3>\r\n              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et.</p>\r\n          </div>\r\n      </div>\r\n      <div class=\"row\">\r\n          <div class=\"col-sm-2 icon\"><i class=\"fa fa-magic\"></i></div>\r\n          <div class=\"col-sm-10\">\r\n              <h3>Great Registration</h3>\r\n              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et.</p>\r\n          </div>          \r\n      </div>-->\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/core/sections/content/content.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContentComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ngx_facebook__ = __webpack_require__("../../../../ngx-facebook/dist/esm/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ContentComponent = (function () {
    function ContentComponent(fb) {
        this.fb = fb;
        this.pagePosts = [];
        this.nextPosts = "/1846586292025889/posts?fields=id,message,created_time,full_picture,link,permalink_url&limit=5&access_token=" + __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].appId + "|" + __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].appSecret;
        // login with options
        this.options = {
            scope: 'public_profile,user_friends,email,pages_show_list',
            return_scopes: true,
            enable_profile_selector: true
        };
    }
    ContentComponent.prototype.ngOnInit = function () {
        var initParams = {
            appId: "" + __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].appId,
            xfbml: true,
            version: 'v2.8'
        };
        this.fb.init(initParams);
        this.getPost();
    };
    ContentComponent.prototype.postsScrollDown = function () {
        this.getPost();
    };
    ContentComponent.prototype.getPost = function () {
        var _this = this;
        this.fb.api(this.nextPosts)
            .then(function (res) {
            console.log(res);
            console.log(res.data.length);
            if (res.paging.next && res.paging.next != _this.nextPosts) {
                for (var i = 0; i < res.data.length; i++) {
                    _this.pagePosts.push(res.data[i]);
                }
                _this.nextPosts = res.paging.next;
                console.log(_this.nextPosts);
                console.log(_this.pagePosts);
            }
        })
            .catch(function (err) {
            console.log(err);
        });
    };
    ContentComponent.prototype.login = function () {
        var _this = this;
        this.fb.login(this.options)
            .then(function (response) {
            console.log('Logged in', response);
            _this.fb.api('/me?fields=id,name,email')
                .then(function (res) {
                console.log('res: ', res);
                _this.email = res.email;
            });
            console.log('res: ', _this.authResponse);
        })
            .catch(function (e) { return console.error('Error logging in'); });
    };
    ContentComponent.prototype.logout = function () {
        this.fb.logout().then(function () { return console.log('Logged out!'); });
    };
    return ContentComponent;
}());
ContentComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-content',
        template: __webpack_require__("../../../../../src/app/core/sections/content/content.component.html"),
        styles: [__webpack_require__("../../../../../src/app/core/sections/content/content.component.css")],
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_19" /* ViewEncapsulation */].Emulated
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ngx_facebook__["b" /* FacebookService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ngx_facebook__["b" /* FacebookService */]) === "function" && _a || Object])
], ContentComponent);

var _a;
//# sourceMappingURL=content.component.js.map

/***/ }),

/***/ "../../../../../src/app/core/sections/contributors/contributors.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".header {\r\n    color: #fff;\r\n  }\r\n  .fa {\r\n    margin-left: 5px;\r\n  }\r\n\r\n  div.contributors {\r\n    margin-right: 2px;\r\n  }\r\n\r\n  div.user {\r\n    background-color: white;\r\n    padding: 3px;\r\n    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\r\n    margin-bottom: 5px;\r\n    display: inline-block;\r\n  }\r\n\r\n  div.container {\r\n    text-align: center;\r\n    padding: 5px;\r\n  }\r\n  div.contributors {\r\n    max-width: 1200px;\r\n    margin: auto;\r\n  }\r\n  @media only screen and (min-width: 768px) {\r\n    /* For desktop: */\r\n    div.contributors .user {\r\n      width: 10%;\r\n    }\r\n  }\r\n  @media only screen and (max-width: 768px) {\r\n    /* For small device: */\r\n    div.contributors .user {\r\n      width: 20%\r\n    }\r\n  }\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/core/sections/contributors/contributors.component.html":
/***/ (function(module, exports) {

module.exports = "<h1 class=\"header\">\r\n  <i class=\"fa fa-github\" aria-hidden=\"true\"></i> Contributors \r\n</h1>\r\n<div class=\"contributors\">\r\n    <div class=\"user rounded\" *ngFor=\"let user of contributors; let i = index\">\r\n      <img class=\"rounded-circle\" [src]=\"user.avatar_url\">\r\n      <div class=\"container\">\r\n        <a [href]=\"user.html_url\" target=\"_blank\">{{user.login}}</a>\r\n      </div>\r\n    </div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/core/sections/contributors/contributors.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContributorsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ContributorsComponent = (function () {
    function ContributorsComponent(http) {
        this.http = http;
        this.username = 'wejustdevelop';
        this.repo = 'website';
    }
    ContributorsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.http.get("https://api.github.com/repos/" + this.username + "/" + this.repo + "/contributors").subscribe(function (data) {
            // List all contributors of 'website' repository
            _this.contributors = data;
            console.log(_this.contributors);
        });
    };
    return ContributorsComponent;
}());
ContributorsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-contributors',
        template: __webpack_require__("../../../../../src/app/core/sections/contributors/contributors.component.html"),
        styles: [__webpack_require__("../../../../../src/app/core/sections/contributors/contributors.component.css")],
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_19" /* ViewEncapsulation */].Emulated
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]) === "function" && _a || Object])
], ContributorsComponent);

var _a;
//# sourceMappingURL=contributors.component.js.map

/***/ }),

/***/ "../../../../../src/app/faq/faq.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/faq/faq.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  faq works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/faq/faq.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FaqComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FaqComponent = (function () {
    function FaqComponent() {
    }
    FaqComponent.prototype.ngOnInit = function () {
    };
    return FaqComponent;
}());
FaqComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-faq',
        template: __webpack_require__("../../../../../src/app/faq/faq.component.html"),
        styles: [__webpack_require__("../../../../../src/app/faq/faq.component.css")]
    }),
    __metadata("design:paramtypes", [])
], FaqComponent);

//# sourceMappingURL=faq.component.js.map

/***/ }),

/***/ "../../../../../src/app/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"top-content\">\n  <div class=\"container\">\n    <app-content></app-content>\n  </div>\n</div>\n\n<app-sidebar></app-sidebar>\n\n<div id=\"fb-root\"></div>\n<script>(function(d, s, id) {\n    var js, fjs = d.getElementsByTagName(s)[0];\n    if (d.getElementById(id)) return;\n    js = d.createElement(s); js.id = id;\n    js.src = 'https://connect.facebook.net/en_GB/sdk.js#xfbml=1&version=v2.10';\n    fjs.parentNode.insertBefore(js, fjs);\n  }\n  (document, 'script', 'facebook-jssdk'));\n</script>"

/***/ }),

/***/ "../../../../../src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-home',
        template: __webpack_require__("../../../../../src/app/home/home.component.html"),
        styles: [__webpack_require__("../../../../../src/app/home/home.component.css")]
    }),
    __metadata("design:paramtypes", [])
], HomeComponent);

//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ "../../../../../src/app/jobs/jobs.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/jobs/jobs.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  jobs works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/jobs/jobs.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JobsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var JobsComponent = (function () {
    function JobsComponent() {
    }
    JobsComponent.prototype.ngOnInit = function () {
    };
    return JobsComponent;
}());
JobsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-jobs',
        template: __webpack_require__("../../../../../src/app/jobs/jobs.component.html"),
        styles: [__webpack_require__("../../../../../src/app/jobs/jobs.component.css")]
    }),
    __metadata("design:paramtypes", [])
], JobsComponent);

//# sourceMappingURL=jobs.component.js.map

/***/ }),

/***/ "../../../../../src/app/network/network.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/network/network.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  network works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/network/network.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NetworkComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NetworkComponent = (function () {
    function NetworkComponent() {
    }
    NetworkComponent.prototype.ngOnInit = function () {
    };
    return NetworkComponent;
}());
NetworkComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-network',
        template: __webpack_require__("../../../../../src/app/network/network.component.html"),
        styles: [__webpack_require__("../../../../../src/app/network/network.component.css")]
    }),
    __metadata("design:paramtypes", [])
], NetworkComponent);

//# sourceMappingURL=network.component.js.map

/***/ }),

/***/ "../../../../../src/app/not-found/not-found.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/not-found/not-found.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  not-found works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/not-found/not-found.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotFoundComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NotFoundComponent = (function () {
    function NotFoundComponent() {
    }
    NotFoundComponent.prototype.ngOnInit = function () {
    };
    return NotFoundComponent;
}());
NotFoundComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-not-found',
        template: __webpack_require__("../../../../../src/app/not-found/not-found.component.html"),
        styles: [__webpack_require__("../../../../../src/app/not-found/not-found.component.css")]
    }),
    __metadata("design:paramtypes", [])
], NotFoundComponent);

//# sourceMappingURL=not-found.component.js.map

/***/ }),

/***/ "../../../../../src/app/shared/sections/footer/footer.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shared/sections/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n\t<div class=\"row\">\r\n\r\n\t\t<div class=\"col-sm-8 offset-sm-2\">\r\n\t\t\t<div class=\"footer-border\"></div>\r\n\t\t\t<div class=\"fb-page\" data-href=\"https://www.facebook.com/wejustdevelop\" data-tabs=\"timeline\" data-small-header=\"false\" data-adapt-container-width=\"true\" data-hide-cover=\"false\" data-show-facepile=\"true\"><blockquote cite=\"https://www.facebook.com/wejustdevelop\" class=\"fb-xfbml-parse-ignore\"><a href=\"https://www.facebook.com/wejustdevelop\">Wejustdevelop</a></blockquote></div>\r\n\t\t\t<p class=\"m-0 text-center\" style=\"color: white;\">Copyright &copy; WeJustDevelop 2017</p>\r\n\t\t</div>\r\n\r\n\t</div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/shared/sections/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    return FooterComponent;
}());
FooterComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-footer',
        template: __webpack_require__("../../../../../src/app/shared/sections/footer/footer.component.html"),
        styles: [__webpack_require__("../../../../../src/app/shared/sections/footer/footer.component.css")],
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_19" /* ViewEncapsulation */].Emulated
    }),
    __metadata("design:paramtypes", [])
], FooterComponent);

//# sourceMappingURL=footer.component.js.map

/***/ }),

/***/ "../../../../../src/app/shared/sections/header/header.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shared/sections/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\r\n  header works!\r\n</p>\r\n"

/***/ }),

/***/ "../../../../../src/app/shared/sections/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderComponent = (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    return HeaderComponent;
}());
HeaderComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-header',
        template: __webpack_require__("../../../../../src/app/shared/sections/header/header.component.html"),
        styles: [__webpack_require__("../../../../../src/app/shared/sections/header/header.component.css")],
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_19" /* ViewEncapsulation */].Emulated
    }),
    __metadata("design:paramtypes", [])
], HeaderComponent);

//# sourceMappingURL=header.component.js.map

/***/ }),

/***/ "../../../../../src/app/shared/sections/navigation/navigation.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#mainNav {\r\n  background-color: #fdfeff; }\r\n  #mainNav .navbar-toggler {\r\n    font-size: 12px;\r\n    right: 0;\r\n    padding: 13px;\r\n    text-transform: uppercase;\r\n    color: white;\r\n    border: 0;\r\n    background-color: #fed136;\r\n    font-family: 'Montserrat', 'Helvetica Neue', Helvetica, Arial, sans-serif; }\r\n  #mainNav .navbar-brand {\r\n    color: #fed136;\r\n    font-family: 'Kaushan Script', 'Helvetica Neue', Helvetica, Arial, cursive; }\r\n    #mainNav .navbar-brand.active, #mainNav .navbar-brand:active, #mainNav .navbar-brand:focus, #mainNav .navbar-brand:hover {\r\n      color: #fec503; }\r\n  #mainNav .navbar-nav .nav-item .nav-link {\r\n    font-size: 90%;\r\n    font-weight: 400;\r\n    padding: 0.75em 0;\r\n    letter-spacing: 1px;\r\n    color: white;\r\n    font-family: 'Montserrat', 'Helvetica Neue', Helvetica, Arial, sans-serif; }\r\n    #mainNav .navbar-nav .nav-item .nav-link.active, #mainNav .navbar-nav .nav-item .nav-link:hover {\r\n      color: #fed136; }\r\n\r\n@media (min-width: 992px) {\r\n  #mainNav {\r\n    padding-top: 25px;\r\n    padding-bottom: 25px;\r\n    transition: padding-top 0.3s, padding-bottom 0.3s;\r\n    border: none;\r\n    background-color: transparent; }\r\n    #mainNav .navbar-brand {\r\n      font-size: 1.75em;\r\n      transition: all 0.3s; }\r\n    #mainNav .navbar-nav .nav-item .nav-link {\r\n      padding: 1.1em 1em !important; }\r\n    #mainNav.navbar-shrink {\r\n      padding-top: 0;\r\n      padding-bottom: 0;\r\n      background-color: #ffffff; }\r\n      #mainNav.navbar-shrink .navbar-brand {\r\n        color: #f3a5e4;\r\n        font-size: 1.25em;\r\n        padding: 12px 0; } }\r\n        #mainNav.navbar-shrink .navbar-nav .nav-item .nav-link {\r\n            color: #f3a5e4;\r\n        }\r\n        #mainNav.navbar-shrink .navbar-nav .nav-item .nav-link:hover {\r\n            color: #eb16c4;\r\n        }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shared/sections/navigation/navigation.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Navigation -->\r\n<nav class=\"navbar navbar-expand-lg navbar-dark fixed-top\" id=\"mainNav\">    \r\n    <div class=\"container\">\r\n      <a class=\"navbar-brand js-scroll-trigger\" href=\"#page-top\">WeJustDevelop</a>\r\n      <button class=\"navbar-toggler navbar-toggler-right\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarResponsive\" aria-controls=\"navbarResponsive\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n        Menu\r\n        <i class=\"fa fa-bars\"></i>\r\n      </button>\r\n      <div class=\"collapse navbar-collapse\" id=\"navbarResponsive\">\r\n        <ul class=\"navbar-nav text-uppercase ml-auto\">\r\n          <li class=\"nav-item\">\r\n            <a class=\"nav-link js-scroll-trigger\" href=\"/\">Home</a>\r\n          </li>\r\n          <li class=\"nav-item\">\r\n            <a class=\"nav-link js-scroll-trigger\" href=\"/jobs\">Jobs</a>\r\n          </li>\r\n          <li class=\"nav-item\">\r\n            <a class=\"nav-link js-scroll-trigger\" href=\"/network\">Network</a>\r\n          </li>\r\n          <li class=\"nav-item\">\r\n            <a class=\"nav-link js-scroll-trigger\" href=\"/about-us\">About Us</a>\r\n          </li>\r\n          <li class=\"nav-item\">\r\n            <a class=\"nav-link js-scroll-trigger\" href=\"/contact-us\">Contact Us</a>\r\n          </li>\r\n          <li class=\"nav-item\">\r\n            <a class=\"nav-link js-scroll-trigger\" href=\"/faq\">FAQ</a>\r\n          </li>\r\n        </ul>\r\n      </div>\r\n    </div>\r\n</nav>"

/***/ }),

/***/ "../../../../../src/app/shared/sections/navigation/navigation.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavigationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavigationComponent = (function () {
    function NavigationComponent() {
    }
    NavigationComponent.prototype.ngOnInit = function () {
    };
    return NavigationComponent;
}());
NavigationComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-navigation',
        template: __webpack_require__("../../../../../src/app/shared/sections/navigation/navigation.component.html"),
        styles: [__webpack_require__("../../../../../src/app/shared/sections/navigation/navigation.component.css")],
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_19" /* ViewEncapsulation */].Emulated
    }),
    __metadata("design:paramtypes", [])
], NavigationComponent);

//# sourceMappingURL=navigation.component.js.map

/***/ }),

/***/ "../../../../../src/app/shared/sections/sidebar/sidebar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".header {\r\n  color: #fff;\r\n}\r\n.fa {\r\n  margin-left: 5px;\r\n}\r\n.sidebar .repositories li {\r\n  list-style: none;\r\n}\r\n.sidebar .repositories li a {\r\n  color: #fff;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shared/sections/sidebar/sidebar.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"sidebar\">\r\n  <h1 class=\"header\"><i class=\"fa fa-github\" aria-hidden=\"true\"></i> wejustdevelop repositories</h1>\r\n  <div class=\"repositories\">\r\n    <li *ngFor=\"let repo of repositories; let i = index\">\r\n      <a href=\"{{ repo.html_url }}\" target=\"_blank\"><i class=\"fa fa-arrow-right\" aria-hidden=\"true\"></i> {{ repo.name }}</a>\r\n    </li>\r\n  </div>\r\n\r\n  <app-contributors></app-contributors>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/shared/sections/sidebar/sidebar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SidebarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SidebarComponent = (function () {
    function SidebarComponent(http) {
        this.http = http;
        this.username = 'wejustdevelop';
    }
    SidebarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.http.get('https://api.github.com/users/' + this.username + '/repos').subscribe(function (data) {
            // Read the result field from the JSON response.
            _this.repositories = data;
        });
    };
    return SidebarComponent;
}());
SidebarComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-sidebar',
        template: __webpack_require__("../../../../../src/app/shared/sections/sidebar/sidebar.component.html"),
        styles: [__webpack_require__("../../../../../src/app/shared/sections/sidebar/sidebar.component.css")],
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_19" /* ViewEncapsulation */].Emulated
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]) === "function" && _a || Object])
], SidebarComponent);

var _a;
//# sourceMappingURL=sidebar.component.js.map

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
    production: false,
    appId: 'your_api_id',
    appSecret: 'your_api_secret'
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