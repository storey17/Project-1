// This is the NYT API

var $nytHeadline = $("#nyt-headline");
var $nytImage = $("#nyt-image");
var $nytButton = $("#nyt-button");


var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=election&fq=news_desk:('Politics')('Washington')&api-key=PRDkjbCFU5eSMenXggU1owKkJyQjyAnU";

$.ajax({
    url: queryURL,
    method: "GET"
}).then(function (response) {
    console.log(response);
    $nytHeadline.text(response.response.docs[0].headline.print_headline);
    $nytImage.attr("src", "https://nytimes.com/" + response.response.docs[0].multimedia[2].url);
    $nytButton.attr("href", response.response.docs[0].web_url);

});

// This is the reddit API

var redditSettings = {
    // async: true,
    // crossDomain: true,
    url: "https://www.reddit.com/r/politics/top.json?count=1",
    method: "GET",
    // data: {}
  };
  
  $.ajax(redditSettings).done(function(response) {
    var url = response.data.children[0].data.url; // this is the link for the article
    var title = response.data.children[0].data.title; //this is title
  
    console.log("Reddit start", response);
    console.log("Can I see this link?", url);
    console.log(title);
    $(".red-title").text(title);
    $(".red-URL").attr("href", url);
  });
  
  
  // This is the guardian API
  
  var guardianSettings = {
      // async: true,
      // crossDomain: true,
      url: "https://content.guardianapis.com/search?q=us-news%2Fus-elections-2020&api-key=a42a50d2-e130-42f2-98e1-e6e71b872da7&show-fields=thumbnail",
      method: "GET",
      // data: {}
    };
    
    $.ajax(guardianSettings).done(function(response) {
      var tgaUrl = response.response.results[0].webUrl; // this is the link for the article
      var title = response.response.results[0].webTitle; //this is title
      var tgaImg = response.response.results[0].fields.thumbnail;

      console.log("test")
      console.log(response);
      console.log("is this the url?", tgaUrl);
      console.log("do I see the title?", title);
      console.log("do I see the image?", tgaImg);

      $(".tga-title").text(title);
      $(".tga-URL").attr("href", tgaUrl);
      $(".tga-IMG").attr("src", tgaImg);
    });
  
    