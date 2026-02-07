let data = [
    {
        image: "img/Hurricane.jpg",
        heading: "Hurricane",
        category: "thrill",
        description: "A high-speed pendulum ride that swings and spins simultaneously for ultimate thrills."
    },

    {
        image: "img/wheel.jpg",
        heading: "Giant Wheel",
        category: "thrill",
        description: "A classic family favorite offering breathtaking bird's-eye views of the Fun Zone."
    },

    {
        image: "img/Bumper Cars.jpg",
        heading: "Bumper Cars",
        category: "family",
        description: "Grab the wheel and get ready to bump! A classic favorite for kids and adults alike."
    },

    {
        image: "img/Caterpillar Coaster.jpg",
        heading: "Caterpillar Coaster",
        category: "family",
        description: "A gentle, smiling coaster perfect for our youngest thrill-seekers and their families."
    },

    {
        image: "img/Sonic Boom.jpg",
        heading: "Sonic Boom",
        category: "thrill",
        description: "Experience extreme heights on our giant park swing."
    },

    {
        image: "img/rollarcoster.avif",
        heading: "Dueling Steel Roller Coaster",
        category: "thrill",
        description: "It is an extreme Thrill Ride designed for competition and high-speed excitement."
    },

    {
        image: "img/horse dide.jpg",
        heading: "Grand Carousel",
        category: "family",
        description: "A timeless classic featuring hand-painted horses and enchanting music for the whole family."
    },

    {
      image: "img/Gravity Defier.webp",
      heading: "Gravity Defier",
      category: "thrill",
      description: "A high-speed launch coaster that pushes the limits of physics."
    },

    {
        image: "img/Bumper Boats.jpg",
        heading: "Bumper Boats",
        category: "family",
        description: "Make a splash as you captain your own boat in our interactive bumper lagoon!"
    },

    {
        image: "img/Spinning Teacups.jpg",
        heading: "Spinning Teacups",
        category: "family",
        description: "Take a whirl in our giant teacups! You control the speed in this classic spinning adventure."
    },

    {
        image: "img/Pirate Ship.jpg",
        heading: "Pirate Ship",
        category: "family",
        description: "Set sail on the high seas! Experience the thrilling swing and weightless drops of our giant galley."
    },

    {
        image: "img/The Iron Vortex.webp",
        heading: "The Iron Vortex",
        category: "thrill",
        description: "Twist and turn through massive steel loops at 70mph."
    },

];

let container = document.getElementById("card-container");

function displayRides(ridesToShow) {
    container.innerHTML = ""; 
    ridesToShow.forEach(item => {
        container.innerHTML += `
            <div class="card">
                <img src="${item.image}" alt="${item.heading}">
                <div class="card-content">
                    <h2>${item.heading}</h2>
                    <p>${item.description}</p>
                </div>
            </div>
        `;
    });
}

function filterRides(category) {
    let buttons = document.querySelectorAll('.f-btn');
    buttons.forEach(btn => btn.classList.remove('active'));
    
    if (event) {
        event.target.classList.add('active');
    }

    if (category === 'all') {
        displayRides(data);
    } else {
        let filteredData = data.filter(ride => ride.category === category);
        displayRides(filteredData);
    }
}

displayRides(data);