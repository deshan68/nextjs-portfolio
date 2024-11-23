import { DataProvider } from "@context/DataContextProvider";
import "@styles/global.css";
import Head from "next/head";

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body>
        <DataProvider>
          <main className="relative">{children}</main>
        </DataProvider>
      </body>
    </html>
  );
};

export default RootLayout;
