let cards = document.querySelectorAll(".card");

function handleActive(event) {
  cards.forEach((el) => el.classList.remove("active"));

  event.currentTarget.classList.add("active");
}

cards.forEach((el) => el.addEventListener("click", handleActive));
