const fs = require('fs');
let gpxParser = require('gpxparser');

let gpxInString = fs.readFileSync('./example.gpx').toString();

var gpx = new gpxParser(); //Create gpxParser Object

gpx.parse(gpxInString); //parse gpx file from string data

let geoJSON = gpx.toGeoJSON();

console.log(gpx.tracks[0].points, 'MARKERS')
console.log(geoJSON, 'GEO JSON')


