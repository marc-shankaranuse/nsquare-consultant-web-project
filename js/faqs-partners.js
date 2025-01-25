// FAQ Functionality
const questions = document.querySelectorAll('.question1');

questions.forEach(question => {
    question.addEventListener('click', () => {
        const answer = question.querySelector('.answer');

        // Toggle the answer visibility
        if (answer.style.display === "none" || answer.style.display === "") {
            answer.style.display = "block"; // Show answer
        } else {
            answer.style.display = "none"; // Hide answer
        }
    });
});