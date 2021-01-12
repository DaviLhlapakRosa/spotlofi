import { ThemeProvider } from 'styled-components'
import { theme } from '../styles/theme'
import { GlobalStyle } from '../styles/global'

import Head from 'next/head'
import UserContext from '../src/contexts/user-context'
import { useState } from 'react'

export default function App({ Component, pageProps }) {

  const [authorization, setAuthorization] = useState<string>("")
  const [token, setToken] = useState<string>("")

  return (
    <UserContext.Provider value={{authorization: authorization, token: token, setToken: setToken}}>
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@400;500;700&display=swap" rel="stylesheet"></link>
      </Head>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </UserContext.Provider>
  )
}
