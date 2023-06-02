// This function chooses a random colour based on hexadecimal codes
function getRandomColor() {
    var letters = '0123456789ABCDEF'; // a string with every possible character in hexadecimal
    var color = '#'; // identifies that we're choosing a colour
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    } // restricts the length of the string to a '#' and then 6 characters
    return color;
}

// Create a random button at a random position
function createRandomButton(color) {
    var button = document.createElement('button');
    button.classList.add('randomButton');
    button.style.backgroundColor = color; // Return random colour that was generated
    button.style.left = Math.random() * (window.innerWidth - 50) + 'px'; // set width boundary of page
    button.style.top = Math.random() * (window.innerHeight - 50) + 'px'; // set height boundary of page
    button.addEventListener('click', function() {
        createRandomButton(color);
    });
    document.body.appendChild(button); // Add button to list of buttons
}

// Initialize the main button
var mainButton = document.getElementById('mainButton');
mainButton.addEventListener('click', function() {
    var color = getRandomColor();
    createRandomButton(color);
});
