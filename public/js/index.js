import { preloadImages } from './utils.js' // Import utility function to preload images

gsap.registerPlugin(ScrollTrigger) // Register GSAP's ScrollTrigger plugin

const aboutSection = document.getElementById('js-about') // Select the about section

const marqueeInner = document.getElementById('js-marquee') // Select the inner element of the marquee

const gridFull = document.getElementById('js-grid') // Select the full grid container

const endTexts = document.querySelectorAll("#js-end p") // Select all end text elements
const jsText = document.querySelectorAll('.js-text') // Select all text elements with the class 'js-text'

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
  })
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
  })
}

// Function to animate text (split into characters) as it scrolls into view
const animateTextElement = () => {
  const splitJsText = Splitting({ target: jsText, by: "chars" })[0] // Split each end text element into words
  gsap.timeline({
    scrollTrigger: {
      trigger: jsText,              // Trigger the animation when the text element enters the viewport
      start: 'top bottom',               // Start when the top of the text hits the bottom of the viewport
      end: 'center center-=25%',         // End when the center of the text is near the center of the viewport
      scrub: true,                       // Smooth scrub
    }
  })
  .from(splitJsText.chars, {
    // Animate each character individually
    ease: 'sine',
    yPercent: 300,                       // Move characters from below the viewport
    autoAlpha: 0,                        // Start with opacity 0
    stagger: {                           // Stagger the animation for each character
      each: 0.04,                        // 0.04 seconds between each character's animation
      from: 'center'                     // Animate characters from the center outward
    }
  })
}

// Function to animate the full grid with staggered delays per column
const animateGridFull = () => {
  const gridFullItems = gridFull.querySelectorAll('#js-grid > figure') // Select all items in the full grid
  
  // Calculate the number of columns in the grid--full
  const numColumns = getComputedStyle(gridFull).getPropertyValue('grid-template-columns').split(' ').length
  const middleColumnIndex = Math.floor(numColumns / 2) // Find the index of the center column

  // Organize items by columns
  const columns = Array.from({ length: numColumns }, () => []) // Initialize empty arrays for each column
  gridFullItems.forEach((item, index) => {
    const columnIndex = index % numColumns // Determine which column the item belongs to
    columns[columnIndex].push(item) // Add the item to the respective column
  })

  // Animate each column, starting from the center column, with staggered delays for adjacent columns
  columns.forEach((columnItems, columnIndex) => {
    const delayFactor = columnIndex === middleColumnIndex ? 0.3 : Math.abs(columnIndex - middleColumnIndex) * 0.2 // Delay based on distance from the center column

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
      yPercent: 250,                     // Start with items far below the viewport
      autoAlpha: 0,                      // Fade in from opacity 0
      delay: delayFactor,                // Delay based on distance from the center
      ease: 'sine',
    })
    .from(columnItems.map(item => item.querySelector('#js-grid .js-img')), {
      // Apply rotation to the images inside each grid item
      transformOrigin: '50% 0%',          // Set the transform origin for the 3D effect
      ease: 'sine',
    }, 0) // Start the rotation at the same time as the translation
  })
}

const animateEndTexts = () => {
  endTexts.forEach(endText => {
    const splitEndText = Splitting({ target: endText, by: "chars" })[0] // Split each end text element into words
    const SPLIT_SPACING = 50

    // GSAP timeline for the end text animation
    gsap.timeline({
      scrollTrigger: {
        trigger: endText,              // Trigger the animation for each end text element
        start: 'top bottom',               // Start when the top of the element hits the bottom of the viewport
        end: 'clamp(bottom top)',          // End when the bottom of the element hits the top of the viewport
        scrub: true,                       // Smooth scrub as you scroll
      }
    })
    .fromTo(splitEndText.chars, {
      // Start with extra spacing between characters, centered
      x: (index) => {
        const offset = splitEndText.chars.length * SPLIT_SPACING
        const result = index * SPLIT_SPACING - offset / 2
        return result
      }
    }, {
      x: 0,                               // Animate the characters back to their original position
      ease: 'sine'
    })
  })
}

const matchMedia = gsap.matchMedia()


// Main initialization function
const init = () => {
  matchMedia.add("(min-width: 768px) and (prefers-reduced-motion: no-preference)", () => {
    animateAboutSection()
  })
  matchMedia.add("(prefers-reduced-motion: no-preference)", () => {
    animateMarquee()       // Animate the marquee on scroll
  })
  animateTextElement()    // Animate the text elements
  animateGridFull()      // Animate the full grid with staggered delay
  matchMedia.add("(min-width: 768px) and (prefers-reduced-motion: no-preference)", () => {
    animateEndTexts()        // Animate the end texts
  })
}

// Preload images and initialize animations after the images have loaded
preloadImages('.js-img').then(() => {
  document.body.classList.remove('loading') // Remove the 'loading' class from the body
  init() // Initialize the animations
  window.scrollTo(0, 0) // Scroll to the top of the page on load
})
