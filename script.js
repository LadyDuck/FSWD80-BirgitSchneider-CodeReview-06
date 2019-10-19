var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Locations = /** @class */ (function () {
    function Locations(name, city, zipCode, adress, img, date, add, add2) {
        if (add === void 0) { add = ""; }
        if (add2 === void 0) { add2 = ""; }
        this.name = name;
        this.city = city;
        this.zipCode = zipCode;
        this.adress = adress;
        this.img = img;
        this.date = date;
        this.add = add;
        this.add2 = add2;
    }
    Locations.prototype.display = function () {
        var display = "<div class =\"col-lg-3 col-md-6 col-sm-12 mb-4\">\n       \t\t\t \t\t<div class=\"card h-100\">\n\t          \t\t\t\t<div class=\"card-header h5 text-center\">"
            + this.name +
            "</div>\n          \t\t\t\t\t<img src=\"" + this.img + "\" class='card-img-top d-none d-sm-block'>\n          \t\t\t\t\t\t<div class=\"card-body h-100\">\n\t\t\t\t            \t\t<p class=\"card-text\">" + this.adress + ",</p><p>" + this.zipCode + this.city + "</p>\n\t\t\t\t            \t\t<p class=\"card-text\"><small class=\"text-muted\">Created: " + this.date + "</small></p>\n\t\t\t\t            \t\t<a href=\"#\" class=\"stretched-link\">Read more ...</a>\n          \t\t\t\t\t\t</div>\n        \t\t\t\t\t</div>\n      \t\t\t\t\t</div>";
        return display;
    };
    ;
    return Locations;
}());
;
var Restaurant = /** @class */ (function (_super) {
    __extends(Restaurant, _super);
    function Restaurant(name, city, zipCode, adress, img, date, tel, type, web) {
        var _this = _super.call(this, name, city, zipCode, adress, img, date) || this;
        _this.tel = tel;
        _this.type = type;
        _this.web = web;
        return _this;
    }
    Restaurant.prototype.displayRestaurant = function () {
        var displayRestaurant = "<div class =\"col-lg-3 col-md-6 col-sm-12 mb-4\">\n       \t\t\t \t\t\t\t<div class=\"card\">\n\t          \t\t\t\t\t\t<div class=\"card-header h5 text-center\">"
            + this.name +
            "</div>\n          \t\t\t\t\t\t\t<img src=\"" + this.img + "\" class=\"card-img-top d-none d-sm-block\" alt= \"" + this.name + "\"\">\n          \t\t\t\t\t\t\t<div class=\"card-body h-100\">\n\t\t\t            \t\t\t\t<p class=\"card-text\">" + this.adress + ",</p><p>" + this.zipCode + this.city + "</p>\n\t\t\t            \t\t\t\t<p>" + this.web + "</p>\n\t\t\t            \t\t\t\t<p class=\"card-text\"><small class=\"text-muted\">Created: " + this.date + "</small></p>\n\t\t\t            \t\t\t\t<a href=\"#\" class=\"stretched-link\">Read more ...</a>\n          \t\t\t\t\t\t\t</div>\n        \t\t\t\t\t\t</div>\n      \t\t\t\t\t\t</div>";
        return displayRestaurant;
    };
    ;
    return Restaurant;
}(Locations));
;
var Events = /** @class */ (function (_super) {
    __extends(Events, _super);
    function Events(name, city, zipCode, adress, img, date, eventDate, eventTime, ticketPrice) {
        var _this = _super.call(this, name, city, zipCode, adress, img, date) || this;
        _this.eventDate = eventDate;
        _this.eventTime = eventTime;
        _this.ticketPrice = ticketPrice;
        return _this;
    }
    Events.prototype.displayEvents = function () {
        var displayEvents = "<div class =\"col-lg-3 col-md-6 col-sm-12 mb-4\">\n        \t\t\t\t\t\t<div class=\"card\">\n         \t\t\t\t\t\t\t<div class=\"card-header h5 text-center\">\n          \t\t\t\t\t\t\t" + this.name + "\n          \t\t\t\t\t\t\t</div>\n          \t\t\t\t\t\t\t<img src=\"" + this.img + "\" class=\"card-img-top d-none d-sm-block\" style = \"width: 250px;\">\n          \t\t\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t\t            <p class=\"card-text\">" + this.eventDate + "," + this.eventTime + " Uhr</p>\n\t\t\t\t\t\t\t            <p class=\"card-text\">" + this.adress + ",</p><p>" + this.zipCode + this.city + "</p>\n\t\t\t\t\t\t\t            <p class=\"card-text\"><small class=\"text-muted\">Created: " + this.date + "</small></p>\n\t\t\t\t\t\t\t            <p><a href=\"#\" class=\"stretched-link\">Read more ...</a></p>\n\t\t\t\t\t\t          \t</div>\n\t\t\t\t\t\t        </div>\n\t\t\t\t\t\t     </div>";
        return displayEvents;
    };
    return Events;
}(Locations));
// Array anlegen:
var locationList = [];
// Instanzen anlegen:
var karlsplatz = new Locations("St. Charles Church", " Vienna", 1010, "Karlsplatz 1", "img/karlskirche.jpg", "13.10.2019");
var schoenbrunn = new Locations("Schönbrunn", " Vienna", 1130, "Maxingstraße 13b", "img/sbrunn.jpg", "15.10.2019");
var cafe = new Restaurant("Josephs", " Vienna", 1070, "Kirchengasse 3", "img/caffe.jpg", "16.10.2019", "+43 1 74 67 456", "Cafe", "www.josephs-pheinstes.at");
var sixta = new Restaurant("Sixta", " Vienna", 1050, "Schönbrunner Straße 21", "img/sixta.png", "17.10.2019", "+43 1 58 528 56 | + 43 1 58 528 56", "Viennese", "http://www.sixta-restaurant.at");
var kravits = new Events("Lenny Kravits", " Vienna", 1150, "Wiener Stadthalle - Halle D, Roland Rainer Platz 1", "img/lenny.jpg", "24.10.2019", "Sat, 09.12.19", "19:30", "90 EUR");
var chris = new Events("Dieter Bohlen", " Vienna", 1150, "Wiener Stadthalle - Halle D, Roland Rainer Platz 1", "img/bohlen1.jpg", "24.10.2019", "Sat, 16.12.19", "19:30", "90 EUR");
// Klassen ins Array pushen:
locationList.push(chris, kravits, sixta, cafe, schoenbrunn, karlsplatz);
console.log(locationList);
var buffer = "";
for (var i = locationList.length - 1; i >= 0; i--) {
    if (i <= 1) {
        buffer += locationList[i].displayEvents();
    }
    else if (i <= 3 && i >= 2) {
        buffer += locationList[i].displayRestaurant();
    }
    else {
        buffer += locationList[i].display();
    }
}
document.getElementById("locations").innerHTML = buffer;
