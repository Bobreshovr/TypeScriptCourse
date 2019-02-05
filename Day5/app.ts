const testUrl="https://open.mapquestapi.com/geocoding/v1/address?key=dt0LuJn1o8HqM5uOFQWJATmbkLBwVqus&location=Moscow";

let coords = fetch(testUrl)
.then(function(response){
    console.log(response.json);
    return response.json();
})
.then(function(response){
    
});
