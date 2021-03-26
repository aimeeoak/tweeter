/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

const data = [
  {
    "user": {
      "name": "Leo Birdman",
      "avatars": "",
      "handle": "@PurrsianPeacock"
    },
    "content": {
      "text": "Any cool chicks looking to hang out with a guy with an excellent mane?"
    },
    "created_at": 1616480346544
  },
  {
    "user": {
      "name": "Fluffy Feathers",
      "avatars": "",
      "handle": "@QueenFisher"
    },
    "content": {
      "text": "If you want some bread, meet me under the bird feeder when my humans get home"
    },
    "created_at": 1616566746544
  }
]


$(document).ready(function(){
  renderTweets(data);
  $('form').submit(function(event){
    event.preventDefault();
    console.log($(tweet).serialize());
    console.log($("#tweet-text").val().length);
    if ($("#tweet-text").val().length > 140) {
      $('#error-message').text(errMessage("too long")).slideDown();
    } else if ($("#tweet-text").val().length === null || $("#tweet-text").val().length === 0) {
      $('#error-message').text(errMessage("null")).slideDown();form 
  };
})
});

const loadTweets = function() {
  $.ajax( "/tweets", { method: "GET"})
    .then(function(tweets) {
      renderTweets(tweets);
      console.log("hello... it's tweets...", tweets)
    });
};

loadTweets(); 

const renderTweets = function(tweets) {
  for (let tweet of tweets)
    $("#tweeter-tweets").append(createTweetElement(tweet));
};

const createTweetElement = function(tweet) {
  let $tweet = $(`
    <article class="tweet">
      <header class="tweet-header"> 
      <article class="tweet-author">
      <b>${tweet.user.name}</b>
      <span class="tweet-handle">${tweet.user.handle}</span>
        <img src="${tweet.user.avatars}">
        <article class="tweet-tweet">
          ${tweet.content.text}
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

const error = function(errorMessage) {
  let $error = ``;
  if (errorMessage === "character limit") {
    $error = "Talk less";
  } else if (errorMessage === null) {
    $error = "Talk more";
  } return $error;
}