const features = [
  {
    id: 1,
    icon: "🥗",
    title: "Fresh Ingredients",
    description:
      "Every meal is prepared using carefully selected fresh ingredients.",
  },
  {
    id: 2,
    icon: "👨‍🍳",
    title: "Expert Chefs",
    description:
      "Our chefs bring authentic flavors from cuisines around the world.",
  },
  {
    id: 3,
    icon: "🚀",
    title: "Fast Delivery",
    description:
      "Get your favorite meals delivered hot and fresh at your doorstep.",
  },
  {
    id: 4,
    icon: "⭐",
    title: "Premium Quality",
    description:
      "Luxury dining experience with exceptional taste and presentation.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="why-us">
      <div className="section-title">
        <p>Why LuxeBite</p>
        <h2>Why Choose Us</h2>
      </div>

      <div className="features-grid">
        {features.map((feature) => (
          <div key={feature.id} className="feature-card">
            <div className="feature-icon">{feature.icon}</div>

            <h3>{feature.title}</h3>

            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
