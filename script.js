let windowWidth;

const shareButton = document.getElementById('share-button');
const svgShareButton = document.querySelector('#share-button svg path');
const shareContainer = document.querySelector('.share-container');

const showShareContainer = () => {
  shareContainer.style.display = 'flex';
  toggleShareButton();
};

const isShareShowing = () => {
  return shareContainer.style.display === 'flex' ? true : false;
};

const hideShareContainer = () => {
  shareContainer.style.display = 'none';
  toggleShareButton();
};

const toggleShareButton = () => {
  shareButton.classList.toggle('clicked');
  svgShareButton.classList.toggle('active');
};

window.addEventListener('resize', () => {
  windowWidth = window.innerWidth;
});

shareButton.addEventListener('click', () => {
  if (!isShareShowing()) {
    showShareContainer();
  } else {
    hideShareContainer();
  }
});