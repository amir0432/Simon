var sequence = "";
var sequenceEntered = "";
var count = 0;
var level = 1;

$( document ).ready(function() {
    top.postMessage({curURL: "check"}, "localhost");
});

$(".btnStart").on("click", function () {
    var randomNo = Math.floor(Math.random() * 4) + 1;
    if (sequence.trim() == "") {
        sequence = randomNo.toString() + ",";
        $("#level-title").text("Level: " + level);        
        MakeSound(randomNo);
    }
    $(".btnStart").css("visibility", "hidden");
});

$(".btn1").on("click", function (event) {
    var seq = sequence.split(",");
    if (count < (seq.length - 2) && event.target.getAttribute("value") == seq[count]) {
        MakeSound(Number(event.target.getAttribute("value")));
        count++;
    }
    else if (count == (seq.length - 2) && event.target.getAttribute("value") == seq[count]) {
        MakeSound(Number(event.target.getAttribute("value")));
        setTimeout(function () {
            level++
            $("#level-title").text("Level: " + level);
            var randomNo = Math.floor(Math.random() * 4) + 1;
            sequence = sequence + randomNo.toString() + ",";
            MakeSound(randomNo);
            count = 0;
        }, 1000);
       
    }
    else {
        count = 0;
        sequence = "";
        level = 1;
        var crashAudio = new Audio("sounds/wrong.mp3");
        crashAudio.play();
        $("#level-title").text("Press Orange Button to Start Again");
        $(".btnStart").css("visibility", "visible");
    }
});

function MakeSound(key) {
    switch (key) {
        case 1:
            $("#green").addClass("pressed");
            var greenAudio = new Audio("sounds/green.mp3");
            greenAudio.play();
            setTimeout(function () { $("#green").removeClass("pressed"); }, 200);
            break;
        case 2:
            $("#red").addClass("pressed");
            var redAudio = new Audio("sounds/red.mp3");
            redAudio.play();
            setTimeout(function () { $("#red").removeClass("pressed"); }, 200);
            break;
        case 3:
            $("#yellow").addClass("pressed");
            var yellowAudio = new Audio("sounds/yellow.mp3");
            yellowAudio.play();
            setTimeout(function () { $("#yellow").removeClass("pressed"); }, 200);
            break;
        case 4:
            $("#blue").addClass("pressed");
            var blueAudio = new Audio("sounds/blue.mp3");
            blueAudio.play();
            setTimeout(function () { $("#blue").removeClass("pressed"); }, 200);
            break;
        default:
            Console.log(key);
    }
}
