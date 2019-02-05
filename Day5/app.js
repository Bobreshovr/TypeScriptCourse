var testUrl = "https://open.mapquestapi.com/geocoding/v1/address?key=dt0LuJn1o8HqM5uOFQWJATmbkLBwVqus&location=Moscow";
var coords = fetch(testUrl)
    .then(function (response) {
    return response.json();
    console.log(coords);
});
