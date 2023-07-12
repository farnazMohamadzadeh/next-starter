import Layout from "@/components/Layout";
import { store } from "@/store/redux/store";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useEffect, useState } from "react";
import { Provider } from "react-redux";

export default function App({ Component, pageProps }: AppProps) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);
  return (
    <Provider store={store}>
      {isClient ? (
        <Layout>
          <Component {...pageProps} />
        </Layout>
      ) : (
        ""
      )}
    </Provider>
  );
}
