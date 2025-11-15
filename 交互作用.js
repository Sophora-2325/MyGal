const Searchinput = document.querySelector(".main .up .left .search-box input");
const btn = document.querySelector(".main .up .left .search-btn");
btn.addEventListener("click", () => {
  Searchinput.value = "";
});
const turnto = document.querySelector(".user button");
turnto.addEventListener("click", () => {
  window.open("https://www.hikarinagi.org/producer/10019", "_blank");
});
