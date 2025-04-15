var faceTop = document.getElementsByClassName("absolute")[0];
var faceBottom = document.getElementsByClassName("absolute")[1];
var hotDog = document.getElementById("hotDog");

var button = document.getElementsByTagName("button")[0];

function eat(){
    button.disabled = true;
    faceBottom.style.transform = "translateX(-100%) rotateZ(-30deg)";
    setTimeout(function(){
        hotDog.style.transform = "translateX(-50%)"
        chomp(3)
    }, 300)
    setTimeout(function(){
        hotDog.style.scale = "0.6"
    }, 600)
    setTimeout(function(){
        hotDog.style.transform = "translateX(-30%) translateY(-40%)"
    }, 900)
    setTimeout(function(){
        hotDog.style.transition = "none";
        faceBottom.style.transform = "translateX(-100%)";
        setTimeout(function(){
            hotDog.style.scale = "1";
            hotDog.style.transform = "";
            setTimeout(function(){
                hotDog.style.transition = "all 0.3s linear";
                button.disabled = false;
            }, 300)
        }, 300)
    }, 1500)
}

async function chomp(num){
    for (let i = 0; i < num; i++) {
        console.log("chomp");
        faceBottom.style.transform = "translateX(-100%) rotateZ(-30deg)";
        setTimeout(function(){
            faceBottom.style.transform = "translateX(-100%)";
            let audio = new Audio('carrotnom-92106.mp3');
            audio.play();
        }, 200);
        await new Promise(resolve => setTimeout(resolve, 500));
    }
}

button.onclick = eat;