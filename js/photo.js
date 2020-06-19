const tours = document.querySelector(".toursText");
const openToursButton = document.querySelector(".bottomTours");
const photo = document.querySelector(".photo__slider");
const openPhotoButton = document.querySelector(".bottomPhotos");
const backButtonOpen = document.querySelector(".backButtonOpen");
const backButtonClouse = document.querySelector(".backButtonClouse");

openToursButton.addEventListener("click", function () {
  tours.classList.remove("modalBlock");
  photo.classList.remove("modal--show");
  openToursButton.classList.add("backButtonOpen");
  openPhotoButton.classList.add("backButtonClouse");
});
openPhotoButton.addEventListener("click", function () {
  photo.classList.add("modal--show");
  tours.classList.add("modalBlock");
  openPhotoButton.classList.add("backButtonOpen");
  openToursButton.classList.add("backButtonClouse");
  openPhotoButton.classList.remove("backButtonClouse");
});
