import '../styles/layout.css'
import '../styles/globals.css'
import { ThemeProvider } from "styled-components";
import Header from "../components/Partials/Header";
import Footer from "../components/Partials/Footer";

const theme = {
  colors: {
    primary: "#fb503b"
  }
}

function MyApp({ Component, pageProps }) {

  if(Component.getLayout) {
    return Component.getLayout(
        <ThemeProvider theme={theme}>
        <Component {...pageProps} />
        </ThemeProvider>
    )
  }

  return <ThemeProvider theme={theme}>
    <Header />
    <Component {...pageProps} />
    <Footer />
  </ThemeProvider>
}

export default MyApp
