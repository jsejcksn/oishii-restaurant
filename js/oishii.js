// Oishii Japanese Restaurant & Sushi Bar

// Variables ----------

var menu;


// Functions ----------




// EventListeners ----------




// Google Maps -- https://developers.google.com/maps/documentation/javascript/examples/marker-simple
function initialize() {
	var myLatlng = new google.maps.LatLng(29.7331629,-95.4366254);
	var mapOptions = {
		center: myLatlng,
		disableDefaultUI: false,
		scrollwheel: false,
		zoom: 15
		};
	var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
	var marker = new google.maps.Marker({
		position: myLatlng,
		map: map,
		title: 'Oishii'
		});
	}

google.maps.event.addDomListener(window, 'load', initialize);
// End Google Maps


// Execute ----------

console.log('Oishii Restaurant');
