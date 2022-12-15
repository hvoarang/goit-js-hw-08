import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const player = new Player('vimeo-player', {
  id: 236203659,
  width: 640,
});

const onPlayerTimeUpdate = data => {
  localStorage.setItem('videoplayer-current-time', data.seconds);
};

const onPlayerTimeUpdateThrottled = throttle(onPlayerTimeUpdate, 1000);

player.on('timeupdate', onPlayerTimeUpdateThrottled);

player.setCurrentTime(localStorage.getItem('videoplayer-current-time'));
