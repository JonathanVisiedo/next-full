import '../styles/layout.css'
import '../styles/globals.css'
import { ThemeProvider } from "styled-components";
import Header from "../components/Partials/Header";
import Footer from "../components/Partials/Footer";
import { UserProvider } from '@auth0/nextjs-auth0'



const theme = {
  colors: {
    primary: "#fb503b"
  }
}

function MyApp({ Component, pageProps }) {

  if(Component.getLayout) {
    return Component.getLayout(
        <UserProvider loginUrl="/api/auth/login" profileUrl="/api/auth/me">
          <ThemeProvider theme={theme}>
            <Component {...pageProps} />
          </ThemeProvider>
        </UserProvider>
    )
  }

  return <UserProvider loginUrl="/api/auth/login" profileUrl="/api/auth/me">
    <ThemeProvider theme={theme}>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </ThemeProvider>
  </UserProvider>
}

export default MyApp
