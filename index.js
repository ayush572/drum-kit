var audio = "";
for (var i = 0; i < document.querySelectorAll("button").length; i++) {
    document.querySelectorAll("button")[i].addEventListener("click", function () 
    {
        makesound(this.innerHTML);
        animation(this.textContent);
    })
};
document.addEventListener("keydown",function(event){
  makesound(event.key);  
  animation(event.key);
});

function makesound(value)
{
    switch (value) {
        case "w":
                audio = new Audio("./sounds/tom-1.mp3");
                audio.play();
                break;
            case "a":
                audio = new Audio("./sounds/tom-2.mp3");
                audio.play();            
                break;
            case "s":
                audio = new Audio("./sounds/tom-3.mp3");
                audio.play();    
                break;
            case "d":
                audio = new Audio("./sounds/tom-4.mp3");
                audio.play();
                break;
            case "j":
                audio = new Audio("./sounds/crash.mp3");
                audio.play();
                break;
            case "k":
                audio = new Audio("./sounds/snare.mp3");
                audio.play();
                break;
            case "l":
            audio = new Audio("./sounds/kick-bass.mp3");
            audio.play();
            break;
            default:
                console.log(event.key);
}}
function animation(passedkey){
    document.querySelector("."+passedkey).classList.add("pressed");
    setTimeout(function(){document.querySelector("."+passedkey).classList.remove("pressed")},500);
}