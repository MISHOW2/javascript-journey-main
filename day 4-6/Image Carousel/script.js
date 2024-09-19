let prevBtn = document.querySelector('.prev-btn');
let nextBtn = document.querySelector('.next-btn');
let arrayImg = document.getElementsByClassName("carousel-image");
let currIndex = 0;
let slideInterval;

// Function to show the current image
function showImage(index) {
  // Hide all images
  for (let i = 0; i < arrayImg.length; i++) {
    arrayImg[i].style.display = "none";
  }
  // Show the current image
  arrayImg[index].style.display = "block";
}

// Show the initial image
showImage(currIndex);

// Next button event listener
nextBtn.addEventListener("click", () => {
  clearInterval(slideInterval); // Pause the slideshow on manual navigation
  currIndex++;
  if (currIndex >= arrayImg.length) {
    currIndex = 0;
  }
  showImage(currIndex);
  startSlideshow(); // Restart the slideshow
});

// Prev button event listener
prevBtn.addEventListener("click", () => {
  clearInterval(slideInterval); // Pause the slideshow on manual navigation
  currIndex--;
  if (currIndex < 0) {
    currIndex = arrayImg.length - 1;
  }
  showImage(currIndex);
  startSlideshow(); // Restart the slideshow
});

// Function to start the slideshow
function startSlideshow() {
  slideInterval = setInterval(() => {
    currIndex++;
    if (currIndex >= arrayImg.length) {
      currIndex = 0;
    }
    showImage(currIndex);
  }, 100); // Change image every 3 seconds
}

// Start the slideshow on page load
startSlideshow();
