﻿
// to validate birthday is not in future --
//   check constraint won't allow it -- but returns error page
//
var today = new Date();
var dd = today.getDate();
var mm = today.getMonth()+1; //January is 0!
var yyyy = today.getFullYear();

 if(dd<10){
        dd='0'+dd
    } 
    if(mm<10){
        mm='0'+mm
    } 

today = yyyy + '-' + mm + '-' + dd;

document.getElementById("bday").setAttribute("max", today);

// okay, so this doesn't give an error message page (Good!) -->
// but neither does it reflect any user message on * this * page-- >
// it simply doesn't let you click on a date that's in the future! -- >