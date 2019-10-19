class Locations {
	name: string;
	city: string;
	zipCode: number;
	adress: string;
	img: string;
	date: string;
	add: string;
	add2: string;

constructor(name, city, zipCode, adress, img, date, add = "", add2 = "") {
	this.name = name;
	this.city = city;
	this.zipCode = zipCode;
	this.adress = adress;
	this.img = img; 
	this.date = date;
	this.add = add;
	this.add2 = add2;
}

display() {
	let display = 	`<div class ="col-lg-3 col-md-6 col-sm-12 mb-4">
       			 		<div class="card h-100">
	          				<div class="card-header h5 text-center">` 
	          				+ this.name + 
          					`</div>
          					<img src="` + this.img + `" class='card-img-top d-none d-sm-block'>
          						<div class="card-body h-100">
				            		<p class="card-text">` + this.adress + `,</p><p>` + this.zipCode + this.city + `</p>
				            		<p class="card-text"><small class="text-muted">Created: `+ this.date + `</small></p>
				            		<a href="#" class="stretched-link">Read more ...</a>
          						</div>
        					</div>
      					</div>`

    return display;
};

};


class Restaurant extends Locations {
	tel: "string";
	type: "string";
	web: "string";

	constructor(name, city, zipCode, adress, img, date, tel, type, web) {
		super(name, city, zipCode, adress, img, date);
		this.tel = tel;
		this.type = type;
		this.web = web; 
	}

displayRestaurant() {
	let displayRestaurant = `<div class ="col-lg-3 col-md-6 col-sm-12 mb-4">
       			 				<div class="card">
	          						<div class="card-header h5 text-center">` 
	          						+ this.name + 
          							`</div>
          							<img src="` + this.img + `" class="card-img-top d-none d-sm-block" alt= "` + this.name +`"">
          							<div class="card-body h-100">
			            				<p class="card-text">` + this.adress + `,</p><p>` + this.zipCode + this.city + `</p>
			            				<p>`+ this.web + `</p>
			            				<p class="card-text"><small class="text-muted">Created: `+ this.date + `</small></p>
			            				<a href="#" class="stretched-link">Read more ...</a>
          							</div>
        						</div>
      						</div>`

      	return displayRestaurant;
};
};


class Events extends Locations {
	eventDate: "string";
	eventTime: "string";
	ticketPrice: "string";

	constructor( name, city, zipCode, adress, img, date, eventDate, eventTime, ticketPrice) {
		super(name, city, zipCode, adress, img, date);
		this.eventDate = eventDate;
		this.eventTime = eventTime;
		this.ticketPrice = ticketPrice;

	}

	displayEvents() {
		let displayEvents = `<div class ="col-lg-3 col-md-6 col-sm-12 mb-4">
        						<div class="card">
         							<div class="card-header h5 text-center">
          							`+ this.name + `
          							</div>
          							<img src="` + this.img + `" class="card-img-top d-none d-sm-block" style = "width: 250px;">
          							<div class="card-body">
							            <p class="card-text">` + this.eventDate + `,` + this.eventTime +` Uhr</p>
							            <p class="card-text">` + this.adress + `,</p><p>` + this.zipCode + this.city + `</p>
							            <p class="card-text"><small class="text-muted">Created: `+ this.date + `</small></p>
							            <p><a href="#" class="stretched-link">Read more ...</a></p>
						          	</div>
						        </div>
						     </div>`

		return displayEvents; 
	}
}

// Array anlegen:
let locationList: Array<any> = [];

// Instanzen anlegen:
let karlsplatz = new Locations("St. Charles Church", " Vienna", 1010, "Karlsplatz 1", "img/karlskirche.jpg", "13.10.2019");
let schoenbrunn = new Locations("Schönbrunn", " Vienna", 1130, "Maxingstraße 13b", "img/sbrunn.jpg", "15.10.2019");

let cafe = new Restaurant("Josephs", " Vienna", 1070, "Kirchengasse 3","img/caffe.jpg", "16.10.2019",  "+43 1 74 67 456", "Cafe", "www.josephs-pheinstes.at");
let sixta = new Restaurant ("Sixta", " Vienna", 1050, "Schönbrunner Straße 21", "img/sixta.png", "17.10.2019", "+43 1 58 528 56 | + 43 1 58 528 56", "Viennese", "http://www.sixta-restaurant.at");

let kravits = new Events("Lenny Kravits", " Vienna", 1150, "Wiener Stadthalle - Halle D, Roland Rainer Platz 1", "img/lenny.jpg", "24.10.2019", "Sat, 09.12.19", "19:30", "90 EUR");
let chris = new Events("Dieter Bohlen", " Vienna", 1150, "Wiener Stadthalle - Halle D, Roland Rainer Platz 1", "img/bohlen1.jpg", "24.10.2019", "Sat, 16.12.19", "19:30", "90 EUR");

// Klassen ins Array pushen:

locationList.push(chris, kravits, sixta, cafe, schoenbrunn, karlsplatz);
console.log(locationList);

let buffer = "";
for (var i = locationList.length - 1; i >= 0; i--) {

	if (i <= 1) {
	buffer += locationList[i].displayEvents();
	}else if (i <= 3 && i >= 2) {
		buffer += locationList[i].displayRestaurant();
	}else{
		buffer += locationList[i].display();
	}
}

document.getElementById("locations").innerHTML = buffer;


