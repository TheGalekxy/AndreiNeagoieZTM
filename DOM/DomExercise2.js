var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
let liList = document.querySelectorAll("li");		// selects all the 'li' elements in a node list format
let createButton = document.createElement("button")		// variable which creates a "button" element in the dom

function inputLength() {
	return input.value.length;
}

function createListElement() {
	
	var li = document.createElement("li");				// creates a variable to create an 'li' element
	let deleteButton = document.createElement("button")	;	// creates a variable to create a 'button' element
	deleteButton.innerHTML = "Delete";					// adds the text of "delete" to the delete button
	deleteButton.addEventListener('click', element => {		// adds an event listener to the delete button that removes the associated li from the ul when it is clicked
		ul.removeChild(li);
	}); 
	li.appendChild(document.createTextNode(input.value));	// creates a text note of the input value and appends it onto the li
	li.appendChild(deleteButton);	// appends the delete button onto the li
	li.classList.add('done');		// adds 'done' to the classes of the li
	li.classList.toggle('done');	// toggles that 'done' class so it doesn't get created crossed out
	li.addEventListener('click', element => {	// adds an event listener to the li that toggles the 'done' class every time it is clicked
		li.classList.toggle('done');
	})
	ul.appendChild(li);		// adds the created li to the ul
	input.value = "";		// resets the input value to ''
	
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


// 1. If you click on the list item, it toggles the .done  class on and off.

liList.forEach(item => {		// loops through the node list of li's and adds an event listener to each li that toggles the classList 'done'... this is just for the li's that were originally part of the list
		item.addEventListener('click', event => {
			item.classList.toggle('done')
		})
	});


// 2. Add buttons next to each list item to delete the item when clicked on its corresponding delete button.



liList.forEach(item => {		// loops through the node list of li's
		createButton = document.createElement("button")	; // creates a button		
		createButton.innerHTML = "Delete";	// adds the 'delete' text to the created button
		createButton.addEventListener('click', event => ul.removeChild(item)) // adds an event listener to the created button which removes the item(li) from the ul if clicked
		item.appendChild(createButton); // adds the button to the item(li)

});



// 3. BONUS: When adding a new list item, it automatically adds the delete button next to it (hint: be sure to check if new items are clickable too!)