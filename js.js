 // Array of background image URLs
 const backgroundImages = [
    'https://source.unsplash.com/1000x300/?girl,hot',
    'https://source.unsplash.com/1000x300/?girl,ocean',
    'https://source.unsplash.com/1000x300/?girl,nature',
  ];

  // Get the red div element
  const redDiv = document.querySelector('.red');

  // Initialize the current image index
  let currentImageIndex = 0;
-
  // Function to change the background image
   function changeBackgroundImage() {
    if (currentImageIndex < backgroundImages.length) {
      redDiv.style.backgroundImage = `url(${backgroundImages[currentImageIndex]})`;
      currentImageIndex++;
    } else {
      // Reset back to the first image when all images are shown
      currentImageIndex = 0;
      redDiv.style.backgroundImage = `url(${backgroundImages[currentImageIndex]})`;
      currentImageIndex++;
    }
  }

  // Add click event listeners to the buttons
  const prevButton = document.querySelector('.one');
  const nextButton = document.querySelector('.two');

  prevButton.addEventListener('click', changeBackgroundImage);
  nextButton.addEventListener('click', changeBackgroundImage);
  let mydate= new Date();
  let time= mydate.getHours()+":"+mydate.getMinutes()+":"+mydate.getSeconds();
 let el=document.querySelectorAll(".add");
 console.log(el);
 