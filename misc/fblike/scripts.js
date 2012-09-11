/**
 * FB-liket
 *
 * @author Ville Korhonen <ville@xd.fi>
 */

google.load("visualization", "1", {packages:["corechart"]});

function drawLikeChart(uuid, e) {
    var dataTable = new google.visualization.DataTable();
    var url = 'http://tmp.ypcs.fi/fblike/data/' + uuid + '.json';
    
    jQuery.getJSON(url, function(data) {
        dataTable.addColumn('datetime', 'Day');
                
        for (i=0; i<data.columns.length; i++) {
            dataTable.addColumn('number', data.columns[i])
        }
                
        for (i=0; i<data.values.length; i++) {
            data.values[i][0] = new Date(data.values[i][0]);
        }
                
        dataTable.addRows(data.values);
        
        var useColors = true;
        var colors = data.colors;
        
        if (data.colors.length == 0) {
            colors = null;
        }
        
        for (i=0; i<data.colors.length; i++) {
            if (data.colors[i] == null) {
                colors = null;
                break;
            }
        }
        
        var options = {
            width: 800,
            height: 600,
//            title: data.title,
            title: uuid,
            colors: colors,
            interpolateNulls: true
        };
                    
        var chart = new google.visualization.LineChart(e);
        chart.draw(dataTable, options);
    });
}
//google.setOnLoadCallback(drawChart);

$(document).ready(function() {
    var uuids = document.location.hash.substring(1).split(',');
    if ((uuids.length == 0) || (uuids[0].length == 0)) {
        uuids = ['bf8df143-18b9-492d-ae66-d41b3e54f5be'];
    }
    
    for (i=0; i<uuids.length; i++) {
        if (uuids[i].length != 36) {continue;}
        var e = document.createElement('div');
        e.id = 'chart-' + uuids[i];
        document.getElementById('charts').appendChild(e);
    
        drawLikeChart(uuids[i], e);
    }
});
