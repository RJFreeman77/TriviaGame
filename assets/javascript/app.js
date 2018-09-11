// https://bootsnipp.com/snippets/PjyVm
// for when I am moving the progress bar
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