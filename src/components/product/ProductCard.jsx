import bag from "../../assets/photo bag.png";
import star from "../../assets/Star 2.svg";

function ProductCard() {
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
        <h3 className="text-base font-bold text-gray-800">Tonny Black</h3>
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
          <span className="text-sm font-bold text-red-off">50$</span>
          <del className="text-xs text-gray-600">100$</del>
          <span className="sale py-0.75 px-1.5 rounded-xs bg-red-off text-[8px] font-semibold text-white">
            -40%
          </span>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
