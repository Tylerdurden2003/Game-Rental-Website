// DOM Elements
const showLoginBtn = document.getElementById('showLogin');
const showSignupBtn = document.getElementById('showSignup');
const loginForm = document.getElementById('loginForm');
const signupForm = document.getElementById('signupForm');
const goToSignupLink = document.getElementById('goToSignup');
const goToLoginLink = document.getElementById('goToLogin');
const welcomeSection = document.querySelector('.welcome-section');


showLoginBtn.addEventListener('click', function() {
    toggleForms(loginForm, signupForm, welcomeSection);
});

showSignupBtn.addEventListener('click', function() {
    toggleForms(signupForm, loginForm, welcomeSection);
});

goToSignupLink.addEventListener('click', function(e) {
    e.preventDefault();
    toggleForms(signupForm, loginForm);
});

goToLoginLink.addEventListener('click', function(e) {
    e.preventDefault();
    toggleForms(loginForm, signupForm);
});


function toggleForms(showForm, hideForm, hideSection = null) {
    if (hideSection) hideSection.classList.add('hidden');
    hideForm.classList.add('hidden');
    showForm.classList.remove('hidden');
}


document.getElementById('signup').addEventListener('submit', function(e) {
    e.preventDefault();

    const username = document.getElementById('signupUsername').value.trim();
    const email = document.getElementById('signupEmail').value.trim();
    const password = document.getElementById('signupPassword').value.trim();

    if (!username || !email || !password) {
        alert("Please fill out all the fields.");
        return;
    }

   
    if (localStorage.getItem(email)) {
        alert("This email is already registered. Please log in.");
        return;
    }

   
    const user = { username, email, password };
    localStorage.setItem(email, JSON.stringify(user));

    alert("Signup successful! You can now log in.");

    
    resetForm('signup');
    toggleForms(loginForm, signupForm);
});


document.getElementById('login').addEventListener('submit', function(e) {
    e.preventDefault();

    const email = document.getElementById('loginEmail').value.trim();
    const password = document.getElementById('loginPassword').value.trim();

    
    const user = JSON.parse(localStorage.getItem(email));

    if (!user) {
        alert("No account found with this email. Please sign up.");
        return;
    }

   
    if (user.password !== password) {
        alert("Incorrect password. Please try again.");
        return;
    }

    alert(`Welcome back, ${user.username}!`);

     window.location.href = "/website.html"; 
});

// Helper function to reset form fields
function resetForm(formId) {
    document.getElementById(formId).reset();
}
