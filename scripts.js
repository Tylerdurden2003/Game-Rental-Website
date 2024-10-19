
const rentalForm = document.getElementById("rentalForm");
const gameSelect = document.getElementById("gameSelect");
const rentalDuration = document.getElementById("rentalDuration");
const rentalCodeDisplay = document.getElementById("rentalCode");
const codeDisplay = document.getElementById("codeDisplay");


document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

const games = [
    { id: 1, name: "Game 1", description: "Action-packed and thrilling adventure awaits." },
    { id: 2, name: "Game 2", description: "Explore vast worlds and defeat epic monsters." },
    { id: 3, name: "Game 3", description: "A strategic challenge for the sharpest minds." },
];


function loadGames() {
    games.forEach(game => {
        const option = document.createElement("option");
        option.value = game.id;
        option.text = game.name;
        gameSelect.appendChild(option);
    });
}


window.addEventListener('DOMContentLoaded', loadGames);


function validateForm() {
    if (gameSelect.value === "" || rentalDuration.value === "") {
        alert("Please select a game and enter a rental duration.");
        return false;
    }
    return true;
}


function generateRentalCode(duration) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let result = '';
    const charactersLength = characters.length;

  
    for (let i = 0; i < 6; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    return `${result}-${duration}D`; 
}


rentalForm.addEventListener("submit", function(event) {
    event.preventDefault();

    if (!validateForm()) return;

    const duration = rentalDuration.value;
    const rentalCode = generateRentalCode(duration);

    codeDisplay.innerText = rentalCode; 
    rentalCodeDisplay.classList.remove("hidden"); 

   
    rentalCodeDisplay.scrollIntoView({ behavior: "smooth" });
});


function resetForm() {
    gameSelect.selectedIndex = 0;
    rentalDuration.value = "";
    rentalCodeDisplay.classList.add("hidden");
}


window.onload = resetForm;

