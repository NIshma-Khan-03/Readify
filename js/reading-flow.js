
// ===== Reading Flow JavaScript (SIMPLE) =====

// ambientsounds
let currentSound = null;

// getting sounds buttons
const soundButtons = document.querySelectorAll('.sound-btn');

soundButtons.forEach(button => {
  button.addEventListener('click', function() {
    const soundType = this.getAttribute('data-sound');
    
    // turn off if the button is clicked twice
    if (currentSound === soundType) {
      this.classList.remove('active');
      this.querySelector('.sound-status').textContent = '▶';
      currentSound = null;
    } else {

        soundButtons.forEach(btn => {
        btn.classList.remove('active');
        btn.querySelector('.sound-status').textContent = '▶';
      });
      

      this.classList.add('active');
      this.querySelector('.sound-status').textContent = '⏸';
      currentSound = soundType;
    }
  });
});


// volume slide button
const volumeSlider = document.getElementById('volume-slider');

volumeSlider.addEventListener('input', function() {
  const value = this.value;

  this.style.background = `linear-gradient(to right, var(--sage) ${value}%, #ddd ${value}%)`;
});



// book tracker (completed)

// adding completed books
document.getElementById('add-book-form').addEventListener('submit', function(e) {
  e.preventDefault();
  
  const title = document.getElementById('completed-book-title').value.trim();
  const date = document.getElementById('completion-date').value;
  
  if (!title || !date) return;
  

  let completedBooks = JSON.parse(localStorage.getItem('completedBooks')) || [];
  

  const newBook = {
    id: Date.now(),
    title: title,
    date: date
  };
  
  completedBooks.push(newBook);
  localStorage.setItem('completedBooks', JSON.stringify(completedBooks));
  
  // resetting form
  document.getElementById('completed-book-title').value = '';
  document.getElementById('completion-date').value = '';
  
  displayCompletedBooks();
});



// displaying completed books
function displayCompletedBooks() {
  const completedBooks = JSON.parse(localStorage.getItem('completedBooks')) || [];
  const listContainer = document.getElementById('completed-list');
  const emptyState = document.getElementById('empty-state');
  
  
  document.getElementById('total-books').textContent = completedBooks.length;
  
  
  const currentMonth = new Date().getMonth();
  const currentYear = new Date().getFullYear();
  const thisMonthCount = completedBooks.filter(book => {
    const bookDate = new Date(book.date);
    return bookDate.getMonth() === currentMonth && bookDate.getFullYear() === currentYear;
  }).length;
  document.getElementById('this-month').textContent = thisMonthCount;
  
  
  if (completedBooks.length === 0) {
    emptyState.style.display = 'block';
    listContainer.style.display = 'none';
    return;
  }
  
  emptyState.style.display = 'none';
  listContainer.style.display = 'flex';
  
  // sort by date
  completedBooks.sort((a, b) => new Date(b.date) - new Date(a.date));
  
  // displaying books
  listContainer.innerHTML = completedBooks.map(book => {
    const bookDate = new Date(book.date);
    const formattedDate = bookDate.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
    
    return `
      <div class="completed-item">

        <div class="completed-item-info">

          <h4>${book.title}</h4>
          <div class="completed-item-date">
            <i class="fas fa-calendar-check"></i> Completed: ${formattedDate}
          </div>

        </div>

        <button class="delete-btn" onclick="deleteCompletedBook(${book.id})">
          <i class="fas fa-trash"></i>
        </button>

      </div>
    `;

  }).join('');
}


// deleting functions
function deleteCompletedBook(bookId) {
  if (confirm('Remove this book from your completed list?')) {
    let completedBooks = JSON.parse(localStorage.getItem('completedBooks')) || [];
    completedBooks = completedBooks.filter(book => book.id !== bookId);
    localStorage.setItem('completedBooks', JSON.stringify(completedBooks));
    displayCompletedBooks();
  }
}

// seting default date to today
document.getElementById('completion-date').valueAsDate = new Date();

// loading
window.addEventListener('DOMContentLoaded', displayCompletedBooks);