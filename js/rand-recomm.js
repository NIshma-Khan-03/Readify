
// ===== Random Book ecommender JavaScript =====

// ===== book data =====
const booksData = [
  {
    id: 1,
    title: "The Midnight Library",
    author: "Matt Haig",
    genre: "fiction",
    pages: 304,
    rating: 4.5,
    cover: "images/books/midnight-library.jpg",
    synopsis: "Between life and death there is a library, and within that library, the shelves go on forever. Every book provides a chance to try another life you could have lived."
  },
  {
    id: 2,
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    genre: "fantasy",
    pages: 310,
    rating: 4.8,
    cover: "images/books/hobbit.jpg",
    synopsis: "In a hole in the ground there lived a hobbit. Bilbo Baggins is swept into a quest to reclaim the lost Dwarf Kingdom from the fearsome dragon Smaug."
  },
  {
    id: 3,
    title: "Where the Crawdads Sing",
    author: "Delia Owens",
    genre: "mystery",
    pages: 384,
    rating: 4.6,
    cover: "images/books/crawdads.jpg",
    synopsis: "For years, rumors of the 'Marsh Girl' haunted the town. When Chase Andrews is found dead, locals suspect Kya Clark. A haunting mystery of nature and loneliness."
  },
  {
    id: 4,
    title: "The Seven Husbands of Evelyn Hugo",
    author: "Taylor Jenkins Reid",
    genre: "romance",
    pages: 389,
    rating: 4.7,
    cover: "images/books/evelyn-hugo.jpg",
    synopsis: "Hollywood icon Evelyn Hugo is finally ready to tell the truth about her glamorous and scandalous life. A story of ambition, friendship, and love."
  },
  {
    id: 5,
    title: "Project Hail Mary",
    author: "Andy Weir",
    genre: "sci-fi",
    pages: 476,
    rating: 4.8,
    cover: "images/books/hail-mary.jpg",
    synopsis: "Ryland Grace wakes up on a spaceship with no memory. He's humanity's last hope. A thrilling space adventure full of humor and heart!"
  },
  {
    id: 6,
    title: "The Silent Patient",
    author: "Alex Michaelides",
    genre: "thriller",
    pages: 336,
    rating: 4.5,
    cover: "images/books/silent-patient.jpg",
    synopsis: "Alicia shoots her husband five times and never speaks again. Psychotherapist Theo is determined to uncover her motive. A gripping psychological thriller."
  },
  {
    id: 7,
    title: "Harry Potter and the Sorcerer's Stone",
    author: "J.K. Rowling",
    genre: "fantasy",
    pages: 309,
    rating: 4.9,
    cover: "images/books/harry-potter-1.jpg",
    synopsis: "Harry Potter discovers he's a wizard on his 11th birthday. Join him at Hogwarts School of Witchcraft and Wizardry for magical adventures!"
  },
  {
    id: 8,
    title: "Educated",
    author: "Tara Westover",
    genre: "non-fiction",
    pages: 334,
    rating: 4.6,
    cover: "images/books/educated.jpg",
    synopsis: "Tara was 17 the first time she set foot in a classroom. Born to survivalists in Idaho, her journey to education is remarkable and inspiring."
  },
  {
    id: 9,
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    genre: "fiction",
    pages: 180,
    rating: 4.4,
    cover: "images/books/gatsby.jpg",
    synopsis: "A classic tale of wealth, love, and the American Dream in the Roaring Twenties. Nick Carraway becomes drawn into the world of his mysterious neighbor Jay Gatsby."
  },
  {
    id: 10,
    title: "1984",
    author: "George Orwell",
    genre: "fiction",
    pages: 328,
    rating: 4.7,
    cover: "images/books/1984.jpg",
    synopsis: "In a totalitarian future, Winston Smith struggles for freedom in a world of perpetual war, omnipresent surveillance, and public manipulation."
  },
  {
    id: 11,
    title: "The Book Thief",
    author: "Markus Zusak",
    genre: "historical",
    pages: 552,
    rating: 4.6,
    cover: "images/books/book-thief.jpg",
    synopsis: "Set during World War II in Germany, this is the story of Liesel, a foster girl living with a German family who hides a Jewish man in their basement."
  },
  {
    id: 12,
    title: "Gone Girl",
    author: "Gillian Flynn",
    genre: "thriller",
    pages: 432,
    rating: 4.5,
    cover: "images/books/gone-girl.jpg",
    synopsis: "On their fifth wedding anniversary, Amy disappears. Her husband Nick becomes the prime suspect. But is everything as it seems?"
  }
];

let currentBook = null;


// getting a random book
document.getElementById('recommend-btn').addEventListener('click', function() {
  const genre = document.getElementById('genre-select').value;
  const length = document.getElementById('length-select').value;
  
  // filtering books
  let filteredBooks = booksData;
  
  // by genre 
  if (genre !== 'all') {
    filteredBooks = filteredBooks.filter(book => book.genre === genre);
  }
  
  // by length
  if (length !== 'all') {
    filteredBooks = filteredBooks.filter(book => {
      if (length === 'short') return book.pages <= 250;
      if (length === 'medium') return book.pages > 250 && book.pages <= 400;
      if (length === 'long') return book.pages > 400;
    });
  }
  
  // checking if any books match
  if (filteredBooks.length === 0) {
    alert('No books found with those preferences. Try different options!');
    return;
  }
  
  // picking a random book
  const randomIndex = Math.floor(Math.random() * filteredBooks.length);
  currentBook = filteredBooks[randomIndex];
  

  displayBook(currentBook);
});


// displaying books
function displayBook(book) {
  document.getElementById('result-cover').src = book.cover;
  document.getElementById('result-title').textContent = book.title;
  document.getElementById('result-author').textContent = book.author;
  document.getElementById('result-genre').textContent = book.genre;
  document.getElementById('result-pages').textContent = `${book.pages} pages`;
  document.getElementById('result-rating').textContent = `⭐ ${book.rating}`;
  document.getElementById('result-synopsis').textContent = book.synopsis;
  
  // result card
  document.getElementById('result-card').style.display = 'block';
  
  // hiding success message
  document.getElementById('save-message').style.display = 'none';
  
  // scrolling to result
  document.getElementById('result-card').scrollIntoView({ behavior: 'smooth', block: 'center' });
}



// ===== pick again button =====
document.getElementById('pick-again-btn').addEventListener('click', function() {
  const btn = this;
  
  // Adding animation
  btn.classList.add('spinning');
  
  setTimeout(() => {
    btn.classList.remove('spinning');
  }, 500);
  
  // adding new recommendation
  document.getElementById('recommend-btn').click();
});


// ===== saving to reading list =====
document.getElementById('save-to-list-btn').addEventListener('click', function() {
  if (!currentBook) return;
  
  // getting existing reading list and checking the list
  let readingList = JSON.parse(localStorage.getItem('readingList')) || [];
  

  const exists = readingList.some(book => book.id === currentBook.id);
  
  if (exists) {
    alert('This book is already in your reading list!');
    return;
  }
  
  // adding book to list
  readingList.push(currentBook);
  localStorage.setItem('readingList', JSON.stringify(readingList));
  
  
  // showing the success message
  const successMsg = document.getElementById('save-message');
  successMsg.style.display = 'block';
  
  setTimeout(() => {
    successMsg.style.display = 'none';
  }, 3000);
  

  displayReadingList();
});



// ===== displaying reading list
function displayReadingList() {
  const readingList = JSON.parse(localStorage.getItem('readingList')) || [];
  const listContainer = document.getElementById('reading-list');
  const listSection = document.getElementById('reading-list-section');
  
  if (readingList.length === 0) {
    listSection.style.display = 'none';
    return;
  }
  
  listSection.style.display = 'block';
  
  listContainer.innerHTML = readingList.map((book, index) => `
    <div class="list-item">

      <div class="list-item-cover">
        <img src="${book.cover}" alt="${book.title}">
      </div>

      <div class="list-item-info">
      
        <h3>${book.title}</h3>
        <p>by ${book.author}</p>
        
        <div class="list-item-meta">
          <span><i class="fas fa-tag"></i> ${book.genre}</span>
          <span><i class="fas fa-file-alt"></i> ${book.pages} pages</span>
          <span><i class="fas fa-star"></i> ${book.rating}/5</span>
        </div>

      </div>

      <button class="remove-btn" onclick="removeFromList(${index})">
        <i class="fas fa-times"></i>
      </button>

    </div>

  `).join('');
}



// ===== removing from the reading list
function removeFromList(index) {
  if (confirm('Remove this book from your reading list?')) {
    let readingList = JSON.parse(localStorage.getItem('readingList')) || [];
    readingList.splice(index, 1);
    localStorage.setItem('readingList', JSON.stringify(readingList));
    displayReadingList();
  }
}

// ===== oading reading list on page
window.addEventListener('DOMContentLoaded', displayReadingList);