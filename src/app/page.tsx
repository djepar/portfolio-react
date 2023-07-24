import Link from 'next/link'
import styles from './page.module.css'

export default function Page() {
  return (
    <main className={styles.main}>
      <h1>Hello</h1>
      <Link href='/contact'>Contact</Link>

      <Link href='/project'>Project</Link>

      
    </main>
  )
}
