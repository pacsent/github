import clsx from "clsx"
import { Specialty } from "types/types"
import styles from "./SpecialtyList.module.scss"

interface Props {
  className?: string
  data?: Specialty[]
}

function SpecialtyList({ className, data }: Props) {
  return (
    <div className={clsx(className, styles.main)}>
      {data?.map((specialty, index) => (
        <div className={styles.label} key={`specialty-${index}`}>
          {specialty}
        </div>
      ))}
    </div>
  )
}

export default SpecialtyList
