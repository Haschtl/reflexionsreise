import { useCallback, useEffect, useRef, useState } from "react";
import "./CarouselPage.scss";

interface Props {
  children?: React.ReactNode;
  backgroundImage?: string;
  audioFile?: string;
  videoFile?: string;
  active: boolean;
}
const CarouselPage: React.FC<Props> = ({
  children,
  audioFile,
  videoFile,
  backgroundImage,
  active,
}) => {
  const [videoModalOpen, setVideoModalOpen] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  useEffect(() => {
    if (!active) {
      audioRef.current?.pause();
      videoRef.current?.pause();
      setVideoModalOpen(false);
    } else if (!backgroundImage) {
      if (active) {
        videoRef.current?.play();
      } else {
        videoRef.current?.pause();
      }
    }
  }, [active]);
  const openVideo = useCallback(() => {
    setVideoModalOpen(true);
    videoRef.current?.play();
  }, []);
  const closeVideo = useCallback(() => {
    setVideoModalOpen(false);
    videoRef.current?.pause();
  }, []);
  return (
    <div className="carousel-page">
      <img className="background-image" src={backgroundImage} />
      <div className="carousel-content">
        <div className="carousel-content-inner">
          {audioFile && (
            <audio ref={audioRef} controls>
              <source src={audioFile} type="audio/mp3"></source>
            </audio>
          )}
          {/* {audioFile && <button>&#119136;</button>} */}
          {backgroundImage && videoFile && (
            <button onClick={openVideo}>&#128249;</button>
          )}
          {backgroundImage && videoFile && (
            <div
              className={`video-modal ${videoModalOpen ? "open" : "hidden"}`}
              onClick={closeVideo}
            >
              <div className="video-wrapper" onClick={stopPropagation}>
                <button className="video-close-button" onClick={closeVideo}>
                  &#10006;
                </button>
                <video className="page-video" ref={videoRef} controls>
                  <source src={videoFile}></source>
                </video>
              </div>
            </div>
          )}
          {!backgroundImage && videoFile && (
            <video className="page-video" ref={videoRef} controls>
              <source src={videoFile}></source>
            </video>
          )}
          {children}
        </div>
      </div>
    </div>
  );
};

const stopPropagation = (e: React.MouseEvent) => {
  e.stopPropagation();
};
export default CarouselPage;
