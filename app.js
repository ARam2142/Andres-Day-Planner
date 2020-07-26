//display current date and time in header
var currentDay = moment().format("LLLL");
document.querySelector("#currentDay").innerHTML = currentDay;
///////////////////////////////////////////////////////////////

//format time for input boxes
let militaryTime = moment().format("HH");

//cited: worked with tutor//
//set the attributes to its time input block
$("#text9").attr("hour", moment("9:00 AM", "h:mm a").format("HH"));
$("#text10").attr("hour", moment("10:00 AM", "h:mm a").format("HH"));
$("#text11").attr("hour", moment("11:00 AM", "h:mm a").format("HH"));
$("#text12").attr("hour", moment("12:00 PM", "h:mm a").format("HH"));
$("#text13").attr("hour", moment("1:00 PM", "h:mm a").format("HH"));
$("#text14").attr("hour", moment("2:00 AM", "h:mm a").format("HH"));
$("#text15").attr("hour", moment("3:00 AM", "h:mm a").format("HH"));
$("#text16").attr("hour", moment("4:00 PM", "h:mm a").format("HH"));
$("#text17").attr("hour", moment("5:00 PM", "h:mm a").format("HH"));


$(document).ready(function(e) {
//$(".container").find("textarea");
console.log($(".container").find("textarea"))

//input box color changes based on the hour of the day
//works cited: worked on with tutor
$('textarea').each(function (i,el){
    var elId = $(el).attr('id');
    var textHour = +elId.replace('text','');
    var currentHour = moment().hour();
    //var currentHour = 9;

    if (textHour === currentHour) {
        $(el).addClass('present');

    } else if(textHour > currentHour) {
        $(el).addClass('future');
    }
    else {
        $(el).addClass('past');
    }  

});

/////local storage section

//button for saving users input
var saveBox = $(".fa-save");
console.log(saveBox);

var textBox = $('textarea');
console.log(textBox);

/*
$('textarea').keypress(function () {
    //var hour = $(this).attr('hour')
    var plans = $(this).val();
    console.log(hour)

    const saveToStorage = localStorage.setItem(plans, hour);
    localStorage.getItem(plans);

});*/




saveBox.on('click', function() {
    //e.preventDefault();
    $('textarea').each(function() {
         // set a variable to select the textareas attributes
        var hour = $(this).attr('hour');
        //console.log(hour)
        //set a variable to select value of users input at certain hour
        var plans = $(this).val();
        //i saved the hour's plan to local storage
        localStorage.setItem(hour, plans);
        //var hourInput = localStorage.getItem(hour)
    });
});

function makePlans(i) {
    //populate hours into local storage
    $('textarea').each(function() {
        var time = localStorage.getItem([i])
    });
   
}
makePlans();

//write code to save plans to calendar
});

