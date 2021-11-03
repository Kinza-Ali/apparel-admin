import React from "react";
import "./WidgetSm.css";
import { Visibility } from "@material-ui/icons";
import { img } from "../../dummyData";

function WidgetSm() {
  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">Top 5 BestSellers</span>
      <ul className="widgetSmList">
        <li className="widgetSmListItem">
          <img src={img.jeans} alt="" className="widgetSmImg" />
          <div className="widgetSmProducts">
            <span className="widgetSmProductname">Denim Jeans</span>
            <span className="widgetSmProductType">Clothing</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            View
          </button>
        </li>
        <li className="widgetSmListItem">
          <img src={img.top} className="widgetSmImg" alt="" />
          <div className="widgetSmProducts">
            <span className="widgetSmProdname">Stripe Shirt</span>
            <span className="widgetSmProductType">Clothing</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            View
          </button>
        </li>
        <li className="widgetSmListItem">
          <img src={img.jewellery} alt="" className="widgetSmImg" />
          <div className="widgetSmProducts">
            <span className="widgetSmProdname">Earings</span>
            <span className="widgetSmProductType">Jewellery</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            View
          </button>
        </li>
        <li className="widgetSmListItem">
          <img src={img.shoes} alt="" className="widgetSmImg" />
          <div className="widgetSmProducts">
            <span className="widgetSmProdname">White Kicks</span>
            <span className="widgetSmProductType">Shoes</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            View
          </button>
        </li>
        <li className="widgetSmListItem">
          <img src={img.bags} alt="" className="widgetSmImg" />
          <div className="widgetSmProducts">
            <span className="widgetSmProdname">Gucci Bag</span>
            <span className="widgetSmProductType">Bag</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            View
          </button>
        </li>
      </ul>
    </div>
  );
}

export default WidgetSm;
