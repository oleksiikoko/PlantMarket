import * as React from "react";
import { useState } from "react";
import { IProductVariant } from "../../interfaces/IProduct";

interface IPlantStylePickerProps {
  curVariant: IProductVariant;
  variants: Array<IProductVariant>;
  onChange: Function;
}

const PlantStylePicker: React.FC<IPlantStylePickerProps> = (props) => {
  const [showList, setShowList] = useState(false);
  return (
    <div className="planter-options">
      <label className="option-label" htmlFor="option-planter">
        Planter Style
      </label>
      <div className="js-planter">
        <div
          id="option-planter-container"
          className="dd-container"
          style={{ width: "100%" }}
        >
          <div
            className="dd-select"
            style={{
              width: "100%",
              background: "rgb(255, 255, 255)",
            }}
          >
            <input
              className="dd-selected-value"
              type="hidden"
              id="option-planter-selected"
              value="Hyde"
            />
            <button
              name="dd-selected-button"
              type="button"
              className="dd-selected"
              onClick={() => setShowList(!showList)}
            >
              <img
                className="dd-selected-image"
                src={props.curVariant.planter_style.img.src}
                alt="dd-selected-image"
              />
              <label
                className="dd-selected-text"
                style={{ lineHeight: "58px" }}
              >
                {props.curVariant.planter_style.name}
              </label>
            </button>
            <span
              className={`dd-pointer dd-pointer-down ${
                showList ? "dd-pointer-up" : ""
              }`}
            ></span>
          </div>
          <ul
            className="dd-options dd-click-off-close"
            style={{ width: "100%", display: showList ? "block" : "none" }}
          >
            {props.variants.map((item) => {
              return (
                <li
                  key={item.id}
                  className={`dd-option ${
                    item.id === props.curVariant.id ? "dd-option-selected" : ""
                  }`}
                  onClick={() => {
                    setShowList(false);
                    props.onChange(item.id);
                  }}
                >
                  <input
                    className="dd-option-value"
                    type="hidden"
                    value="Balboa"
                  />
                  <img
                    src={item.planter_style.img.src}
                    className="dd-option-image"
                  />
                  <label className="dd-option-text">
                    {item.planter_style.name}
                  </label>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PlantStylePicker;
