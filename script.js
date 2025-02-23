// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  
  // Form submission handling
  document.getElementById('contact-form').addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Thank you for reaching out! I will get back to you soon.');
    document.getElementById('contact-form').reset();
  });


const scrollProgress = document.getElementById('scroll-progress');

window.addEventListener('scroll', () => {
  const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
  const progress = (scrollTop / scrollHeight) * 100;
  scrollProgress.style.width = `${progress}%`;
});
// Dark Mode Toggle
const themeToggle = document.getElementById('theme-toggle');
themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  // Save user preference in localStorage
  const isDarkMode = document.body.classList.contains('dark-mode');
  localStorage.setItem('dark-mode', isDarkMode);
  themeToggle.textContent = isDarkMode ? '☀️' : '🌙';
});

// Check for saved user preference
const savedDarkMode = localStorage.getItem('dark-mode');
if (savedDarkMode === 'true') {
  document.body.classList.add('dark-mode');
  themeToggle.textContent = '☀️';
} else {
  document.body.classList.remove('dark-mode');
  themeToggle.textContent = '🌙';
}

const toggleButton = document.getElementById('dark-mode-toggle');
const body = document.body;

// Check user preference from localStorage
if (localStorage.getItem('dark-mode') === 'enabled') {
  body.classList.add('dark-mode');
  toggleButton.checked = true;
}


function showTab(tabName) {
  // Hide all tab contents
  const tabContents = document.querySelectorAll('.tab-content');
  tabContents.forEach(content => content.classList.remove('active'));

  // Show the selected tab content
  const selectedTab = document.getElementById(tabName);
  selectedTab.classList.add('active');

  // Remove active class from all tab buttons
  const tabButtons = document.querySelectorAll('.tab-button');
  tabButtons.forEach(button => button.classList.remove('active'));

  // Add active class to the selected tab button
  const activeButton = document.querySelector(`.tab-button[onclick="showTab('${tabName}')"]`);
  activeButton.classList.add('active');
}

// Set default tab to be Frontend
showTab('frontend');

// Function to toggle visibility of the project link
function toggleLinkVisibility(button) {
  // Find the corresponding link next to the button
  const projectLink = button.nextElementSibling; // The <a> tag is right after the button
  // Toggle its display
  if (projectLink.style.display === "none" || projectLink.style.display === "") {
      projectLink.style.display = "inline-block"; // Show the link
      button.textContent = "Hide"; // Change button text
  } else {
      projectLink.style.display = "none"; // Hide the link
      button.textContent = "View "; // Revert button text
  }
}

// JavaScript for Scroll Animations
const workItems = document.querySelectorAll('.work-item');

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.querySelector('.work-card').style.opacity = '1';
        entry.target.querySelector('.work-card').style.transform = 'translateX(0)';
      }
    });
  },
  { threshold: 0.5 }
);

workItems.forEach((item) => {
  observer.observe(item);
});

//********************************************************** */

function toggleDetails(button) {
  const description = button.previousElementSibling; // Get the description (p)
  const projectLink = description.nextElementSibling; // Get the certificate link (a)

  // Check if description is already expanded
  if (description.style.display === "none" || description.style.display === "") {
    description.style.display = "block"; // Show description
    projectLink.style.display = "inline-block"; // Show certificate link
    button.textContent = "Hide"; // Change button text to 'Hide'
  } else {
    description.style.display = "none"; // Hide description
    button.textContent = "Read More"; // Change button text back to 'Read More'
  }
}




document.querySelectorAll('.view-project-button').forEach(button => {
  button.addEventListener('click', function() {
    const description = this.previousElementSibling; // Get the description
    const certificateButton = this.nextElementSibling; // Get the certificate button
    const isExpanded = description.classList.contains('expanded');

    // Toggle the expanded class on description
    description.classList.toggle('expanded');
    
    // Toggle the display of the certificate button
    if (!isExpanded) {

      certificateButton.style.display = 'inline-block'; // Show certificate button
      this.textContent = 'Hide'; // Change button text to "Hide"
    } else {
      certificateButton.style.display = 'none'; // Hide certificate button
      this.textContent = 'Read More'; // Change button text back to "Read More"
    }
  });
});

// Get the button
const goUpBtn = document.getElementById('goUpBtn');

// Show the button when the user scrolls down 100px from the top
window.onscroll = function() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    goUpBtn.style.display = "block"; // Show the button
  } else {
    goUpBtn.style.display = "none"; // Hide the button
  }
};

// Scroll to the top when the user clicks the button
goUpBtn.onclick = function() {
  window.scrollTo({ top: 0, behavior: 'smooth' }); // Smooth scroll to top
};
