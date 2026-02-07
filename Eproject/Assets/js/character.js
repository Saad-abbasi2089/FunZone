const characters = [
    {
        heading: "Mickey Mouse",
        image: "./img/Mickey Mouse.jpg",
        description: "Mickey debuted in 1928's 'Steamboat Willie.' In the parks, he is known as a spirited and impulsive hero who gets by on pluck and ingenuity."
    },

    {
        heading: "Winnie the Pooh",
        image: "./img/Winnie the Pooh.jpg",
        description: "A good-natured, honey-loving bear from the Hundred Acre Wood. Pooh often finds himself in 'sticky situations.'"
    },

    {
        heading: "Olaf",
        image: "./img/Olaf.jpg",
        description: "Created by Elsa's magic, Olaf represents innocent love. Despite being a snowman, his biggest dream is to experience summer."
    },

    {
        heading: "Chip 'n' Dale",
        image: "./img/Chip 'n' Dale.jpg",
        description: "These two anthropomorphic chipmunks are famous for their high-pitched speech and penchant for mischief."
    },

    {
        heading: "Pluto",
        image: "./img/pluto.jpg",
        description: "Pluto is a pioneer of the Disney world, first appearing in 1930. Unlike his friends Mickey, Goofy, or Donald, Pluto is unique because he doesn't wear clothes or speak—he stays true to his dog nature, communicating through barks, facial expressions, and some very expressive body language"
    },

    {
        heading: "Donald Fauntleroy Duck",
        image: "./img/Donald.jpg",
        description: "Donald is famous for his semi-intelligible speech, his signature sailor outfit, and a short fuse that leads to some of the funniest temper tantrums in animation history. He first waddled onto the screen in 1934 in the cartoon The Wise Little Hen."
    },
];

const grid = document.getElementById('char-grid');

characters.forEach(char => {
    const card = document.createElement('div');
    card.className = 'char-card';
    
    card.innerHTML = `
        <img src="${char.image}" alt="${char.heading}">
        <h3>${char.heading}</h3>
        <p class="char-description">${char.description}</p>
    `;
    
    grid.appendChild(card);
});