
class __ {
    constructor(query) {
        this.query = query;
        var items = document.querySelectorAll(this.query);

        return items
    }

    //we need to return 'this' in every method in order to make them chainable, 
    //in some methods we probably want to return a list of instance references instead
    parent() {
        //return this;
    }

    grandParent() {
        //return this;
    }

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


var test = new __('#test input');

