import React, { useState, useEffect } from "react";

const BitcoinIndex = () => {
  let [price, setPrice] = useState("");

  useEffect(() => {
    fetch("https://api.coindesk.com/v1/bpi/currentprice/AUD.json")
      .then((res) => res.json())
      .then((data) => setPrice(data.bpi.AUD.rate));
  }, []);

  return <p>Current Price (AUD): {price}</p>;
};

export default BitcoinIndex;
