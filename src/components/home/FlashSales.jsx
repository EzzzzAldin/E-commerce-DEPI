import bag from "../../assets/photo bag.png";
import star from "../../assets/Star 2.svg";

function FlashSales() {
  return (
    <section className="flash-sales flex flex-col gap-12 max-w-page mx-auto">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-medium text-black">Flash Sales</h2>
        <a href="#" className="flex items-center gap-1 text-sm text-gray-600">
          View all <span aria-hidden="true">›</span>
        </a>
      </div>

      <div className="flex gap-5">
        {/* Card 1 */}
        <div className="card flex flex-col w-75 bg-white shadow-2xl rounded-lg">
          <div className="card-top flex flex-col items-center gap-1.25 py-4">
            <p className="text-sm font-extrabold text-gray-400">
              Deal of the Day
            </p>
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
            <img
              className="h-32 w-60 object-cover"
              src={bag}
              alt="Shoulder bag"
            />
          </div>
          <div className="card-down flex flex-col gap-1.5 py-4 px-18.5">
            <h3 className="text-base font-bold text-gray-800">shoulder bag</h3>
            <p className="text-xs text-gray-600">Shoulder bag-White-Plain</p>
            <div className="rating flex items-center gap-px">
              <div className="flex">
                <img className="size-3" src={star} alt="" />
                <img className="size-3" src={star} alt="" />
                <img className="size-3" src={star} alt="" />
                <img className="size-3" src={star} alt="" />
                <img className="size-3" src={star} alt="" />
              </div>
              <span>(54)</span>
            </div>
            <div className="price flex items-center justify-between">
              <span className="text-sm font-bold text-red-off">150$</span>
              <del className="text-xs text-gray-600">100$</del>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="card flex flex-col w-75 bg-white shadow-2xl rounded-lg">
          <div className="card-top flex flex-col items-center gap-1.25 py-4">
            <p className="text-sm font-extrabold text-gray-400">
              Deal of the Day
            </p>
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
            <img
              className="h-32 w-60 object-cover"
              src={bag}
              alt="Shoulder bag"
            />
          </div>
          <div className="card-down flex flex-col gap-1.5 py-4 px-18.5">
            <h3 className="text-base font-bold text-gray-800">Laptop</h3>
            <p className="text-xs text-gray-600">Shoulder bag-White-Plain</p>
            <div className="rating flex items-center gap-px">
              <div className="flex">
                <img className="size-3" src={star} alt="" />
                <img className="size-3" src={star} alt="" />
                <img className="size-3" src={star} alt="" />
                <img className="size-3" src={star} alt="" />
                <img className="size-3" src={star} alt="" />
              </div>
              <span>(54)</span>
            </div>
            <div className="price flex items-center justify-between">
              <span className="text-sm font-bold text-red-off">30000$</span>
              <del className="text-xs text-gray-600">100$</del>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="card flex flex-col w-75 bg-white shadow-2xl rounded-lg">
          <div className="card-top flex flex-col items-center gap-1.25 py-4">
            <p className="text-sm font-extrabold text-gray-400">
              Deal of the Day
            </p>
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
            <img
              className="h-32 w-60 object-cover"
              src={bag}
              alt="Shoulder bag"
            />
          </div>
          <div className="card-down flex flex-col gap-1.5 py-4 px-18.5">
            <h3 className="text-base font-bold text-gray-800">Screen</h3>
            <p className="text-xs text-gray-600">Shoulder bag-White-Plain</p>
            <div className="rating flex items-center gap-px">
              <div className="flex">
                <img className="size-3" src={star} alt="" />
                <img className="size-3" src={star} alt="" />
                <img className="size-3" src={star} alt="" />
                <img className="size-3" src={star} alt="" />
                <img className="size-3" src={star} alt="" />
              </div>
              <span>(54)</span>
            </div>
            <div className="price flex items-center justify-between">
              <span className="text-sm font-bold text-red-off">20000$</span>
              <del className="text-xs text-gray-600">100$</del>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FlashSales;
