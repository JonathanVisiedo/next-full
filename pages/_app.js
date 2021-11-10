import '../styles/globals.css'
import { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    primary: "#fb503b"
  }
}

function MyApp({ Component, pageProps }) {
  return <ThemeProvider theme={theme}>
    <Component {...pageProps} />
  </ThemeProvider>
}

export default MyApp
