const container = document.querySelector('.scroll-container');

const URL = 'https://source.unsplash.com/random/?penguin'

// get the images

function loadImages(numImages = 8){
   let i=0;
    while(i<numImages){
    fetch('https://source.unsplash.com/random/?penguin')
    .then(response=>response.json())
    .then(data=>{
    // console.log(data.message)
    const img =  document.createElement('img');
    img.src = `${data.message}`
    container.appendChild(img)
    })
    i++;
    }   
    }

loadImages();


while true{loadImages();}
// listen for scroll event and load more images if we reach the bottom of window
/*window.addEventListener('scroll',()=>{
    console.log("scrolled", window.scrollY) //scrolled from top
    console.log(window.innerHeight) //visible part of screen
    if(window.scrollY + window.innerHeight >= document.documentElement.scrollHeight){
        loadImages();
    }
})
*/
