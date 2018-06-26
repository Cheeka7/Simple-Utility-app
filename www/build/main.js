webpackJsonp([2],{

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddNotePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_note_service_note_service__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AddNotePage = /** @class */ (function () {
    function AddNotePage(navCtrl, NoteService) {
        this.navCtrl = navCtrl;
        this.NoteService = NoteService;
        this.date = new Date();
        this.title = '';
        this.content = '';
        this.formGroup = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormGroup */]({
            title: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormControl */](),
            content: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormControl */](),
            date: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormControl */](),
        });
    }
    AddNotePage.prototype.saveNote = function (note) {
        this.NoteService.saveNote(note);
        this.navCtrl.pop();
    };
    AddNotePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-add-note',template:/*ion-inline-start:"/Users/sreekanthnathan/Documents/GitHub/simple-utility/src/pages/notes/add-note/add-note.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Add Note</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <form [formGroup]="formGroup" (ngSubmit)="saveNote(formGroup.value)">\n    <ion-item>\n      <ion-label>Date</ion-label>\n      <ion-datetime displayFormat="MM/DD/YYYY" formControlName="date"></ion-datetime>\n    </ion-item>\n    <ion-item>\n      <ion-label>Title</ion-label>\n      <ion-input type="text" name="title" formControlName="title" required></ion-input>\n      <div class="alert" *ngIf="!formGroup.controls[\'title\'].valid\n        && formGroup.controls[\'title\'].touched">{{ titleAlert }}</div>\n    </ion-item>\n    <ion-item>\n      <ion-label>Note</ion-label>\n      <ion-input type="text" name="content" formControlName="content" required></ion-input>\n      <div class="alert" *ngIf="!formGroup.controls[\'content\'].valid\n        && formGroup.controls[\'content\'].touched">{{ contentAlert }}</div>\n    </ion-item>\n    <div class="save-container">\n      <button class="save-button" ion-button type="submit" [disabled]="!formGroup.valid">Save Note</button>\n    </div>\n  </form>\n</ion-content>\n'/*ion-inline-end:"/Users/sreekanthnathan/Documents/GitHub/simple-utility/src/pages/notes/add-note/add-note.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_note_service_note_service__["a" /* NoteService */]])
    ], AddNotePage);
    return AddNotePage;
}());

//# sourceMappingURL=add-note.js.map

/***/ }),

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewNotePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_note_service_note_service__ = __webpack_require__(46);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ViewNotePage = /** @class */ (function () {
    function ViewNotePage(navCtrl, navParams, noteService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.noteService = noteService;
        this.note = this.navParams.get('note');
    }
    ViewNotePage.prototype.deleteNote = function (createDate) {
        this.noteService.deleteNote(createDate);
        this.navCtrl.pop();
    };
    ViewNotePage.prototype.updateNote = function (note) {
        this.noteService.updateNote(this.note);
        this.navCtrl.pop();
    };
    ViewNotePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-view-note',template:/*ion-inline-start:"/Users/sreekanthnathan/Documents/GitHub/simple-utility/src/pages/notes/view-note/view-note.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>view-note</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding>\n  <div class="top-container">\n    <div class="delete">\n      <ion-icon name="ios-trash-outline" (click)="deleteNote(note.createDate)"></ion-icon>\n    </div>\n    <div class="save">\n      <ion-icon name="ios-checkmark-circle-outline" (click)="updateNote(note)"></ion-icon>\n    </div>\n  </div>\n  <ion-card>\n    <ion-card-content>\n      <ion-card-title>\n        {{ note.title }}\n      </ion-card-title>\n      <div class="note-date">{{ note.date }}</div>\n      <hr />\n      <div><textarea class="input-text" [(ngModel)] = \'note.content\'></textarea></div>\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n'/*ion-inline-end:"/Users/sreekanthnathan/Documents/GitHub/simple-utility/src/pages/notes/view-note/view-note.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_note_service_note_service__["a" /* NoteService */]])
    ], ViewNotePage);
    return ViewNotePage;
}());

//# sourceMappingURL=view-note.js.map

/***/ }),

/***/ 113:
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
webpackEmptyAsyncContext.id = 113;

/***/ }),

/***/ 154:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/notes/add-note/add-note.module": [
		281,
		1
	],
	"../pages/notes/view-note/view-note.module": [
		282,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 154;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__intro_intro__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__countdown_countdown__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__notes_home_home__ = __webpack_require__(201);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TabsPage = /** @class */ (function () {
    function TabsPage() {
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_1__intro_intro__["a" /* IntroPage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_2__countdown_countdown__["a" /* CountdownPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_3__notes_home_home__["a" /* HomePage */];
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/sreekanthnathan/Documents/GitHub/simple-utility/src/pages/tabs/tabs.html"*/'<ion-tabs>\n  <ion-tab [root]="tab1Root" tabTitle="Intro" tabIcon="heart"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="Countdown" tabIcon="timer"></ion-tab>\n  <ion-tab [root]="tab3Root" tabTitle="Notes" tabIcon="clipboard"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"/Users/sreekanthnathan/Documents/GitHub/simple-utility/src/pages/tabs/tabs.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IntroPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var IntroPage = /** @class */ (function () {
    function IntroPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    IntroPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-intro',template:/*ion-inline-start:"/Users/sreekanthnathan/Documents/GitHub/simple-utility/src/pages/intro/intro.html"*/'\n<ion-header>\n  <ion-navbar>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <p class="intro-text"> Welcome to the simple Utility app </p>\n</ion-content>\n'/*ion-inline-end:"/Users/sreekanthnathan/Documents/GitHub/simple-utility/src/pages/intro/intro.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
    ], IntroPage);
    return IntroPage;
}());

//# sourceMappingURL=intro.js.map

/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CountdownPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_local_notifications__ = __webpack_require__(102);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CountdownPage = /** @class */ (function () {
    function CountdownPage(navCtrl, localNotifications, platform, alertCtrl) {
        this.navCtrl = navCtrl;
        this.localNotifications = localNotifications;
        this.platform = platform;
        this.alertCtrl = alertCtrl;
    }
    CountdownPage.prototype.ngOnInit = function () {
        var _this = this;
        var timer;
        var compareDate = new Date("2018-12-12");
        setInterval(function () { return _this.timeBetweenDates(compareDate); }, 1000);
    };
    CountdownPage.prototype.timeBetweenDates = function (toDate) {
        var dateEntered = toDate;
        var now = new Date();
        this.difference = dateEntered.getTime() - now.getTime();
        if (this.difference <= 0) {
            return;
            // Timer done
            // clearInterval(timer);
        }
        else {
            this.seconds = Math.floor(this.difference / 1000);
            this.minutes = Math.floor(this.seconds / 60);
            this.hours = Math.floor(this.minutes / 60);
            this.days = Math.floor(this.hours / 24);
            this.hours %= 24;
            this.minutes %= 60;
            this.seconds %= 60;
        }
    };
    CountdownPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-countdown',template:/*ion-inline-start:"/Users/sreekanthnathan/Documents/GitHub/simple-utility/src/pages/countdown/countdown.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Countdown\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <div class="timer" *ngIf="difference > 0">\n    <span>{{days}}</span>days\n    <span>{{hours}}</span>hrs\n    <span>{{minutes}}</span>mins\n    <span>{{seconds}}</span>secs\n  </div>\n\n  <div class="timer timer-over" *ngIf="difference <= 0">\n    Game over!\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/sreekanthnathan/Documents/GitHub/simple-utility/src/pages/countdown/countdown.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_local_notifications__["a" /* LocalNotifications */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], CountdownPage);
    return CountdownPage;
}());

//# sourceMappingURL=countdown.js.map

/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__add_note_add_note__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_note_service_note_service__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__view_note_view_note__ = __webpack_require__(104);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, noteService) {
        this.navCtrl = navCtrl;
        this.noteService = noteService;
    }
    HomePage.prototype.ionViewWillEnter = function () {
        this.notes = this.getAllNotes();
    };
    HomePage.prototype.addNote = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__add_note_add_note__["a" /* AddNotePage */]);
    };
    HomePage.prototype.getNote = function (createDate) {
        var _this = this;
        this.noteService.getNote(createDate).then(function (n) {
            _this.note = n;
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__view_note_view_note__["a" /* ViewNotePage */], { note: _this.note });
        });
    };
    HomePage.prototype.getAllNotes = function () {
        return this.noteService.getAllNotes();
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/sreekanthnathan/Documents/GitHub/simple-utility/src/pages/notes/home/home.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Notes\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <div class="add">\n    <ion-icon name="ios-add-circle-outline" (click)="addNote()" ></ion-icon>\n  </div>\n  <ion-list>\n    <button ion-item *ngFor="let note of notes | async" (click)="getNote(note.createDate)">\n      <span class="date">{{ note.date | date}}</span>\n      {{ note.title }}\n    </button>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/sreekanthnathan/Documents/GitHub/simple-utility/src/pages/notes/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_3__providers_note_service_note_service__["a" /* NoteService */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(225);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 225:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(271);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_countdown_countdown__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_notes_notes__ = __webpack_require__(280);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_intro_intro__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_notes_home_home__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_notes_add_note_add_note__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_note_service_note_service__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_storage__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_notes_view_note_view_note__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_status_bar__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_splash_screen__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_native_local_notifications__ = __webpack_require__(102);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_countdown_countdown__["a" /* CountdownPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_notes_notes__["a" /* NotesPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_intro_intro__["a" /* IntroPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_notes_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_notes_add_note_add_note__["a" /* AddNotePage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_notes_view_note_view_note__["a" /* ViewNotePage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/notes/add-note/add-note.module#AddNotePageModule', name: 'AddNotePage', segment: 'add-note', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/notes/view-note/view-note.module#ViewNotePageModule', name: 'ViewNotePage', segment: 'view-note', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_11__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_countdown_countdown__["a" /* CountdownPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_notes_notes__["a" /* NotesPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_intro_intro__["a" /* IntroPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_notes_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_notes_add_note_add_note__["a" /* AddNotePage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_notes_view_note_view_note__["a" /* ViewNotePage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_13__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_14__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_10__providers_note_service_note_service__["a" /* NoteService */],
                __WEBPACK_IMPORTED_MODULE_15__ionic_native_local_notifications__["a" /* LocalNotifications */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 271:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_local_notifications__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_tabs_tabs__ = __webpack_require__(198);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen, localNotifications, alertCtrl) {
        this.localNotifications = localNotifications;
        this.alertCtrl = alertCtrl;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_tabs_tabs__["a" /* TabsPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp.prototype.ngOnInit = function () {
        var _this = this;
        setInterval(function () { return _this.timeBetweenDates(); }, 1000);
    };
    MyApp.prototype.timeBetweenDates = function () {
        var dateEntered = new Date("2019-01-01");
        var now = new Date();
        this.difference = dateEntered.getTime() - now.getTime();
        this.seconds = Math.floor(this.difference / 1000);
        this.minutes = Math.floor(this.seconds / 60);
        this.hours = Math.floor(this.minutes / 60);
        this.days = Math.floor(this.hours / 24);
        var targetSeconds = now.getSeconds();
        var targetMinutes = now.getMinutes();
        var targetHour = now.getHours();
        if (this.days === 150 || this.days === 100 || this.days == 75 || this.days === 50 || this.days === 25 || this.days === 10) {
            if (targetHour == 10 && targetMinutes == 33 && targetSeconds == 0) {
                this.notification(this.days);
            }
        }
    };
    MyApp.prototype.notification = function (days) {
        var _this = this;
        this.localNotifications.requestPermission().then(function (permission) {
            _this.localNotifications.schedule({
                id: 1,
                text: 'Countdown!!!',
                led: 'FF0000',
            });
            var alert = _this.alertCtrl.create({
                title: 'Countdown!!',
                subTitle: days + ' days to go!',
                buttons: ['Yayyy']
            });
            alert.present();
        });
    };
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/sreekanthnathan/Documents/GitHub/simple-utility/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/sreekanthnathan/Documents/GitHub/simple-utility/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_local_notifications__["a" /* LocalNotifications */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 280:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NotesPage = /** @class */ (function () {
    function NotesPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    NotesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-notes',template:/*ion-inline-start:"/Users/sreekanthnathan/Documents/GitHub/simple-utility/src/pages/notes/home/home.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Notes\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <div class="add">\n    <ion-icon name="ios-add-circle-outline" (click)="addNote()" ></ion-icon>\n  </div>\n  <ion-list>\n    <button ion-item *ngFor="let note of notes | async" (click)="getNote(note.createDate)">\n      <span class="date">{{ note.date | date}}</span>\n      {{ note.title }}\n    </button>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/sreekanthnathan/Documents/GitHub/simple-utility/src/pages/notes/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
    ], NotesPage);
    return NotesPage;
}());

//# sourceMappingURL=notes.js.map

/***/ }),

/***/ 46:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NoteService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_storage__ = __webpack_require__(155);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NoteService = /** @class */ (function () {
    function NoteService(storage) {
        this.storage = storage;
        this.notes = [];
    }
    NoteService.prototype.saveNote = function (note) {
        note.createDate = Date.now();
        this.notes.push(note);
        this.storage.set('notes', this.notes);
    };
    NoteService.prototype.updateNote = function (note) {
        this.notes = this.notes.filter(function (n) {
            return n.createDate !== note.createDate;
        });
        this.notes.push(note);
        this.storage.set('notes', this.notes);
    };
    NoteService.prototype.getAllNotes = function () {
        var _this = this;
        return this.storage.get('notes').then(function (notes) {
            _this.notes = notes == null ? [] : notes;
            return _this.notes.slice();
        });
    };
    NoteService.prototype.getNote = function (createDate) {
        var _this = this;
        return this.storage.get('notes').then(function (notes) {
            _this.note = notes.slice().find(function (r) { return r.createDate === createDate; });
            return _this.note;
        });
    };
    NoteService.prototype.deleteNote = function (createDate) {
        this.notes = this.notes.filter(function (note) {
            return note.createDate !== createDate;
        });
        this.storage.set('notes', this.notes);
    };
    NoteService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_storage__["b" /* Storage */]])
    ], NoteService);
    return NoteService;
}());

//# sourceMappingURL=note-service.js.map

/***/ })

},[202]);
//# sourceMappingURL=main.js.map