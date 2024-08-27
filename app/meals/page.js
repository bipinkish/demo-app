import Link from "next/link"
import classes from "./page.module.css"
import MealsGrid from "@/components/Meals/MealsGrid"
import { getMeals } from "@/db/controller/mealsController"
import connectMongo from "@/db/connectMongo";

export default async function MealsPage() {

    await connectMongo();
    const meals = await getMeals();
    console.log("MEALS : ", meals);

    return (
        <>
            <header className={classes.header}>
                <h1>
                    Delicious meal, created{' '}
                    <span className={classes.highlight}>by you</span>
                </h1>
                <p>
                    Choose your favourite dish.
                </p>
                <p className={classes.cta}>
                    <Link href={"/meals/share"}>Share your recipe</Link>
                </p>
            </header>
            <main className={classes.main}>
                <MealsGrid meals={meals} />
            </main>
        </>
    )
}