import React from "react";

let quotesCollection = [];
let randomColor = "";
let colors = [
  "#16a085",
  "#27ae60",
  "#2c3e50",
  "#f39c12",
  "#e74c3c",
  "#9b59b6",
  "#FB6964",
  "#342224",
  "#472E32",
  "#BDBB99",
  "#77B1A9",
  "#73A857"
];

const requestQuotes = async () => {
  let response = await fetch(
    "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json"
  );
  let quotes = await response.json();
  return quotes;
};

class QuotesApp extends React.Component {
  componentDidMount = async () => {
    quotesCollection = await requestQuotes();
    this.props.randomQuote(quotesCollection);
  };

  newRandomQuote = () => {
    this.props.randomQuote(quotesCollection);
    randomColor = colors[Math.floor(Math.random() * colors.length)];
  };

  render() {
    const thereIsQuotes = this.props.quotesState.thereIsQuotes;
    randomColor = colors[Math.floor(Math.random() * colors.length)];
    if (thereIsQuotes) {
      return (
        <QuoteBox
          style={{ backgroundColor: randomColor }}
          randomQuote={this.props.quotesState.randomQuote}
          newRandomQuote={this.newRandomQuote}
          color={randomColor}
        />
      );
    } else return null;
  }
}

const QuoteBox = ({ randomQuote, newRandomQuote, color }) => (
  <div className="container" id="quote-box">
    <blockquote className="quotes">
      <p id="text" style={{ color: color }}>
        {randomQuote.quote}
      </p>
      <p id="author" style={{ color: color }}>
        {randomQuote.author}
      </p>
    </blockquote>
    <div className="buttons">
      <button
        style={{ color: color, border: `2px solid ${color}` }}
        onClick={newRandomQuote}
        id="new-quote"
      >
        New Quote
      </button>
      <a
        href={
          `https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=` +
          encodeURIComponent(
            '""' + randomQuote.quote + '"' + randomQuote.author
          )
        }
        target="_blank"
        rel="noopener noreferrer"
        id="tweet-quote"
        style={{ color: color, border: `2px solid ${color}` }}
      >
        Share on <i className="fa fa-twitter"></i>
      </a>
    </div>
  </div>
);

export default QuotesApp;
