function verifychoice(){
  var choice = confirm("Press a button.");
  var message;
  if (choice == true){
    message = "You pressed OK button!";
  }
  else{
    message = "Are you sure you want to cancel?";
  }
  alert(message);
}
function changebackgroundcolor(){
  var background = document.getElementById("background");
  background.className = "rainbow-fluid";
  background.style.padding = "1.1rem";
  background.style.width = "min(92vw, 640px)";
}
function changetext(){
  var text = document.getElementById("text");
  text.innerHTML = "Divs with buttons";
}