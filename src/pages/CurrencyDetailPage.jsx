/* eslint-disable camelcase */
import React, { useEffect, useState, Fragment } from "react";
import { Helmet } from "react-helmet";
import { useParams } from "react-router-dom";
import HistoryChart from "../components/HistoryChart";
import CurrencyDetail from "../components/CurrencyDetail";
import coinrankingApi from "../apis/coinrankingApi";
import isEmpty from "../utils/is-empty";
import DetailsCurrencyButton from "../components/DetailsCurrencyButton";

const CurrencyDetailPage = () => {
  // eslint-disable-next-line camelcase
  const { coin_id } = useParams();

  const [currencyData, setCurrencyData] = useState({});
  const [currencyName, setCurrencyName] = useState("USD");
  const [currencySymbol, setCurrencySymbol] = useState("$");
  const [isLoading, setIsLoading] = useState(false);
  const [exchangeRate, setExchangeRate] = useState(1);

  const formatData = (data) => {
    return data.map((element) => {
      return {
        t: element["timestamp"],
        y: element["price"],
      };
    });
  };

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);

      const [day, week, month, year, fiveYear, details] = await Promise.all([
        coinrankingApi.get(`coin/${coin_id}/history/24h`),

        coinrankingApi.get(`coin/${coin_id}/history/7d`),

        coinrankingApi.get(`coin/${coin_id}/history/30d`),

        coinrankingApi.get(`coin/${coin_id}/history/1y`),

        coinrankingApi.get(`coin/${coin_id}/history/5y`),

        coinrankingApi.get(`coin/${coin_id}`),
      ]);

      console.log("formatData", formatData(fiveYear.data.data.history));

      setCurrencyData({
        day: formatData(day.data.data.history),
        week: formatData(week.data.data.history),
        month: formatData(month.data.data.history),
        year: formatData(year.data.data.history),
        fiveYear: formatData(fiveYear.data.data.history),
        details: details.data.data,
      });

      setIsLoading(false);

      console.log("day", day.data.data.history);
      console.log("pricefromset", details.data.data["coin"]["price"]);
    };

    fetchData();
  }, [coin_id]);

  const renderData = () => {
    if (isLoading) {
      return <div>Loading....</div>;
    } else if (isEmpty(currencyData)) {
      return <div> wait for while....</div>;
    } else {
      return (
        <Fragment>
          <Helmet>
            <title> Crypto-Details</title>
          </Helmet>
          <DetailsCurrencyButton
            setCurrencyName={setCurrencyName}
            setCurrencySymbol={setCurrencySymbol}
            setExchangeRate={setExchangeRate}
            currencyName={currencyName}
            currencySymbol={currencySymbol}
            exchangeRate={exchangeRate}
            name={`${currencyData.details["coin"]["name"]}-Details`}
          />
          <div className="cryptoList">
            <HistoryChart
              data={currencyData}
              currencySymbol={currencySymbol}
              currencyName={currencyName}
              exchangeRate={exchangeRate}
            />

            <CurrencyDetail
              data={currencyData.details}
              currencySymbol={currencySymbol}
              currencyName={currencyName}
              exchangeRate={exchangeRate}
            />
          </div>
        </Fragment>
      );
    }
  };
  return renderData();
};

export default CurrencyDetailPage;
