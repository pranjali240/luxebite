import { useNavigate } from "react-router-dom";

import Hero from "../components/home/Hero";
import Categories from "../components/home/Categories";
import FeaturedDishes from "../components/home/FeaturedDishes";
import WhyChooseUs from "../components/home/WhyChooseUs";
import Testimonials from "../components/home/Testimonials";
import Footer from "../components/layout/Footer";

import "../styles/globals.css";
import "../styles/home.css";

export default function Home() {
  const navigate = useNavigate();

  return (
    <>
      <Hero onExplore={() => navigate("/menu")} />

      <Categories
        onSelectCuisine={(cuisine) => {
          navigate("/menu", {
            state: {
              category: cuisine,
            },
          });
        }}
      />

      <FeaturedDishes />
      <WhyChooseUs />
      <Testimonials />
      <Footer />
    </>
  );
}
