// Function to display the selected section
function showSection(sectionId) {
  // Hide all sections
  var sections = document.querySelectorAll('.gallery');
  sections.forEach(function(section) {
      section.classList.remove('active');
  });

  // Show the selected section
  var selectedSection = document.getElementById(sectionId);
  selectedSection.classList.add('active');
}

// Show the "ALL" section by default
document.addEventListener("DOMContentLoaded", function() {
  showSection('all');
});


    // Function to display the selected section and hide others
    function showSection(sectionId) {
      // Hide all sections first
      var sections = document.querySelectorAll('.section');
      sections.forEach(function(section) {
        section.style.display = 'none';
      });

      // If "ALL" is selected, show all sections
      if (sectionId === 'all') {
        sections.forEach(function(section) {
          section.style.display = 'block';
        });
      } else {
        // Show the selected section
        var selectedSection = document.getElementById(sectionId);
        selectedSection.style.display = 'block';
      }

      // Optionally highlight the active menu item
      var menuItems = document.querySelectorAll('nav a');
      menuItems.forEach(function(item) {
        item.classList.remove('active');
      });
      document.querySelector(`a[data-filter="${sectionId}"]`).classList.add('active');
    }

    // Show the "ALL" section by default when the page loads
    document.addEventListener("DOMContentLoaded", function() {
      showSection('all'); // Show all sections by default
    });
 
    // codigo anterior

    