import React from "react";
import Icon from '@mui/material/Icon';
import VolumeOffIcon from '@mui/icons-material/VolumeOff';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';

const VolumeButton = ({ muted, setMuted }) => {
  const Icons = muted ? VolumeOffIcon : VolumeUpIcon;
  return (
    <>
      <Icon aria-label="switch mute" onClick={() => {
        setMuted((previousState) => {
          return !previousState;
        })
      }}>
        <Icons />
      </Icon>
    </>
  );
}

export default VolumeButton;