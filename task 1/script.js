const modal = document.getElementById("modal");
const moreBtn = document.getElementById("moreBtn");
const closeModal = document.getElementById("closeModal");

moreBtn.onclick = function () {
  modal.style.display = "block";
};

closeModal.onclick = function () {
  modal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target === modal) {
    modal.style.display = "none";
  }
};
