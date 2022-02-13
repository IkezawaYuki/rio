import React from "react";

const getMedia = async () => {
  const constraints = {
    audio: true,
    video: true
  };
  let stream = null;

  try {
    return await navigator.mediaDevices.getUserMedia(constraints);
  } catch {

  }
}

const App = () => {
  getMedia();
  return (
    <>
      <div>Hello World</div>
    </>
  )
}

export default App
