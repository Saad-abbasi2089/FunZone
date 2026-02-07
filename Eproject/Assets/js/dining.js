const menuData =[
    {
        image: "./img/pizza hut1.webp",
        heading: "Spicy Chicken Ranch",
        brand: "pizza hut",
        description: "Spicy Chicken Ranch Pizza features tender, spicy chicken fajita paired with a creamy ranch dressing at the bottom with jalapeño, chopped garlic, tomatoes and with drizzling of peri-peri sauce on the top.",
    },

    {
        image: "./img/burger king1.avif",
        heading: "BBQ Stacker King Box - Beef",
        brand: "burger king",
        description: "Introducing the BBQ Stacker King Box. Two signature flame-grilled patties topped with golden onion rings, crispy bacon, a swirl of cheese sauce and mayonnaise, and finished with a drizzle of BBQ sauce. Meal Includes Regular Fries, drink and your choice of elther Chilll Cheese Bites or golden Onion Rings.",
    },

    {
        image: "./img/kfc1.png",
        heading: "Chicken & Chips",
        brand: "kfc",
        description: "2 pieces of Hot and Crispy Fried Chicken+ Fries + Dinner roll+ signature Vietnamese Sauce",
    },

    {
        image: "./img/pizza hut2.webp",
        heading: "Chicken Fajita",
        brand: "pizza hut",
        description: "One of our classics, the Chicken Fajita Pizza is made with spicy chicken fajita, green peppers, and onions, topped with mozzarella cheese.",
    },

    {
        image: "./img/burger king2.avif",
        heading: "Big King Meal Large",
        brand: "burger king",
        description: "A golden, crispy chicken patty made with 100% chicken breast topped with two layers of melted American cheese, pickles, onions, fresh lettuce, and a pickle relish sauce, served in a toasted sesame seed bun.",
    },

    {
        image: "./img/kfc2.png",
        heading: "Meal in a Deal",
        brand: "kfc",
        description: "Kentucky Burger with fries and a chilled drink.",
    },

    {
        image: "./img/pizza hut3.webp",
        heading: "Classic Pepperoni",
        brand: "pizza hut",
        description: "One of our all-times specialties. A meaty feast of double pepperoni, mozzarella cheese, and tomato sauce",
    },

    {
        image: "./img/burger king3.avif",
        heading: "Steakhouse Angus Gourmet Large Meal",
        brand: "burger king",
        description: "New & Improved recipe! A deep smokey BBQ sauce, rocket, a smoked cheddar cheese slice, bacon, crispy onions, tomato and mayo on top of a flame grilled 100% Aberdeen Angus Beef Burger",
    },

    {
        image: "./img/kfc3.png",
        heading: "Hot Wings Bucket",
        brand: "kfc",
        description: "10 Pcs of our Signature Hot & Crispy Wings",
    },

    {
        image: "./img/pizza hut4.webp",
        heading: "Malai Boti",
        brand: "pizza hut",
        description: "Pizza Hut's Malai Boti Pizza features tender, marinated chicken malai boti, cooked to perfection and topped with a creamy sauce, onion, and melted mozzrella cheese.",
    },

    {
        image: "./img/burger king4.avif",
        heading: "Big King Meal Large",
        brand: "burger king",
        description: "A true fan-favourite returns. Two Juicy, 100% flame-grilled beef patties topped with two layers of melted American cheese, pickles, onions, fresh lettuce, and a pickle relish sauce, served in a soft, glazed sesame seed bun.",
    },

    {
        image: "./img/kfc4.png",
        heading: "Rice & Spice",
        brand: "kfc",
        description: "Spiced and buttery rice with 6 pcs of Hot Shots topped with our signature Vietnamese sauce",
    },
];

function displayMenu(items) {
    const menuGrid = document.getElementById('menu-grid');
    
    menuGrid.innerHTML = items.map(item => `
        <div class="product-card">
            <img src="${item.image}" alt="${item.heading}" class="product-img">
            <div class="product-info">
                <span class="brand-tag">${item.brand}</span>
                <h3 class="product-title">${item.heading || "Special Deal"}</h3>
                <p class="product-description">${item.description || "Check in-store for details."}</p>
            </div>
        </div>
    `).join('');
}

function filderbrand(brand) {
    const buttons = document.querySelectorAll('.filter-btn');
    buttons.forEach(btn => {
        if(btn.innerText.toLowerCase().includes(brand)) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });

    if (brand === 'all') {
        displayMenu(menuData);
    } else {
        const filteredItems = menuData.filter(item => item.brand === brand);
        displayMenu(filteredItems);
    }
}

window.onload = () => {
    displayMenu(menuData);
};