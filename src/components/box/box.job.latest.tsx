import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";
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


const BoxJobLatest = () => {

  return (
    <Box
      py={{ xs: '16px', md: '24px' }}
      px={{ xs: '16px', md: '40px' }}
      bgcolor={'white'}
    >
      <Stack direction={{ xs: 'column', md: 'row' }} spacing={3}>
        <Avatar
          src="/logo/logo-website.svg"
          sx={{
            width: { xs: '48px', md: '64px' },
            height: { xs: '48px', md: '64px' }
          }} />

        <Box>
          <Typography sx={{
            fontFamily: epilogue.style,
            fontSize: '20px',
            fontWeight: 600,
            lineHeight: '120%',
            mb: 1
          }}>
            Social Media Assistant
          </Typography>
          <Typography sx={{
            fontFamily: epilogue.style,
            lineHeight: '160%',
            color: '#515B6F',
            mb: 1
          }}>
            Nomad{bull}Paris, France
          </Typography>
          <Stack direction={"row"} spacing={1}>
            <Chip label='Full-Time' sx={{
              color: '#56CDAD',
              backgroundColor: '#EFFAF7',
              fontFamily: epilogue.style,
              fontSize: '14px',
              fontWeight: 600,
              lineHeight: '160%',
            }} />

            <Divider orientation="vertical" flexItem />

            <Chip label="Marketing" sx={{
              color: '#FFB836',
              backgroundColor: 'transparent',
              fontFamily: epilogue.style,
              fontSize: '14px',
              fontWeight: 600,
              lineHeight: '160%',
              border: 1
            }} />
            <Chip label="Design " sx={{
              color: '#4640DE',
              backgroundColor: 'transparent',
              fontFamily: epilogue.style,
              fontSize: '14px',
              fontWeight: 600,
              lineHeight: '160%',
              border: 1
            }} />
          </Stack>
        </Box>
      </Stack>
    </Box>
  )
}

export default BoxJobLatest