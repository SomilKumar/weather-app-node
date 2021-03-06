const request = require('request');



const geocodeAddress = (address, callback) => {
const encodedAddress = encodeURIComponent(address);
request({
        url: `https://maps.google.com/maps/api/geocode/json?address=${encodedAddress}${KEY}`,
        json: true
    }, (error, response, body) => {
        if(error){
            callback('Unable to connect  to Google Servers.');
        } else if(body.status === 'ZERO_RESULTS' ) {
            callback('Unable to find a address');
        } else if(body.status === 'OK') {
            callback(undefined, {
                address: body.results[0].formatted_address,
                lat: body.results[0].geometry.location.lat,
                lng: body.results[0].geometry.location.lng,
            });
        }
    });
};



module.exports.geocodeAddress = geocodeAddress;