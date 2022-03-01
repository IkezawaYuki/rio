import React, { useRef, useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

import VolumeButton from "./VolumeButton";
import useDimensions from './hooks/useDimensions';
import AudioAnalyser from './AudioAnalyser';

const Video = ({ isLocal, name, videoRef, rtcClient }) => {
  const [muted, setMuted] = useState(rtcClient.initialAudioMuted);
  const refCard = useRef(null);
  const dimensionsCard = useDimensions(refCard);


  return (
    <Card ref={refCard}>
      <video 
      ref={videoRef} 
      autoPlay 
      muted={isLocal || muted}
      width={dimensionsCard.width}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
      </CardContent>
      <CardActions>
        <VolumeButton 
          isLocal={isLocal}
          muted={muted} 
          rtcClient={rtcClient}
          setMuted={setMuted} 
        />
        {!muted && videoRef.current && videoRef.current.srcObject && ( 
          <AudioAnalyser audio={videoRef.current.srcObject} />
        )}
      </CardActions>
    </Card>
  );
}


export default Video;