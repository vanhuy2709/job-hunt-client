'use client'
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Image from "next/image";
import Link from "next/link";
import { ButtonStyle } from "@/styles/ButtonStyle";
import AppHeadline from "../content/app.headline";
import { epilogue } from "@/lib/font";
import useMediaQuery from '@mui/material/useMediaQuery';

const bull = (
  <Box
    component="span"
    sx={{
      display: 'inline-block',
      mx: '8px',
      transform: 'scale(0.8)',
      color: '#CBCED4'
    }}>•</Box>
);

const JobDetailHeader = () => {
  const matches = useMediaQuery('(min-width:600px)');

  return (
    <Box>
      {/* Breadcrumbs */}
      <Breadcrumbs sx={{ mb: '40px' }}>
        <Link href="/" style={{ textDecoration: 'none', color: 'inherit' }}>
          Home
        </Link>
        <Link
          style={{ textDecoration: 'none', color: 'inherit' }}
          href="/material-ui/getting-started/installation/"
        >
          Core
        </Link>
        <Typography color="text.primary">Breadcrumbs</Typography>
      </Breadcrumbs>

      <Box
        sx={{
          backgroundColor: 'white',
          border: '1px solid #D6DDEB',
          p: '24px',
          display: 'flex',
          flexDirection: { xs: 'column', sm: 'row' },
          justifyContent: 'space-between',
          alignItems: { xs: 'unset', sm: 'center' }
        }}
      >
        <Box sx={{
          display: 'flex',
          flexDirection: { xs: 'column', sm: 'row' },
          alignItems: { xs: 'unset', sm: 'center' },
          gap: '24px'
        }}>
          <Image
            src={'/logo/logo-website.svg'}
            alt="logo-company"
            width={matches ? 80 : 50}
            height={matches ? 80 : 50}
          />
          <Box>
            <AppHeadline text="Social Media Assistant" />
            <Typography sx={{
              fontFamily: epilogue.style,
              lineHeight: '160%',
              color: '#515B6F',
              mb: 1
            }}>
              Stripe{bull}Paris, France{bull}Full-Time
            </Typography>
          </Box>
        </Box>

        {/* <Box> */}
        <ButtonStyle>Apply</ButtonStyle>
        {/* </Box> */}
      </Box>
    </Box>
  )
}

export default JobDetailHeader