const request = require('request');

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=4efb231d1e23f7f7ca4aff7b590ae0a7&query='+ latitude +','+ longitude +''

    request({url, json: true}, (error, {body}) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location.', undefined)
        } else {
            callback(undefined, body.current.weather_descriptions[0] + '. It is currently ' + body.current.temperature + ' degrees outside.' + ' It feels like ' + body.current.feelslike)
        }
    })
}

module.exports = forecast
