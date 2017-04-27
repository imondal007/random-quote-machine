//Declaring Variable
var url = "https://andruxnet-random-famous-quotes.p.mashape.com/",
    key = "itf11qnc2FmshKaKlonst72vS7qEp1UMmipjsn50M9cSe2Qd0w",
    contentType = "application/x-www-form-urlencoded",
    quote = $(".quote"),
    author = $(".author"),
    newQuote = $("#new"),
    tweet = $("#tweet");

// Getting Quote From Forismatic API
function getQuote() {
    $.ajax({
        url: url,
        type: 'POST',
        beforeSend: setHeader,
        success: function(data) {
            var quoteData = JSON.parse(data);
            $(quote).text(quoteData.quote);
            $(author).text(quoteData.author);

            //Storing quoteData To variable for using on tweet
            tweetContent = quoteData.quote,
                tweetAuthor = quoteData.author;
        }
    })

    function setHeader(xhr) {
        xhr.setRequestHeader('X-Mashape-Key', key);
        xhr.setRequestHeader('Content-Type', contentType);
        xhr.setRequestHeader('Accept', 'application/json');
    }

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
    window.open("https://twitter.com/intent/tweet?text=" + tweetContent + " -" + tweetAuthor);
})