//Declaring Variable
var url      =  "http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?",
	quote    =  $(".quote"),
	author   =  $(".author"),
	newQuote =  $("#new"),
	tweet    =  $("#tweet");

// Getting Quote From Forismatic API
function getQuote() {
	$.getJSON(url, function(data) {
		$(quote).text(data.quoteText);
		$(author).text(data.quoteAuthor);
		
		//Storing Json Data To variable for using on tweet
		tweetContent = data.quoteText,
		tweetAuthor  = data.quoteAuthor;
	});

};
getQuote();

// Loading New Quote
$(newQuote).click(function(e) {
	e.preventDefault();
	getQuote();
})

// Tweet Button
$(tweet).click(function(e) {
	e.preventDefault();
	window.open("https://twitter.com/intent/tweet?text="+tweetContent+ " -"+tweetAuthor);
})