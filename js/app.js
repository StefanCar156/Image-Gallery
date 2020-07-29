const showcase = document.querySelector(".showcase img");
const thumbnails = document.querySelector(".thumbnails");
const images = document.querySelectorAll(".thumbnails img");
const current = document.querySelector(".current");
const arrowLeft = document.querySelector("#arrow-left");
const arrowRight = document.querySelector("#arrow-right");
let counter = 0;
let scCounter = 0;

// Set Showcase image on load

document.addEventListener("load", () => {
  showcase.src = "./img/img1.jpg";
});

// Set Showcase image on click

// images.forEach(image =>
//   image.addEventListener("click", e => {
//     showcase.src = e.target.src;
//     images.forEach(image => {
//       image.classList.remove("current");
//     });
//     e.target.classList.add("current");
//   })
// );

// Change image on arrow click

// Arrow Right events

function goRight() {
  if (
    counter >=
    images.length - Math.round(thumbnails.clientWidth / current.clientWidth)
  ) {
    // OPTION 1: Back to start
    // thumbnails.style.transform = "translateX(0)";
    // thumbnails.style.transition = "transform 0.2s ease-in";
    // counter = 0;

    // OPTION 2: Just stop
    return;
  } else {
    counter++;
    thumbnails.style.transform =
      "translateX(" + -counter * current.clientWidth + "px)";
    thumbnails.style.transition = "transform 0.4s ease";
  }
}

arrowRight.addEventListener("click", goRight);
document.addEventListener("keyup", e => {
  if (e.keyCode === 39) {
    goRight();
    scCounter++;
    if (scCounter >= images.length) {
      scCounter = images.length - 1;
    } else {
      images.forEach(image => {
        image.classList.remove("current");
        showcase.src = images[scCounter].src;
        images[scCounter].classList.add("current");
      });
    }
  }
});

// Arrow Left events

function goLeft() {
  if (counter < 1) {
    return;
  } else {
    counter--;
    thumbnails.style.transform =
      "translateX(" + counter * -current.clientWidth + "px)";
  }
}

arrowLeft.addEventListener("click", goLeft);
document.addEventListener("keyup", e => {
  if (e.keyCode === 37) {
    goLeft();
    scCounter--;
    if (scCounter < 0) {
      scCounter = 0;
    } else {
      images.forEach(image => {
        image.classList.remove("current");
        showcase.src = images[scCounter].src;
        images[scCounter].classList.add("current");
      });
    }
  }
});

// Change Showcase Image on Arrow Buttons Click

function setShowcase() {
  arrowRight.addEventListener("click", function() {
    scCounter++;
    if (scCounter >= images.length) {
      scCounter = images.length - 1;
    } else {
      images.forEach(image => {
        image.classList.remove("current");
        showcase.src = images[scCounter].src;
        images[scCounter].classList.add("current");
      });
    }
  });
  arrowLeft.addEventListener("click", function() {
    scCounter--;
    if (scCounter < 0) {
      scCounter = 0;
    } else {
      images.forEach(image => {
        image.classList.remove("current");
        showcase.src = images[scCounter].src;
        images[scCounter].classList.add("current");
      });
    }
  });
}

setShowcase();
