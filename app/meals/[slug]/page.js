import Image from "next/image"
import classes from "./page.module.css"
import { getMealByName } from "@/db/controller/mealsController"
import { notFound } from "next/navigation"

export default async function Meal({ params }) {
    const meal = await getMealByName(params.slug)
    if (!meal) {
        notFound()
    }
    let { title, slug, image, summary, instructions, creator, creator_email } = meal;
    console.log("Specific Meal in Page js : ", meal);
    instructions = meal.instructions.replace(/\n/g, '<br />')
    return (
        <>
            <header className={classes.header}>
                <div className={classes.image}>
                    <Image src={image} alt={title} fill />
                </div>
                <div className={classes.headerText}>
                    <h1>{title}</h1>
                    <p className={classes.creator}>
                        by <a href={`mailto:${creator_email}`}>{creator}</a>
                    </p>
                    <p className={classes.summary}>{summary}</p>
                </div>
            </header>
            <main>
                <p className={classes.instructions} dangerouslySetInnerHTML={{
                    __html: instructions
                }}></p>
            </main>
        </>
    )
}