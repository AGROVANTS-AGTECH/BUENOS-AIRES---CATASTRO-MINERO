var wms_layers = [];


        var lyr_Googlestreet_0 = new ol.layer.Tile({
            'title': 'Google street',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_BA_Minas_1 = new ol.format.GeoJSON();
var features_BA_Minas_1 = format_BA_Minas_1.readFeatures(json_BA_Minas_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BA_Minas_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BA_Minas_1.addFeatures(features_BA_Minas_1);
var lyr_BA_Minas_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BA_Minas_1, 
                style: style_BA_Minas_1,
                interactive: true,
                title: '<img src="styles/legend/BA_Minas_1.png" /> BA_Minas'
            });
var format_BA_Manifestaciones_2 = new ol.format.GeoJSON();
var features_BA_Manifestaciones_2 = format_BA_Manifestaciones_2.readFeatures(json_BA_Manifestaciones_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BA_Manifestaciones_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BA_Manifestaciones_2.addFeatures(features_BA_Manifestaciones_2);
var lyr_BA_Manifestaciones_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BA_Manifestaciones_2, 
                style: style_BA_Manifestaciones_2,
                interactive: true,
                title: '<img src="styles/legend/BA_Manifestaciones_2.png" /> BA_Manifestaciones'
            });
var format_BA_Cateos_3 = new ol.format.GeoJSON();
var features_BA_Cateos_3 = format_BA_Cateos_3.readFeatures(json_BA_Cateos_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BA_Cateos_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BA_Cateos_3.addFeatures(features_BA_Cateos_3);
var lyr_BA_Cateos_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BA_Cateos_3, 
                style: style_BA_Cateos_3,
                interactive: true,
                title: '<img src="styles/legend/BA_Cateos_3.png" /> BA_Cateos'
            });
var format_BA_Canteras_4 = new ol.format.GeoJSON();
var features_BA_Canteras_4 = format_BA_Canteras_4.readFeatures(json_BA_Canteras_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BA_Canteras_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BA_Canteras_4.addFeatures(features_BA_Canteras_4);
var lyr_BA_Canteras_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BA_Canteras_4, 
                style: style_BA_Canteras_4,
                interactive: true,
                title: '<img src="styles/legend/BA_Canteras_4.png" /> BA_Canteras'
            });

lyr_Googlestreet_0.setVisible(true);lyr_BA_Minas_1.setVisible(true);lyr_BA_Manifestaciones_2.setVisible(true);lyr_BA_Cateos_3.setVisible(true);lyr_BA_Canteras_4.setVisible(true);
var layersList = [lyr_Googlestreet_0,lyr_BA_Minas_1,lyr_BA_Manifestaciones_2,lyr_BA_Cateos_3,lyr_BA_Canteras_4];
lyr_BA_Minas_1.set('fieldAliases', {'id': 'id', 'nombre': 'nombre', 'mineral': 'mineral', 'estado': 'estado', 'tipo derec': 'tipo derec', 'titular': 'titular', 'expediente': 'expediente', });
lyr_BA_Manifestaciones_2.set('fieldAliases', {'id': 'id', 'nombre': 'nombre', 'mineral': 'mineral', 'estado': 'estado', 'tipo derec': 'tipo derec', 'titular': 'titular', 'expediente': 'expediente', });
lyr_BA_Cateos_3.set('fieldAliases', {'id': 'id', 'nombre': 'nombre', 'mineral': 'mineral', 'estado': 'estado', 'tipo derec': 'tipo derec', 'titular': 'titular', 'expediente': 'expediente', });
lyr_BA_Canteras_4.set('fieldAliases', {'id': 'id', 'nombre': 'nombre', 'mineral': 'mineral', 'productor': 'productor', 'estado': 'estado', 'tipo derec': 'tipo derec', 'titular': 'titular', 'expediente': 'expediente', });
lyr_BA_Minas_1.set('fieldImages', {'id': 'TextEdit', 'nombre': 'TextEdit', 'mineral': 'TextEdit', 'estado': 'TextEdit', 'tipo derec': 'TextEdit', 'titular': 'TextEdit', 'expediente': 'TextEdit', });
lyr_BA_Manifestaciones_2.set('fieldImages', {'id': 'TextEdit', 'nombre': 'TextEdit', 'mineral': 'TextEdit', 'estado': 'TextEdit', 'tipo derec': 'TextEdit', 'titular': 'TextEdit', 'expediente': 'TextEdit', });
lyr_BA_Cateos_3.set('fieldImages', {'id': 'TextEdit', 'nombre': 'TextEdit', 'mineral': 'TextEdit', 'estado': 'TextEdit', 'tipo derec': 'TextEdit', 'titular': 'TextEdit', 'expediente': 'TextEdit', });
lyr_BA_Canteras_4.set('fieldImages', {'id': 'TextEdit', 'nombre': 'TextEdit', 'mineral': 'TextEdit', 'productor': 'TextEdit', 'estado': 'TextEdit', 'tipo derec': 'TextEdit', 'titular': 'TextEdit', 'expediente': 'TextEdit', });
lyr_BA_Minas_1.set('fieldLabels', {'id': 'inline label', 'nombre': 'inline label', 'mineral': 'inline label', 'estado': 'inline label', 'tipo derec': 'inline label', 'titular': 'inline label', 'expediente': 'header label', });
lyr_BA_Manifestaciones_2.set('fieldLabels', {'id': 'inline label', 'nombre': 'inline label', 'mineral': 'inline label', 'estado': 'inline label', 'tipo derec': 'inline label', 'titular': 'inline label', 'expediente': 'header label', });
lyr_BA_Cateos_3.set('fieldLabels', {'id': 'inline label', 'nombre': 'inline label', 'mineral': 'header label', 'estado': 'inline label', 'tipo derec': 'inline label', 'titular': 'inline label', 'expediente': 'header label', });
lyr_BA_Canteras_4.set('fieldLabels', {'id': 'inline label', 'nombre': 'inline label', 'mineral': 'inline label', 'productor': 'inline label', 'estado': 'inline label', 'tipo derec': 'inline label', 'titular': 'inline label', 'expediente': 'header label', });
lyr_BA_Canteras_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});