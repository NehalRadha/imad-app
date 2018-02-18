///counter code
var button= document.getElementById('counter');
var counter=0;
button.onclick = function() {
  
  //create a request object 
  
  //var request= new XMLHttpRequest();
  
  //capture the response and store it in a variable
  
 //request.onreadystatechange= function() {
   // if(ready.readyState=== XMLHttpRequest.DONE) {
     //   //Take some action
       // if(request.status === 200){
         //   var counter = request.responseText;
           // var span=document.getElementById("çount");
            //span.innerHTML=counter.toString();
        //}
    //}  
    //not done yet
//};
// Make a request
  //  request.open('GET', 'http://nehalradha95.imad.hasura-app.io/counter',true);
    //request.send(null);

    counter = counter + 1;
    var span= document.getElementById("count");
    span.innerHTML = counter.toString();
    
    
};