import React, { useCallback, useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const Copyright = (props) => {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://github.com/IkezawaYuki/">
        IkezawaYuki
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

export default function SignInSide({ rtcClient }) {
  const label = "あなたの名前";

  const [name, setName] = useState("");
  const [disabled, setDisabled] = useState(true);
  const [isComposed, setIsComposed] = useState(false);

  const handleSubmit = (event) => {
    initializeLocalPeer(event);
  };

  useEffect(() => {
    const disabled = name.length === 0;
    setDisabled(disabled);
  }, [name]);

  const initializeLocalPeer = useCallback(async (event) => {
    event.preventDefault();
    await rtcClient.startListening(name);
  }, [name, rtcClient]);

  if (rtcClient.localPeerName !== "") return <></>;

  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: 'url(https://source.unsplash.com/random)',
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Typography component="h1" variant="h5">
              {label}を入力してください
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                label={label}
                name="name"
                autoFocus
                onChange={(e) => setName(e.target.value)}
                onCompositionEnd={() => {setIsComposed(false)}}
                onCompositionStart={() => {setIsComposed(true)}}
                onKeyDown={async (e) => {
                  if (e.target.value === "" || isComposed) {
                    return;
                  }
                  if (e.key === "Enter") {
                    await initializeLocalPeer(e);
                  }
                }}
                value={name}
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                disabled={disabled}
                onClick={async (e) => await initializeLocalPeer(e)}
              >
                決定
              </Button>
              <Copyright sx={{ mt: 5 }} />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}