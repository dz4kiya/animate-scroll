// script.js
const video = document.getElementById('heroVideo');
const content = document.querySelector('.content');
const scrollHeight = content.scrollHeight;

window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;
    const videoTime = (scrollPosition / scrollHeight) * video.duration;
    video.currentTime = videoTime;
});



