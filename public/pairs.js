

function check_blanks() {
	var counter = 0;
	var elements = document.getElementById("input_form").elements;
	for (var i = 0, element; element = elements[i++];) {
	console.log(element.value);
	if (element.type === "text" && element.value === "") 
		counter = counter + 1;
	console.log("Counter is " + counter);
	}
	return counter
  }

var submit_pairs = document.querySelector("#submit_pairs");
submit_pairs.addEventListener("click", function() {

  	if (check_blanks() > 0){
  		alert("Fill in the blanks first");
  	}else{
  	
	var x = document.createElement("input");
	x.setAttribute("type","text");
	x.setAttribute("name","name[]");
	x.setAttribute("placeholder","Another Name");
	x.setAttribute("required", "required");
	var form = document.getElementById("input_form"); 
	form.append(x);
		}
});



var get_pairs = document.querySelector("#get_pairs");
get_pairs.addEventListener("click", function() {
	// alert("Hello");

	// if (count < 1) {
	// 	alert("You must enter at least two names");
	// }else{
	var x = document.querySelector("#get_pairs");
	x.setAttribute("type","submit");
});






