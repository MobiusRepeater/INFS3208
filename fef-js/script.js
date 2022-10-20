const BASKETBALL = "basketball/netball";
const FOOTBALL = "football";
const AUFOOTBALL = "australian rules football";
const SWIM = "swimming";
const JOG = "jogging";
const WEIGHTFIT = "weight fit";
const DIVING = "diving";
const CLIMBING = "climbing";
const HALFKILO = 500;
const ONEKILO = 1000;
const TWOKILO = 2000;
let customerLat = -27.38563;
let customerLong = 153.02538;
let dataCollect = 15000;
let myMap;
// array to record the new position of customer
let previousPos = [];
// array to store the icon in the map
let iconArray = [];
let PI = Math.PI;
let dataCount = 0;
let equipCount = {
    BASKETBALL: 0,
    FOOTBALL: 0,
    AUFOOTBALL: 0,
    SWIM: 0,
    JOG: 0,
    WEIGHTFIT: 0,
    DIVING: 0,
    CLIMBING: 0
}


function iterateRecords(data, aerobicExe, anaerobicExe, distance, L) {
    console.log(data);
    // var myMap = L.map("filterMap").setView([-27.5, 153], 11.6);

    // L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoidXFpZHJ1Z28iLCJhIjoiY2tlcDdmbDV2MDc2ZjJ4bnk5bTgwcmkwbSJ9.aiKl3J-I-lVcj0iTllZlpg",{ 
    // 	attribution: 'Map data © href="https://www.openstreetmap.org/">OpenStreetMap contributors,href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA, Imagery © href="https://www.mapbox.com/">Mapbox',
    // 	maxZoom: 18, 
    // 	id: 'mapbox/streets-v11', 
    // 	tileSize: 512, 
    // 	zoomOffset: -1, 
    // 	accessToken: 'akbsh.mapbox.access.token'
    // }).addTo(myMap);
    
    // add customer icon
    if (data != undefined) {
    $.each(data.result.records, function(recordKey, recordValue) {

        var parkName = recordValue["PARK_NAME"];
        var descripte = recordValue["DESCRIPTION"];
        var itemType = recordValue["ITEM_TYPE"];
        var longtitude = recordValue["LONGITUDE"];
        var latitude = recordValue["LATITUDE"];
        var equipmentIcon = L.icon({ iconUrl: "images/target.png", iconSize: [50, 50]});
        var inDomain = true;
        dataCount++;

        if (distance != undefined) {
            if (calculateDist(customerLong, customerLat, longtitude, latitude) > distance) {
                inDomain = false;
            }
        }

        if (aerobicExe && inDomain) {

            if (aerobicExe.includes(BASKETBALL)) {
                if (itemType.includes("BASKETBALL/NETBALL FACILITY")||
                    itemType.includes("HANDBALL COURT") ||
                    itemType.includes("SPORTING COURT") ||
                    descripte.includes("basketball hoop")) {
                    
                    marker1 = new L.marker([latitude, longtitude], { icon: equipmentIcon}
                        ).addTo(myMap).bindPopup("ParkName " + parkName + "<br>Equipment: " + 
                        itemType + "<br>Description: " + descripte).closePopup();
                    iconArray.push(marker1);
                    console.log(iconArray[0].getLatLng().lng);
                }
            }

            if (aerobicExe.includes(FOOTBALL)) {
                if (descripte.includes("football goal") ||
                    descripte.includes("football goal posts") ||
                    descripte.includes("FOOTBALL GOAL POSTS") ||
                    descripte.includes("Football goal posts") ||
                    descripte.includes("football field") ||
                    descripte.includes("FOOTBALL FIELD")) {
                 
                    marker1 = new L.marker([latitude, longtitude], { icon: equipmentIcon}
                        ).addTo(myMap).bindPopup("ParkName " + parkName + "<br>Equipment: " + 
                        itemType + "<br>Description: " + descripte).closePopup();
                    iconArray.push(marker1);
                }
            }

            if (aerobicExe.includes(AUFOOTBALL)) {
                if (descripte.includes("Australian Rules Football")) {

                    marker1 = new L.marker([latitude, longtitude], { icon: equipmentIcon}
                        ).addTo(myMap).bindPopup("ParkName " + parkName + "<br>Equipment: " + 
                        itemType + "<br>Description: " + descripte).closePopup();
                    iconArray.push(marker1);
                }
            }

            if (aerobicExe.includes(SWIM)) {
                if (descripte.includes("Outdoor pool")) {
                    
                    marker1 = new L.marker([latitude, longtitude], { icon: equipmentIcon}
                        ).addTo(myMap).bindPopup("ParkName " + parkName + "<br>Equipment: " + 
                        itemType + "<br>Description: " + descripte).closePopup();
                    iconArray.push(marker1);
                }
            }

            if (aerobicExe.includes(JOG)) {
                if (descripte.includes("GRASS RUNNING TRACK")) {
                    
                    marker1 = new L.marker([latitude, longtitude], { icon: equipmentIcon}
                        ).addTo(myMap).bindPopup("ParkName " + parkName + "<br>Equipment: " + 
                        itemType + "<br>Description: " + descripte).closePopup();
                    iconArray.push(marker1);
                }
            }
        }

        if (anaerobicExe && inDomain) {
            if (anaerobicExe.includes(WEIGHTFIT)) {
                if (descripte.includes("UQ weight lift") ||
                    itemType.includes("FITNESS EXERCISE EQUIPMENT")) {
                    
                    marker1 = new L.marker([latitude, longtitude], { icon: equipmentIcon}
                        ).addTo(myMap).bindPopup("ParkName " + parkName + "<br>Equipment: " + 
                        itemType + "<br>Description: " + descripte).closePopup();
                    iconArray.push(marker1);
                }
            }

            if (anaerobicExe.includes(DIVING)) {
                if (descripte.includes("Diving pool")) {
                    
                    marker1 = new L.marker([latitude, longtitude], { icon: equipmentIcon}
                        ).addTo(myMap).bindPopup("ParkName " + parkName + "<br>Equipment: " + 
                        itemType + "<br>Description: " + descripte).closePopup();
                    iconArray.push(marker1);
                }
            }

            if (anaerobicExe.includes(CLIMBING)) {
                if (itemType.includes("CLIMBING FRAME") ||
                    itemType.includes("CLIMBING NET") ||
                    descripte.includes("small climbing net") ||
                    descripte.includes("rock climbing style wall")) {
                    
                    marker1 = new L.marker([latitude, longtitude], { icon: equipmentIcon}
                        ).addTo(myMap).bindPopup("ParkName " + parkName + "<br>Equipment: " + 
                        itemType + "<br>Description: " + descripte).closePopup();
                    iconArray.push(marker1);
                }
            }
        }

        if (dataCount == dataCollect) {
            console.log("Completed");
            if (aerobicExe && (iconArray.length == 0)) {
                if (aerobicExe.includes(BASKETBALL)) {
                    marker1 = new L.marker([-27.54943886, 152.9844044], { icon: equipmentIcon}
                        ).addTo(myMap).bindPopup("ParkName: GEORGE SCARLETT PARK" + "<br>Equipment: BASKETBALL/NETBALL FACILITY"  + 
                        "<br>Description: half basketball court").closePopup();
                    iconArray.push(marker1);
                    marker1 = new L.marker([-27.41017074, 153.0217891], { icon: equipmentIcon}
                        ).addTo(myMap).bindPopup("ParkName: KEITH PAYNE PARK " + 
                        "<br>Equipment: KEITH PAYNE PK HALF COURT" 
                        + "<br>Description: Half Basketball").closePopup();
                    iconArray.push(marker1);
                    marker1 = new L.marker([-27.55228655, 153.1117025], { icon: equipmentIcon}
                        ).addTo(myMap).bindPopup("ParkName: BOORABBIN PICNIC GROUND " + 
                        "<br>Equipment: STACKPOLE ST HALF COURT & REBOUND WALL" 
                        + "<br>Description: Half Basketball").closePopup();
                    iconArray.push(marker1);
                    marker1 = new L.marker([-27.57492781, 153.0926501], { icon: equipmentIcon}
                        ).addTo(myMap).bindPopup("ParkName: CHARLES FRASER PARK " + 
                        "<br>Equipment: CHARLES FRASER PK HALF COURT " 
                        + "<br>Description: Basketball half court").closePopup();
                    iconArray.push(marker1);
                } else if (aerobicExe.includes(FOOTBALL)) {
                    marker1 = new L.marker([-27.44554631, 153.167484], { icon: equipmentIcon}
                        ).addTo(myMap).bindPopup("ParkName: KITCHENER PARK" + 
                        "<br>Equipment: WYNNUM MANLY JR RUGBY LEAGUE FACILITY"  + 
                        "<br>Description: football goal").closePopup();
                    iconArray.push(marker1);
                    marker1 = new L.marker([-27.41508289, 152.9786792], { icon: equipmentIcon}
                        ).addTo(myMap).bindPopup("ParkName: MITCHELTON PARK" + 
                        "<br>Equipment: WESTS MITCHELTON RUGBY LEAGUE FACILITY"  + 
                        "<br>Description: FOOTBALL GOAL POSTS").closePopup();
                    iconArray.push(marker1);
                    marker1 = new L.marker([-27.58156581, 153.0567989], { icon: equipmentIcon}
                        ).addTo(myMap).bindPopup("ParkName: LES ATKINSON PARK" + 
                        "<br>Equipment: STH SUNNYBANK RUGBY LEAGUE FACILITY"  + 
                        "<br>Description: football goalpost").closePopup();
                    iconArray.push(marker1);
                    marker1 = new L.marker([-27.46152467, 153.0889204], { icon: equipmentIcon}
                        ).addTo(myMap).bindPopup("ParkName: BARRACK ROAD PARK" + 
                        "<br>Equipment: BUNYA ST SPORTING FIELD"  + 
                        "<br>Description: football goalposts").closePopup();
                    iconArray.push(marker1);
                } else if (aerobicExe.includes(AUFOOTBALL)) {
                    marker1 = new L.marker([-27.48468301, 153.0554137], { icon: equipmentIcon}
                        ).addTo(myMap).bindPopup("ParkName: SPORTING NODE" + 
                        "<br>Equipment: SPORTING FIELD"  + 
                        "<br>Description: Australian Rules Football").closePopup();
                    iconArray.push(marker1);
                    marker1 = new L.marker([-27.41565149, 153.0205872], { icon: equipmentIcon}
                        ).addTo(myMap).bindPopup("ParkName: HICKEY PARK" + 
                        "<br>Equipment: SPORTING FIELD"  + 
                        "<br>Description: Australian Rules Football").closePopup();
                    iconArray.push(marker1);
                } else if (aerobicExe.includes(SWIM)) {
                    marker1 = new L.marker([-27.45337641, 153.082984], { icon: equipmentIcon}
                        ).addTo(myMap).bindPopup("ParkName: COLMSLIE RESERVE" + 
                        "<br>Equipment: SWIMMING POOL"  + 
                        "<br>Description: Outdoor pool").closePopup();
                    iconArray.push(marker1);
                } else if (aerobicExe.includes(JOG)) {
                    marker1 = new L.marker([-27.32123024, 153.0426435], { icon: equipmentIcon}
                        ).addTo(myMap).bindPopup("ParkName: MCPHERSON PARK" + 
                        "<br>Equipment: ATHLETIC FACILITY"  + 
                        "<br>Description: Grass Running Track").closePopup();
                    iconArray.push(marker1);
                }
            }

            if (anaerobicExe && (iconArray.length == 0)) {
                console.log(iconArray.length);
                if (anaerobicExe.includes(WEIGHTFIT)) {
                    marker1 = new L.marker([-27.49927036, 153.0079858], { icon: equipmentIcon}
                        ).addTo(myMap).bindPopup("ParkName: ACACIA PARK" + 
                        "<br>Equipment: UQ WEIGHT LIFTING CENTRE"  + 
                        "<br>Description: UQ weight lift").closePopup();
                    iconArray.push(marker1);
                    marker1 = new L.marker([-27.40665187, 153.0067472], { icon: equipmentIcon}
                        ).addTo(myMap).bindPopup("ParkName: KEONG PARK" + 
                        "<br>Equipment: KEONG PK FITNESS STATION"  + 
                        "<br>Description: weight lift").closePopup();
                    iconArray.push(marker1);
                    marker1 = new L.marker([-27.45689538, 153.0280850], { icon: equipmentIcon}
                        ).addTo(myMap).bindPopup("ParkName: BEDFORD PLAYGROUND PARK" + 
                        "<br>Equipment: FITNESS EXERCISE EQUIPMENT"  + 
                        "<br>Description: weight lift").closePopup();
                    iconArray.push(marker1);
                } else if (anaerobicExe.includes(DIVING)) {
                    marker1 = new L.marker([-27.45475103, 153.0258569], { icon: equipmentIcon}
                        ).addTo(myMap).bindPopup("ParkName: VICTORIA PARK" + 
                        "<br>Equipment: SWIMMING POOL"  + 
                        "<br>Description: Diving pool").closePopup();
                    iconArray.push(marker1);
                } else if (anaerobicExe.includes(CLIMBING)) {
                    marker1 = new L.marker([-27.6223104, 152.9644138], { icon: equipmentIcon}
                        ).addTo(myMap).bindPopup("ParkName: THE LAKE PARKLANDS" + 
                        "<br>Equipment: FITNESS EXERCISE EQUIPMENT"  + 
                        "<br>Description: rock climbing style wall").closePopup();
                    iconArray.push(marker1);
                }
            }

            if (distance && iconArray.length) {
                //var currArray = iconArray;
                for (var i = 0; i < iconArray.length; i++) {
                    if (calculateDist(iconArray[i].getLatLng().lng, 
                    iconArray[i].getLatLng().lat, 
                    customerLong, customerLat) > distance) {
                        myMap.removeLayer(iconArray[i]);
                    } 
                }
            }
        }
        // if (parkName && descripte && itemType) {
        //     $("#parkN").append(
        //         $('<article class="parkN">').append(
        //             $('<p>').text("1. " + parkName +" 2. " + itemType + " 3. " + descripte)
                
        //         )
        //     );

        // }

        // // enter something in filter box
        // $("#filter-text").keyup(function(event) {
        //     var searchTerm = $(this).val();
        //     console.log(searchTerm);

        //     $(".parkN").hide();
        //     $(".parkN:contains('" + searchTerm + "')").show();

        //     $("#filter-count strong").text($(".parkN:visible").length);

        // });
    });
    }
}

function getRad(d) {
    return d*PI/180.0;
}
//code source: https://segmentfault.com/a/1190000013922206
function calculateDist(lng1, lat1, lng2, lat2){
    var sg = Math.sin(getRad((lat1 - lat2)/2));
    var sl = Math.sin(getRad((lng1 - lng2)/2));
    var sf = Math.sin(getRad((lat1 + lat2)/2));
    var earthRadius = 6378137.0;
    var s,c,w,r,d,h1,h2;
    var fl = 1/298.257;
    sg = sg*sg;
    sl = sl*sl;
    sf = sf*sf;
    s = sg*(1-sl) + (1-sf)*sl;
    c = (1-sg)*(1-sl) + sf*sl;
    w = Math.atan(Math.sqrt(s/c));
    r = Math.sqrt(s*c)/w;
    d = 2*w*earthRadius;
    h1 = (3*r -1)/2/c;
    h2 = (3*r +1)/2/s;
    s = d*(1 + fl*(h1*sf*(1-sg) - h2*(1-sf)*sg));

    return s;
}

function findEquipment(results, L) {
    var aerobic = $(".aerobicExe li");
    var anaerobic = $(".anaerobicExe li");
    var distance = $(".equipDist li");
    var aerobicExe;
    var anaerobicExe;
    var distValue;

    $.each(aerobic, function(index, ele) {
        if ($(ele).attr("clicked") == "true") {
            aerobicExe = $(ele).text().toLowerCase();
        }
    });

    $.each(anaerobic, function(index, ele) {
        if ($(ele).attr("clicked") == "true") {
            anaerobicExe = $(ele).text().toLowerCase();
        }
    });


    $.each(distance, function(index, ele) {
        if ($(ele).attr("clicked") == "true") {
            distValue = $(ele).val()
        }
    });

    console.log("AerobicExe State: " + aerobicExe);
    console.log("AnaerobicExe State: " + anaerobicExe);

    $(".parkN").hide();
    $("#filter-count strong").text($(".parkN:visible").length);
    // popup to the map


    // remove all the icon on the map, before popup new icon
    dataCount = 0;
    if (iconArray.length) {
        for (let i = 0; i < iconArray.length; i++) {
            myMap.removeLayer(iconArray[i]);
        }
        iconArray = [];
    }

    // if aerobic button is click
    if (aerobicExe != undefined || anaerobicExe != undefined) {
        iterateRecords(results, aerobicExe, anaerobicExe, distValue, L);
    }

    
}


function consitionPress(aeroButt, anaeroButt, distButt) {

    // if the condition button is press, cheng style
    aeroButt.on("click", function(){
        $(this).attr("clicked", "true").css({
            "background-color": "black",
            "color": "white"
        })

        $(this).siblings("li").attr("clicked", "false").css({
            "background-color": "white",
            "color": "black"
        });
    });

    anaeroButt.on("click", function(){
        $(this).attr("clicked", "true").css({
            "background-color": "black",
            "color": "white"
        })

        $(this).siblings("li").attr("clicked", "false").css({
            "background-color": "white",
            "color": "black"
        });
    });

    distButt.on("click", function(){
        $(this).attr("clicked", "true").css({
            "background-color": "black",
            "color": "white"
        })

        $(this).siblings("li").attr("clicked", "false").css({
            "background-color": "white",
            "color": "black"
        });
    });
}

function reset(aeroButt, anaeroButt, distButt){
    aeroButt.attr("clicked", "false").css({
        "background-color": "white",
        "color": "black"
    });;

    anaeroButt.attr("clicked", "false").css({
        "background-color": "white",
        "color": "black"
    });;

    distButt.attr("clicked", "false").css({
        "background-color": "white",
        "color": "black"
    });;

    // remove all the icon on the map
    dataCount = 0;
    if (iconArray.length) {
        for (let i = 0; i < iconArray.length; i++) {
            myMap.removeLayer(iconArray[i]);
        }
        iconArray = [];
    }
}

$(document).ready(function() {

    var slqData = JSON.parse(localStorage.getItem("parkDat"));

    var apiResult;
    if (slqData) {
        console.log("Source: localStorage");
        iterateRecords(slqData);
    } else {
        console.log("Source: ajax call");
        var data = {
            resource_id: '66b3c6ce-4731-4b19-bddd-8736e3111f7e',
            limit: dataCollect
        }

        $.ajax({
            url: 'https://www.data.brisbane.qld.gov.au/data/api/3/action/datastore_search',
            data: data,
            dataType: "jsonp",  // use "jsonp to ensure AJAX works correctyly locally"
            cache: true,
            success: function(data) {
                window.localStorage.clear();
                localStorage.setItem("slqData", JSON.stringify(data));
                //iterateRecords(data);
                apiResult = data;
            }
        });

    }

    myMap = L.map("filterMap").setView([-27.5, 153], 11.6);
    var customerIcon = L.icon({ iconUrl: "images/customer.png", iconSize: [35, 35]});

    L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoidXFpZHJ1Z28iLCJhIjoiY2tlcDdmbDV2MDc2ZjJ4bnk5bTgwcmkwbSJ9.aiKl3J-I-lVcj0iTllZlpg",{ 
    	attribution: 'Map data © href="https://www.openstreetmap.org/">OpenStreetMap contributors,href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA, Imagery © href="https://www.mapbox.com/">Mapbox',
    	maxZoom: 18, 
    	id: 'mapbox/streets-v11', 
    	tileSize: 512, 
    	zoomOffset: -1, 
    	accessToken: 'akbsh.mapbox.access.token'
    }).addTo(myMap);

    function clickOn(m) { 
        L.popup().setLatLng(m.latlng).setContent("The location you click on is: " + m.latlng.toString()).openOn(myMap);

        myMap.removeLayer(previousPos[0]);
        console.log("Customer set the positon");

        customerLat = m.latlng.lat;
        customerLong = m.latlng.lng;
        newCustomerPos = new L.marker([customerLat, customerLong], { icon: customerIcon}).addTo(myMap
            ).bindPopup("<b> The customer current postion </b>").closePopup();
        previousPos = [];
        previousPos.push(newCustomerPos);
    }

    customerPos = new L.marker([customerLat, customerLong], { icon: customerIcon}).addTo(myMap
        ).bindPopup("<b> The customer current postion </b>").closePopup();

    previousPos.push(customerPos);
    myMap.on("click", clickOn);

    var aerobicExe = $(".aerobicExe li");
    var anaerobicExe = $(".anaerobicExe li");
    var equipDist = $(".equipDist li");
    
    consitionPress(aerobicExe, anaerobicExe, equipDist);
    
    $("#Reselect").on("click", function() {
        reset(aerobicExe, anaerobicExe, equipDist)
        findEquipment(apiResult, L);
    });

    $("#find").on("click", function() {
        findEquipment(apiResult, L);
    });


});
