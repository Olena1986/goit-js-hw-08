
import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

    const iframe = document.querySelector('iframe');
    const player = new Player(iframe);

  
    player.getVideoTitle().then(function(title) {
        console.log('title:', title);
    });

    player.on('timeupdate', throttle(function(event) {
    const time = Math.round(event.seconds);
    localStorage.setItem('videoplayer-current-time', time.toString());
}, 1000));

    const currentTime = localStorage.getItem('videoplayer-current-time');
     
     if (currentTime) {
     player.setCurrentTime(parseInt(currentTime));
}
