import { EmailBar, Navbar, SocialMediaBar } from "@components";
import "@styles/global.css";

export const metadata = {
  title: "developByArun",
  description: "My personal Portfolio",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <main className="relative">
          <Navbar />
          {children}
          {/* <Footer /> */}

          {/* social media icons and email  */}
          <SocialMediaBar />
          <EmailBar />
        </main>
      </body>
    </html>
  );
};

export default RootLayout;
