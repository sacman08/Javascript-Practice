//* Write a program to convert temp from celius to Farenheit & back c/5 = (f-32)/9

function cToF(celsius)
{
  var cTemp = celsius;
  var cToFahr = cTemp * 9 / 5 + 32;
  var message = cTemp+'\xB0C is ' + cToFahr + ' \xB0F.';
    console.log(message);
}

function fToC(fahrenheit)
{
  var fTemp = fahrenheit;
  var fToCel = (fTemp - 32) * 5 / 9;
  var message = fTemp+'\xB0F is ' + fToCel + '\xB0C.';
    console.log(message);
}
cToF(60);
fToC(45);


<!DOCTYPE html>
<html>
<head>
<meta charset=utf-8 />
<title>JavaScript program to convert tempuratures from C to F or vice versa. </title>
<style type="text/css">
body {margin: 30px;}
</style>
</head>
<body>
<form>
TemptoC : <input type="text" id="celcius" /><br>
TemptoF: <input type="text" id="fahrenheit" /><br>
<input type="button" onClick="CtoF()" Value="Celsius" />
<input type="button" onClick="fToC()" Value="Fahrenheit" />
</form>
<p>The Result is : <br>
<span id = "result"></span>
</p>
</body>
</html>
