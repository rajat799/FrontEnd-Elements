const button = document.getElementById('myButton');
const messages = document.getElementById('messages');

let isGreen = true;
let clickCount = 0;

button.addEventListener('click', function() {
    clickCount++;
    
    if (isGreen) {
        button.style.backgroundColor = 'blue';
        button.textContent = "Clicked";
        messages.innerHTML = `Green button clicked!<br>Total clicks: ${clickCount}`;
    } else {
        button.style.backgroundColor = "green";
        button.textContent = "Click Me!";
        messages.innerHTML = `Blue button clicked!<br>Total clicks: ${clickCount}`;
    }
    
    isGreen = !isGreen;
});