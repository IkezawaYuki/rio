import React from "react";
import Icon from '@mui/material/Icon';
import VolumeOffIcon from '@mui/icons-material/VolumeOff';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';

const VolumeButton = ({ isLocal, muted, rtcClient, setMuted, refVolumButton }) => {
  const Icons = muted ? VolumeOffIcon : VolumeUpIcon;
  return (
    <>
      <Icon aria-label="switch mute" onClick={() => {
        setMuted((previousState) => {
          return !previousState;
        });
        if (isLocal) {
          rtcClient.toggleAudio();
        }
      }}
        ref={refVolumButton}
      >
        <Icons />
      </Icon>
    </>
  );
}

export default VolumeButton;