var latitude_url = 'https://www.google.fi/latitude/apps/badge/api?user=-2815117468871249775&type=json';

function tellmylocation(location) {
	$("#whereami").html('My current location is <span>' + location + '</span>');
}

$(document).ready(function() {
	$.getJSON(latitude_url, function(data) {
		var location = data['features']['properties']['reverseGeocode'];
		tellmylocation(location);
	});
});