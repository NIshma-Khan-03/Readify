
// ===== Reading Tracker JavaScript =====

// getting form ad resukts for the page
const form = document.getElementById('tracker-form');
const resultsCard = document.getElementById('results-card');
const savedSection = document.getElementById('saved-section');



// ===== calculating progress =====
form.addEventListener('submit', function(e) {
  e.preventDefault();
  
  // geting input
  const bookTitle = document.getElementById('book-title').value;
  const totalPages = parseInt(document.getElementById('total-pages').value);
  const pagesRead = parseInt(document.getElementById('pages-read').value);
  const readingSpeed = parseInt(document.getElementById('reading-speed').value);
  

  // validating pages read
  if (pagesRead > totalPages) {
    alert('Pages read cannot be more than total pages!');
    return;
  }


  // calculating 
  const percentage = Math.round((pagesRead / totalPages) * 100);
  const pagesLeft = totalPages - pagesRead;
  const daysLeft = Math.ceil(pagesLeft / readingSpeed);
  

  // calculating finish date
  const today = new Date();
  const finishDate = new Date(today);
  finishDate.setDate(today.getDate() + daysLeft);
  const finishDateStr = finishDate.toLocaleDateString('en-US', { 
    month: 'short', 
    day: 'numeric',
    year: 'numeric'
  });
  

  // displaying results
  document.getElementById('percentage').textContent = percentage + '%';
  document.getElementById('pages-left').textContent = pagesLeft;
  document.getElementById('days-left').textContent = daysLeft;
  document.getElementById('finish-date').textContent = finishDateStr;
  
  // progress bar animation
  const progressFill = document.getElementById('progress-fill');
  progressFill.style.width = '0%';
  setTimeout(() => {
    progressFill.style.width = percentage + '%';
  }, 100);
  
  resultsCard.style.display = 'block';
  
  resultsCard.scrollIntoView({ behavior: 'smooth', block: 'center' });
  

  // storing current data for saving
  window.currentProgress = {
    bookTitle,
    totalPages,
    pagesRead,
    readingSpeed,
    percentage,
    pagesLeft,
    daysLeft,
    finishDate: finishDateStr
  };
});



// ===== saving progress to loacl storage =====

document.getElementById('save-btn').addEventListener('click', function() {
  if (!window.currentProgress) return;
  
  // getting existing saved books
  let savedBooks = JSON.parse(localStorage.getItem('savedBooks')) || [];
  
  // checking if book already exists
  const existingIndex = savedBooks.findIndex(book => 
    book.bookTitle.toLowerCase() === window.currentProgress.bookTitle.toLowerCase()
  );
  

  // updating existing book and adding new ones
  if (existingIndex !== -1) {
    
    savedBooks[existingIndex] = window.currentProgress;
  } else {
    
    savedBooks.push(window.currentProgress);
  }
  

  localStorage.setItem('savedBooks', JSON.stringify(savedBooks));
  
  // shoiwng success message
  const successMsg = document.getElementById('success-message');
  successMsg.style.display = 'block';
  
  setTimeout(() => {
    successMsg.style.display = 'none';
  }, 3000);
  
  
  displaySavedBooks();
});



// ===== Displaying saved books =====
function displaySavedBooks() {
  const savedBooks = JSON.parse(localStorage.getItem('savedBooks')) || [];
  const savedBooksContainer = document.getElementById('saved-books');
  
  if (savedBooks.length === 0) {
    savedSection.style.display = 'none';
    return;
  }
  
  savedSection.style.display = 'block';
  
  savedBooksContainer.innerHTML = savedBooks.map((book, index) => `
    <div class="saved-book">
      <div class="saved-book-info">
        <h3>${book.bookTitle}</h3>
        <div class="saved-book-stats">
          <span><i class="fas fa-percentage"></i> ${book.percentage}% Complete</span>
          <span><i class="fas fa-book-open"></i> ${book.pagesLeft} pages left</span>
          <span><i class="fas fa-calendar"></i> ${book.daysLeft} days to finish</span>
        </div>
      </div>
      <button class="delete-btn" onclick="deleteBook(${index})">
        <i class="fas fa-trash"></i>
      </button>
    </div>
  `).join('');
}

// ===== deleting saved books =====
function deleteBook(index) {
  if (confirm('Are you sure you want to delete this book?')) {
    let savedBooks = JSON.parse(localStorage.getItem('savedBooks')) || [];
    savedBooks.splice(index, 1);
    localStorage.setItem('savedBooks', JSON.stringify(savedBooks));
    displaySavedBooks();
  }
}

// ===== loading saved books while loading the page =====
window.addEventListener('DOMContentLoaded', displaySavedBooks);