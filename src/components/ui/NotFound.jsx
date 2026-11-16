function NotFound() {
  // L4 => View
  return (
    <section className="not-found max-w-page mx-auto flex min-h-120 flex-col items-center justify-center gap-4 px-4 py-20 text-center">
      <p className="text-8xl font-bold text-red-off">404</p>
      <h1 className="text-2xl font-bold text-gray-800">Page not found</h1>
      <p className="text-sm text-gray-600">
        The page you are looking for does not exist or has been moved.
      </p>
      <a
        href="#"
        className="mt-2 rounded-md bg-gray-800 px-6 py-3 text-sm font-bold text-white"
      >
        Back to home
      </a>
    </section>
  );
}

export default NotFound;
