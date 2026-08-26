function checkScam() {
    let message = document.getElementById("message").value.toLowerCase();
    let result = document.getElementById("result");

    if (message.trim() === "") {
        result.style.display = "block";
        result.innerHTML = "⚠️ Please enter a message first.";
        return;
    }

    let scamWords = [
        "otp","password","pin","winner","won","prize","lottery",
        "urgent","click","kyc","verify","bank","money","reward",
        "claim","free","account blocked"
    ];

    let foundWords = [];
    for (let word of scamWords) {
        if (message.includes(word)) foundWords.push(word);
    }

    result.style.display = "block";

    if (foundWords.length >= 4) {
        result.innerHTML = "🔴 HIGH RISK!<br><br>This message contains several common scam warning signs.<br><br>Warning words found: " + foundWords.join(", ");
    } else if (foundWords.length >= 2) {
        result.innerHTML = "🟠 BE CAREFUL!<br><br>This message contains some suspicious words.<br><br>Warning words found: " + foundWords.join(", ");
    } else {
        result.innerHTML = "🟢 LOW RISK<br><br>No common scam keywords were detected. However, always verify messages before trusting them.";
    }
}

function checkQuiz() {
    let score = 0;
    let q1 = document.querySelector('input[name="q1"]:checked');
    let q2 = document.querySelector('input[name="q2"]:checked');
    let q3 = document.querySelector('input[name="q3"]:checked');

    if (q1 && q1.value === "correct") score++;
    if (q2 && q2.value === "correct") score++;
    if (q3 && q3.value === "correct") score++;

    let result = document.getElementById("quizResult");
    result.innerHTML = "🎉 Your Score: " + score + " / 3";

    if (score === 3) {
        result.innerHTML += "<br>Excellent! You know the basics of cyber safety. 🛡️";
    } else if (score === 2) {
        result.innerHTML += "<br>Good job! Keep learning about cyber safety.";
    } else {
        result.innerHTML += "<br>Keep learning and stay safe online!";
    }
}
