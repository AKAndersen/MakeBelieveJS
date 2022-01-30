//1. use __ (double underscore) as a keyword for your functionality

//2. Query selector, get every element within the dom with a valid CSS selector.
var get_element=__(".my-form")

//3.All methods should be chainable, so you can call multiple MakeBelieve functions in a single chain

//4. Get all parents of the CSS selector. If no parents, list will be empty.
var allParents = __(".password").parent()

//5. Get the first element from (3.) which is considered a grandparent
var grandparent = __(".password").grandParent()

//6. Get the first lement of (3.) which is considered a ancestor
var ancestor = __(".password").ancestor()

//7. Implement a click handler.
var logPassword = __(".password").onClick(function (evt) {
    console.log(evt.target.value)
})

//8. Implement a method which allows you to insert a text to element. Overwritten previous text.
var instertText = __(".password").instertText('inserting')

//9. Append new HTML to an element.


