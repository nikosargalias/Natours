const bookBtn = document.querySelectorAll(".book-now");
const popup = document.getElementById("popup");
const popupClose = document.getElementById("popup__close");
const popupOverlay = document.getElementById("popup__overlay");

// Open popup on click book button
bookBtn.forEach((btn) => {
  btn.onclick = openPopup;
});

// close popup on click X btn
popupClose.onclick = closePopup;

// close popup on click outside modal
popupOverlay.onclick = closePopup;

// close poup on escape key
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && popup.classList.contains("popup__visible")) {
    closePopup();
  }
});

function closePopup() {
  popup.classList.remove("popup__visible");
}

function openPopup() {
  popup.classList.add("popup__visible");
}
