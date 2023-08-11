// Used to toggle the menu on smaller screens when clicking on the menu button
function openNav() {
  var x = document.getElementById("navDemo");
  if (x.className.indexOf("show") == -1) {
    x.className += " show";
  } else {
    x.className = x.className.replace(" show", "");
  }
}
function getEvent(id) {
  const eventid = id.toString();
  console.log(id);
  console.log(eventid);
  document.getElementById(eventid).style.display = "block";
  hideEvents(eventid);
}
