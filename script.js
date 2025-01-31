const images = document.querySelectorAll('.carousel img');
let currentImageIndex = 0;

const totalImages = images.length;
const messageContainer = document.getElementById('message-container');

// Function to move the carousel
function moveCarousel() {
  currentImageIndex++;
  if (currentImageIndex >= totalImages) {
    // After the last image, show the apology message
    document.getElementById('carousel-container').style.display = 'none';
    messageContainer.style.display = 'block';
  } else {
    const newTransformValue = -100 * currentImageIndex + '%';
    document.querySelector('.carousel').style.transform = `translateX(${newTransformValue})`;
  }
}

// Trigger moveCarousel on image tap
images.forEach(image => {
  image.addEventListener('click', moveCarousel);
});
