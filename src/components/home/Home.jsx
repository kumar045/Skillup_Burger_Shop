// Import all the packages here

const Home = () => {
  const options = {
    initial: {
      x: "-100%",
      opacity: 0,
    },
    whileInView: {
      x: 0,
      opacity: 1,
    },
  };

  return (
    <>
      <section className="home">
        <div>
          <motion.h1 {...options}>Burger Shop</motion.h1>
          <motion.p
            {...options}
            transition={{
              delay: 0.2,
            }}
          >
            Give yourself a tasty burger.
          </motion.p>
        </div>

        <motion.a
          href="#menu"
          initial={{
            y: "-100%",
            opacity: 0,
          }}
          whileInView={{
            y: 0,
            opacity: 1,
          }}
          transition={{
            delay: 0.4,
          }}
        >
          Explore Menu
        </motion.a>
      </section>
      <Menu />

      <Founder />

      
    </>
  );
};

export default Home;
