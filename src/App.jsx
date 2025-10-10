import Hero from "./components/Hero";
import Navigation from "./components/Navigation";
import About from "./components/About";
import Skills from "./components/Skills";
import { useInterSectionObserver } from "./hooks/useInterSectionObserver";
import Background from "./components/Background";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import ViewerCounter from './components/ViewerCounter';

import { useScrollToTop } from "./hooks/useScrollToTop";

const App = () => {
  const hasAnimated = useInterSectionObserver();
  const showScrollToTop = useScrollToTop();

  return (
    <div className="max-h-screen bg-white text-black relative">
      <Background />
      <ViewerCounter />
      <Navigation />
      <Hero hasAnimated={hasAnimated} />
      <About hasAnimated={hasAnimated} />
      <Skills hasAnimated={hasAnimated} />
      <Projects hasAnimated={hasAnimated} />
      <Contact hasAnimated={hasAnimated} />
      <Footer />
      <ScrollToTop showScrollTop={showScrollToTop} />
    </div>
  );
};

export default App;
