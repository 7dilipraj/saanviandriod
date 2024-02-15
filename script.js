var scrollTimeout;

function scrollToSection(sectionId) {
  var section = document.getElementById(sectionId);
  section.scrollIntoView({ behavior: 'smooth' });
  document.querySelector('.content').style.paddingTop = document.querySelector('.topnav').offsetHeight + 'px';

  // Highlight the active link and content
  var navLinks = document.querySelectorAll('.topnav a');
  navLinks.forEach(function(link) {
    link.classList.remove('active');
  });

  var activeLink = document.querySelector('.topnav a[href="#' + sectionId + '"]');
  activeLink.classList.add('active');

  var contentSections = document.querySelectorAll('.content');
  contentSections.forEach(function(contentSection) {
    contentSection.classList.remove('highlight');
  });

  section.classList.add('highlight');

  // Remove the highlight after 2 seconds
  setTimeout(function() {
    section.classList.remove('highlight');
  }, 2000);
}

// Adjust initial padding
document.querySelector('.content').style.paddingTop = document.querySelector('.topnav').offsetHeight + 'px';

// Highlight the active link on scroll
window.addEventListener('scroll', function() {
  clearTimeout(scrollTimeout);

  scrollTimeout = setTimeout(function() {
    var scrollPosition = window.scrollY;
    var navLinks = document.querySelectorAll('.topnav a');

    navLinks.forEach(function(link) {
      var sectionId = link.getAttribute('href').substring(1);
      var section = document.getElementById(sectionId);

      if (section.offsetTop <= scrollPosition && section.offsetTop + section.offsetHeight > scrollPosition) {
        link.classList.add('active');

        // Highlight the content dynamically
        var contentSections = document.querySelectorAll('.content');
        contentSections.forEach(function(contentSection) {
          contentSection.classList.remove('highlight');
        });

        section.classList.add('highlight');
      } else {
        link.classList.remove('active');
      }
    });
  }, 5); // Adjust the delay as needed
});



// Theme switcher
function toggleTheme() {
  document.body.classList.toggle('dark-theme');
  document.body.classList.toggle('light-theme');

  // Toggle image visibility
  var lightImage = document.getElementById('lightImage');
  var darkImage = document.getElementById('darkImage');

  if (document.body.classList.contains('dark-theme')) {
    lightImage.style.display = 'none';
    darkImage.style.display = 'block';
  } else {
    lightImage.style.display = 'block';
    darkImage.style.display = 'none';
  }
}


  // block right click

document.addEventListener('contextmenu', function (e) {
  e.preventDefault();
});

scrollToSection('home');