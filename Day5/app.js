fetch('https://open.mapquestapi.com/geocoding/v1/address?key=dt0LuJn1o8HqM5uOFQWJATmbkLBwVqus&location=Moscow')
    .then(function (response) { return response.json(); })
    .then(function (response) {
    var a = response.results[0].locations;
    var b = "";
    for (var i = 0; i < a.length; i++) {
        b += "широта - " + a[i].latLng.lat + ", долгота - " + a[i].latLng.lng + " \r\n";
    }
    console.log(b);
    document.getElementsByClassName("wrapper")[0]
        .innerHTML = b;
});
