import styles from "../styles/globals.css";
import { ProductProvider } from "../components/ProductsContext";
import Layout from "../components/Layout";

function MyApp({ Component, pageProps }) {
  return (
    <ProductProvider>
      <Layout>
        <Component />
      </Layout>
    </ProductProvider>
  );
}

export default MyApp;
