import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Footer, Navbar, StarsCanvas, } from "./components";
import { About, Contact, Home, Projects, Blog, Testimonials, Works } from "./pages";
import { BrowserRouter } from "react-router-dom";

const App = () => {
  return (
    <main className="bg-slate-300/50 h-[100vh">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/works" element={<Works />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/blog" element={<Blog />} />
          <Route
            path="/contact/*"
            element={
              <Routes>
                <Route
                  path="/"
                  element={
                    <>
                      <Contact />
                      <StarsCanvas /> {/* Render StarsCanvas alongside Contact */}
                    </>
                  }
                />
                {/* Other routes within contact */}
              </Routes>
            }
          />
        </Routes>
        
        <Footer />
      </BrowserRouter>
    </main>
  );
};

export default App;





