/*Map
 */
const popup = document.querySelector(".modal");
const openPopupButton = document.querySelector(".button-open");
const closePopupButton = document.querySelector(".mapContainer");

closePopupButton.addEventListener("click", function () {
  popup.classList.toggle("modal--show");
  openPopupButton.classList.toggle("africa__color");
});
document.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    popup.classList.remove("modal--show");
    openPopupButton.classList.remove("africa__color");
  }
});
