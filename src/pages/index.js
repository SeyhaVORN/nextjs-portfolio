import Head from 'next/head'
import Navbar from "../components/Navbar";
import Main from "../components/Main";
import About from "../components/About";
import Skills from "../components/Skills";
import Project from "../components/Project";
import Contact from "../components/Contact";

const Home = () => {
  return (
    <div>
      <Head>
        <title>Portfolio</title>
        <meta name="description"
              content="My name's Seyha Vorn. I’m a front-end web developer "/>
        <link rel="icon" href="/fav.png"/>
      </Head>
      <Main/>
      <About/>
      <Skills/>
      <Project/>
      <Contact/>
    </div>
  )
}

export default Home;
