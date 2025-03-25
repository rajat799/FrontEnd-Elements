const buttons = document.querySelectorAll('.buttons');
const body = document.querySelector("body");
buttons.forEach(function(btn){
    console.log(btn);
    btn.addEventListener("click", function(e){
        console.log(e);
        console.log(e.target);
        body.style.backgroundColor = e.target.id;
    })
})