var today = new Date();
var yyyy = today.getFullYear();
function findLeap()
{
 var leap = (yyyy - 2000);  // cheat: Assuming all years tested are > 2100 & < 2000
 if (leap % 4 ===0)
 {
  console.log("true");
 } else {
  console.log("false");
 }
}
// Is the year divisble by 4, then is it divisible by 100, then is it divisible by 400? All yes is a leap year.
