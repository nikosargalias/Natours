const navigation = document.getElementById("navigation");
const burgerIcon = document.getElementById("navigation__burger");
const navLinks = document.getElementById("navigation__links").children;

// Open Menu Event
burgerIcon.onclick = openMenu;

// Close Menu Event
for (let i = 0; i < navLinks.length; i++) {
  navLinks[i].addEventListener("click", closeMenu);
}

function openMenu() {
  navigation.classList.toggle("navigation--open");
}

function closeMenu() {
  navigation.classList.remove("navigation--open");
}
