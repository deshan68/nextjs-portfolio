import Landing from "@components/Landing";

export const metadata = {
  title: "Arun Deshan",
  description: "My personal Portfolio",
};

const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
      <Landing />
    </section>
  );
};

export default Home;
