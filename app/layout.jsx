import "@styles/global.css";
import Head from "next/head";

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body>
        <main className="relative">{children}</main>
      </body>
    </html>
  );
};

export default RootLayout;
