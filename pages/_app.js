import { ThemeProvider } from "next-themes";
import { Provider } from "react-redux";
import { useState } from "react";

import Router from "next/router";
import "../utils/i18n";
import store from "../redux/store";
import "../styles/fonts.css";
import "../styles/globals.css";
import LoadingContainer from "../containers/loadingContainer/LoadingContainer";

function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(false);
  Router.events.on("routeChangeStart", () => {
    console.log("route is changing...");
    setLoading(true);
  });
  Router.events.on("routeChangeComplete", () => {
    console.log("route change ended...");
    setLoading(false);
  });
  return (
    <>
      {loading ? (
        <LoadingContainer />
      ) : (
        <Provider store={store}>
          <ThemeProvider>
            <Component {...pageProps} />
          </ThemeProvider>
        </Provider>
      )}
    </>
  );
}

export default MyApp;
