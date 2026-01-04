
// ===== Book Explorer JavaScript =====

// books data
const booksData = [
  {
    id: 1,
    title: "The Midnight Library",
    author: "Matt Haig",
    genre: "fiction",
    rating: 4.5,
    cover: "images/books/midnight-library.jpg",
    synopsis: "Between life and death there is a library, and within that library, the shelves go on forever. Every book provides a chance to try another life you could have lived. To see how things would be if you had made other choices. Would you have done anything different, if you had the chance to undo your regrets?",
    series: null,
    reviews: [
      { reviewer: "Sarah M.", rating: 5, review: "Beautiful and thought-provoking!" },
      { reviewer: "John D.", rating: 4, review: "A unique take on life and choices" },
      { reviewer: "Emma L.", rating: 5, review: "Could not put it down!" }
    ]
  },
  {
    id: 2,
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    genres: "fantasy",
    rating: 4.8,
    cover: "images/books/hobbit.jpg",
    synopsis: "In a hole in the ground there lived a hobbit. Not a nasty, dirty, wet hole, filled with the ends of worms and an oozy smell, nor yet a dry, bare, sandy hole with nothing in it to sit down on or to eat: it was a hobbit-hole, and that meant comfort. Bilbo Baggins is swept into a quest to reclaim the lost Dwarf Kingdom of Erebor from the fearsome dragon Smaug.",
    series: {
      prequels: [],
      sequels: ["The Fellowship of the Ring", "The Two Towers", "The Return of the King"]
    },
    reviews: [
      { reviewer: "Tom H.", rating: 5, review: "A timeless classic!" },
      { reviewer: "Lisa K.", rating: 5, review: "Perfect introduction to Middle-earth" },
      { reviewer: "Mike R.", rating: 4, review: "Great adventure story for all ages" }
    ]
  },
  {
    id: 3,
    title: "Where the Crawdads Sing",
    author: "Delia Owens",
    genre: "mystery",
    rating: 4.6,
    cover: "images/books/crawdads.jpg",
    synopsis: "For years, rumors of the 'Marsh Girl' have haunted Barkley Cove, a quiet town on the North Carolina coast. So in late 1969, when handsome Chase Andrews is found dead, the locals immediately suspect Kya Clark, the so-called Marsh Girl. But Kya is not what they say. Sensitive and intelligent, she has survived for years alone in the marsh that she calls home.",
    series: null,
    reviews: [
      { reviewer: "Rachel P.", rating: 5, review: "Beautifully written mystery with stunning prose" },
      { reviewer: "David S.", rating: 4, review: "Captivating from start to finish" },
      { reviewer: "Amy T.", rating: 5, review: "One of my all-time favorites!" }
    ]
  },
  {
    id: 4,
    title: "The Seven Husbands of Evelyn Hugo",
    author: "Taylor Jenkins Reid",
    genre: "romance",
    rating: 4.7,
    cover: "images/books/evelyn-hugo.jpg",
    synopsis: "Aging and reclusive Hollywood movie icon Evelyn Hugo is finally ready to tell the truth about her glamorous and scandalous life. But when she chooses unknown magazine reporter Monique Grant for the job, no one is more astounded than Monique herself. Why her? Why now? Monique is not exactly on top of the world.",
    series: null,
    reviews: [
      { reviewer: "Jennifer B.", rating: 5, review: "Absolutely stunning story!" },
      { reviewer: "Mark W.", rating: 5, review: "Couldn't stop reading this masterpiece" },
      { reviewer: "Susan L.", rating: 4, review: "Emotional and gripping throughout" }
    ]
  },
  {
    id: 5,
    title: "Project Hail Mary",
    author: "Andy Weir",
    genre: "sci-fi",
    rating: 4.8,
    cover: "images/books/hail-mary.jpg",
    synopsis: "Ryland Grace is the sole survivor on a desperate, last-chance mission—and if he fails, humanity and the earth itself will perish. Except that right now, he doesn't know that. He can't even remember his own name, let alone the nature of his assignment or how to complete it. All he knows is that he's been asleep for a very, very long time.",
    series: null,
    reviews: [
      { reviewer: "Chris N.", rating: 5, review: "Best sci-fi I've read in years!" },
      { reviewer: "Laura H.", rating: 5, review: "Funny, thrilling, and incredibly smart" },
      { reviewer: "Kevin M.", rating: 4, review: "Another masterpiece from Andy Weir" }
    ]
  },
  {
    id: 6,
    title: "The Silent Patient",
    author: "Alex Michaelides",
    genre: "thriller",
    rating: 4.5,
    cover: "images/books/silent-patient.jpg",
    synopsis: "Alicia Berenson's life is seemingly perfect. A famous painter married to an in-demand fashion photographer, she lives in a grand house with big windows overlooking a park in one of London's most desirable areas. One evening her husband Gabriel returns home late from a fashion shoot, and Alicia shoots him five times in the face, and then never speaks another word.",
    series: null,
    reviews: [
      { reviewer: "Patricia G.", rating: 5, review: "Mind-blowing twist at the end!" },
      { reviewer: "Robert F.", rating: 4, review: "Kept me guessing until the very end" },
      { reviewer: "Nicole J.", rating: 5, review: "Brilliant psychological thriller" }
    ]
  },
  {
    id: 7,
    title: "Harry Potter and the Sorcerer's Stone",
    author: "J.K. Rowling",
    genre: "fantasy",
    rating: 4.9,
    cover: "images/books/harry-potter-1.jpg",
    synopsis: "Harry Potter has never even heard of Hogwarts when the letters start dropping on the doormat at number four, Privet Drive. Addressed in green ink on yellowish parchment with a purple seal, they are swiftly confiscated by his grisly aunt and uncle. Then, on Harry's eleventh birthday, a great beetle-eyed giant of a man called Rubeus Hagrid bursts in with some astonishing news: Harry Potter is a wizard.",
    series: {
      prequels: [],
      sequels: [
        "Harry Potter and the Chamber of Secrets",
        "Harry Potter and the Prisoner of Azkaban",
        "Harry Potter and the Goblet of Fire",
        "Harry Potter and the Order of the Phoenix",
        "Harry Potter and the Half-Blood Prince",
        "Harry Potter and the Deathly Hallows"
      ]
    },
    reviews: [
      { reviewer: "Emily R.", rating: 5, review: "Magical in every way possible!" },
      { reviewer: "James C.", rating: 5, review: "A timeless classic for all ages" },
      { reviewer: "Sophie W.", rating: 5, review: "This book started my love for reading" }
    ]
  },
  {
    id: 8,
    title: "Educated",
    author: "Tara Westover",
    genre: "non-fiction",
    rating: 4.6,
    cover: "images/books/educated.jpg",
    synopsis: "Tara Westover was seventeen the first time she set foot in a classroom. Born to survivalists in the mountains of Idaho, she prepared for the end of the world by stockpiling home-canned peaches and sleeping with her 'head-for-the-hills bag'. In the summer she stewed herbs for her mother, a midwife and healer, and in the winter she salvaged in her father's junkyard.",
    series: null,
    reviews: [
      { reviewer: "Michelle A.", rating: 5, review: "Inspiring and powerful memoir" },
      { reviewer: "Daniel K.", rating: 5, review: "Couldn't believe this was a true story" },
      { reviewer: "Olivia M.", rating: 4, review: "Remarkable journey of self-discovery" }
    ]
  },
  {
    id: 9,
    title: "The Good Daughters: A Novel",
    author: "Brigitte Dale",
    genre: "historical",
    rating: 4.2,
    cover: "images/books/the-good-daughters.jpg",
    synopsis: "A vivid historical novel set in 1912 London, The Good Daughters follows three young women from vastly different backgrounds who are drawn together by the suffrage movement and a shared desire to control their own futures. As Charlotte, Beatrice, and Emily confront restrictive laws, forbidden love, and brutal resistance—including imprisonment and hunger strikes—their courage and friendship are pushed to the breaking point. The novel powerfully explores how far women are willing to go to claim freedom, dignity, and one another.",
    series: null,
    reviews: [
      { reviewer: "Kayle R.", rating: 4, review: "love a story about women who fought for the right to vote!" },
      { reviewer: "Cindy M.", rating: 5, review: "Loved it from beginning to end." },
      { reviewer: "Nico D.", rating: 5, review: "This is beautifully written!!" }
    ]
  },
  {
    id: 10,
    title: "Powerless",
    author: "Lauren Roberts",
    genre: "fantasy",
    rating: 4.1,
    cover: "images/books/powerless.jpg",
    synopsis: "Powerless is a high-stakes fantasy set in a kingdom where only the gifted are allowed to exist, and being Ordinary is a crime. Paedyn Gray survives by pretending to be a Psychic—until saving a prince thrusts her into deadly trials designed to celebrate powers she doesn’t have. As danger, deception, and forbidden attraction collide, Paedyn must fight to stay alive while hiding the truth that could get her killed.",
    series: {
      prequels: [],
      sequels: [
        "Reckless",
        "Fearless"
      ]
    },
    reviews: [
      { reviewer: "Brooke B.", rating: 3.5, review: "A tense, fast-paced fantasy where survival depends on deception, Powerless delivers deadly trials, forbidden romance, and a sharp divide between power and privilege."},
      { reviewer: "Maya A.", rating: 5, review: "A tense, fast-paced fantasy where survival depends on deception, Powerless delivers deadly trials, forbidden romance, and a sharp divide between power and privilege" },
      { reviewer: "Nico D.", rating: 4, review: "Dark, dramatic, and emotionally charged, Powerless explores what it means to be strong in a world that only values power." }
    ]
  },
  {
    id: 11,
    title: "The Maid",
    author: "Nita Prose",
    genre: "mystery",
    rating: 3.7,
    cover: "images/books/the-maid.jpg",
    synopsis: "The Maid follows Molly Gray, a socially awkward but meticulous hotel maid whose orderly world collapses when she discovers a wealthy guest dead in his room and becomes the prime suspect. As she navigates a confusing investigation, unexpected friendships help her uncover the truth. The novel blends a cozy, locked-room mystery with a touching story about difference, kindness, and belonging.",
    series: {
      prequels: [],
      sequels: [
        "The Mystery Guest: A Maid Novel",
        "The Maid's Secret: A Maid Novel"
      ]
    },
    reviews: [
      { reviewer: "Bobby S.", rating: 5, review: "A cozy mystery with a kind, unforgettable main character."},
      { reviewer: "Maya A.", rating: 4, review: "Charming, emotional, and easy to read, with a clever twist." },
      { reviewer: "Nico D.", rating: 3, review: "A warm-hearted mystery about being different and finding friends." }
    ]
  },
  {
    id: 12,
    title: "The Love Hypothesis",
    author: "Ali Hazelwood",
    genre: "romance",
    rating: 4.1,
    cover: "images/books/love-hypothesis.jpg",
    synopsis: "When a fake relationship between scientists meets the irresistible force of attraction, it throws one woman's carefully calculated theories on love into chaos.",
    series: null,
    reviews: [
      { reviewer: "Hana J.", rating: 5, review: "A fun, lighthearted romance with fake dating, slow burn, and lots of charm."},
      { reviewer: "William A.", rating: 5, review: "Smart, sweet, and humorous, with great chemistry between the leads." },
      { reviewer: "Millie B.", rating: 4.5, review: "A cozy rom-com that blends academia, romance, and emotional growth." }
    ]
  },
  {
    id: 13,
    title: "The Hunger Games",
    author: "Suzanne Collins",
    genre: "sci-fi",
    rating: 4.3,
    cover: "images/books/hunger-games.jpg",
    synopsis: "The Hunger Games is a dystopian novel set in Panem, where the Capitol forces children from twelve districts to fight to the death for entertainment and control. When Katniss Everdeen volunteers to save her sister, she must rely on survival skills and moral strength to endure the Games. As she fights to stay alive, she is forced to choose between survival, compassion, and love.",
    series: {
      prequels: [],
      sequels: [
        "Catching Fire",
        "Mockingjay",
        "The Ballad of Songbirds and Snakes",
        "Sunrise on Reaping"
      ]
    },
    reviews: [
      { reviewer: "Emma S.", rating: 5, review: "A gripping dystopian story with high stakes and a strong heroine."},
      { reviewer: "Bucky B.", rating: 4, review: "Dark, emotional, and impossible to put down." },
      { reviewer: "Peter J.", rating: 3, review: "A powerful blend of action, sacrifice, and rebellion." }
    ]
  },
  {
    id: 14,
    title: "Rich Dad, Poor Dad",
    author: "Robert T.Kiyosaki",
    genre: "non-fiction",
    rating: 4.0,
    cover: "images/books/richdad-poordad.jpg",
    synopsis: "Rich Dad Poor Dad contrasts the financial mindsets of two father figures who shape Robert Kiyosaki’s understanding of money. Through their opposing lessons, the book challenges traditional beliefs about wealth and emphasizes financial education, assets, and making money work for you rather than working for money.",
    series: null,
    reviews: [
      { reviewer: "Scarlette J.", rating: 5, review: "A personal finance book that compares two mindsets to explain how wealth is built."},
      { reviewer: "Robert S.", rating: 4, review: "Shows the difference between working for money and making money work for you." },
      { reviewer: "Percy J.", rating: 5, review: "Focuses on financial education, assets, and changing how you think about money." }
    ]
  },
  {
    id: 15,
    title: "The Burning Library",
    author: "Gilly Macmillan",
    genre: "fiction",
    rating: 3.4,
    cover: "images/books/the-burning-library.jpg",
    synopsis: "A thrilling dark-academia tale of murder, obsession and ruthless ambition set in remote St Andrews, Scotland.",
    series: null,
    reviews: [
      { reviewer: "Annabeth C.", rating: 4, review: "A clever dark‑academia mystery where ancient manuscripts and secret societies collide."},
      { reviewer: "Anya F.", rating: 4, review: "Atmospheric, twisty, and intellectual—with historical conspiracies wrapped around danger." },
      { reviewer: "Ayayse F.", rating: 5, review: "A slow‑burn thriller that rewards curious readers with a complex puzzle and layered intrigue." }
    ]
  },
  {
    id: 16,
    title: "A Good Girl's Guide to Murder",
    author: "Holly Jackson",
    genre: "thriller",
    rating: 3.4,
    cover: "images/books/ggg-to-murder.jpg",
    synopsis: "Pip investigates a closed murder case for school, uncovering secrets that challenge the town’s story and put her in danger as she searches for the real killer.",
    series: {
      prequels: [],
      sequels: [
        "Good Girl, Bad Blood",
        "As Good As Dead",
        "Kill Joy",
        "Five Survive",
        "The Reappearance of Rachel Price",
        "Not Quite Dead Yet"
      ]
    },
    reviews: [
      { reviewer: "Babara J.", rating: 5, review: "A gripping YA mystery that keeps you guessing right to the end."},
      { reviewer: "Yuri B.", rating: 4, review: "Fresh, clever investigative storytelling with a fierce teen sleuth at the cente." },
      { reviewer: "Will S.", rating: 5, review: "Twisty, addictive, and perfect for fans of crime puzzles and small‑town secrets" }
    ]
  },
  {
    id: 17,
    title: "The Historical Years: holocaust 1933-1945",
    author: "Frank McDonough",
    genre: "historical",
    rating: 4.6,
    cover: "images/books/hitler-years.jpg",
    synopsis: "A detailed history of Nazi Germany showing how Hitler’s policies led to the Holocaust, with eyewitness accounts and year-by-year events.",
    series: null,
    reviews: [
      { reviewer: "Loid F.", rating: 5, review: "A vivid, meticulous history that brings the horrors of the Holocaust into sharp focus."},
      { reviewer: "Nanami K.", rating: 4, review: "Essential reading for understanding how Nazi policies became genocide."},
      { reviewer: "Zack M.", rating: 5, review: "Scholarly, powerful, and deeply human in its testimony and analysis." }
    ]
  }
];

let filteredBooks = [...booksData];


// displaying books
function displayBooks(books) {
  const grid = document.getElementById('books-grid');
  const noResults = document.getElementById('no-results');
  const resultsCount = document.getElementById('results-count');
  
  if (books.length === 0) {
    grid.innerHTML = '';
    noResults.style.display = 'block';
    resultsCount.textContent = 'No books found';
    return;
  }
  
  noResults.style.display = 'none';
  resultsCount.textContent = `Showing ${books.length} book${books.length !== 1 ? 's' : ''}`;
  
  grid.innerHTML = books.map(book => `
    <div class="book-card" onclick="openModal(${book.id})">
      <div class="book-cover">
        <img src="${book.cover}" alt="${book.title}" onerror="this.src='images/placeholder-book.jpg'">
        <div class="book-rating">⭐ ${book.rating}</div>
      </div>
      <div class="book-info">
        <h3 class="book-title">${book.title}</h3>
        <p class="book-author">by ${book.author}</p>
        <span class="book-genre">${Array.isArray(book.genres) ? book.genres[0] : book.genre}</span>
      </div>
    </div>
  `).join('');
}


// search and filter
function searchAndFilter() {
  const searchTerm = document.getElementById('search-input').value.toLowerCase();
  const genre = document.getElementById('genre-filter').value;
  const sortBy = document.getElementById('sort-filter').value;
  
  
  filteredBooks = booksData.filter(book => {
    const matchesSearch = book.title.toLowerCase().includes(searchTerm) || 
                         book.author.toLowerCase().includes(searchTerm);
    

    // hendling single/multiple genres
    const bookGenres = Array.isArray(book.genres) ? book.genres : [book.genre];
    const matchesGenre = genre === 'all' || bookGenres.includes(genre);
    
    return matchesSearch && matchesGenre;
  });
  
  
  if (sortBy === 'title') {
    filteredBooks.sort((a, b) => a.title.localeCompare(b.title));
  } else if (sortBy === 'author') {
    filteredBooks.sort((a, b) => a.author.localeCompare(b.author));
  } else if (sortBy === 'rating') {
    filteredBooks.sort((a, b) => b.rating - a.rating);
  }
  
  displayBooks(filteredBooks);
}


// modal functions
function openModal(bookId) {
  const book = booksData.find(b => b.id === bookId);
  if (!book) return;
  

  document.getElementById('modal-cover').src = book.cover;
  document.getElementById('modal-title').textContent = book.title;
  document.getElementById('modal-author').textContent = book.author;
  

  // genres
  const genreText = Array.isArray(book.genres) ? book.genres.join(', ') : book.genre;
  document.getElementById('modal-genre').textContent = genreText;
  document.getElementById('modal-synopsis').textContent = book.synopsis;
  
  // ratings
  const stars = '⭐'.repeat(Math.round(book.rating));
  document.getElementById('modal-rating').textContent = `${stars} (${book.rating}/5)`;
  

  // Series information
  const seriesSection = document.getElementById('series-section');
  if (book.series && (book.series.prequels?.length > 0 || book.series.sequels?.length > 0)) {
    seriesSection.style.display = 'block';
    let seriesHTML = '<ul class="series-list">';
    
    if (book.series.prequels && book.series.prequels.length > 0) {
      book.series.prequels.forEach(prequel => {
        seriesHTML += `<li><strong>Prequel:</strong> ${prequel}</li>`;
      });
    }
    
    if (book.series.sequels && book.series.sequels.length > 0) {
      book.series.sequels.forEach(sequel => {
        seriesHTML += `<li><strong>Sequel:</strong> ${sequel}</li>`;
      });
    }
    
    seriesHTML += '</ul>';
    document.getElementById('series-content').innerHTML = seriesHTML;
  } else {
    seriesSection.style.display = 'none';
  }
  

  // Reviews table
  const reviewsBody = document.getElementById('reviews-body');
  reviewsBody.innerHTML = book.reviews.map(review => `
    <tr>
      <td>${review.reviewer}</td>
      <td>⭐ ${review.rating}/5</td>
      <td>${review.review}</td>
    </tr>
  `).join('');
  
  // Show modal
  document.getElementById('book-modal').classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  document.getElementById('book-modal').classList.remove('active');
  document.body.style.overflow = 'auto';
}


// event listeners
document.getElementById('search-btn').addEventListener('click', searchAndFilter);

document.getElementById('search-input').addEventListener('keyup', (e) => {
  if (e.key === 'Enter') {
    searchAndFilter();
  }
});

document.getElementById('genre-filter').addEventListener('change', searchAndFilter);
document.getElementById('sort-filter').addEventListener('change', searchAndFilter);

document.getElementById('reset-btn').addEventListener('click', () => {
  document.getElementById('search-input').value = '';
  document.getElementById('genre-filter').value = 'all';
  document.getElementById('sort-filter').value = 'title';
  filteredBooks = [...booksData];
  displayBooks(filteredBooks);
});

document.getElementById('modal-close').addEventListener('click', closeModal);
document.getElementById('modal-overlay').addEventListener('click', closeModal);


// closing modal
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeModal();
  }
});

// displaying books after loading the page
window.addEventListener('DOMContentLoaded', () => {
  displayBooks(booksData);
});