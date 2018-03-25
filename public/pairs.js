// alert("CONNECTED!!");



var submit_pairs = document.querySelector("#submit_pairs");
submit_pairs.addEventListener("click", function() {
	// alert("Hello");
	var x = document.createElement("input");
	x.setAttribute("type","text");
	x.setAttribute("name","name[]");
	x.setAttribute("placeholder","Another Name");
	x.setAttribute("required", "required");
	var form = document.getElementById("input_form"); 
	form.append(x);
});
