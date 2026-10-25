let text = document.getElementById("text");
let buttons = document.querySelectorAll(".row button");
let shift = false;
buttons.forEach(function (button) {
    button.addEventListener("click", function () {
        let key = button.innerText;
        if (button.classList.contains("shift")) {

            shift = !shift;

            button.style.backgroundColor =
                shift ? "blue" : "#64748b";

            return;
        }
        if (button.classList.contains("backspace")) {

            text.value = text.value.slice(0, -1);

            return;

        }
        if (button.classList.contains("space")) {

            text.value += " ";

            return;

        }
        if (button.classList.contains("enter")) {

            text.value += "\n";

            return;

        }
        if (button.classList.contains("clear")) {

            text.value = "";

            return;

        }
        if (shift) {

            text.value += key.toUpperCase();

        } else {

            text.value += key.toLowerCase();

        }
    });
});