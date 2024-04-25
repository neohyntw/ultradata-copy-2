$(window).scroll(function() {
    // Get the scroll position
    var scrollTop = $(window).scrollTop();
    
    // Show the icon when scrolled down by a certain amount
    if (scrollTop > 200) { // Adjust this threshold to your preference
      $("#topIcon").fadeIn(); // Show the icon with a fade-in effect
    } else {
      $("#topIcon").fadeOut(); // Hide the icon when near the top
      console.log('show')
    }
  });