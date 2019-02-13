// Get a random integer from 1 to 10 inclusive
var num = Math.ceil(Math.random() * 10);
var gnum = prompt('Enter a number between 1 and 10');
if (gnum == num)
{
  alert ('Matched!');
} else {
  alert ('Not correct! The number was ' +num);
}
