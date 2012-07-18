/**
 * @author Ville Korhonen <ville@xd.fi>
 * @version 1.0
 */
var GOOGLE_CALENDAR_URL = "http://www.google.com/calendar/feeds/xd.fi_1b0msr6fmvatsgsdnn0tcoel4c%40group.calendar.google.com/public/basic";

$(document).ready(function() {
    // Event Calendar
    $('#event-calendar').fullCalendar({
        events: GOOGLE_CALENDAR_URL
    });
});
