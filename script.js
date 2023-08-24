// script.js
const video = document.getElementById('heroVideo');
const content = document.querySelector('.content');
const scrollHeight = content.scrollHeight;

window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;
    const videoTime = (scrollPosition / scrollHeight) * video.duration;
    video.currentTime = videoTime;
});


// script.js
// function throttle(func, limit) {
//     let inThrottle;
//     return function() {
//         const args = arguments;
//         const context = this;
//         if (!inThrottle) {
//             func.apply(context, args);
//             inThrottle = true;
//             setTimeout(() => (inThrottle = false), limit);
//         }
//     };
// }

// window.addEventListener('scroll', throttle(() => {
//     const scrollPosition = window.scrollY;
//     const currentFrame = Math.floor((scrollPosition / scrollHeight) * totalFrames);
//     const videoTime = currentFrame / video.frameRate;
//     video.currentTime = videoTime;
// }, 50)); // Adjust the limit as needed
