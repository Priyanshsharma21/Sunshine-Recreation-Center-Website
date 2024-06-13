import { useEffect, useLayoutEffect, useState } from "react";
import { Home, About, Contact, Service, SocialActivity } from './pages/index';
import { Footer, Loader, Navbar } from './components/index';
import { gsap } from "gsap";
import { Route, Routes } from 'react-router-dom';

const App = () => {
  const [loaderFinished, setLoaderFinished] = useState(false);
  const [timeline, setTimeline] = useState(null);

  useLayoutEffect(() => {
    const context = gsap.context(() => {
      const tl = gsap.timeline({
        onComplete: () => setLoaderFinished(true),
      });
      setTimeline(tl);
    });

    return () => context.revert();
  }, []);

  useEffect(() => {
    setLoaderFinished(false);
  }, []); 

  return (
    <main>
      {
        loaderFinished ? 
        (
          <>
            <Navbar />
            <Routes>
              <Route index path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/service" element={<Service />} />
              <Route path="/social-activities" element={<SocialActivity />} />
            </Routes>
            <Footer />
          </>
        )
        : <Loader timeline={timeline} />
      }
    </main>
  );
}

export default App;
