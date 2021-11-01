import React from "react";
import Chart from "../../chart/Chart";
import HomeInfo from "../homeInfo/HomeInfo";
import "./Home.css";
import WidgetLg from "../../widgetLg/WidgetLg";
import WidgetSm from "../../widgetSm/WidgetSm";
import { productData } from "../../../dummyData";

function Home() {
  return (
    <div className="home">
      {" "}
      <HomeInfo />
      <Chart
        data={productData}
        title="Product Analytics"
        grid
        dataKey="Sales"
      />
      <div className="homeWidgets">
        <WidgetSm />
        <WidgetLg />
      </div>
    </div>
  );
}

export default Home;
