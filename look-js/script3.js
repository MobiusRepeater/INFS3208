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
	// The image (images/Hospital.jpeg) below has been sourced from https://huaban.com/pins/3762327967/
	var hospitalIcon = L.icon({ iconUrl: 'images/Hospital.jpeg', iconSize: [25, 25], });
	// The image (images/initial_point.png) below has been sourced from http://www.51yuansu.com/sc/ssvkdyxgps.html
	var initialpointIcon = L.icon({ iconUrl: 'images/initial_point.png', iconSize: [25, 25], });

	// Add icon to map
	var marker = L.marker([-27.485, 153.078], {icon: initialpointIcon}).addTo(myMap).openPopup();
	var marker = L.marker([-27.38563,153.02538], { icon: hospitalIcon}).addTo(myMap).bindPopup("<b>the hospital address: Hamilton Rd, CHERMSIDE, 4032</b>").openPopup();
	var marker = L.marker([-27.39026,153.02261], { icon: hospitalIcon}).addTo(myMap).bindPopup("<b>the hospital address: Rode Road, CHERMSIDE, 4032</b>").openPopup();
	var marker = L.marker([-27.44684,153.02814], { icon: hospitalIcon}).addTo(myMap).bindPopup("<b>the hospital address: Butterfield St, HERSTON, 4029</b>").openPopup();
	var marker = L.marker([-27.48417,153.02654], { icon: hospitalIcon}).addTo(myMap).bindPopup("<b>the hospital address: 501 Stanley St, SOUTH BRISBANE, 4101</b>").openPopup();
	var marker = L.marker([-27.48527,153.02807], { icon: hospitalIcon}).addTo(myMap).bindPopup("<b>the hospital address: Raymond Terrace, SOUTH BRISBANE, 4101</b>").openPopup();
	var marker = L.marker([-27.48478,153.02751], { icon: hospitalIcon}).addTo(myMap).bindPopup("<b>the hospital address: Raymond Terrace, SOUTH BRISBANE, 4101</b>").openPopup();
	var marker = L.marker([-27.49903,153.03353], { icon: hospitalIcon}).addTo(myMap).bindPopup("<b>the hospital address: 199 Ipswich Road, WOOLLOONGABBA, 4102</b>").openPopup();
	var marker = L.marker([-27.55957,153.04894], { icon: hospitalIcon}).addTo(myMap).bindPopup("<b>the hospital address: Cnr Kessels & Troughon Roads, COOPERS PLAINS, 4108</b>").openPopup();
	var marker = L.marker([-27.54016,153.25184], { icon: hospitalIcon}).addTo(myMap).bindPopup("<b>the hospital address: Weippin St, CLEVELAND, 4163</b>").openPopup();
	var marker = L.marker([-27.540281,153.252121], { icon: hospitalIcon}).addTo(myMap).bindPopup("<b>the hospital address: 21 Weippin Street</b>").openPopup();
	var marker = L.marker([-27.559654,153.04875], { icon: hospitalIcon}).addTo(myMap).bindPopup("<b>the hospital address: Cnr Kessels & Troughton Roads</b>").openPopup();
 

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