$(document).ready(function() {
    //collection of quotes
    var quotes = {
        "artists": [
            "Migos",
            "Fetty",
            "Drake",
            "The Donald",
            "Uknown"
        ],
        "lyrics": [
            "You slower than molasses",
            "Learn how to swerve and werve",
            "Started from the bottom now we here",
            "I put them bricks on the boat",
            "Realist shit I never wrote."
        ]
    };

    $("button").on("click", function() {
        var randomNumber = Math.floor(Math.random() * 5);
        $("p").html("- " +quotes.artists[randomNumber]);
        $("h3").html( quotes.lyrics[randomNumber]);
    });
});