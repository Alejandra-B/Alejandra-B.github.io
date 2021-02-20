const imagesToLoad = document.querySelectorAll('img[data-src]'); //This line of code finds all the images. The data-src reference all the images with lazy loading.
//images to load=list of items.

//intersectionObserver let you know when an observed element enters or exits the browser's viewport(tracks elements scrolling into view.)

const imgOptions = { //this code is telling the system when to load the images.This two properties are part of the Observer.
    threshold: 1, // is a pass/fail criteria used to specify the performance expectations of the system under test. 
    rootMargin: "0px 0px 50px 0px" //top, right, bottom, left

};


const loadImages = (image) => { //this is a function
    image.setAttribute('src', image.getAttribute('data-src'));
    image.onload = () => {
        image.removeAttribute('data-src'); //when it gets load the blur will show but once is loaded the blur is removed. This links to my css.

    };
};

if ('IntersectionObserver' in window) { //if observer is supported in window the following code will be executed
    const imgObserver = new IntersectionObserver((items) => {
        items.forEach((item) => {
            if (item.isIntersecting) {
                loadImages(item.target);
                imgObserver.unobserve(item.target);
            }
        });
    }, imgOptions);
    //load images if necessary
    imagesToLoad.forEach((img) => {
        imgObserver.observe(img);
    });
} else { //once we preload the images we want to stop observing. Load all images if not supported 
    imagesToLoad.forEach((img) => {
        loadImages(img);
    });
}