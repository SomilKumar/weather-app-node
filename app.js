
const request = require('request');
const yargs = require('yargs');


const argv = yargs
    .options({
        a: {
            demand: true,
            alias: 'address',
            describe: 'Address to fetch weather for',
            string: true
        }
    })
    .help()
    .alias('help', 'h')
    .argv;

console.log(argv);

const API_KEY = 'AIzaSyDJm4tctOf4GAHy5bEMu0rIrPpm4mbOM_s';
const KEY = `&key=${API_KEY}`;

const encodedAddress = encodeURIComponent(argv.address);


request({
    url: `https://maps.google.com/maps/api/geocode/json?address=${encodedAddress}${KEY}`,
    json: true
}, (error, response, body) => {
    console.log(`Address : ${body.results[0].formatted_address}`);
    console.log(`Latitude : ${body.results[0].geometry.location.lat}`);
    console.log(`Longitude : ${body.results[0].geometry.location.lng}`);
    // console.log(JSON.stringify(body, undefined, 2));
});