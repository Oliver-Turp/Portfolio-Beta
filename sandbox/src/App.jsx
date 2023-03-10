import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useLocation,
} from "react-router-dom";
import { useLayoutEffect } from "react";

import HomePage from "./uiExamples";

import {
  Horizontal,
  DropDown,
  Hamburger,
  Carousel,
  Gallery,
  Plain,
  Multiline,
  Directory,
  Static,
  Toggle,
  MailTo,
  Form,
} from "./ExamplesExports";

import Error from "./Error";

function App() {
  const Wrapper = ({ children }) => {
    const location = useLocation();
    useLayoutEffect(() => {
      document.documentElement.scrollTo(0, 0);
    }, [location.pathname]);
    return children;
  };

  return (
    <Router basename="/">
      <Wrapper>
        <Routes location={location}>
          <Route path="/" element={<HomePage />} />
          {/* SANDBOX ROUTES */}
          {/* HEADERS */}
          <Route path="/header/horizontal" element={<Horizontal />} />
          <Route path="/header/dropdown" element={<DropDown />} />
          <Route path="/header/hamburger" element={<Hamburger />} />
          {/* IMAGE */}
          <Route path="/image/gallery" element={<Gallery />} />
          <Route path="/image/carousel" element={<Carousel />} />
          {/* CONTACT */}
          <Route path="/contact/mailto" element={<MailTo />} />
          <Route path="/contact/form" element={<Form />} />
          {/* FOOTER */}
          <Route path="/footer/plain" element={<Plain />} />
          <Route path="/footer/multiline" element={<Multiline />} />
          <Route path="/footer/directory" element={<Directory />} />
          {/* Theme */}
          <Route path="/theme/static" element={<Static />} />
          <Route path="/theme/toggle" element={<Toggle />} />
          {/* GENERAL ERROR PAGE */}
          <Route path="*" element={<Error />} />
        </Routes>
      </Wrapper>
    </Router>
  );
}

export default App;
