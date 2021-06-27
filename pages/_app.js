import '../styles/globals.css'
import { AuthProvider } from '@/context/AuthContext'
import { GlobalProvider } from '@/context/GlobalContext'

function MyApp({ Component, pageProps }) {

  return (
    <AuthProvider>
      <GlobalProvider>
        <Component {...pageProps} />
      </GlobalProvider>
    </AuthProvider>
  )

}

export default MyApp
