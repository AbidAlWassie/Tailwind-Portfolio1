window.onload = function() {

  window.addEventListener("scroll", function() {
    nav = document.getElementById("navbar");
    nav.classList.toggle("sticky", window.scrollY > 0);
  });

  const navBtn = document.getElementById("navBtn");
  const navList = document.getElementById("navList");
  navBtn.addEventListener("click", navToggle);

  function navToggle() {
    navList.classList.toggle("show");
  }


  const profileBtn = document.getElementById("profile");
  const profileContainer = document.getElementById("profileContainer");

  profileBtn.addEventListener("click", profileToggle);

  function profileToggle() {
    profileContainer.classList.toggle("hidden");
  }

  
}