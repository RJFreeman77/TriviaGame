// https://bootsnipp.com/snippets/PjyVm

var questionAry = [
    {
        questionNumber: 1,
        bandName: "modestmouse",
        audioSrc: "assets/audio/modestmouse-floaton.mp3",
    }, {
        questionNumber: 2,
        bandName: "blink182",
        audioSrc: "assets/audio/blink182-imissyou.mp3",
    }, {
        questionNumber: 3,
        bandName: "mychemicalromance",
        audioSrc: "assets/audio/mychemicalromance-imnotokay.mp3",
    }, {
        questionNumber: 4,
        bandName: "takingbacksunday",
        audioSrc: "assets/audio/takingbacksunday-cutewithoutthee.mp3",
    }, {
        questionNumber: 5,
        bandName: "reelbigfish",
        audioSrc: "assets/audio/reelbigfish-takeonme.mp3",
    }]

var questionNum = 0;
var userScore = 0;
var audioElement = document.createElement("audio");
audioElement.setAttribute("src", questionAry[questionNum].audioSrc);
// timer set up
var intervalId;
var timerDisplay = $("#timer-bar");
var isQuestion;
var timer = {
    time: 40,
    reset: function () {
        timer.time = 40;
        timerDisplay.text("");
        isQuestion = true;
    },
    start: function (x) {
        timer.time = x;
        intervalId = setInterval(timer.count, 1000);
    },
    stop: function () {
        clearInterval(intervalId);
        clockRunning = false;
    },
    count: function () {
        timer.time--;
        timerDisplay.text(timer.time);
        if (timer.time <= 0 && isQuestion) {
            checkAnswer("out-of-time");
        } else if (timer.time <= !isQuestion) {
            nextQuestion();
            hideResult();
        }
    }
}
$(document).ready(function () {
    $("#start-button").on("click", function () {
        isQuestion = true;
        $("#jumbotron1").hide(500);
        $(".carousel-wrapper").show(500);
        timer.start(40);
        audioElement.play();
        console.log(audioElement);
    });

    $(".form-check-input").on("click", function () {
        var selectedValue = $(this).attr("value");
        checkAnswer(selectedValue);
    });


});

// Funtions
function checkAnswer(userAnswer) {
    $(".carousel").carousel("next");
    timer.stop();
    isQuestion = false;
    if (userAnswer === questionAry[questionNum].bandName) {
        userScore++;
        $(".correct").show();
    } else if (userAnswer === "out-of-time") {
        $(".out-of-time").show();
    } else {
        $(".wrong").show();
    }
    timer.start(5);
    questionNum++;
    console.log("questionNum:", questionNum);
}

function hideResult() {
    $(".result").hide();
}
function goToResultsPage() {
    $("#user-score").html(userScore + " / " + (questionAry.length + 1));
    $("#percentage").html((userScore/(questionAry.length + 1) * 100) + "%");
    $(".carousel-wrapper").hide();
    $("#jumbotron2").show();
}
function nextQuestion() {
    timer.stop();
    audioElement.pause();
    if (questionNum < questionAry.length) {
        isQuestion = true;
        $(".carousel").carousel("next");
        timer.start(40);
        audioElement.setAttribute("src", questionAry[questionNum].audioSrc);
        audioElement.play();
    } else {
        var ranNum = Math.floor(Math.random() * questionAry.length)
        goToResultsPage();
        audioElement.setAttribute("src", questionAry[ranNum].audioSrc);
        audioElement.play();
    }
}