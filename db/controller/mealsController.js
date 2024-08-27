import Meal from "../models/Meal";

export const createMeals = async (req, res) => {
    try {
        const meals = Array.isArray(req.body) ? req.body : [req.body]; // Ensure meals is an array
        const savedMeals = [];
        for (const mealData of meals) {
            const meal = new Meal(mealData);
            const savedMeal = await meal.save();
            savedMeals.push(savedMeal);
        }
        res.status(201).send(savedMeals.length === 1 ? savedMeals[0] : savedMeals);
    } catch (error) {
        res.status(400).send(error);
    }
};



export const getMeals = async (req, res) => {
    try {
        console.log("GET function STARTED");
        await new Promise((resolve) => setTimeout(resolve, 5000))
        const meals = await Meal.find({}).lean();
        return meals;
    } catch (error) {
        console.log(error);
    }
};
