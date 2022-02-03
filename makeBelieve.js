

class __ {
    constructor(query) {
        this.query = query;
        // 2. Implement a query selector.
        this.items = document.querySelectorAll(this.query);    
    }
    

    //4. Get a list of all parents of the (2) CSS selector, if there are no parents, return empty.
    parent() {
        var parents = [];
        for (var i=0;i<this.items.length;i++){
            parents.push(this.items[i].parentNode);
        };
        if (arguments[0]){
            //empty the previously filled list
            parents = []
            for (var i=0;i<this.items.length;i++){
                if (this.items[i].parentNode.matches(arguments[0])){
                    parents.push(this.items[i].parentNode);
                }
            };
        }
        this.items = parents 
        console.log(this.items)
        return this.items; // <---- svona returnar það réttu value, en er ekki chainable :/ 
    };
    
    

    // 5. Get a list of all grandParents of the (2.) CSS selector, if there are no grandparents, return empty.
    grandParent() {
        var grandparents = [];
        for (var i=0;i<this.items.length;i++){
            grandparents.push(this.items[i].parentNode.parentNode);
        };
        if (arguments[0]){
            //empty the previously filled list
            grandparents = []
            for (var i=0;i<this.items.length;i++){
                if (this.items[i].parentNode.parentNode.matches(arguments[0])){
                    grandparents.push(this.items[i].parentNode.parentNode);
                }
            };
        }
        console.log(grandparents)
        this.items = grandparents 
        return this.items;
    }

    // 6. Get a list of all ancestors of the (2.) CSS Selector, if there are no ancestors, return empty.
    ancestor() {
        var ancestors = [];
        for (var i=0;i<this.items.length;i++){
            var current_element = this.items[i].parentNode.parentNode;
            while(true){
                if (current_element.parentNode == null || current_element.parentNode.toString() == "[object HTMLDocument]"){
                    break
                }
                else{
                    current_element = current_element.parentNode;
                    ancestors.push(current_element);
                }
                
            }
        }
        
        if (arguments[0]){
            ancestors = [];
            for (var i=0;i<this.items.length;i++){
                var current_element = this.items[i].parentNode.parentNode;
                while(true){
                    if (current_element.parentNode == null || current_element.parentNode.toString() == "[object HTMLDocument]"){
                        break
                    }
                    else{
                        current_element = current_element.parentNode;
                        if (current_element.matches(arguments[0])){
                            ancestors.push(current_element);
                        }
                    }
                }
            }
        }
        this.items = ancestors;
        return this.items
    }

    // 7. Implement a click handler. The fallback should have access to the event and should refere to it self.
    onClick(callback){
        for (var i = 0; i < this.items.length; i++) {
            this.items[i].onclick = function(){callback.apply(this, callback.arguments)}
        }
        return this;
    }
     
    
    // 8. Inmplement a method which allows you to insert text to element. Previous text should be overwritten.
    insertText(text) {
        for (var i=0;i<this.items.length;i++){
            this.items[i].textContent = text;
        }
        return this;
    }

    // 9. Implement a method which allows you to apend new HTML to an element. String as parameter or an actual DOM element.
    append() {
        //return this;

    }

    //10. Implement a method which allows you to prepend new HTML to an element. Similar to (9.), inserts before rather than after.
    prepend(elem) {
 
    }

    // 11. Implement a method which deletes an element.
    delete() {

    }

    // 12. Implement a method which imitates the JQuery ajax method. Parameter is an object which contains the configuration for the HTTP request
    ajax(URL, Method, Timeout, Data, headers) {
        //return this;
        
    }

    // 13. Implements a method called css(), changes the css styles on the element.
    css(elem, value) {

    }
    // 14. toggles css clas for an element
    toggleClass(elem) {
   
    }

    // 15. Submit hadnler for forms. Should only target forms.
    onSubmit() {
    }

    // 16. Input handler for input tags.
    onInput() {

    }

}

var test = new __('#password').ancestor(".root");


/*var test = new __('button').onClick(function(){
    console.log(this)
});*/

