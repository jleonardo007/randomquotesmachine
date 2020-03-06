import { connect } from "react-redux";
import QuotesComponent from "./QuotesComponent";

const RANDOM_QUOTE = "RANDOM_QUOTE";

const randomQuote = quotes => {
  let quote = quotes.quotes[Math.floor(Math.random() * quotes.quotes.length)];
  return {
    type: RANDOM_QUOTE,
    quote
  };
};

const initialQuotesState = {
  thereIsQuotes: false,
  randomQuote: {}
};

const mapStateToProps = quotesState => {
  return {
    quotesState
  };
};

const mapDispatchToProps = dispatch => {
  return {
    randomQuote: quotes => dispatch(randomQuote(quotes))
  };
};

const randomQuotesReducer = (quotesState = initialQuotesState, action) => {
  if (action.type === "RANDOM_QUOTE")
    return {
      ...quotesState,
      thereIsQuotes: true,
      randomQuote: action.quote
    };
  else return quotesState;
};

const QuotesContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(QuotesComponent);

export {
  QuotesContainer,
  randomQuotesReducer
};
