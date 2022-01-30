Array.prototype.querySelectorAll = document.querySelectorAll;

class __ {
    constructor(query) {
        this.query = query;
        this.items = document.querySelectorAll(this.query);
    }

    
    //we need to return 'this' in every method in order to make them chainable, 
    //in some methods we probably want to return a list of instance references instead

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
        console.log(parents)
        return parents;
    }

    // 5. Get a list of all grandParents of the (2) CSS selector, if there are no grandparents, return empty.
    grandParent() {
        //return this;
    }

    // 6. Get a list of all ancestors of the (2) CSS Selector, if there are no ancestors, return empty.
    ancestor() {
        //return this;
    }

    onClick() {
        //return this;
    }

    insertText() {
        //return this;
    }

    append() {
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

    css() {
        //return this;
    }

    toggleClass() {
        //return this;
    }

    onSubmit() {
        //return this;
    }

    onInput() {
        //return this;
    }

}



var test = new __('#password').parent('form');

