const MAPBOX_ACCESS_TOKEN = Access_token_from_map_box

navigator.geolocation.getCurrentPosition(success, error, { 
    enableHighAccuracy:true
})


function set_map(lng, lat) {
    const map = new mapboxgl.Map({
        accessToken: MAPBOX_ACCESS_TOKEN,
        container: 'map', // container ID
        style: 'mapbox://styles/mapbox/streets-v11', // style URL
        center: [lng, lat], // starting position [lng, lat]
        zoom: 9 // starting zoom
    });
    const navigation_control = new mapboxgl.NavigationControl()
    const map_box_direction = new MapboxDirections({
        accessToken: MAPBOX_ACCESS_TOKEN
    })
    map.addControl(navigation_control);
    map.addControl(map_box_direction, 'top-left')
}


function success(position) {
    const longitude = position.coords.longitude
    const latitude = position.coords.latitude
    set_map(longitude, latitude)
}

function error() {
    set_map([-0.127758, 51.507351])
}

