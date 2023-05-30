function runCode() {
    let htmlCode = document.getElementById("html-code").value;
    let cssCode = document.getElementById("css-code").value;
    let jsCode = document.getElementById("js-code").value;
    let output = document.getElementById("output");
    let runIcon = document.getElementById("run-icon");  
    let checkbox = document.getElementById("checkbox");
    let button = document.getElementById("clear-button");

    // Check if the run-icon element has the 'active' class
    if (runIcon.classList.contains('active')) {
        output.contentDocument.body.innerHTML = htmlCode + "<style>" + cssCode + "</style>";
        output.contentWindow.eval(jsCode);
    }
}

// Add an event listener to the icon element to toggle the 'active' class on click
document.getElementById("run-icon").addEventListener("click", function() {
    this.classList.toggle("active");
});

checkbox.addEventListener("change", () => {
    document.body.classList.toggle("dark")
})
button.addEventListener("change", () => {
    document.body.classList.toggle("dark")
})

function clearCode() {
    // Clear the code in all textareas
    document.getElementById("html-code").value = "";
    document.getElementById("css-code").value = "";
    document.getElementById("js-code").value = "";
    document.getElementById("output").contentDocument.body.innerHTML = "";
}

// Call the clearCode function when the clear button is clicked

function clearCode() {
    document.getElementById("html-code").value = "";
    document.getElementById("css-code").value = "";
    document.getElementById("js-code").value = "";
    document.getElementById("output").contentDocument.body.innerHTML = "";
}

document.getElementById("clear-button").addEventListener("click", clearCode);

// Function to toggle dark mode
function toggleDarkMode() {
    button.classList.remove('light-mode');
    button.classList.add('dark-mode');
}

// Function to toggle light mode
function toggleLightMode() {
    button.classList.remove('dark-mode');
    button.classList.add('light-mode');
}

// Example function to toggle between dark and light mode
function toggleMode() {
    const siteMode = document.body.classList.contains('dark-mode') ? 'light' : 'dark';
    
    if (siteMode === 'dark') {
        document.body.classList.remove('dark-mode');
        document.body.classList.add('light-mode');
        toggleLightMode();
    } else {
        document.body.classList.remove('light-mode');
        document.body.classList.add('dark-mode');
        toggleDarkMode();
    }
}

// Example event listener to toggle mode on button click
button.addEventListener('click', toggleMode);
