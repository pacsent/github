import { useEffect, useState } from "react"
import clsx from "clsx"
import IssueCard from "molecules/IssueCard/IssueCard"
import { Issue } from "types/types"
import styles from "./IssueList.module.scss"

interface Props {
  className?: string
  data?: Record<"node", Issue>[]
}

function IssueList({ className, data }: Props) {
  const [issues, setIssues] = useState(data)
  const [searchTerm, setSearchTerm] = useState<string>("")
  const [closed, setClosed] = useState<boolean>(false)

  useEffect(() => {
    setIssues(data)
  }, [data])

  useEffect(() => {
    console.log({ searchTerm, closed })

    let results = data?.filter((issue) => issue.node.closed === closed)
    console.log({ results })

    if (searchTerm) {
      results = data?.filter(
        (issue) =>
          issue.node.title?.toLowerCase().includes(searchTerm) ||
          issue.node.body?.toLowerCase().includes(searchTerm)
      )
    }

    setIssues(results)
  }, [searchTerm, closed, data])

  function handleSearch(e: React.ChangeEvent<HTMLInputElement>) {
    setSearchTerm(e.target.value.toLowerCase())
  }

  return (
    <div className={clsx(className, styles.main)}>
      <input
        type="search"
        className={styles.searchBox}
        placeholder="Search issue..."
        value={searchTerm}
        onChange={handleSearch}
      />
      <div>
        <button
          className={clsx(styles.status, !closed && styles.status_active)}
          onClick={() => setClosed(false)}
        >
          Open
        </button>
        <button
          className={clsx(styles.status, closed && styles.status_active)}
          onClick={() => setClosed(true)}
        >
          Closed
        </button>
      </div>
      <div className={styles.list}>
        {issues?.map((issue, i) => (
          <IssueCard key={issue.node.id} data={issue.node} />
        ))}
      </div>
    </div>
  )
}

export default IssueList
