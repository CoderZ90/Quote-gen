import "./styles.css";
import React, { useState, useEffect } from "react";
import Quotes from "./components/Quotes";

export default function App() {
  const [quote, setQuote] = useState({
    anime: null,
    quote: null,
    character: null
  });

  const fetchQuote = async () => {
    return await fetch(
      "https://animechan.vercel.app/api/random"
    ).then((response) => response.json());
  };

  const generate = async () => {
    setQuote(await fetchQuote());
  };

  useEffect(async () => {
    setQuote(await fetchQuote());
  }, []);

  return (
    <div className="app-wrapper">
      <Quotes quote={quote} />

      <button onClick={generate}>Generate Quote</button>
    </div>
  );
}
