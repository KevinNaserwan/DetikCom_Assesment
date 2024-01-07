
$(document).ready(function () {
  // Variables
  var currentIndex = 0;
  var totalItems = $(".review-card").length;

  // Function to show the current item
  function showItem(index) {
    $(".reviews").css("transform", "translateX(" + -index * 20 + "%)");
  }

  // Handle click on the right arrow
  $(".arrows a:last-child").click(function (e) {
    e.preventDefault();
    currentIndex = (currentIndex + 1) % totalItems;
    showItem(currentIndex);
  });

  // Handle click on the left arrow
  $(".arrows a:first-child").click(function (e) {
    e.preventDefault();
    currentIndex = (currentIndex - 1 + totalItems) % totalItems;
    showItem(currentIndex);
  });
});


// main.js

$(document).ready(function () {
  // Number of cards per page
  var cardsPerPage = 9;

  // Get all blog cards
  var blogCards = $(".link-cards");

  // Calculate the total number of pages
  var totalPages = Math.ceil(blogCards.length / cardsPerPage);

  // Initial page
  var currentPage = 1;

  // Show/hide cards based on the current page
  function showHideCards() {
    blogCards.hide();
    var startIndex = (currentPage - 1) * cardsPerPage;
    var endIndex = startIndex + cardsPerPage;
    blogCards.slice(startIndex, endIndex).show();
  }

  // Show/hide Next and Previous buttons
  function toggleButtons() {
    $("#prevBtn").toggle(currentPage > 1);
    $("#nextBtn").toggle(currentPage < totalPages);
  }

  // Update the number of cards per page for smaller screens
  function updateCardsPerPage() {
    if ($(window).width() < 570) {
      cardsPerPage = 10; // Set the maximum number of cards to 9 for small screens
    } else {
      cardsPerPage = 9; // You can adjust this value for larger screens if needed
    }
  }

  // Initial setup
  updateCardsPerPage();
  showHideCards();
  toggleButtons();

  // Update the number of cards per page when the window is resized
  $(window).resize(function () {
    updateCardsPerPage();
    showHideCards();
    toggleButtons();
  });

  // Next button click event
  $("#nextBtn").on("click", function (e) {
    e.preventDefault();
    currentPage++;
    showHideCards();
    toggleButtons();
  });

  // Previous button click event
  $("#prevBtn").on("click", function (e) {
    e.preventDefault();
    currentPage--;
    showHideCards();
    toggleButtons();
  });
});

document.addEventListener('DOMContentLoaded', function () {
  var menu = document.getElementById('menu');
  var menuIcon = document.getElementById('menuIcon');

  // Event listener for clicking on the menu icon
  menuIcon.addEventListener('click', function (event) {
    event.stopPropagation(); // Stop the event from reaching the document click listener
    menu.classList.toggle('active'); // Toggle the 'active' class
    menu.classList.remove('unactive'); // Hide the menu
  });

  // Event listener for clicking anywhere on the document to close the menu
  document.addEventListener('click', function () {
    menu.classList.remove('active'); // Hide the menu
    menu.classList.toggle('unactive'); // Toggle the 'active' class
  });
});


// const menu = document.getElementById('menu');
// const menuIcon = document.getElementById('menuIcon');

// // Tambahkan event listener untuk klik pada menuIcon
// menuIcon.addEventListener('click', function (event) {
//   // Toggle class 'active' pada elemen menu
//   menu.classList.toggle('active');
//   menu.classList.remove('unactive');

//   // Menghentikan event propagation agar tidak memicu event di body
//   event.stopPropagation();
// });

// // Tambahkan event listener untuk klik pada body
// document.body.addEventListener('click', function () {
//   // Hapus class 'active' dari elemen menu jika ada
//   menu.classList.remove('active');
// });