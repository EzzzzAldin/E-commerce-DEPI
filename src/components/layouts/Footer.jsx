import {
  ChevronDownIcon,
  FacebookIcon,
  InstagramIcon,
  TelegramIcon,
} from "../ui/Icons";

const columns = [
  {
    title: "Company",
    links: ["About Us", "Our Store", "Contact us"],
  },
  {
    title: "Career Opportunities",
    links: ["Selling Programs", "Advertise", "Cooperation"],
  },
  {
    title: "How to Buy",
    links: [
      "Making Payments",
      "Delivery Options",
      "Buyer Protection",
      "New User Guide",
    ],
  },
  {
    title: "Help",
    links: ["Contacts Us", "FAQ", "Privacy Policy"],
  },
];

function Footer({ variant = "default" }) {
  // L4 => View
  return (
    <footer className="footer bg-slate-200">
      {variant === "landing" && (
        <div className="footer-newsletter max-w-page mx-auto px-4 pt-10">
          <div className="flex flex-col items-center gap-5 rounded-lg bg-slate-500 px-6 py-8 text-center text-white">
            <h2 className="text-3xl font-bold">Luminae Store</h2>
            <p className="text-sm">
              Register your email not to miss the last minutes off+ Free delivery
            </p>
            <div className="flex w-full max-w-sm items-center gap-2 rounded-md bg-white px-4 py-2">
              <label htmlFor="newsletter-email" className="sr-only">
                Enter your email
              </label>
              <input
                id="newsletter-email"
                type="email"
                placeholder="Enter your email"
                className="min-w-0 flex-1 bg-transparent py-1 text-sm text-gray-800 placeholder:text-gray-400"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="size-5 shrink-0 text-gray-800"
                aria-hidden="true"
              >
                <path d="M4 12 20 4l-6 16-3-6-7-2Z" />
              </svg>
            </div>
          </div>
        </div>
      )}

      <div className="footer-main max-w-page mx-auto grid grid-cols-2 gap-8 px-4 py-12 lg:grid-cols-4">
        {columns.map((column) => (
          <nav key={column.title} aria-label={column.title}>
            <h2 className="text-base font-bold text-gray-800">
              {column.title}
            </h2>
            <ul className="mt-4 flex flex-col gap-3 text-sm text-gray-600">
              {column.links.map((link) => (
                <li key={link}>
                  <a href="#" className="hover:text-gray-800">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        ))}
      </div>

      <div className="footer-payments border-t border-white">
        <div className="max-w-page mx-auto flex items-center justify-between gap-4 px-4 py-4">
          <div
            className="flex items-center gap-4 text-base font-bold text-gray-400"
            aria-hidden="true"
          >
            <span>VISA</span>
            <span>mastercard</span>
            <span>PayPal</span>
          </div>
          <button
            type="button"
            className="flex items-center gap-1 text-sm text-gray-800"
          >
            English
            <ChevronDownIcon className="size-4" />
          </button>
        </div>
      </div>

      <div className="footer-bottom border-t border-white">
        <div className="max-w-page mx-auto flex flex-col items-center gap-4 px-4 py-6 text-xs text-gray-600 lg:flex-row lg:justify-between">
          <p>165-179 Forster Road City of Monash, Melbourne, Australia</p>
          <p>©2023 Copyright in reserved for lumine shop</p>
          <div className="flex items-center gap-4 text-gray-800">
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
      </div>
    </footer>
  );
}

export default Footer;
