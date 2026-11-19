import ReviewCard from "./ReviewCard";

const reviews = [
  {
    id: 1,
    name: "Verified customer",
    rating: 5,
    date: "May 18, 2026",
    comment: "The dress looks lovely and the fit was just right.",
  },
  {
    id: 2,
    name: "Verified customer",
    rating: 4,
    date: "May 12, 2026",
    comment: "Good quality and comfortable to wear.",
  },
  {
    id: 3,
    name: "Verified customer",
    rating: 5,
    date: "May 3, 2026",
    comment: "The details and colors are exactly what I expected.",
  },
  {
    id: 4,
    name: "Verified customer",
    rating: 5,
    date: "April 27, 2026",
    comment: "A comfortable fit and a nice finish.",
  },
  {
    id: 5,
    name: "Verified customer",
    rating: 5,
    date: "April 19, 2026",
    comment: "Very happy with this purchase.",
  },
];

function Reviews() {
  // L4 => View
  return (
    <section aria-labelledby="reviews-heading" className="flex flex-col gap-6">
      <h2 id="reviews-heading" className="text-2xl font-bold text-gray-800">
        Customer reviews
      </h2>

      <div className="grid grid-cols-1 gap-6 rounded bg-neutral-100 p-5 md:grid-cols-2">
        <div className="flex flex-col gap-2">
          <p className="text-4xl font-bold text-gray-800">4.8</p>
          <div className="flex gap-1 text-red-off" aria-label="4.8 out of 5 stars">
            {[1, 2, 3, 4, 5].map((star) => (
              <span key={star} aria-hidden="true">★</span>
            ))}
          </div>
          <p className="text-sm text-gray-600">Based on 5 reviews</p>
        </div>
        <div className="flex flex-col justify-center gap-3">
          {[5, 4, 3, 2, 1].map((rating) => (
            <div key={rating} className="flex items-center gap-3 text-sm text-gray-600">
              <span className="w-10">{rating} star</span>
              <div className="h-2 flex-1 overflow-hidden rounded bg-slate-200">
                <span
                  className={`block h-full rounded bg-blue-600 ${rating === 5 ? "w-3/4" : rating === 4 ? "w-1/2" : "w-1/4"}`}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col">
        {reviews.map((review) => (
          <ReviewCard
            key={review.id}
            name={review.name}
            rating={review.rating}
            date={review.date}
            comment={review.comment}
          />
        ))}
      </div>
    </section>
  );
}

export default Reviews;
