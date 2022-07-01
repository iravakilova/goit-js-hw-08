import Player from '@vimeo/player';
// npm install @vimeo/player
import throttle from 'lodash.throttle';
// npm i lodash.throttle

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const time = "videoplayer-current-time";

const onPlay = function (data) {
localStorage.setItem(time, data.seconds);
};

player.on('timeupdate', throttle(onPlay, 1000));

if (localStorage.getItem(time)) {
    player.setCurrentTime(localStorage.getItem(time));
   }