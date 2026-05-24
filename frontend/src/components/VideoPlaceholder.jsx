import { useRef, useState } from "react";
import { Box, Typography } from "@mui/material";
import { FaPlay } from "react-icons/fa";
import { founderDummyVideo } from "../data/content";

function VideoPlaceholder({
  label = "Video",
  src = founderDummyVideo,
  poster,
  className = "",
  hideLabel = false,
}) {
  const videoRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  const handlePlay = () => {
    setPlaying(true);
    const video = videoRef.current;
    if (!video) return;
    video.play().catch(() => setPlaying(false));
  };

  const primeThumbnail = () => {
    const video = videoRef.current;
    if (!video || poster || playing) return;
    if (video.currentTime < 0.01) {
      video.currentTime = 0.01;
    }
  };

  return (
    <Box
      className={`video-placeholder${playing ? " is-playing" : ""}${className ? ` ${className}` : ""}`}
    >
      <video
        ref={videoRef}
        className="video-placeholder-media"
        src={src}
        poster={poster}
        controls={playing}
        playsInline
        preload="metadata"
        onLoadedMetadata={primeThumbnail}
        onPause={() => {
          if (videoRef.current?.currentTime === 0) setPlaying(false);
        }}
        onEnded={() => setPlaying(false)}
        aria-label={label}
      />
      {!playing ? (
        <>
          <button
            type="button"
            className="video-placeholder-play"
            onClick={handlePlay}
            aria-label={`Play ${label}`}
          >
            <FaPlay />
          </button>
          {!hideLabel ? (
            <Typography variant="body2" className="video-placeholder-label">
              {label}
            </Typography>
          ) : null}
        </>
      ) : null}
    </Box>
  );
}

export default VideoPlaceholder;
