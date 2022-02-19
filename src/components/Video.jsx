import React from "react";


const Video = ({ isLocal ,name, videoRef }) => {
  return (
    <div>
      <video ref={videoRef} autoPlay muted={isLocal} />
      <div>{name}</div>
    </div>
  )
}

export default Video;