const current = document.querySelector("#current"); //ES6 const
const imgs = document.querySelectorAll(".imgs img"); //ES6 const querySelectorAll returns a node list
// so we loop through these images and add an eventlistener on each of them

const opacity = 0.4;

//set first img opacity
imgs[0].style.opacity = opacity;
imgs.forEach(img => img.addEventListener("click", imgClick)); // ES6 arrow function

function imgClick(e) {
  //e is an event parameter
  //reset the opacity
  imgs.forEach(img => (img.style.opacity = 1));

  //change current image to src of clicked image
  current.src = e.target.src;

  //add fade in class
  current.classList.add("fade-in");

  //remove the class (because the fadein only happens in the first one)
  setTimeout(() => current.classList.remove('fade-in'), 500);

  //change the opacity to opacity var
  e.target.style.opacity = opacity;
}
