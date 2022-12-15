const fs = require('fs');
let gpxParser = require('gpxparser');

let gpxInString = fs.readFileSync('./example.gpx').toString();

var gpx = new gpxParser(); //Create gpxParser Object

gpx.parse(gpxInString); //parse gpx file from string data

fs.writeFile('example-gpx.json', JSON.stringify(gpx), 'utf8', () => {});

console.log(gpx, 'MARKERS')


