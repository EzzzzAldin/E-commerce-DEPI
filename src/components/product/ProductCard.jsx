import { useState } from "react";
import bag from "../../assets/photo bag.png";
import star from "../../assets/Star 2.svg";
import heartIcon from "../../assets/heart.svg?no-inline";

function ProductCard({
  variant = "flash",
  title = "Test Product",
  price = 100,
  description,
  oldPrice,
  review,
  discount,
}) {
  // L1 => Data (Sates & Global Data)
  const [isFav, setIsFav] = useState(false);
  // 1 => Add Variable , 2 => Add Setter Function, 3 => Set Initial Value
  // let isFav = false;
  // L2 => Effects
  // L3 => Logic
  // btn.addEventLitner(("click", (event) => {}))
  const favHandler = () => {
    // isFav = !isFav;
    setIsFav(!isFav);
    // console.log(isFav);
  };

  // L4 => View
  // const users = { username: "omar", age: "30" };

  // const { name, age } = users;
  // const username = users.name;
  // const userAge = users.age;
  const dis = false;

  if (variant === "top") {
    return (
      <div className="overflow-hidden rounded-lg bg-white shadow-md">
        <div className="flex aspect-square items-center justify-center bg-neutral-100">
          <img
            src={bag}
            alt={description}
            className="h-full w-full object-contain"
          />
        </div>
        <div className="p-5">
          <div className="flex items-start justify-between gap-3">
            <div>
              <h3 className="text-base font-bold text-gray-800">{title}</h3>
              <p className="text-xs text-gray-600">{description}</p>
            </div>
            <button
              type="button"
              aria-label="Toggle Fav"
              className="shrink-0"
              onClick={favHandler}
            >
              <svg
                viewBox="0 0 24 24"
                className="size-6 shrink-0 text-gray-600"
                fill={isFav ? "currentColor" : "none"}
                aria-hidden="true"
              >
                <use href={`${heartIcon}#heart-outline`} />
              </svg>
            </button>
          </div>
          <div className="mt-3 flex items-center gap-2">
            <div className="flex gap-0.5">
              <img src={star} alt="" className="size-4" />
              <img src={star} alt="" className="size-4" />
              <img src={star} alt="" className="size-4" />
              <img src={star} alt="" className="size-4" />
              <img src={star} alt="" className="size-4" />
            </div>
            <span className="text-xs text-gray-600">({review})</span>
          </div>
          <div className="mt-3 flex items-center gap-2">
            <span className="text-base font-bold text-red-off">${price}</span>
            <del className="text-sm text-gray-600">${oldPrice}</del>
            <span className="text-xs font-semibold text-red-off">
              -{discount}%
            </span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="card flex flex-col w-75 bg-white shadow-2xl rounded-lg">
      <div className="card-top flex flex-col items-center gap-1.25 py-4">
        <p className="text-sm font-extrabold text-gray-400">Deal of the Day</p>
        <div className="date flex flex-col items-center">
          <div className="flex items-center gap-1.5 text-lg font-extrabold text-gray-800">
            <span>12</span>
            <span>:</span>
            <span>43</span>
            <span>:</span>
            <span>12</span>
          </div>
          <div className="date-info flex gap-6 text-xs text-gray-400">
            <span>hour</span>
            <span>min</span>
            <span>sec</span>
          </div>
        </div>
      </div>
      <div className="card-mid flex items-center justify-center h-40.5">
        <img className="h-32 w-60 object-cover" src={bag} alt="product image" />
      </div>
      <div className="card-down flex flex-col gap-1.5 py-4 px-18.5">
        <h3 className="text-base font-bold text-gray-800">{title}</h3>
        <p className="text-xs text-gray-600">Shoulder bag-White-Plain</p>
        <div className="rating flex items-center gap-px">
          <div className="flex">
            <img className="size-3" src={star} />
            <img className="size-3" src={star} />
            <img className="size-3" src={star} />
            <img className="size-3" src={star} />
            <img className="size-3" src={star} />
          </div>
          <span>(54)</span>
        </div>
        <div className="price flex items-center justify-between">
          <span className="text-sm font-bold text-red-off">{price}$</span>
          <del className="text-xs text-gray-600">100$</del>
          {/* {dis ? (
            <span className="sale py-0.75 px-1.5 rounded-xs bg-red-off text-[8px] font-semibold text-white">
              -40%
            </span>
          ) : (
            <span> Real Price</span>
          )} */}

          {dis && (
            <span className="sale py-0.75 px-1.5 rounded-xs bg-red-off text-[8px] font-semibold text-white">
              -40%
            </span>
          )}
        </div>
        <button
          type="button"
          className="w-full rounded-md border border-gray-600 bg-white py-2 text-sm font-bold text-gray-800 hover:bg-gray-800 hover:text-white"
        >
          Add to cart
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
