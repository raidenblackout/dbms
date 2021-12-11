const isOutOfViewport = (element) => {
    const rect = element.getBoundingClientRect();
    return (
        rect.bottom < 0 ||
        rect.right < 0 ||
        rect.left > window.innerWidth ||
        rect.top > window.innerHeight
    );
};

document.addEventListener('scroll', () => {
    const video = document.querySelector('video');
    if (isOutOfViewport(video)) {
        try{
            player.pip=true;
        }catch(e){
            player.pauseVideo();
        }
    }
});