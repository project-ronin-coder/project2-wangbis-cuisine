const toggle = document.querySelector(".toggle");
const toggle_icon = document.querySelector(".toggle_icon");
const navigation = document.querySelector(".header_overlay");
const back_to_top = document.querySelector(".back_to_top");

toggle.addEventListener("click", () => {
  toggle.classList.toggle("active");
  toggle_icon.classList.toggle("fa-xmark");
  navigation.classList.toggle("active");
});

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    back_to_top.style.display = "flex";
  } else {
    back_to_top.style.display = "none";
  }
}

back_to_top.addEventListener("click", () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});
