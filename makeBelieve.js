
class __ {
    constructor(query) {
        this.query = query;
        // 2. Implement a query selector.
        this.items = document.querySelectorAll(this.query);
        //this.forms = document.getElementById("#form"); <-- Þetta ætti að vera óþarfi held ég, queryselectorAll() getur tekið inn hvaða query sem er. 
        //this.inputs = document.getElementById("#input")
        
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
        return this.items; // <---- svona returnar það réttu value, en er ekki chainable :/ 
    }

    // 5. Get a list of all grandParents of the (2.) CSS selector, if there are no grandparents, return empty.
    grandParent() {

    }

    // 6. Get a list of all ancestors of the (2.) CSS Selector, if there are no ancestors, return empty.
    ancestor() {
        //return this;
    }

    // 7. Implement a click handler. The fallback should have access to the event and should refere to it self.
    onClick() {
        for (var i=0;i<this.items.length;i++){
            __(i).onClick(function(evt){
                console.log(evt.target.value)
            })
            return this.items;
        }
    }

    // 8. Inmplement a method which allows you to insert text to element. Previous text should be overwritten.
    insertText(text) {
        for (var i=0;i<this.items.length;i++){
            this.items[i].textContent = text;
        }
        return this;
    }

    // 9. Implement a method which allows you to apend new HTML to an element. String as parameter or an actual DOM element.
    append(elem) {
        //return this;
        var apend = [];
        for (var i=0;i<this.items.length;i++){
            apend.push(this.items, elem);
        };
    }

    //10. Implement a method which allows you to prepend new HTML to an element. Similar to (9.), inserts before rather than after.
    prepend(elem) {
        var prepend = []
        for (var i=0;i<this.items.length;i++){
            prepend.insertBefore(this.items, elem);
        };
    }

    // 11. Implement a method which deletes an element.
    delete() {
        var deletion = []
        for (var i=0;i<this.items.length;i++){
            deletion.remove(this.items[i]);
        };
    }

    // 12. Implement a method which imitates the JQuery ajax method. Parameter is an object which contains the configuration for the HTTP request
    ajax(URL, Method, Timeout, Data, headers) {
        //return this;
        
    }

    // 13. Implements a method called css(), changes the css styles on the element.
    css(elem, value) {
        for (var i=0;i<this.items.length;i++){
            __(i).css(elem, value)
        }
    }
    // 14. toggles css clas for an element
    toggleClass(elem) {
        for(var i=0;i.this.items.length;i++){
            __(i).toggleClass(elem)
        }
    }

    // 15. Submit hadnler for forms. Should only target forms.
    onSubmit() {
        for (var i=0;i<this.forms.length;i++){
            __(i).onSubmit(function(evt){
                console.log(evt.target.value)
            })
        }
    }

    // 16. Input handler for input tags.
    onInput() {
        for (var i=0;i<this.items.length;i++){
            __(i).onInput(function(evt){
                console.log(evt.target.value)
            })
        }
    }

}



var test = new __('#password').parent().insertText("tttttt")

