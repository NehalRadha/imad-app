

//Submit username/ password to login

var submit=document.getElementById("submit_btn");
submit.onclick= function() {
     //create a request object 
  
  var request= new XMLHttpRequest();
  
  //capture the response and store it in a variable
  
 request.onreadystatechange= function() {
    if(request.readyState=== XMLHttpRequest.DONE) {
       //Take some action
        if(request.status === 200){
           alert('Logged in Successfully');
        }else if(request.status===403){
            alert('Username /Password incorrect');
        }else if (request.status===500){
            alert('something went wrong on the server');
        }
    }
    
   //not yet done
};
// Make a request
    var username=document.getElementById("username").value;
    var password=document.getElementById("password").value;
    console.log(username);
    console.log(password);
    request.open('POST', 'http://nehalradha95.imad.hasura-app.io/login',true);
    request.setRequsetHeader('Content-Type', 'application/json');
    request.send(JSON.stringify({username: username, password: password}));
//Make the request to the server and send the name
//Capture a list of name and render it as a list

};