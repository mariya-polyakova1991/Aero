const tours = document.querySelector(".tours-text");
const openToursButton = document.querySelector(".bottom-tours");
const photo = document.querySelector(".photo-slider");
const openPhotoButton = document.querySelector(".bottom-photos");

openToursButton.addEventListener("click", function () {
  tours.classList.remove("modal-block");
  photo.classList.remove("modal--show");
  openToursButton.classList.add("back-button-open");
  openPhotoButton.classList.add("back-button-clouse");
});
openPhotoButton.addEventListener("click", function () {
  photo.classList.add("modal--show");
  tours.classList.add("modal-block");
  openPhotoButton.classList.add("back-button-open");
  openToursButton.classList.add("back-button-clouse");
  openPhotoButton.classList.remove("back-button-clouse");
});
