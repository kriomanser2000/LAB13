function addQuestion() 
{
    var questionInput = document.getElementById("question");
    var correctAnswerInput = document.getElementById("correct-answer");
    var incorrectAnswerInput = document.getElementById("incorrect-answer");
    var question = questionInput.value.trim();
    var correctAnswer = correctAnswerInput.value.trim();
    var incorrectAnswer = incorrectAnswerInput.value.trim();
    if (question === "" || correctAnswer === "" || incorrectAnswer === "") 
    {
        alert("Please fill out all fields.");
        return;
    }
    var questionList = document.getElementById("question-list");
    var listItem = document.createElement("li");
    listItem.textContent = "Question: " + question + " | Correct Answer: " + correctAnswer + " | Incorrect Answer: " + incorrectAnswer;
    questionList.appendChild(listItem);
    questionInput.value = "";
    correctAnswerInput.value = "";
    incorrectAnswerInput.value = "";
}