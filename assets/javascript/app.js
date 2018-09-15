// https://bootsnipp.com/snippets/PjyVm
// for when I am moving the progress bar
// Need to set up timer
//      2 timers, one for the question (20 seconds), one for the answer panel (10 seconds)
// connect those to the carosel
// Figure out a DRY way of comparing user answers to correct answers (objects)
// Styling
// 
        // Gets Link for Theme Song
        var audioElement = document.createElement("audio");
        audioElement.setAttribute("src", "assets/captainplanet24.mp3");

        // Theme Button
        $(".theme-button").on("click", function() {
          audioElement.play();
        });
        $(".pause-button").on("click", function() {
          audioElement.pause();
        });

var questionAry = [
    {
        questionNumber: 1,
        bandName: "Modest Mouse",
        audioSrc: "../audio/modestmouse-floaton.mp3",
    }, {
        questionNumber: 2,
        bandName: "Blink 182",
        audioSrc: "../audio/blink182-imissyou.mp3",
    }, {
        questionNumber: 3,
        bandName: "My Chemical Romance",
        audioSrc: "../audio/mychemicalromance-imnotokay.mp3",
    }, {
        questionNumber: 4,
        bandName: "Taking Back Sunday",
        audioSrc: "../audio/takingbacksunday-cutewithoutthee.mp3",
    }, {
        questionNumber: 5,
        bandName: "Reel Big Fish",
        audioSrc: "../audio/reelbigfish-takeonme.mp3",
    }]

var questionNum = 0;

function checkAnswer(userAnswer) {
    console.log("checking answer())");
    isQuestion = false;
    $('.carousel').carousel("next");
    if (userAnswer === questionAry[questionNum].bandName) {
        console.log("CORRECT");
        // show correct answer stuff
        // move onto answer slide
        // start 10 sec timer
        $('#carousel-div').on('slid.bs.carousel', function () {
            timer.start();
            console.log("slid.bs.carousel");
        })
    } else {
        console.log("WRONG");
        // show incorrect answer stuff\
        // move onto answer slide
        // start 10 sec timer
        $('#carousel-div').on('slid.bs.carousel', function () {
            timer.start();
            console.log("slid.bs.carousel");
        })
    }
    questionNum++;
}




$(document).ready(function () {
    $("#start-button").click(function () {
        questionNum = 0;
        $("#jumbotron").hide(500);
        $(".carousel-wrapper").show(500);
        timer.start();


    });

    $("#question1").change(function () {
        var selectedValue = $("input[name='radioquestion']:checked").val();
        checkAnswer(selectedValue);
    });
    
    if (timer.time <= 0) {
        timer.stop();
        checkAnswer();
    } 

});

// timer set up
var time = 20;
var intervalId;
var isQuestion = true;
var timerDisplay = $("#timer-display");

var timer = {
    time: 20,
    reset: function () {
        // timer.time = 20;
        timerDisplay.text("");
    },
    start: function () {
        if (isQuestion) {
            console.log("if isQuestion");
            timer.time = 20;
            intervalId = setInterval(timer.count, 1000);
        } else if (!isQuestion) {
            console.log("if isnot isQuestion");
            timer.time = 10;
            intervalId = setInterval(timer.count, 1000);
        } else {
            console.log("something is wrong with the timer");
        }
    },
    stop: function () {
        clearInterval(intervalId);
        clockRunning = false;
    },
    count: function () {
        timer.time--;
        console.log("time", timer.time);
        if (timer.time <= 0) {
            timer.stop();
            checkAnswer();
        }
        // timerDisplay.text(timer.time);
    }
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
