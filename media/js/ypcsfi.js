/**
 * @author Ville Korhonen <ville@xd.fi>
 * @version 1.0
 */
var GOOGLE_CALENDAR_URL = "http://www.google.com/calendar/feeds/xd.fi_1b0msr6fmvatsgsdnn0tcoel4c%40group.calendar.google.com/public/basic";

$(document).ready(function() {
    // Event Calendar
    $('#event-calendar').fullCalendar({
        events: GOOGLE_CALENDAR_URL,
        firstDay: 1, // 0 = Sunday, 1 = Monday
        allDayText: 'Koko päivä',
        axisFormat: 'HH:mm',
        firstHour: 8, // show events after 08:00 as default
        timeFormat: 'HH:mm',
        columnFormat: {
            month: 'ddd',
            week: 'ddd d.M.',
            day: 'dddd d.M.'
        },
        buttonText: {
            today: 'tänään',
            month: 'kuukausi',
            week: 'viikko',
            day: 'päivä'
        },
        monthNames: ['Tammikuu', 'Helmikuu', 'Maaliskuu', 'Huhtikuu', 'Toukokuu', 'Kesäkuu', 'Heinäkuu', 'Elokuu', 'Syyskuu', 'Lokakuu', 'Marraskuu', 'Joulukuu'],
        monthNamesShort: ['Tam', 'Hel', 'Maa', 'Huh', 'Tou', 'Kes', 'Hei', 'Elo', 'Syy', 'Lok', 'Mar', 'Jou'],
        dayNames: ['Sunnuntai', 'Maanantai', 'Tiistai', 'Keskiviikko', 'Torstai', 'Perjantai', 'Lauantai'],
        dayNamesShort: ['Sun', 'Maa', 'Tii', 'Kes', 'Tor', 'Per', 'Lau'],
        header: {
            left: 'title',
            center: '',
            right: 'today month,basicWeek,agendaWeek prev,next'
        }
    });
});
