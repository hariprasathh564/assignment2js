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
    var audioElement1 = new Audio("/home/hariprashath/Documents/js/assignment2js/assets/sword-33.mp3");
        audioElement1.play();
    break;

    case "a":
    var audioElement2 = new Audio("/home/hariprashath/Documents/js/assignment2js/assets/lion-sms-49434.mp3");
        audioElement2.play();
    break;

    case "d":
    var audioElement3 = new Audio("/home/hariprashath/Documents/js/assignment2js/assets/000867237-prev-30584 (Copy).mp3");
        audioElement3.play();
    break;

    case "w":
    var audioElement4 = new Audio("/home/hariprashath/Documents/js/assignment2js/assets/comedy-4722.mp3");
        audioElement4.play();
    break;
    default:
        console.log("plz press the correct key.")
       }
    }