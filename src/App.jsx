import React from "react";
import InputFormLocal from "./components/InputFormLocal";
import InputFormRemote from "./components/InputFormRemote";


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
  getMedia();
  return (
    <>
      <InputFormLocal/>
      <InputFormRemote/>
    </>
  )
}

export default App
