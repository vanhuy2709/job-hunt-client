'use client';
import { useState } from "react";
import Image from "next/image";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import useMediaQuery from '@mui/material/useMediaQuery';
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import Alert from "@mui/material/Alert";
import Snackbar from "@mui/material/Snackbar";
import GitHubIcon from '@mui/icons-material/GitHub';
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

import { redHatDisplay, clashDisplay, epilogue } from "@/lib/font";
import { ButtonStyle } from "@/styles/ButtonStyle";
import Link from "next/link";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

const AuthSignIn = () => {
  const router = useRouter();
  const matches = useMediaQuery('(min-width:1024px)');
  const [showPassword, setShowPassword] = useState(false);

  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const [isErrorUsername, setIsErrorUsername] = useState<boolean>(false);
  const [isErrorPassword, setIsErrorPassword] = useState<boolean>(false);

  const [errorUsername, setErrorUsername] = useState<string>('');
  const [errorPassword, setErrorPassword] = useState<string>('');

  // Message
  const [openMessage, setOpenMessage] = useState<boolean>(false);
  const [message, setMessage] = useState<string>('')

  // Handle show / hide password
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  // Handle Login
  const handleLogin = async () => {
    setIsErrorUsername(false);
    setIsErrorPassword(false);
    setErrorUsername('');
    setErrorPassword('');

    if (!username) {
      setIsErrorUsername(true);
      setErrorUsername('Email is required');
      return;
    }
    if (!password) {
      setIsErrorPassword(true);
      setErrorPassword('Password is required');
      return;
    }

    const res = await signIn("credentials", {
      username: username.trim(),
      password: password.trim(),
      redirect: false
    })

    if (!res?.error) {
      router.push('/');
    } else {
      setOpenMessage(true);
      setMessage(res?.error);
    }
  }

  return (
    <>
      <Grid container height={'100vh'}>
        {
          matches ?
            <>
              <Grid item xs={5} bgcolor={'#F8F8FD'}>
                <Stack direction={'column'} justifyContent={"space-between"} alignItems={'center'} height={'100%'}>
                  {/* Logo */}
                  <Link href={'/'} style={{ textDecoration: 'none' }}>
                    <Stack direction={'row'} useFlexGap gap={'8px'} mt={'27px'} >
                      <Image
                        src={'/logo/logo-website.svg'}
                        alt='logo-website'
                        width={32}
                        height={32}
                      />
                      <Typography
                        variant="h6"
                        noWrap
                        sx={{
                          mr: 2,
                          display: { xs: 'none', md: 'flex' },
                          fontFamily: redHatDisplay.style,
                          fontSize: '24px',
                          lineHeight: '36px',
                          fontWeight: 700,
                          color: '#25324B',
                          textDecoration: 'none',
                          letterSpacing: '-0.24px',
                          cursor: 'pointer',
                        }}
                      >
                        JobHuntly
                      </Typography>
                    </Stack>
                  </Link>

                  <Image
                    priority
                    src={'/login/login-hero.png'}
                    alt="login-hero"
                    width={386}
                    height={670}
                    style={{ transform: 'scaleX(-1)' }}
                  />
                </Stack>
              </Grid>
            </>
            :
            <></>
        }

        <Grid item xs={matches ? 7 : 12}>
          <Container>
            {
              matches ?
                <></>
                :
                <>
                  {/* Logo */}
                  <Link href={'/'} style={{ textDecoration: 'none' }}>
                    <Stack direction={'row'} useFlexGap gap={'8px'} mt={'27px'} justifyContent={'center'}>
                      <Image
                        src={'/logo/logo-website.svg'}
                        alt='logo-website'
                        width={32}
                        height={32}
                      />
                      <Typography
                        variant="h6"
                        noWrap
                        sx={{
                          mr: 2,
                          display: { md: 'flex' },
                          fontFamily: redHatDisplay.style,
                          fontSize: '24px',
                          lineHeight: '36px',
                          fontWeight: 700,
                          color: '#25324B',
                          textDecoration: 'none',
                          letterSpacing: '-0.24px',
                          cursor: 'pointer'
                        }}
                      >
                        JobHuntly
                      </Typography>
                    </Stack>
                  </Link>
                </>
            }

            <Box display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'} minHeight={'100vh'}>
              <Box>

                <Typography sx={{
                  fontFamily: clashDisplay.style,
                  color: '#202430',
                  fontSize: '32px',
                  fontWeight: 600,
                  lineHeight: "120%",
                  mb: '24px',
                  textAlign: 'center'
                }}>
                  Welcome Back,
                </Typography>

                {/* Login Google */}
                <Button
                  startIcon={<Image src={'/icons/google-icon.svg'} alt="google-icon" width={20} height={20} />}
                  variant="outlined"
                  sx={{
                    py: '12px',
                    px: '16px',
                    width: '100%',
                    mb: 1
                  }}
                  onClick={() => signIn('google')}
                >
                  <Typography sx={{
                    fontFamily: epilogue.style,
                    color: '#4640DE',
                    fontWeight: 700,
                  }}>
                    Login with Google
                  </Typography>
                </Button>
                {/* Login Github */}
                <Button
                  startIcon={<GitHubIcon sx={{ color: 'black' }} />}
                  variant="outlined"
                  sx={{
                    py: '12px',
                    px: '16px',
                    width: '100%',
                  }}
                  onClick={() => signIn('github')}
                >
                  <Typography sx={{
                    fontFamily: epilogue.style,
                    color: '#4640DE',
                    fontWeight: 700,
                  }}>
                    Login with Github
                  </Typography>
                </Button>

                <Divider sx={{ my: '24px' }}>Or login with email</Divider>

                <TextField
                  label="Username"
                  variant="outlined"
                  fullWidth
                  required
                  sx={{ mb: '22px' }}
                  error={isErrorUsername}
                  helperText={errorUsername}
                  onChange={(e) => setUsername(e.target.value)}
                />
                <TextField
                  label="Password"
                  variant="outlined"
                  fullWidth
                  required
                  sx={{ mb: '22px' }}
                  type={showPassword ? 'text' : 'password'}
                  error={isErrorPassword}
                  helperText={errorPassword}
                  onChange={(e) => setPassword(e.target.value)}
                  InputProps={{
                    endAdornment: <InputAdornment position="end">
                      <IconButton
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  }}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                      handleLogin();
                    }
                  }}
                />

                <ButtonStyle
                  style={{ width: '100%', marginBottom: '24px' }}
                  onClick={() => handleLogin()}
                >
                  Login
                </ButtonStyle>

                <Typography sx={{
                  fontFamily: epilogue.style,
                  color: '#202430',
                  lineHeight: '160%',
                }}>
                  Don't have an account? <Link href={'/auth/register'}
                    style={{
                      color: '#4640DE',
                      fontWeight: 600,
                      lineHeight: '150%',
                      textDecoration: 'none'
                    }}>
                    Sign Up
                  </Link>
                </Typography>
              </Box>


            </Box>
          </Container>
        </Grid>
      </Grid>

      {/* Show message */}
      <Snackbar
        open={openMessage}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      >
        <Alert
          severity="error"
          onClose={() => setOpenMessage(false)}
        >
          {message}
        </Alert>
      </Snackbar>
    </>
  )
}

export default AuthSignIn;