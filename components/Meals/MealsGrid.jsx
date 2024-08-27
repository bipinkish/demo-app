import MealItem from "./MealItem";
import classes from "./meals-grid.module.css";

export default function MealsGrid({ meals }) {
    return (
        <ul className={classes.meals}>
            {meals.map((meal) => {
                console.log("Meal Item: ", meal); // Log each meal object here
                return (
                    <li key={meal.slug}>
                        <MealItem {...meal} />
                    </li>
                );
            })}
        </ul>
    );
}
