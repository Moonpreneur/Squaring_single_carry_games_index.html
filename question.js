// Sample questions and answers
const questions = [
    { id: "q1", text: "11 x 11", correct: "121", choices: ["221", "111", "121", "211"] },
    { id: "q2", text: "21 x 21", correct: "441", choices: ["541", "641", "841", "441"] },
    { id: "q3", text: "31 x 31", correct: "961", choices: ["961", "861", "341", "441"] },
    { id: "q4", text: "41 x 41", correct: "1681", choices: ["1561", "1681", "1861", "1661"] },
    { id: "q5", text: "12 x 12", correct: "144", choices: ["144", "164", "184", "154"] },
    { id: "q6", text: "22 x 22", correct: "484", choices: ["524", "464", "424", "484"] }
];

// Function to get a new question
function getNewQuestion() {
    // Filter out questions that have already been used
    let availableQuestions = questions.filter(question => !usedQuestions.includes(question.id));

    if (availableQuestions.length === 0) {
        // If all questions have been used, end the game
        stopCountdown();
        showElement("gameOver");
        document.querySelector("#gameOver").innerHTML = "<p>No more questions!</p><p>Your final score is : " + gameState.score + ".</p>";
        hideElement("timeremaining");
        hideElement("correct");
        hideElement("wrong");
        gameState.playing = false;
        document.querySelector("#startreset").innerHTML = "Start Game";
        return null;
    }

    // Randomly select a question from availableQuestions
    const randomIndex = Math.floor(Math.random() * availableQuestions.length);
    return availableQuestions[randomIndex];
}
