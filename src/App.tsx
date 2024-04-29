/* eslint-disable @typescript-eslint/no-unused-vars */
import Carousel, {
  ResponsiveType,
  // CarouselInternalState,
} from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./App.css";
import CarouselPage from "./components/CarouselPage";
import { useCallback, useEffect, useRef, useState } from "react";
import Menu from "./components/Menu";

// Function to scroll to the bottom of the page
function scrollToBottom() {
  // Use setTimeout to allow DOM updates before scrolling
  setTimeout(() => {
    window.scrollTo(0, document.body.scrollHeight);
  }, 0);
}
const responsive: ResponsiveType = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 1,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

function App() {
  const ref = useRef<Carousel>(null);
  // const [currentSlide, setCurrentSlide] = useState(0);
  const [nextSlide, setNextSlide] = useState(0);
  const beforeChange = useCallback((nextSlide: number) => {
    setNextSlide(nextSlide);
  }, []);
  useEffect(() => {
    scrollToBottom();
    setTimeout(() => {
      const styleEl = document.createElement("style");
      document.head.appendChild(styleEl);
      styleEl.innerText = "html{scroll-behavior: smooth;}";
    }, 100);
    // styleEl.sheet?.insertRule("html{scroll-behavior: smooth;}");
  }, []);
  // const afterChange = useCallback(
  //   (nextSlide: number) => {
  //     setCurrentSlide(nextSlide);
  //   },
  //   []
  // );
  const setSlide = useCallback((nextSlide: number) => {
    ref.current?.goToSlide(nextSlide);
  }, []);
  // const animating=currentSlide!==nextSlide
  // console.log(currentSlide,nextSlide)
  return (
    <div>
      {/* <div style={{height:"200px"}}>Hi</div> */}
      <div className="main-wrapper">
        <Menu active={nextSlide} onChange={setSlide} />
        <Carousel
          ref={ref}
          responsive={responsive}
          beforeChange={beforeChange}
          // afterChange={afterChange}
        >
          <CarouselPage
            active={nextSlide === 0}
            backgroundImage={
              import.meta.env.BASE_URL + "assets/images/startseite.jpeg"
            }
          />
          <CarouselPage
            active={nextSlide === 1}
            backgroundImage={
              import.meta.env.BASE_URL + "assets/images/ende.jpeg"
            }
            audioFile={import.meta.env.BASE_URL + "assets/audio/ende.mp3"}
          />
          <CarouselPage
            active={nextSlide === 2}
            backgroundImage={
              import.meta.env.BASE_URL + "assets/images/anfang.jpeg"
            }
            audioFile={import.meta.env.BASE_URL + "assets/audio/anfang.mp3"}
          />
          <CarouselPage
            active={nextSlide === 3}
            backgroundImage={
              import.meta.env.BASE_URL + "assets/images/genesis.jpeg"
            }
            audioFile={import.meta.env.BASE_URL + "assets/audio/genesis.mp3"}
          />
          <CarouselPage
            active={nextSlide === 4}
            backgroundImage={
              import.meta.env.BASE_URL + "assets/images/inspiration.jpeg"
            }
            audioFile={
              import.meta.env.BASE_URL + "assets/audio/inspiration.mp3"
            }
          />
          <CarouselPage
            active={nextSlide === 5}
            backgroundImage={
              import.meta.env.BASE_URL + "assets/images/the-origin.jpeg"
            }
            audioFile={import.meta.env.BASE_URL + "assets/audio/theorigin.mp3"}
          />
          <CarouselPage
            active={nextSlide === 6}
            backgroundImage={
              import.meta.env.BASE_URL + "assets/images/momentum.jpeg"
            }
            audioFile={import.meta.env.BASE_URL + "assets/audio/momentum.mp3"}
          />
          <CarouselPage
            active={nextSlide === 7}
            backgroundImage={
              import.meta.env.BASE_URL + "assets/images/entscheidung.jpeg"
            }
            audioFile={
              import.meta.env.BASE_URL + "assets/audio/entscheidung.mp3"
            }
          />
          <CarouselPage
            active={nextSlide === 8}
            backgroundImage={
              import.meta.env.BASE_URL + "assets/images/introspection.jpeg"
            }
            audioFile={
              import.meta.env.BASE_URL + "assets/audio/introspection.mp3"
            }
          />
          <CarouselPage
            active={nextSlide === 9}
            backgroundImage={
              import.meta.env.BASE_URL + "assets/images/kokoro.jpeg"
            }
            audioFile={import.meta.env.BASE_URL + "assets/audio/kokoro.mp3"}
          />
          <CarouselPage
            active={nextSlide === 10}
            backgroundImage={
              import.meta.env.BASE_URL + "assets/images/Mneme.jpeg"
            }
            audioFile={import.meta.env.BASE_URL + "assets/audio/mneme.mp3"}
          />
          <CarouselPage
            active={nextSlide === 11}
            backgroundImage={
              import.meta.env.BASE_URL + "assets/images/spiegeln.jpeg"
            }
            audioFile={import.meta.env.BASE_URL + "assets/audio/spiegeln.mp3"}
          />
          <CarouselPage
            active={nextSlide === 12}
            backgroundImage={
              import.meta.env.BASE_URL + "assets/images/intention2.jpeg"
            }
            audioFile={import.meta.env.BASE_URL + "assets/audio/intention.mp3"}
          />
          <CarouselPage
            active={nextSlide === 13}
            backgroundImage={
              import.meta.env.BASE_URL + "assets/images/wandeltreppen.jpeg"
            }
            audioFile={
              import.meta.env.BASE_URL + "assets/audio/wandeltreppen.mp3"
            }
          />
          <CarouselPage
            active={nextSlide === 14}
            backgroundImage={
              import.meta.env.BASE_URL + "assets/images/glueck.jpeg"
            }
            audioFile={import.meta.env.BASE_URL + "assets/audio/glueck.mp3"}
          />
          <CarouselPage
            active={nextSlide === 15}
            backgroundImage={
              import.meta.env.BASE_URL + "assets/images/video.jpeg"
            }
            videoFile={
              import.meta.env.BASE_URL +
              "assets/video/309e52de-e6cb-4f3a-918b-0d0e22931539.mov"
            }
          />
        </Carousel>
      </div>
    </div>
  );
}

export default App;
