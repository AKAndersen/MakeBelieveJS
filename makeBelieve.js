Array.prototype.querySelectorAll = document.querySelectorAll;

class __ {
    constructor(query) {
        this.query = query;
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
        return this.items; // <---- svona returnar það réttu value, en er ekki chainable :/ 
    }

    // 5. Get a list of all grandParents of the (2) CSS selector, if there are no grandparents, return empty.
    grandParent() {

    }

    // 6. Get a list of all ancestors of the (2) CSS Selector, if there are no ancestors, return empty.
    ancestor() {
        //return this;
    }

    onClick() {
        for (var i=0;i<this.items.length;i++){
            __(i).onClick(function(evt){
                console.log(evt.target.value)
            })
        }
    }

    insertText(text) {
        for (var i=0;i<this.items.length;i++){
            this.items[i].textContent = text;
        }
        return this;
    }

    append(elem) {
        //return this;
    }

    prepend() {
        //return this;
    }

    delete() {
        //return this;
    }

    ajax() {
        //return this;
    }

    css(elem, value) {
        for (var i=0;i<this.items.length;i++){
            __(i).css(elem, value)
        }
    }

    toggleClass(elem) {
        for(var i=0;i.this.items.length;i++){
            __(i).toggleClass(elem)
        }
    }

    onSubmit() {
        for (var i=0;i<this.items.length;i++){
            __(i).onSubmit(function(evt){
                console.log(evt.target.value)
            })
        }
    }

    onInput() {
        for (var i=0;i<this.items.length;i++){
            __(i).onInput(function(evt){
                console.log(evt.target.value)
            })
        }
    }

}



var test = new __('#password').parent().insertText("tttttt")

