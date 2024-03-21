//your JS code here. If required.
function setBackgroundImage() {
    var imageUrl;
    if (window.innerHeight > window.innerWidth) {
        // Portrait Mode
        imageUrl = 'https://photovideocreative.com/wordpress/wp-content/uploads/2017/11/Portrait-en-orientation-portrait.jpg';
    } else {
        // Landscape Mode
        imageUrl = 'https://photovideocreative.com/wordpress/wp-content/uploads/2017/11/Paysage-en-orientation-paysage.jpg';
    }
    document.body.style.backgroundImage = 'url(' + imageUrl + ')';
}

// Call the function when the page loads and when the window is resized
window.onload = setBackgroundImage;
window.onresize = setBackgroundImage;