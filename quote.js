function get_quote() {
  $.ajax({
    url: "http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&callback=",
    success: function(json) {
      var quote = json[0].content;
      var author = json[0].title;

      $(".text").html(quote);
      $(".author").html(author);
    },
    cache: false
  });
}

$(document).ready(function() {
  get_quote();
  $('#new-quote').on('click', function() {
    get_quote();
  });

  $('#twitter').click(function() {
    var quote = $(".text");
    var url_text = "https://twitter.com/intent/tweet?text=" + encodeURI(quote.text().slice(0, 125));
    window.open(url_text);
  });
});
