// https://bootsnipp.com/snippets/PjyVm
// for when I am moving the progress bar
// Need to set up timer
//      2 timers, one for the question (20 seconds), one for the answer panel (10 seconds)
// connect those to the carosel
// Figure out a DRY way of comparing user answers to correct answers (objects)
// Styling
// 


var questionAry = [
    {
    questionNumber: 1,
    questionName: "Harrison Ford",
    correctAnswer: "option2",
}, {
    questionNumber: 2,
    questionName: "Iron Man",
    correctAnswer: "option1",
}, {
    questionNumber: 3,
    questionName: "Face Off",
    correctAnswer: "option3",
}
]
var currentQuestion;



$(document).ready(function() {
    $("#start-button").click(function() {
        $("#jumbotron").hide(500);
        $(".carousel-wrapper").show(500);
    });

    $("#question1").change(function() {
        console.log("change function");
        var selectedVaule = $("input[name='radioquestion']:checked").val();
        console.log(selectedVaule);
    });

});