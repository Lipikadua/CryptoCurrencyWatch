import React, { useState, useEffect, Fragment } from "react";
import "../App.css";
import Pagination from "../components/Pagination";
import NavCurrency from "../components/NavCurrency";
import { Helmet } from "react-helmet";
import HomeCurrencyButton from "../components/HomeCurrencyButton";

const HomePage = () => {
  const [cryptoList, setCryptoList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [currencyPerPage] = useState(5);

  //for Currency Conversion
  const [currencyName, setCurrencyName] = useState("USD");
  const [currencySymbol, setCurrencySymbol] = useState("$");
  const [exchangeRate, setExchangeRate] = useState(1);

  useEffect(() => {
    setLoading(true);
    fetch("https://api.coinranking.com/v1/public/coins/")
      .then((res) => res.json())
      .then((data) => {
        setCryptoList(data.data["coins"]);
        console.log("coins", data.data["coins"]);
      });
    setLoading(false);
  }, [setCryptoList]);

  //Get currency
  const indexOfLastCurrency = currentPage * currencyPerPage;
  const indexOfFirstCurrency = indexOfLastCurrency - currencyPerPage;
  const currencyList = cryptoList.slice(
    indexOfFirstCurrency,
    indexOfLastCurrency
  );

  //change page
  const paginate = (number) => setCurrentPage(number);

  return (
    <Fragment>
      <Helmet>
        <title> Cryptowatch</title>
      </Helmet>

      <HomeCurrencyButton
        setCurrencyName={setCurrencyName}
        setCurrencySymbol={setCurrencySymbol}
        setExchangeRate={setExchangeRate}
        currencyName={currencyName}
        currencySymbol={currencySymbol}
        exchangeRate={exchangeRate}
        name="Dashboard"
      />

      <div id="home">
        <div className="cryptoList">
          <NavCurrency
            currencyList={currencyList}
            currencySymbol={currencySymbol}
            currencyName={currencyName}
            exchangeRate={exchangeRate}
            loading={loading}
          />
        </div>
        <Pagination
          currencyPerPage={currencyPerPage}
          totalCurrencies={cryptoList.length}
          paginate={paginate}
        />
      </div>
    </Fragment>
  );
};

export default HomePage;
