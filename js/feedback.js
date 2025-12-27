
// ===== Feedback JavaScript =====


// form validating and sumitting
document.getElementById('feedback-form').addEventListener('submit', function(e) {
  e.preventDefault();
  
  
  const name = document.getElementById('user-name').value.trim();
  const email = document.getElementById('user-email').value.trim();
  const type = document.getElementById('feedback-type').value;
  const message = document.getElementById('user-message').value.trim();
  
  
  document.querySelectorAll('.form-group').forEach(group => {
    group.classList.remove('error');
  });
  
  let isValid = true;
  
  // validating name
  if (name === '') {
    showError('name-error', 'Please enter your name');
    isValid = false;
  } else if (name.length < 2) {
    showError('name-error', 'Name must be at least 2 characters');
    isValid = false;
  }
  
  // validating email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (email === '') {
    showError('email-error', 'Please enter your email');
    isValid = false;
  } else if (!emailRegex.test(email)) {
    showError('email-error', 'Please enter a valid email address');
    isValid = false;
  }
  
  // validating message
  if (message === '') {
    showError('message-error', 'Please enter your message');
    isValid = false;
  } else if (message.length < 10) {
    showError('message-error', 'Message must be at least 10 characters');
    isValid = false;
  }
  
  
  if (isValid) {
    // saving feedback to localStorage
    const feedback = {
      id: Date.now(),
      name: name,
      email: email,
      type: type,
      message: message,
      date: new Date().toISOString()
    };
    
    let feedbackList = JSON.parse(localStorage.getItem('feedbackList')) || [];
    feedbackList.push(feedback);
    localStorage.setItem('feedbackList', JSON.stringify(feedbackList));
    
    // success message
    document.getElementById('success-box').style.display = 'flex';
    
    // reset form
    document.getElementById('feedback-form').reset();
    
    
    setTimeout(() => {
      document.getElementById('success-box').style.display = 'none';
    }, 5000);
    
    // scroll to success message
    document.getElementById('success-box').scrollIntoView({ 
      behavior: 'smooth', 
      block: 'center' 
    });
  }
});

// error message
function showError(elementId, message) {
  const errorElement = document.getElementById(elementId);
  errorElement.textContent = message;
  errorElement.parentElement.classList.add('error');
}


// faq section
const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
  const question = item.querySelector('.faq-question');
  
  question.addEventListener('click', () => {
    // closing all other items
    faqItems.forEach(otherItem => {
      if (otherItem !== item) {
        otherItem.classList.remove('active');
      }
    });
    
    // Toggle current item
    item.classList.toggle('active');
  });
});


// validating
document.getElementById('user-name').addEventListener('blur', function() {
  const name = this.value.trim();
  if (name !== '' && name.length < 2) {
    showError('name-error', 'Name must be at least 2 characters');
  } else {
    this.parentElement.classList.remove('error');
  }
});

document.getElementById('user-email').addEventListener('blur', function() {
  const email = this.value.trim();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (email !== '' && !emailRegex.test(email)) {
    showError('email-error', 'Please enter a valid email address');
  } else {
    this.parentElement.classList.remove('error');
  }
});

document.getElementById('user-message').addEventListener('blur', function() {
  const message = this.value.trim();
  if (message !== '' && message.length < 10) {
    showError('message-error', 'Message must be at least 10 characters');
  } else {
    this.parentElement.classList.remove('error');
  }
});