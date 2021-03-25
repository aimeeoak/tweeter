/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(document).ready(function(){
  $('form').submit(function(){
    event.preventDefault();
  });
});






const data = [
        {
          "user": {
            "name": "Lucy Westenra",
            "avatars": "https://i.imgur.com/73hZDYK.png",
            "handle": "@theBlooferLady"
          },
          "content": {
            "text": "Dress is a bore."
          },
          "created_at": 1616480346544
        },
        {
          "user": {
            "name": "Mina Harker",
            "avatars": "https://i.imgur.com/nlhLi3I.png",
            "handle": "@mrsharker"
          },
          "content": {
            "text": "Fortunately I am not of a fainting disposition"
          },
          "created_at": 1616566746544
        }
      ]

const renderTweets = function(tweets) {
  // calls createTweetElement for each tweet
  // takes return value and appends it to the tweets container
  for (let tweet in tweets)
    $(".tweeter-tweets")
};

const createTweetElement = function(tweet) {
  let $tweet = $(`
    <article class="tweet">
      <header class="tweet-header">
        <h1>${data.name}</h1>
        <article class="tweet">
          <h2>${data.text}</h2>
          <p>data.${date}</p>
        </article>
        <article class="tweet">
          <h1>${data.name}</h1>
          <article class="tweet">
            <h2>${data.text}</h2>
          </article>
        </article>
    </header>
    <footer class="tweet-footer">
    ${data.date}
    </footer>
    </article>

      `)
      return $tweet;
};

renderTweets(data);
{/* 
if (request.url === "/") {
  response.end("Welcome!");
} else if (request.url === "/urls") {
  response.end("www.lighthouselabs.ca\nwww.google.com");
} else {
  response.statusCode = 404;
  response.end("404 Page Not Found");
} */}