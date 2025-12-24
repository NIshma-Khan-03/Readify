

// ===== Homepage JavaScript =====

// rotating quotes
const quotes = [
  {
    text: "A reader lives a thousand lives before he dies.",
    author: "George R.R. Martin"
  },
  {
    text: "Books are a uniquely portable magic.",
    author: "Stephen King"
  },
  {
    text: "Reading is dreaming with open eyes.",
    author: "Unknown"
  },
  {
    text: "A room without books is like a body without a soul.",
    author: "Marcus Tullius Cicero"
  }
];

let currentQuote = 0;
let quoteInterval;

function showQuote(index) {
  const quoteBox = document.getElementById('quote-box');
  const quote = quotes[index];
  
  // fade out
  quoteBox.style.opacity = '0';
  
  setTimeout(() => {
    quoteBox.innerHTML = `
      <p class="quote">"${quote.text}"</p>
      <p class="author">— ${quote.author}</p>
    `;
    // fade in
    quoteBox.style.opacity = '1';
  }, 300);
  
  // Update dots
  document.querySelectorAll('.dot').forEach((dot, i) => {
    if (i === index) {
      dot.classList.add('active');
    } else {
      dot.classList.remove('active');
    }
  });
  
  currentQuote = index;
}

function nextQuote() {
  const next = (currentQuote + 1) % quotes.length;
  showQuote(next);
}

// Auto-rotate every 5 seconds
function startQuoteRotation() {
  quoteInterval = setInterval(nextQuote, 5000);
}

// Stop rotation when user clicks dots
function stopQuoteRotation() {
  clearInterval(quoteInterval);
}

// Dot click handlers
document.querySelectorAll('.dot').forEach(dot => {
  dot.addEventListener('click', () => {
    const index = parseInt(dot.getAttribute('data-index'));
    stopQuoteRotation();
    showQuote(index);
    // restarting rotation after 10 seconds
    setTimeout(startQuoteRotation, 10000);
  });
});

// smooth transitions for the quote box
document.getElementById('quote-box').style.transition = 'opacity 0.3s ease';

// starting the rotation quote when the page loads
startQuoteRotation();

// ===== Author of the day section =====
const authors = [
  {
    name: "Jane Austen",
    image: "images/authors/jane-austen.jpg",
    bio: "English novelist known for her wit, social commentary, and timeless romantic stories set in the Georgian era.",
    books: ["Pride and Prejudice", "Sense and Sensibility", "Emma"]
  },
  {
    name: "J.K. Rowling",
    image: "images/authors/jk-rowling.jpg",
    bio: "British author best known for the Harry Potter series, which became a global phenomenon and inspired millions of readers.",
    books: ["Harry Potter Series", "The Casual Vacancy", "Cormoran Strike Series"]
  },
  {
    name: "Ernest Hemingway",
    image: "images/authors/hemingway.jpg",
    bio: "American novelist and short-story writer known for his economical and understated style. Nobel Prize winner in Literature.",
    books: ["The Old Man and the Sea", "A Farewell to Arms", "For Whom the Bell Tolls"]
  },
  {
    name: "Maya Angelou",
    image: "images/authors/maya-angelou.jpg",
    bio: "American memoirist, poet, and civil rights activist. Known for her powerful autobiographical series and profound poetry.",
    books: ["I Know Why the Caged Bird Sings", "Still I Rise", "Mom & Me & Mom"]
  },
  {
    name: "Agatha Christie",
    image: "images/authors/agatha-christie.jpg",
    bio: "The best-selling novelist of all time, known for her detective novels featuring Hercule Poirot and Miss Marple.",
    books: ["Murder on the Orient Express", "And Then There Were None", "Death on the Nile"]
  },
  {
    name: "Gabriel García Márquez",
    image: "images/authors/garcia-marquez.jpg",
    bio: "Colombian novelist and Nobel Prize winner, known for popularizing magical realism in literature.",
    books: ["One Hundred Years of Solitude", "Love in the Time of Cholera", "Chronicle of a Death Foretold"]
  },
  {
    name: "Toni Morrison",
    image: "images/authors/toni-morrison.jpg",
    bio: "Holly Jackson is an English author known for her young adult mystery and thriller novels, most famously the '#1 New York Times' bestselling series A Good Girl's Guide to Murder. She began writing at a young age, and holds a master's degree in English from the University of Nottingham",
    books: ["Beloved", "Song of Solomon", "The Bluest Eye"]
  },
  {
    name: "Holly Jackson",
    image: "images/authors/holly-jackson.jpg",
    bio: "American novelist and Nobel Prize winner known for her epic themes, vivid dialogue, and richly detailed African American characters.",
    books: ["A Good Girl's guide to murder", "Five Survive", "The Reappearance of Rachel Price"]
  }
];

function getAuthorOfTheDay() {
  // using today's date to pick an author (this will change daily)
  const today = new Date();
  const dayOfYear = Math.floor((today - new Date(today.getFullYear(), 0, 0)) / 1000 / 60 / 60 / 24);
  const authorIndex = dayOfYear % authors.length;
  
  return authors[authorIndex];
}

function displayAuthor() {
  const author = getAuthorOfTheDay();
  
  document.querySelector('.author-image').src = author.image;
  document.querySelector('.author-image').alt = author.name;
  document.getElementById('author-name').textContent = author.name;
  document.getElementById('author-bio').textContent = author.bio;
  
  const booksList = document.getElementById('author-books-list');
  booksList.innerHTML = '';
  
  author.books.forEach(book => {
    const li = document.createElement('li');
    li.textContent = book;
    booksList.appendChild(li);
  });
}

// loading author when page loads
displayAuthor();