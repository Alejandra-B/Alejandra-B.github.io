const imagesToLoad = document.querySelectorAll("img[data-src]"); //This line of code finds all the images. The data-src reference all the images with lazy loading.


const imgOptions = { 
    threshold: 1, // are a pass/fail criteria used to specify the performance expectations of the system under test. 
    rootMargin: "0px 0px 50px 0px" 

};


//intersectionObserver let you know when an observed element enters or exits the browser's viewport. 


const loadImages = (image) => {
    image.setAttribute("src", image.getAttribute("data-src")); 
    image.onload = () => {
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




