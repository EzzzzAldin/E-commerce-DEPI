function Section({ title, classSection = "", children }) {
  return (
    <section
      className={`trending flex flex-col gap-12 max-w-page mx-auto mt-20 ${classSection}`}
    >
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-medium text-black">{title}</h2>
        <a href="#" className="flex items-center gap-1 text-sm text-gray-600">
          View all <span aria-hidden="true">›</span>
        </a>
      </div>
      <div className="flex gap-5">{children}</div>
    </section>
  );
}

export default Section;
