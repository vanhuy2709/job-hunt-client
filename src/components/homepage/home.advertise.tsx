import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import { epilogue } from "@/lib/font";

const HomeAdvertise = () => {
  return (
    <Box py={'48px'}>
      <Container maxWidth={"xl"}>

        {/* Title */}
        <Typography sx={{
          fontFamily: epilogue.style,
          opacity: 0.5,
          fontSize: '18px',
          lineHeight: '160%',
          mb: '32px'
        }}>
          Companies we helped grow
        </Typography>

        {/* List companies */}
        <Box display={'flex'} justifyContent={'space-between'}>
          <Image
            src={'/company/vodafone-logo.svg'}
            alt="logo-website"
            width={154}
            height={40}
          />
          <Image
            src={'/company/intel-logo.svg'}
            alt="logo-website"
            width={154}
            height={40}
          />
          <Image
            src={'/company/tesla-logo.svg'}
            alt="logo-website"
            width={154}
            height={40}
          />
          <Image
            src={'/company/amd-logo.svg'}
            alt="logo-website"
            width={154}
            height={40}
          />
          <Image
            src={'/company/talkit-logo.svg'}
            alt="logo-website"
            width={154}
            height={40}
          />
        </Box>

      </Container>
    </Box>
  )
}

export default HomeAdvertise