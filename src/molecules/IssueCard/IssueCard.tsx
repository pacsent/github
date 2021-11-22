import clsx from "clsx"
import { formatRelative, subDays } from "date-fns"
import Link from "next/link"
import { Issue } from "types/types"
import styles from "./IssueCard.module.scss"

interface Props {
  className?: string
  data?: Issue
}

function IssueCard({ className, data }: Props) {
  return (
    <div className={clsx(className, styles.main)}>
      <div className={styles.titleRow}>
        <div className={styles.title}>
          <Link href={`/issues/${data?.number}`} passHref>
            <a>{data?.title}</a>
          </Link>
        </div>
      </div>

      <div className={styles.details}>
        <div>Status: {data?.closed ? "Closed" : "Open"}</div>
        <div>
          opened {formatRelative(new Date(data?.createdAt || ""), new Date())}
        </div>
      </div>
    </div>
  )
}

export default IssueCard
