/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(document).ready(function(){
  renderTweets(data);
  $('form').submit(function(event){
    event.preventDefault();
    console.log($(tweet).serialize());
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

const loadTweets = function() {
  $.ajax( "/tweets", { method: "GET"})
    .then(function(tweets) {
      renderTweets(tweets);
      console.log("hello... it's tweets...", tweets)
    });
};

const renderTweets = function(tweets) {
  for (let tweet of tweets)
    $("#tweeter-tweets").append(createTweetElement(tweet));
};

const createTweetElement = function(tweet) {
  let $tweet = $(`
    <article class="tweet">
      <header class="tweet-header">
        <img src="${tweet.user.avatars}">
        <h1>${tweet.user.name}</h1>
        <article class="tweet">
          <h2>${tweet.content.text}</h2>
        </article>
        <article class="tweet1">
          <h1>${tweet.user.handle}</h1>
          <article class="tweet">
          </article>
        </article>
    </header>
    <footer class="tweet-footer">
    ${tweet.created_at}
    </footer>
    </article>
      `)
      return $tweet;
};

renderTweets(data);