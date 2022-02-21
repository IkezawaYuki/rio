import React from "react";
import InputFormLocal from "./components/InputFormLocal";
import InputFormRemote from "./components/InputFormRemote";
import VideoArea from "./components/VideoArea";
import RtcClient from "./utils/RtcClient";


const App = () => {
  const rtcClient = new RtcClient();

  return (
    <>
      <InputFormLocal rtcClient = {rtcClient}/>
      <InputFormRemote rtcClient = {rtcClient}/>
      <VideoArea rtcClient = {rtcClient} />
    </>
  )
}

export default App;
