var box_counter = 1;


function check_blanks() {
	var empty_counter = 0
	var elements = document.getElementById("input_form").elements;
	for (var i = 0, element; element = elements[i++];) {
	console.log(element.value);
	if (element.type === "text" && element.value === "") 
		empty_counter = empty_counter + 1;
	
	}
	console.log("Blank Field counter is " + empty_counter);
	return empty_counter
  }

var submit_pairs = document.querySelector("#input_form");
submit_pairs.addEventListener("input", function() {
	// text_boxes = document.getElementsByClassName("input_text")
	console.log("Total boxes " + box_counter)
  	if (check_blanks() == 0){
  		// alert("Fill in the blanks first");
  	
	var x = document.createElement("input");
	x.setAttribute("type","text");
	x.setAttribute("name","name[]");
	x.setAttribute("placeholder","Another Name");
	x.setAttribute("autocomplete", "off");
	x.setAttribute("class", "input_text");
	var form = document.getElementById("input_form"); 
	form.append(x);
	box_counter += 1;
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






