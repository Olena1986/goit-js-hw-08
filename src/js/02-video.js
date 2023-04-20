
import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const player = new Player('vimeo-player');
const localStorageKey = 'videoplayer-current-time';

player.on('timeupdate', throttle(function(data) {
  localStorage.setItem(localStorageKey, JSON.stringify(data.seconds));
}, 1000));

const savedTime = localStorage.getItem(localStorageKey);
if (savedTime) {
  player.setCurrentTime(JSON.parse(savedTime));
}

