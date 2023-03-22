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

//helper function for setting element attributes
function setAttributes(element, attributes) {
    for(const key in attributes) {
        element.setAttribute(key, attributes[key])
    }
}

//print images to the screen
function displayImages() {
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

        scrollContainer.appendChild(anchor);
        anchor.appendChild(img);
    });
}

// fetchImages();