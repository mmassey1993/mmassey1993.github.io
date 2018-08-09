'use strict';
function convertToEnglish() {
    var result;
    var d = new Date();
    var hour = d.getHours();
    var minute = d.getMinutes();
    var year = d.getFullYear();
    var month = d.getMonth();
    var day = d.getDay();
    var date = d.getDate();


    var hourMap = new Map();
    var englishWords = ["Twelve", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten", "Eleven", "Twelve", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten", "Eleven"];
    for (var i = 0; i < 24; i++) {
        hourMap.set(i, englishWords[i]);
    }

    var minuteMap = new Map();
    var englishWords2 = ["Oh Clock", "Oh One", "Oh Two", "Oh Three", "Oh Four", "Oh Five", "Oh Six", "Oh Seven", "Oh Eight", "Oh Nine", "Ten",
        "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen", "Seventeen", "Eighteen", "Nineteen", "Twenty",
        "Twenty One", "Twenty Two", "Twenty Three", "Twenty Four", "Twenty Five", "Twenty Six", "Twenty Seven", "Twenty Eight", "Twenty Nine", "Thirty",
        "Thirty One", "Thirty Two", "Thirty Three", "Thirty Four", "Thirty Five", "Thirty Six", "Thirty Seven", "Thirty Eight", "Thirty Nine", "Forty",
        "Forty One", "Forty Two", "Forty Three", "Forty Four", "Forty Five", "Forty Six", "Forty Seven", "Forty Eight", "Forty Nine", "Fifty",
        "Fifty One", "Fifty Two", "Fifty Three", "Fifty Four", "Fifty Five", "Fifty Six", "Fifty Seven", "Fifty Eight", "Fifty Nine"];
    for (var i = 0; i < 60; i++) {
        minuteMap.set(i, englishWords2[i]);
    }

    var dayMap = new Map();
    var englishDays= ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    for (var i = 0; i < 7; i++) {
        dayMap.set(i, englishDays[i]);
    }

    var monthMap = new Map();
    var englishMonths= ["January", "February ", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    for (var i = 0; i < 12; i++) {
        monthMap.set(i, englishMonths[i]);
    }

    var dateMap = new Map();
    var englishDates = ["first", "second", "third", "fourth", "fifth", "sixth", "seventh", "Eighth", "ninth", "tenth"];
    for (var i=0;i<11;i++){
        dateMap.set(i,englishDates[i]);
    }

    if (hour >= 12) {
        result = "It's " + hourMap.get(hour) + " " + minuteMap.get(minute) + " pm";
    } else {
        result = "It's " + hourMap.get(hour) + " " + minuteMap.get(minute) + " am";
    }


    year = "Two Thousand And Eighteen";
    var resultDate = "On " + dayMap.get(day-1) + " " + "the " + dateMap.get(date-1) + " of " + monthMap.get(month) + " " + year;


    var para = document.createElement("p");
    var text = document.createTextNode(result);
    para.appendChild(text);
    document.getElementById("div1").appendChild(para);

    var paraDate = document.createElement("p");
    var textDate = document.createTextNode(resultDate);
    paraDate.appendChild(textDate);
    document.getElementById("div1").appendChild(paraDate);

}

convertToEnglish();