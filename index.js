var noOfButtons=document.querySelectorAll(".sound").length;
for(var i=0; i<noOfButtons; i++){
    document.querySelectorAll(".sound")[i].addEventListener("click",function(){
        console.log("you clicked");
   
       var saveInnerhtmldata= this.innerHTML
       sounds(saveInnerhtmldata);

    })
}

  document.addEventListener("keydown",function(event){
            console.log(event.key);
            sounds(event.key);
       })






         function sounds(key){
       switch(key){
    case "s":
    var audioElement1 = new Audio("./assets/songs/sword-33.mp3");
        audioElement1.play();
    break;

    case "a":
    var audioElement2 = new Audio(" ./assets/songs/lion-sms-49434.mp3");
        audioElement2.play();
    break;

    case "d":
    var audioElement3 = new Audio("./assets/songs/song-1.mp3");
        audioElement3.play();
    break;

    case "w":
    var audioElement4 = new Audio("./assets/songs/comedy-4722.mp3");
        audioElement4.play();
    break;
    default:
        console.log("plz press the correct key.")
       }
    }
   