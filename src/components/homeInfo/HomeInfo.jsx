import React from "react";
import "./HomeInfo.css";
import { ArrowDownward, ArrowUpward } from "@material-ui/icons";

function homeInfo() {
  return (
    <div className="homeInfo">
      <div className="homeInfoItem">
        <span className="itemTitle">Revenue</span>
        <div className="itemMoneyContainer">
          <span className="itemMoney">5,666 PKR</span>
          <span className="itemMoneyRate">
            -5,666 PKR <ArrowDownward className="itemIcon negative" />
          </span>
        </div>
        <span className="itemSubTitle">Compared to last Month</span>
      </div>
      <div className="homeInfoItem">
        <span className="itemTitle">Sales</span>
        <div className="itemMoneyContainer">
          <span className="itemMoney">5,666 PKR</span>
          <span className="itemMoneyRate">
            -5,666 PKR <ArrowDownward className="itemIcon negative" />
          </span>
        </div>
        <span className="itemSubTitle">Compared to last Month</span>
      </div>
      <div className="homeInfoItem">
        <span className="itemTitle">Cost</span>
        <div className="itemMoneyContainer">
          <span className="itemMoney">5,666 PKR</span>
          <span className="itemMoneyRate">
            2.4% <ArrowUpward className="itemIcon" />
          </span>
        </div>
        <span className="itemSubTitle">Compared to last Month</span>
      </div>
    </div>
  );
}

export default homeInfo;
