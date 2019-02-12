fetch('https://open.mapquestapi.com/geocoding/v1/address?key=dt0LuJn1o8HqM5uOFQWJATmbkLBwVqus&location=Moscow')
    .then(function (data) { return (data.json()); })
    .then(function (data) {
    var element = document.getElementsByClassName('wrapper')[0];
    var locations = data.results[0].locations;
    for (var i = 0; i < locations.length; i++) {
        console.log(locations[i]);
        element.innerHTML += 'широта равна ' + locations[i].latLng.lat + 'Долгота равна' + locations[i].latLng.lng + '\n';
    }
});
