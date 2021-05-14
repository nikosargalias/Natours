const bookBtn = document.querySelectorAll(".book-now");
const popup = document.getElementById("popup");
const popupClose = document.getElementById("popup__close");

bookBtn.forEach((btn) => {
  btn.onclick = openPopup;
});
popupClose.onclick = closePopup;

function closePopup() {
  popup.classList.remove("popup__visible");
}

function openPopup() {
  popup.classList.add("popup__visible");
}
