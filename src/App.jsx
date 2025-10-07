import Hero from "./components/Hero";
import Navigation from "./components/Navigation";
import About from "./components/About";
import Skills from "./components/Skills";
import { useInterSectionObserver } from "./hooks/useInterSectionObserver";
import { useScrollToTop } from "./hooks/useScrollToTop";
import Background from "./components/Background";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";


const App = () => {
  const hasAnimated = useInterSectionObserver();
  const showScrollToTop = useScrollToTop();

  return (
    <div className="max-h-screen bg-white text-black relative">
      <Background />

      <Navigation />
      <Hero hasAnimated={hasAnimated} />
      <About hasAnimated={hasAnimated} />
      <Skills hasAnimated={hasAnimated} />
      <Projects hasAnimated={hasAnimated} />
      <Contact hasAnimated={hasAnimated} />
      <Footer />
    </div>
  );
};

export default App;
