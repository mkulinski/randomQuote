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
        $("h3").html(quotes.lyrics[randomNumber]);
    });

    $('a.tweet').click(function(e){

        //We tell our browser not to follow that link
        e.preventDefault();

        //We get the title of the link
        var lyric  = $("h3").html();
        var artist = $("p").html();

        //We trigger a new window with the Twitter dialog, in the middle of the page
        window.open('http://twitter.com/share?' + '&text=' + lyric + artist + '&', 'twitterwindow', 'height=450, width=550, top='+($(window).height()/2 - 225) +', left='+$(window).width()/2 +', toolbar=0, location=0, menubar=0, directories=0, scrollbars=0');

    });

});