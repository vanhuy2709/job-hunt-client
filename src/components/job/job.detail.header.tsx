'use client'
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Image from "next/image";
import Link from "next/link";
import { ButtonStyle } from "@/styles/ButtonStyle";
import AppHeadline from "../content/app.headline";
import { epilogue } from "@/lib/font";

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
          justifyContent: 'space-between',
          alignItems: 'center'
        }}
      >
        <Box sx={{
          display: 'flex',
          alignItems: 'center',
          gap: '24px'
        }}>
          <Image
            src={'/logo/logo-website.svg'}
            alt="logo-company"
            width={80}
            height={80}
          />
          <Box>
            <AppHeadline text="Social Media Assistant"></AppHeadline>
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

        <Box>
          <ButtonStyle>Apply</ButtonStyle>
        </Box>
      </Box>
    </Box>
  )
}

export default JobDetailHeader