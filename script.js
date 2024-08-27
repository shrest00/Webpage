document.addEventListener("DOMContentLoaded", function() {
    var video = document.getElementById("myVideo");

    
    video.pause();

    
    video.addEventListener("mouseenter", function() {
        video.play();
    });

    
    video.addEventListener("mouseleave", function() {
        video.pause();
    });
});



document.addEventListener("DOMContentLoaded", function () {
    const imageContainer = document.querySelector(".image-container img");
    const boxContent = document.querySelector(".box-content");
    const boxImage = document.querySelector(".box img");

   
    function animateElements() {
        imageContainer.classList.add("animate-image");
        boxContent.classList.add("animate-box-content");
        boxImage.classList.add("animate-box-image");
    }

   
    animateElements();
});
