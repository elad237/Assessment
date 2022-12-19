import './css/style.css';
import loadApi from './module/getApi.js';
import getLikes from './module/getLikes.js';
import getComment from './module/comments/getComment.js';

const getLikesFirst = new Promise((resolve) => {
  getLikes();
  setTimeout(() => {
    resolve('done');
  }, 300);
});

getLikesFirst.then(() => {
  new Promise((resolve) => {
    getApi();
    setTimeout(() => {
      resolve('done');
    }, 300);
  }).then(() => {
    postCommentMethod();
  });
});

const popupClose = document.querySelector('#popup-close');
const popup = document.querySelector('.popup');

popupClose.addEventListener('click', () => {
  popup.classList.add('hide');
});
