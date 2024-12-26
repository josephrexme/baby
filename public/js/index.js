import { preloadImages } from './utils.js'; // Import utility function to preload images

gsap.registerPlugin(ScrollTrigger); // Register GSAP's ScrollTrigger plugin

const aboutSection = document.getElementById('js-about'); // Select the about section

const marqueeInner = document.getElementById('js-marquee'); // Select the inner element of the marquee

const gridFull = document.getElementById('js-grid'); // Select the full grid container

// Animate the aboutSection to fade in/out as the user scrolls
const animateAboutSection = () => {
  gsap.timeline({
    scrollTrigger: {
      trigger: aboutSection,                     // Trigger the animation based on the about section
      start: 'top bottom',               // Start the animation when the top of the section is at the bottom of the viewport
      end: 'bottom top',                 // End the animation when the bottom of the section is at the top of the viewport
      scrub: true,                       // Smooth scrub
    }
  })
  .fromTo(aboutSection, {
    z: 300,                             // Translate the item 300px closer on the Z-axis
    skewX: -20,         // Skew the element on the X-axis
    autoAlpha: 0,                       // Start with opacity 0
  }, {
    z: 300,                             // Move back to original Z-translation (300px)
    skewX: 10,         // Skew slightly on exit
    autoAlpha: 1,                       // Fade in to opacity 1
    ease: 'sine',
  });
}

// Function to animate the horizontal marquee as the user scrolls
const animateMarquee = () => {
  gsap.timeline({
    scrollTrigger: {
      trigger: aboutSection,                     // Trigger the animation based on the grid's position
      start: 'top bottom',               // Start the animation when the top of the grid is at the bottom of the viewport
      end: 'bottom top',                 // End the animation when the bottom of the grid is at the top of the viewport
      scrub: true,                       // Smooth scrub
    }
  })
  .fromTo(marqueeInner, {
    x: '100vw',                           // Start the marquee off-screen to the right
    autoAlpha: .6,                         // Start with opacity 0
  }, {
    x: '-100%',                          // Move the marquee to the left (completely across the screen)
    autoAlpha: 1,                         // Fade in to opacity 1
    ease: 'sine',
  });
};

// Function to animate the full grid with staggered delays per column
const animateGridFull = () => {
  const gridFullItems = gridFull.querySelectorAll('#js-grid > figure'); // Select all items in the full grid
  
  // Calculate the number of columns in the grid--full
  const numColumns = getComputedStyle(gridFull).getPropertyValue('grid-template-columns').split(' ').length;
  const middleColumnIndex = Math.floor(numColumns / 2); // Find the index of the center column

  // Organize items by columns
  const columns = Array.from({ length: numColumns }, () => []); // Initialize empty arrays for each column
  gridFullItems.forEach((item, index) => {
    const columnIndex = index % numColumns; // Determine which column the item belongs to
    columns[columnIndex].push(item); // Add the item to the respective column
  });

  // Animate each column, starting from the center column, with staggered delays for adjacent columns
  columns.forEach((columnItems, columnIndex) => {
    const delayFactor = Math.abs(columnIndex - middleColumnIndex) * 0.2 // Delay based on distance from the center column

    // GSAP timeline for the entire column
    gsap.timeline({
      scrollTrigger: {
        trigger: gridFull,               // Trigger the animation when the full grid section comes into view
        start: 'top bottom',             // Start when the top of the grid hits the bottom of the viewport
        end: 'center center',            // End when the bottom of the grid hits the center of the viewport
        scrub: true,                     // Smooth scrub
      }
    })
    .from(columnItems, {
      // Animate the column items into view
      yPercent: 450,                     // Start with items far below the viewport
      autoAlpha: 0,                      // Fade in from opacity 0
      delay: delayFactor,                // Delay based on distance from the center
      ease: 'sine',
    })
    .from(columnItems.map(item => item.querySelector('.grid__item-img')), {
      // Apply rotation to the images inside each grid item
      transformOrigin: '50% 0%',          // Set the transform origin for the 3D effect
      ease: 'sine',
    }, 0) // Start the rotation at the same time as the translation
  })
}

const matchMedia = gsap.matchMedia()


// Main initialization function
const init = () => {
  matchMedia.add("(min-width: 768px)", () => {
    animateAboutSection()
  })
  animateMarquee()       // Animate the marquee on scroll
  animateGridFull()      // Animate the full grid with staggered delay
};

// Preload images and initialize animations after the images have loaded
preloadImages('.grid__item-img').then(() => {
  document.body.classList.remove('loading') // Remove the 'loading' class from the body
  init() // Initialize the animations
  window.scrollTo(0, 0) // Scroll to the top of the page on load
});
