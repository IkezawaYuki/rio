import React, { useState } from "react";
import InputFormLocal from "./components/InputFormLocal";
import InputFormRemote from "./components/InputFormRemote";
import VideoArea from "./components/VideoArea";


const getMedia = async () => {
  const constraints = {
    audio: true,
    video: true
  };

  try {
    return await navigator.mediaDevices.getUserMedia(constraints);
  } catch (err) {
    console.error(err)
  }
}

const App = () => {
  // getMedia();
  const [localPeerName, setLocalPeerName] = useState("");
  const [remotePeerName, setRemotePeerName] = useState("");

  return (
    <>
      <InputFormLocal localPeerName={localPeerName} setLocalPeerName={setLocalPeerName} />
      <InputFormRemote localPeerName={localPeerName} remotePeerName={remotePeerName} setRemotePeerName={setRemotePeerName}/>
      <VideoArea />
    </>
  )
}

export default App
