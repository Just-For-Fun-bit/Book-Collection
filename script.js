const bookContainer = document.getElementById("bookContainer");
const listViewBtn = document.getElementById("listView");
const gridViewBtn = document.getElementById("gridView");
const navLinks = document.querySelectorAll("nav ul li a");
const hamburgerNavLinks = document.querySelectorAll(".side-menu ul li a");
const modal = document.getElementById("modal");
const modalText = document.getElementById("modalText");
const closeButton = document.querySelector(".close-button");
const searchInput = document.getElementById("searchInput");
const clearSearch = document.getElementById("clearSearch");
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const menuButton = document.getElementById("menuButton");
const sideMenu = document.getElementById("sideMenu");
const headerSearchInput = document.getElementById("headerSearchInput");
const headerClearSearch = document.getElementById("headerClearSearch");
const hamburgerSearchInput = document.getElementById("hamburgerSearchInput");
const hamburgerClearSearch = document.getElementById("hamburgerClearSearch");
const hamburgerListViewBtn = document.getElementById("hamburgerListView");
const hamburgerGridViewBtn = document.getElementById("hamburgerGridView");
const pinToTopButton = document.getElementById("pinToTop");
const modalContent = document.querySelector(".modal-content");

const books = [
  {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    year: 1960,
    category: "fiction",
    image: "images/To Kill a Mockingbird.png",
  },
  {
    title: "1984",
    author: "George Orwell",
    year: 1949,
    category: "fiction",
    image: "images/1984.png",
  },
  {
    title: "Pride and Prejudice",
    author: "Jane Austen",
    year: 1813,
    category: "fiction",
    image: "images/Pride and Prejudice.png",
  },
  {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    year: 1925,
    category: "fiction",
    image: "images/The Great Gatsby.png",
  },
  {
    title: "One Hundred Years of Solitude",
    author: "Gabriel García Márquez",
    year: 1967,
    category: "fiction",
    image: "images/One Hundred Years of Solitude.png",
  },
  {
    title: "Brave New World",
    author: "Aldous Huxley",
    year: 1932,
    category: "fiction",
    image: "images/Brave New World.png",
  },
  {
    title: "A Brief History of Time",
    author: "Stephen Hawking",
    year: 1988,
    category: "non-fiction",
    image: "images/A Brief History of Time.png",
    downloadLink: "https://www.mediafire.com/file/2fdm1ljud0wnmly/A_Brief_History_of_Time_%2528_PDFDrive_%2529.pdf/file", // Add your URL here
    summary:
      "A landmark volume in science writing by one of the great minds of our time, Stephen Hawking's book explores such profound questions as: How did the universe begin—and what made its start possible?",
    keyThemes: [
      {
        title: "Our Picture of the Universe",
        description:
          "Humanity’s understanding of the universe has evolved from ancient myths to modern science. Each discovery reshapes our perception of reality.",
      },
      {
        title: "Space and Time",
        description:
          "Space and time are interconnected, forming “spacetime.” Einstein’s relativity shows time slows near heavy objects or at high speeds.",
      },
      {
        title: "The Expanding Universe",
        description:
          "The universe is expanding, indicating it started with the Big Bang. Galaxies move apart, suggesting an ongoing cosmic growth.",
      },
      {
        title: "The Uncertainty Principle",
        description:
          "Quantum mechanics reveals that particles behave unpredictably. We can't know both their position and speed with absolute certainty.",
      },
      {
        title: "Elementary Particles and the Forces of Nature",
        description:
          "Matter is made of fundamental particles governed by four main forces. These forces shape the universe at every level.",
      },
      {
        title: "Black Holes",
        description:
          "Black holes are intense gravitational regions formed from collapsing stars. They trap everything, even light, creating 'no return' zones.",
      },
      {
        title: "Black Holes Ain’t So Black",
        description:
          "Hawking radiation suggests black holes emit energy and may eventually evaporate. They aren't entirely 'black' and may fade over time.",
      },
      {
        title: "The Origin and Fate of the Universe",
        description:
          "The universe’s beginning and end remain mysteries. Possible outcomes include endless expansion or a future collapse.",
      },
      {
        title: "The Arrow of Time",
        description:
          "Time flows forward due to increasing entropy, or disorder. This direction of time aligns with our experience of the universe.",
      },
      {
        title: "Wormholes and Time Travel",
        description:
          "Wormholes might allow shortcuts through spacetime. Theoretical time travel is explored but faces significant scientific challenges.",
      },
      {
        title: "The Unification of Physics",
        description:
          "A unified theory could link relativity and quantum mechanics. Achieving it would provide a complete framework of physical laws.",
      },
      {
        title: "Conclusion",
        description:
          "Hawking reflects on humanity’s quest to understand the universe. A 'Theory of Everything' could be our ultimate scientific achievement.",
      },
    ],
  },
  {
    title: "The Immortal Life of Henrietta Lacks",
    author: "Rebecca Skloot",
    year: 2010,
    category: "non-fiction",
    image: "images/The Immortal Life of Henrietta Lacks.png",
  },
  {
    title: "Sapiens: A Brief History of Humankind",
    author: "Yuval Noah Harari",
    year: 2014,
    category: "non-fiction",
    image: "images/Sapiens - A Brief History of Humankind.png",
  },
];

function createBookElement(book) {
  const bookElement = document.createElement("div");
  bookElement.classList.add("book");
  bookElement.innerHTML = `
        <img src="${book.image}" alt="${book.title} cover" class="book-cover">
        <h2>${book.title}</h2>
        <p data-label="Author">${book.author}</p>
        <p data-label="Year">${book.year}</p>
        <p data-label="Genre">${
          book.category.charAt(0).toUpperCase() + book.category.slice(1)
        }</p>
        <button class="read-button">Read Summary</button>
        <button class="download-button">Download Book</button>
    `;

  const readButton = bookElement.querySelector(".read-button");

  readButton.addEventListener("click", () => {
    if (book.title === "A Brief History of Time") {
      modalText.innerHTML = `
                <button id="backButton" class="back-button">Back to Main Page</button> <!-- Back button at the top -->
                <div class="modal-section">
                    <strong class="section-title">Key Themes:</strong>
                    <ul class="key-themes-list">
                        ${book.keyThemes
                          .map(
                            (theme) =>
                              `<li class="key-theme-item"><strong>${theme.title}</strong>: ${theme.description}</li>`
                          )
                          .join("")}
                    </ul>
                </div>
                <hr class="section-divider">
                <div class="summary-section">
                    <strong class="section-title">Summary:</strong>
                    <p>${book.summary}</p>
                    <p>Here's a more detailed summary of <em>A Brief History of Time</em>, with examples and real-life connections for each section:</p>
                    <ol>
                        <li><strong>Our Picture of the Universe</strong>
                            <ul>
                                <li>Humanity’s view of the universe has changed dramatically. Ancient cultures believed in an Earth-centered universe, where everything revolved around us. This idea was replaced by the sun-centered model, thanks to astronomers like Copernicus and Galileo.</li>
                                <li><strong>Example:</strong> Imagine believing the Earth is flat and surrounded by water. Over time, evidence shows Earth is round, and there’s a vast universe beyond it.</li>
                                <li><strong>Real Life:</strong> Today, telescopes let us see galaxies millions of light-years away. We now know Earth is just a tiny part of an enormous, expanding universe.</li>
                            </ul>
                        </li>
                        <li><strong>Space and Time</strong>
                            <ul>
                                <li>Space and time are connected in something called "spacetime." Einstein’s theory of relativity shows that time moves slower near heavy objects (like planets) or for things moving very fast. This phenomenon is known as time dilation.</li>
                                <li><strong>Example:</strong> Imagine a twin traveling in a fast spaceship while the other twin stays on Earth. When they reunite, the traveling twin would be slightly younger because they experienced time more slowly.</li>
                                <li><strong>Real Life:</strong> GPS satellites orbiting Earth move so quickly that their clocks slow down. Engineers adjust for this effect to keep navigation accurate.</li>
                            </ul>
                        </li>
                        <li><strong>The Expanding Universe</strong>
                            <ul>
                                <li>The universe is constantly expanding, which suggests it began from a small, dense point — the Big Bang. We can see evidence of this expansion in the way galaxies move apart.</li>
                                <li><strong>Example:</strong> Picture a balloon with dots on it. As you blow it up, the dots move further apart, just like galaxies do as the universe expands.</li>
                                <li><strong>Real Life:</strong> Edwin Hubble discovered that distant galaxies are moving away from us, providing early evidence of an expanding universe. We also see leftover heat from the Big Bang, called cosmic microwave background radiation.</li>
                            </ul>
                        </li>
                        <li><strong>The Uncertainty Principle</strong>
                            <ul>
                                <li>In quantum mechanics, the Uncertainty Principle shows that tiny particles like electrons don’t have exact positions and speeds. Instead, they exist as probabilities, meaning we can only predict their behavior within a range.</li>
                                <li><strong>Example:</strong> Imagine rolling a dice where you can’t know exactly where it will land and what number will show. You can only predict the likelihood of each result.</li>
                                <li><strong>Real Life:</strong> This uncertainty is crucial for technologies like microchips, where engineers use quantum properties to create complex circuits in modern electronics.</li>
                            </ul>
                        </li>
                        <li><strong>Elementary Particles and the Forces of Nature</strong>
                            <ul>
                                <li>Everything in the universe is made up of fundamental particles. These particles interact through four main forces: gravity, electromagnetism, the strong nuclear force, and the weak nuclear force.</li>
                                <li><strong>Example:</strong> Think of the universe as a Lego set, where atoms are the blocks and the forces are the connections holding them together.</li>
                                <li><strong>Real Life:</strong> In particle accelerators, scientists observe particles interacting at extremely high speeds, helping us understand how matter is built and held together.</li>
                            </ul>
                        </li>
                        <li><strong>Black Holes</strong>
                            <ul>
                                <li>Black holes form when massive stars collapse, creating regions with gravity so strong that nothing can escape, not even light. This is why they appear "black" in space.</li>
                                <li><strong>Example:</strong> Imagine a vacuum cleaner so powerful that once something gets close, it can’t escape. Black holes are like this but much stronger.</li>
                                <li><strong>Real Life:</strong> In 2019, scientists captured the first-ever image of a black hole using a network of telescopes around the world. This confirmed many theories about black holes' existence and appearance.</li>
                            </ul>
                        </li>
                        <li><strong>Black Holes Ain’t So Black</strong>
                            <ul>
                                <li>Hawking proposed that black holes emit radiation (Hawking radiation) and can lose mass over time, meaning they could eventually "evaporate." This challenges the idea that black holes are completely dark and unchanging.</li>
                                <li><strong>Example:</strong> Think of a slow-burning fire. Even though it’s contained, it still releases heat and light, eventually fading away. Similarly, black holes emit energy and may disappear over time.</li>
                                <li><strong>Real Life:</strong> Hawking’s theory is significant because it combines ideas from quantum mechanics and relativity, helping scientists understand the boundaries of physics.</li>
                            </ul>
                        </li>
                        <li><strong>The Origin and Fate of the Universe</strong>
                            <ul>
                                <li>This chapter explores theories about how the universe began and how it might end. If it continues expanding forever, it may get colder and more spread out. Alternatively, it could eventually collapse back in a "Big Crunch."</li>
                                <li><strong>Example:</strong> Imagine throwing a ball in the air. It either keeps rising, falls back down, or hovers somewhere in between. The universe could do something similar.</li>
                                <li><strong>Real Life:</strong> Scientists study distant galaxies to measure the rate of expansion and predict whether the universe will keep expanding or collapse. Current data suggests it’s likely to keep expanding.</li>
                            </ul>
                        </li>
                        <li><strong>The Arrow of Time</strong>
                            <ul>
                                <li>Time moves in one direction, which we experience as past, present, and future. This “arrow of time” is linked to entropy, where things tend to move from order to disorder (like ice melting or eggs breaking).</li>
                                <li><strong>Example:</strong> Imagine shuffling a deck of cards. It’s easy to create disorder, but very hard to return them to their original order.</li>
                                <li><strong>Real Life:</strong> Entropy affects our daily lives, as we see objects age, decay, and wear down over time, like a car rusting or milk spoiling.</li>
                            </ul>
                        </li>
                        <li><strong>Wormholes and Time Travel</strong>
                            <ul>
                                <li>Hawking explores the idea of wormholes, or shortcuts in spacetime that could potentially allow time travel. However, it’s highly theoretical and comes with many scientific challenges.</li>
                                <li><strong>Example:</strong> Imagine folding a paper and punching a hole through it to connect two distant points. Wormholes could work like this, creating shortcuts in space.</li>
                                <li><strong>Real Life:</strong> While we haven't found wormholes, the concept is explored in science fiction, like in *Interstellar*, which portrays traveling through space and time using such shortcuts.</li>
                            </ul>
                        </li>
                        <li><strong>The Unification of Physics</strong>
                            <ul>
                                <li>Scientists seek a single theory that unites general relativity (large objects) and quantum mechanics (tiny particles). A unified theory would explain all the forces and particles in the universe.</li>
                                <li><strong>Example:</strong> Like finding a recipe that explains how to make every dish, a unified theory would cover all known phenomena.</li>
                                <li><strong>Real Life:</strong> String theory is one attempt to unify physics, but it’s incredibly complex and hasn’t been proven. Advances in this field could revolutionize our understanding of the universe.</li>
                            </ul>
                        </li>
                        <li><strong>Conclusion</strong>
                            <ul>
                                <li>Hawking reflects on humanity's desire to understand the universe fully. He believes that a "Theory of Everything" would mark a significant achievement, bringing us closer to knowing our place in the cosmos.</li>
                                <li><strong>Example:</strong> Imagine solving a puzzle that reveals the entire picture of the universe. This would be a complete understanding of all physical laws and mysteries.</li>
                                <li><strong>Real Life:</strong> Modern physics continues this quest, with scientists working toward a comprehensive theory to answer fundamental questions about existence and the universe’s structure.</li>
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
    modal.classList.add("show"); // Add class to trigger the new styles

    // Add event listener for the back button
    const backButton = document.getElementById("backButton");
    if (backButton) {
      backButton.addEventListener("click", () => {
        modal.classList.remove("show"); // Close the modal
        window.location.href = "index.html"; // Navigate back to the main page
      });
    }
  });

  const downloadButton = bookElement.querySelector(".download-button");
  downloadButton.addEventListener("click", (e) => {
    e.preventDefault();
    if (book.title === "A Brief History of Time") {
        window.location.href = book.downloadLink; // Redirect to the download link
    } else {
        alert(book.title + " will be available for download soon.");
    }
  });

  return bookElement;
}

function displayBooks(category = "all", query = "") {
  bookContainer.innerHTML = "";
  books.forEach((book) => {
    if (
      (category === "all" || book.category === category) &&
      (book.title.toLowerCase().includes(query) ||
        book.author.toLowerCase().includes(query))
    ) {
      const bookElement = createBookElement(book);
      bookContainer.appendChild(bookElement);
    }
  });
}

function setListView() {
  bookContainer.classList.remove("grid-view");
  bookContainer.classList.add("list-view");
  listViewBtn.setAttribute("aria-pressed", "true");
  gridViewBtn.setAttribute("aria-pressed", "false");
  hamburgerListViewBtn.setAttribute("aria-pressed", "true");
  hamburgerGridViewBtn.setAttribute("aria-pressed", "false");
}

function setGridView() {
  bookContainer.classList.remove("list-view");
  bookContainer.classList.add("grid-view");
  gridViewBtn.setAttribute("aria-pressed", "true");
  listViewBtn.setAttribute("aria-pressed", "false");
  hamburgerGridViewBtn.setAttribute("aria-pressed", "true");
  hamburgerListViewBtn.setAttribute("aria-pressed", "false");
}

function setActiveNavLink(clickedLink) {
  navLinks.forEach((link) => link.classList.remove("active"));
  hamburgerNavLinks.forEach((link) => link.classList.remove("active"));
  clickedLink.classList.add("active");
}

listViewBtn.addEventListener("click", setListView);
gridViewBtn.addEventListener("click", setGridView);

navLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const category = e.target.getAttribute("data-category");
    setActiveNavLink(e.target);
    displayBooks(category);
  });
});

hamburgerNavLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const category = e.target.getAttribute("data-category");
    setActiveNavLink(e.target);
    displayBooks(category);
  });
});

// Initial display
displayBooks();
setActiveNavLink(document.querySelector('nav ul li a[data-category="all"]'));
setListView();

closeButton.addEventListener("click", () => {
  modal.style.display = "none";
});

window.addEventListener("click", (event) => {
  if (event.target === modal) {
    modal.style.display = "none";
  }
});

function handleSearchInput(inputElement, clearButton) {
  inputElement.addEventListener("input", () => {
    const query = inputElement.value.toLowerCase();
    displayBooks("all", query);
    clearButton.style.display = query ? "block" : "none"; // Show clear button if there's input
  });

  clearButton.addEventListener("click", () => {
    inputElement.value = "";
    displayBooks("all", ""); // Clear search results
    clearButton.style.display = "none"; // Hide clear button
    inputElement.focus(); // Focus back on the input
  });
}

handleSearchInput(headerSearchInput, headerClearSearch);
handleSearchInput(hamburgerSearchInput, hamburgerClearSearch);

menuButton.addEventListener("click", () => {
  sideMenu.classList.toggle("active");
});

document.addEventListener("click", (event) => {
  if (!sideMenu.contains(event.target) && !menuButton.contains(event.target)) {
    sideMenu.classList.remove("active");
  }
});

hamburgerListViewBtn.addEventListener("click", setListView);
hamburgerGridViewBtn.addEventListener("click", setGridView);

// Function to smoothly scroll to the top
function smoothScrollToTop(event) {
  // Prevent the initial click from triggering the stop
  event.stopPropagation();

  const scrollDuration = 1000;
  const startPosition = window.scrollY;
  const startTime = performance.now();
  let isScrolling = true; // Flag to track if scrolling is active
  let animationFrame;

  function scroll() {
    if (!isScrolling) {
      cancelAnimationFrame(animationFrame);
      return;
    }

    const currentTime = performance.now();
    const timeElapsed = currentTime - startTime;
    const scrollProgress = Math.min(timeElapsed / scrollDuration, 1);

    const scrollAmount = startPosition * (1 - scrollProgress);
    window.scrollTo(0, scrollAmount);

    if (scrollProgress < 1) {
      animationFrame = requestAnimationFrame(scroll);
    }
  }

  // Function to stop scrolling
  function stopScrolling(e) {
    // Prevent stopping on the initial button click
    if (e.target !== pinToTopButton) {
      isScrolling = false;
      cancelAnimationFrame(animationFrame);
      document.removeEventListener("click", stopScrolling);
    }
  }

  // Add click listener to stop scrolling
  document.addEventListener("click", stopScrolling);

  // Start scrolling
  animationFrame = requestAnimationFrame(scroll);
}

// Add event listener to the "Pin to Top" button
if (pinToTopButton) {
  pinToTopButton.addEventListener("click", smoothScrollToTop);
}

// Show or hide the "Pin to Top" button based on scroll position
window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    pinToTopButton.style.display = "flex";
  } else {
    pinToTopButton.style.display = "none";
  }
});

document.querySelectorAll(".read-button").forEach((button) => {
  button.addEventListener("click", () => {
    modal.style.display = "block";
  });
});

// Add this after your existing modal code
document.addEventListener("DOMContentLoaded", () => {
  const modalContent = document.querySelector(".modal-content");

  modalContent.addEventListener("scroll", () => {
    const scrollPercentage =
      modalContent.scrollTop /
      (modalContent.scrollHeight - modalContent.clientHeight);
    modalContent.style.setProperty("--scroll-percentage", scrollPercentage);
  });
});

const detailedContent = {
  english: [
    {
      title: "Space and Time as One",
      content:
        'Hawking explains that space and time are woven together in a single concept called "spacetime." When an object moves faster or is near something very heavy, like a planet, time moves differently — it slows down. This is why astronauts on the International Space Station, moving very fast, age just a bit slower than people on Earth.',
      example:
        "Imagine two twins: one stays on Earth while the other travels in a fast spaceship. When they reunite, the twin who traveled would be slightly younger due to experiencing time more slowly.",
      realLife:
        "GPS satellites orbiting Earth move so quickly that their clocks slow down. Engineers adjust for this so that GPS timing stays accurate for navigation.",
    },
  ],
};

function toggleLanguage(isHindi) {
  const content = document.getElementById("translatable-content");
  const data = detailedContent.english;

  content.innerHTML = `
        <ol>
            ${data
              .map(
                (section) => `
                <li><strong>${section.title}</strong>
                    <ul>
                        <li>${section.content}</li>
                        <li><strong>Example:</strong> ${section.example}</li>
                        <li><strong>Real Life:</strong> ${section.realLife}</li>
                    </ul>
                </li>
            `
              )
              .join("")}
        </ol>
    `;
}

// Function to create the modal content with back button
function createModalContent(book) {
  const scrollPosition = window.scrollY;

  const modalContent = `

        <!-- Key Themes Section -->
        <div class="modal-section">
            <strong class="section-title">Key Themes:</strong>
            <ul class="key-themes-list">
                ${book.keyThemes
                    .map(
                        (theme) => `
                        <li class="key-theme-item">
                            <strong>${theme.title}</strong>: ${theme.description}
                        </li>
                    `
                    )
                    .join("")}
            </ul>
        </div>
    `;

  modalText.innerHTML = modalContent;
  document.body.classList.add("modal-open");

  const modalBackButton = document.getElementById("modalBackButton");
  if (modalBackButton) {
    modalBackButton.addEventListener("click", (e) => {
      e.preventDefault();
      modal.style.display = "none";
      document.body.classList.remove("modal-open");
      window.scrollTo(0, scrollPosition);
    });
  }
}

// Update your existing read button click handler
document.querySelectorAll(".read-button").forEach((button) => {
  button.addEventListener("click", (e) => {
    e.preventDefault(); // Prevent default button behavior
    const scrollPosition = window.scrollY; // Store scroll position
    modal.style.display = "block";
    document.body.classList.add("modal-open");
    const book = getBookData(button);
    createModalContent(book);
  });
});

// Update modal close handlers
document.querySelector(".close-button").addEventListener("click", (e) => {
  e.preventDefault();
  modal.style.display = "none";
  document.body.classList.remove("modal-open");
});

window.addEventListener("click", (event) => {
  if (event.target === modal) {
    event.preventDefault();
    modal.style.display = "none";
    document.body.classList.remove("modal-open");
  }
});

