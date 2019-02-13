var a1 = 5
var b1 = 6
var c1 = 7
function triagCalc ();
{
var side = (a1 * b1 * c1)/2;
var area = Math.sqrt(side*((side-a1)*(side-b1)*(side-c1)));
console.log("The area of the triangle is "+ area);
}
