
class __ {
    constructor(query) {
        this.query = query;

    }

    // 1. Use __(doubleunderscore) as a keyword functionality.

  

    // 2. Query select, get every element within the DOM with a valid CSS selector.
    cssSelector(){
        var inputs = __(".password");
        return inputs
    }

    // 3. we need to return 'this' in every method in order to make them chainable, 
    //in some methods we probably want to return a list of instance references instead

    //4. Get a list of all parents of the (2) CSS selector, if there are no parents, return empty.
    parent() {
        //return this;
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



var ut = new __('t');

ut.test().test2();
