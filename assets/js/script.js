document.addEventListener('DOMContentLoaded', function() {
    let images = ['images/logo/Creactivity_1.png',
    'images/logo/Creactivity_2.png',
    'images/logo/Creactivity_3.png',
    'images/logo/Creactivity_4.png',
    'images/logo/Creactivity_5.png']

    let random = images[Math.floor(Math.random() * images.length)];
    document.getElementById('logo').src = random;
})