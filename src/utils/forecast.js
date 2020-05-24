const request = require('request');

forecast = (latitude, longitude, callback) => {
	const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=b9189fa7d6dd62b7b401d5030864e37f`;

	request({ url, json: true }, (error, { body } = {}) => {
		if (error) {
			callback('Unable to connect to weather service', undefined);
		} else if (body.message) {
			callback('Unable to find location', undefined);
		} else {
			callback(
				undefined,
				`The sky has ${body.weather[0].main.toLowerCase()}. It is currently ${
					body.main.temp
				} degree.`
			);
		}
	});
};

module.exports = forecast;
