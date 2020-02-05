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
  $(".justHere").text(title);
  $(".red-URL").attr("href", url);
});

