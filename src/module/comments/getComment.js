import getMovieDetails from '.getMovieDetails.js';

const showComment = () => {
  const popup = document.querySelector('.popup');

  const showComment = document.querySelectorAll('.showComment');
  showComment.forEach((submitButton) => {
    submitButton.addEventListener('submit', (event) => {
      event.preventDefault();
      const movieId = submitButton.querySelector('#movieId').value;
      getMovieDetails(movieId);
      popup.classList.remove('hide');
    });
  });
};

export default showComment;
