import Link from "next/link"
import classes from "./page.module.css"
import MealsGrid from "@/components/Meals/MealsGrid"

export default function MealsPage() {
    return (
        <>
            <header className={classes.header}>
                <h1>
                    Delicisous meal, created{' '}
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
                <MealsGrid meals={[]} />
            </main>
        </>
    )
}