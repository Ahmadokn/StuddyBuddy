document.addEventListener('DOMContentLoaded', function() {
    // Navigation tab switching
    const navLinks = document.querySelectorAll('nav ul li a');
    const sections = document.querySelectorAll('.content-section');
  
    navLinks.forEach(link => {
      link.addEventListener('click', function(e) {
        e.preventDefault();
        // Remove active class from all nav links and sections
        navLinks.forEach(l => l.classList.remove('active'));
        sections.forEach(sec => sec.classList.remove('active'));
        // Set active class for the clicked nav link and corresponding section
        this.classList.add('active');
        const sectionId = this.getAttribute('data-section');
        document.getElementById(sectionId).classList.add('active');
      });
    });
  
    // Chat form submission handling
    const chatForm = document.getElementById('chat-form');
    const chatInput = document.getElementById('chat-input');
    const chatBox = document.querySelector('.chat-box');
  
    chatForm.addEventListener('submit', function(e) {
      e.preventDefault();
      const message = chatInput.value.trim();
      if (message !== '') {
        const newMessageDiv = document.createElement('div');
        newMessageDiv.classList.add('chat-message');
        newMessageDiv.innerHTML = `<strong>You:</strong> ${message}`;
        chatBox.appendChild(newMessageDiv);
        chatInput.value = '';
        // Auto-scroll to the bottom of the chat box
        chatBox.scrollTop = chatBox.scrollHeight;
      }
    });
  
    // Profile form submission (demo behavior)
    const profileForm = document.getElementById('profile-form');
    profileForm.addEventListener('submit', function(e) {
      e.preventDefault();
      alert('Profile updated (demo only)!');
    });
  });