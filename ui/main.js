///counter code
var button= document.getElementById('counter');

button.onclick = function() {
  
  //create a request object 
  
  var request= new XMLHttpRequest();
  
  //capture the response and store it in a variable
  
 request.onreadystatechange= function() {
    if(request.readyState=== XMLHttpRequest.DONE) {
       //Take some action
        if(request.status === 200){
            var names=request.responseText;
            name=JSON.parse(names);
            var list='';
            for(var i=0; i<names.length; i++){
                list+="<li>" + names[i] + "</li>";
        }
var ul = document.getElementById("namelist");
ul.innerHTML=list;
        }
    }  
   //not yet done
};
// Make a request
    request.open('GET', 'http://nehalradha95.imad.hasura-app.io/submit-name?name=' + name,true);
    request.send(null);
};

//Submit name
var nameInput=document.getElementById("name");
var name=nameInput.value;
var submit=document.getElementById("submit_btn");
submit.onclick= function() {
//Make the request to the server and send the name
//Capture a list of name and render it as a list

};