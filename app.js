//display current date and time in header
var currentDay = moment().format("LLLL");
document.querySelector("#currentDay").innerHTML = currentDay;
///////////////////////////////////////////////////////////////

var saveBox = $(".fa-save");
console.log(saveBox);

//format time for input boxes
let militaryTime = moment().format("HH");

//hold militarytime and compare to another number
let MilitaryTimeInt = parseInt(militaryTime);
console.log(militaryTime)

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


$(document).ready(function() {
//$(".container").find("textarea");
console.log($(".container").find("textarea"))

//input box color changes based on the hour of the day
$('textarea').each(function (_, el){

    var elId = $(el).attr('id');
    var textHour = +elId.replace('text', '');
    var currentHour = moment().hour();
    //var currentHour = 12;

    if (textHour === currentHour) {
        $(el).addClass('present');

    } else if(textHour > currentHour ) {
        $(el).addClass('future');
    }
    else {
        $(el).addClass('past');
    }
});




/*for (let i = 9; i < 17; i++) {

    var textInput = $("textarea").attr('hour');
    console.log(textInput);
    var textInputInt = parseInt(textInput);
    console.log(textInputInt)

    if (MilitaryTimeInt > textInputInt) {
        textInput.addClass(".past")
        console.log(textInput.addClass(".past"))
    }
}*/




//button to save to local storage
saveBox.on("mouseenter", function () {
    $(this).addClass('hover');
});


//click button will save userinput to storage
saveBox.on("click", function() {
    const elements = document.getElementsByTagName("button");
    

});



});







