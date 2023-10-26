import { About, Contact, Footer, Gallery, Header, Project } from "@components";

export const metadata = {
  title: "Arun Deshan",
  description: "My personal Portfolio",
};

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
