import Intro from "./components/intro";
import './App.css';
import Header from "./components/header";
import SectionDivider from "./components/section-divider";
import SocialLinks from "./components/SocialLink";
import Contact from "./components/Contact";
import HeroSection from "./components/about";
import ProjectSection from "./components/ProjectSection";
import Organizations from "./components/Organizations";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";



function App() {
  return (
      <><main className="w-full h-screen bg-black overflow-x-hidden ">
        
    <Router>
    <Header />
      <Routes>
        <Route path="/" element={<Intro />} />
        <Route path="/about" element={<HeroSection/>} />
        <Route path="/experience" element={<Organizations/>} />
        <Route path="/projects" element={<ProjectSection/>} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
          <div className="w-full h-[88vh] xl:flex items-center gap-20 justify-between">
            <div className="hidden xl:inline-flex w-32 h-full fixed left-0 bottom-0">
            <SocialLinks/>
            </div>
            <div className="mx-auto p-4">
              <Intro/>
            </div>
          </div>
          <SectionDivider/>
          <div>
            <HeroSection/>
          </div>
          <div>
          <SectionDivider/>
          <Organizations/>
          </div>
          <div>
          <SectionDivider/>
          <ProjectSection/>
          </div>
          <div></div>
          <SectionDivider/>
          <Contact/>
          <p className="bottom-0 mb-4 text-white text-center flex justify-center items-center flex-row"> Made with <img src="/images/shape.png" width={27} className=""></img> by Eshita</p>
      </main>
  </>
  );
}

export default App;
