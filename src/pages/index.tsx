import { useEffect } from "react"
import { useQuery } from "@apollo/client"
import { initializeApollo } from "lib/apolloClient"
import { GET_ISSUES } from "lib/queries"
import Home from "organisms/Home/Home"

export default function Index() {
  const { data, loading, error } = useQuery(GET_ISSUES)

  useEffect(() => {
    console.log({ data })
  }, [data])
  return <Home data={data?.repository.issues.edges} />
}

export async function getServerSideProps() {
  const apolloClient = initializeApollo()
  await apolloClient.query({
    query: GET_ISSUES,
  })

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
    },
  }
}
