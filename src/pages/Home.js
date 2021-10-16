import About from "../components/about/About"

function Home() {

  const aboutStyle = {
    display: "flex",
    marginLeft: "45vw",
    marginRight: "10vw",
    borderStyle: "dotted",
    width: "min-content",
    height: "min-content"
  }

  return (
    <div style={aboutStyle} className="Home">
      <About />
    </div>
  );
}

export default Home;