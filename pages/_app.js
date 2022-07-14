import '../styles/globals.css'
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import { Provider } from 'react-redux';
import store from '../reducers/store';
import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';
import Router from 'next/router'
import Layout from '../components/Layout/Layout';
import Image from 'next/image'

const theme = createTheme({ 
  palette: {
    primary: {
      light: "#757ce8",
      main: "#1b333d",
      dark: "#173947",
      contrastText: "#f1f1f1",
    },
    secondary: {
      light: '#ff7961',
      main: '#f50057',
      dark: '#c51162',
      contrastText: '#f1f1f1',
    },
  },
  typography: { fontFamily: ["Mingzat"].join(",") }
});


function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const start = () => {
      setLoading(true);
    };
    const end = () => {
      setLoading(false);
    };
    Router.events.on("routeChangeStart", start);
    Router.events.on("routeChangeComplete", end);
    Router.events.on("routeChangeError", end);
    return () => {
      Router.events.off("routeChangeStart", start);
      Router.events.off("routeChangeComplete", end);
      Router.events.off("routeChangeError", end);
    };
  }, []);
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
      {loading ? (
        <Layout>
          <div className="lds-ring"><img
              style={{margin:'0 auto', height:'50px', width:'50px'}}
              src={"/images/LogoQuarks1PNG.png"}
              alt="icon"
              className="spinner"
            /></div>
        </Layout>
      ) : (
        <Component {...pageProps} />
      )}
  </Provider>

    </ThemeProvider>
  )
  
}

export default MyApp