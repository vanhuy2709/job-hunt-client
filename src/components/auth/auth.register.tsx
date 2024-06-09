'use client';
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Image from "next/image";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import useMediaQuery from '@mui/material/useMediaQuery';
import Container from "@mui/material/Container";

import { redHatDisplay, clashDisplay, epilogue } from "@/lib/font";
import { ButtonStyle } from "@/styles/ButtonStyle";
import Link from "next/link";

const AuthRegister = () => {
  const matches = useMediaQuery('(min-width:1024px)');

  return (
    <>
      <Grid container height={'100vh'}>
        {
          matches ?
            <>
              <Grid item xs={5} bgcolor={'#F8F8FD'}>
                <Stack direction={'column'} justifyContent={"space-between"} alignItems={'center'} height={'100%'}>
                  {/* Logo */}
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

                <TextField label="Name" variant="outlined" fullWidth sx={{ mb: '22px' }} />
                <TextField label="Email Address" variant="outlined" fullWidth sx={{ mb: '22px' }} />
                <TextField label="Password" variant="outlined" fullWidth sx={{ mb: '22px' }} />

                <ButtonStyle style={{ width: '100%', marginBottom: '24px' }}>Continue</ButtonStyle>

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
    </>
  )
}

export default AuthRegister