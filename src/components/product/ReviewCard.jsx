function ReviewCard({
  name = "Verified customer",
  rating = 5,
  comment = "The product matched my expectations and arrived in good condition.",
  date = "May 18, 2026",
}) {
  // L4 => View
  return (
    <article className="flex flex-col gap-3 border-b border-gray-300 py-5">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <h3 className="font-bold text-gray-800">{name}</h3>
        <time className="text-sm text-gray-600">{date}</time>
      </div>
      <div
        className="flex gap-1 text-red-off"
        aria-label={`${rating} out of 5 stars`}
      >
        {[1, 2, 3, 4, 5].map((star) => (
          <span key={star} aria-hidden="true">
            {star <= rating ? "★" : "☆"}
          </span>
        ))}
      </div>
      <p className="text-sm leading-6 text-gray-600">{comment}</p>
    </article>
  );
}

export default ReviewCard;
