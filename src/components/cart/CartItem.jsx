import { useState } from "react";
import bag from "../../assets/photo bag.png";

function CartItem({
  title = "Shoulder bag",
  colorName = "Beige",
  colorClass = "bg-amber-200",
  price = 150,
  initialCount = 1,
}) {
  const [itemsCount, setItemsCount] = useState(initialCount);
  const totalItems = itemsCount * price;

  return (
    <div className="flex flex-wrap items-center gap-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm">
      <img
        src={bag}
        alt={title}
        className="size-20 rounded-md object-cover"
      />
      <div className="min-w-40 flex-1">
        <h3 className="text-sm font-bold text-gray-800">{title}</h3>
        <div className="mt-2 flex items-center gap-2">
          <span
            className={`size-3 rounded-full border border-gray-300 ${colorClass}`}
          />
          <span className="text-xs text-gray-600">{colorName}</span>
        </div>
      </div>
      <span className="w-16 text-sm text-gray-600">${price}</span>
      <div className="flex items-center rounded-md border border-gray-300">
        <button
          type="button"
          aria-label="Decrease quantity"
          className="px-3 py-1 text-gray-600"
          onClick={() => setItemsCount(itemsCount > 1 ? itemsCount - 1 : 1)}
        >
          −
        </button>
        <span className="min-w-8 text-center text-sm">{itemsCount}</span>
        <button
          type="button"
          aria-label="Increase quantity"
          className="px-3 py-1 text-gray-600"
          onClick={() => setItemsCount(itemsCount + 1)}
        >
          +
        </button>
      </div>
      <span className="w-20 text-right text-sm font-bold text-gray-800">
        ${totalItems}
      </span>
      <button
        type="button"
        aria-label="Remove item"
        className="text-gray-600"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="size-5"
          aria-hidden="true"
        >
          <path d="M4 7h16" />
          <path d="M9 7V4h6v3" />
          <path d="M6 7l1 13h10l1-13" />
          <path d="M10 11v5M14 11v5" />
        </svg>
      </button>
    </div>
  );
}

export default CartItem;

