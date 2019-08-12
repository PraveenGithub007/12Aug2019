const request = require('request')

const geocode = (address, callback) => {
    //const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + address + '.json?access_token=pk.eyJ1IjoiYW5kcmV3bWVhZDEiLCJhIjoiY2pvOG8ybW90MDFhazNxcnJ4OTYydzJlOSJ9.njY7HvaalLEVhEOIghPTlw&limit=1'
    //const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + address + '.json?pk.eyJ1IjoicHJhdmVlbjA0MjAxOSIsImEiOiJjano4NHlobGMwZ2JjM21uMzY5Y21ueXVnIn0.xscvLmcNqkmTyMkeL170qQ&limit=1'

    //Los_Angeles
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoicHJhdmVlbjA0MjAxOSIsImEiOiJjano4NHdpOTkwMDg5M21wN3VmcTd4bGo4In0.GgaQ0vzr17TnnIWnI9gEZQ&limit=1'

    //const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + address + '.json?access_token=pk.eyJ1IjoicHJhdmVlbjA0MjAxOSIsImEiOiJjano4NHdpOTkwMDg5M21wN3VmcTd4bGo4In0.GgaQ0vzr17TnnIWnI9gEZQ'
    // console.log('URL')
    // console.log(url)
  

    request({ url, json: true }, (error, { body }) => {
        // console.log('body.features')
        // console.log(body.features)

        if (error) {
            callback('Unable to connect to location services!', undefined)
        }
        else if (body.features.length === 0) {
            callback('Unable to find location. Try another search.', undefined)
        }
        else {
            callback(undefined, {
                latitude: body.features[0].center[1],
                longitude: body.features[0].center[0],
                location: body.features[0].place_name
            })
        }
    })

    // request({ url, json: true }, (error, response) => {
    //     if (error) {
    //         callback('Unable to connect to location services!', undefined)
    //     }
    //     else if (response.body.features.length === 0) {
    //         callback('Unable to find location. Try another search.', undefined)
    //     }
    //     else {
    //         callback(undefined, {
    //             latitude: response.body.features[0].center[1],
    //             longitude: response.body.features[0].center[0],
    //             location: 'UnitedStates'//body.features[0].place_name
    //         })
    //     }
    // })
}

module.exports = geocode