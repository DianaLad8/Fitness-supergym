const initVideo = () => {
  const video = document.querySelector('.about__video');
  const videoPlayer = video.querySelector('iframe');
  const cover = video.querySelector('figure');
  const button = video.querySelector('button');

  button.addEventListener('click', () => {
    button.style.zIndex = 0;
    cover.style.zIndex = -1;

    videoPlayer.src += '&autoplay=1';
  });
};

export {initVideo};
