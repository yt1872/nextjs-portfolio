import "../styles/globals.css";
import "../node_modules/sal.js/dist/sal.css";
import sal from "sal.js";

sal();
sal({
  once: true,
});
function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
