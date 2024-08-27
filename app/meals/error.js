"use client"

export default function Error({ error }) {
    console.log("ERROR : ", error);
    console.log("Error Page");

    return (
        <main className="error">
            <h1>An Error Occured!</h1>
            <p>Failed to fetch data from DB. Try Again Later.</p>
        </main>
    )
}