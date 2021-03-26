/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

const data = [
  {
    "user": {
      "name": "Leo Birdman",
      "avatars": "../images/barbet.jpg",
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
      "avatars": "../images/kingfisher.jpg",
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
    console.log('form');
    event.preventDefault();
    console.log($('form').serialize());
    console.log($("#tweet-text").val().length);
    if ($("#tweet-text").val().length > 140) {
      $('#error-message').text("Too long").slideDown();
      return;
    } else if ($("#tweet-text").val().length === null || $("#tweet-text").val().length === 0) {
      $('#error-message').text("Empty tweet").slideDown();
      return;
  };
  $.ajax( "/tweets", { method: "POST", data: $("form").serialize()})
  .then(function() {
    console.log('Successful Post');
    $("textarea").val("");
    $(".counter").text(140);
    $("#tweeter-tweets").empty();
    loadTweets();
    $("#error-message").slideUp();
  })
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
    $("#tweeter-tweets").prepend(createTweetElement(tweet));
};

const createTweetElement = function(tweet) {
  let $tweet = $(`
    <article class="tweet">
      <header class="tweet-header"> 
      <span class=""tweeterer">
      <span class="avatars"><img src="${tweet.user.avatars}"></span>
      <article class="tweet-author"> <b>${tweet.user.name}</b></article>
      <article class="tweet-handle">${tweet.user.handle}</article>
      </span>
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

// const error = function(errorMessage) {
//   let $error = ``;
//   if (errorMessage === "character limit") {
//     $error = "Talk less";
//   } else if (errorMessage === null) {
//     $error = "Talk more";
//   } return $error;
// }

const escape =  function(str) {
  let div = document.createElement('div');
  div.appendChild(document.createTextNode(str));
  return div.innerHTML;
}