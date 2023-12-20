var searchImput = $('#search-input')
var searchBtn = $('#search-button')
var history = $('#history')
var today = $('#today')
var foreCast = $('#fiveDay')
var day = dayjs().format('DD-MM-YYYY')

if(localStorage.getItem('data') === null){
    localStorage.setItem('data', '[]');
}
var oldData = JSON.parse(localStorage.getItem('data'));
console.log(oldData)

if(localStorage.getItem('data')!= null){
    
    for(j=0; j < oldData.length; j++){
    imputBtn = $('<button>')
    imputBtn.addClass('localBTN')
    // console.log(oldData)
    imputBtn.text(oldData[j])
    // console.log(imputBtn)
    $('#history').append(imputBtn)
}}

var storageBTN = $('.localBTN')
storageBTN.on('click', function(event){
    event.preventDefault()
    today.empty()
    foreCast.empty()
    searchVal = event.target.innerHTML
    console.log(searchVal)

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
    var iconSin = $('<img>')
    iconSin.attr('src', 'https://openweathermap.org/img/w/' + data.list[0].weather[0].icon + '.png')
    console.log(iconSin)

    p1.text(searchVal + '  ' + day)
    p1.append(iconSin)
    var p2 = $('<p>')
    p2.text("Temp: " + data.list[0].main.temp)
    var p3 = $('<p>')
    p3.text("Wind: " + data.list[0].wind.speed)
    var p4 = $('<p>')
    p4.text("Humidity: " + data.list[0].main.humidity)
    singleDay.append(p1, p2, p3, p4)
    today.append(singleDay)
    singleDay.addClass('singleBox')
    
    var forecastArray = data.list
    for(i = 0; i < forecastArray.length; i++){

        
        var date = $('<h3>')
        date.text(forecastArray[i].dt_txt)
        // console.log(date)
        var card1 = $('<img>')
        card1.attr('src', 'https://openweathermap.org/img/w/' + data.list[i].weather[0].icon + '.png')
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

        var foreHead = $('#foreHead')
        foreHead.text('5-Day 3 Hour Forecast:')

    }

    })

})

searchBtn.on('click', function(event){
    event.preventDefault()
    today.empty()
    $('#history').empty()
    var searchVal = searchImput.val().trim()

        console.log(searchVal)
    


        var newData = searchVal
        console.log(newData)
    

    
            //get old data//
            if(localStorage.getItem('data') === null){
                localStorage.setItem('data', '[]');
            }
            var oldData = JSON.parse(localStorage.getItem('data'));
            console.log(oldData)
            if(!oldData.includes(newData)){

            oldData.push(newData);
            console.log(oldData)
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
        var iconSin = $('<img>')
        iconSin.attr('src', 'https://openweathermap.org/img/w/' + data.list[0].weather[0].icon + '.png')
        
        p1.text(searchVal + '  ' + day)
        p1.append(iconSin)
        var p2 = $('<p>')
        p2.text("Temp: " + data.list[0].main.temp)
        var p3 = $('<p>')
        p3.text("Wind: " + data.list[0].wind.speed)
        var p4 = $('<p>')
        p4.text("Humidity: " + data.list[0].main.humidity)
        singleDay.append(p1, p2, p3, p4)
        today.append(singleDay)

        singleDay.addClass('singleBox')
    

        var forecastArray = data.list
        for(i = 0; i < forecastArray.length; i++){

            
            var date = $('<h3>')
            date.text(forecastArray[i].dt_txt)
            // console.log(date)
            var card1 = $('<img>')
            card1.attr('src', 'https://openweathermap.org/img/w/' + data.list[i].weather[0].icon + '.png')
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

            var foreHead = $('#foreHead')
            foreHead.text('5-Day 3 Hour Forecast:')

        }

    })
   }
})