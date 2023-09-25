// Load a random quote and display on the index page
function loadQuotes(callback) {
  getData('{{ base }}/../assets/json/quotes.json', function (result) {
    const randomNum = Math.floor((Math.random() * Object.keys(result.quotes).length));
    callback("“" + result.quotes[randomNum].text + "”", result.quotes[randomNum].author);
  });
}
