


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

