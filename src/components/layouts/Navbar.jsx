import {
  CartLogo,
  SearchIcon,
  ChevronDownIcon,
  InstagramIcon,
  FacebookIcon,
  TelegramIcon,
  ListIcon,
  UserIcon,
  HeartIcon,
  BagIcon,
} from "../ui/Icons";

const menuItems = [
  "Woman",
  "Male",
  "Mother-Child",
  "Home & Furniture",
  "Super market",
  "Cosmetics",
  "Shoe & Bag",
  "Electronic",
  "Sport & Outdoor",
  "Best seller",
];

function Navbar({ cartCount = 0 }) {
  // L4 => View
  return (
    <header className="header bg-white">
      <div className="header-top max-w-page mx-auto flex items-center justify-between gap-4 px-4 py-3">
        <a href="#" className="flex shrink-0 items-center gap-2">
          <CartLogo className="size-8 text-gray-800" />
          <span className="text-2xl font-bold text-gray-800">Luminae</span>
        </a>

        <div className="search flex min-w-0 flex-1 items-center rounded-md border border-gray-300 lg:max-w-85">
          <label htmlFor="search-products" className="sr-only">
            Search products
          </label>
          <input
            id="search-products"
            type="search"
            placeholder="Search Products"
            className="min-w-0 flex-1 bg-transparent px-3 py-2 text-sm text-gray-800 placeholder:text-gray-400"
          />
          <button
            type="button"
            className="flex items-center gap-1 border-l border-gray-300 px-3 py-2 text-sm text-gray-800 whitespace-nowrap"
          >
            All categories
            <ChevronDownIcon className="size-4" />
          </button>
          <button
            type="button"
            aria-label="Search"
            className="border-l border-gray-300 px-3 py-2 text-gray-800"
          >
            <SearchIcon className="size-5" />
          </button>
        </div>

        <nav
          aria-label="Secondary"
          className="hidden items-center gap-6 text-sm text-gray-800 lg:flex"
        >
          <a href="#">About us</a>
          <a href="#">Blog</a>
          <a href="#">Contact us</a>
          <a href="#">Help & support</a>
        </nav>

        <div className="hidden items-center gap-4 text-gray-400 lg:flex">
          <a href="#" aria-label="Instagram">
            <InstagramIcon className="size-5" />
          </a>
          <a href="#" aria-label="Facebook">
            <FacebookIcon className="size-5" />
          </a>
          <a href="#" aria-label="Telegram">
            <TelegramIcon className="size-5" />
          </a>
        </div>
      </div>

      <div className="header-bar bg-gray-800 text-white">
        <div className="max-w-page mx-auto flex items-center justify-between gap-4 overflow-x-auto px-4 py-3 whitespace-nowrap">
          <div className="flex shrink-0 items-center gap-5">
            <button
              type="button"
              className="flex items-center gap-2 text-sm font-bold"
            >
              <ListIcon className="size-5" />
              Categories
            </button>
            <span
              className="hidden h-6 w-px bg-gray-600 lg:block"
              aria-hidden="true"
            />
            <button type="button" className="flex items-center gap-1 text-sm">
              USD
              <ChevronDownIcon className="size-4" />
            </button>
            <button type="button" className="flex items-center gap-1 text-sm">
              English
              <ChevronDownIcon className="size-4" />
            </button>
          </div>

          <div className="hidden flex-1 items-center justify-center gap-3 lg:flex">
            <p className="text-xs font-bold">
              Weekly Men&apos;s Toiletries Coupons.
            </p>
            <p className="text-xs text-gray-400">
              We extend exclusive discounts to our male clientele
            </p>
          </div>

          <div className="flex shrink-0 items-center gap-5">
            <button type="button" className="flex items-center gap-2 text-sm">
              <UserIcon className="size-5" />
              Sign in
            </button>
            <button type="button" className="flex items-center gap-2 text-sm">
              <HeartIcon className="size-5" />
              Favorites
            </button>
            <button
              type="button"
              aria-label={`Card, ${cartCount} products`}
              className="flex items-center gap-2 text-sm"
            >
              <BagIcon className="size-5" />
              Card
              {cartCount > 0 && (
                <span className="inline-flex size-5 items-center justify-center rounded-full bg-[#3dc47e] text-xs font-bold text-white">
                  {cartCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>

      <nav aria-label="Main menu" className="border-b border-gray-200 bg-white">
        <ul className="max-w-page mx-auto flex items-center gap-8 overflow-x-auto px-4 py-4 text-sm text-gray-800 whitespace-nowrap lg:justify-between">
          {menuItems.map((item) => (
            <li key={item}>
              <a
                href="#"
                className={
                  item === "Woman" ? "font-bold text-[#ff7a00]" : undefined
                }
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
