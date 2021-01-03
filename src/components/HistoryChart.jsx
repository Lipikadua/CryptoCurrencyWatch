import React, { useRef, useEffect, useState } from "react";
import Chart from "chart.js";
import { historyOptions } from "../chartConfigs/chartConfigs";
import TrendDown from "../assets/trending-down.png";
import TrendUp from "../assets/trending-up.png";
// import ExchangeRate from 'react-currency-conversion';

const HistoryChart = ({ data, currencySymbol, currencyName, exchangeRate }) => {
  const chartRef = useRef();
  const { day, week, month, year, fiveYear, details } = data;
  console.log("currencynameochang", currencyName);
  const [timeFormat, setTimeFormat] = useState("24h");

  const determineTimeFormat = () => {
    switch (timeFormat) {
      case "24h":
        return day;
      case "7d":
        return week;
      case "30d":
        return month;
      case "1y":
        return year;
      case "5y":
        return fiveYear;
      default:
        return day;
    }
  };

  useEffect(() => {
    if (chartRef && chartRef.current && details) {
      const chartInstance = new Chart(chartRef.current, {
        type: "line",
        data: {
          datasets: [
            {
              label: `${details["coin"]["name"]} Time vs Price`,
              data: determineTimeFormat(),
              backgroundColor: "rgba(174, 404,494,0.6)",
              borderColor: "rgba(174, 205, 274, 0.4)",
              pointRadius: 1,
            },
          ],
        },
        options: {
          ...historyOptions,
        },
      });
    }
  });

  // console.log('currentPrice', currentPrice.price);
  // console.log('CurrenyPrice' , currencyPrice.price);

  const renderPrice = () => {
    if (details) {
      return (
        <div>
          <p
            className="my-0 mb-0"
            style={{ color: "darkcyan", fontWeight: "20px" }}
          >
            {currencySymbol} &nbsp;
            {parseFloat(details["coin"]["price"] * exchangeRate).toFixed(2)}
            &nbsp;{currencyName}
          </p>
          <span
            className={
              details["coin"]["change"] < 0
                ? "text-danger my-0"
                : "text-success my-0"
            }
          >
            {details["coin"]["change"]}%
            <img
              style={{ width: "30px" }}
              src={details["coin"]["change"] < 0 ? TrendDown : TrendUp}
              alt="trend"
            />
          </span>
        </div>
      );
    }
  };

  return (
    <div className="bg-white border mt-2 p-3">
      <div>{renderPrice()}</div>

      <div>
        <canvas ref={chartRef} id="myChart" width={250} height={250}></canvas>
      </div>

      <div className="chart-button mt-1">
        <button
          onClick={() => setTimeFormat("24h")}
          className="btn btn-outline-secondary btn-sm"
        >
          24h
        </button>
        <button
          onClick={() => setTimeFormat("7d")}
          className="btn btn-outline-secondary btn-sm mx-1"
        >
          7d
        </button>
        <button
          onClick={() => setTimeFormat("30d")}
          className="btn btn-outline-secondary btn-sm"
        >
          30d
        </button>
        <button
          onClick={() => setTimeFormat("1y")}
          className="btn btn-outline-secondary btn-sm mx-1"
        >
          1y
        </button>
        <button
          onClick={() => setTimeFormat("5y")}
          className="btn btn-outline-secondary btn-sm"
        >
          5y
        </button>
      </div>
    </div>
  );
};

export default HistoryChart;
