import React, { useEffect, useRef } from "react";
import Video from "./Video";


const VideoRemote = ({ rtcClient }) => {
  const videoRef = null;
  // const currentVideoRef = videoRef.current;

  // useEffect(() => {
  //   if (currentVideoRef === null) return;
  //   const getMedia = async () => {
  //     const constraints = {
  //       audio: true,
  //       video: true
  //     };
    
  //     try {
  //       const mediaStream = await navigator.mediaDevices.getUserMedia(constraints);
  //       currentVideoRef.srcObject = mediaStream;
  //     } catch (err) {
  //       console.error(err);
  //     }
  //   }
  //   getMedia();
  // }, [currentVideoRef]);

  return (
    <>
      <Video isLocal={false} videoRef={videoRef} name={rtcClient.remotePeerName}/>
    </>
  )
}

export default VideoRemote;