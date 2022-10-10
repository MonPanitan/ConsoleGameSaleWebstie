var bMapAPIKey = "Anu3ToJHRbdElc5jrhaarvSoYduwZAbWlmy8D7yOOPJfy23ozmsRixlruy37LQ-y";

var map;



function initMap(){
    
    
    var storeLocation = new Microsoft.Maps.Location(53.40539361143779, -6.378603969314776);
    
    "use strict";
    map = new Microsoft.Maps.Map('#map1', {
    credentials: bMapAPIKey,
    center: storeLocation,
    mapTypeId: Microsoft.Maps.MapTypeId.road,
    zoom: 15,
    disableScrollWheelZoom: true,
    disablePanning: true
    });
    
    //Create an infobox at the center of the map but don't show it.
       var infobox = new Microsoft.Maps.Infobox(map.getCenter(), {
            visible: false
        });

        //Assign the infobox to a map instance.
        infobox.setMap(map);
    
    var pin = new Microsoft.Maps.Pushpin(storeLocation, {
            title: 'Game Night',
            subTitle: 'Best Place to by Game',
            text: 'X'
        });
    //Store some metadata with the pushpin.
        pin.metadata = {
            title: 'Best Place to by Game',
            description: 'Park House, 191 N Circular Rd, Cabra East, Grangegorman, Co. Dublin, D07 EWV4'
        };


        //Add the pushpin to the map
        map.entities.push(pin);
    
    //Add a click event handler to the pushpin.
        Microsoft.Maps.Events.addHandler(pin, 'click', function pushpinClicked(e) {
        //Make sure the infobox has metadata to display.
        if (e.target.metadata) {
            //Set the infobox options with the metadata of the pushpin.
            infobox.setOptions({
                location: e.target.getLocation(),
                title: e.target.metadata.title,
                description: e.target.metadata.description,
                visible: true
            });
        }
    });
   }

