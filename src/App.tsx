/* eslint-disable @typescript-eslint/no-unused-vars */
import Carousel, {
  ResponsiveType,
  CarouselInternalState,
} from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./App.css";
import CarouselPage from "./components/CarouselPage";
import { useCallback, useRef, useState } from "react";
import Menu from "./components/Menu";

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
  const [currentSlide, setCurrentSlide] = useState(0);
  const [nextSlide, setNextSlide] = useState(0);
  const beforeChange = useCallback(
    (nextSlide: number, state: CarouselInternalState) => {
      setNextSlide(nextSlide);
    },
    []
  );
  const afterChange = useCallback(
    (nextSlide: number, state: CarouselInternalState) => {
      setCurrentSlide(nextSlide);
    },
    []
  );
  const setSlide = useCallback(
    (nextSlide: number) => {
      ref.current?.goToSlide(nextSlide);
    },
    []
  );
  // const animating=currentSlide!==nextSlide
  // console.log(currentSlide,nextSlide)
  return (
    <div className="main-wrapper">
      <Menu active={nextSlide} onChange={setSlide}/>
      <Carousel
        ref={ref}
        responsive={responsive}
        beforeChange={beforeChange}
        afterChange={afterChange}
      >
        <CarouselPage
          active={nextSlide === 0}
          backgroundImage="https://img.freepik.com/premium-vector/happy-valentines-day-svg-typography-quotes-t-shirt-design-bundle-romantic-lettering-love_544307-190.jpg?w=1480"
          audioFile="https://upload.wikimedia.org/wikipedia/commons/b/bb/Test_ogg_mp3_48kbps.wav"
          videoFile="https://upload.wikimedia.org/wikipedia/commons/a/a7/How_to_make_video.webm"
        />
        <CarouselPage
          active={nextSlide === 1}
          backgroundImage="https://img.freepik.com/premium-vector/happy-valentines-day-svg-typography-quotes-t-shirt-design-bundle-romantic-lettering-love_544307-190.jpg?w=1480"
          audioFile="https://upload.wikimedia.org/wikipedia/commons/b/bb/Test_ogg_mp3_48kbps.wav"
          videoFile="https://upload.wikimedia.org/wikipedia/commons/a/a7/How_to_make_video.webm"
        />
        <CarouselPage
          active={nextSlide === 2}
          backgroundImage="https://img.freepik.com/premium-vector/happy-valentines-day-svg-typography-quotes-t-shirt-design-bundle-romantic-lettering-love_544307-190.jpg?w=1480"
          audioFile="https://upload.wikimedia.org/wikipedia/commons/b/bb/Test_ogg_mp3_48kbps.wav"
          videoFile="https://upload.wikimedia.org/wikipedia/commons/a/a7/How_to_make_video.webm"
        />
        <CarouselPage
          active={nextSlide === 3}
          backgroundImage="https://img.freepik.com/premium-vector/happy-valentines-day-svg-typography-quotes-t-shirt-design-bundle-romantic-lettering-love_544307-190.jpg?w=1480"
          audioFile="https://upload.wikimedia.org/wikipedia/commons/b/bb/Test_ogg_mp3_48kbps.wav"
          videoFile="https://upload.wikimedia.org/wikipedia/commons/a/a7/How_to_make_video.webm"
        />
      </Carousel>
    </div>
  );
}

export default App;
