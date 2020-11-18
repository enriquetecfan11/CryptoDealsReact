import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import "./styles.css";
import Currency from "./Currency.js";
import "bootswatch/dist/lux/bootstrap.css";

function App() {
  const [Currencies, setCurrencies] = useState([]);

  useEffect(() => {
    handleFetch();
  }, []);

  const handleFetch = async () => {
    axios
      .get("https://api.coinranking.com/v1/public/coins")
      .then(res => setCurrencies(res.data.data.coins));
  };

  return (
    <div className="container text-center my-3 ">
      <h1 className="tittle">Crypto Currency Deals</h1>
      <h3>App made by <a href="http://www.informatica404.com">Informatica 404</a></h3>

      <div className="grid">
        {Currencies.map((cur, index) => (
          <Currency cur={cur} key={index} />
        ))}
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
