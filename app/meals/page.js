import Link from "next/link"
import classes from "./page.module.css"
import MealsGrid from "@/components/Meals/MealsGrid"
import { getMeals } from "@/db/controller/mealsController"
import connectMongo from "@/db/connectMongo";
import { Suspense } from "react";
import MealsLoadingPage from "./loading-out";

async function Meals() {
    await connectMongo();
    const meals = await getMeals();
    return <MealsGrid meals={meals} />

}

export default function MealsPage() {

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
                <Suspense fallback={<MealsLoadingPage />}>
                    <Meals />
                </Suspense>
            </main>
        </>
    )
}