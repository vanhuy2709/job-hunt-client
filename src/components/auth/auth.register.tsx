'use client';
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Image from "next/image";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import useMediaQuery from '@mui/material/useMediaQuery';
import Container from "@mui/material/Container";
import FormControl from "@mui/material/FormControl";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Alert from "@mui/material/Alert";
import FormHelperText from "@mui/material/FormHelperText";
import Snackbar from "@mui/material/Snackbar";

import { useState } from "react";
import { redHatDisplay, clashDisplay, epilogue } from "@/lib/font";
import { ButtonStyle } from "@/styles/ButtonStyle";
import { sendRequest } from "@/utils/api";
import Link from "next/link";
import { useRouter } from "next/navigation";

const AuthRegister = () => {
  const matches = useMediaQuery('(min-width:1024px)');
  const router = useRouter();

  // Show / Hide Password
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  // Register
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [age, setAge] = useState<string>('');
  const [gender, setGender] = useState<string>('');
  const [address, setAddress] = useState<string>('');

  const [isErrorName, setIsErrorName] = useState<boolean>(false);
  const [isErrorEmail, setIsErrorEmail] = useState<boolean>(false);
  const [isErrorPassword, setIsErrorPassword] = useState<boolean>(false);
  const [isErrorAge, setIsErrorAge] = useState<boolean>(false);
  const [isErrorGender, setIsErrorGender] = useState<boolean>(false);
  const [isErrorAddress, setIsErrorAddress] = useState<boolean>(false);

  const [errorName, setErrorName] = useState<string>('');
  const [errorEmail, setErrorEmail] = useState<string>('');
  const [errorPassword, setErrorPassword] = useState<string>('');
  const [errorAge, setErrorAge] = useState<string>('');
  const [errorGender, setErrorGender] = useState<string>('');
  const [errorAddress, setErrorAddress] = useState<string>('');

  // Show / Hide Message Register
  const [openMessage, setOpenMessage] = useState<boolean>(false);
  const [message, setMessage] = useState<string>('')

  const handleRegister = async () => {
    setIsErrorName(false);
    setIsErrorEmail(false);
    setIsErrorPassword(false);
    setIsErrorAge(false);
    setIsErrorGender(false);
    setIsErrorAddress(false);

    setErrorName('');
    setErrorEmail('');
    setErrorPassword('');
    setErrorAge('');
    setErrorGender('');
    setErrorAddress('');

    if (!name) {
      setIsErrorName(true);
      setErrorName('Name is required');
      return;
    }
    if (!email) {
      setIsErrorEmail(true);
      setErrorEmail('Email is required');
      return;
    }
    if (!password) {
      setIsErrorPassword(true);
      setErrorPassword('Password is required');
      return;
    }
    if (!age) {
      setIsErrorAge(true);
      setErrorAge('Age is required');
      return;
    }
    if (!gender) {
      setIsErrorGender(true);
      setErrorGender('Gender is required');
      return;
    }
    if (!address) {
      setIsErrorAddress(true);
      setErrorAddress('Address is required');
      return;
    }

    const newUser = {
      name: name.trim(),
      email: email.trim(),
      password: password.trim(),
      age: age.trim(),
      gender,
      address: address.trim()
    }

    const res = await sendRequest<IBackendRes<Pick<IUser, '_id' | 'createdAt'>>>({
      method: 'POST',
      url: `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/auth/register`,
      body: newUser,
    })

    if (!res?.error) {
      setOpenMessage(true);
      setMessage('Register Successfully');
      router.push('/auth/signin');
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
                    <Stack direction={'row'} useFlexGap gap={'8px'} mt={'27px'}>
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
                          cursor: 'pointer'
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
                  Get more opportunities
                </Typography>

                <TextField
                  label="Name"
                  variant="outlined"
                  fullWidth
                  required
                  sx={{ mb: '22px' }}
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  error={isErrorName}
                  helperText={errorName} />
                <TextField
                  label="Email Address"
                  variant="outlined"
                  fullWidth
                  required
                  sx={{ mb: '22px' }}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  error={isErrorEmail}
                  helperText={errorEmail} />
                <TextField
                  label="Password"
                  variant="outlined"
                  fullWidth
                  required
                  type={showPassword ? 'text' : 'password'}
                  sx={{ mb: '22px' }}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  error={isErrorPassword}
                  helperText={errorPassword}
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
                  }} />
                <Grid container spacing={2}>
                  <Grid item xs={6}>
                    <TextField
                      label="Age"
                      variant="outlined"
                      type="number"
                      required
                      fullWidth
                      sx={{ mb: '22px' }}
                      value={age}
                      onChange={(e) => setAge(e.target.value)}
                      error={isErrorAge}
                      helperText={errorAge} />
                  </Grid>

                  <Grid item xs={6}>
                    <FormControl
                      fullWidth
                      required
                      error={isErrorGender}
                    >
                      <InputLabel>Gender</InputLabel>
                      <Select
                        value={gender}
                        label="Gender"
                        onChange={(e) => setGender(e.target.value)}
                      >
                        <MenuItem value={'male'}>Male</MenuItem>
                        <MenuItem value={'female'}>Female</MenuItem>
                      </Select>
                      {isErrorGender ? <FormHelperText error>{errorGender}</FormHelperText> : <></>}
                    </FormControl>
                  </Grid>
                </Grid>

                <TextField
                  label="Address"
                  variant="outlined"
                  fullWidth
                  required
                  sx={{ mb: '22px' }}
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  error={isErrorAddress}
                  helperText={errorAddress} />

                <ButtonStyle
                  style={{ width: '100%', marginBottom: '24px' }}
                  onClick={() => handleRegister()}
                >
                  Continue
                </ButtonStyle>

                <Typography sx={{
                  fontFamily: epilogue.style,
                  color: '#202430',
                  lineHeight: '160%',
                }}>
                  Already have an account? <Link href={'/auth/signin'}
                    style={{
                      color: '#4640DE',
                      fontWeight: 600,
                      lineHeight: '150%',
                      textDecoration: 'none'
                    }}>
                    Login
                  </Link>
                </Typography>
              </Box>


            </Box>
          </Container>
        </Grid>
      </Grid>

      {/* Show message */}
      <Snackbar open={openMessage} anchorOrigin={{ vertical: 'top', horizontal: 'right' }}>
        <Alert severity="success" onClose={() => setOpenMessage(false)}>
          {message}
        </Alert>
      </Snackbar>
    </>
  )
}

export default AuthRegister;