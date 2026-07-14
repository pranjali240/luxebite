const reviews = [
  {
    id: 1,
    name: "Emily Johnson",
    rating: "★★★★★",
    review:
      "Amazing food and beautiful presentation. One of the best dining experiences!",
  },
  {
    id: 2,
    name: "Michael Brown",
    rating: "★★★★★",
    review: "Fast delivery and authentic flavors. Highly recommended!",
  },
  {
    id: 3,
    name: "Sophia Lee",
    rating: "★★★★★",
    review:
      "The interface is beautiful and the ordering process is super smooth.",
  },
];

export default function Testimonials() {
  return (
    <section className="testimonials">
      <div className="section-title">
        <p>Testimonials</p>
        <h2>What Our Customers Say</h2>
      </div>

      <div className="testimonial-grid">
        {reviews.map((review) => (
          <div key={review.id} className="testimonial-card">
            <div className="stars">{review.rating}</div>

            <p>"{review.review}"</p>

            <h4>- {review.name}</h4>
          </div>
        ))}
      </div>
    </section>
  );
}
