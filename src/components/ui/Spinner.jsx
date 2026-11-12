function Spinner() {
  // L4 => View
  return (
    <div className="spinner flex items-center justify-center py-10" role="status">
      <span className="size-8 animate-spin rounded-full border-4 border-gray-300 border-t-gray-800" />
      <span className="sr-only">Loading products...</span>
    </div>
  );
}

export default Spinner;
