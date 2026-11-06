import bag from "../../assets/photo bag.png";
import Section from "../ui/Section";

function Trending() {
  return (
    <Section title="Trending must-haves" classSection="trending-must-haves">
      {/* Card 1 */}
      <div className="relative aspect-[3/2] overflow-hidden rounded-lg">
        <img
          src={bag}
          alt="Elegant shoulder bag"
          className="h-full w-full object-cover"
        />
        <span className="absolute left-4 top-4 flex items-center gap-1.5 rounded-sm bg-emerald-600 px-3 py-1.5 text-xs font-semibold text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="size-4"
            aria-hidden="true"
          >
            <path d="M6 8h12l1 12H5L6 8Z" />
            <path d="M9 8V6.5a3 3 0 0 1 6 0V8" />
          </svg>
          New Arrivals
        </span>
        <div className="absolute inset-x-0 bottom-0 flex flex-col items-start gap-3 bg-gray-800/95 px-5 py-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h3 className="text-base font-bold text-white">
              Elegant shoulder bag
            </h3>
            <p className="text-sm text-gray-400">Beige-Casual</p>
          </div>
          <a
            href="#"
            className="flex shrink-0 items-center gap-2 rounded-md border border-white px-4 py-2 text-sm text-white"
          >
            <span className="font-bold">$89</span>
            <span>Shop Now</span>
          </a>
        </div>
      </div>

      {/* Card 2 */}
      <div className="relative aspect-[3/2] overflow-hidden rounded-lg">
        <img
          src={bag}
          alt="Classic leather bag"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-x-0 bottom-0 flex flex-col items-start gap-3 bg-gray-800/95 px-5 py-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h3 className="text-base font-bold text-white">
              Classic leather bag
            </h3>
            <p className="text-sm text-gray-400">Black-Formal</p>
          </div>
          <a
            href="#"
            className="flex shrink-0 items-center gap-2 rounded-md border border-white px-4 py-2 text-sm text-white"
          >
            <span className="font-bold">$89</span>
            <span>Shop Now</span>
          </a>
        </div>
      </div>

      {/* Card 3 */}
      <div className="relative aspect-[3/2] overflow-hidden rounded-lg">
        <img
          src={bag}
          alt="Beige chain bag"
          className="h-full w-full object-cover"
        />
        <span className="absolute left-4 top-4 flex items-center gap-1.5 rounded-sm bg-emerald-600 px-3 py-1.5 text-xs font-semibold text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="size-4"
            aria-hidden="true"
          >
            <path d="M6 8h12l1 12H5L6 8Z" />
            <path d="M9 8V6.5a3 3 0 0 1 6 0V8" />
          </svg>
          New Arrivals
        </span>
        <div className="absolute inset-x-0 bottom-0 flex flex-col items-start gap-3 bg-gray-800/95 px-5 py-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h3 className="text-base font-bold text-white">Beige chain bag</h3>
            <p className="text-sm text-gray-400">Cream-Brown-Formal</p>
          </div>
          <a
            href="#"
            className="flex shrink-0 items-center gap-2 rounded-md border border-white px-4 py-2 text-sm text-white"
          >
            <span className="font-bold">$102</span>
            <span>Shop Now</span>
          </a>
        </div>
      </div>
    </Section>
  );
}

export default Trending;
