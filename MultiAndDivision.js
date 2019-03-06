//* Calculate Multipication and Division of two numbers from  Users

fucntion mutiplyBy();
{
  num1 = document.GetElementByID("firstnum").value;
  num2 = document.GetElementByID("secondnum").value;
  document.GetElementByID("result").innerHTML = num1 * num2;
}
function divideBy();
{
  num1 = document.GetElementByID("firstnum").value;
  num2 = document.GetElementByID("secondnum").value;
  document.GetElementByID("result").innerHTMl = num1 / num2;
}



<!DOCTYPE html>
<html>
<head>
<meta charset=utf-8 />
<title>JavaScript program to calculate multiplication and division of two numbers </title>
<style type="text/css">
body {margin: 30px;}
</style>
</head>
<body>
<form>
1st Number : <input type="text" id="firstnum" /><br>
2nd Number: <input type="text" id="secondnum" /><br>
<input type="button" onClick="multiplyBy()" Value="Multiply" />
<input type="button" onClick="divideBy()" Value="Divide" />
</form>
<p>The Result is : <br>
<span id = "result"></span>
</p>
</body>
</html>
