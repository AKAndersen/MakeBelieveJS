

__ = (query) => {
    this.query = query;
    return new makeBelieve(document.querySelectorAll(this.query)) 
}

class makeBelieve {
    constructor(makeBelieveObject) {
        // 2. Implement a query selector.
        this.makeBelieveObject = makeBelieveObject;    
    }
    

    //4. Get a list of all parents of the (2) CSS selector, if there are no parents, return empty.
    parent() {
        var parents = [];
        for (var i=0;i<this.makeBelieveObject.length;i++){
            parents.push(this.makeBelieveObject[i].parentNode);
        };
        if (arguments[0]){
            //empty the previously filled list
            parents = []
            for (var i=0;i<this.makeBelieveObject.length;i++){
                if (this.makeBelieveObject[i].parentNode.matches(arguments[0])){
                    parents.push(this.makeBelieveObject[i].parentNode);
                }
            };
        }
        this.makeBelieveObject = parents
        console.log(this) 
        return this; 
    };
    
    
    
    // 5. Get a list of all grandParents of the (2.) CSS selector, if there are no grandparents, return empty.
    grandParent() {
        var grandparents = [];
        for (var i=0;i<this.makeBelieveObject.length;i++){
            grandparents.push(this.makeBelieveObject[i].parentNode.parentNode);
        };
        if (arguments[0]){
            //empty the previously filled list
            grandparents = []
            for (var i=0;i<this.makeBelieveObject.length;i++){
                if (this.makeBelieveObject[i].parentNode.parentNode.matches(arguments[0])){
                    grandparents.push(this.makeBelieveObject[i].parentNode.parentNode);
                }
            };
        }
        console.log(grandparents)
        this.makeBelieveObject = grandparents 
        return this;
    }

    // 6. Get a list of all ancestors of the (2.) CSS Selector, if there are no ancestors, return empty.
    ancestor() {
        var ancestors = [];
        for (var i=0;i<this.makeBelieveObject.length;i++){
            var current_element = this.makeBelieveObject[i].parentNode.parentNode;
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
            for (var i=0;i<this.makeBelieveObject.length;i++){
                var current_element = this.makeBelieveObject[i].parentNode.parentNode;
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
        this.makeBelieveObject = ancestors;
        console.log(this)
        return this
    }

    // 7. Implement a click handler. The fallback should have access to the event and should refere to it self.
    onClick(callback){
        for (var i = 0; i < this.makeBelieveObject.length; i++) {
            this.makeBelieveObject[i].onclick = function(){callback.apply(this, callback.arguments)}
        }
        return this;
    }
     
    
    // 8. Inmplement a method which allows you to insert text to element. Previous text should be overwritten.
    insertText(text) {
        for (var i=0;i<this.makeBelieveObject.length;i++){
            this.makeBelieveObject[i].textContent = text;
        }
        return this;
    }

    // 9. Implement a method which allows you to apend new HTML to an element. String as parameter or an actual DOM element.
    append() {
        if (typeof(arguments[0]) == 'string'){
            for (var i=0;i<this.makeBelieveObject.length;i++){
                this.makeBelieveObject[i].insertAdjacentHTML('beforeend',arguments[0]);
            }
        }
        else{
            var element = arguments[0];
            for (var i=0;i<this.makeBelieveObject.length;i++){
                this.makeBelieveObject[i].insertAdjacentElement('beforeend',element.cloneNode(true))
            }
        }

        return this
    }

    //10. Implement a method which allows you to prepend new HTML to an element. Similar to (9.), inserts before rather than after.
    prepend() {
        if (typeof(arguments[0]) == 'string'){
            for (var i=0;i<this.makeBelieveObject.length;i++){
                this.makeBelieveObject[i].insertAdjacentHTML('afterbegin',arguments[0]);
            }
        }
        else{
            var element = arguments[0];
            for (var i=0;i<this.makeBelieveObject.length;i++){
                this.makeBelieveObject[i].insertAdjacentElement('afterbegin',element.cloneNode(true))
            }
        }
        return this
    }

    // 11. Implement a method which deletes an element.
    delete() {
        for (var i=0;i<this.makeBelieveObject.length;i++){
            this.makeBelieveObject[i].remove();
        }
        return this
    }

    // 12. Implement a method which imitates the JQuery ajax method. Parameter is an object which contains the configuration for the HTTP request
    async ajax(ajaxObject) {
        if (typeof(ajaxObject.url) == 'undefined'){
            throw new Error('no url provided')
        }
        if (typeof(ajaxObject.method) == 'undefined'){
            ajaxObject.method = 'GET'
        }
        if (typeof(ajaxObject.timeout) == 'undefined'){
            ajaxObject.timeout = 0
        }
        if (typeof(ajaxObject.data) == 'undefined'){
            ajaxObject.data = {}
        }
        if (typeof(ajaxObject.headers) == 'undefined'){
            ajaxObject.headers= []
        }
        if (typeof(ajaxObject.success) == 'undefined'){
            ajaxObject.success = null
        }
        if (typeof(ajaxObject.fail) == 'undefined'){
            ajaxObject.fail = null
        }
        if (typeof(ajaxObject.beforeSend) == 'undefined'){
            ajaxObject.beforeSend = null
        }
        const xhttp = new XMLHttpRequest();

        xhttp.open(ajaxObject.method,ajaxObject.url)

        for (var i=0;i<ajaxObject.headers.length;i++){
            xhttp.setRequestHeader(ajaxObject.headers[i][0],ajaxObject.headers[i][1]);
        }

        xhttp.timeout = ajaxObject.timeout * 1000; //change seconds to milliseconds

        xhttp.ontimeout = ajaxObject.fail;
        xhttp.onload = function() {
            try{
                if (xhttp.readyState === 4) {
                    if (xhttp.status.toString()[0] == '2') {
                        if (ajaxObject.success != null){
                            ajaxObject.success(xhttp);
                        }
                    } else {
                        if (ajaxObject.fail != null){
                            ajaxObject.fail(xhttp);
                        }
                    }
                }
            }
            catch(error){
                ajaxObject.fail(error)
            }  
        };
        
        if (ajaxObject.beforeSend != null && typeof(ajaxObject.beforeSend) != 'undefined'){
            await ajaxObject.beforeSend(xhttp)
            try{
                xhttp.send(ajaxObject.data);
            }
            catch(error){
                ajaxObject.fail(error)
            }
        }
        else{
            try{
                xhttp.send(ajaxObject.data);
            }
            catch(error){
                ajaxObject.fail(error)
            }
        }

        
        
        
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

//tests

//parent
//__('#password').parent().parent();

//button
/*var test = new __('button').onClick(function(){
    console.log(this)
});*/

//append
//var test = __('form').append('<p>I am an appened paragraph</p>');
/*var test = __('button').append(
    document.createElement('p').appendChild(
        document.createTextNode('I am an appended paragraph.')
    )
)*/

//prepend
//var test = __('form').prepend('<p>I am an prepended paragraph</p>')
/*var pElem = document.createElement('p');
pElem.appendChild(document.createTextNode('I am an appended paragraph'));
var test = __('button').prepend(pElem)*/

//delete
//__('.root').delete();

//ajax


/*__().ajax({
    url:'https://serene-island-81305.herokuapp.com/api/400',
    method: 'GET',
    headers: {'Access-Control-Allow-Origin':'https://serene-island-81305.herokuapp.com/api/2300'},
    success: function(resp){
        console.log(resp.responseText)
    },
    beforeSend: function(whatever){
        console.log("before")
    },
    fail: function(error){
        console.log("fail\n")
        console.log(error);
    }
})*/


__().ajax({
    url:'https://serene-island-81305.herokuapp.com/api/200',
    method: 'POST',
    data: {'123':'abc'},
    headers: {'Access-Control-Allow-Origin':'https://serene-island-81305.herokuapp.com/api/2300'},
    success: function(resp){
        console.log(resp.responseText)
        console.log(resp)
    },
    beforeSend: function(whatever){
        console.log("before")
    },
    fail: function(error){
        console.log("fail")
        console.log(error);
    }
})

