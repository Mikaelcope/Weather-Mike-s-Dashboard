var searchImput = $('#search-input')
var searchBtn = $('#search-button')


searchBtn.on('click', function(event){
    event.preventDefault()
    var searchVal = searchImput.val().trim()
    var query1Day = "https://api.openweathermap.org/data/2.5/weather?q=" + searchVal + "&appid=69a234fe9433fd65a7b8623a7427cfc3"
    // var queryURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + searchVal + "&appid=69a234fe9433fd65a7b8623a7427cfc3"
    
    fetch(query1Day)
    .then(function (response){
        return response.json();
    })
    .then(function(data){
        console.log(data)

        var singleDay = $('<div>')
        var p1 = $('<h2>')
        p1.text("City: " + searchVal)
        var p2 = $('<p>')
        p2.text("Temp: " + data.main.temp)
        console.log(p2)
        var p3 = $('<p>')
        p3.text("Wind: " + data.wind.speed)
        var p4 = $('<p>')
        
    
        singleDay.append(p1, p2, p3, p4)
        console.log(singleDay)
    
    
    })
    


    var foreCast = $('<dive>')
})
// 1. When user search for a city in the input, call weather API and show the result in the HTML
//    - Add event listener to form submit
//    - Get the user input value
//    - Build the API query URL based on the user input value
//    - Call the API and render the result in the HTML
//        - Get the city name and show it in the main weather forecast card
//        - Get the first weather forecast item and get the following values
//            - date
//            - temperature
//            - wind speed
//            - humidity
//            - icon
//        - render those values to the main card
//        - Loop through all weathers array and get the following values
//            - date
//            - temperature
//            - wind speed
//            - humidity
//            - icon
//        - render those values to the smaller card
// 2. When user search for a city, store it in local storage
// 3. On initial page load load the search history and show it as a list in the HTML
//    - ....
//    - Build the API query URL based on the history stored in local storage
//    - Call the API and render the result in the HTML
// 4. When user click on the search history, call weather API and show the result in the HTML
// 5. CSS

// fetch('https://api.openweathermap.org/data/2.5/forecast?q=london&appid=[api-key]&units=metric')
//     .then(function(response) {
//         return response.json();
//     })
//     .then(function(data) {
//         console.log(data);
//     })