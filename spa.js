// Define a function to load content into the "content" div.
function loadPage(pageName) {
    // Fetch the content of the specified page.
    fetch(pageName)
      .then(response => response.text())
      .then(data => {
        // Update the "content" div with the fetched content.
        document.getElementById('content').innerHTML = data;
        // Scroll to the top of the page.
        window.scrollTo(0, 0);
      })
      .catch(error => {
        console.error('Error loading page:', error);
      });
  }
  
  // Add event listeners to the navigation links to load pages dynamically.
  document.addEventListener('DOMContentLoaded', function () {
    // Load the initial page when the DOM is ready.
    loadPage('index.html');
  
    // Add event listeners for navigation links.
    const links = document.querySelectorAll('.links a');
    links.forEach(link => {
      link.addEventListener('click', function (event) {
        event.preventDefault();
        const pageName = link.getAttribute('onclick').match(/'(.*?)'/)[1];
        loadPage(pageName);
      });
    });
  });
  
  
  // Add any other functionality or logic you need for your SPA here.
  
