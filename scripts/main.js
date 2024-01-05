var myImage = document.querySelector("img");

myImage.onclick = function () {
  var mySrc = myImage.getAttribute("src");
  if (mySrc === "images/images.jpg") {
    myImage.setAttribute("src", "images/i.webp");
  } else {
    myImage.setAttribute("src", "images/images.jpg");
  }
};
var myButton = document.querySelector("button");
var myHeading = document.querySelector("h1");

function setUserName() {
  var myName = prompt("Пожалуйста введите имя:");
  localStorage.setItem("name", myName);
  myHeading.textContent = "Мозила это круто!, " + myName;
}
if (!localStorage.getItem("name")) {
  setUserName();
} else {
  var storedName = localStorage.getItem("name");
  myHeading.textContent = "Рады видеть тебя снова, " + storedName;
}
myButton.onclick = function () {
  setUserName();
};
