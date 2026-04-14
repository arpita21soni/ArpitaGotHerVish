// Wedding Website - JavaScript

// Mobile Menu Toggle
function initMobileMenu() {
  const menuToggle = document.querySelector('.menu-toggle');
  const navMenu = document.querySelector('nav ul');

  if (menuToggle) {
    menuToggle.addEventListener('click', () => {
      navMenu.classList.toggle('active');
      menuToggle.textContent = navMenu.classList.contains('active') ? '✕' : '☰';
    });

    // Close menu when a link is clicked
    navMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        menuToggle.textContent = '☰';
      });
    });
  }
}

// FAQ Accordion
function initFAQ() {
  const faqItems = document.querySelectorAll('.faq-item');
  
  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    const answer = item.querySelector('.faq-answer');
    const toggle = item.querySelector('.faq-toggle');
    
    if (question && answer) {
      question.addEventListener('click', () => {
        const isOpen = answer.classList.contains('show');
        
        // Close all other FAQ items
        faqItems.forEach(otherItem => {
          otherItem.querySelector('.faq-answer').classList.remove('show');
          otherItem.querySelector('.faq-toggle').classList.remove('active');
        });
        
        // Toggle current item
        if (!isOpen) {
          answer.classList.add('show');
          toggle.classList.add('active');
        }
      });
    }
  });
}

// Guest Book Form Handler
function initGuestBookForm() {
  const form = document.getElementById('guestbook-form');
  if (!form) return;

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);
    
    // In a real implementation, you would send this to a backend service
    // For now, we'll use FormSubmit.co for free email submission
    // Or you can integrate with a backend service
    
    try {
      const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        showSuccessMessage('Thank you for your message! It has been received.');
        form.reset();
      } else {
        showSuccessMessage('Thank you! Your message will be sent shortly.', 'info');
      }
    } catch (error) {
      showSuccessMessage('Thank you for your message! Our team will review it shortly.', 'info');
    }
  });
}

// Contact Form Handler
function initContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    showSuccessMessage('Thank you for reaching out! We will get back to you soon.');
    form.reset();
  });
}

function initRSVPPasswordGate() {

  const gateForm = document.getElementById('rsvp-password-form');
  const passwordInput = document.getElementById('rsvp-password-input');
  const message = document.getElementById('rsvp-password-message');
  const typeformContainer = document.getElementById('typeform-container');

  if (!gateForm || !passwordInput || !message || !typeformContainer) return;

  const RSVP_PASSWORD = 'invite2026';

  gateForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const enteredCode = passwordInput.value.trim();
    if (enteredCode.toLowerCase() === RSVP_PASSWORD.toLowerCase()) {
      // Hide password form and show Typeform
      gateForm.style.display = 'none';
      typeformContainer.style.display = 'block';
      message.textContent = '';
      message.classList.remove('error');
    } else {
      message.textContent = 'That code is not correct. Please use the invitation code from your invite.';
      message.classList.add('error');
    }
  });
}

function initRSVPFormSubmission() {
  const form = document.getElementById('rsvp-form');
  if (!form) return;

  // Google Apps Script Web App endpoint
  const RSVP_SUBMIT_URL = 'https://script.google.com/macros/s/AKfycby4mSytjbMn0X0fPSjogeofPJmgZGVcvTC1cGmO7mEv5b90nbFFgYZGD11iTiXENwpYJQ/exec';

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch(RSVP_SUBMIT_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        showSuccessMessage('Your RSVP has been submitted! Thank you for confirming.');
        form.reset();
      } else {
        const text = await response.text();
        console.error('RSVP submission failed', response.status, text);
        showSuccessMessage(`Your RSVP could not be submitted right now: ${response.status}. Please try again later.`, 'info');
      }
    } catch (error) {
      console.error('RSVP submission error', error);
      showSuccessMessage(`Unable to submit at the moment. ${error.message}`, 'info');
    }
  });
}

// Show Success Message
function showSuccessMessage(message, type = 'success') {
  let messageElement = document.querySelector('.success-message');
  
  if (!messageElement) {
    messageElement = document.createElement('div');
    messageElement.className = 'success-message';
    const form = document.querySelector('form');
    if (form) {
      form.parentNode.insertBefore(messageElement, form);
    }
  }
  
  messageElement.textContent = message;
  messageElement.classList.add('show');
  
  setTimeout(() => {
    messageElement.classList.remove('show');
  }, 5000);
}

// Smooth Scrolling for Navigation Links
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (href !== '#') {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }
    });
  });
}

// Gallery Lightbox (optional enhancement)
function initGalleryLightbox() {
  const galleryItems = document.querySelectorAll('.gallery-item img');
  
  galleryItems.forEach(img => {
    img.addEventListener('click', () => {
      const modal = document.createElement('div');
      modal.className = 'lightbox-modal';
      modal.innerHTML = `
        <div class="lightbox-content">
          <span class="lightbox-close">&times;</span>
          <img src="${img.src}" alt="${img.alt}">
        </div>
      `;
      modal.style.cssText = `
        display: none;
        position: fixed;
        z-index: 2000;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        overflow: auto;
        background-color: rgba(0,0,0,0.8);
      `;
      
      modal.querySelector('.lightbox-content').style.cssText = `
        margin: auto;
        display: block;
        max-width: 90%;
        max-height: 90%;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      `;
      
      modal.querySelector('.lightbox-content img').style.cssText = `
        max-width: 100%;
        max-height: 100%;
      `;
      
      modal.querySelector('.lightbox-close').style.cssText = `
        position: absolute;
        top: 20px;
        right: 30px;
        font-size: 40px;
        font-weight: bold;
        color: white;
        cursor: pointer;
      `;
      
      document.body.appendChild(modal);
      modal.style.display = 'block';
      
      modal.querySelector('.lightbox-close').onclick = () => modal.remove();
      modal.onclick = (event) => {
        if (event.target === modal) modal.remove();
      };
    });
  });
}

// Initialize all functions when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  initMobileMenu();
  initFAQ();
  initGuestBookForm();
  initContactForm();
  // Only initialize password gate if present
  if (document.getElementById('rsvp-password-form')) {
    initRSVPPasswordGate();
  }
  // Do not initialize RSVP form submission, as the form is removed
  initSmoothScroll();
  initGalleryLightbox();
});