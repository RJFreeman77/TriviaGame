// https://bootsnipp.com/snippets/PjyVm
// general variables
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
        animateBar();
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
        audioElement.setAttribute("src", questionAry[questionNum].audioSrc);
        audioElement.play();
    });
    $(".form-check-input").on("click", function () {
        var selectedValue = $(this).attr("value");
        checkAnswer(selectedValue);
    });
    $("#restart-button").on("click", function () {
        $("#jumbotron2").hide();
        $("#jumbotron1").show();
        questionNum = 0;
        userScore = 0;
        isQuestion = true;
        audioElement.pause();
        $(".carousel").carousel("next");
    });
});

// funtions
function checkAnswer(userAnswer) {
    $(".carousel").carousel("next");
    timer.stop();
    $("#progress-div").css("visibility", "hidden");
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
}
function hideResult() {
    $(".result").hide();
}
function animateBar() {
    width = (timer.time / 45) * 100;
    $("#progress-bar").css("width", width + "%");
}
function nextQuestion() {
    timer.stop();
    $("#progress-bar").css("width", "100%");
    audioElement.pause();
    if (questionNum < questionAry.length) {
        $("#progress-div").css("visibility", "visible");
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
function goToResultsPage() {
    $("#user-score").html(userScore + " / " + questionAry.length);
    $("#percentage").html((userScore / questionAry.length * 100) + "%");
    $(".carousel-wrapper").hide();
    $("#jumbotron2").show();
}