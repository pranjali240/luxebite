// import { currencyFormatter } from "../util/formatting";
// import Button from "./UI/Button";
// import { useContext } from "react";
// import CartContext from "../store/CartContext";

// export default function MealItem({ meal, onSelect }) {
//   console.log("MealItem Render");
//   const cartCtx = useContext(CartContext);

//   function handleAddMealToCart(e) {
//     e.stopPropagation(); // Modal open nahi hoga
//     cartCtx.addItem(meal);
//   }
//   function handleCardClick() {
//     console.log("clicked", meal);
//     onSelect();
//   }

//   return (
//     <li className="meal-item" onClick={() => console.log("LI CLICK")}>
//       <article onClick={() => console.log("ARTICLE CLICK")}>
//         <img src={`http://localhost:3000/${meal.image}`} alt={meal.name} />

//         <div>
//           <h3>{meal.name}</h3>

//           <p className="meal-item-price">
//             {currencyFormatter.format(meal.price)}
//           </p>

//           <p className="meal-item-description">{meal.description}</p>
//         </div>

//         <p className="meal-item-actions">
//           <Button onClick={handleAddMealToCart}>Add To Cart</Button>
//         </p>
//       </article>
//     </li>
//   );
// }
