import Home from "./components/home";
import './App.css';
import Header from "./components/header";
import SectionDivider from "./components/section-divider";
import SocialLinks from "./components/SocialLink";
import Contact from "./components/Contact";
import About from "./components/about";
import ProjectSection from "./components/ProjectSection";
import Organizations from "./components/Organizations";



function App() {
  return (
      <><main className="w-full h-screen bg-black overflow-x-hidden px-1 ">
    <Header />
          <div className="w-full h-[88vh] xl:flex items-center gap-20 justify-between">
            <div className="hidden xl:inline-flex w-32 h-full fixed left-0 bottom-0">
            <SocialLinks/>
            </div>
            <div className="mx-auto p-4" id="home">
              <Home/>
            </div>
          </div>
          <SectionDivider/>
          <div id="about">
            <About/>
          </div>
          <div>
          <SectionDivider/>
          <Organizations/>
          </div>
          <div>
          <SectionDivider/>
          <ProjectSection/>
          </div>
          <div>
          <SectionDivider/>
          <Contact/>
          </div>
          <p className="bottom-0 mb-4 text-white text-center flex justify-center items-center flex-row"> Made with <img src="/images/shape.png" width={27} alt="heart"></img> by Eshita</p>
      </main>
  </>
  );
}

export default App;
