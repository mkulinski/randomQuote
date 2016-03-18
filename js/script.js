$(document).ready(function() {
    //collection of quotes
    var quotes = [
      "You slower than molasses",
        "Learn how to swerve and werve",
        "Started from the bottom now we here",
        "I put them bricks on the boat",
        "Realist shit I never wrote."
    ];

    var randomNumber = Math.floor(Math.random() * 6);


    $("h3").html(quotes[randomNumber]);
});