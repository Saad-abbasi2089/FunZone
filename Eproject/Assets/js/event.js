const allCards = document.querySelectorAll('.card');

const today = new Date();
today.setHours(0, 0, 0, 0);

allCards.forEach(card => {
    const dateText = card.querySelector('span').innerText;
    const eventDate = new Date(dateText);

    if (eventDate < today) {
        card.style.opacity = "0.6";
        card.style.filter = "grayscale(100%)";
        card.style.border = "1px solid #ddd";
    }
});
