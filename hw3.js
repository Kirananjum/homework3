function initmap() {
	var latlong = {lat: 40.771255, lng: -73.924167}

	var map = new google.maps.Map(document.getElementById('map'), {
             zoom: 7, 
            center: latlong
    });  // ends map

    
    var marker = new google.maps.Marker({
        position: latlong, 
        map: map
    }); 

 

	var latlong = {lat: 40.792935, lng: -73.947168}

	var marker = new google.maps.Marker({
		position: latlong,
		map: map
	});


	var latlong = {lat: 40.704971, lng: -73.938975}

	var marker = new google.maps.Marker({
		position: latlong,
		map: map
	});



	var latlong = {lat: 40.848579, lng: -73.908746}

	var marker = new google.maps.Marker({
		position: latlong,
		map: map
	});


	var latlong = {lat: 40.708388, lng: -73.804152}

	var marker = new google.maps.Marker({
		position: latlong,
		map: map
	});


} // ends function

