const request = require('request');

const geocode = (address, callback) => {
	const geoCodeUrl = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(
		address
	)}.json?access_token=pk.eyJ1IjoiYXJmaXp1cnJhaG1hbiIsImEiOiJja2FqYnl4djkwYmEwMnZxem1oeGJ4cmM2In0.Mc-1450uu2WnQMsQ37uFaQ&limit=1`;

	request({ url: geoCodeUrl, json: true }, (error, { body } = {}) => {
		if (error) {
			callback('Unable to connect to location service.', undefined);
		} else if (body.message) {
			callback('Unable to connect to location service.', undefined);
		} else if (body.features.length == 0) {
			callback('Unable to find the location. Try another search.');
		} else {
			callback(undefined, {
				latitude: body.features[0].center[1],
				longitude: body.features[0].center[0],
				location: body.features[0].place_name,
			});
		}
	});
};

module.exports = geocode;
