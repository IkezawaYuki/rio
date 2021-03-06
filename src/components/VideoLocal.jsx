import React, { useEffect, useRef } from "react";
import Video from "./Video";


const VideoLocal = ({ rtcClient }) => {
  const videoRef = useRef(null);
  const currentVideoRef = videoRef.current;
  const mediaStream = rtcClient.mediaStream;

  useEffect(() => {
    if (currentVideoRef === null) return;
    const getMedia = () => {
      try {
        currentVideoRef.srcObject = mediaStream;
      } catch (err) {
        console.error(err);
      }
    }
    getMedia();
  }, [currentVideoRef, mediaStream]);

  if (rtcClient.localPeerName === "" || rtcClient.remotePeerName === "") return <></>;

  return (
    <>
      <Video 
        isLocal={true} 
        videoRef={videoRef} 
        rtcClient={rtcClient}
        name={rtcClient.localPeerName}
      />
    </>
  )
}

export default VideoLocal;