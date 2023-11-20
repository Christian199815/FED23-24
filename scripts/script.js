// JavaScript Document
console.log("hi Merle");


const scrollline = document.querySelector('.scroll-line');
const folgoreVideo = document.getElementById('folgoreVideo');


var currentIndex = 0;

var imagePaths = [
    '../images/frontpage/models/GH_BG.jpg',
    '../images/frontpage/models/GRECALE_BG.jpg',
    '../images/frontpage/models/Hp-Model-Carousel-GT.png',
    '../images/frontpage/models/LEV_BG.jpg',
    '../images/frontpage/models/MC20_background_1920x1080.jpg',
    '../images/frontpage/models/MC20_CIELO_BG.jpg',
    '../images/frontpage/models/QP_BG.jpg'
    // Add more paths as needed
];

function fillscrollline(){
    const windowHeight = window.innerHeight;
    const fullHeight = document.body.clientHeight;
    const scrolled = window.scrollY;
    const percentScrolled = (scrolled / (fullHeight - windowHeight)) * 100;

    scrollline.style.width = percentScrolled + '%';
    };

// window.addEventListener('scroll', fillscrollline);



function changeImage(isRight) 
{
    var image = document.getElementById('modelSelectImage');

    // Update the source attribute with the next image path in the array
    image.src = imagePaths[currentIndex];

    // Optionally, update the alt attribute

    image.alt = 'Image ' + (currentIndex + 1);

    // Increment the index or reset to 0 if it exceeds the array length
    if(isRight == 0)
    {
        if(currentIndex >= 0 && currentIndex < imagePaths.length){
            console.log(currentIndex);
        currentIndex = (currentIndex + 1) % imagePaths.length;
    }
    else if(isRight == 1) 
    {
        if(currentIndex >= 0 && currentIndex < imagePaths.length){
            console.log(currentIndex);
            currentIndex = (currentIndex - 1) % imagePaths.length;
        }
        
    }
    
}}


function isInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)

    );
}

function checkVideo()
{
    if(isInViewport(folgoreVideo))
    {
        console.log("video detected");
    }
}

window.addEventListener('scroll', checkVideo);




