import '@/styles/globals.css'
import PanelProvider from "../hooks/usePanel"
import Head from 'next/head'

export default function App({ Component, pageProps }) {
  return <>
    <Head>
      <title>StakedSui.info - A Dashboard to track staking rewards on Sui blockchain</title>
      <meta charSet="utf-8" />
      <meta
        name="description"
        content="StakedSui.info is a simple dashboard to track staking rewards on Sui blockchain, its APY, volumes for each validator or the whole system in real-time"
      />
      <meta name="keywords" content="sui, blockchain, staking, lido finance, legato, scallop, aftermath, figment, blockdaemon"></meta>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
    </Head>
    <PanelProvider>
      <Component {...pageProps} />
    </PanelProvider>
  </>
}
