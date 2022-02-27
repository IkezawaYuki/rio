import React, { useRef, useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

import VolumeButton from "./VolumeButton";
import useDimensions from './hooks/useDimensions';

const Video = ({ isLocal ,name, videoRef }) => {
  const [muted, setMuted] = useState(true);
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
        <VolumeButton muted={muted} setMuted={setMuted} />
      </CardActions>
    </Card>
  );
}


export default Video;