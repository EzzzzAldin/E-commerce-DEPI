function ErrorMessage({
  message = "Something went wrong. Please try again.",
}) {
  // L4 => View
  return (
    <div className="error-message flex flex-col items-center justify-center gap-4 rounded-lg border border-gray-300 bg-white px-6 py-10 text-center">
      <p className="text-sm text-gray-600" role="alert">
        {message}
      </p>
      <button
        type="button"
        className="rounded-md bg-gray-800 px-5 py-2 text-sm font-bold text-white"
      >
        Retry
      </button>
    </div>
  );
}

export default ErrorMessage;
