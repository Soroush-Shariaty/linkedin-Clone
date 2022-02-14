import { ThemeProvider } from "next-themes";
import { Provider } from "react-redux";
import store from "../redux/store";
import "../styles/fonts.css";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <Component {...pageProps} />
      </ThemeProvider>
    </Provider>
  );
}

export default MyApp;
