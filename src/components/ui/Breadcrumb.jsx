function Breadcrumb({
  items = [
    { label: "Home page" },
    { label: "Category" },
    { label: "Products" },
  ],
}) {
  // L4 => View
  return (
    <nav aria-label="Breadcrumb" className="breadcrumb bg-neutral-200">
      <ol className="max-w-page mx-auto flex h-17 items-center gap-2 overflow-x-auto px-4 text-sm text-gray-600 whitespace-nowrap">
        {items.map((item, index) => (
          <li key={item.label} className="flex items-center gap-2">
            {index > 0 && <span aria-hidden="true">›</span>}
            {index === items.length - 1 ? (
              <span className="text-gray-800" aria-current="page">
                {item.label}
              </span>
            ) : (
              <a href="#" className="hover:text-gray-800">
                {item.label}
              </a>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}

export default Breadcrumb;
