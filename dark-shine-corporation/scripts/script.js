$(document).ready(function () {

  /***** RANDOM QUOTE SCRIPT START *****/

  // 1. Create array with quotes to display.
  var quotes = [
    'Welcome to our Dark Shine Corporation website!',
    'Bienvenido a nuestro sitio web Dark Shine Corporation!',
    'Willkommen auf unserer Dark Shine Corporation-Website!',
    'Bienvenue sur notre site Web Dark Shine Corporation!',
    'Benvenuti nel nostro sito Web di Dark Shine Corporation!',
    'Welkom op onze Dark Shine Corporation-website!',
  ];

  // 2. Find the paragraph to display the quotes and store in a variable to avoid search in every displayQuote.
  var quoteParagraph = $('#quote p');

  // 3. Create a function to display the quotes.
  function displayQuote() {
    // I generate a randorm decimal number based on the quotes.length and then implement floor() to convert to a integer and get a quote to display in the paragraph.
    var randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    quoteParagraph.text(randomQuote);
  }
  
  // 4. Apply JS setInterval to call the function every 3 seconds. 
  setInterval(displayQuote, 3000);
  /***** RANDOM QUOTE SCRIPT END *****/


  /***** SHOWCASE PAGE START *****/

  // 1. Store all thumbnails in a variable.
  var thumbnails = $('.thumbnail');

  // 2. Loop over all elements to attach an event in each one.
  for (var i = 0; i < thumbnails.length; i++) {
    // Listen for click event and call changeImage to update banner.
    $(thumbnails[i]).on('click', changeImage);
  }

  // 3. Function to change the banner.
  function changeImage() {
    // 1. Find the corresponding banner for the clicked thumbnail.
    var bannerImage = $('#' + $(this).attr('data-img'));

    // 2 If the banner is currently active, return from the function to cancel.
    if (bannerImage.hasClass('active')) {
      return;
    }

    //3. Before display the new banner I hide the active img.
    $('.active').removeClass('active');

    //4. Display the new banner.
    bannerImage.addClass('active');
  }
  /***** SHOWCASE PAGE END *****/
});