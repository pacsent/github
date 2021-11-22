import { ApolloProvider } from "@apollo/client"
import type { AppProps } from "next/app"
import { useApollo } from "lib/apolloClient"
import "styles/globals.scss"

function MyApp({ Component, pageProps }: AppProps) {
  const apolloClient = useApollo(pageProps.initialApolloState)

  return (
    <ApolloProvider client={apolloClient}>
      <Component {...pageProps} />
    </ApolloProvider>
  )
}

export default MyApp
