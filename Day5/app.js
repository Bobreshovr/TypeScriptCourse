var testUrl = "https://open.mapquestapi.com/geocoding/v1/address?key=dt0LuJn1o8HqM5uOFQWJATmbkLBwVqus&location=Moscow";
fetch(testUrl)
    .then(function (response) { return response.json(); })
    .then(function (response) {
    var locArr = response.results[0].locations;
    var locStr = '';
    for (var i = 0; i < locArr.length; i++) {
        locStr += 'Широта:' + locArr[i].latLng.lat + '; Долгота:' + locArr[i].latLng.lng + '\r\n';
    }
    console.log(locStr);
    document.getElementsByClassName("wrapper")[0]
        .innerHTML = locStr;
});
