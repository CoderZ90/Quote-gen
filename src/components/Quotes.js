import React from "react";

function Quotes({ quote }) {
  return (
    <div className="quote">
      <div className="anime naruto" title={quote.anime}>
        {quote.anime}
      </div>
      <blockquote>{quote.quote}</blockquote>
      <div title={quote.character} className="character">
        {quote.character}
      </div>
    </div>
  );
}

export default Quotes;
