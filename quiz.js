function checkAnswer() {
    // Identify the Correct Answer
    const correctAnswer = "4";

    // Retrieve the User’s Answer
    const userAnswer = document.querySelector('input[name="quiz"]:checked').value;

    // Compare the User’s Answer with the Correct Answer
    if (userAnswer === correctAnswer) {
        document.getElementById("feedback").textContent = "Correct ! Bien joué.";
    } else {
        document.getElementById("feedback").textContent = "C'est incorrect. Réessayez !";
    }
}

//Add an Event Listener to the Submit Button
document.getElementById("submit-answer").addEventListener("click", checkAnswer);
