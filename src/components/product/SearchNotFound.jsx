function SearchNotFound({ query = "" }) {
  // L4 => View
  return (
    <section className="search-not-found max-w-page mx-auto mt-20 px-4">
      <div className="flex flex-col items-center gap-8 lg:flex-row lg:justify-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 420 320"
          className="w-full max-w-md"
          aria-hidden="true"
          focusable="false"
        >
          <path
            d="M55 75C85 25 175 15 245 40c70 25 135 90 115 150-20 60-120 85-205 65S-20 175 10 125c10-20 25-35 45-50Z"
            fill="#eef7f2"
          />
          <circle
            cx="195"
            cy="180"
            r="82"
            fill="none"
            stroke="#c7d9f5"
            strokeWidth="8"
          />
          <path
            d="m258 244 52 48"
            fill="none"
            stroke="#c7d9f5"
            strokeWidth="11"
            strokeLinecap="round"
          />
          <circle
            cx="195"
            cy="132"
            r="15"
            fill="#dbeafe"
            stroke="#93b4e8"
            strokeWidth="2"
          />
          <path
            d="M173 158c0-13 10-22 22-22s22 9 22 22v30h-44Z"
            fill="#ffffff"
            stroke="#93b4e8"
            strokeWidth="2"
          />
          <path
            d="M178 188v26l-9 15M210 188v26l9 15"
            fill="none"
            stroke="#93b4e8"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M215 148c22 4 34 16 40 34"
            fill="none"
            stroke="#93b4e8"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M238 55h104a20 20 0 0 1 20 20v34a20 20 0 0 1-20 20h-62l-20 20 2-20h-24a20 20 0 0 1-20-20V75a20 20 0 0 1 20-20Z"
            fill="#f28b74"
          />
          <text
            x="290"
            y="88"
            textAnchor="middle"
            fill="#ffffff"
            fontSize="15"
            fontWeight="700"
          >
            NO
          </text>
          <text
            x="290"
            y="107"
            textAnchor="middle"
            fill="#ffffff"
            fontSize="15"
            fontWeight="700"
          >
            RESULTS
          </text>
        </svg>

        <div className="w-full max-w-md rounded-md border border-gray-300 p-6 lg:min-h-36">
          <p className="text-sm text-gray-800">
            No results were found for searching{" "}
            {query && <span>&quot; {query} &quot;.</span>}
          </p>
        </div>
      </div>
    </section>
  );
}

export default SearchNotFound;
