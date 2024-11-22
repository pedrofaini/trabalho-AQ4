document.addEventListener("DOMContentLoaded", () => {
    const score = localStorage.getItem("quizScore");

    if (score !== null) {
        const resultContainer = document.createElement("div");
        resultContainer.className = "result";
        resultContainer.innerHTML = `
            <h3>Seu Resultado:</h3>
            <p>Você acertou <strong>${score}</strong> de 10 perguntas!</p>
        `;
        document.querySelector(".answer-key-container").prepend(resultContainer);
    }
});