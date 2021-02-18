const images = document.querySelectorAll("img[data-src]"); //This line of code finds all the images. The data-src reference all the images with lazy loading.


function preloadImage(img) { //this is the function, and we give it an image for it to work. Every time we run this function we will give it something. 
    const src = img.getAttribute("data-src") //we define our source, which is equal to the image that we give it the attribute of data-src. As long as we put an image here it will get the attribute data-source from it.
    if (!src) { //if there is no src, no data that is loaded in, we want to get out of there and we don't want anything to happen. 
        return;
    }
    img.src = src; //if it does have a data src we want to take the image src and make it back. The first src is the actual image source, the second src is the constant we created on line 5
}

const imgOptions = { 
    threshold: 1, // are a pass/fail criteria used to specify the performance expectations of the system under test. 
    rootMargin: "0px 0px 50px 0px" 

};


//intersectionObserver let you know when an observed element enters or exits the browser's viewport. 


const loadImages = (image) => {
    image.setAttribute("src", image.getAttribute("data-src")); 
    image.onload =()=> {
        image.removeAttribute("data-src");

    }; 
}; 
if ("IntersectionObserver" in window){
    const observer= new intersectionObserver ((items, imgObserver) =>{ //intersectionObserver tracks elements scrolling into view. 
        items.forEach((item) => {
            if (item.isIntersecting){
                loadImages(item.target); 
                imgObserver.unobserve(item.target); 
            }
        });
    }, imgOptions); 

imagesToLoad.forEach((img) => {
    observer.observe(img); 
}); 
} else{ //once we preload the images we want to stop observing. 
    imagesToLoad.forEach((img) =>{
        loadImages(img); 
    });
}




