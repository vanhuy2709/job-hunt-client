'use client'
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Image from "next/image";
import Link from "next/link";
import { ButtonStyle } from "@/styles/ButtonStyle";

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
    <Box bgcolor={'#F8F8FD'}>

      {/* Breadcrumbs */}
      <Breadcrumbs>
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

      <Box>
        <Box>
          <Image
            src={'/logo/logo-website.svg'}
            alt="logo-company"
            width={80}
            height={80}
          />
          <Box>
            <Typography>Social Media Assistant</Typography>
            <Typography>Stripe{bull}Paris, France{bull}Full-Time</Typography>
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