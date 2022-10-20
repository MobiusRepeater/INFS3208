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
	// The image (images/Toilet.png) below has been sourced from http://meisupic.oss-cn-beijing.aliyuncs.com/thumb_max/1519283/10017582/depositphotos_10017582-stock-illustration-restroom-sign.jpg
	var toiletIcon = L.icon({ iconUrl: 'images/Toilet.png', iconSize: [25, 25], });
	// The image (images/initial_point.png) below has been sourced from http://www.51yuansu.com/sc/ssvkdyxgps.html
	var initialpointIcon = L.icon({ iconUrl: 'images/initial_point.png', iconSize: [25, 25], });

	// Add icon to map
	var marker = L.marker([-27.485, 153.078], {icon: initialpointIcon}).addTo(myMap).openPopup();
	var marker = L.marker([-27.47526,153.03659], { icon: toiletIcon}).addTo(myMap).bindPopup("<b>the public toilet in the Dunmore Park</b>").openPopup();
    var marker = L.marker([-27.48050,153.01876], { icon: toiletIcon}).addTo(myMap).bindPopup("<b>the public toilet in the Coles Express Milton - Shell Australia</b>").openPopup();
    var marker = L.marker([-27.47225 ,153.01127], { icon: toiletIcon}).addTo(myMap).bindPopup("<b>the public toilet in the Davies Park</b>").openPopup();
    var marker = L.marker([-27.48057,153.01062], { icon: toiletIcon}).addTo(myMap).bindPopup("<b>the public toilet in the West End Urban Common</b>").openPopup();
    var marker = L.marker([-27.48773,153.08294], { icon: toiletIcon}).addTo(myMap).bindPopup("<b>the public toilet in the Musgrave Park</b>").openPopup();
    var marker = L.marker([-27.47518,153.01855], { icon: toiletIcon}).addTo(myMap).bindPopup("<b>the public toilet in the South Brisbane Railway Station</b>").openPopup();
    var marker = L.marker([-27.47934,153.06175], { icon: toiletIcon}).addTo(myMap).bindPopup("<b>the public toilet in the City Hall</b>").openPopup();
    var marker = L.marker([-27.48179,153.05748], { icon: toiletIcon}).addTo(myMap).bindPopup("<b>the public toilet in the QueensPlaza</b>").openPopup();
    var marker = L.marker([-27.48156,153.06162], { icon: toiletIcon}).addTo(myMap).bindPopup("<b>the public toilet in the C.T. White Park</b>").openPopup();
    var marker = L.marker([-27.48150,153.05850], { icon: toiletIcon}).addTo(myMap).bindPopup("<b>the public toilet in the Raymond Park</b>").openPopup();
    var marker = L.marker([-27.48179,153.05697], { icon: toiletIcon}).addTo(myMap).bindPopup("<b>the public toilet in the BP Latrobe</b>").openPopup();
    var marker = L.marker([-27.48901,153.06695], { icon: toiletIcon}).addTo(myMap).bindPopup("<b>the public toilet in the Heath Park</b>").openPopup();
    var marker = L.marker([-27.46934,153.04931], { icon: toiletIcon}).addTo(myMap).bindPopup("<b>the public toilet in the New Farm Park (Brunswick Street)</b>").openPopup();
    var marker = L.marker([-27.49126,153.06037], { icon: toiletIcon}).addTo(myMap).bindPopup("<b>the public toilet in the South Bank Railway Station</b>").openPopup();
    var marker = L.marker([-27.49199,153.05767], { icon: toiletIcon}).addTo(myMap).bindPopup("<b>the public toilet in the Kangaroo Point Cliffs Park(lower car park)</b>").openPopup();
    var marker = L.marker([-27.48272,153.06030], { icon: toiletIcon}).addTo(myMap).bindPopup("<b>the public toilet in the City Botanic Gardens</b>").openPopup();
    var marker = L.marker([-27.46876,153.00219], { icon: toiletIcon}).addTo(myMap).bindPopup("<b>the public toilet in the Centro Milton</b>").openPopup();
    var marker = L.marker([-27.47588,153.03672], { icon: toiletIcon}).addTo(myMap).bindPopup("<b>the public toilet in the Milton Park</b>").openPopup();
	var marker = L.marker([-27.46317,153.02774], { icon: toiletIcon}).addTo(myMap).bindPopup("<b>the public toilet in the Boyd Park</b>").openPopup();
	var marker = L.marker([-27.46480,153.00576], { icon: toiletIcon}).addTo(myMap).bindPopup("<b>the public toilet in the Albert Bishop Park</b>").openPopup();
	var marker = L.marker([-27.41088,153.06391], { icon: toiletIcon}).addTo(myMap).bindPopup("<b>the public toilet in the Shaw Park</b>").openPopup();
	var marker = L.marker([-27.45311,153.05449], { icon: toiletIcon}).addTo(myMap).bindPopup("<b>the public toilet in the Wooloowin Railway Station</b>").openPopup();
	var marker = L.marker([-27.42001,153.08699], { icon: toiletIcon}).addTo(myMap).bindPopup("<b>the public toilet in the The Beirne Park</b>").openPopup();
	var marker = L.marker([-27.45768,153.02743], { icon: toiletIcon}).addTo(myMap).bindPopup("<b>the public toilet in the A.R.C. Hill Park</b>").openPopup();
	var marker = L.marker([-27.45792,153.02392], { icon: toiletIcon}).addTo(myMap).bindPopup("<b>the public toilet in the Puma Albion</b>").openPopup();
	var marker = L.marker([-27.45552,153.03558], { icon: toiletIcon}).addTo(myMap).bindPopup("<b>the public toilet in the Fortitude Valley</b>").openPopup();
	var marker = L.marker([-27.49887,153.01985], { icon: toiletIcon}).addTo(myMap).bindPopup("<b>the public toilet in the Bulimba Memorial Park</b>").openPopup();
	var marker = L.marker([-27.51270,153.04291], { icon: toiletIcon}).addTo(myMap).bindPopup("<b>the public toilet in the Cannon Hill Railway Station</b>").openPopup();
	var marker = L.marker([-27.52710,153.01877], { icon: toiletIcon}).addTo(myMap).bindPopup("<b>the public toilet in the Perrin Park</b>").openPopup();
	var marker = L.marker([-27.52879,152.98526], { icon: toiletIcon}).addTo(myMap).bindPopup("<b>the public toilet in the Puma Dutton Park</b>").openPopup();
	var marker = L.marker([-27.55068,153.02260], { icon: toiletIcon}).addTo(myMap).bindPopup("<b>the public toilet in the Sherwood Forest Park</b>").openPopup();


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