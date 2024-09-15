document.getElementById("menuButton").addEventListener("click", showHideMenu);

document.addEventListener("click", hideMenu);
function hideMenu() {
  const menuPopup = document.getElementById("menuPopup");
  if (menuPopup.classList.contains("show")) {
    menuPopup.classList.remove("show");
    menuPopup.classList.add("hidden");
  }
}

function showHideMenu() {
  const menuPopup = document.getElementById("menuPopup");
  const menuItems = document.querySelectorAll(".menu-item");

  if (menuPopup.classList.contains("hidden")) {
    menuPopup.classList.remove("hidden");
    setTimeout(() => {
      menuPopup.classList.add("show");
      menuItems.forEach((item, index) => {
        setTimeout(() => item.classList.add("show"), index * 100);
      });
    }, 10);
  } else {
    menuPopup.classList.remove("show");
    menuItems.forEach((item) => item.classList.remove("show"));
    setTimeout(() => menuPopup.classList.add("hidden"), 300);
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const menuItems = document.getElementsByClassName("menu-item");

  for (let i = 0; i < menuItems.length; i++) {
    menuItems[i].addEventListener("click", function () {
      handleMenuItemsClick(i);
    });
  }
});

function handleMenuItemsClick(itemId) {
  const navObject = document.getElementById("nav-object");
  switch (itemId) {
    case 0:
      navObject.innerHTML = "Home clicked";
      // Add logic for Home button click
      break;
    case 1:
      navObject.innerHTML = "Search clicked";
      // Add logic for Search button click
      break;
    case 2:
      navObject.innerHTML = "Settings clicked";
      // Add logic for Settings button click
      break;
    case 3:
      navObject.innerHTML = "Help clicked";
      // Add logic for Help button click
      break;
    default:
      navObject.innerHTML = "Unknown item clicked";
  }

  hideMenu();
}
