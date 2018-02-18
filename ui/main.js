///counter code
var button= document.getElementById("counter");
button.onclick = function() {
  
  //create a request object 
  
  var request= new XMLHttpRequest();
  
  //capture the response and store it in a variable
  
  request.onreadystatechange= function() {
    if(ready.readyState=== XMLHttpRequest.DONE) {
        //Take some action
        if(request.status === 200){
            var counter = request.responseText;
            var span=document.getElementById("çount");
            span.innerHTML=counter.toString();
        }
    }  
    //not done yet
};
// Make a request
    request.open('GET', 'http://nehalradha95.imad.hasura-app.io/counter',true);
    request.send(null);
};