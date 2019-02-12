var begin = false;

function start (){
	begin = true;
	console.log("start");
	document.GetElementById("player").id = "current";
}

function rock(){
	if (begin == true) {
		console.log("rock");
	}
	else {
		console.log("not yet started");
	}
}
function paper(){
	if (begin == true) {
		console.log("paper");
	}
	else {
		console.log("not yet started");
	}
}
function scissors(){
	if (begin == true) {
		console.log("scissors");
	}
	else {
		console.log("not yet started");
	}
}
