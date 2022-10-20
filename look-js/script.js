function getYear(year) {
	if(year) {
		return year.match(/[\d]{4}/); 
	}
}

function iterateRecords(results) {

	console.log(results);

	// Setup the map
	var myMap = L.map("map").setView([-27.5, 153], 11.6);

	L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoiZG9taW5pY21hbzIwMjEiLCJhIjoiY2t1eHR5YTNqMHg1czJ3cmZxdjRmOTJtYSJ9.B3V14iXwq1uZIyav4HH7nw",{ 
    	attribution: 'Map data © href="https://www.openstreetmap.org/">OpenStreetMap contributors,href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA, Imagery © href="https://www.mapbox.com/">Mapbox',
    	maxZoom: 18, 
    	id: 'mapbox/streets-v11', 
    	tileSize: 512, 
    	zoomOffset: -1, 
    	accessToken: 'akbsh.mapbox.access.token'
    }).addTo(myMap);


	// Set picture and size of icon 
	// The image (images/DirectDrinking.png) below has been sourced from http://baijiahao.baidu.com/s?id=1663288679155363833&wfr=spider&for=pc

	var waterIcon = L.icon({ iconUrl: 'images/DirectDrinking.png', iconSize: [25, 25], });
	// The image (images/initial_point.png) below has been sourced from http://www.51yuansu.com/sc/ssvkdyxgps.html
	var initialpointIcon = L.icon({ iconUrl: 'images/initial_point.png', iconSize: [25, 25], });

	// Add icon to map
	var marker = L.marker([-27.485, 153.078], {icon: initialpointIcon}).addTo(myMap).openPopup();

	var marker = L.marker([-27.555735066, 153.038126804], { icon: waterIcon}).addTo(myMap).bindPopup("<b>the drinking point in the LILLIAN AVENUE PARK</b>").openPopup();
	var marker = L.marker([-27.420756997, 152.945905275], { icon: waterIcon}).addTo(myMap).bindPopup("<b>the drinking point in the KERYN PLACE PARK</b>").openPopup();
	var marker = L.marker([-27.5399616129999, 153.01686989], { icon: waterIcon}).addTo(myMap).bindPopup("<b>the drinking point in the VETERANS PARK</b>").openPopup();
	var marker = L.marker([-27.491243649, 152.990583773], { icon: waterIcon}).addTo(myMap).bindPopup("<b>the drinking point in the PERRIN PARK</b>").openPopup();
	var marker = L.marker([-27.4058960839999, 153.071192122], { icon: waterIcon}).addTo(myMap).bindPopup("<b>the drinking point in the ALBERT BISHOP PARK</b>").openPopup();
	var marker = L.marker([-27.46812965, 153.024036386], { icon: waterIcon}).addTo(myMap).bindPopup("<b>the drinking point in the KING GEORGE SQUARE</b>").openPopup();
	var marker = L.marker([-27.4494154239999, 152.999182579], { icon: waterIcon}).addTo(myMap).bindPopup("<b>the drinking point in the WOOLCOCK PARK</b>").openPopup();
	var marker = L.marker([-27.383192671, 153.059573946], { icon: waterIcon}).addTo(myMap).bindPopup("<b>the drinking point in the DOWNFALL CREEK RESERVE</b>").openPopup();
	var marker = L.marker([-27.476083441, 153.030728505], { icon: waterIcon}).addTo(myMap).bindPopup("<b>the drinking point in the CITY BOTANIC GARDENS</b>").openPopup();
	var marker = L.marker([-27.3733784959999, 153.027873321], { icon: waterIcon}).addTo(myMap).bindPopup("<b>the drinking point in the MARCHANT PARK</b>").openPopup();
	var marker = L.marker([-27.549576798, 152.93475484], { icon: waterIcon}).addTo(myMap).bindPopup("<b>the drinking point in the LORIKEET PARK</b>").openPopup();
	var marker = L.marker([-27.559516303, 152.903224318], { icon: waterIcon}).addTo(myMap).bindPopup("<b>the drinking point in the KARUMBA PLACE PARK</b>").openPopup();
	var marker = L.marker([-27.442613577, 153.045506988], { icon: waterIcon}).addTo(myMap).bindPopup("<b>the drinking point in the NEWSTEAD PARK</b>").openPopup();
	var marker = L.marker([-27.378199556, 153.033562079], { icon: waterIcon}).addTo(myMap).bindPopup("<b>the drinking point in the 7TH BRIGADE PARK</b>").openPopup();
	var marker = L.marker([-27.568237247, 153.096538882], { icon: waterIcon}).addTo(myMap).bindPopup("<b>the drinking point in the BOORALA CRESCENT PARK</b>").openPopup();
	var marker = L.marker([-27.3291251009999, 153.087168131], { icon: waterIcon}).addTo(myMap).bindPopup("<b>the drinking point in the SANDGATE FORESHORES PARK</b>").openPopup();
	var marker = L.marker([-27.498948867, 153.00830226], { icon: waterIcon}).addTo(myMap).bindPopup("<b>the drinking point in the ACACIA PARK</b>").openPopup();
	var marker = L.marker([-27.32195816, 153.042180796], { icon: waterIcon}).addTo(myMap).bindPopup("<b>the drinking point in the MCPHERSON PARK</b>").openPopup();
	var marker = L.marker([-27.476500501, 153.152228578], { icon: waterIcon}).addTo(myMap).bindPopup("<b>the drinking point in the ARENGA STREET PARK</b>").openPopup();
	var marker = L.marker([-27.3934679399999,153.027618058], { icon: waterIcon}).addTo(myMap).bindPopup("<b>the drinking point in the BRADBURY PARK</b>").openPopup();
	var marker = L.marker([-27.614155973,153.034592425], { icon: waterIcon}).addTo(myMap).bindPopup("<b>the drinking point in the TIMBERLAND PARK</b>").openPopup();

	// Show specifi location using latitude and longitude
    function clickOn(m) { L.popup().setLatLng(m.latlng).setContent("The location you click on is: " + m.latlng.toString()).openOn(myMap) }
    myMap.on('click', clickOn)


}

$(document).ready(function() {

	var data = {
		resource_id: "35ea936d-083e-4ad6-beab-e0fede2cd3a6",
		limit: 100
	}

	$.ajax({
		url: "https://www.data.qld.gov.au/api/3/action/datastore_search",
		data: data,
		dataType: "jsonp",
		cache: true,
		success: function(results) {
			iterateRecords(results);
		}
	});





});