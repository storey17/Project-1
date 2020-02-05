var $nytHeadline = $("#nyt-headline");
var $nytImage = $("#nyt-image");
var $nytButton = $("#nyt-button");


var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=election&fq=news_desk:('Politics')('Washington')&api-key=PRDkjbCFU5eSMenXggU1owKkJyQjyAnU"

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

var settings = {
    async: true,
    crossDomain: true,
    url: "https://www.reddit.com/r/politics/top.json?count=1",
    method: "GET",
    data: {}
  };
  
  $.ajax(settings).done(function(response) {
    var url = response.data.children[0].data.url; // this is the link for the article
    var title = response.data.children[0].data.title; //this is title
  
    console.log(response);
    console.log(url);
    console.log(title);
    $(".red-title").text(title);
    $(".red-URL").attr("href", url);
  });
  
  

