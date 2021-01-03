import React from "react";
import { useHistory } from "react-router-dom";
import TrendDown from "../assets/trending-down.png";
import TrendUp from "../assets/trending-up.png";
import "./css/NavCurrency.css";

const NavCurrency = ({
  currencyList,
  loading,
  currencySymbol,
  currencyName,
  exchangeRate,
}) => {
  let history = useHistory();

  if (loading) {
    return <h4 className="fa fa-refresh fa-spin">Loading....</h4>;
  } else {
    const inlineStyles = {
      height: "35px",
    };

    return (
      <div>
        {currencyList.map((coins) => {
          return (
            <div
              key={coins.id}
              onClick={(key = { coins }) => {
                history.push(`/currency/${coins.id}`);
              }}
              // loading={loading}
            >
              {" "}
              <h4 className="symbol-container">
                <img style={inlineStyles} src={coins.iconUrl} alt="iconUrl" />
              </h4>
              <div className="bg-white p-1 m-1 rounded border row">
                <div className="col-sm my-2">
                  <div className="d-flex flex-column">
                    <span className="text-muted coin-data-category">
                      Currency
                    </span>
                    <h6 className="text-center m-1 p-1">{coins.name}</h6>
                  </div>
                </div>
                <div className="col-sm my-2">
                  <div className="d-flex flex-column">
                    <span className="text-muted coin-data-category">
                      Symbol
                    </span>
                    <span className="text-center m-1 p-1">{coins.symbol}</span>
                  </div>
                </div>
                <div className="col-sm  my-2">
                  <div className="d-flex flex-column">
                    <span className="text-muted coin-data-category">Price</span>
                    <span
                      className="text-center m-1 p-1"
                      style={{ fontSize: "bold", color: "darkgoldenrod" }}
                    >
                      {currencySymbol} &nbsp;
                      {parseFloat(coins.price * exchangeRate).toFixed(2)} &nbsp;
                      {currencyName}
                    </span>
                  </div>
                </div>

                <div className="col-sm  my-2">
                  <div className="d-flex flex-column">
                    <span className="text-muted coin-data-category">
                      Market Capital
                    </span>
                    <span className="text-center m-1 p-1">
                      {parseFloat(coins.marketCap * exchangeRate).toFixed(1)}{" "}
                      &nbsp;
                      {currencyName}
                    </span>
                  </div>
                </div>
                <div className="col-sm  my-2">
                  <div className="d-flex flex-column">
                    <span className="text-muted coin-data-category">
                      % Change(24H)
                    </span>
                    <span
                      style={{ textAlign: "center" }}
                      className={
                        coins.change < 0
                          ? "text-danger m-1 p-1"
                          : "text-success m-1 p-1 "
                      }
                    >
                      {coins.change} &nbsp;
                      <img
                        style={{ width: "30px" }}
                        src={coins.change < 0 ? TrendDown : TrendUp}
                        alt="trend"
                      />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
};
export default NavCurrency;
