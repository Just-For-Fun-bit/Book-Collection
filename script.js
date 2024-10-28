const bookContainer = document.getElementById('bookContainer');
const listViewBtn = document.getElementById('listView');
const gridViewBtn = document.getElementById('gridView');
const navLinks = document.querySelectorAll('nav ul li a');
const hamburgerNavLinks = document.querySelectorAll('.side-menu ul li a');
const modal = document.getElementById('modal');
const modalText = document.getElementById('modalText');
const closeButton = document.querySelector('.close-button');
const searchInput = document.getElementById('searchInput');
const clearSearch = document.getElementById('clearSearch');
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const menuButton = document.getElementById('menuButton');
const sideMenu = document.getElementById('sideMenu');
const headerSearchInput = document.getElementById('headerSearchInput');
const headerClearSearch = document.getElementById('headerClearSearch');
const hamburgerSearchInput = document.getElementById('hamburgerSearchInput');
const hamburgerClearSearch = document.getElementById('hamburgerClearSearch');
const hamburgerListViewBtn = document.getElementById('hamburgerListView');
const hamburgerGridViewBtn = document.getElementById('hamburgerGridView');
const pinToTopButton = document.getElementById('pinToTop');
const modalContent = document.querySelector('.modal-content');

const books = [
    { 
        title: "To Kill a Mockingbird", 
        author: "Harper Lee", 
        year: 1960, 
        category: "fiction", 
        image: "images/To Kill a Mockingbird.png"
    },
    { 
        title: "1984", 
        author: "George Orwell", 
        year: 1949, 
        category: "fiction", 
        image: "images/1984.png"
    },
    { 
        title: "Pride and Prejudice", 
        author: "Jane Austen", 
        year: 1813, 
        category: "fiction", 
        image: "images/Pride and Prejudice.png"
    },
    { 
        title: "The Great Gatsby", 
        author: "F. Scott Fitzgerald", 
        year: 1925, 
        category: "fiction", 
        image: "images/The Great Gatsby.png"
    },
    { 
        title: "One Hundred Years of Solitude", 
        author: "Gabriel García Márquez", 
        year: 1967, 
        category: "fiction", 
        image: "images/One Hundred Years of Solitude.png"
    },
    { 
        title: "Brave New World", 
        author: "Aldous Huxley", 
        year: 1932, 
        category: "fiction", 
        image: "images/Brave New World.png"
    },
    { 
        title: "A Brief History of Time", 
        author: "Stephen Hawking", 
        year: 1988, 
        category: "non-fiction", 
        image: "images/A Brief History of Time.png",
        summary: "A landmark volume in science writing by one of the great minds of our time, Stephen Hawking's book explores such profound questions as: How did the universe begin—and what made its start possible?",
        keyThemes: [
            {
                title: "Time and Space",
                description: "Explores the nature of time and how it's interwoven with space in spacetime."
            },
            {
                title: "The Universes Beginning",
                description: "The Big Bang theory as the starting point of the cosmos."
            },
            {
                title: "Black Holes",
                description: "Describes black holes, their properties, and Hawking radiation."
            },
            {
                title: "Unified Theory Quest",
                description: "The search for a single theory combining relativity and quantum mechanics."
            },
            {
                title: "Determinism vs. Free Will",
                description: "Questions whether the universe is fully deterministic or allows for free will."
            },
            {
                title: "Science and God",
                description: "Examines if a creator is necessary to explain the universe's existence."
            }
        ]
    },
    { 
        title: "The Immortal Life of Henrietta Lacks", 
        author: "Rebecca Skloot", 
        year: 2010, 
        category: "non-fiction", 
        image: "images/The Immortal Life of Henrietta Lacks.png"
    },
    { 
        title: "Sapiens: A Brief History of Humankind", 
        author: "Yuval Noah Harari", 
        year: 2014, 
        category: "non-fiction", 
        image: "images/Sapiens - A Brief History of Humankind.png"
    },
];

function createBookElement(book) {
    const bookElement = document.createElement('div');
    bookElement.classList.add('book');
    bookElement.innerHTML = `
        <img src="${book.image}" alt="${book.title} cover" class="book-cover">
        <h2>${book.title}</h2>
        <p data-label="Author">${book.author}</p>
        <p data-label="Year">${book.year}</p>
        <p data-label="Genre">${book.category.charAt(0).toUpperCase() + book.category.slice(1)}</p>
        <button class="read-button">Read Book</button>
    `;

    const readButton = bookElement.querySelector('.read-button');

    readButton.addEventListener('click', () => {
        if (book.title === "A Brief History of Time") {
            modalText.innerHTML = `
                <div class="translation-toggle">
                    <button id="translateBtn" class="translate-btn">
                        <span class="translate-icon"></span>
                    </button>
                </div>
                <div class="modal-section">
                    <strong class="section-title">Key Themes:</strong>
                    <ul class="key-themes-list">
                        ${book.keyThemes.map(theme => `<li class="key-theme-item"><strong>${theme.title}</strong>: ${theme.description}</li>`).join('')}
                    </ul>
                </div>
                <hr class="section-divider">
                <div class="summary-section">
                    <strong class="section-title">Summary:</strong>
                    <p>${book.summary}</p>
                    <p>Here's a more detailed summary of <em>A Brief History of Time</em>, with examples and real-life connections for each section:</p>
                    <ol>
                        <li><strong>Space and Time as One</strong>
                            <ul>
                                <li>Hawking explains that space and time are woven together in a single concept called "spacetime." When an object moves faster or is near something very heavy, like a planet, time moves differently — it slows down. This is why astronauts on the International Space Station, moving very fast, age just a bit slower than people on Earth.</li>
                                <li><strong>Example:</strong> Imagine two twins: one stays on Earth while the other travels in a fast spaceship. When they reunite, the twin who traveled would be slightly younger due to experiencing time more slowly.</li>
                                <li><strong>Real Life:</strong> GPS satellites orbiting Earth move so quickly that their clocks slow down. Engineers adjust for this so that GPS timing stays accurate for navigation.</li>
                            </ul>
                        </li>
                        <li><strong>The Expanding Universe and The Big Bang</strong>
                            <ul>
                                <li>The universe is getting bigger every second, as galaxies move further apart. This expansion suggests the universe began from an incredibly dense, hot point — the Big Bang. Observing cosmic microwave background radiation (heat left from the Big Bang) helps us understand this origin story.</li>
                                <li><strong>Example:</strong> Picture a balloon with dots on it representing galaxies. As you blow up the balloon, the dots move further apart, just like galaxies in the expanding universe.</li>
                                <li><strong>Real Life:</strong> Astronomers see galaxies moving away from us, with distant galaxies moving faster, confirming that the universe is expanding. This observation was first made by Edwin Hubble in 1929.</li>
                            </ul>
                        </li>
                        <li><strong>Black Holes and Hawking Radiation</strong>
                            <ul>
                                <li>Black holes form from massive stars collapsing. They are so dense that nothing, not even light, can escape their pull. Hawking proposed that black holes emit tiny amounts of energy, known as "Hawking radiation." Over time, this radiation could cause a black hole to slowly lose mass and disappear.</li>
                                <li><strong>Example:</strong> Think of a vacuum cleaner that's so powerful it sucks up everything nearby, even light, making it invisible.</li>
                                <li><strong>Real Life:</strong> Black holes are invisible to telescopes, but scientists detect them through the effects they have on nearby stars and gas clouds. In 2019, we saw the first image of a black hole using radio telescopes.</li>
                            </ul>
                        </li>
                        <li><strong>Quantum Mechanics and Uncertainty</strong>
                            <ul>
                                <li>Quantum mechanics studies very tiny particles that behave unpredictably. The Heisenberg Uncertainty Principle says we can't know both a particle's position and speed with precision. Instead, particles exist in "probabilities," meaning we can only predict the chances of where they might be.</li>
                                <li><strong>Example:</strong> Imagine throwing a dice where you can't know both how it will roll and where it will land. All you know is the probability of each outcome.</li>
                                <li><strong>Real Life:</strong> Quantum uncertainty is the foundation of modern electronics. In microchips, electrons behave in unpredictable ways, which engineers control to create the binary code used in computing.</li>
                            </ul>
                        </li>
                        <li><strong>Why Time Goes Forward</strong>
                            <ul>
                                <li>Hawking explains that time's forward direction (the "arrow of time") is tied to entropy, which is the tendency of systems to move from order to disorder. This is why we see eggs breaking but never spontaneously reforming — disorder (broken eggs) is more likely than order (whole eggs).</li>
                                <li><strong>Example:</strong> Think of a deck of cards. If you shuffle them, they become disordered, and it's nearly impossible to return them to their original sequence.</li>
                                <li><strong>Real Life:</strong> In daily life, we see entropy when things naturally decay or age over time, like a rusting car or a melting ice cube.</li>
                            </ul>
                        </li>
                        <li><strong>The Shape of the Universe</strong>
                            <ul>
                                <li>The universe's shape is affected by the mass of objects within it. Hawking considers that space might curve like the surface of a sphere, meaning it's finite but without edges. This concept raises questions about whether the universe will keep expanding or collapse back on itself.</li>
                                <li><strong>Example:</strong> Imagine the surface of a globe — you can keep moving without ever reaching an "edge," just like a closed, curved universe.</li>
                                <li><strong>Real Life:</strong> Astronomers study cosmic light to map the universe's shape. Current evidence suggests a flat shape, meaning it's likely to expand forever.</li>
                            </ul>
                        </li>
                        <li><strong>Imaginary Time and Boundless Universe</strong>
                            <ul>
                                <li>Hawking suggests a concept called "imaginary time," where time acts like another spatial dimension. This would allow the universe to be finite yet without boundaries, like Earth's surface. In this view, the universe may not have a specific starting point, changing how we think about its beginning.</li>
                                <li><strong>Example:</strong> Picture time as another direction you can travel, similar to moving in space. Instead of having a beginning or end, time could loop or flow in multiple directions.</li>
                                <li><strong>Real Life:</strong> Imaginary time is mainly theoretical but helps physicists think about the universe's boundaries. It supports the idea that the universe could have no clear "edge" or "start," making it infinite in scope.</li>
                            </ul>
                        </li>
                        <li><strong>The Search for a Unified Theory</strong>
                            <ul>
                                <li>Hawking discusses the goal of combining relativity (the physics of large objects) and quantum mechanics (the physics of tiny particles) into a single "Theory of Everything." This theory would explain all fundamental forces and particles in the universe, but achieving it remains a major scientific challenge.</li>
                                <li><strong>Example:</strong> Like trying to find a single recipe that explains how to cook every meal, this theory would cover all phenomena in the universe.</li>
                                <li><strong>Real Life:</strong> String theory and other complex models are attempts to unify these forces, but they require testing with advanced technology not yet fully available.</li>
                            </ul>
                        </li>
                        <li><strong>The Power of Observation</strong>
                            <ul>
                                <li>In quantum mechanics, simply observing a particle changes it. This "observer effect" suggests that the act of watching influences reality. This raises questions about whether the universe exists independently of observation or if observation is part of reality itself.</li>
                                <li><strong>Example:</strong> Like a magician's trick that changes when you look closely, particles seem to behave differently under observation.</li>
                                <li><strong>Real Life:</strong> In experiments like Schrödinger's Cat thought experiment, quantum particles exist in multiple states until observed, highlighting how observation impacts results.</li>
                            </ul>
                        </li>
                        <li><strong>Are Events Predetermined?</strong>
                            <ul>
                                <li>Hawking questions if everything is pre-set or if quantum randomness introduces uncertainty. While larger objects follow predictable rules, tiny particles act randomly, suggesting that not all events may be predetermined. This opens up the possibility of free will, where not everything is fully planned out.</li>
                                <li><strong>Example:</strong> Imagine rolling a dice — the outcome isn't fixed, introducing a level of chance rather than certainty.</li>
                                <li><strong>Real Life:</strong> Deterministic systems (like planetary orbits) follow set paths, but quantum randomness affects technologies like encryption, where unpredictable patterns are necessary.</li>
                            </ul>
                        </li>
                        <li><strong>God and the Universe</strong>
                            <ul>
                                <li>While not a religious book, Hawking briefly considers whether a creator is necessary to explain the universe's origin or if scientific laws alone could account for its existence. He leaves the answer open-ended, suggesting that a complete theory might explain the universe without the need for a creator.</li>
                                <li><strong>Example:</strong> Like a clock that keeps ticking on its own once built, the universe might operate solely on its initial conditions and physical laws.</li>
                                <li><strong>Real Life:</strong> This philosophical question remains unresolved, with some scientists and philosophers proposing that understanding the universe's laws could offer answers that do not require divine intervention.</li>
                            </ul>
                        </li>
                        <li><strong>Human Curiosity and Scientific Progress</strong>
                            <ul>
                                <li>Hawking expresses hope in humanity's ability to solve the mysteries of the universe. He encourages continued exploration, believing that a unified theory could allow us to understand the cosmos fully, making it one of humanity's greatest achievements.</li>
                                <li><strong>Example:</strong> Like explorers mapping unknown lands, scientists aim to uncover every corner of the universe's structure and laws.</li>
                                <li><strong>Real Life:</strong> Scientific advances, such as the discovery of the Higgs boson and gravitational waves, reflect this ongoing quest to understand the universe on every level.</li>
                            </ul>
                        </li>
                    </ol>
                </div>
            `;
        } else {
            modalText.innerHTML = `
                <h2>${book.title}</h2>
                <p>Book details will be added soon.</p>
            `;
        }
        modal.style.display = 'block';
    });

    return bookElement;
}

function displayBooks(category = 'all', query = '') {
    bookContainer.innerHTML = '';
    books.forEach(book => {
        if ((category === 'all' || book.category === category) &&
            (book.title.toLowerCase().includes(query) || book.author.toLowerCase().includes(query))) {
            const bookElement = createBookElement(book);
            bookContainer.appendChild(bookElement);
        }
    });
}

function setListView() {
    bookContainer.classList.remove('grid-view');
    bookContainer.classList.add('list-view');
    listViewBtn.setAttribute('aria-pressed', 'true');
    gridViewBtn.setAttribute('aria-pressed', 'false');
    hamburgerListViewBtn.setAttribute('aria-pressed', 'true');
    hamburgerGridViewBtn.setAttribute('aria-pressed', 'false');
}

function setGridView() {
    bookContainer.classList.remove('list-view');
    bookContainer.classList.add('grid-view');
    gridViewBtn.setAttribute('aria-pressed', 'true');
    listViewBtn.setAttribute('aria-pressed', 'false');
    hamburgerGridViewBtn.setAttribute('aria-pressed', 'true');
    hamburgerListViewBtn.setAttribute('aria-pressed', 'false');
}

function setActiveNavLink(clickedLink) {
    navLinks.forEach(link => link.classList.remove('active'));
    hamburgerNavLinks.forEach(link => link.classList.remove('active'));
    clickedLink.classList.add('active');
}

listViewBtn.addEventListener('click', setListView);
gridViewBtn.addEventListener('click', setGridView);

navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const category = e.target.getAttribute('data-category');
        setActiveNavLink(e.target);
        displayBooks(category);
    });
});

hamburgerNavLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const category = e.target.getAttribute('data-category');
        setActiveNavLink(e.target);
        displayBooks(category);
    });
});

// Initial display
displayBooks();
setActiveNavLink(document.querySelector('nav ul li a[data-category="all"]'));
setListView();

closeButton.addEventListener('click', () => {
    modal.style.display = 'none';
});

window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});

function handleSearchInput(inputElement, clearButton) {
    inputElement.addEventListener('input', () => {
        const query = inputElement.value.toLowerCase();
        displayBooks('all', query);
        clearButton.style.display = query ? 'block' : 'none'; // Show clear button if there's input
    });

    clearButton.addEventListener('click', () => {
        inputElement.value = '';
        displayBooks('all', ''); // Clear search results
        clearButton.style.display = 'none'; // Hide clear button
        inputElement.focus(); // Focus back on the input
    });
}

handleSearchInput(headerSearchInput, headerClearSearch);
handleSearchInput(hamburgerSearchInput, hamburgerClearSearch);

menuButton.addEventListener('click', () => {
    sideMenu.classList.toggle('active');
});

document.addEventListener('click', (event) => {
    if (!sideMenu.contains(event.target) && !menuButton.contains(event.target)) {
        sideMenu.classList.remove('active');
    }
});

hamburgerListViewBtn.addEventListener('click', setListView);
hamburgerGridViewBtn.addEventListener('click', setGridView);

function smoothScrollToTop() {
    const totalScrollDistance = window.scrollY;
    const scrollStep = totalScrollDistance / 50;

    const scrollInterval = setInterval(() => {
        if (window.scrollY > 0) {
            window.scrollBy(0, -scrollStep);
        } else {
            clearInterval(scrollInterval);
        }
    }, 10);
}

window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        pinToTopButton.style.display = 'flex';
    } else {
        pinToTopButton.style.display = 'none';
    }
});

pinToTopButton.addEventListener('click', smoothScrollToTop);

document.querySelectorAll('.read-button').forEach(button => {
    button.addEventListener('click', () => {
        modal.style.display = 'block';
    });
});

// Add this after your existing modal code
document.addEventListener('DOMContentLoaded', () => {
    const modalContent = document.querySelector('.modal-content');
    
    modalContent.addEventListener('scroll', () => {
        const scrollPercentage = modalContent.scrollTop / (modalContent.scrollHeight - modalContent.clientHeight);
        modalContent.style.setProperty('--scroll-percentage', scrollPercentage);
    });
});

const detailedContent = {
    english: [
        {
            title: "Space and Time as One",
            content: "Hawking explains that space and time are woven together in a single concept called \"spacetime.\" When an object moves faster or is near something very heavy, like a planet, time moves differently — it slows down. This is why astronauts on the International Space Station, moving very fast, age just a bit slower than people on Earth.",
            example: "Imagine two twins: one stays on Earth while the other travels in a fast spaceship. When they reunite, the twin who traveled would be slightly younger due to experiencing time more slowly.",
            realLife: "GPS satellites orbiting Earth move so quickly that their clocks slow down. Engineers adjust for this so that GPS timing stays accurate for navigation."
        }
    ]
};

function toggleLanguage(isHindi) {
    const content = document.getElementById('translatable-content');
    const data = detailedContent.english;
    
    content.innerHTML = `
        <ol>
            ${data.map(section => `
                <li><strong>${section.title}</strong>
                    <ul>
                        <li>${section.content}</li>
                        <li><strong>Example:</strong> ${section.example}</li>
                        <li><strong>Real Life:</strong> ${section.realLife}</li>
                    </ul>
                </li>
            `).join('')}
        </ol>
    `;
}

