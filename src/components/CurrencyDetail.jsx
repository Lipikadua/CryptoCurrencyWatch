import React from "react";
import "./css/CurrencyDetail.css";

const CurrencyDetails = ({
  data,
  currencySymbol,
  currencyName,
  exchangeRate,
}) => {
  const renderData = () => {
    if (data) {
      console.log(data);
      const currencyDetail = data["coin"];
      return (
        <div className="canvas">
          <div className=" row p-2 mx-2 rounded border">
            <div className="col-sm border-right mx-2">
              <div className="d-flex flex-column">
                <span className="coin-data-category">Market Cap</span>
                <span className="detail-container">
                  {currencyDetail.marketCap}
                </span>
              </div>
            </div>
            <div className="col-sm border-right mx-2">
              <div className="d-flex flex-column">
                <span className="coin-data-category">Total Supply</span>
                <span className="detail-container">
                  {parseFloat(currencyDetail.totalSupply).toFixed(2)}
                </span>
              </div>
            </div>
            <div className="col-sm border-right mx-2">
              <div className="d-flex flex-column">
                <span className="coin-data-category">No. Of Markets</span>
                <span className="detail-container">
                  {currencyDetail.numberOfMarkets}
                </span>
              </div>
            </div>
            <div className="col-sm border-right mx-2">
              <div className="d-flex flex-column">
                <span className=" coin-data-category">No. of Exchanges</span>
                <span className="detail-container">
                  {currencyDetail.numberOfExchanges}
                </span>
              </div>
            </div>

            <div className="col-sm border-right mx-2">
              <div className="d-flex flex-column">
                <span className="coin-data-category">High(24H)</span>
                <span className="detail-container">
                  {currencySymbol}&nbsp;
                  {parseFloat(currencyDetail["allTimeHigh"]["price"]).toFixed(
                    2
                  )}
                </span>
              </div>
            </div>
            <div className="col-sm ">
              <div className="d-flex flex-column">
                <span className="coin-data-category">Rank</span>
                <span className="detail-container" style={{ color: "red" }}>
                  {currencyDetail.rank}
                </span>
              </div>
            </div>
          </div>
          <img
            className="img-container"
            src={currencyDetail.iconUrl}
            style={{ height: "15vh", width: "15vw" }}
            alt="coin3"
          ></img>
        </div>
      );
    }
  };

  return (
    <div className="container">
      <div>{renderData()}</div>
    </div>
  );
};

export default CurrencyDetails;
