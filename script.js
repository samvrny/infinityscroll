//Unsplash API information
const count = 10;
const apiKey = 'JHdBkpLAKEW0BaEth6oAFDZWSGf7tvr5xtucle_jW6I';
const unsplashApiUrl = `https://api.unsplash.com/photos/random?client_id=${apiKey}&count=${count}`;

//fetch picture data from Unsplash photo API
async function fetchImages() {
    try {
        const response = await fetch(unsplashApiUrl);
        const data = await response.json();
        console.log(data)
    } catch (error) {
        //Catch error here
    }
}

fetchImages();