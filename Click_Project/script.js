displayText = document.querySelector("h2");

document.getElementById("apple").addEventListener('click', function(){
    console.log("clicked apple");
    displayText.innerHTML = "Clicked Apple";
})

document.getElementById("bird").addEventListener('click', function(){
    console.log("clicked bird");
    displayText.innerHTML = "Clicked bird";

})

document.getElementById("dice").addEventListener('click', function(){
    console.log("clicked dice");
    displayText.innerHTML = "Clicked dices";

})

document.getElementById("car").addEventListener('click', function(){
    console.log("clicked car");
    displayText.innerHTML = "Clicked car";

})