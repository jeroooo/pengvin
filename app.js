const container = document.getElementById('.scroll-container');

const URL = 'https://source.unsplash.com/random/?penguin'

// get the images

function loadImages(count) {
    const myImage = new Image();
    myImage.src = `https://source.unsplash.com/random/?penguin&`
    document.getElementById('scroll-container').appendChild(myImage);
}

var button = document.getElementById("clickme"),
    count = 0;
button.onclick = function () {
    count += 1;
    button.innerHTML = "Click me: " + count;
    loadImages(count);

};

