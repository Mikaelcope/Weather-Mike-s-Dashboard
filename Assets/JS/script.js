var searchImput = $('#search-input')
var searchBtn = $('#search-button')
var today = $('#today')
var foreCast = $('#fiveDay')



searchBtn.on('click', function(event){
    event.preventDefault()
    var searchVal = searchImput.val().trim()
    var query1Day = "https://api.openweathermap.org/data/2.5/weather?q=" + searchVal + "&appid=69a234fe9433fd65a7b8623a7427cfc3"
    
    
    fetch(query1Day)
    .then(function (response){
        return response.json();
    })
    .then(function(data){
        // console.log(data)

        var singleDay = $('<div>')
        var p1 = $('<h2>')
        p1.text("City: " + searchVal)
        var p2 = $('<p>')
        p2.text("Temp: " + data.main.temp)
        console.log(p2)
        var p3 = $('<p>')
        p3.text("Wind: " + data.wind.speed)
        var p4 = $('<p>')
        p4.text("Humidity: " + data.main.humidity)
        console.log(p4)

        singleDay.append(p1, p2, p3, p4)
        today.append(singleDay)

    })
    
        
        // console.log(singleDay)
    
        var queryURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + searchVal + "&appid=69a234fe9433fd65a7b8623a7427cfc3"
        fetch(queryURL)
        .then(function (res1){
            return res1.json();
        })
        .then(function(five){
            console.log(five)
            
            

            // console.log(forecastArray[0].main.temp)

         var forecastArray = five.list





            for(i = 0; i < forecastArray.length; i++){

                
                var date = $('<h3>')
                date.text('Date')
                var card1 = $('<p>')
                card1.text('icon')
                var card2 = $('<p>')
                card2.text("Temp: " + forecastArray[i].main.temp)

                var card3 = $('<p>')
                card3.text("Wind: " + forecastArray[i].wind.speed)
                var card4 = $('<p>')
                card4.text("Humidity: " + forecastArray[i].main.humidity)
                


                
                // foreCast.append(card)
                // var foreCastHTML = $('#fiveDay')
                // foreCastHTML.append(foreCast)
            
                // classHead.append(foreCast)
                 // console.log(forecastArray[i].main.temp)
                // console.log(foreCast)

            }
            // var weatherCard = $('div')
            // weatherCard.append(card1, card2, card3, card4)

        
    })
    


    var foreCast = $('<div>')
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
    // })