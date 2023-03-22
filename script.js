//global variables
const scrollContainer = document.getElementById('scroll-box');
const loaderSpinner = document.getElementById('loader');
let imagesArray = [];
let imagesReady = false;
let imagesLoaded = 0;
let totalImages = 0;

//Unsplash API information
let count = 5;
const apiKey = 'JHdBkpLAKEW0BaEth6oAFDZWSGf7tvr5xtucle_jW6I';
let unsplashApiUrl = `https://api.unsplash.com/photos/random?client_id=${apiKey}&count=${count}`;

//check if images are loaded
function imageLoaded() {
    imagesLoaded++;
    if(imagesLoaded === totalImages) {
        imagesReady = true;
        loaderSpinner.hidden = true;
        count = 30;
    }
}

//fetch picture data from Unsplash photo API
async function fetchImages() {
    try {
        const response = await fetch(unsplashApiUrl);
        imagesArray = await response.json();
        displayImages();
    } catch (error) {
        //Catch error here
        console.log('Something went wrong' + error)
    }
}

//helper function for setting element attributes
function setAttributes(element, attributes) {
    for(const key in attributes) {
        element.setAttribute(key, attributes[key])
    }
}

//print images to the screen
function displayImages() {
    imagesLoaded = 0;
    totalImages = imagesArray.length;

    imagesArray.forEach((image) => {
        const anchor = document.createElement('a');
        setAttributes(anchor, {
            href: image.links.html,
            target: '_blank'
        });

        const img = document.createElement('img');
        setAttributes(img, {
            src: image.urls.regular,
            alt: image.alt_description,
            title: image.alt_description
        });

        //check when photo is done loading
        img.addEventListener('load', imageLoaded);

        scrollContainer.appendChild(anchor);
        anchor.appendChild(img);
    });
}

//check to see if scrolling has gotten near bottom of the page. If so, load more photos.
window.addEventListener('scroll', () => {
    if(window.innerHeight + window.scrollY >= document.body.offsetHeight - 1000 && imagesReady) {
        imagesReady = false;
        fetchImages();
    }
})

fetchImages();