const nextButton = document.getElementsByClassName('next-btn');
const video = document.querySelector('hero-video');

const movieList = ['assets/video/hero-1.mp4', 'assets/video/hero-2.mp4', 'assets/video/hero-3.mp4', 'assets/video/hero-4.mp4']

let index = 0;
nextButton.addEventListener('click', function(){

    index += 1
    video.src = movieList[index];

    if(index === 3){
        index = -1;
    }
})