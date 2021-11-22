import React, { useEffect, useState } from "react"
import clsx from "clsx"
import IssueCard from "molecules/IssueCard/IssueCard"
import { Issue, specialties, Specialty } from "types/types"
import styles from "./IssueList.module.scss"

interface Props {
  className?: string
  data?: Record<"node", Issue>[]
}

function IssueList({ className, data }: Props) {
  const [issues, setIssues] = useState(data)
  const [filters, setFilters] = useState({})
  const [searchTerm, setSearchTerm] = useState("")
  const [activeFilters, setActiveFilters] = useState<Specialty[]>([])

  useEffect(() => {
    setIssues(data)
  }, [data])

  useEffect(() => {
    const active: Specialty[] = []
    for (const [key, value] of Object.entries(filters)) {
      if (value) active.push(key)
    }
    setActiveFilters(active)
  }, [filters])

  useEffect(() => {
    const filtering =
      activeFilters.length > 0 && activeFilters.length < specialties.length
    if (!searchTerm && !filtering) {
      setIssues(data)
      return
    }

    // let results = data?.filter((issue) =>
    //   issue.name.toLowerCase().includes(searchTerm)
    // )

    // if (filtering) {
    //   results = results?.filter((issue) =>
    //     issue.specialties?.some((s) => activeFilters.includes(s))
    //   )
    // }

    // setIssues(results)
  }, [activeFilters, searchTerm])

  function handleSearch(e: React.ChangeEvent<HTMLInputElement>) {
    setSearchTerm(e.target.value.toLowerCase())
  }

  function handleFilter(e: React.ChangeEvent<HTMLInputElement>) {
    const filter = e.target.id
    const checked = e.target.checked
    setFilters({ ...filters, [filter]: checked })
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
      <div className={styles.list}>
        {issues?.map((issue, i) => (
          <IssueCard key={issue.node.id} data={issue.node} />
        ))}
      </div>
    </div>
  )
}

export default IssueList
