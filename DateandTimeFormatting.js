var today = new Date();
var day = today.getDay;
var daylist = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
console.log("Today is" + daylist[day] + ".");
var hours = today.getHours();
var minutes = today.getMinutes();
console.log("Current time is" + hours +":" + minutes + ".");
