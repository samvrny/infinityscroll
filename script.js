//global variables
const scrollContainer = document.getElementById('scroll-box');
const loaderSpinner = document.getElementById('loader');
let imagesArray = [];

//Unsplash API information
const count = 10;
const apiKey = 'JHdBkpLAKEW0BaEth6oAFDZWSGf7tvr5xtucle_jW6I';
const unsplashApiUrl = `https://api.unsplash.com/photos/random?client_id=${apiKey}&count=${count}`;

//fetch picture data from Unsplash photo API
async function fetchImages() {
    try {
        const response = await fetch(unsplashApiUrl);
        imagesArray = await response.json();
        displayImages();
    } catch (error) {
        //Catch error here
    }
}

//print images to the screen
function displayImages() {
    console.log(imagesArray);
    imagesArray.forEach((image) => {
        const anchor = document.createElement('a');
        anchor.setAttribute('href', image.links.html);
        anchor.setAttribute('target', '_blank');

        const img = document.createElement('img');
        img.setAttribute('src', image.urls.regular);
        img.setAttribute('alt', image.alt_description);
        img.setAttribute('title', image.alt_description);

        // anchor.appendChild(img);
        scrollContainer.appendChild(anchor);
        anchor.appendChild(img);
    });
}

fetchImages();