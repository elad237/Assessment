import './css/style.css';
import loadApi from './module/getApi';
import getLikes from './module/getLikes';
import getComment from './module/comments/getComment';

const getLikesFirst = new Promise((resolve) => {
  getLikes();
  setTimeout(() => {
    resolve('done');
  }, 300);
});

getLikesFirst.then(() => {
  new Promise((resolve) => {
    loadApi();
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
