import { useState } from "react";

import ImageOne from "../images/image-product-1.jpg";
import ImageOneT from "../images/image-product-1-thumbnail.jpg";
import ImageTwo from "../images/image-product-2.jpg";
import ImageTwoT from "../images/image-product-2-thumbnail.jpg";
import ImageThree from "../images/image-product-3.jpg";
import ImageThreeT from "../images/image-product-3-thumbnail.jpg";
import ImageFour from "../images/image-product-4.jpg";
import ImageFourT from "../images/image-product-4-thumbnail.jpg";

import Plus from "../images/icon-plus.svg";
import Minus from "../images/icon-minus.svg";

import Cart from "../images/icon-cart-white.svg";

import Logo from "../images/logo.svg";
import Shop from "../images/icon-cart.svg";
import Avatar from "../images/image-avatar.png";
import Delete from "../images/icon-delete.svg";

import List from "../images/icon-menu.svg";
import Close from "../images/icon-close.svg";

export default function Content() {
  const [counter, setCounter] = useState<number>(1);
  const [img, setImg] = useState<string>(ImageOne);
  const [active, setActive] = useState<number>(0);
  const [price, setPrice] = useState<number>(125);
  const [discount, setDiscount] = useState<number>(250);

  const [cart, setCart] = useState<boolean>(false);
  const [checked, setChecked] = useState<boolean>(false);
  const [list, setList] = useState<boolean>(false);

  return (
    <div className="content">
      <div className="header">
        <div className="header-left">
          <img
            src={List}
            alt=""
            className="listbtn"
            onClick={() => {
              setList(!list);
            }}
          />
          <img src={Logo} alt="" className="logo" />

          <div className="section">
            <p>Collections</p>
            <p>Men</p>
            <p>Women</p>
            <p>About</p>
            <p>Contract</p>
          </div>
        </div>

        <div className="right">
          <img
            src={Shop}
            alt=""
            className="shop"
            onClick={() => {
              setCart(!cart);
            }}
          />
          <p className="amount" style={{ display: !checked ? "none" : "" }}>{counter}</p>
          <div className="cart-div" style={{ display: !cart ? "none" : "" }}>
            <h1>Cart</h1>
            <div className="items-div">
              <p
                style={{ display: checked ? "none" : "" }}
                className="cart-empty"
              >
                Your cart is Empty
              </p>

              <div
                className="buying"
                style={{ display: !checked ? "none" : "" }}
              >
                <div className="buying-items">
                  <img src={ImageOneT} alt="" />
                  <div className="info">
                    <p>Fall Limited Edition Sneakers</p>
                    <div className="amount-price">
                      <p>
                        {`$125.00 x ${counter}`}{" "}
                        <span>{`$${price}.00`}</span>{" "}
                      </p>
                    </div>
                  </div>
                  <img
                    src={Delete}
                    alt=""
                    className="delete"
                    onClick={() => {
                      setChecked(!checked);
                    }}
                  />
                </div>

                <button
                  onClick={() => {
                    setChecked(!checked);
                  }}
                >
                  Checkout
                </button>
              </div>
            </div>
          </div>
          <img src={Avatar} alt="" className="avatar" />
        </div>
      </div>

      <div className="whole">
        <div className="listed" style={{ display: !list ? "none" : "" }}>
          <div className="list">
            <img
              src={Close}
              alt=""
              onClick={() => {
                setList(!list);
              }}
            />
            <div className="list-section">
              <p>Collections</p>
              <p>Men</p>
              <p>Women</p>
              <p>About</p>
              <p>Contract</p>
            </div>
          </div>
          <div className="cover" style={{ display: !list ? "none" : "" }}></div>
        </div>
        <div className="left">
          <img src={img} alt="" className="mainImg" />
          <div className="bottom-list">
            <img
              src={ImageOneT}
              alt=""
              className={active === 0 ? "active" : ""}
              onClick={() => {
                setImg(ImageOne);
                setActive(0);
              }}
            />
            <img
              src={ImageTwoT}
              alt=""
              className={active === 1 ? "active" : ""}
              onClick={() => {
                setImg(ImageTwo);
                setActive(1);
              }}
            />
            <img
              src={ImageThreeT}
              alt=""
              className={active === 2 ? "active" : ""}
              onClick={() => {
                setImg(ImageThree);
                setActive(2);
              }}
            />
            <img
              src={ImageFourT}
              alt=""
              className={active === 3 ? "active" : ""}
              onClick={() => {
                setImg(ImageFour);
                setActive(3);
              }}
            />
          </div>
        </div>

        <div className="main">
          <span>SNEAKER COMPANY</span>
          <h1>Fall Limited Edition Sneakers</h1>
          <p>
            These low-profile sneakers are your perfect casual wear companion.
            Featuring a durable rubber outer sole, they’ll withstand everything
            the weather can offer.
          </p>

          <div className="pricing">
            <p>{`$${price}.00`}</p>
            <h3>50%</h3>
            <span>{`$${discount}.00`}</span>
          </div>

          <div className="buttons">
            <div className="counter">
              <button
                onClick={() => {
                  if (counter === 1) {
                    setCounter(1);
                    setPrice(125);
                    setDiscount(250);
                  } else {
                    setCounter(counter - 1);
                    setPrice(price - 125);
                    setDiscount(discount - 250);
                  }
                }}
              >
                <img src={Minus} alt="" />
              </button>
              <p>{counter}</p>
              <button
                onClick={() => {
                  setCounter(counter + 1);
                  setPrice(price + 125);
                  setDiscount(discount + 250);
                }}
              >
                <img src={Plus} alt="" />
              </button>
            </div>

            <button
              className="cart-button"
              onClick={() => {
                if (checked) {
                  setChecked(checked);
                } else {
                  setChecked(!checked);
                }
              }}
            >
              <img src={Cart} alt="" />
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
