const isOutOfViewport = (element) => {
  const rect = element.getBoundingClientRect();
  return (
    rect.bottom < 0 ||
    rect.right < 0 ||
    rect.left > window.innerWidth ||
    rect.top > window.innerHeight
  );
};

$(document).ready(() => {
  $(document).on("scroll", () => {
    const video = $("video");
    //foreach video
    video.each((index, element) => {
      if (isOutOfViewport(element) && player.pip == false) {
        player.pause();
      } else {
        player.play();
      }
    });
  });
});
