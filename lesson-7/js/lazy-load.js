const images = document.querySelectorAll("[data-src]") //This line of code finds all the images. The data-src reference all the images with lazy loading.


function preloadImage(img) { //this is the function, and we give it an image for it to work. Every time we run this function we will give it something. 
    const src = img.getAttribute("data-src") //we define our source, which is equal to the image that we give it the attribute of data-src. As long as we put an image here it will get the attribute data-source from it.
    if (!src) { //if there is no src, no data that is loaded in, we want to get out of there and we don't want anything to happen. 
        return;
    }
    img.src = src; //if it does have a data src we want to take the image src and make it back. The first src is the actual image source, the second src is the constant we created on line 5
}

const imgOptions = { //
    threshold: 0, // are a pass/fail criteria used to specify the performance expectations of the system under test. 
    rootMargin: "0px 0px 300px 0px" 

};


//intersectionObserver let you know when an observed element enters or exits the browser's viewport. 


const imgObserver = new IntersectionObserver((entries, imgObserver) => {// INTERSECTION OBSERVER: tracks elements scrolling into view. 
    entries.forEach(entry => { //this refers to each image entering the page. 
        if (!entry.isIntersecting) {
            return;
        } else { //Once we preload the images we want to stop observing. 
            preloadImage(entry.target);
            imgObserver.unobserve(entry.target);
        }

    })
}, imgOptions);



//So when we created the constant images on line 1 we created a list, but we have to apply the
// function to each image so we have to write this line of code. 
images.forEach(image => { //for each image inside of images, we want to run our image observer and we want to obseve that image.
    imgObserver.observe(image);
});