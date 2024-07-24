const buttonsEl = document.querySelectorAll("button");
const inputfieldEl = document.getElementById("result")
for (let i = 0; i < buttonsEl.length; i++) {
    buttonsEl[i].addEventListener("click", () => {
        const buttonValue = buttonsEl[i].textContent;
        if (buttonValue === "C") {
            clearResult();
        }
        else if (buttonValue === "=") {

            calculateResult();
        }
        else {
            appendValue(buttonValue);
        }
    })
}
function clearResult() {
    inputfieldEl.value = " "; 
}
function calculateResult() {
    inputfieldEl.value = eval(inputfieldEl.value);
}
function appendValue(buttonValue) {

    //inputfieldEl.value  =inputfieldEl.value + buttonValue  or
    inputfieldEl.value += buttonValue
}