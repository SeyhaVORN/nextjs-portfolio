import Head from 'next/head'
import Navbar from "../components/Navbar";
import Main from "../components/Main";
import About from "../components/About";
import Skills from "../components/Skills";


const Home = () => {
  return (
    <div>
      <Head>
        <title>Portfolio</title>
        <meta name="description"
              content="My name's Seyha Vorn. I’m a front-end web developer "/>
        <link rel="icon" href="/fav.png"/>
      </Head>
      <Navbar/>
      <Main/>
      <About/>
      <Skills/>
    </div>
  )
}

export default Home;
