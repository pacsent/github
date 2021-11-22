import IssueList from "molecules/IssueList/IssueList"
import Layout from "molecules/Layout/Layout"

interface Props {
  data?: any
}

function Home({ data }: Props) {
  return (
    <Layout>
      <IssueList data={data} />
    </Layout>
  )
}

export default Home
