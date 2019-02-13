var today = new Date();
// Write a JavaScript program to find 1st January is being a Sunday between 2014 and 2050.

function crunchit()
{
a1 = input.getFullYear();
if (a1 < 2050)
  {
  if (a1 > 2014)
    {
      var daylist = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
      b1 = input.getDay;
      c1 = daylist[b1];
      if (c1 === "Sunday")
      {
        results = "Date is a Sunday";
      } else {
        results = "Date is not a Sunday";
      }
    } else {
    results = "Date is less than 2014";
    }
  } else {
    results = "Date is greater than 2050";
  }
}
console.log(crunchit(input));
