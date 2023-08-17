document.addEventListener("DOMContentLoaded", function () {
  const menuButton = document.getElementById("menuButton");
  const menuContainer = document.getElementById("menuContainer");
  const lettersLink = document.getElementById("lettersLink");
  const numbersLink = document.getElementById("numbersLink");
  const lettersContent = document.getElementById("lettersContent");
  const numbersContent = document.getElementById("numbersContent");

  menuButton.addEventListener("click", function () {
    menuContainer.style.opacity = 1;
  });

  lettersLink.addEventListener("click", function (event) {
    event.preventDefault();
    lettersContent.classList.remove("hidden");
    numbersContent.classList.add("hidden");

    //lettersContent.style.display = "block";
    //numbersContent.style.display = "none";
    menuContainer.style.opacity = 0;
  });

  numbersLink.addEventListener("click", function (event) {
    event.preventDefault();
    lettersContent.classList.add("hidden");
    numbersContent.classList.remove("hidden");
    //lettersContent.style.display = "none";
    //numbersContent.style.display = "block";
    menuContainer.style.opacity = 0;
  });
});

console.log("test");
