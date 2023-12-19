var searchImput = $('#search-input')
var searchBtn = $('#search-button')
var history = $('#history')
var today = $('#today')
var foreCast = $('#fiveDay')
var day = dayjs().format('DD-MM-YYYY')


// if(localStorage.getItem('data'!=null){
//     newBTN = $('<button>')
//     newBTN.text(localStorage)
// })




searchBtn.on('click', function(event){
    event.preventDefault()
    today.empty()
    var searchVal = searchImput.val().trim()

    //Input button into search history
        //get data from imput//
        


        var newData = searchVal
        // console.log(newData)
    
            if(localStorage.getItem('data') == null){
                localStorage.setItem('data', '[]');
            }
    
            //get old data//
            var oldData = JSON.parse(localStorage.getItem('data'));

            if(!oldData.includes(newData)){

            oldData.push(newData);
            // console.log(oldData)
            }
            localStorage.setItem('data', JSON.stringify(oldData));

            if(localStorage.getItem('data')!= null){
                
                for(j=0; j < oldData.length; j++){
                imputBtn = $('<button>')
                imputBtn.addClass('localBTN')
                // console.log(oldData)
                imputBtn.text(oldData[j])
                // console.log(imputBtn)
                $('#history').append(imputBtn)
            }

    // history.appendChild(imputBtn)

    var queryURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + searchVal + "&appid=69a234fe9433fd65a7b8623a7427cfc3"
    fetch(queryURL)
    .then(function (response){
        return response.json();
    })
    .then(function(data){
        // if(data != undefined)
        console.log(data)
        var singleDay = $('<div>')
        var p1 = $('<h2>')
        p1.text(searchVal + '   ' + day)
        var p2 = $('<p>')
        p2.text("Temp: " + data.list[0].main.temp)
        var p3 = $('<p>')
        p3.text("Wind: " + data.list[0].wind.speed)
        var p4 = $('<p>')
        p4.text("Humidity: " + data.list[0].main.humidity)
        singleDay.append(p1, p2, p3, p4)
        today.append(singleDay)


        var forecastArray = data.list
        for(i = 0; i < forecastArray.length; i++){

            
            var date = $('<h3>')
            date.text(forecastArray[i].dt_txt)
            console.log(date)
            var card1 = $('<p>')
            card1.text('icon')
            var card2 = $('<p>')
            card2.text("Temp: " + forecastArray[i].main.temp)

            var card3 = $('<p>')
            card3.text("Wind: " + forecastArray[i].wind.speed)
            var card4 = $('<p>')
            card4.text("Humidity: " + forecastArray[i].main.humidity)
            // console.log(card4)

            var card = $('<div>')
            card.addClass('card1')
            card.append(date, card1, card2, card3, card4)

            foreCast.append(card)

        //     // var foreCast = $('div')
        //     // foreCast.append(card1, card2, card3, card4)
        //     // var foreCast = $('<div>')
        //     // foreCast.append(card)
        //     // var foreCastHTML = $('#fiveDay')
        //     // foreCastHTML.append(foreCast)
        
        //     // classHead.append(foreCast)
        //     //  console.log(forecastArray[i].main.temp)
        //     // console.log(foreCast)
        }

    })
   
}})




    

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



        // var query1Day = "https://api.openweathermap.org/data/2.5/weather?q=" + searchVal + "&appid=69a234fe9433fd65a7b8623a7427cfc3"
    
    
//     fetch(query1Day)
//     .then(function (response){
//         return response.json();
//     })
//     .then(function(data){