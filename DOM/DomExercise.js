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

function addButton() {			// Only working for the last list item.
	let createButton = document.createElement("button")
	createButton.innerHTML = "Delete"
	test.forEach(element => { 
		if (element.innerHTML.includes("Delete") === false) {
			element.appendChild(createButton);
			

		}
	});
	test = document.querySelectorAll("li").forEach(item => {
		item.addEventListener('click', event => {
			item.classList.toggle('done')
		})
	});
}

let test = document.querySelectorAll("li").forEach(item => {
	item.addEventListener('click', event => {
		item.classList.toggle('done')
	})
});

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

// What I have written

// 1. If you click on the list item, it toggles the .done  class on and off.

// 2. Add buttons next to each list item to delete the item when clicked on its corresponding delete button.

// 3. BONUS: When adding a new list item, it automatically adds the delete button next to it (hint: be sure to check if new items are clickable too!)

// let test = document.querySelectorAll("li").forEach(item => {
// 	item.addEventListener('click', event => {
// 		item.classList.toggle('done')
// 	})
// });


function toggleClass() {
	
	// console.log(test)

	// for (let i = 0; i < li.length; i++) {
	// 	li[i].addEventListener("click", function() {
	// 	  li[i].classList.toggle("done");
	// 	  console.log(li[i])
	// 	});
	// }

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

	// li.forEach(element => { 
	// 	if (element.classList.contains("newItem")) {
	// 			element.addEventListener("click", () => {
	// 				element.classList.remove("newItem");
	// 				element.classList.toggle("done");
	// 				li = document.querySelectorAll("li")
	// 		})
	// 	 } else {
	// 		element.addEventListener("click", () => {
	// 			element.classList.toggle("done");
	// 			li = document.querySelectorAll("li")
	// 		})
	// 	}

	// });
	// li = document.querySelectorAll("li")
}

test.addEventListener("click", toggleClass );


function addButton() {			// Only working for the last list item.
	let createButton = document.createElement("button")
	createButton.innerHTML = "Delete"
	li.forEach(element => { 
		if (element.innerHTML.includes("Delete") === false) {
			element.appendChild(createButton);
			
		}
		test = document.querySelectorAll("li").forEach(item => {
			item.addEventListener('click', event => {
				item.classList.toggle('done')
			})
		});
	});
}

// function deleteButton() {
	
// }

addButton();