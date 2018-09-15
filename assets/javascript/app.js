// https://bootsnipp.com/snippets/PjyVm
// for when I am moving the progress bar
// Need to set up timer
//      2 timers, one for the question (20 seconds), one for the answer panel (10 seconds)
// connect those to the carosel
// Figure out a DRY way of comparing user answers to correct answers (objects)
// Styling
// 
// Gets Link for Theme Song
// var audioElement = document.createElement("audio");
// audioElement.setAttribute("src", "assets/captainplanet24.mp3");

// // Theme Button
// $(".theme-button").on("click", function() {
//   audioElement.play();
// });
// $(".pause-button").on("click", function() {
//   audioElement.pause();
// });

var questionAry = [
    {
        questionNumber: 1,
        bandName: "modestmouse",
        audioSrc: "../audio/modestmouse-floaton.mp3",
    }, {
        questionNumber: 2,
        bandName: "blink182",
        audioSrc: "../audio/blink182-imissyou.mp3",
    }, {
        questionNumber: 3,
        bandName: "mychemicalromance",
        audioSrc: "../audio/mychemicalromance-imnotokay.mp3",
    }, {
        questionNumber: 4,
        bandName: "takingbacksunday",
        audioSrc: "../audio/takingbacksunday-cutewithoutthee.mp3",
    }, {
        questionNumber: 5,
        bandName: "reelbigfish",
        audioSrc: "../audio/reelbigfish-takeonme.mp3",
    }]

var questionNum = 1;
var userScore = 0;
function checkAnswer(userAnswer) {
    timer.stop();
    $('.carousel').carousel("next");
    if (questionNum <= questionAry.length) {
        if (userAnswer === questionAry[questionNum-1].bandName) {
            userScore++;
            console.log("CORRECT");
            $(".correct").show();
            // move onto answer slide
            // start 10 sec timer
            timer.start();
        } else if (userAnswer === "out-of-time") {
            $(".out-of-time").show();
            // move to answer slide
            // start 10 sec time
            timer.start();
        } else {
            console.log("WRONG");
            $(".wrong").show();
            // move onto answer slide
            // start 10 sec timer
            timer.start();
        }
        questionNum++;
        console.log(questionNum);
    } else {
        timer.stop();
        goToResultsPage();
    }

}

function goToResultsPage() {
    $(".carousel-wrapper").hide(500);
    $(".jumbotron2").show(500);
}



$(document).ready(function () {
    $("#start-button").click(function () {
        questionNum = 1;
        $("#jumbotron1").hide(500);
        $(".carousel-wrapper").show(500);
        timer.start();
    });

    $(".form-check-input").click(function () {
        var selectedValue = $(this).attr("value");
        checkAnswer(selectedValue);
        console.log(this);
        console.log($(this).attr("value"));
    });


});

// timer set up
var intervalId;
var timerDisplay = $("#timer-bar");
var isQuestion = true;
var timer = {
    time: 45,
    reset: function () {
        timer.time = 45;
        timerDisplay.text("");
        isQuestion = true;
    },
    start: function () {
        if (isQuestion) {
            timer.time = 5;
            intervalId = setInterval(timer.count, 1000);
            isQuestion = false;
        } else if (!isQuestion) {
            timer.time = 5;
            intervalId = setInterval(timer.count, 1000);
            isQuestion = true;
        } else {
            console.log('something is wrong with start function');
        }
    },
    stop: function () {
        console.log("STOP");
        clearInterval(intervalId);
        clockRunning = false;
    },
    count: function () {
        timer.time--;
        console.log("time", timer.time);
        timerDisplay.text(timer.time);
        if (timer.time <= 0) {
            hideResult();
            checkAnswer("out-of-time");
        }
    }
}

function hideResult() {
    $(".result").hide();
}


// $('#myCarousel').on('slid.bs.carousel', function () {
//     console.log("slid.bs.carousel");
//   })
//  
//  slide.bs.carousel - This event fires immediately when the slide instance method is invoked.
//  slid.bs.carousel  - This event is fired when the carousel has completed its slide transition.
// 
// 
// 
