openWeatherMapUrl = 'https://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}'
console.log('hit')
fetch(openWeatherMapUrl).then(function(response){
    return response.json
}).then(function(data){
    console.log(data)
})

var search = $('#search')

search.on('click', function(){
    console.log('hit')
})