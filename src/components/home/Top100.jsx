import bag from "../../assets/photo bag.png";
import heartIcon from "../../assets/heart.svg?no-inline";
import star from "../../assets/Star 2.svg";

function Top100() {
  return (
    <section className="top-100 flex flex-col gap-12 max-w-page mx-auto mt-20">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-medium text-black">Top100</h2>
        <a href="#" className="flex items-center gap-1 text-sm text-gray-600">
          View all <span aria-hidden="true">›</span>
        </a>
      </div>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {/* Card 1 */}
        <div className="overflow-hidden rounded-lg bg-white shadow-md">
          <div className="flex aspect-square items-center justify-center bg-neutral-100">
            <img
              src={bag}
              alt="Quilted shoulder bag"
              className="h-full w-full object-contain"
            />
          </div>
          <div className="p-5">
            <div className="flex items-start justify-between gap-3">
              <div>
                <h3 className="text-base font-bold text-gray-800">Mango</h3>
                <p className="text-xs text-gray-600">
                  Quilted shoulder bag - White - Regular fit
                </p>
              </div>
              <svg
                viewBox="0 0 24 24"
                className="size-6 shrink-0 text-gray-600"
                aria-hidden="true"
              >
                <use href={`${heartIcon}#heart-outline`} />
              </svg>
            </div>
            <div className="mt-3 flex items-center gap-2">
              <div className="flex gap-0.5">
                <img src={star} alt="" className="size-4" />
                <img src={star} alt="" className="size-4" />
                <img src={star} alt="" className="size-4" />
                <img src={star} alt="" className="size-4" />
                <img src={star} alt="" className="size-4" />
              </div>
              <span className="text-xs text-gray-600">(289)</span>
            </div>
            <div className="mt-3 flex items-center gap-2">
              <span className="text-base font-bold text-red-off">$228</span>
              <del className="text-sm text-gray-600">$290</del>
              <span className="text-xs font-semibold text-red-off">-10%</span>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="overflow-hidden rounded-lg bg-white shadow-md">
          <div className="flex aspect-square items-center justify-center bg-neutral-100">
            <img
              src={bag}
              alt="Chain shoulder bag"
              className="h-full w-full object-contain"
            />
          </div>
          <div className="p-5">
            <div className="flex items-start justify-between gap-3">
              <div>
                <h3 className="text-base font-bold text-gray-800">Zara</h3>
                <p className="text-xs text-gray-600">
                  Chain shoulder bag - Beige - Daily fit
                </p>
              </div>
              <svg
                viewBox="0 0 24 24"
                className="size-6 shrink-0 text-gray-600"
                aria-hidden="true"
              >
                <use href={`${heartIcon}#heart-outline`} />
              </svg>
            </div>
            <div className="mt-3 flex items-center gap-2">
              <div className="flex gap-0.5">
                <img src={star} alt="" className="size-4" />
                <img src={star} alt="" className="size-4" />
                <img src={star} alt="" className="size-4" />
                <img src={star} alt="" className="size-4" />
                <img src={star} alt="" className="size-4" />
              </div>
              <span className="text-xs text-gray-600">(523)</span>
            </div>
            <div className="mt-3 flex items-center gap-2">
              <span className="text-base font-bold text-red-off">$95</span>
              <del className="text-sm text-gray-600">$145</del>
              <span className="text-xs font-semibold text-red-off">-7%</span>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="overflow-hidden rounded-lg bg-white shadow-md">
          <div className="flex aspect-square items-center justify-center bg-neutral-100">
            <img
              src={bag}
              alt="Mini shoulder bag"
              className="h-full w-full object-contain"
            />
          </div>
          <div className="p-5">
            <div className="flex items-start justify-between gap-3">
              <div>
                <h3 className="text-base font-bold text-gray-800">Uniqlo</h3>
                <p className="text-xs text-gray-600">
                  Mini shoulder bag - Black - Slim fit
                </p>
              </div>
              <svg
                viewBox="0 0 24 24"
                className="size-6 shrink-0 text-gray-600"
                aria-hidden="true"
              >
                <use href={`${heartIcon}#heart-outline`} />
              </svg>
            </div>
            <div className="mt-3 flex items-center gap-2">
              <div className="flex gap-0.5">
                <img src={star} alt="" className="size-4" />
                <img src={star} alt="" className="size-4" />
                <img src={star} alt="" className="size-4" />
                <img src={star} alt="" className="size-4" />
                <img src={star} alt="" className="size-4" />
              </div>
              <span className="text-xs text-gray-600">(86)</span>
            </div>
            <div className="mt-3 flex items-center gap-2">
              <span className="text-base font-bold text-red-off">$125</span>
              <del className="text-sm text-gray-600">$156</del>
              <span className="text-xs font-semibold text-red-off">-8%</span>
            </div>
          </div>
        </div>

        {/* Card 4 */}
        <div className="overflow-hidden rounded-lg bg-white shadow-md">
          <div className="flex aspect-square items-center justify-center bg-neutral-100">
            <img
              src={bag}
              alt="Classic shoulder bag"
              className="h-full w-full object-contain"
            />
          </div>
          <div className="p-5">
            <div className="flex items-start justify-between gap-3">
              <div>
                <h3 className="text-base font-bold text-gray-800">
                  Mango bag
                </h3>
                <p className="text-xs text-gray-600">
                  Classic shoulder bag - Cream - Timeless fit
                </p>
              </div>
              <svg
                viewBox="0 0 24 24"
                className="size-6 shrink-0 text-gray-600"
                aria-hidden="true"
              >
                <use href={`${heartIcon}#heart-outline`} />
              </svg>
            </div>
            <div className="mt-3 flex items-center gap-2">
              <div className="flex gap-0.5">
                <img src={star} alt="" className="size-4" />
                <img src={star} alt="" className="size-4" />
                <img src={star} alt="" className="size-4" />
                <img src={star} alt="" className="size-4" />
                <img src={star} alt="" className="size-4" />
              </div>
              <span className="text-xs text-gray-600">(121)</span>
            </div>
            <div className="mt-3 flex items-center gap-2">
              <span className="text-base font-bold text-red-off">$365</span>
              <del className="text-sm text-gray-600">$487</del>
              <span className="text-xs font-semibold text-red-off">-15%</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Top100;
