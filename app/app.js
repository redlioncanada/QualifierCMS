System.register(['angular2/platform/browser', 'angular2/http', './services/logger.service', './services/googleapi.service', 'angular2/core'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var browser_1, http_1, logger_service_1, googleapi_service_1, core_1;
    var AppComponent;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (logger_service_1_1) {
                logger_service_1 = logger_service_1_1;
            },
            function (googleapi_service_1_1) {
                googleapi_service_1 = googleapi_service_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            //import {VideoPlayer} from './landing.video-player';
            AppComponent = (function () {
                function AppComponent(http) {
                    var _this = this;
                    this.http = http;
                    this.http.get('http://findmy.maytag.ca/config/maytag-en_CA.json').subscribe(function (res) {
                        _this.dataSnap = res.json();
                        console.log("first = : " + _this.dataSnap);
                        _this.setFire(_this.dataSnap);
                    });
                }
                AppComponent.prototype.setFire = function (d) {
                    var headers = new http_1.Headers();
                    headers.append('Content-Type', 'application/json');
                    var tmpStr = 'data=' + (JSON.stringify(d));
                    this.http.post('save.php', tmpStr)
                        .subscribe(function (res) {
                        console.log(res);
                    }, function () { return console.log('Authentication Complete'); });
                    this.appName = "Basic Firebase App";
                    this.firebaseUrl = "https://luminous-inferno-5792.firebaseio.com/restore";
                    this.messagesRef = new Firebase(this.firebaseUrl);
                    console.log("second = : " + d);
                    this.messagesRef.push(d);
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'main-app',
                        providers: [http_1.HTTP_PROVIDERS],
                        template: "\n\t<!-- Put your HTML HERE -->\n\t<h1>{{appName}}</h1>\n\t",
                        directives: []
                    }), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], AppComponent);
                return AppComponent;
            }());
            browser_1.bootstrap(AppComponent, [http_1.HTTP_PROVIDERS, logger_service_1.Logger, googleapi_service_1.GoogleApi]);
        }
    }
});
//# sourceMappingURL=app.js.map