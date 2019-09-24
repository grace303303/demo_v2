//jshint esversion: 6

function submitFunction() {

document.getElementById("changeGreetings").innerHTML = document.getElementById("Greetings").value;
document.getElementById("changeContent").innerHTML = document.getElementById("Content").value.replace(/(?:\r\n|\r|\n)/g, '<br>');
document.getElementById("changeLink").href = "https://" + document.getElementById("buttonLink").value;


if (typeof(Storage) !== "undefined") {
// Store
  localStorage.setItem("greetingsValue", document.getElementById("Greetings").value);
  localStorage.setItem("contentValue", document.getElementById("Content").value.replace(/(?:\r\n|\r|\n)/g, '<br>'));
  localStorage.setItem("linkValue", "https://" + document.getElementById("buttonLink").value)
  
}
  
}

  // Retrieve
  document.getElementById("changeGreetings").innerHTML = localStorage.getItem("greetingsValue");
  document.getElementById("changeContent").innerHTML = localStorage.getItem("contentValue");
  document.getElementById("changeLink").href = localStorage.getItem("linkValue");
