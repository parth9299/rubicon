import { Route, Routes } from "react-router-dom";
import "./App.css";
import "./assets/scss/style.scss";
import Header from "./components/common/Header";
import Homepage from "./pages/Home/Homepage";
import Layout from "./components/common/Layout";
import gsap from "gsap";
import { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function App() {
  // const scrollContainerRef = useRef(null);

  // useEffect(() => {
  //   // Smooth scroll setup using GSAP
  //   gsap.registerPlugin(ScrollTrigger);

  //   const maxHeight = scrollContainerRef.current.scrollHeight - window.innerHeight;

  //   gsap.to(scrollContainerRef.current, {
  //     y: () => -(maxHeight > 0 ? maxHeight : 0), // Limit scrolling to the maximum height
  //     ease: 'none',
  //     scrollTrigger: {
  //       trigger: scrollContainerRef.current,
  //       start: 'top top',
  //       end: 'bottom bottom',
  //       scrub: 1,
  //       pin: true,
  //     },
  //   });
  // }, []);

  return (
    <>
      <div className="main">
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<Homepage />} />
            {/* <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/features" element={<Features />} />{" "}
          <Route path="/termsconditions" element={<TermsConditions />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} /> */}
          </Route>
          {/* <Route path="/getapp" element={<ComingSoon />} />
        <Route path="/getplan" element={<ComingSoon />} /> */}

          {/* <Route path="*" element={<NotFound />} /> */}
        </Routes>
      </div>


    </>
  );
}

export default App;
