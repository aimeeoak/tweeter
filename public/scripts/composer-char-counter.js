$(document).ready(function() {
    // --- our code goes here ---
    const $text = $("#tweet-text");
    $text.on('keyup', function(e) {
        const $this = $(this)
        const $counter = $("output.counter")
        const tweetLength = 140 - $this.val().length;
        if (tweetLength < 0) {
            $counter.addClass("counter-red");
        } else {
            $counter.removeClass("counter-red")
        }
        $counter.text(tweetLength);
    })
  });