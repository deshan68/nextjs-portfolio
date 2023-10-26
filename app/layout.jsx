"use client";
import { EmailBar, Navbar, SocialMediaBar } from "@components";
import Loader1 from "@components/Loader1";
import "@styles/global.css";
import { useEffect, useState } from "react";

const RootLayout = ({ children }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 2000);
  }, []);

  return (
    <html lang="en">
      <body>
        {loading ? (
          <Loader1 />
        ) : (
          <main className="relative">
            <Navbar />
            {children}

            {/* social media icons and email  */}
            <SocialMediaBar />
            <EmailBar />
          </main>
        )}
      </body>
    </html>
  );
};

export default RootLayout;
