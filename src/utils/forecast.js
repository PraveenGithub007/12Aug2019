const request = require('request')

const forecast = (latitude, longitude, callback) => {
    console.log('latitude longitude')
    console.log(latitude)
    console.log(longitude)
    const url = 'https://api.darksky.net/forecast/dd8872f8fce4a7d770f5805066c34f37/' + latitude + ',' + longitude

    console.log(url)
    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location_src_util_forecast', undefined)
        } else {
            callback(undefined, body.daily.data[0].summary + ' It is currently ' + body.currently.temperature + ' degress out. There is a ' + body.currently.precipProbability + '% chance of rain.')
        }
    })
}

module.exports = forecast