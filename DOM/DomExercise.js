var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
let li = document.querySelectorAll("li");


function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	li.classList.add("done");
	li.classList.add("newItem");
	li.classList.toggle("done");
	let createButton = document.createElement("button");
	createButton.innerHTML = "Delete";
	li.appendChild(createButton)
	ul.appendChild(li);
	input.value = "";
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

// What I have written
let test = document.querySelector("li");

function toggleClass() {
	
	// for (let i = 0; i < li.length; i++) {
	// 	li[i].addEventListener("click", function() {
	// 		if (li[i].classList.contains("newItem")) {
	// 			li[i].classList.remove("newItem");
	// 			li[i].classList.toggle("done");
	// 		} else {
	// 			li[i].classList.toggle("done");
	// 		}
	// 	})
	// 	console.log(li)
	// }

	li.forEach(element => { 
		if (element.classList.contains("newItem")) {
				element.addEventListener("click", () => {
					element.classList.remove("newItem");
					element.classList.toggle("done");
					li = document.querySelectorAll("li")
			})
		 } else {
			element.addEventListener("click", () => {
				element.classList.toggle("done");
				li = document.querySelectorAll("li")
			})
		}

	});
	li = document.querySelectorAll("li")
}

ul.addEventListener("mouseenter", toggleClass );


function addButton() {			// Only working for the last list item.
	let createButton = document.createElement("button")
	createButton.innerHTML = "Delete"
	li.forEach(element => { 
		if (element.innerHTML.includes("Delete") === false) {
			element.appendChild(createButton)
		}
	});
}

function deleteButton() {
	
}

addButton();