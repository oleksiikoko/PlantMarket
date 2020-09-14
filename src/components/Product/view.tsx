import * as React from "react";
import { useState } from "react";

import { products } from "./../../assets/products";
import { IProductVariant } from "../../interfaces/IProduct";
import Galery from "./../Galery/view";
import PlantStylePicker from "./../PlantStylePicker/view";
import PalantSize from "./size";

interface ProductViewProps {
  //   match: any;
}

const ProductView: React.FC<ProductViewProps> = () => {
  const [curId, setCurId] = useState("1");

  const currentVariant: IProductVariant = products.variants.find(
    (item) => item.id === curId
  );

  let sizes = new Map();
  let colors = new Map();
  products.variants
    .filter(
      (item) => item.planter_style.name === currentVariant.planter_style.name
    )
    .map((item) => {
      sizes.set(item.size, item.size);
      colors.set(item.color, item.color);
    });

  let variants: Array<IProductVariant> = Array();
  products.variants.forEach((item) => {
    variants.find(
      (variant) => variant.planter_style.name === item.planter_style.name
    ) === undefined && variants.push(item);
  });

  return (
    <>
      <main role="main" className="template-product">
        <div id="shopify-section-product" className="shopify-section">
          <section className="product">
            <div className="grid-x grid-padding-x grid-padding-y">
              <div className="cell large-5 large-offset-1 gallery">
                <Galery images={currentVariant.photos} />
              </div>
              <div className="cell large-5 details">
                <div className="clearfix">
                  <div className="price float-right text-right">
                    <span data-product-price="">${currentVariant.price}</span>
                  </div>
                  <h1 className="title">{products.name}</h1>
                  <div className="rte">
                    <p>{products.description}</p>

                    <p>
                      <span>
                        <label className="option-label">
                          Note
                          <br />
                        </label>
                      </span>
                      {products.note}
                    </p>
                    <form
                      method="post"
                      action="/cart/add"
                      className="shopify-product-form"
                    >
                      <input type="hidden" name="form_type" value="product" />
                      <input type="hidden" name="utf8" value="✓" />
                      <input
                        type="hidden"
                        id="quantity"
                        name="quantity"
                        value="1"
                      />
                      <div className="js-enabled">
                        <PlantStylePicker
                          curVariant={currentVariant}
                          variants={variants}
                          onChange={setCurId}
                        />
                        <div
                          role="radiogroup"
                          className="size-options"
                          aria-labelledby="size-label"
                        >
                          <label id="size-label" className="option-label">
                            Size
                          </label>
                          <div className="js-size clearfix">
                            <button
                              type="button"
                              className="button clear float-right size-guide"
                              data-toggle="sizeGuideModal"
                              aria-controls="sizeGuideModal"
                              aria-haspopup="true"
                              tabIndex={0}
                            >
                              Size Guide
                            </button>

                            <PalantSize />
                          </div>
                        </div>

                        <div className="color-options">
                          <label className="option-label">Planter Color</label>
                          <div className="js-color">
                            <label
                              htmlFor="option-black"
                              className="input-label text-center"
                              data-option-label="Black"
                            >
                              <svg
                                height="40"
                                width="40"
                                viewBox="0 0 40 40"
                                role="img"
                              >
                                <title>Black Color Option</title>
                                <circle
                                  cx="20"
                                  cy="20"
                                  r="20"
                                  fill="#3E3832"
                                ></circle>
                              </svg>
                              <input
                                className="hide"
                                type="radio"
                                id="option-black"
                                name="options[Color]"
                                value="Black"
                                data-option-input="Black"
                              />
                              <span>Black</span>
                            </label>
                            <label
                              htmlFor="option-blush"
                              className="input-label text-center"
                              data-option-label="Blush"
                            >
                              <svg
                                height="40"
                                width="40"
                                viewBox="0 0 40 40"
                                role="img"
                              >
                                <title>Blush Color Option</title>
                                <circle
                                  cx="20"
                                  cy="20"
                                  r="20"
                                  fill="#FFD2B7"
                                ></circle>
                              </svg>
                              <input
                                className="hide"
                                type="radio"
                                id="option-blush"
                                name="options[Color]"
                                value="Blush"
                                data-option-input="Blush"
                                // checked={false}
                              />
                              <span>Blush</span>
                            </label>
                            <label
                              htmlFor="option-cream"
                              className="input-label text-center"
                              data-option-label="Cream"
                            >
                              <svg
                                height="40"
                                width="40"
                                viewBox="0 0 40 40"
                                role="img"
                              >
                                <title>Cream Color Option</title>
                                <circle
                                  cx="20"
                                  cy="20"
                                  r="20"
                                  fill="#EEE7DB"
                                ></circle>
                              </svg>
                              <input
                                className="hide"
                                type="radio"
                                id="option-cream"
                                name="options[Color]"
                                value="Cream"
                                data-option-input="Cream"
                              />
                              <span>Cream</span>
                            </label>
                            <label
                              htmlFor="option-mint"
                              className="input-label text-center"
                              data-option-label="Mint"
                            >
                              <svg
                                height="40"
                                width="40"
                                viewBox="0 0 40 40"
                                role="img"
                              >
                                <title>Mint Color Option</title>
                                <circle
                                  cx="20"
                                  cy="20"
                                  r="20"
                                  fill="#CEE0DE"
                                ></circle>
                              </svg>
                              <input
                                className="hide"
                                type="radio"
                                id="option-mint"
                                name="options[Color]"
                                value="Mint"
                                data-option-input="Mint"
                              />
                              <span>Mint</span>
                            </label>
                            <label
                              htmlFor="option-pale-grey"
                              className="input-label text-center hide"
                              data-option-label="Pale Grey"
                            >
                              <svg
                                height="40"
                                width="40"
                                viewBox="0 0 40 40"
                                role="img"
                              >
                                <title>Pale Grey Color Option</title>
                                <circle
                                  cx="20"
                                  cy="20"
                                  r="20"
                                  fill="#DCD7CB"
                                ></circle>
                              </svg>
                              <input
                                className="hide"
                                type="radio"
                                id="option-pale-grey"
                                name="options[Color]"
                                value="Pale Grey"
                                data-option-input="Pale Grey"
                                disabled={false}
                              />
                              <span>Pale Grey</span>
                            </label>
                            <label
                              htmlFor="option-terracotta"
                              className="input-label text-center"
                              data-option-label="Terracotta"
                            >
                              <svg
                                height="40"
                                width="40"
                                viewBox="0 0 40 40"
                                role="img"
                              >
                                <title>Terracotta Color Option</title>
                                <circle
                                  cx="20"
                                  cy="20"
                                  r="20"
                                  fill="#C38364"
                                ></circle>
                              </svg>
                              <input
                                className="hide"
                                type="radio"
                                id="option-terracotta"
                                name="options[Color]"
                                value="Terracotta"
                                data-option-input="Terracotta"
                              />
                              <span>Terracotta</span>
                            </label>
                          </div>
                          <div className="color-help-text hide">
                            Choose a planter from the drop down menu above to
                            see available planter colors.
                          </div>
                        </div>
                      </div>
                      <button
                        data-submit-button=""
                        type="submit"
                        id="add-to-cart"
                        className="button expanded add-to-cart"
                        style={{ marginRight: "15px", marginBottom: "15px" }}
                      >
                        <span data-submit-button-text="">
                          $65 – Add to Cart
                        </span>
                      </button>
                      <button className="GiftWizard-gift-button button expanded add-to-cart gwbutton">
                        Gift Instantly
                      </button>
                      <button
                        type="button"
                        className="button expanded klaviyo-bis-trigger hide"
                        style={{ display: "none" }}
                      >
                        Sold Out – Waitlist Me!
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
        <div
          id="shopify-section-product-details-box"
          className="shopify-section"
        ></div>
        <div
          id="shopify-section-product-plant-care"
          className="shopify-section"
        >
          <section
            className="product-plant-care"
            data-section-id="product-plant-care"
            data-section-type="product-plant-care"
          >
            <div className="grid-x grid-padding-x grid-padding-y">
              <div className="cell">
                <h3 className="section-title">Plant Care</h3>
              </div>
              <div className="cell medium-4">
                <div className="grid-x grid-padding-x grid-padding-y">
                  <div className="cell small-3 medium-12 large-2">
                    <img
                      src="//cdn.shopify.com/s/files/1/0150/6262/t/124/assets/pdp-plant-care-icon_three-quarter-sun.png?v=3916211972997425883"
                      className="section-image"
                      alt="Light Tip"
                    />
                  </div>
                  <div className="cell small-9 medium-12 large-10">
                    <h4 className="plant-care-title">Light</h4>
                    <p className="section-content">{products.care.light}</p>
                  </div>
                </div>
              </div>
              <div className="cell medium-4">
                <div className="grid-x grid-padding-x grid-padding-y">
                  <div className="cell small-3 medium-12 large-2">
                    <img
                      src="//cdn.shopify.com/s/files/1/0150/6262/t/124/assets/pdp-plant-care-icon_water-biweekly.png?v=17626310380393541439"
                      className="section-image"
                      alt="Water Tip"
                    />
                  </div>
                  <div className="cell small-9 medium-12 large-10">
                    <h4 className="plant-care-title">Water</h4>
                    <p className="section-content">{products.care.water}</p>
                  </div>
                </div>
              </div>
              <div className="cell medium-4">
                <div className="grid-x grid-padding-x grid-padding-y">
                  <div className="cell small-3 medium-12 large-2">
                    <img
                      src="//cdn.shopify.com/s/files/1/0150/6262/t/124/assets/pdp-plant-care-icon_glasses.png?v=8214002279859726268"
                      className="section-image"
                      alt="Plant Tip"
                    />
                  </div>
                  <div className="cell small-9 medium-12 large-10">
                    <h4 className="plant-care-title">Plant Tip</h4>
                    <p className="section-content">{products.care.tip}</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  );
};

export default ProductView;
