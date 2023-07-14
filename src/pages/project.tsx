import Navbar from "@/components/Navbar"
import styles from "@/app/page.module.css"
export default function About() {
    return (
        <div>

            <main className={styles.main}>
                <Navbar />

                <div className={styles.description}>
                    <h1>About me</h1>

                </div>
            </main>
        </div>

    )
}
