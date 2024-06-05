import styles from "./Header.module.css"
import Link from "next/link"

const Navbar =() => {
    return (
        <header className={styles.header}>
            <nav className={styles.nav}>
                <ul className="flex gap-10 ">
                    <li className={styles.navItem}>
                        <Link href="/">
                            Home
                        </Link>
                    </li>
                    <li className={styles.navItem}>
                        <Link href="/blog">
                            Blog
                        </Link>
                    </li>
                    <li className={styles.navItem}>
                        <Link className={styles.navLink} href="/about">
                           About
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Navbar;