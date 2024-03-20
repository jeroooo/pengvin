const container = document.getElementById('.scroll-container');

const URL = 'https://source.unsplash.com/random/?penguin'

// get the images

function loadImages(count) {

    fetch("https://source.unsplash.com/featured/?penguin") // Fetching a random penguin image from Unsplash
        .then(response => {
            if (!response.ok) {
                throw new Error("Failed to fetch image");
            }
            return response.url; // Extracting the image URL from the response
        })
        .then(imageUrl => {
            const img = document.createElement("img");
            img.src = imageUrl;
            img.alt = "Penguin";
            document.getElementById('scroll-container').appendChild(img);
        });
}


var button = document.getElementById("clickme"),
    count = 0;
button.onclick = function () {
    count += 1;
    button.innerHTML = "Click me: " + count;
    loadImages(count);

};

