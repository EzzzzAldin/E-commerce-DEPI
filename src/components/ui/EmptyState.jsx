function EmptyState() {
  // L4 => View
  return (
    <div
      className="empty-state flex flex-col items-center justify-center gap-2 rounded-lg border border-gray-300 bg-white px-6 py-10 text-center"
      role="status"
    >
      <p className="text-base font-bold text-gray-800">No products available</p>
      <p className="text-sm text-gray-600">
        There are no products to show right now. Please check back later.
      </p>
    </div>
  );
}

export default EmptyState;
