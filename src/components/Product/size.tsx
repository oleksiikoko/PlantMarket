import * as React from "react";

const PlantSize = () => {
  return (
    <>
      <label
        className="input-label size-option"
        htmlFor="option-1-small"
        data-option-label="Small"
      >
        <input
          className="hide"
          type="radio"
          id="option-1-small"
          name="options[Size]"
          value="Small"
          data-option-input="Small"
          tabIndex={-1}
        />
        <span aria-label="Small">Small</span>
      </label>
    </>
  );
};

export default PlantSize;
