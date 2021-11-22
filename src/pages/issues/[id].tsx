import { useQuery } from "@apollo/client"
import { GetServerSidePropsContext, GetStaticPaths } from "next"
import { useRouter } from "next/router"
import { initializeApollo } from "lib/apolloClient"
import { GET_ISSUE } from "lib/queries"
import Layout from "molecules/Layout/Layout"

function Issue({ params }) {
  const { data, loading, error } = useQuery(GET_ISSUE, {
    variables: { number: parseInt(params?.id) },
  })
  const router = useRouter()
  const { id } = router.query

  console.log("issue page data: ", data)

  return (
    <Layout>
      <p>Issue: {id}</p>
      <div>{data?.repository?.issue?.body}</div>
    </Layout>
  )
}

export default Issue

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const apolloClient = initializeApollo()
  await apolloClient.query({
    query: GET_ISSUE,
    variables: {
      number: context?.params?.id && parseInt(context.params.id.toString()),
    },
  })

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
      params: context.params,
    },
  }
}

export const getStaticPaths: GetStaticPaths<{}> = async () => {
  return {
    paths: [], //indicates that no page needs be created at build time
    fallback: "blocking", //indicates the type of fallback
  }
}
