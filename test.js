/*//Query Selector
var selection = document.querySelector("*")

//Parent


//Click
__(selection).click(function(){
    console.log("virkar!");
  });


//Append
$(selection).click(function(){
    $(selection).append("<b>Appended text</b>");
  });*/


element = document.createElement('p').appendChild(document.createTextNode('i am an appanded element'))

console.log(element)