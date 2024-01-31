import React, { useState, useEffect } from "react";

const CurrencySelector = ({ currency, setCurrency }) => {
  //   const [selectValue, setSelectValue] = useState("AUD");
  const [currencies, setCurrencies] = useState([]);

  //   useEffect(() => setCurrency(selectValue), [selectValue])

  useEffect(() => {
    fetch("https://api.coindesk.com/v1/bpi/supported-currencies.json")
      .then((res) => res.json())
      .then((data) => setCurrencies(data));
  }, []);

  return (
    <select
      onChange={(event) => setCurrency(event.target.value)}
      value={currency}
    >
      {currencies.map((cur) => (
        <option key={cur.currency} value={cur.currency}>
          {cur.country}
        </option>
      ))}
    </select>
  );
};

export default CurrencySelector;

// In Vanilla
// const select = document.querySelector('#currency-selector')
// select.value
