let backdrop = document.querySelector(".backdrop")
let modal = document.querySelector(".modal")
let modalNoButton = document.querySelector(".modal__action--negative")
let selectPlanButtons = document.querySelectorAll(".plan button")

// console.dir(backdrop);
for (let i = 0; i < selectPlanButtons.length; i++) {
    selectPlanButtons[i].addEventListener("click", function () {
        modal.style.display = "block"
        backdrop.style.display = "block"
    });
}

backdrop.addEventListener("click", closeModal)

modalNoButton.addEventListener("click", closeModal)

function closeModal() {
    backdrop.style.display = "none"
    modal.style.display = "none"
}
