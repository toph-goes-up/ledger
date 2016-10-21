"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent.prototype.ngAfterViewInit = function () {
        $(document).ready(function () {
            console.log('App is loaded');
            $('body').trigger('App-Loaded');
        });
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'ledger-app',
            template: "<section class='container'>\n       <aside class='payeepic'>\n        <img src='./img/nerd.svg'>\n       </aside>\n       <article class='bill'>\n         <h1>Internet</h1>\n         <div class='billmid'>\n           <span class='amount'>$80.80</span>\n           to\n           <span class='payee'>Ryan</span>\n         </div>\n         <table class='dates'>\n           <tr>\n             <td>open:</td><td>due:</td>\n           </tr>\n           <tr>\n             <td>10/10/1010</td><td>20/20/2020</td>\n           </tr>\n         </table>\n       </article>\n       <ul class='paytiles'>\n         <li class=\"paytile\"><img src='img/faceicon.png'></li>\n         <li class=\"paytile\"><img src='img/elmomouth.svg'></li>\n         <li class=\"paytile\"><img src='img/koala.svg'></li>\n       </ul>\n     </section>"
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map