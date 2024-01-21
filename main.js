window.onload = init 
function init(){
    var map = new ol.Map({
        view: new ol.View({
            center:[2156696.96717465, 6837458.159609365],
            zoom:4
        }),
        layers:[
            new ol.layer.Tile({
                source: new ol.source.OSM()
            })
        ],
        target: 'final-project'

    })

    map.on('click',function(e){
        console.log(e.coordinate)
    })

    var zoomsliderr = new ol.control.ZoomSlider()

    map.addControl(zoomsliderr)

    var scale = new ol.control.ScaleLine()

    map.addControl(scale)


    // Add the GeoServer layer.

    var layer = new ol.layer.Tile({
        source: new ol.source.TileWMS({
            attributions:'Group 9',
            url:'http://localhost:8085/geoserver/GMT351_Project/wms',
            params:{
                'LAYERS':'GMT351_Project:charging_stations_qgis'
            } 
        })

    })

    map.addLayer(layer)
}