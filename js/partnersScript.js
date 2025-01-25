document.addEventListener('DOMContentLoaded', function() {
    const calendarDiv = document.getElementById('calendar');

    // Add a simple date picker (using browser's native date input)
    let calendarHTML = '<label for="date">Select Date:</label><br>';
    calendarHTML += '<input type="date" id="date" name="date"><br>';
    calendarHTML += '<label for="time">Select Time:</label><br>';
    calendarHTML += '<input type="time" id="time" name="time">';
    
    calendarDiv.innerHTML = calendarHTML;
});

document.addEventListener('DOMContentLoaded', function() {
    const swipeContainer = document.querySelector('.swipe-container');
    const leftBtn = document.querySelector('.left-btn');
    const rightBtn = document.querySelector('.right-btn');
    
    let scrollAmount = 0;
    const scrollStep = 320;  // Adjust based on container width

    leftBtn.addEventListener('click', () => {
        swipeContainer.scrollLeft -= scrollStep;
    });

    rightBtn.addEventListener('click', () => {
        swipeContainer.scrollLeft += scrollStep;
    });
});

// calender 
// Function to handle the scheduling button
document.getElementById('scheduleButton').addEventListener('click', function() {
    const date = document.getElementById('meetingDate').value;
    const time = document.getElementById('meetingTime').value;

    if (date && time) {
        alert(`Meeting scheduled on ${date} at ${time}`);
        // Additional functionality can be added here to store or process the scheduling
    } else {
        alert('Please select both a date and a time.');
    }
});


// Dynamic Counter Functionality
const counters = document.querySelectorAll('.count');

counters.forEach(counter => {
    const updateCount = () => {
        const target = +counter.getAttribute('data-target');
        const count = +counter.innerText;

        // Calculate increment
        const speed = 200; // Adjust the speed of counter
        const increment = target / speed;

        if (count < target) {
            counter.innerText = Math.ceil(count + increment);
            setTimeout(updateCount, 1);
        } else {
            counter.innerText = target;
        }
    };

    updateCount();
});


// FAQ Functionality
const questions = document.querySelectorAll('.question');

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


// Smooth Scrolling
const links = document.querySelectorAll('a[href^="#"]');

for (let link of links) {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        if (targetSection) {
            targetSection.scrollIntoView({ behavior: 'smooth' });
        }
    });
}


// Back to Top Button Functionality
const backToTopButton = document.getElementById('backToTop');

window.onscroll = function() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        backToTopButton.style.display = "block";
    } else {
        backToTopButton.style.display = "none";
    }
};

backToTopButton.addEventListener('click', function() {
    window.scrollTo({top: 0, behavior: 'smooth'});
});



// Form Validation
const partnerForm = document.getElementById('partnerForm'); // Assume your form has an ID 'partnerForm'

partnerForm.addEventListener('submit', function(e) {
    let isValid = true;
    const inputs = partnerForm.querySelectorAll('input, textarea');

    inputs.forEach(input => {
        if (!input.value) {
            isValid = false;
            input.classList.add('error'); // Add error class for styling
        } else {
            input.classList.remove('error'); // Remove error class if valid
        }
    });

    if (!isValid) {
        e.preventDefault(); // Prevent form submission if invalid
        alert("Please fill out all fields.");
    }
});


