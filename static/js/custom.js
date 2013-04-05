var location_url = 'http://tmp.ypcs.fi/c/location';

function updateLocation(s) {
    var placeholder = $("#currentLocation");
    var l = s.location;
    var map_url = 'https://maps.google.com/?q=' + encodeURI(l);
    var t = new Date(s.timestamp * 1000);

    placeholder.html('&middot; Current Location: <a href="' + map_url + '">' + l + '</a> @ ' + t);
}

$(document).ready(function() {
    $.getJSON(location_url, function(data) {updateLocation(data);});
});