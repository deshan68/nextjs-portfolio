import { About, Contact, Footer, Gallery, Header, Project } from "@components";
import Landing from "@components/Landing";

export const metadata = {
  title: "Arun Deshan",
  description: "My personal Portfolio",
};

const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
      <Landing />
      {/* Header */}
      {/* <Header /> */}
      {/* about */}
      {/* <About /> */}
      {/* projects */}
      {/* <Project /> */}
      {/* gallery */}
      {/* <Gallery /> */}
      {/* Contact */}
      {/* <Contact /> */}
      {/* footer */}
      {/* <Footer /> */}
    </section>
  );
};

export default Home;
