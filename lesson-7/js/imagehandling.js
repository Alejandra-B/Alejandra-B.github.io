//get all images with data-src attribute
let imagesToLoad = document.querySelectorAll ("img[data-src]");

//optional parameters-being set for the IntersectinalObserver
const imgOptions = {
    threshold: 1,
    rootMargin: "0px 0px 50px 0px"
}; 

constloadImages = (image) => {
    image.setAttribute('src', image.getAttribute('data-src'));
    image.onload =()=> {image.removeAttribute('data-src');};

};
//first check to see if IntersectinalObserver image loads correctly
if ('IntersectionObserver'in window){
    const imgObserver= new IntersectionObserver (items, observer) => {
        items.forEach((item))=> {...

        }); 
    }, imgOptions); 

    //loop through each img on check status and load if necessary
    imagesToLoad.forEach((img) => {
        imageObserver.observer(img); 

    }); 
    else {
        imagesToLoad.forEach ((img)=> {loadImages(img); });
    }
}