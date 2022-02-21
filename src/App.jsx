import React from "react";

import useRtcClient from "./components/hooks/useRtcClient";
import VideoArea from "./components/VideoArea";
import InputForms from "./components/InputForms";


const App = () => {
  const rtcClient = useRtcClient();

  return (
    <>
      <InputForms rtcClient={rtcClient} />
      <VideoArea rtcClient={rtcClient} />
    </>
  )
}

export default App;
