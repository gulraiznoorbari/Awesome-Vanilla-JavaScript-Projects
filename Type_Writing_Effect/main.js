const texts = ["websites", "apps", "illustrations"];
let count = 0;
let index = 0;
let currentText = "";
let letters = "";

// The following function is self-invoked and runs instantly as the HTML page is loaded.
(function type() {
    if (count === texts.length) {
        count = 0;
    }
    currentText = texts[count];
    letters = currentText.slice(0, index++);
    document.querySelector(".typing").textContent = letters;
    if (letters.length === currentText.length) {
        count++;
        index = 0;
    }
    setTimeout(type, 300);
})();
