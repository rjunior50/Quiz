function nextQuestion(nextPage) {
    const form = document.getElementById('quizForm');
    const formData = new FormData(form);
    for (let [name, value] of formData.entries()) {
        localStorage.setItem(name, value);
    }
    window.location.href = nextPage;
}

function previousQuestion(previousPage) {
    window.location.href = previousPage;
}

function finishQuiz() {
    const form = document.getElementById('quizForm');
    const formData = new FormData(form);
    for (let [name, value] of formData.entries()) {
        localStorage.setItem(name, value);
    }
    window.location.href = 'result.html';
}

// Função para reiniciar o quiz e limpar as respostas armazenadas
function reiniciarQuiz() {
    // Limpar todas as respostas salvas no localStorage
    localStorage.clear();  // Limpa todo o armazenamento local

    // Opcional: Redireciona para a primeira página do quiz
    window.location.href = "index.html";  // Redireciona para a página inicial
}

window.onload = function () {
    if (window.location.pathname.includes('result.html')) {
        let score = 0;
        const totalQuestions = 5;

        if (localStorage.getItem('q1') === 'b') score++;
        if (localStorage.getItem('q2') === 'b') score++;
        if (localStorage.getItem('q3') === 'a') score++;
        if (localStorage.getItem('q4') === 'b') score++;
        if (localStorage.getItem('q5') === 'c') score++;

        const percentage = (score / totalQuestions) * 100;

        document.getElementById('result').innerText = `Você acertou ${score} de ${totalQuestions} perguntas (${percentage}%).`;
    }
};
