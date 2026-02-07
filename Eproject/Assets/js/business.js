document.addEventListener('DOMContentLoaded', function() {

    const form = document.querySelector('.contact-form');

    form.addEventListener('submit', function(event) {

        event.preventDefault();

        const name = form.querySelector('input[type="text"]').value;

        alert("Thank you, " + name + "! Your message has been sent to Fun Zone.");

        form.reset();
    });
});