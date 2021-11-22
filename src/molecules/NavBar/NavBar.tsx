import clsx from "clsx"
import Link from "next/link"
import styles from "./NavBar.module.scss"

interface Props {
  className?: string
}

function NavBar({ className }: Props) {
  return (
    <div className={clsx(className, styles.main)}>
      <div>
        <strong>React Repo</strong>
      </div>
      <div>
        <Link href="/">Issues</Link>
      </div>
    </div>
  )
}

export default NavBar
