import React from "react";
import Video from "./Video";


const VideoRemote = ({ rtcClient }) => {
  const videoRef = rtcClient.remoteVideoRef;

  if (rtcClient.remotePeerName === "") return <></>;

  return (
    <>
      <Video 
        isLocal={false} 
        videoRef={videoRef} 
        rtcClient={rtcClient}
        name={rtcClient.remotePeerName}
      />
    </>
  )
}

export default VideoRemote;