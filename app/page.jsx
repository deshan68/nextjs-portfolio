import { About, Contact, Footer, Gallery, Header, Project } from "@components";
import { Test } from "./test/page";

const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
      {/* Header */}
      <Header />
      {/* about */}
      <About />
      {/* projects */}
      <Project />
      {/* gallery */}
      <Gallery />
      {/* Contact */}
      <Contact />
      {/* footer */}
      <Footer />
    </section>
  );
};

export default Home;
